import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producer } from '../../../producer/domain/entities/producer.entity';
import { TotalFarmsDto, TotalAreaDto, CropByStateDto } from '../dtos/dashboard.dto';

@Injectable()
export class DashboardService {
  constructor(
    @InjectRepository(Producer)
    private readonly producerRepository: Repository<Producer>,
  ) {}

  async getTotalFarms(): Promise<TotalFarmsDto> {
    const count = await this.producerRepository.count();
    return { count };
  }

  async getTotalArea(): Promise<TotalAreaDto> {
    const totalHectares = await this.producerRepository
      .createQueryBuilder('producer')
      .select('SUM(producer.area)', 'totalHectares')
      .getRawOne();
    return { totalHectares: totalHectares.totalHectares };
  }
  async getCropByState(): Promise<CropByStateDto[]> {
    const producers = await this.producerRepository.find();
    const cropStateCounts = new Map<string, number>();

    for (const producer of producers) {
      for (const crop of producer.crops) {
        const key = `${producer.state}-${crop}`;
        cropStateCounts.set(key, (cropStateCounts.get(key) || 0) + 1);
      }
    }
    const result: CropByStateDto[] = [];
    for (const [key, count] of cropStateCounts.entries()) {
        const [state, crop] = key.split('-');
        result.push({ state, crop: crop as any, count });
    }
    return result;
  }
}