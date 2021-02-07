"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config = {
    PORT: process.env.PORT || 4444,
    USERNAME: process.env.DBUSERNAME || 'Usuario Inexistente',
    PASSWORD: process.env.PASSWORD || ' contraseña inexistente',
    DBNAME: process.env.DBNAME || 'nombre de base de datos inexistente',
    JWTSECRET: process.env.JWTSECRET || 'ajsonwebtokenssecret',
};
exports.default = config;
