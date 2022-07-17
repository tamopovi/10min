"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleController = void 0;
const crudController_1 = require("../crudController");
class ArticleController extends crudController_1.CrudController {
    create(req, res) {
        throw new Error("Method not implemented.");
    }
    read(req, res) {
        res.json({ message: 'GET /article request received' });
    }
    update(req, res) {
        throw new Error("Method not implemented.");
    }
    delete(req, res) {
        throw new Error("Method not implemented.");
    }
}
exports.ArticleController = ArticleController;
