import Head from "next/head";
import { useEffect } from "react";
import { useWindowSize } from "../src/hooks/useWindowSize";
import GameScreen from "../screens/GameScreen";
import NotMobileScreen from "../screens/NotMobileScreen";
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((r) => r.json());


export default function Home() {
  const { data, error } = useSWR('/api/leads', fetcher);
  if (error) return <div>failed to load</div>;
  // Our custom hook to get context values
  const size = useWindowSize();

  useEffect(() => {

  }, []);
  return (
      <div className="container">
        <Head>
          <title>Next.js w/ Firebase Client-Side</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {size.width > 780 && <NotMobileScreen />}
        {size.width < 780 && <GameScreen />}
        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>

  );
}
