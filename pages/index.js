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
        canonical="https://mainstream.ada.graphics/"
        openGraph={{
          url: 'https://www.mainstreamen.com/',
          title: 'מגרדים וזוכים במיינסטרים',
          description: `הפעילות שמשגעת את העיר, מותג האופנה מיינסטרים מחלק לכם הטבות ומתנות למימוש בחנות
          תמונה אשלח בראשון`,
          images: [
            {
              url: 'https://mainstream.ada.graphics/images/scratch-layer.png',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
            },
            {
              url: 'https://mainstream.ada.graphics/images/scratch-layer.png',
              width: 900,
              height: 800,
              alt: 'Og Image Alt Second',
            },
            { url: 'https://mainstream.ada.graphics/images/scratch-layer.png' },
            { url: 'https://mainstream.ada.graphics/images/scratch-layer.png' },
          ],
        }}
      />
        {size.width > 1336 && <NotMobile />}
        {size.width < 1336 && <GameScreen />}
        <style jsx global>{`

        `}</style>
      </div>

  );
}
