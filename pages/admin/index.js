import React from "react";
import { useUser } from "../../utils/auth/useUser";
import Link from "next/link";
import AdminAppBar from '../../components/AdminAppBar'
function index() {
  const { user, logout } = useUser();
  if (!user) {
    return (
      <>
        <p>היי גבר</p>
        <p>
          אתה לא מחובר
          <Link href={"/auth"}>
            <a> התחבר</a>
          </Link>
        </p>
      </>
    );
  }
  if (user) {
    return (
      <>
      <AdminAppBar/>
      </>
    );
  }
}

export default index;
