import React, { useState } from "react";


import Fade from "@material-ui/core/Fade";
import Typography from "@material-ui/core/Typography";

import PrizesForm from "../../../components/prizesForm";

function CreatePrizes() {

  return (
    <Fade in timeout={500}>
      <div className="container">
     <h1>אין לך מה לחפש פה יא האקר</h1>
      </div>
    </Fade>
  );
}

export default CreatePrizes;



// <div>
// <Typography variant="h5">
//   <span
//     style={{
//       color: "white",
//       fontWeight: "300",
//       fontFamily: "Rubik",
//     }}
//   >
//     יצירת פרס חדש
//   </span>
// </Typography>
// </div>
// <PrizesForm />
// {/* styles */}
// <style jsx>{`
// h1 {
//   color: gold;
// }
// h3 {
//   color: white;
// }
// .container {
//   background: #000000de;
//   z-index: 2;
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   text-align: center;
// }
// .concept {
//   display: flex;
//   flex-direction: column;
//   justify: center;
//   align-items: center;
//   justify-items: center;
//   justify-content: center;
//   justify-self: center;
//   margin: 0 auto;
// }

// .hand-img {
//   width: 87.5%;
//   margin-top: 6vh;
// }
// `}</style>