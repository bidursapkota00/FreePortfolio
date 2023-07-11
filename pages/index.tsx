import { GetServerSideProps } from 'next';
import { Home } from '../src/portfolio/portfolio1';
import data from '../src/util/data.json';
import { Data } from '../src/util/interface';

interface PageProps {
  data: Data;
}

export default function Portfolio({ data }: PageProps) {
  return <Home {...data} />;
}

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
  return {
    props: {
      data: data[0],
    },
  };
};
