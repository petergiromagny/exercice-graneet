import React, { ChangeEvent, FC } from 'react';
import { Box, Flex, Heading, Input } from '@chakra-ui/react';

interface Props {
  value: string;
  handleOnChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: FC<Props> = ({ value, handleOnChange }) => {
  return (
    <Box bg='gray.300' px={2} borderRadius='2xl'>
      <Flex align='center'>
        <Box w='250px' mr={5} ml={5} py={4}>
          <Heading as='h1' size='xl'>
            Je recherche...
          </Heading>
        </Box>
        <Box flex='1' color='gray.500'>
          <Input
            value={value}
            onChange={handleOnChange}
            type='text'
            placeholder='...une ville, un code postale'
            size='xl'
            focusBorderColor='gray.900'
            borderRadius='2xl'
            pl={5}
            py={3}
            fontWeight={700}
            bg='gray.200'
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default SearchBar;
