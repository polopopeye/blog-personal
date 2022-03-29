import * as React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/seo';
import LoginRegisterBtn from '../components/loginRegister/LoginRegisterBtn';

const conectar = () => (
  <Layout>
    <Seo title="Conectar" />
    <div className="grid justify-items-center font-size-4 w-full">
      <h1 className="text-xl">Conectar</h1>
      <hr />
      <LoginRegisterBtn />
    </div>
  </Layout>
);

export default conectar;
