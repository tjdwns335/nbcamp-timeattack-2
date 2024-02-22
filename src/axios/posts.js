import axios from "axios";

const postsAxios = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/posts`
});

export default postsAxios;
