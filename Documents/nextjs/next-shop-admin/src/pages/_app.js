import { ProviderAuth } from '@hooks/useAuth';
import MainLayout from '@layout/MainLayout.js'; // MainLayout = Tiene q ser el mismo nombre q traemos de nuestra funcion de MaiLayout.js
import '@styles/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ProviderAuth>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ProviderAuth>
    </>
  );
}

export default MyApp;
