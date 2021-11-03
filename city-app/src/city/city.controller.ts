import {
  Controller,
  Get,
  Header,
  NotFoundException,
  Query,
} from '@nestjs/common';
import { CityService } from './city.service';
// Import Entity and Dto
import { City } from './entities/city.entity';
import { QueryCityDto } from './dto/query-city.dto';

@Controller('city')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  /**
   * Get all cities with params name OR postcode
   * @param query
   * @returns
   */
  @Get('cities')
  @Header('Access-Control-Allow-Origin', '*')
  async getCities(@Query() query: QueryCityDto): Promise<City[]> {
    const cities = await this.cityService.find(query);

    if (!cities) {
      throw new NotFoundException();
    }
    return cities;
  }
}
