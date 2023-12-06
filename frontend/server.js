import express from "express";

const app = express();

app.use(express.static("public"));

const PORT = 3221;
const IP = "localhost"; // type Public IPv4 address or 'localhost'
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Frontend Server ready at http://${IP}:${PORT}`);
});
