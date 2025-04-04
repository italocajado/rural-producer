import { IsString, IsNumber, IsArray, IsEnum, IsNotEmpty, Min, ValidateNested, ArrayMinSize } from 'class-validator';
import { Type } from 'class-transformer';
import { Crop } from '../../domain/entities/producer.entity';

export class CreateProducerDto {
  @IsString()
  @IsNotEmpty()
  document: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  farmName: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  state: string;

  @IsNumber()
  @Min(0)
  totalArea: number;

  @IsNumber()
  @Min(0)
  arableArea: number;

  @IsNumber()
  @Min(0)
  vegetationArea: number;

  @IsArray()
  @IsEnum(Crop, { each: true })
  @ArrayMinSize(1)
  crops: Crop[];
}