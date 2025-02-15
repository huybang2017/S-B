import {
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  Length,
  MinLength,
} from 'class-validator';
import { UserRole } from './user-role.enum';

export class CreateUserDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsEnum(UserRole)
  @IsOptional()
  role?: UserRole;

  @IsString()
  @IsOptional()
  @Length(10, 15)
  phone?: string;
}
