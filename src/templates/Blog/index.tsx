import React from "react"
import MainLayout from "../../Layout/main-layout"
import { graphql } from "gatsby"
import TwitterIcon from "../../assets/images/icons/twitter.png"
import FbIcon from "../../assets/images/icons/facebook.png"
import LinkedInIcon from "../../assets/images/icons/linkedin.png"
import "./style.scss"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { getSlug } from "../../utils/get-slug"
import { INLINES, BLOCKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"

function Blog({ data: { contentfulBlog: blog } }: any) {
  const seo = {
    title: blog.title,
    description: blog.metaDescription.metaDescription,
    url: `blogs/${getSlug(blog.title)}`,
    image: blog.banner.url,
  }

  const options = {
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => {
        const { uri } = node.data
        return (
          <a href={uri} className="underline">
            {children}
          </a>
        )
      },

      [BLOCKS.HEADING_2]: (node, children) => {
        return <h2 className="secondary-title">{children}</h2>
      },
      [BLOCKS.HEADING_3]: (node, children) => {
        return <h3 className="tertiary-title">{children}</h3>
      },
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const { gatsbyImage, description } = node.data.target
        return <GatsbyImage image={getImage(gatsbyImage)!} alt={description} />
      },
    },
  }

  return (
    <MainLayout seo={seo}>
      <div className="blog-container">
        <h1 className="title">{blog.title}</h1>
        <div>
          <GatsbyImage
            className="banner-image"
            image={getImage(blog.banner)!}
            alt=""
          />
        </div>
        <div className="author">
          <p>Written By: {blog.author}</p>
          <div className="share-links">
            <img src={TwitterIcon} alt="twitter icon" />
            <img src={FbIcon} alt="facebook icon" />
            <img src={LinkedInIcon} alt="instagram icon" />
          </div>
        </div>
        <div>{renderRichText(blog.content, options)}</div>
      </div>
    </MainLayout>
  )
}

export const pageQuery = graphql`
  query MyQuery($id: String) {
    contentfulBlog(id: { eq: $id }) {
      title
      trending
      metaDescription {
        metaDescription
      }
      banner {
        url
        gatsbyImageData(
          formats: WEBP
          height: 1000
          width: 1500
          quality: 90
          layout: CONSTRAINED
          placeholder: DOMINANT_COLOR
        )
      }
      author
      content {
        raw
        references {
          description
          __typename
          contentful_id
          gatsbyImage(
            width: 1500
            height: 1000
            formats: WEBP
            placeholder: DOMINANT_COLOR
            layout: CONSTRAINED
          )
        }
      }
    }
  }
`

export default Blog
