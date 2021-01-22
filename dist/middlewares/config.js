"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({
    path: path_1.default.resolve(__dirname, '../../.env'),
});
exports.default = {
    DB: {
        USER: process.env.MONGODB_USER || 'db_user_otro',
        PASSWORD: process.env.MONGODB_PASSWORD || '12345',
        DBNAME: process.env.MONGODB_DBNAME || 'typescriptPassport',
    },
};
