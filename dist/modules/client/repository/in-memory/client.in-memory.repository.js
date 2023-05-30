"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientInMemoryRepository = void 0;
const class_transformer_1 = require("class-transformer");
const client_entity_1 = require("../../entities/client.entity");
const common_1 = require("@nestjs/common");
let ClientInMemoryRepository = class ClientInMemoryRepository {
    constructor() {
        this.database = [];
    }
    create(data) {
        const newClient = new client_entity_1.Client();
        Object.assign(newClient, Object.assign({}, data));
        this.database.push(newClient);
        return (0, class_transformer_1.plainToInstance)(client_entity_1.Client, newClient);
    }
    findAll() {
        return (0, class_transformer_1.plainToInstance)(client_entity_1.Client, this.database);
    }
    findOne(id) {
        return this.database.find((client) => client.id === id);
    }
    findByEmail(email) {
        return this.database.find((client) => client.email === email);
    }
    findByPhone(phone) {
        return this.database.find((client) => client.phone === phone);
    }
    update(id, data) {
        const client = this.database.findIndex((client) => client.id === id);
        this.database[client] = Object.assign(Object.assign({}, this.database[client]), data);
        return (0, class_transformer_1.plainToInstance)(client_entity_1.Client, this.database[client]);
    }
    delete(id) {
        const client = this.database.findIndex((client) => client.id === id);
        this.database.splice(client, 1);
    }
};
ClientInMemoryRepository = __decorate([
    (0, common_1.Injectable)()
], ClientInMemoryRepository);
exports.ClientInMemoryRepository = ClientInMemoryRepository;
//# sourceMappingURL=client.in-memory.repository.js.map