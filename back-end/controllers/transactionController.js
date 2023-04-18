const Transaction = require("../models/Transactions.js");
const User = require("../models/User.js");
//const stripe = require("stripe")(process.env.STRIPE_KEY);
const { uuid } = require("uuidv4");

// transfer money from one account to another

const transactionController = async (req, res) => {
  try {
    // save the transaction
    const newTransaction = new Transaction(req.body);
    await newTransaction.save();

    // decrease the sender's balance
    await User.findByIdAndUpdate(req.body.sender, {
      $inc: { balance: -req.body.amount },
    });

    // increase the receiver balance
    await User.findByIdAndUpdate(req.body.receiver, {
      $inc: { balance: req.body.amount },
    });

    res.send({
      message: "Transaction successfully",
      data: newTransaction,
      success: true,
    });
  } catch (error) {
    res.send({
      message: "Transaction failed",
      data: error.message,
      success: false,
    });
  }
};

// verify receiver's account number

const verifyAccController = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.body.receiver });
    if (user) {
      res.send({
        message: "Account verified",
        data: user,
        success: true,
      });
    } else {
      res.send({
        message: "Account not found",
        data: null,
        success: false,
      });
    }
  } catch (error) {
    res.send({
      message: "Account not found",
      data: error.message,
      success: false,
    });
  }
};

// get all transactions for a user

const getTransactionsController = async (req, res) => {
  try {
    const transaction = await Transaction.find({
      $or: [{ sender: req.body.userId }, { receiver: req.body.userId }],
    })
      .sort({ createdAt: -1 })
      .populate("sender")
      .populate("receiver");
    res.send({
      message: "Transaction fetched",
      data: transaction,
      success: true,
    });
  } catch (error) {
    res.send({
      message: "Transaction not fetched",
      data: error.message,
      success: false,
    });
  }
};

// deposit funds using stripe

const depositStripeController = async (req, res) => {
  try {
    const { token, amount } = req.body;

    // Create customer
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    // Create charge
    const charge = await stripe.charges.create(
      {
        amount: amount * 100,
        currency: "usd",
        customer: customer.id,
        receipt_email: token.email,
        description: `Deposited to e-wallet`,
      },
      {
        idempotencyKey: uuid(),
      }
    );

    // Save the transaction on db
    if (charge.status === "succeeded") {
      const newTransaction = new Transaction({
        sender: req.body.userId,
        receiver: req.body.userId,
        amount,
        type: "deposit",
        reference: "stripe deposit",
        status: "success",
      });
      await newTransaction.save();

      // Increase the users's balance
      await User.findByIdAndUpdate(req.body.userId, {
        $inc: { balance: amount },
      });
      res.send({
        message: "Transaction successfully",
        data: newTransaction,
        success: true,
      });
    } else {
      res.send({
        message: "Transaction failed",
        data: charge,
        success: false,
      });
    }
  } catch (error) {
    res.send({
      message: "Transaction failed",
      data: error.message,
      success: false,
    });
  }
};


module.exports = {
  transactionController,
  verifyAccController,
  getTransactionsController,
  depositStripeController,
};