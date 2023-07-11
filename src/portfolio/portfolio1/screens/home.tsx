import Box from '@mui/material/Box';
import Navbar from '../components/navbar';
import { Data } from '../../../util/interface';
import Top from '../components/Top';
import About from '../components/About';

export default function Home(data: Data) {
  return (
    <Box sx={{ height: '200vh' }} id="home">
      <Navbar />
      <Top {...data} />
      <About {...data} />
    </Box>
  );
}
