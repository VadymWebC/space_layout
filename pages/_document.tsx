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
                />
                <Link
                    rel="preload"
                    href="/fonts/MazzardH-Medium.woff2"
                    as="font"
                    type="font/woff2"
                />
                <Link
                    rel="preload"
                    href="/fonts/MazzardH-Regular.woff2"
                    as="font"
                    type="font/woff2"
                />
                <Link
                    rel="preload"
                    href="/fonts/Move-X-Bold.otf"
                    as="font"
                    type="font/otf"
                />
                <Link
                    rel="preload"
                    href="/fonts/NeueMachina-Bold.woff2"
                    as="font"
                    type="font/woff2"
                />
                <Link
                    rel="preload"
                    href="/fonts/NeueMachina-Medium.woff2"
                    as="font"
                    type="font/woff2"
                />
                <Link
                    rel="preload"
                    href="/fonts/NeueMachina-Regular.woff2"
                    as="font"
                    type="font/woff2"
                />
                <Link
                    rel="preload"
                    href="/fonts/TTOctosquares-Medium.otf"
                    as="font"
                    type="font/otf"
                />
                <Link
                    rel="preload"
                    href="/fonts/TTOctosquares-Regular.otf"
                    as="font"
                    type="font/otf"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
