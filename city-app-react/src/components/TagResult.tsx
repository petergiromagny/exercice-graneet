import { Box, Flex, Spacer } from '@chakra-ui/react';
import React, { FC } from 'react';

interface Props {
  name: string;
  postcode: string;
}

const TagResult: FC<Props> = ({ name, postcode }) => {
  return (
    <Box bg='gray.600' w='100%' p={5} my={5} fontSize={20}>
      <Flex>
        <Box color='white' fontWeight={700}>
          {name}
        </Box>
        <Spacer />
        <Box color='gray.400' fontWeight={700}>
          {postcode}
        </Box>
      </Flex>
    </Box>
  );
};

export default TagResult;
