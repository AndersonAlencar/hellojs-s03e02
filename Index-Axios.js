const axios = require("axios")

const api = axios.create({
  baseURL: "https://api.github.com"
})

api.get("/search/users?q=AndersonAlencar").then(ret => console.log(ret.data))
