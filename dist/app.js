"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
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
