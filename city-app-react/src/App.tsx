import React, { ChangeEvent, useState } from 'react';
import { Box } from '@chakra-ui/layout';
import { Flex, Spacer } from '@chakra-ui/react';
// Import styles
import './style/scss/App.scss';
// Import components
import Alert from './components/Alert';
import CardResult from './components/CardResult';
import SearchBar from './components/SearchBar';
import TagResult from './components/TagResult';
import { CityDto } from './api/dto/city.dto';
// Import API
import CityApi from './api/city.api';

function App() {
  const [searchInput, setSearchInput] = useState<string>('');
  const [metropolitanCities, setMetropolitanCities] = useState<CityDto[]>([]);
  const [othersCities, setOthersCities] = useState<CityDto[]>([]);

  // Handle input changes
  const handleOnChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    // set the value of input
    setSearchInput(inputValue);

    // inputValue filter
    if (parseInt(inputValue.substring(0, 2))) {
      // Use API with postal code
      CityApi.getCities({
        postcode: event.target.value,
      }).then((cities) => {
        setMetropolitanCities(cities.metropolitan);
        setOthersCities(cities.others);
      });
    } else {
      // Use API with name
      CityApi.getCities({
        name: event.target.value,
      }).then((cities) => {
        setMetropolitanCities(cities.metropolitan);
        setOthersCities(cities.others);
      });
    }
  };
  return (
    <div id='app__container'>
      <Box h='15%'>
        <SearchBar value={searchInput} handleOnChange={handleOnChange} />
      </Box>
      <Box h='85%'>
        <Flex h='100%'>
          <Box w='49%'>
            <CardResult title='Villes de métropole'>
              <Alert lengthResults={metropolitanCities.length} />
              <Box>
                <Flex wrap='wrap' justifyContent='space-between'>
                  {metropolitanCities.map((city) => {
                    return (
                      <Box w='47%' key={city.id_city}>
                        <TagResult name={city.name} postcode={city.postcode} />
                      </Box>
                    );
                  })}
                </Flex>
              </Box>
            </CardResult>
          </Box>
          <Spacer />
          <Box w='49%'>
            <CardResult title="Villes d'outre-mer">
              <Alert lengthResults={othersCities.length} />
              <Box>
                <Flex wrap='wrap' justifyContent='space-between'>
                  {othersCities.map((city) => {
                    return (
                      <Box w='47%' key={city.id_city}>
                        <TagResult name={city.name} postcode={city.postcode} />
                      </Box>
                    );
                  })}
                </Flex>
              </Box>
            </CardResult>
          </Box>
        </Flex>
      </Box>
    </div>
  );
}

export default App;
