import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const Nav = dynamic(() => import('dmzlib/Nav'), { ssr: false });
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Link href={process.env.NEXT_PUBLIC_ROOT as string}>
        <Nav text="드라마영화아카이브로 가기" />
      </Link>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;