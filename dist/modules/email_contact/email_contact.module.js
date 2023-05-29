"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailContactModule = void 0;
const common_1 = require("@nestjs/common");
const email_contact_service_1 = require("./email_contact.service");
const email_contact_controller_1 = require("./email_contact.controller");
let EmailContactModule = class EmailContactModule {
};
EmailContactModule = __decorate([
    (0, common_1.Module)({
        controllers: [email_contact_controller_1.EmailContactController],
        providers: [email_contact_service_1.EmailContactService]
    })
], EmailContactModule);
exports.EmailContactModule = EmailContactModule;
//# sourceMappingURL=email_contact.module.js.map