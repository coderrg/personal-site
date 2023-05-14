import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-stone-200 dark:bg-stone-800 text-stone-600 dark:text-stone-400 text-xl font-medium">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
