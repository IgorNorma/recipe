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

function Home({
  data: {
    allContentfulRecipe: { nodes },
  },
}: any) {
  return (
    <Layout background="#fff">
      <div className="home">
        <section className="home-banner">
          <div>
            <StaticImage
              src={"../../assets/images/home-img.png"}
              alt="home image"
            />
          </div>
          <header>
            <h1 className="title">
              Food truck truffaut Austin, glossier - Activated charcoal
            </h1>
            <div className="home-banner-description">
              <p>
                Narwhal selfies ethical marxism. Activated charcoal kale chips
                swag before they sold out poutine enamel pin kinfolk. Cardigan
                kickstarter butcher trust fund,
              </p>
              <br />
              <p>
                Chicharrones sartorial bushwick portland unicorn scenester la
                croix celiac butcher yes plz burgers
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
                      image={getImage(gallery[0])!}
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
