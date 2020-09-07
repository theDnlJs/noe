import React from "react";
import { useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Fade from "@material-ui/core/Fade";
import Typography from "@material-ui/core/Typography";
import LeadForm from "../LeadForm";
import { increment } from "../../lib/slices/gameSlice";
import { Animated } from "react-animated-css";

const fetcher = (url) => fetch(url).then((r) => r.json());
function StepTwo() {
  const dispatch = useDispatch()

  function dispatchIncrement() {
    dispatch(increment());
  }
  return (
    <Fade in timeout={500}>
      <div className="container">
        <div className="overlay">
          <div>
            <Typography variant="h2">
            <Animated
            animationInDuration={1000}
              animationInDelay={250}
              animateOnMount={true}
              animationIn="slideInRight"
              animationOut="slideInRight"
              isVisible={true}
            >
              <span
                style={{
                  color: "#ffd700",
                  fontWeight: "700",
                }}
                >
                רגע גבר!
              </span>
                </Animated>
            </Typography>
            <Typography variant="h4">
            <Animated
            animationInDuration={1000}
              animationInDelay={330}
              animateOnMount={true}
              animationIn="fadeIn"
              animationOut="fadeIn"
              isVisible={true}
            >

              <span
                style={{
                  color: "white",
                  fontWeight: "300",
                  
                }}
                >
                לפני שמשחקים
              </span>
                </Animated>
            </Typography>
            <Typography variant="h4" gutterBottom>
            <Animated
            animationInDuration={1000}
              animationInDelay={500}
              animateOnMount={true}
              animationIn="fadeIn"
              animationOut="fadeIn"
              isVisible={true}
            >

              <span
                style={{
                  color: "white",
                  fontWeight: "300",
                  
                }}
                >
                מלא את הפרטים
              </span>
                </Animated>
            </Typography>
          </div>
          <Animated
            animationInDuration={1000}
              animationInDelay={750}
              animateOnMount={true}
              animationIn="zoomIn"
              animationOut="zoomIn"
              isVisible={true}
            >
          <LeadForm />
            </Animated>
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
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            text-align: center;
          }
          .hand-img {
            width: 87.5%;
            margin-top: 6vh;
            margin-left: 10vw;
          }
        `}</style>
      </div>
    </Fade>
  );
}

export default StepTwo;
