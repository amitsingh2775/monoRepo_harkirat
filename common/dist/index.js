"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingupInput = void 0;
const zod_1 = require("zod");
exports.SingupInput = zod_1.z.object({
    username: zod_1.z.string(),
    password: zod_1.z.string()
});
