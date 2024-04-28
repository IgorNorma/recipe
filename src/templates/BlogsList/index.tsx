import React from "react"
import MainLayout from "../../Layout/main-layout"
import "./style.scss"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { getSlug } from "../../utils/get-slug"

function BlogPage({
  data: {
    contentfulBlog: blog,
    allContentfulBlog: { nodes },
  },
}: any) {
  return (
    <MainLayout
      background="#f3f5f7"
      seo={{
        title: "Blogs you might be interested in.",
        description:
          "Get inspired in the kitchen with Recipe & Blogs blog. Explore a treasure trove of culinary wisdom, cooking tips, and mouthwatering recipes from our team of passionate food enthusiasts. Whether you're a gourmet guru or a kitchen novice, our blog has something to satisfy every craving and elevate your cooking game.",
        image:
          "https://firebasestorage.googleapis.com/v0/b/movies-5a33e.appspot.com/o/ola-mishchenko-gzYiNoTSzxE-unsplash.jpg?alt=media&token=16be81dd-c237-4d08-b409-3d09e3c98750",
        url: "blogs",
      }}
    >
      <div className="blog">
        <h1 className="title">Blogs you might be interested in.</h1>
        <Link to={`/blogs/${getSlug(blog.title)}`} className="featured-blog">
          <span className="featured-tag">featured</span>
          <div className="featured-image">
            <GatsbyImage image={getImage(blog.banner)!} alt="featured image" />
          </div>
          <h2 className="title">{blog.title}</h2>
          <div className="blog-info">
            <p>{blog.author}</p>
            <p>{blog.datePublished}</p>
          </div>
        </Link>
        <div className="blog-list">
          {nodes.map((blog: any) => {
            return (
              <Link
                to={`/blogs/${getSlug(blog.title)}`}
                key={blog.id}
                className="blog-item"
              >
                <h3 className="title">{blog.title}</h3>
                <div className="blog-image">
                  <GatsbyImage
                    image={getImage(blog.banner)!}
                    alt="blog image"
                  />
                </div>
                <div className="blog-info">
                  <p>{blog.author}</p>
                  <p>{blog.datePublished}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </MainLayout>
  )
}

export const pageQuery = graphql`
  {
    contentfulBlog(featured: { eq: true }) {
      title
      trending
      banner {
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
      }
      datePublished(formatString: "MM/DD/YYYY")
      id
    }
    allContentfulBlog(filter: { featured: { eq: false } }) {
      nodes {
        author
        banner {
          gatsbyImageData(
            placeholder: DOMINANT_COLOR
            width: 1000
            formats: WEBP
            layout: CONSTRAINED
            height: 1000
          )
        }
        title
        id
        datePublished(formatString: "MMM/DD/YYYY")
      }
    }
  }
`

export default BlogPage
