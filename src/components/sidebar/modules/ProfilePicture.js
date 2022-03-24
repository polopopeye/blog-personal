import React from 'react';
import FotoPerfil from '../../../images/profile.jpg';
import { MainImage } from 'gatsby-plugin-image';

const ProfilePicture = () => {
  return (
    <div class="inline-flex ">
      <MainImage class="rounded-full border-white border-8" src={FotoPerfil} />
    </div>
  );
};

export default ProfilePicture;
