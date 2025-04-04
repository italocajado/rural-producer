import { Controller, Get } from '@nestjs/common';
import { DashboardService } from '../application/services/dashboard.service';
import { TotalFarmsDto, TotalAreaDto, CropByStateDto } from '../application/dtos/dashboard.dto';

@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get('total-farms')
  async getTotalFarms(): Promise<TotalFarmsDto> {
    return this.dashboardService.getTotalFarms();
  }

  @Get('total-area')
  async getTotalArea(): Promise<TotalAreaDto> {
    return this.dashboardService.getTotalArea();
  }

  @Get('crops-by-state')
  async getCropByState(): Promise<CropByStateDto[]> {
    return this.dashboardService.getCropByState();
  }
}