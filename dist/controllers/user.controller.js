"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signIn = exports.signUp = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_1 = __importDefault(require("../models/user"));
const config_1 = __importDefault(require("../config"));
function createToken(user) {
    return jsonwebtoken_1.default.sign({ id: user.id, email: user.email }, config_1.default.JWTSECRET);
}
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (!email || !password)
        return res
            .status(400)
            .json({ message: 'Please send your email and password' });
    const user = yield user_1.default.findOne({ email });
    if (user)
        return res
            .status(400)
            .json({ message: 'The user already exists try creating a new one' });
    const newUser = new user_1.default({ email, password });
    yield newUser.save();
    return res.status(201).json({ message: 'User created' });
});
exports.signUp = signUp;
const signIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (!email || !password)
        return res
            .status(400)
            .json({ message: 'Please send your email and password' });
    const user = yield user_1.default.findOne({ email });
    if (!user)
        return res.status(400).json({ message: 'This user does not exist' });
    const isMatch = yield user.comparePassword(password);
    if (isMatch)
        return res.status(200).json({ token: createToken(user) });
    return res
        .status(400)
        .json({ message: 'The email or password are incorrect' });
});
exports.signIn = signIn;
