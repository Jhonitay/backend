const express =  require("express");
// const newRoute =  require("./routes/newRoute.js");
const withLogin =  require("./routes/withLogin");
const noLogin = require("./routes/noLogin")
const cors = require("cors");
const { verifyToken } = require("./controller/verify");
const app = express();

// try {
//     await db.authenticate();
//     console.log('Database Connected')
// } catch (error) {
//     console.error(error);
// }
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

app.use(express.json());

app.get("/test", (req, res) => {
  console.log(req.body)
  res.send("Test route");
});

app.use(noLogin)

app.use(verifyToken)

app.use(withLogin)


app.get("/about", (req, res) => {
  res.send("Hello World! Hello");
  console.log("tes")
});

app.listen(5000, () => {
  console.log("Server sedang berjalan di port 5000");
});
// app.get("/", (req, res) => {
//   res.send("Hello World! Hello");
//   console.log("tes")
// });
// app.get("/about", (req, res) => {
//   res.send("Hello World! Hello");
//   console.log("tes")
// });



