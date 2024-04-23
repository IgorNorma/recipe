import React from "react"
import Layout from "../../Layout/home-layout"
import TimeIcon from "../../assets/images/icons/clock.png"
import "./style.scss"
import { Link, graphql } from "gatsby"
import Card from "../../components/Card"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { getSlug } from "../../utils/get-slug"
import { getCorrectImage } from "../../utils/get-image"

function RecipePage({
  data: {
    contentfulRecipe: recipe,
    allContentfulRecipe: { nodes },
  },
}: any) {
  return (
    <Layout background="#f3f5f7">
      <div className="recipe-list">
        <header>
          <h1 className="title">recipes you might wanna try</h1>
        </header>
        <div className="container">
          <Link
            to={`/recipes/${getSlug(recipe.name)}`}
            className="featured-recipe"
          >
            <span className="featured-tag">FEATURED</span>
            {recipe.gallery ? (
              <GatsbyImage
                image={getImage(getCorrectImage("mobile", recipe.gallery)!)!}
                alt=""
              />
            ) : null}
            <h2>{recipe.title}</h2>
            <div className="cooking-time">
              <img src={TimeIcon} alt="" />
              <p>{recipe.cookingTime}</p>
            </div>
          </Link>
          <div className="recipes-upper-part">
            {nodes.slice(0, 4).map((recipe: any) => {
              return <Card key={recipe.id} {...recipe} />
            })}
          </div>
        </div>
        <div className="recipes-lower-part">
          {nodes.slice(4).map((recipe: any) => {
            return <Card key={recipe.id} {...recipe} />
          })}
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query MyQuery {
    contentfulRecipe(featured: { eq: true }) {
      cookingTime
      gallery {
        title
        gatsbyImageData(
          placeholder: DOMINANT_COLOR
          width: 1500
          height: 1000
          quality: 100
          formats: WEBP
          layout: FULL_WIDTH
        )
      }
      name
      title
      id
    }
    allContentfulRecipe(
      limit: 12
      skip: 0
      filter: { featured: { eq: false } }
    ) {
      nodes {
        gallery {
          title
          gatsbyImageData(
            width: 1500
            placeholder: DOMINANT_COLOR
            quality: 90
            height: 1000
            formats: WEBP
            layout: FULL_WIDTH
          )
        }
        title
        name
        id
      }
    }
  }
`

export default RecipePage
