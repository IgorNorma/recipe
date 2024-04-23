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
    <Helmet
      title={title}
      meta={[
        { name: "desciption", content: description },
        { name: "og:image", content: image },
      ]}
    >
      <link rel="canonical" href={`${process.env.DOMAIN}/${url}`} />
    </Helmet>
  )
}

export default Seo
