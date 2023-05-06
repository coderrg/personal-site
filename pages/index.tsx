import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-start justify-end p-24 ${inter.className}`}
    >
      <div className="flex items-center">
        <div className="rounded-full overflow-hidden w-24 h-24 mr-8">
          <Image
            src="/images/rhythm_headshot_square.png"
            alt="Rhythm Garg"
            width={64}
            height={64}
            layout="responsive"
          />
        </div>
        <h1 className="text-3xl font-bold">Rhythm Garg</h1>
      </div>
    </main>
  )
}
