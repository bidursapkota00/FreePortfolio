import Box from '@mui/material/Box';
import Text from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Data } from '../../../util/interface';

export default function Top(props: Data) {
  return (
    <>
      <Box
        sx={{
          background: 'url(/banner.jpg) no-repeat center',
          height: '100vh',
          color: '#fff',
          minHeight: '500px',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          padding: { xs: 'calc(16px + 4%)', sm: 'calc(24px + 4%)' },
        }}
      >
        <Text variant="h4" sx={{ paddingTop: '18vh' }}>
          Hi, I'm
        </Text>
        <Text
          variant="h1"
          sx={{
            fontSize: { xs: '4rem', sm: '7rem' },
            textTransform: 'capitalize',
            fontWeight: 500,
          }}
        >
          {props.firstName + ' ' + props.middleName + ' ' + props.lastName}
        </Text>
        <Text
          variant="h4"
          sx={{ fontSize: { xs: '2rem', sm: '3.5rem' }, marginBottom: '3rem' }}
        >
          {props.profession}
        </Text>
        <Button
          variant="contained"
          sx={{
            padding: '10px 30px',
            textTransform: 'none',
            background: 'crimson',
            fontSize: '23px',
            fontWeight: 400,
            transition: 'all 0.3s ease',
            border: '2px solid crimson',
            '&:hover': {
              background: 'transparent',
            },
          }}
        >
          Hire me
        </Button>
      </Box>
    </>
  );
}
