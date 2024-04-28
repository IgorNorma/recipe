import React from "react"
import HomeLayout from "../../Layout/home-layout"
import Img1 from "../../assets/images/toa-heftiba-EUk7Hk2OD1g-unsplash.jpg"
import Img2 from "../../assets/images/toa-heftiba-l_ExpFwwOEg-unsplash.jpg"
import Img3 from "../../assets/images/zach-reiner-Jwuv9ngb3UE-unsplash.jpg"
import Img4 from "../../assets/images/icons/award.png"
import Img5 from "../../assets/images/icons/trophy.png"
import Img6 from "../../assets/images/icons/winner.png"
import Img7 from "../../assets/images/icons/wreath.png"
import Img8 from "../../assets/images/leilani-angel-K84vnnzxmTQ-unsplash.jpg"
import Img9 from "../../assets/images/ian-dooley-d1UPkiFd04A-unsplash.jpg"
import Img10 from "../../assets/images/icons/visionary.png"
import Img11 from "../../assets/images/icons/target.png"
import Img12 from "../../assets/images/member2.jpg"
import Img13 from "../../assets/images/member3.jpg"
import Img14 from "../../assets/images/member4.jpg"
import Img15 from "../../assets/images/member1.jpg"

import "./styles.scss"

function AboutPage() {
  const handleOk = async () => {
    const response = await fetch(
      "https://api-uat.robinsonshotels.com/users/get-customer-list-pdf",
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${sessionStorage.getItem("act")}`,
          "Content-Type": "application/pdf",
        },
      },
    )

    const blob = await response.blob()
    const url = window.URL.createObjectURL(new Blob([blob]))

    const link = document.createElement("a")
    link.href = url
    link.setAttribute("download", "document.pdf")

    document.body.appendChild(link)
    link.click()

    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)
  }
  return (
    <HomeLayout
      background="#EFF2F4"
      seo={{
        title: "About Us",
        description:
          "Discover the story behind Recipe & Blogs - a culinary haven created by passionate food lovers. From our kitchen to yours, learn about our journey, values, and commitment to bringing you the best in easy, delicious recipes. Get to know the faces behind the flavors and join us on a delicious adventure in the world of cooking.",
        url: `about-us`,
        image:
          "https://firebasestorage.googleapis.com/v0/b/movies-5a33e.appspot.com/o/ola-mishchenko-gzYiNoTSzxE-unsplash.jpg?alt=media&token=16be81dd-c237-4d08-b409-3d09e3c98750",
      }}
    >
      <div className="about-us">
        <section className="about-us-header-section content">
          <header>
            <h1 className="title" onClick={handleOk}>
              ABOUT US
            </h1>
            <br />
            <p>
              Gastropub selvage prism gorpcore. Celiac la croix gentrify af
              literally. Jianbing master cleanse mixtape trust fund, kogi offal
              austin biodiesel kale chips woke cronut XOXO edison bulb sus
              tumblr. Snackwave disrupt twee live-edge, ramps
            </p>
            <br />
            <p>
              Tacos shaman skateboard bushwick food truck tbh lyft iPhone.
              Glossier activated charcoal chillwave intelligentsia 8-bit, pok
              pok woke. Chambray.
            </p>
            <br />

            <p>
              Solarpunk swag pug JOMO direct trade. Lyft snackwave salvia
              intelligentsia yes plz bushwick. Af migas sustainable authentic.
              Messenger bag solarpunk succulents, humblebrag cold-pressed
              mukbang umami leggings hell of squid yes plz green juice.
            </p>
          </header>
          <div className="header-images">
            <div className="header-images-upper-section">
              <div>
                <img src={Img1} alt="" />
              </div>
              <div>
                <img src={Img2} alt="" />
              </div>
            </div>
            <div className="header-images-lower-section">
              <div>
                <img src={Img3} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="awards content">
          <h3 className="title">awards</h3>
          <div className="awards-list">
            <div className="awards-list-item">
              <img src={Img4} alt="" />
              <div>
                <h4>Flavor Fusion Award</h4>
                <p>The Culinary Crown for Exceptional Recipes</p>
              </div>
            </div>
            <div className="awards-list-item">
              <img src={Img5} alt="" />
              <div>
                <h4>Golden Spoon Awards</h4>
                <p>Celebrating Culinary Excellence in Recipe Crafting</p>
              </div>
            </div>
            <div className="awards-list-item">
              <img src={Img6} alt="" />
              <div>
                <h4>The Taste Master Trophy</h4>
                <p>Celebrating Culinary Creativity and Delicious Discoveries</p>
              </div>
            </div>
            <div className="awards-list-item">
              <img src={Img7} alt="" />
              <div>
                <h4>Exquisite Eats</h4>
                <p>Celebrating Culinary Excellence - Recipe Showcase Award</p>
              </div>
            </div>
          </div>
        </section>
        <section className="know-more content">
          <div className="know-more-images">
            <div>
              <img src={Img8} alt="" />
            </div>
            <div>
              <img src={Img9} alt="" />
            </div>
          </div>
          <div className="details">
            <h2 className="title">know more about our Team</h2>
            <br />
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
              <br />
              <p>
                Solarpunk swag pug JOMO direct trade. Lyft snackwave salvia
                intelligentsia yes plz bushwick. Af migas sustainable authentic.
                Messenger bag solarpunk succulents, humblebrag cold-pressed
                mukbang umami leggings hell of squid yes plz green juice.
              </p>
            </div>
          </div>
        </section>
        <section className="mission-vission content">
          <div className="mission">
            <img src={Img11} alt="" />
            <div>
              <h3 className="title">mission</h3>
              <p>
                Empower home cooks to create delicious meals with confidence
                through curated recipes and engaging content.
              </p>
            </div>
          </div>
          <div className="vission">
            <img src={Img10} alt="" />
            <div>
              <h3 className="title">vission</h3>
              <p>
                Our vision is to become the ultimate destination for home cooks
                globally, offering an extensive repertoire of carefully curated
                recipes.
              </p>
            </div>
          </div>
        </section>
        <section className="team-members content">
          <div>
            <h3 className="title">our team</h3>
            <div className="team-list">
              <div className="team-list-item">
                <img src={Img12} alt="" />
                <div>
                  <p>Isabella Manhattan</p>
                  <span>photographer</span>
                </div>
              </div>
              <div className="team-list-item">
                <img src={Img13} alt="" />
                <div>
                  <p>Sophia Grace</p>
                  <span>cook</span>
                </div>
              </div>
              <div className="team-list-item">
                <img src={Img14} alt="" />
                <div>
                  <p>Benjamin Hayes</p>
                  <span>developer</span>
                </div>
              </div>
              <div className="team-list-item">
                <img src={Img15} alt="" />
                <div>
                  <p>Alexander Carter</p>
                  <span>Ui/ux designer</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </HomeLayout>
  )
}

export default AboutPage
