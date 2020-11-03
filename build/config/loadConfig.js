"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const defaults_1 = __importDefault(require("./defaults"));
const nconf_1 = __importDefault(require("nconf"));
const loadConfig = () => {
    const conf = nconf_1.default.argv().env();
    const envtype = conf.get('NODE_ENV');
    if (envtype) {
        const envConfig = defaults_1.default[envtype];
        nconf_1.default.overrides({ store: Object.assign(Object.assign({}, envConfig), { NODE_ENV: envtype }) });
    }
    const defaultConfig = defaults_1.default.default;
    nconf_1.default.defaults({ store: defaultConfig });
    return nconf_1.default;
};
module.exports = loadConfig();
