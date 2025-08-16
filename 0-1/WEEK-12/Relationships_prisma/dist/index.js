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
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../src/generated/prisma");
const { user, todos } = new prisma_1.PrismaClient();
const InsertUser = (username, password, firstName, lastName, email) => __awaiter(void 0, void 0, void 0, function* () {
    yield user.create({
        data: {
            username,
            password,
            firstName,
            lastName,
            email
        },
    });
});
InsertUser("Agent-cat", "Vishnu@2005", "vishnu", "Vardhan", "mandalavishnuvardhan07@gmail.com");
