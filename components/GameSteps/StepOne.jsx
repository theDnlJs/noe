import React from "react";

import { useDispatch, useSelector } from "react-redux";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { useSpring, animated } from "react-spring";
import { Animated } from "react-animated-css";

import { increment } from "../../lib/slices/gameSlice";

function FirstScreen() {
  const dispatch = useDispatch();
  const springFade = useSpring({ opacity: 1, from: { opacity: 0 } });
  const test = useSpring({
    to: async (next, cancel) => {
      await next({ opacity: 1, color: "#ffaaee" });
      await next({ opacity: 0, color: "rgb(14,26,19)" });
    },
    from: { opacity: 0, color: "red" },
  });
  function dispatchIncrement() {
    dispatch(increment());
  }

  return (
    <animated.div style={springFade}>
      <div className="container">
        <Grid container>
          <Grid item xs={12}>
            <Animated
            animationInDuration={5000}
              animationInDelay={1500}
              animateOnMount={true}
              animationIn="headShake"
              animationOut="headShake"
              isVisible={true}
            >
              <img className="hand-img" src="images/hand.png" />
            </Animated>
          </Grid>
          <div className="concept">
            <img className="concept-logo" src="images/concept-logo.png" />
            <Button
              onClick={dispatchIncrement}
              variant="contained"
              size="large"
              color="primary"
              style={{
              
                marginTop: "10vh",
                width: "50vw",
                padding: "0.75em",
                fontSize: "1.5rem",
                borderRadius: "18px",
              }}
            >
              {`למשחק>`}
            </Button>
          </div>
        </Grid>

        {/* styles */}

        <style jsx>{`
          .container {
            background: url("images/bg1.png");
            background-size: cover;
            min-height: 100vh;
            padding: 0;
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
          .concept-logo {
            width: 65%;
            margin-top: -7vh;
          }
          .hand-img {
            width: 90.5%;
            margin-top: 6vh;
         
          }
        `}</style>
      </div>
    </animated.div>
  );
}

export default FirstScreen;
