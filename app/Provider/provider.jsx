"use client";

import { SessionProvider } from "next-auth/react";

const NextAuthProvider = (props) => {
  const { children } = props;
  return <SessionProvider>{children}</SessionProvider>;
};

export default NextAuthProvider;