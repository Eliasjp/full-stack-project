"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEmailClientDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_email_client_dto_1 = require("./create-email_client.dto");
class UpdateEmailClientDto extends (0, mapped_types_1.PartialType)(create_email_client_dto_1.CreateEmailClientDto) {
}
exports.UpdateEmailClientDto = UpdateEmailClientDto;
//# sourceMappingURL=update-email_client.dto.js.map