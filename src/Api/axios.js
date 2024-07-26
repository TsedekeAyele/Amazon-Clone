import axios from "axios";

const axiosInstance = axios.create({
  // local instance of firebase functions
  baseURL: "http://127.0.0.1:5001/clone-6116a/us-central1/api",
// deployed version of amazon_server on render.com
  baseURL: "https://amazon-api-deploy-jhp4.onrender.com/",
});
export { axiosInstance };
