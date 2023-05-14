import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-start justify-end p-24 ${inter.className}`}
    >
      <div className="grid grid-cols-[4fr,5fr] items-center">
        <div className="rounded-full overflow-hidden w-24 h-24">
          <Image
            src="/images/rhythm_headshot_square.png"
            alt="Rhythm Garg"
            width={64}
            height={64}
            layout="responsive"
          />
        </div>
        <h1 className="text-black dark:text-white text-3xl">Rhythm Garg</h1>

        <div className="text-stone-500 dark:text-stone-500 mt-8">Currently</div>
        <div className="mt-8">CS and Math at Stanford</div>
        <div></div>
        <div>Building with <a href="https://miles.land/" className="underline">Miles</a></div>

        <div className="text-stone-500 dark:text-stone-500 mt-4">Previously</div>
        <div className="mt-4">Bridgewater</div>
        <div></div>
        <div>Google</div>
        <div></div>
        <div>Facebook</div>
        <div></div>
        <div>Stanford AI Lab</div>
        <div></div>
        <div>TreeHacks</div>
        <div></div>
        <div>Actively</div>

        <div className="text-stone-500 dark:text-stone-500 mt-4">Contact</div>
        <div className="mt-4 underline"><a href="mailto:rhythmrrg@gmail.com">Email</a></div>
        <div></div>
        <div className="underline"><a href="https://www.linkedin.com/in/rhythm-garg/">LinkedIn</a></div>

      </div>
    </main>
  )
}
