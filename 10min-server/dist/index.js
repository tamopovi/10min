"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const constants_1 = require("./config/constants");
const routes_1 = require("./routes");
const _10min_commons_1 = require("10min-commons");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/article', routes_1.articleRouter);
console.log({ CheckIsFoo: (0, _10min_commons_1.CheckIsFoo)("foo") });
app.listen(constants_1.PORT, () => {
    console.log(`Server is listening on port ${constants_1.PORT}`);
});
