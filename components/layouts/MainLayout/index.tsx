import Head from "next/head";
import { ReactNode } from "react";

import { Body } from "./style";

interface MainLayoutProps {
  title: string;
  children: ReactNode;
  seoTitle?: string;
}

export default function MainLayout({
  title,
  children,
  seoTitle,
}: MainLayoutProps) {
  return (
    <div>
      <Head>
        <title>{seoTitle} | Socbol</title>
      </Head>
      <Body>{children}</Body>
    </div>
  );
}
