import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6f224173cc9f44de964edcc683be3f44",
  },
});
