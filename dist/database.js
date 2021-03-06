"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("./config"));
const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
mongoose_1.default.connect(`mongodb+srv://${config_1.default.USERNAME}:${config_1.default.PASSWORD}@nodejsplatzi.cg57m.mongodb.net/${config_1.default.DBNAME}?retryWrites=true&w=majority`, dbOptions);
const connection = mongoose_1.default.connection;
connection.once('open', () => {
    console.log('Mongodb connection stablished');
});
connection.on('error', err => {
    console.log(`Error in database ${err}`);
    process.exit(0);
});
