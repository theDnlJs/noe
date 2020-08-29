import React from "react";
import ScratchCard from "react-scratchcard";

const settings = {
    width: 320,
    height: 441,
    image: "images/scratch.png",
    finishPercent: 50,
    onComplete: () => console.log('send sms and register the prize to firebase db')
  };
  

function ScratchTicket() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center',alignItems:'center', alignContent:'center', marginTop: '3.5vh', }}>
      
      <ScratchCard {...settings}>

        <img style={{ width: '320px' }} src="images/prize1.png"/>

      </ScratchCard>
    </div>
  );
}

export default ScratchTicket;


