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
              url: 'https://scontent.ftlv2-1.fna.fbcdn.net/v/t1.0-9/86730992_1285660681630634_2632808467047383040_n.jpg?_nc_cat=102&_nc_sid=09cbfe&_nc_ohc=jQEvcGzH6XQAX9rpq4I&_nc_ht=scontent.ftlv2-1.fna&oh=70b9b075489de0a861e3fb065757c9c0&oe=5F7C643F',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
            },
            {
              url: 'https://scontent.ftlv2-1.fna.fbcdn.net/v/t1.0-9/86730992_1285660681630634_2632808467047383040_n.jpg?_nc_cat=102&_nc_sid=09cbfe&_nc_ohc=jQEvcGzH6XQAX9rpq4I&_nc_ht=scontent.ftlv2-1.fna&oh=70b9b075489de0a861e3fb065757c9c0&oe=5F7C643F',
              width: 900,
              height: 800,
              alt: 'Og Image Alt Second',
            },
            { url: 'https://scontent.ftlv2-1.fna.fbcdn.net/v/t1.0-9/86730992_1285660681630634_2632808467047383040_n.jpg?_nc_cat=102&_nc_sid=09cbfe&_nc_ohc=jQEvcGzH6XQAX9rpq4I&_nc_ht=scontent.ftlv2-1.fna&oh=70b9b075489de0a861e3fb065757c9c0&oe=5F7C643F' },
            { url: 'https://scontent.ftlv2-1.fna.fbcdn.net/v/t1.0-9/86730992_1285660681630634_2632808467047383040_n.jpg?_nc_cat=102&_nc_sid=09cbfe&_nc_ohc=jQEvcGzH6XQAX9rpq4I&_nc_ht=scontent.ftlv2-1.fna&oh=70b9b075489de0a861e3fb065757c9c0&oe=5F7C643F' },
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
