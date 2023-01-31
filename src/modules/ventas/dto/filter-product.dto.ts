export class FilterProductDto extends PaginationDto {
  @IsOptional()
  @IsNumber()
  readonly sort: number;
}