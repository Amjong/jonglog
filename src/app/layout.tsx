import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='p-1'>
        <header className='flex place-content-between'>
          <h1 className='font-bold text-3xl ml-3'>Jonglog</h1>
          <div className='flex space-x-4 font-bold mt-2 mr-12 text-slate-600'>
            <Link href='/'>home</Link>
            <Link href='/about'>about</Link>
            <Link href='/posts'>posts</Link>
            <Link href='/contact'>contact</Link>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
