import React, { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import { DepositFunds } from "../utils/api";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import Notiflix from "notiflix";
import { useDispatch } from 'react-redux';
import { setAmountDeposited } from "../store/slices/amountDeposited.slice";
import { getBalance } from "../utils/api";

const DepositAmount = () => {
  const [value, setValue] = useState("$");
  const dispatch = useDispatch();
  const [balance, setBalance] = useState(0);

  useEffect(()=> {
    const fetchBalance = async () => {
      const balance = await getBalance();
      setBalance(balance);
    };
    fetchBalance();
  },[])

  Notiflix.Notify.init({
    timeout: 2000,
    clickToClose: true,
    showOnlyTheLastOne: true,
  });

  const navigate = useNavigate();
  const handleChange = (event) => {
    const inputValue = event.target.value.replace(/\$/g, "");
    setValue("$" + inputValue);
  };

  const amount = Number(value.replace(/\$/g, ""));

  const onToken = async (token) => {
    const response = await DepositFunds({
      token: token,
      amount: amount,
    });
    if (response.success) {
      dispatch(setAmountDeposited(response.data.amount))
      navigate("/deposit-funds/voucher");
      Notiflix.Notify.success("Dinero ingresado correctamente");
    }
    return response;
  };

  return (
    <div className="w-screen h-screen bg-neutral-900">
      <div className="w-full h-[5%] flex items-center">
        <Link to="/homepage" className="flex items-center pl-6">
          <Icon
            icon="ic:outline-navigate-next"
            color="#f1f1f1"
            width="24"
            height="24"
            hFlip={true}
          />
        </Link>
        <h1 className="text-center grow text-slate-300">Ingresar dinero</h1>
      </div>
      <div className="w-full h-[95%] flex flex-col justify-between p-6">
        <div className="h-full pt-8 text-center">
          <p className="text-sm text-slate-300">¿Cuánto dinero quieres ingresar?</p>
          <form className="flex justify-center pt-8">
            <input
              className="w-full h-12 text-3xl font-semibold text-center text-white placeholder-white bg-transparent outline-none"
              id="usd"
              type="text"
              required="required"
              value={value}
              onChange={handleChange}
            />
          </form>
          <p className="text-xs text-[gray] pt-4">$ {balance} disponible</p>
        </div>
        <StripeCheckout
          token={onToken}
          currency="USD"
          amount={amount * 100}
          billingAddress={false}
          stripeKey="pk_test_51MsERVA0z17wfrUBPE1SATDMvcwgpreFXvKC8DeYJObu9WMaikTL2NLbtPX1aeJMWQQXY88V68NemhzEKqMOoiJR00BxKuX7L9"
        >
          <button
            className="w-full h-12 text-sm font-semibold text-white whiterounded bg-gradient-to-r from-blue-600 to-fuchsia-600"
            type="submit"
          >
            Ingresar dinero
          </button>
        </StripeCheckout>
      </div>
    </div>
  );
};

export default DepositAmount;
