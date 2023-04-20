import config from "../utils/config";

export const DepositFunds = async(payload)=>{
    try{
      const { API_BASE_URL } = config;
      const { data } = await axios.post(`${API_BASE_URL}/deposit-funds`, payload); 
      return data;
    }catch(error){
      return error.response
    }
}