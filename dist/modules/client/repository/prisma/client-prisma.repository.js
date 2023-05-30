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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientPrismaRepository = void 0;
const common_1 = require("@nestjs/common");
const client_entity_1 = require("../../entities/client.entity");
const prisma_service_1 = require("src/database/prisma.service");
let ClientPrismaRepository = class ClientPrismaRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        const client = new client_entity_1.Client();
        Object.assign(client, Object.assign({}, data));
        const new_client = await this.prisma.client.create({ data: Object.assign({}, client) });
    }
    findAll() {
        throw new Error("Method not implemented.");
    }
    findOne(id) {
        throw new Error("Method not implemented.");
    }
    findByEmail(email) {
        throw new Error("Method not implemented.");
    }
    findByPhone(phone) {
        throw new Error("Method not implemented.");
    }
    update(id, data) {
        throw new Error("Method not implemented.");
    }
    delete(id) {
        throw new Error("Method not implemented.");
    }
};
ClientPrismaRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ClientPrismaRepository);
exports.ClientPrismaRepository = ClientPrismaRepository;
//# sourceMappingURL=client-prisma.repository.js.map