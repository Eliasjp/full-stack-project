"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactModule = void 0;
const common_1 = require("@nestjs/common");
const contact_service_1 = require("./contact.service");
const contact_controller_1 = require("./contact.controller");
const contact_repository_1 = require("./repository/contact.repository");
const prisma_service_1 = require("src/database/prisma.service");
const contact_prisma_repository_1 = require("./repository/prisma/contact-prisma.repository");
let ContactModule = class ContactModule {
};
ContactModule = __decorate([
    (0, common_1.Module)({
        controllers: [contact_controller_1.ContactController],
        providers: [
            contact_service_1.ContactService,
            prisma_service_1.PrismaService,
            {
                provide: contact_repository_1.ContactRepository,
                useClass: contact_prisma_repository_1.ContactPrismaRepository
            }
        ]
    })
], ContactModule);
exports.ContactModule = ContactModule;
//# sourceMappingURL=contact.module.js.map