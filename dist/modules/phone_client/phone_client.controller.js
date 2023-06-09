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
exports.PhoneClientController = void 0;
const common_1 = require("@nestjs/common");
const phone_client_service_1 = require("./phone_client.service");
const create_phone_client_dto_1 = require("./dto/create-phone_client.dto");
const update_phone_client_dto_1 = require("./dto/update-phone_client.dto");
let PhoneClientController = class PhoneClientController {
    constructor(phoneClientService) {
        this.phoneClientService = phoneClientService;
    }
    create(createPhoneClientDto) {
        return this.phoneClientService.create(createPhoneClientDto);
    }
    findAll() {
        return this.phoneClientService.findAll();
    }
    findOne(id) {
        return this.phoneClientService.findOne(+id);
    }
    update(id, updatePhoneClientDto) {
        return this.phoneClientService.update(+id, updatePhoneClientDto);
    }
    remove(id) {
        return this.phoneClientService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_phone_client_dto_1.CreatePhoneClientDto]),
    __metadata("design:returntype", void 0)
], PhoneClientController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PhoneClientController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PhoneClientController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_phone_client_dto_1.UpdatePhoneClientDto]),
    __metadata("design:returntype", void 0)
], PhoneClientController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PhoneClientController.prototype, "remove", null);
PhoneClientController = __decorate([
    (0, common_1.Controller)('phone-client'),
    __metadata("design:paramtypes", [phone_client_service_1.PhoneClientService])
], PhoneClientController);
exports.PhoneClientController = PhoneClientController;
//# sourceMappingURL=phone_client.controller.js.map