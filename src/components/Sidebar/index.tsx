import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import "./style.scss"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { getSlug } from "../../utils/get-slug"

export const query = graphql`
  query SidebarContent {
    allContentfulBlog(filter: { popular: { eq: true } }) {
      nodes {
        banner {
          gatsbyImageData(
            height: 1000
            formats: WEBP
            width: 1500
            layout: CONSTRAINED
            placeholder: DOMINANT_COLOR
          )
        }
        id
        title
      }
    }
    allContentfulRecipe(filter: { popular: { eq: true } }) {
      nodes {
        gallery {
          gatsbyImageData(
            height: 150
            width: 300
            quality: 90
            layout: CONSTRAINED
            formats: WEBP
            placeholder: DOMINANT_COLOR
          )
        }
        title
        id
        name
      }
    }
  }
`

export default function Sidebar() {
  const {
    allContentfulBlog: { nodes: blogs },
    allContentfulRecipe: { nodes: recipes },
  } = useStaticQuery(query)

  return (
    <aside className="side-content">
      <h2 className="title">trending blogs</h2>
      <div className="side-content-list">
        {blogs.map(({ title, banner, id }: any) => {
          return (
            <div>
              <Link to={`/blogs/${getSlug(title)}`} key={id}>
                <GatsbyImage image={getImage(banner)!} alt="featured image" />
                <p>{title}</p>
              </Link>
            </div>
          )
        })}
      </div>
      <br />
      <h2 className="title">popular recipes</h2>
      <div className="side-content-list">
        {recipes.map(({ title, name, id, gallery }: any) => {
          return (
            <div>
              <Link to={`/recipes/${getSlug(name)}`} key={id}>
                <GatsbyImage
                  image={getImage(gallery[0])!}
                  alt="featured image"
                />
                <p>{title}</p>
              </Link>
            </div>
          )
        })}
      </div>
    </aside>
  )
}
