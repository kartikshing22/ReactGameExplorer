import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "8b86d8f3ef9e46b3a31b05015429b2c4",
  },
});
