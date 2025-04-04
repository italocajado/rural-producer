
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producer } from '../../domain/entities/producer.entity';
import { IproducerRepository } from '../../domain/interfaces/producer.repository.interface';
import { ProducerSchema } from './producer.schema';

@Injectable()
export class ProducerRepository implements IproducerRepository {
  constructor(
    @InjectRepository(ProducerSchema)
    private readonly repository: Repository<Producer>,
  ) {}

  async findAll(): Promise<Producer[]> {
    return this.repository.find();
  }

  async findById(id: string): Promise<Producer | null> {
    return this.repository.findOneBy({ id });
  }

  async create(producer: Producer): Promise<Producer> {
    return this.repository.save(producer);
  }

  async update(id: string, producer: Producer): Promise<Producer | null> {
    const result = await this.repository.update(id, producer);
    if (result.affected === 0) {
      return null;
    }
    return this.findById(id);
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.repository.delete(id);
    return result.affected !== null && result.affected !== undefined && result.affected > 0;
  }
}