import * as React from 'react';
import Layout from '../layout/Layout';
import Seo from '../components/seo';
import LoginRegisterBtn from '../components/loginRegister/LoginRegisterBtn';
import { useTranslation } from 'react-i18next';

const Conectar = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Seo title="Conectar" />
      <div className="grid justify-items-center font-size-4 w-full">
        <h1 className="text-xl">{t('connect')}</h1>
        <hr />
        <LoginRegisterBtn />
      </div>
    </Layout>
  );
};

export default Conectar;
