"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailClientService = void 0;
const common_1 = require("@nestjs/common");
let EmailClientService = class EmailClientService {
    create(createEmailClientDto) {
        return 'This action adds a new emailClient';
    }
    findAll() {
        return `This action returns all emailClient`;
    }
    findOne(id) {
        return `This action returns a #${id} emailClient`;
    }
    update(id, updateEmailClientDto) {
        return `This action updates a #${id} emailClient`;
    }
    remove(id) {
        return `This action removes a #${id} emailClient`;
    }
};
EmailClientService = __decorate([
    (0, common_1.Injectable)()
], EmailClientService);
exports.EmailClientService = EmailClientService;
//# sourceMappingURL=email_client.service.js.map