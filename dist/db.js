"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// create conenct to db
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
exports.default = prisma;
//# sourceMappingURL=db.js.map