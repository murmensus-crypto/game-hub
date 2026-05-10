import axios from "axios";
export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: '107297cf6c434f99b4e43e06fe0b1bcb'
    }
});
