import { IsNotEmpty, IsNotIn, IsString } from 'class-validator';

export class FindOneByIdDto implements IFindOneIdDto {
  @IsString()
  @IsNotEmpty()
  @IsNotIn([':id'])
  id: string;
}

export interface IFindOneIdDto {
  id: string;
}
