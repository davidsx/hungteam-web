import Document, { Head, Html, Main, NextScript } from 'next/document';

import FontFamily from 'src/config/fontFamily';
import React from 'react';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang="zh-HK">
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <FontFamily href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap" />
                    <FontFamily href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;500;700&display=swap" />
                    <FontFamily href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;700&display=swap" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
