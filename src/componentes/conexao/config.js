import axios from "axios";

const ufsApi = axios.create({
    baseURL: "https://pesquisaufs.onrender.com/UFs"
});

export default ufsApi;

//Essa const simplificará o uso do endpoint, para que ela não seja declarada várias vezes