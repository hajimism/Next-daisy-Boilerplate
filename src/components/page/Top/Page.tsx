import Head from "next/head"

import { TopPageView } from "@/components/page/Top/View"

import type { NextPage } from "next"

export const TopPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next & daisyUI</title>
        <meta
          name="description"
          content="A template for prototyping with Next.js and daisy UI"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopPageView />
    </>
  )
}
