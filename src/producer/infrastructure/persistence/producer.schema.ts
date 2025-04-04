import { EntitySchema } from 'typeorm';
import { Producer, Crop } from '../../domain/entities/producer.entity';

export const ProducerSchema = new EntitySchema<Producer>({
    name: 'Producer',
    target: Producer,
    columns: {
        id: {
        type: String,
        primary: true,
        },
        document: {
        type: String,
        },
        name: {
        type: String,
        },
        farmName: {
        type: String,
        },
        city: {
        type: String,
        },
        state: {
        type: String,
        },
        totalArea: {
        type: Number,
        },
        arableArea: {
        type: Number,
        },
        vegetArea: {
        type: Number,
        },
        crops: {
        type: 'simple-array',
        transformer: {
            to: (value: Crop[]) => value.join(','),
            from: (value: string) => value.split(',') as Crop[],
        }
        },
    },
})