import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-azurehomesandconsultants-66f70.cloudfunctions.net/app/",
  headers: { "Content-Type": "application/json" },
  timeout: 35000,
});

export default instance;
