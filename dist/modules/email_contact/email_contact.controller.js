"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailContactController = void 0;
const common_1 = require("@nestjs/common");
const email_contact_service_1 = require("./email_contact.service");
const create_email_contact_dto_1 = require("./dto/create-email_contact.dto");
const update_email_contact_dto_1 = require("./dto/update-email_contact.dto");
let EmailContactController = class EmailContactController {
    constructor(emailContactService) {
        this.emailContactService = emailContactService;
    }
    create(createEmailContactDto) {
        return this.emailContactService.create(createEmailContactDto);
    }
    findAll() {
        return this.emailContactService.findAll();
    }
    findOne(id) {
        return this.emailContactService.findOne(+id);
    }
    update(id, updateEmailContactDto) {
        return this.emailContactService.update(+id, updateEmailContactDto);
    }
    remove(id) {
        return this.emailContactService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_email_contact_dto_1.CreateEmailContactDto]),
    __metadata("design:returntype", void 0)
], EmailContactController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EmailContactController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EmailContactController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_email_contact_dto_1.UpdateEmailContactDto]),
    __metadata("design:returntype", void 0)
], EmailContactController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EmailContactController.prototype, "remove", null);
EmailContactController = __decorate([
    (0, common_1.Controller)('email-contact'),
    __metadata("design:paramtypes", [email_contact_service_1.EmailContactService])
], EmailContactController);
exports.EmailContactController = EmailContactController;
//# sourceMappingURL=email_contact.controller.js.map