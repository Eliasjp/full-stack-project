"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePhoneClientDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_phone_client_dto_1 = require("./create-phone_client.dto");
class UpdatePhoneClientDto extends (0, mapped_types_1.PartialType)(create_phone_client_dto_1.CreatePhoneClientDto) {
}
exports.UpdatePhoneClientDto = UpdatePhoneClientDto;
//# sourceMappingURL=update-phone_client.dto.js.map