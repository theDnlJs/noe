import React from "react";
import { useUser } from "../../utils/auth/useUser";
import Link from "next/link";

function index() {
  const { user, logout } = useUser();
  if (!user) {
    return (
      <>
        <p>Hi there!</p>
        <p>
          You are not signed in.{' '}
          <Link href={'/auth'}>
            <a>Sign in</a>
          </Link>
        </p>
      </>
    )
  }
  if (user) {
      return ( 
          <>
          <h1>אהלן גבר</h1>
          </>
      )
  }
}

export default index;
