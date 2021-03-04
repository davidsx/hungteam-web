import Image from 'next/image';
import React from 'react';

const Logo = () => (
    <Image src="/images/hungteam.gif" alt="home" width={60} height={60} objectFit="contain" />
);

export default Logo;
