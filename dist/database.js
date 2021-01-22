"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect(`mongodb+srv://:<password>@nodejsplatzi.cg57m.mongodb.net/<dbname>?retryWrites=true&w=majority`);
