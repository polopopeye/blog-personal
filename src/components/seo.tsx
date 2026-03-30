import * as React from 'react';
import { Helmet } from 'react-helmet-async';

interface SeoProps {
  description?: string;
  lang?: string;
  meta?: any[];
  title: string;
}

function Seo({ description = '', lang = 'en', meta = [], title }: SeoProps) {
  const siteMetadata = {
    title: 'Blog Personal Kenneth',
    description: 'Blog donde mostrar proyectos y CV de Kenneth Suarez',
    author: 'Kenneth Suarez',
  };

  const metaDescription = description || siteMetadata.description;
  const defaultTitle = siteMetadata.title;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : undefined}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: siteMetadata.author || '',
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
}

export default Seo;
