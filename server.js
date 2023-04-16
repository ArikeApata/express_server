const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const userRouter = require("./routes/users");

app.use("/users", userRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`app is running on port ${PORT}`));
