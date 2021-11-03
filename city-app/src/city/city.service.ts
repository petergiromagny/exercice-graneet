import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { City } from './entities/city.entity';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(City)
    private readonly cityRepository: Repository<City>,
  ) {}

  public async find(query: any): Promise<any> {
    const splittedCities = { metropolitan: [], others: [] };
    let cities: City[];

    if (query.name === undefined && query.postcode === undefined) {
      throw new NotFoundException('No params in query');
    }

    /**
     * Query to get cities by name OR by postal code
     * Order by city name ascending
     * Limited to 100 cities
     */
    if (query.name !== undefined) {
      cities = await this.cityRepository
        .createQueryBuilder('city')
        .select()
        .where(`city.name like :name`, { name: `${query.name}%` })
        .orWhere(`city.postcode like :postcode`, {
          postcode: `${query.postcode}%`,
        })
        .orderBy('city.name', 'ASC')
        .limit(100)
        .getMany();
    } else if (query.postcode !== undefined) {
      cities = await this.cityRepository
        .createQueryBuilder('city')
        .select()
        .where(`city.postcode like :postcode`, {
          postcode: `${query.postcode}%`,
        })
        .orderBy('city.name', 'ASC')
        .limit(100)
        .getMany();
    }

    /**
     * Return error for no cities result
     */
    if (!cities) {
      throw new NotFoundException('Sorry but no results');
    }

    /**
     * Split result by metropolitan city and others
     */
    cities.forEach((city) => {
      const firstNumberPostcode: string = city.postcode.substring(0, 2);
      if (firstNumberPostcode === '97' || firstNumberPostcode === '98') {
        splittedCities.others = [...splittedCities.others, city];
      } else {
        splittedCities.metropolitan = [...splittedCities.metropolitan, city];
      }
    });

    return splittedCities;
  }
}
