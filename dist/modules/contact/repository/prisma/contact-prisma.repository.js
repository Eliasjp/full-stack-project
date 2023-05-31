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
exports.ContactPrismaRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("src/database/prisma.service");
const class_transformer_1 = require("class-transformer");
const contact_entity_1 = require("../../entities/contact.entity");
let ContactPrismaRepository = class ContactPrismaRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data, id_client) {
        console.log(id_client);
        throw new Error("oi");
    }
    async findAll() {
        const all_contact = await this.prisma.contact.findMany();
        return (0, class_transformer_1.plainToInstance)(contact_entity_1.Contact, all_contact);
    }
    async findOne(id) {
        const find_contact = await this.prisma.contact.findUnique({
            where: { id }
        });
        return (0, class_transformer_1.plainToInstance)(contact_entity_1.Contact, find_contact);
    }
    async update(id, data) {
        const updated_contact = await this.prisma.contact.update({
            where: { id },
            data: Object.assign({}, data)
        });
        return (0, class_transformer_1.plainToInstance)(contact_entity_1.Contact, updated_contact);
    }
    async delete(id) {
        await this.prisma.contact.delete({ where: { id } });
    }
};
ContactPrismaRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ContactPrismaRepository);
exports.ContactPrismaRepository = ContactPrismaRepository;
//# sourceMappingURL=contact-prisma.repository.js.map