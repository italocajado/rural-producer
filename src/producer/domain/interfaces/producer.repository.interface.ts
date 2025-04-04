import { Producer } from "../entities/producer.entity";

export interface IproducerRepository {
    findAll(): Promise<Producer[]>;
    findById(id: string): Promise<Producer | null>;
    create(producer: Producer): Promise<Producer>;
    update(id: string, producer: Producer): Promise<Producer | null>;
    delete(id: string): Promise<boolean>;
}