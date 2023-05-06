import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-stone-200 dark:bg-stone-800 text-black dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
