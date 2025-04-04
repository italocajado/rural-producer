import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProducerService } from './producer/application/services/producer.service';
import { ProducerRepository } from './producer/infrastructure/persistence/producer.repository';
import { ProducerSchema } from './producer/infrastructure/persistence/producer.schema';
import { ProducerController } from './producer/presentation/producer.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ProducerSchema])],
  controllers: [ProducerController],
  providers: [
    ProducerService,
    {
      provide: 'IProducerRepository',
      useClass: ProducerRepository,
    },
  ],
  exports: [ProducerService, 'IProducerRepository'],
})
export class ProducerModule {}
