"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const client_module_1 = require("./modules/client/client.module");
const email_contact_module_1 = require("./modules/email_contact/email_contact.module");
const phone_contact_module_1 = require("./modules/phone_contact/phone_contact.module");
const phone_client_module_1 = require("./modules/phone_client/phone_client.module");
const email_client_module_1 = require("./modules/email_client/email_client.module");
const contact_module_1 = require("./modules/contact/contact.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [client_module_1.ClientModule, contact_module_1.ContactModule, email_client_module_1.EmailClientModule, phone_client_module_1.PhoneClientModule, phone_contact_module_1.PhoneContactModule, email_contact_module_1.EmailContactModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map