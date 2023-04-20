const router = require("express").Router();
const {
  transactionController,
  verifyAccController,
  getTransactionsController,
  depositStripeController,
  getTransactionByIdController,
} = require("../controllers/transactionController");
const { getIdUser } = require("../middlewares/authMiddleware.js");

// Transfer money from one account to another

router.post("/transfer-funds", getIdUser, transactionController);

// verify receiver's account number

router.post("/verify-account", getIdUser, verifyAccController);

// get all transactions for a user

router.post("/get-all-transactions-by-user", getIdUser, getTransactionsController);

router.post("/get-transaction-by-id", getIdUser, getTransactionByIdController);

// deposit funds using stripe

router.post("/deposit-funds", getIdUser, depositStripeController);

module.exports = router;
