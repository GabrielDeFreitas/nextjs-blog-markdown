import type { Metadata } from 'next'
import { Roboto } from 'next/font/google';
import './globals.css'
import Link from 'next/link'
import NetlifyWidget from '../../components/NetlifyWidget';

const roboto = Roboto({
  weight: ['300', '400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const header = (
    <header className="mx-auto  max-w-2xl px-6">
    <div className="text-center bg-slate-800 p-8 my-6 rounded-md">
      <Link href="/">
        <h1 className="text-2xl text-white font-bold mt-4 transition duration-300 hover:underline">
          Next.js Blog
        </h1>
      </Link>
      <p className="text-slate-300">🤟 Welcome to my tech blog. 💻</p>
    </div>
  </header>
  );

  const footer = (
    <footer className="mx-auto  max-w-2xl px-6">
      <div className="border-t border-slate-400 mt-12 py-6 text-center text-slate-400">
        <h3>Next.js Footer</h3>
      </div>
    </footer>
  );

  return (
    <html lang="en">
      <NetlifyWidget/>
      <body className={roboto.className}>
        {header}
        {children}
        {footer}
      </body>
    </html>
  )
}
