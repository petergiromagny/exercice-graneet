import { BodyCityDto } from './dto/body-city.dto';
import { TypeCitiesDto } from './dto/type-cities.dto';

export default class CityApi {
  public static async getCities(param: BodyCityDto): Promise<TypeCitiesDto> {
    let setParam: string;

    // setParam with only one for query
    if (param.name) {
      setParam = `name=${param.name}`;
    } else {
      setParam = `postcode=${param.postcode}`;
    }

    const resp = await fetch(`http://localhost:3000/city/cities?${setParam}`, {
      method: 'GET',
    });

    const response = await resp.json();

    return response;
  }
}
