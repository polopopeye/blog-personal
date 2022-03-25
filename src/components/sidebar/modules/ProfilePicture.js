import React from 'react';
import FotoPerfil from '../../../images/profile.jpg';
import { MainImage } from 'gatsby-plugin-image';
import { useTranslation } from 'react-i18next';

const ProfilePicture = () => {
  const { t } = useTranslation();
  return (
    <div className="inline-flex ">
      <MainImage
        alt={t('tooHotPerson')}
        className="rounded-full border-white border-8"
        src={FotoPerfil}
      />
    </div>
  );
};

export default ProfilePicture;
