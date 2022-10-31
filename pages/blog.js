import Head from 'next/head';
import Image from 'next/image';

export default function Blog() {
    return (
      <div>
        <Head>
            <title>Emma Gillespie Blog</title>
            <meta name="description" content="My personal blog" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="bg-gradient-to-b from-white to-gray-200 px-10 md:px-20 lg:px-40">
            {/* Below in here will be the code for the blog page */}
            <nav className="py-10 mb-12 flex justify-between">
                <h1 className="text-xl font-burtons">aka IvoryCoding</h1>
                <ul className="flex items-center">
                    <li><a href="https://ivorycoding-react-portfolio.vercel.app/" className=" px-4 py-2 ml-8">Back</a></li>
                </ul>
            </nav>
        </main>
      </div>
    )
  }