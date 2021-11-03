import { Box } from '@chakra-ui/react';
import React, { FC } from 'react';

interface Props {
  lengthResults: number;
}

const Alert: FC<Props> = ({ lengthResults }) => {
  if (lengthResults === 0) {
    return (
      <Box
        bg='red.600'
        w='100%'
        p={5}
        my={5}
        color='white'
        fontSize={20}
        fontWeight={700}
      >
        Aucune ville correspondant au texte saisi
      </Box>
    );
  }

  return (
    <>
      <Box
        bg='green.500'
        w='100%'
        p={5}
        my={5}
        color='white'
        fontSize={20}
        fontWeight={700}
      >
        {lengthResults}
        {lengthResults > 1
          ? ' villes correspondant au texte saisi'
          : ' ville correspondant au texte saisi'}
      </Box>
    </>
  );
};

export default Alert;
