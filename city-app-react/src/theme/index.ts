import { extendTheme, theme as base } from '@chakra-ui/react';

const fontsConfig = {
  fonts: {
    heading: `Montserrat, ${base.fonts?.heading}`,
    body: `Montserrat, ${base.fonts?.body}`,
  },
};

const theme = extendTheme({
  fontsConfig,
});

export default theme;
