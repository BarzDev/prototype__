import axios from "axios";

const postApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export default postApi;
