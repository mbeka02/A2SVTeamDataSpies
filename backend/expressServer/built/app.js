"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const supabase_js_1 = require("@supabase/supabase-js");
const express_1 = __importStar(require("express"));
const openai_1 = __importDefault(require("openai"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const client = (0, supabase_js_1.createClient)(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);
const openai = new openai_1.default({
    apiKey: process.env.OPENAI_API_KEY
});
const getInput = (symptoms) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        console.log(1);
        const embeddings = (_a = (yield openai.embeddings.create({
            input: symptoms,
            model: 'text-embedding-ada-002'
        })).data.at(0)) === null || _a === void 0 ? void 0 : _a.embedding;
        console.log(2);
        const results = yield client.rpc("match_disease", {
            query_embedding: embeddings,
            match_threshold: 0.5,
            match_count: 5
        });
        console.log(3);
        const proompt = constructProompt(results.data, symptoms);
        console.log(4);
        const gpt3_response = yield openai.chat.completions.create({
            messages: [
                {
                    content: proompt,
                    role: "user"
                }
            ],
            model: 'gpt-3.5-turbo',
            max_tokens: 1000,
            n: 1,
            temperature: 0.6
        });
        const response = (_b = gpt3_response.choices.at(0)) === null || _b === void 0 ? void 0 : _b.message;
        return response === null || response === void 0 ? void 0 : response.content;
    }
    catch (e) {
        console.log(e);
        console.log("SOMETHING WENT WRONG");
        return null;
    }
});
const constructProompt = (data, search) => {
    return (`

        HUMAN:
             
                SEARCHES FOR:  ${search}

                AND GETS THE FOLLOWING RESULTS:::

                    ${data === null || data === void 0 ? void 0 : data.map(({ content }) => {
        return (`
                                    ${content}
                                `);
    })}
                
        BASED ON THE USER SEARCH AND THE RESULTS ABOVE ADVISE THE HUMAN.
        
        
        `);
};
const app = (0, express_1.default)();
app.use((0, morgan_1.default)("tiny"));
app.use((0, cors_1.default)());
const router = (0, express_1.Router)();
router.get("/search", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.query.query;
    console.log("THE QUERY", query);
    const response = yield getInput(query);
    res.status(200).send(response);
}));
app.use(router);
app.listen(8089, () => {
    console.log("Somebody's up!!");
});
//# sourceMappingURL=app.js.map