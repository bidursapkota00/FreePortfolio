import { Home } from '../src/portfolio/portfolio1';
import data from '../src/util/data.json';
import { Data } from '../src/util/interface';

interface PageProps {
  id: string;
  route1: string;
  route2: string;
  data: Data;
}

type Params = {
  params: {
    portfolio: Array<string>;
  };
};

export default function Portfolio({ id, route1, route2, data }: PageProps) {
  switch (route1) {
    case 'about':
      return <h1>About Page</h1>;
    default:
      return <Home {...data} />;
  }
}

export const getServerSideProps = async ({ params }: Params) => {
  // params.id will be like ['a', 'b', 'c']
  const { portfolio } = params;
  //get data from portfolio[0] id
  const user = data.filter((d) => d.id === portfolio[0]);
  if (user.length)
    return {
      props: {
        id: portfolio[0],
        route1: portfolio[1] || '',
        route2: portfolio[2] || '',
        data: user[0],
      },
    };
  return { notFound: true };
};
