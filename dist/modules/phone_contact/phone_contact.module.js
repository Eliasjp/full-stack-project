"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneContactModule = void 0;
const common_1 = require("@nestjs/common");
const phone_contact_service_1 = require("./phone_contact.service");
const phone_contact_controller_1 = require("./phone_contact.controller");
let PhoneContactModule = class PhoneContactModule {
};
PhoneContactModule = __decorate([
    (0, common_1.Module)({
        controllers: [phone_contact_controller_1.PhoneContactController],
        providers: [phone_contact_service_1.PhoneContactService]
    })
], PhoneContactModule);
exports.PhoneContactModule = PhoneContactModule;
//# sourceMappingURL=phone_contact.module.js.map