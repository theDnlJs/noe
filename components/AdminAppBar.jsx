import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "next/link";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { useUser } from "../utils/auth/useUser";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const { user, logout } = useUser();
  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <AppBar color="transparent" position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <div>
              <Button  variant="contained" color="primary">
                <Link href={"/admin/prize-table"}>
                  <a style={{ textDecoration: "none", color: "white" }}>
                    טבלת פרסים
                  </a>
                </Link>
              </Button>
            </div>{" "}
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <div>
              <Button  variant="contained" color="primary">
                <Link href={"/admin/lead-table"}>
                  <a style={{ textDecoration: "none", color: "white" }}>
                    טבלת ליידים
                  </a>
                </Link>
              </Button>
            </div>
          </Typography>
          <Typography variant="h6" className={classes.title}>
           {user ? <div>
              <Button onClick={logout} variant="contained" color="primary">
                התנתק
              </Button>
            </div> :  <div>
              <Button onClick={logout} variant="contained" color="primary">
                התחבר
              </Button>
            </div>}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
