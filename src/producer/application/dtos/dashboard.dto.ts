import { Crop } from '../../../producer/domain/entities/producer.entity';

export class TotalFarmsDto {
  count: number;
}

export class TotalAreaDto {
  totalHectares: number;
}

export class CropByStateDto {
  state: string;
  crop: Crop;
  count: number;
}