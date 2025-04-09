import React from 'react';
import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Rigon Motor Bar - Experiências Gastronômicas e Entretenimento',
  description = 'O Rigon Motor Bar é um espaço único em Curitiba com gastronomia premium, drinks exclusivos e entretenimento de qualidade. Conheça nosso ambiente sofisticado e programação diversificada.',
  canonical = 'https://rigonmotorbar.com.br',
  ogImage = '/assets/imagens/logo.png',
  noindex = false,
}) => {
  const siteTitle = title.includes('Rigon Motor Bar') ? title : `${title} | Rigon Motor Bar`;
  
  return (
    <Head>
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      
      {/* No index if specified */}
      {noindex && <meta name="robots" content="noindex" />}
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default SEO;