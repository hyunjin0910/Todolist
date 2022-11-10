import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  res.send("hello server");
});

app.get("/api/todos", (req, res, next) => {
  res.send([
    {
      id: 12345,
      todo: "테스트하기",
      isCompleted: false,
      userId: 1026,
    },
    {
      id: 12358,
      todo: "ㅇㄹㅁㅇㄹ",
      isCompleted: false,
      userId: 1026,
    },
    {
      id: 12359,
      todo: "dd",
      isCompleted: false,
      userId: 1026,
    },
    {
      id: 12360,
      todo: "aaaaaaaaa",
      isCompleted: false,
      userId: 1026,
    },
    {
      id: 12361,
      todo: "dfdfaf",
      isCompleted: false,
      userId: 1026,
    },
  ]);
});

app.listen(5000, () => {
  console.log("running server");
});
