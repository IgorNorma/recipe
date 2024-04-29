import React from "react"
import Layout from "../../Layout/home-layout"
import Recipe1 from "../../assets/images/img-1.png"
import Recipe2 from "../../assets/images/img-2.png"
import FBIcon from "../../assets/images/icons/facebook.png"
import IgIcon from "../../assets/images/icons/instagram.png"
import YtIcon from "../../assets/images/icons/youtube.png"
import TimerIcon from "../../assets/images/icons/stopwatch.png"
import "./style.scss"
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import { getSlug } from "../../utils/get-slug"
import { getCorrectImage } from "../../utils/get-image"

function Home({
  data: {
    allContentfulRecipe: { nodes },
  },
}: any) {
  const seo = {
    title: "Recipe And Blogs",
    url: "",
    image:
      "https://firebasestorage.googleapis.com/v0/b/movies-5a33e.appspot.com/o/anh-nguyen-kcA-c3f_3FE-unsplash.jpg?alt=media&token=276db0df-e866-4d29-8a79-6fccbce3586c",
    description:
      "Welcome to Recipe & Blogs - your ultimate destination for delicious, hassle-free recipes. Explore a diverse collection of easy-to-cook dishes that promise culinary delight for every palate. Whether you're a seasoned chef or a cooking novice, discover inspiration for your next meal and embark on a flavorful journey with us.",
  }

  return (
    <Layout background="#fff" seo={seo}>
      <div className="home">
        <section className="home-banner">
          <header>
            <h1>Delicious Recipes & Inspiring Blogs</h1>
            <div className="home-banner-description">
              <p>
                Bite into Culinary Delights: Explore our treasure trove of
                tantalizing recipes, seasoned with passion and creativity.
              </p>
            </div>
            <div className="header-end">
              <Link to="/recipes" className="global-btn">
                browse now
              </Link>
              <ul>
                <li>
                  <img src={FBIcon} alt="fb icon" />
                </li>
                <li>
                  <img src={IgIcon} alt="instagram icon" />
                </li>
                <li>
                  <img src={YtIcon} alt="youtube icon" />
                </li>
              </ul>
            </div>
          </header>
          <div>
            <StaticImage
              src={
                "../../assets/images/Customer and waitress in coffee shop.jpg"
              }
              alt="home image"
            />
          </div>
        </section>
        <section className="home-featured-recipe">
          <header>
            <h1 className="title">Cray cred narwhal tousled freegan.</h1>
            <div>
              <p>
                Gastropub selvage prism gorpcore. Celiac la croix gentrify af
                literally. Jianbing master cleanse mixtape trust fund, kogi
                offal austin biodiesel kale chips woke cronut XOXO edison bulb
                sus tumblr. Snackwave disrupt twee live-edge, ramps
              </p>
              <br />
              <p>
                Tacos shaman skateboard bushwick food truck tbh lyft iPhone.
                Glossier activated charcoal chillwave intelligentsia 8-bit, pok
                pok woke. Chambray.
              </p>
            </div>
            <button className="global-btn">view more</button>
          </header>
          <img src={Recipe1} alt="featured recipe" />
        </section>
        <section>
          <div className="home-featured-recipe-list">
            <header>
              <h1 className="title">Popular Recipes</h1>
            </header>
            <div className="recipe-list-container">
              {nodes.map(({ id, gallery, name, cookingTime }: any) => {
                return (
                  <Link to={`/recipes/${getSlug(name)}`} key={id}>
                    <GatsbyImage
                      image={getImage(getCorrectImage("mobile", gallery)!)!}
                      alt="recipe image"
                    />
                    <p>{name}</p>
                    <span>
                      <img src={TimerIcon} alt="" />
                      {cookingTime}
                    </span>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
        <section className="home-featured-recipe end">
          <img src={Recipe2} alt="featured recipe" />
          <header>
            <h1 className="title">
              Crucifix pork belly chartreuse af you probably haven't
            </h1>
            <div>
              <p>
                Cupping narwhal bodega boys migas, keffiyeh occupy edison bulb
                butcher cardigan. Tote bag subway tile intelligentsia cray
                tumblr cred neutra ennui iceland fit narwhal vegan viral.
                Post-ironic sustainable tumblr locavore, bruh shaman 3 wolf moon
                marxism master cleanse affogato pickled put a bird on it.
              </p>
              <br />
              <p>
                Crucifix pork belly chartreuse af you probably haven't heard of
                them kinfolk. Slow-carb shoreditch knausgaard cardigan neutral
                milk hotel tbh.
              </p>
            </div>
            <button className="global-btn">view more</button>
          </header>
        </section>
      </div>
    </Layout>
  )
}

export const PageQuery = graphql`
  query MyQuery {
    allContentfulRecipe(filter: { popular: { eq: true } }) {
      nodes {
        gallery {
          title
          gatsbyImageData(
            width: 3000
            placeholder: DOMINANT_COLOR
            formats: WEBP
            height: 2500
          )
        }
        id
        name
        cookingTime
      }
    }
  }
`

export default Home
