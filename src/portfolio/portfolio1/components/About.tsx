import Box from '@mui/material/Box';
import Text from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import { Data } from '../../../util/interface';

const line = {
  position: 'absolute',
  content: '""',
  width: '50px',
  height: '3px',
  background: 'black',
  top: '50%',
  transform: 'translateY(-50%)',
};

export default function About(props: Data) {
  return (
    <Box
      id="about"
      sx={{
        padding: { xs: 'calc(16px + 4%)', sm: 'calc(24px + 4%)' },
        paddingTop: '80px !important',
      }}
    >
      <Text
        variant="h3"
        sx={{
          textAlign: 'center',
          fontWeight: 500,
        }}
      >
        About me
      </Text>
      <Text
        variant="h5"
        sx={{
          textAlign: 'center',
          color: 'crimson',
          position: 'relative',
          '&:after': {
            ...line,
            left: 'calc(55px + 50%)',
          },
          '&:before': {
            ...line,
            right: 'calc(55px + 50%)',
          },
        }}
      >
        who i am
      </Text>
      <Grid container spacing={6} sx={{}} mt="10px">
        <Grid item xs={5}>
          <Image
            src="/banner.jpg"
            alt="Description of the image"
            width={350}
            height={350}
            style={{ width: '100%', height: 'auto', borderRadius: '6px' }}
          />
        </Grid>
        <Grid item xs={7}>
          <Text variant="h5">
            I'm {props.firstName} and I'm {props.profession}
          </Text>
          <Text variant="subtitle1">I'm Bidur</Text>
        </Grid>
      </Grid>
    </Box>
  );
}
