import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProducerController } from './producer/presentation/producer.controller';
import { ProducerService } from './producer/application/services/producer.service';
import { ProducerRepository } from './producer/infrastructure/persistence/producer.repository';
import { ProducerSchema } from './producer/infrastructure/persistence/producer.schema';
import { DashboardController } from './producer/presentation/dashboard.controller';
import { DashboardService } from './producer/application/services/dashboard.service';
import { ProducerModule } from './producer.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT) || 5432,
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'postgres',
      database: process.env.DB_DATABASE || 'rural_producers',
      entities: [ProducerSchema],
      synchronize: true,
    }),
    ProducerModule,
  ],
  controllers: [AppController],
  providers:[]
})
export class AppModule {}
