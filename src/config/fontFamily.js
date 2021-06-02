import React from 'react';

const FontFamily = ({ href }) => (
    <>
        <link rel="preload" as="style" href={href} />
        <link rel="stylesheet" href={href} media="print" onLoad="this.media='all'" />
        <noscript>
            <link rel="stylesheet" href={href} />
        </noscript>
    </>
);

export default FontFamily;
