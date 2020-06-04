import Head from 'next/head';
export const config = { amp: true }

export default function FirstPost() {
    return (
        <>
        <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <h1>First Post</h1>
        </>
    );
  }