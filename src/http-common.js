import axios from "axios";

export default axios.create({
  baseURL: "https://holophonica.herokuapp.com/",
  // baseURL: "http://localhost:3000",
  headers: {
    "Content-type": "application/json"
  }
});
