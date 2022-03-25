import React from 'react';
import {
  logOut,
  checkIsLogedIn,
  registerConnect,
} from './components/googleAuth';

const LoginRegisterBtn = () => {
  setTimeout(() => {
    checkIsLogedIn();
  }, 100);

  return (
    <div>
      <h1 id="tittleWelcome"></h1>

      <button
        id="Conectar"
        style={{ display: 'none' }}
        onClick={registerConnect}
        className="bg-gray-900 text-white p-4"
      >
        Entrar / REGISTRARSE
      </button>

      <button
        style={{ display: 'none' }}
        id="Logout"
        onClick={logOut}
        className="bg-gray-900 text-white p-4"
      >
        LOG OUT
      </button>
    </div>
  );
};

export default LoginRegisterBtn;
