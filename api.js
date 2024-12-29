import axios from "axios";

// export const url = "https://eyongkart.com/api";
export const url = "https://e-commerce-ten-rust.vercel.app";
// export const url = "https://qfqhhctz-5000.inc1.devtunnels.ms/";
export const Axios = axios.create({
  baseURL: url,
});
