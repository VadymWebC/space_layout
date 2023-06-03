import { Html, Head, Main, NextScript } from 'next/document'
import Link from 'next/link'

export default function Document() {
    return (
        <Html>
            <Head>
                <Link
                    rel="preload"
                    href="/fonts/MazzardH-Bold.otf"
                    as="font"
                    type="font/otf"
                    crossOrigin=""
                />
            </Head>
            <body>
                sdfsdf
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
