import { IsImageUrl } from "@/common/decorators/is-image-decorator";

import { ICreateUser } from "@recipe/shared";
import {
  IsEmail,
  IsOptional,
  isString,
  IsString,
  MinLength,
} from "class-validator";

export class RegisterDto implements ICreateUser {
  @IsString()
  @MinLength(2)
  name: string;

  @IsString()
  @IsImageUrl({ message: "Hibás kép url" })
  @IsOptional()
  picture: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6, {
    message: "A jelszónak legalább 6 karakter hosszúnak kell lennie",
  })
  password: string;
}
