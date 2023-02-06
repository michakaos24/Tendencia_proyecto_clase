import { IsNotEmpty, IsString } from 'class-validator';

export class FilterCategoryDTO {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
}
