import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://smart-campus-api-iblg.onrender.com/api",
});

export default instance;