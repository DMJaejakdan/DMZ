import { base } from '@/styles/styles.css';
import App, { AppContext, AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className={base}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
MyApp.getInitialProps = async (ctx: AppContext) => {
  const appProps = await App.getInitialProps(ctx);
  return appProps;
};

export default MyApp;
