import Head from "next/head"

import { TopPageView } from "@/components/page/Top/View"

import type { NextPage } from "next"

export const TopPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>NextWind</title>
        <meta
          name="description"
          content="A template for prototyping with Next.js and Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopPageView />
    </>
  )
}
