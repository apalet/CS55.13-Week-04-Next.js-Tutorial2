// next/script is an extension of the HTML <script> element and optimizes when additional scripts are fetched and executed.
import Script from 'next/script'
// next/head is used to manage the HTML <head> element and its contents.
// next/link is used to create links between pages within the same application.
import Head from 'next/head';
// next/link is used to create links between pages within the same application.
import Link from 'next/link';
// Layout is a component that wraps the content of the page and provides a consistent layout for all pages.
import Layout from '../../components/layout'; 


export default function FirstPost() {
    return (
        // Layout is a component that wraps the content of the page and provides a consistent layout for all pages.
        <Layout>
            {/* Head is a component that manages the HTML head element and its contents. */}
            <Head>
                <title>First Post</title>
            </Head>
            {/* Script is a component that fetches and executes third-party scripts. */}
            {/* <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                // strategy controls when the third-party script should load. 
                // A value of lazyOnload tells Next.js to load this particular script lazily during browser idle time
                strategy="lazyOnload"
                // onLoad is used to run any JavaScript code immediately after the script has finished loading. 
                onLoad={() =>
                    console.log(`script loaded correctly, window.FB has been populated`)
                }
            /> */}
            <h1>First Post</h1>
            <h2>
                {/* Link is a component that creates a link to another page within the same application. */}
                <Link href="/">Back to home</Link>
            </h2>
        </Layout>
    );
}