import Head from "next/head";
import { useEffect } from "react";
import { useWindowSize } from "../src/hooks/useWindowSize";
import GameScreen from "../screens/GameScreen";
import NotMobile from "../components/NotMobile.jsx";
import { NextSeo } from 'next-seo'

export default function Home() {
  const size = useWindowSize();
  useEffect(() => {

  }, []);
  return (
      <div  className="container">
      
        <NextSeo
        title="מגרדים וזוכים במיינסטרים"
        description="הפעילות שמשגעת את העיר, מותג האופנה מיינסטרים מחלק לכם הטבות ומתנות למימוש בחנות
        תמונה אשלח בראשון"
        canonical="https://www.mainstreamen.com/"
        openGraph={{
          url: 'https://www.mainstreamen.com/',
          title: 'מגרדים וזוכים במיינסטרים',
          description: `הפעילות שמשגעת את העיר, מותג האופנה מיינסטרים מחלק לכם הטבות ומתנות למימוש בחנות
          תמונה אשלח בראשון`,
          images: [
            {
              url: 'https://mainstreamen.com/image/catalog/באנרים/NEW BR 10.7.jpg',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
            },
            {
              url: 'https://mainstreamen.com/image/catalog/באנרים/NEW BR 10.7.jpg',
              width: 900,
              height: 800,
              alt: 'Og Image Alt Second',
            },
            { url: 'https://mainstreamen.com/image/catalog/באנרים/NEW BR 10.7.jpg' },
            { url: 'https://mainstreamen.com/image/catalog/באנרים/NEW BR 10.7.jpg' },
          ],
        }}
      />
        {size.width > 1336 && <NotMobile />}
        {size.width < 1336 && <GameScreen />}
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
