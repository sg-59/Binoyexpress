import axios from "axios";


const SampleUrl='http://localhost:5000'

var TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:BinoyExpress2024")).login).LoginInformation[0]&&JSON.parse(JSON.parse(localStorage.getItem("persist:BinoyExpress2024")).login).LoginInformation[0].token
console.log("***************Token",TOKEN);

const datass=localStorage.getItem('2024Aprillast')
console.log("??????",datass);


export const basicRequest=axios.create({
baseURL:SampleUrl
})

export const TokenRequest=axios.create({
    baseURL:SampleUrl,
    headers:{token:TOKEN}
})