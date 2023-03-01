"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCourse = void 0;
const Create_1 = __importDefault(require("./Create"));
function createCourse(request, response) {
    Create_1.default.execute({ name: "Node", duration: 1, educator: "Luis" });
    return response.send();
}
exports.createCourse = createCourse;
