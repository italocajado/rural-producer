import { Crop } from "src/producer/domain/entities/producer.entity";

export class ProducerResponseDto {
    id: string;
    document: string;
    name: string;
    farmName: string;
    city: string;
    state: string;
    totalArea: number;
    arableArea: number;
    vegetArea: number;
    crops: Crop[];
}