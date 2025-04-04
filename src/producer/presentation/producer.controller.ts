import { Controller, Get, Post, Put, Delete, Body, Param, HttpCode, HttpStatus } from '@nestjs/common';
import { ProducerService } from '../application/services/producer.service';
import { CreateProducerDto } from '../application/dtos/create-producer.dto';
import { UpdateProducerDto } from '../application/dtos/update-producer.dto';
import { Producer } from '../domain/entities/producer.entity';

@Controller('producers')
export class ProducerController {
    constructor(private readonly producerService: ProducerService) {}

    @Get()
    async findAll(): Promise<Producer[]> {
        return this.producerService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: string): Promise<Producer> {
        return this.producerService.findById(id);
    }

    @Post()
    async create(@Body() createProducerDto: CreateProducerDto): Promise<Producer> {
        return this.producerService.create(createProducerDto);
    }

    @Put(':id')
    async update(
        @Param('id') id: string, 
        @Body() updateProducerDto: UpdateProducerDto): Promise<Producer> {
        return this.producerService.update(id, updateProducerDto);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async delete(@Param('id') id: string): Promise<void> {
        await this.producerService.delete(id);
    }
}