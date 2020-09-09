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
              url: 'https://scontent.ftlv2-1.fna.fbcdn.net/v/t45.1600-4/cp0/q90/spS444/p526x296/119053582_6202639613369_3640154217371159675_n.png.jpg?_nc_cat=106&_nc_sid=67cdda&_nc_ohc=lOb2kDr02UAAX8C1X-x&_nc_ht=scontent.ftlv2-1.fna&oh=6383d470f2ea0cd56e9c02bbaf382be6&oe=5F802FA5',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
            },
            {
              url: 'https://scontent.ftlv2-1.fna.fbcdn.net/v/t45.1600-4/cp0/q90/spS444/p526x296/119053582_6202639613369_3640154217371159675_n.png.jpg?_nc_cat=106&_nc_sid=67cdda&_nc_ohc=lOb2kDr02UAAX8C1X-x&_nc_ht=scontent.ftlv2-1.fna&oh=6383d470f2ea0cd56e9c02bbaf382be6&oe=5F802FA5',
              width: 900,
              height: 800,
              alt: 'Og Image Alt Second',
            },
            { url: 'https://scontent.ftlv2-1.fna.fbcdn.net/v/t45.1600-4/cp0/q90/spS444/p526x296/119053582_6202639613369_3640154217371159675_n.png.jpg?_nc_cat=106&_nc_sid=67cdda&_nc_ohc=lOb2kDr02UAAX8C1X-x&_nc_ht=scontent.ftlv2-1.fna&oh=6383d470f2ea0cd56e9c02bbaf382be6&oe=5F802FA5' },
            { url: 'https://scontent.ftlv2-1.fna.fbcdn.net/v/t45.1600-4/cp0/q90/spS444/p526x296/119053582_6202639613369_3640154217371159675_n.png.jpg?_nc_cat=106&_nc_sid=67cdda&_nc_ohc=lOb2kDr02UAAX8C1X-x&_nc_ht=scontent.ftlv2-1.fna&oh=6383d470f2ea0cd56e9c02bbaf382be6&oe=5F802FA5' },
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
