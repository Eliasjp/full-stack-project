"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePhoneContactDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_phone_contact_dto_1 = require("./create-phone_contact.dto");
class UpdatePhoneContactDto extends (0, mapped_types_1.PartialType)(create_phone_contact_dto_1.CreatePhoneContactDto) {
}
exports.UpdatePhoneContactDto = UpdatePhoneContactDto;
//# sourceMappingURL=update-phone_contact.dto.js.map