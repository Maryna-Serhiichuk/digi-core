import { useMediaQuery } from 'react-responsive';

type BreakpointType = 'XS' | 'SM' | 'MD' | 'LG' | 'XL' | 'XXL'

const breakpoints = {
    XS: 480,
    SM: 576,
    MD: 768,
    LG: 992,
    XL: 1200,
  } as const;