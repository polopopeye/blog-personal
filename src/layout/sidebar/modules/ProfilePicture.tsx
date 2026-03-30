import React from 'react';
import profileUrl from '../../../images/profile.jpg';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

const ProfilePicture = () => {
  const { t } = useTranslation('common');
  return (
    <div className="inline-flex ">
      <Image
        alt={t('tooHotPerson')}
        className="rounded-full border-white border-8"
        src={profileUrl}
        width={100}
        height={100}
      />
    </div>
  );
};

export default ProfilePicture;
