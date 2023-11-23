import axios from "axios";

const url = "https://economia.awesomeapi.com.br/last/USD-BRL";
const api = axios.get(url).then(response=> response.USDBRL.bid);
console.log(api);
export default api
