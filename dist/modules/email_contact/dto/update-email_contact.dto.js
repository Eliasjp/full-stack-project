"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEmailContactDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_email_contact_dto_1 = require("./create-email_contact.dto");
class UpdateEmailContactDto extends (0, mapped_types_1.PartialType)(create_email_contact_dto_1.CreateEmailContactDto) {
}
exports.UpdateEmailContactDto = UpdateEmailContactDto;
//# sourceMappingURL=update-email_contact.dto.js.map