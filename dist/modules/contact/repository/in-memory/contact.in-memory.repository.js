"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactInMemoryRepository = void 0;
const common_1 = require("@nestjs/common");
const contact_entity_1 = require("../../entities/contact.entity");
let ContactInMemoryRepository = class ContactInMemoryRepository {
    constructor() {
        this.database = [];
    }
    create(data) {
        const newContact = new contact_entity_1.Contact();
        Object.assign(newContact, Object.assign({}, data));
        this.database.push(newContact);
        return newContact;
    }
    findOne(id) {
        const find_contact = this.database.find((contact) => contact.id === id);
        return find_contact;
    }
    findAll() {
        return this.database;
    }
    update(id, data) {
        const contact_index = this.database.findIndex((contact) => contact.id === id);
        const updated_contact = this.database[contact_index] = Object.assign(Object.assign({}, this.database[contact_index]), data);
        return updated_contact;
    }
    delete(id) {
        const contact_index = this.database.findIndex((contact) => contact.id === id);
        this.database.splice(contact_index, 1);
    }
};
ContactInMemoryRepository = __decorate([
    (0, common_1.Injectable)()
], ContactInMemoryRepository);
exports.ContactInMemoryRepository = ContactInMemoryRepository;
//# sourceMappingURL=contact.in-memory.repository.js.map