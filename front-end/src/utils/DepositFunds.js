export const DepositFunds = async(payload)=>{
    try{
      await axios.post("http://localhost:9000/api/transactions/deposit-funds", payload); 
    }catch(error){
      return error.response
    }
}