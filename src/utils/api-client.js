import axios from "axios";

const local = process.env.NODE_ENV !== "production";
const baseUrl = local
  ? "http://192.168.56.101:8383"
  : "https://api.bitesize.irish";

export default axios.create({
  baseURL: baseUrl,
  headers: {
    // 'X-Auth-Token': 'f2b6637ddf355a476918940289c0be016a4fe99e3b69c83d',
    Authorization: "Bearer {token}",
    "Content-Type": "application/json"
  }
});
