import { Allow, IsOptional, IsString } from 'class-validator';
import { isStringValidationOptions } from 'src/shared/validation';
import { CategoryEntity } from '../../entities';
import { PaginationDto } from '../pagination.dto';

export class FilterProductDto extends PaginationDto {
  @IsOptional()
  @IsString(isStringValidationOptions())
  readonly title: string;

  // @Allow(AllowValidactionOptions())
  readonly category: CategoryEntity;
}
