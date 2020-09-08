import Grid from "@material-ui/core/Grid";
import Fade from "@material-ui/core/Fade";
import Typography from "@material-ui/core/Typography";
import Appbar from "./Appbar";
function NotMobile() {
  return (
    <Fade in timeout={500}>
      <div className="container">
          <Appbar />
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
                ההשתתפות במשחק
                <br />
                ממכשירי מוביל
                <br />
                בלבד!
              </span>
            </Typography>
            <br />

            <br />
            <br />
          </div>
        </div>
        <Grid container></Grid>
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
            width: 100vw;
            height: 90vh;
            padding: 0;
            z-index: 1;
            overflow: hidden;
            scroll: none;
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
            height: 90vh;
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

export default NotMobile;
