import { IsString, IsNumber, IsArray, IsEnum, IsOptional, Min, ArrayMinSize } from 'class-validator';
import { Crop } from 'src/producer/domain/entities/producer.entity';

export class UpdateProducerDto {    
    @IsString()
    @IsOptional()
    name?: string;
    
    @IsString()
    @IsOptional()
    farmName?: string;
    
    @IsString()
    @IsOptional()
    city?: string;
    
    @IsString()
    @IsOptional()
    state?: string;
    
    @IsNumber()
    @Min(0)
    @IsOptional()
    totalArea?: number;
    
    @IsNumber()
    @Min(0)
    @IsOptional()
    arableArea?: number;
    
    @IsNumber()
    @Min(0)
    @IsOptional()
    vegetArea?: number;
    
    @IsArray()
    @IsEnum(Crop, { each: true })
    @ArrayMinSize(1)
    @IsOptional()
    crops?: Crop[];
}