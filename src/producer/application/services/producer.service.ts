import { Injectable, NotFoundException, BadRequestException, Inject } from '@nestjs/common';
import { Producer, Crop } from '../../domain/entities/producer.entity';
import { IproducerRepository } from '../../domain/interfaces/producer.repository.interface';
import { CreateProducerDto } from '../dtos/create-producer.dto';
import { UpdateProducerDto } from '../dtos/update-producer.dto';
import { Document } from '../../domain/value-objects/document.value-object';

@Injectable()
export class ProducerService {
  constructor(
    @Inject('IProducerRepository')
    private readonly producerRepository: any,
  ) {}

    async findAll(): Promise<Producer[]> {
        return this.producerRepository.findAll();
    }
    async findById(id: string): Promise<Producer> {
        const producer = await this.producerRepository.findById(id);
        if (!producer) {
            throw new NotFoundException(`Producer with id ${id} not found`);
        }
        return producer;
    }
    async create(createProducerDto: CreateProducerDto): Promise<Producer> {
        try{
            const document = new Document(createProducerDto.document);
            const producer = new Producer(
                document.getValue(),
                createProducerDto.name,
                createProducerDto.farmName,
                createProducerDto.city,
                createProducerDto.state,
                createProducerDto.totalArea,
                createProducerDto.arableArea,
                createProducerDto.vegetationArea,
                createProducerDto.crops as Crop[]
            );
            if(!producer.isAreaValid()){
                throw new BadRequestException('A soma da area aravel e vegetativa deve ser menor ou igual a area total');
            }
            return this.producerRepository.create(producer);
        } catch (error) {
            if (error instanceof BadRequestException) {
                throw error;
            } else {
                throw new BadRequestException('Error: ' + error.message);
            }
        }
    }
    async update(id: string, updateProducerDto: UpdateProducerDto): Promise<Producer> {
        const existingProducer = await this.findById(id);

        const updatedProducer = new Producer(
            existingProducer.document,
            updateProducerDto.name || existingProducer.name,
            updateProducerDto.farmName || existingProducer.farmName,
            updateProducerDto.city || existingProducer.city,
            updateProducerDto.state || existingProducer.state,
            updateProducerDto.totalArea !== undefined ? updateProducerDto.totalArea : existingProducer.totalArea,
            updateProducerDto.arableArea !== undefined ? updateProducerDto.arableArea : existingProducer.arableArea,
            updateProducerDto.vegetArea !== undefined ? updateProducerDto.vegetArea : existingProducer.vegetArea,
            updateProducerDto.crops || existingProducer.crops,
            existingProducer.id,
        );
        if(!updatedProducer.isAreaValid()){
            throw new BadRequestException('A soma da area aravel e vegetativa deve ser menor ou igual a area total');
        }
        const result = await this.producerRepository.update(id, updatedProducer);
        if (!result) {
            throw new NotFoundException(`Produtor com id ${id} não encontrado`);
        }
        return result;
    }
    async delete(id: string): Promise<void> {
        const result = await this.producerRepository.delete(id);
        if (!result) {
            throw new NotFoundException(`Produtoe com id ${id} não encontrado`);
        }
    }
}