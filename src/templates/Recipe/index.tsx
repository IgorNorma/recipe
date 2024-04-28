import React from "react"
import { Link, graphql } from "gatsby"
import ClockIcon from "../../assets/images/icons/clock.png"
import TwitterIcon from "../../assets/images/icons/twitter.png"
import FbIcon from "../../assets/images/icons/facebook.png"
import LinkedInIcon from "../../assets/images/icons/linkedin.png"
import MainLayout from "../../Layout/main-layout"
import "./style.scss"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { getSlug } from "../../utils/get-slug"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { getCorrectImage } from "../../utils/get-image"
import { FacebookShareButton } from "react-share"

function Recipe({ data: { contentfulRecipe: recipe } }: any) {
  const seo = {
    title: recipe.title,
    description: recipe.description,
    image: recipe.gallery[0].url,
    url: `recipes/${getSlug(recipe.name)}`,
  }

  const handleShare = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        `${process.env.DOMAIN}${seo.url}`,
      )}`,
      "_blank",
    )
  }

  const richTextJson = JSON.parse(recipe.description.raw)
  return (
    <MainLayout seo={seo}>
      <div className="recipe-container">
        <h1 className="title">{recipe.title}</h1>
        <div className="recipe-info">
          <section className="recipe-info-details">
            <picture>
              <GatsbyImage
                className="recipe-img"
                image={getImage(getCorrectImage("mobile", recipe.gallery)!)!}
                alt="recipe image"
              />
            </picture>
            <div className="primary-details">
              <p className="name">{recipe.name}</p>
              <span className="cooking-time">
                <img src={ClockIcon} alt="" />
                {recipe.cookingTime}
              </span>
              <span className="tags">
                {recipe.tags.map((tag: string, i: number) => {
                  return (
                    <p key={i} className="tag">
                      {tag}
                    </p>
                  )
                })}
              </span>
              <div className="description">
                {documentToReactComponents(richTextJson)}
              </div>
              <div className="share-links">
                <img src={TwitterIcon} alt="twitter icon" />
                <FacebookShareButton url={`${process.env.DOMAIN}${seo.url}`}>
                  <img src={FbIcon} onClick={handleShare} alt="facebook icon" />
                </FacebookShareButton>
                <img src={LinkedInIcon} alt="instagram icon" />
              </div>
            </div>
          </section>
          <section className="secondary-details">
            <div className="instructions">
              <h2 className="title">instructions</h2>
              <ol>
                {recipe.instructions.map((instruction: string) => {
                  return <li>{instruction}</li>
                })}
              </ol>
            </div>
            <div className="ingredients">
              <h2 className="title">ingredients</h2>
              <ul>
                {recipe.ingredients.map((ingredient: string) => {
                  return <li>{ingredient}</li>
                })}
              </ul>
            </div>
          </section>
        </div>
        <div className="similar-recipe-list">
          <h2 className="title">Similar Recipes</h2>
          <div className="list-container">
            {recipe.similar.map(({ gallery, title, name }: any) => {
              return (
                <Link
                  to={`/recipes/${getSlug(name)}`}
                  className="similar-recipe"
                >
                  <GatsbyImage
                    image={getImage(getCorrectImage("desktop", gallery)!)!}
                    alt="recipe image"
                  />
                  <p>{title}</p>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export const pageQuery = graphql`
  query MyQuery($id: String!) {
    contentfulRecipe(id: { eq: $id }) {
      name
      title
      tags
      similar {
        gallery {
          url
          title
          gatsbyImageData(
            formats: WEBP
            placeholder: DOMINANT_COLOR
            width: 300
            height: 300
            layout: FULL_WIDTH
          )
        }
        name
        title
      }
      category
      cookingTime
      description {
        raw
      }
      featured
      gallery {
        title
        gatsbyImageData(
          formats: WEBP
          width: 1500
          height: 1500
          layout: CONSTRAINED
          placeholder: DOMINANT_COLOR
        )
      }
      popular
      instructions
      ingredients
    }
  }
`

export default Recipe
