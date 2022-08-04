import React from 'react';
import PortalSvg from '../assets/PortalSvg';
import '../assets/portal.scss';
import rick from '../assets/rick.png';
import morty from '../assets/morty.png';
export default function LandingIllustration() {
  return (
    <div className='illustration'>
      <img src={morty} alt='Morty' className='morty' />
      <PortalSvg width='80%' />
      <img src={rick} alt='Rick' className='rick' />
    </div>
  );
}
