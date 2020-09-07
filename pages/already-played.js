import React from "react";
import Grid from "@material-ui/core/Grid";
import Fade from "@material-ui/core/Fade";
import Typography from "@material-ui/core/Typography";

function alreadPlayed() {
  return (
    <Fade in timeout={500}>
      <div className="container">
        <div className="overlay">
          <div>
            <Typography variant="h2">
              <span
                style={{
                  color: "#ffd700",
                  fontWeight: "700",
                
                }}
              >
                אהלן גבר!
                <br />
                נראה שכבר
                <br />
                שחקת
              </span>
            </Typography>
            <br />
            <Typography variant="body1">
              <span
                style={{
                  color: "white",
                  fontWeight: "300",
                }}
              >
                ניתן להשתתף בפעילות
                <br />
                פעם אחת.
              </span>
            </Typography>
            <br />
            <br />

            <Typography variant="body1">
              <span
                style={{
                  color: "white",
                  fontWeight: "300",
                
                }}
              >
                אבל אל תדאג,
                <br />
                תגיע לסניף
                <br />
                אנחנו נדאג לפנק אותך
              </span>
            </Typography>
          </div>
        </div>
        <Grid container>
          <Grid item xs={12}>
            <img className="hand-img" src="images/hand.png" />
          </Grid>
        </Grid>
        {/* styles */}

        <style jsx>{`
          h1 {
            color: gold;
          }
          h3 {
            color: white;
          }
          .container {
            background-image: url("images/bg1.png");
            background-size: cover;
            min-height: 100vh;
            padding: 0;
            z-index: 1;
          }
          .concept {
            display: flex;
            flex-direction: column;
            justify: center;
            align-items: center;
            justify-items: center;
            justify-content: center;
            justify-self: center;
            margin: 0 auto;
          }
          .overlay {
            background: #000000de;
            z-index: 2;
            position: absolute;
            width: 100%;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            text-align: center;
          }
          .hand-img {
            width: 87.5%;
            margin-top: 6vh;
          }
        `}</style>
      </div>
    </Fade>
  );
}

export default alreadPlayed;
