import Head from "next/head";

function MyApp({Component, pageProps})
{   
    return(
        <>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
            </Head>

            <Component {...pageProps} />
        </>
    )
}

export default MyApp;
    