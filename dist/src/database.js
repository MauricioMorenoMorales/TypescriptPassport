"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("./config/config"));
const chalk_1 = __importDefault(require("chalk"));
console.log(chalk_1.default.inverse.red(config_1.default.DB.DBNAME));
mongoose_1.default.connect(`mongodb+srv://${config_1.default.DB.USER}:${config_1.default.DB.PASSWORD}@nodejsplatzi.cg57m.mongodb.net/${config_1.default.DB.DBNAME}?retryWrites=true&w=majority`);
const connection = mongoose_1.default.connection;
connection.once('open', () => {
    console.log('Mongodb connection stablished');
});
connection.on('error', err => {
    console.log(`Error in database ${err}`);
});
