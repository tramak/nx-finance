import React from 'react';
import HeadNext from 'next/head';

interface IHeadProps {
  title?: string;
  description?: string;
}

export const Head = ({ title, description }: IHeadProps) => {
  return (
    <HeadNext>
      <title>{title || 'Нескучные финансы'}</title>
      {description && (
        <meta name="description" content={description} />
      )}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/logo152.png" />
      <link rel="manifest" href="/manifest.json" />
    </HeadNext>
  )
};
