import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const MenuButton = ({ classN, link, classNActive, nombre }) => {
  const router = useRouter();
  const isActive = router.pathname === link;

  return (
    <>
      <div className="w-full">
        <Link className={isActive ? classNActive : classN} href={link}>
          {nombre}
        </Link>
      </div>
    </>
  );
};

export default MenuButton;
