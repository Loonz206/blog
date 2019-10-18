import axios from "axios";

// lots of free stuff https://jsonplaceholder.typicode.com
export default axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
});
