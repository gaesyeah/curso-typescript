import router from "@/routers/router";
import express from "express";

const app = express();

app.use(router);

app.listen(5000, () => {
  console.log("Server is up and running")
})