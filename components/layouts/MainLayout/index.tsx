import Head from "next/head";
import { ReactNode } from "react";

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
      {children}
    </div>
  );
}
