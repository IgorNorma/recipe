import React from "react"
import { Helmet } from "react-helmet"

export interface SeoProp {
  title: string
  description: string
  image: string
  url: string
}

function Seo({ title, description, image, url }: SeoProp) {
  return (
    <Helmet title={title}>
      <meta property="og:image:url" content={image} />
      <meta property="og:image" content={image} />
      <meta name="description" content={description} />
      <meta name="og:url" content={`${process.env.DOMAIN}${url}`} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <link rel="canonical" href={`${process.env.DOMAIN}${url}`} />
    </Helmet>
  )
}

export default Seo
