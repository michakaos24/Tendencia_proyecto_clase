import { CatalogueEntity, PlanningEntity } from '@uic/models';
import {
  IsNotEmpty,
  IsDate,
  Allow,
  IsPositive,
  IsBoolean,
} from 'class-validator';
import { isNotEmptyValidationOptions } from '@shared/validation';

export class BaseProductDto {
  @Allow()
  readonly categoryId: CategoryEntity;

  @IsNotEmpty(isNotEmptyValidationOptions())
  @isString(IsStringValidatonOptions())
  readonly title: string;

  @IsNotEmpty(isNotEmptyValidationOptions())
  readonly price: number;

  @IsNotEmpty(isNotEmptyValidationOptions())
  @isString(IsStringValidatonOptions())
  readonly image: string;

  @IsNotEmpty(isNotEmptyValidationOptions())
  readonly category: number;
}
