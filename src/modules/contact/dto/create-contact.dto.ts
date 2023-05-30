import { IsEmail, IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateContactDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    full_name: string;

    @IsEmail()
    @IsNotEmpty()
    @MaxLength(255)
    email: string;

    @IsString()
    @IsNotEmpty()
    phone: string;

    @IsString()
    @IsNotEmpty()
    client_id: string;
}
