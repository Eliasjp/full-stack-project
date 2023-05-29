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
exports.EmailClientController = void 0;
const common_1 = require("@nestjs/common");
const email_client_service_1 = require("./email_client.service");
const create_email_client_dto_1 = require("./dto/create-email_client.dto");
const update_email_client_dto_1 = require("./dto/update-email_client.dto");
let EmailClientController = class EmailClientController {
    constructor(emailClientService) {
        this.emailClientService = emailClientService;
    }
    create(createEmailClientDto) {
        return this.emailClientService.create(createEmailClientDto);
    }
    findAll() {
        return this.emailClientService.findAll();
    }
    findOne(id) {
        return this.emailClientService.findOne(+id);
    }
    update(id, updateEmailClientDto) {
        return this.emailClientService.update(+id, updateEmailClientDto);
    }
    remove(id) {
        return this.emailClientService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_email_client_dto_1.CreateEmailClientDto]),
    __metadata("design:returntype", void 0)
], EmailClientController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EmailClientController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EmailClientController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_email_client_dto_1.UpdateEmailClientDto]),
    __metadata("design:returntype", void 0)
], EmailClientController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EmailClientController.prototype, "remove", null);
EmailClientController = __decorate([
    (0, common_1.Controller)('email-client'),
    __metadata("design:paramtypes", [email_client_service_1.EmailClientService])
], EmailClientController);
exports.EmailClientController = EmailClientController;
//# sourceMappingURL=email_client.controller.js.map