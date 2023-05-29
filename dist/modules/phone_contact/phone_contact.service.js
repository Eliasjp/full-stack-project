"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneContactService = void 0;
const common_1 = require("@nestjs/common");
let PhoneContactService = class PhoneContactService {
    create(createPhoneContactDto) {
        return 'This action adds a new phoneContact';
    }
    findAll() {
        return `This action returns all phoneContact`;
    }
    findOne(id) {
        return `This action returns a #${id} phoneContact`;
    }
    update(id, updatePhoneContactDto) {
        return `This action updates a #${id} phoneContact`;
    }
    remove(id) {
        return `This action removes a #${id} phoneContact`;
    }
};
PhoneContactService = __decorate([
    (0, common_1.Injectable)()
], PhoneContactService);
exports.PhoneContactService = PhoneContactService;
//# sourceMappingURL=phone_contact.service.js.map