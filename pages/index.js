import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '../components/Sidebar'

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black min-h-screen text-white">
        <Sidebar />
      </main>
    </div>
  )
}

export default Home
