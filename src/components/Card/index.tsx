import { Link } from "gatsby"
import { GatsbyImage, ImageDataLike, getImage } from "gatsby-plugin-image"
import React from "react"
import { getSlug } from "../../utils/get-slug"
import { getCorrectImage } from "../../utils/get-image"

interface Prop {
  name: string
  gallery: { gatsbyImageData: ImageDataLike; title: string }[]
  title: string
}

function Card({ name, title, gallery }: Prop) {
  return (
    <Link to={`/recipes/${getSlug(name)}`} className="recipe-item">
      <GatsbyImage
        image={getImage(getCorrectImage("mobile", gallery)!)!}
        alt={title}
      />
      <p>{title}</p>
    </Link>
  )
}

export default Card
