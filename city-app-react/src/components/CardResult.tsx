import React, { FC, ReactNode } from 'react';
import { Box, Heading } from '@chakra-ui/react';

interface Props {
  title: string;
  children: ReactNode;
}

const CardResult: FC<Props> = ({ title, children }) => {
  return (
    <Box
      w='100%'
      py={5}
      px={10}
      color='white'
      bg='gray.300'
      borderRadius='2xl'
      h='100%'
      overflowY='auto'
    >
      <Heading as='h2' size='xl' textAlign='center' mb={8}>
        {title}
      </Heading>
      <Box>{children}</Box>
    </Box>
  );
};

export default CardResult;
