import { IsNotEmpty } from 'class-validator';
import {
  Allow,
  ArrayNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator/types/decorator/decorators';
import {
  isNotEmptyValidationOptions,
  isNumberValidationOptions,
  isStringValidationOptions,
} from 'src/shared/validation/validation.dto';
import { CategoryEntity } from '../../entities';

export class BaseProductDto {
  @IsNotEmpty(isNotEmptyValidationOptions())
  @IsString(isStringValidationOptions())
  readonly title: string;

  @IsNumber({}, isNumberValidationOptions())
  readonly price: number;

  @IsString(isStringValidationOptions())
  readonly description: string;

  @ArrayNotEmpty()
  readonly images: string[];

  @Allow(isNotEmptyValidationOptions())
  readonly category: CategoryEntity;
}
