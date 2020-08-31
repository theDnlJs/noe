import React, {useEffect} from 'react'
import Typography from "@material-ui/core/Typography";

function AlreadyPlayed() {
    return (
        <div style={{ textAlign:'center', display: 'flex', justifyContent:'center',
        marginTop:'10vh' }}>
                        <Typography variant="subtitle1">
              <span
                style={{
                  color: "black",
                  fontWeight: "300",
                  fontFamily: "Rubik",
                  padding: '1remm'
                }}
              >
                    היי אחי נראה שבר שיחקת
                    <br/>
                    <span style={{ marginTop:'10vh' }}>
                   אבל אל תדאג תבוא לסניף נפנק אותך
                    </span>
              </span>
            </Typography>
   
        </div>
    )
}

export default AlreadyPlayed
