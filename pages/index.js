import Head from "next/head";
import { useEffect } from "react";
import { useWindowSize } from "../src/hooks/useWindowSize";
import GameScreen from "../screens/GameScreen";
import NotMobile from "../components/NotMobile";

export default function Home() {
  const size = useWindowSize();
  useEffect(() => {

  }, []);
  return (
      <div  className="container">
        <Head>
          <title>MAINSTREAM</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {size.width > 900 && <NotMobile />}
        {size.width < 900 && <GameScreen />}
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
