import React from "react";
import "./Home.scss";
import { BsGlobe } from "react-icons/bs";
import { CiTrophy } from "react-icons/ci";
import { FaMapMarkerAlt } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
import { IoKeyOutline } from "react-icons/io5";
import { LuPresentation } from "react-icons/lu";
import { FaHeart } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import logo from "../asset/icons/styles/logo.png";
import { GoPeople } from "react-icons/go";
import { FaChartArea } from "react-icons/fa";

const Home = () => {
  return (
    <div className="container">
      <div className="sidebar"></div>

      {/* header */}
      <header className="header">
        <img src={logo} alt="" className="logo" />
        <h3 className="heading__3">Your own home</h3>
        <h1 className="heading__1">The ultimate personal freedom</h1>
        <button className="btn">View our properties</button>

        {/* <img src={forbs} alt="" className="header-logo" /> */}
      </header>

      <div className="realtors">
        <p className="heading-tours">3 top Realtors</p>
        <div className="realtors-list">
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.t2dewY19NCjkaioWr88NvQHaE8&pid=Api&P=0&h=180"
            alt=""
            className="realtors-img"
          />
          <div className="realtors-details">
            <h4 className="heading__4">Erik Feinmen</h4>
            <p className="realtors-sold">245 houses sold</p>
          </div>

          {/* second realtors */}
          <img
            src="https://cdn.cnn.com/cnnnext/dam/assets/150202133243-cnnphotos-red-road-tease1-super-169.jpg"
            alt=""
            className="realtors-img"
          />
          <div className="realtors-details">
            <h4 className="heading__4">Erik Feinmen</h4>
            <p className="realtors-sold">215 houses sold</p>
          </div>

          {/* third  realtors*/}

          <img
            src="https://tse1.mm.bing.net/th?id=OIP.t2dewY19NCjkaioWr88NvQHaE8&pid=Api&P=0&h=180"
            alt=""
            className="realtors-img"
          />
          <div className="realtors-details">
            <h4 className="heading__4">Erik Feinmen</h4>
            <p className="realtors-sold">245 houses sold</p>
          </div>
        </div>
      </div>

      {/* features */}

      <section className="features">
        <div className="feature">
          <BsGlobe className="feature-icon" />
          <h3 className="fearure-heading">World's best luxury homes</h3>
          <p className="feature-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
            soluta nulla sunt consectetur suscipit, autem reprehenderit officiis
            minus.{" "}
          </p>
        </div>
        {/* feature 2 */}
        <div className="feature">
          <CiTrophy className="feature-icon" />
          <h3 className="fearure-heading">Only the best propertes</h3>
          <p className="feature-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
            soluta nulla sunt consectetur suscipit, autem reprehenderit officiis
            minus.{" "}
          </p>
        </div>

        {/* feature 3 */}

        <div className="feature">
          <FaMapMarkerAlt className="feature-icon" />
          <h3 className="fearure-heading">All homes in a top locations</h3>
          <p className="feature-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
            soluta nulla sunt consectetur suscipit, autem reprehenderit officiis
            minus.{" "}
          </p>
        </div>

        {/* feature 4 */}
        <div className="feature">
          <IoKeyOutline className="feature-icon" />
          <h3 className="fearure-heading">New home in one week</h3>
          <p className="feature-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
            soluta nulla sunt consectetur suscipit, autem reprehenderit officiis
            minus.{" "}
          </p>
        </div>

        {/* feature 5 */}
        <div className="feature">
          <LuPresentation className="feature-icon" />
          <h3 className="fearure-heading">Top 1% relators</h3>
          <p className="feature-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
            soluta nulla sunt consectetur suscipit, autem reprehenderit officiis
            minus.{" "}
          </p>
        </div>

        {/* feature 6 */}
        <div className="feature">
          <CiLock className="feature-icon" />
          <h3 className="fearure-heading">Secure payment on nexter</h3>
          <p className="feature-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
            soluta nulla sunt consectetur suscipit, autem reprehenderit officiis
            minus.{" "}
          </p>
        </div>
      </section>
      <div className="story__pictures">
        <img
          src="https://images.hdqwalls.com/download/sunset-nature-trees-img-3840x2160.jpg"
          alt=""
          className="story-img__1"
        />
        <img
          src="https://wallup.net/wp-content/uploads/2017/03/28/436753-nature-landscape-trees-grass-sunset-HDR-clear_sky.jpg"
          alt=""
          className="story-img__2"
        />
      </div>
      <div className="story__content">
        <h3 className="story-heading">Happy Customers</h3>
        <h2 className="story-heading-2">
          &ldquo;The best decision of our lives &rdquo;
        </h2>
        <p className="story-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste rerum
          deleniti optio sit nemo, magnam quos inventore iusto consectetur aut
          impedit et ex, nulla praesentium quas minus id natus dignissimos.
        </p>
        <button className="btn">Find your own home</button>
      </div>

      {/* homes */}

      <section className="homes">
        <div className="home">
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.ONZXZ91RS56i6S74kz-hVgHaEo&pid=Api&P=0&h=180"
            alt=""
            className="home-img"
          />
          <FaHeart className="likes" />
          <h5 className="home-heading">Beautiful rooms</h5>

          <div className="home-location">
            <FaLocationDot className="home-icons" />
            <p className="home-para">Location</p>
          </div>
          <div className="home-location">
            <GoPeople className="home-icons" />
            <p className="home-para">5 rooms</p>
          </div>
          <div className="home-location">
            <FaChartArea className="home-icons" />
            <p className="home-para">
              324 m<sup>2</sup>
            </p>
          </div>
          <div className="home-location">
            <CiLock className="home-icons" />
            <p className="home-para">1,200,000</p>
          </div>
          <button className="cta">Contact Realtor</button>
        </div>

        <div className="home">
          <img
            src="https://i.pinimg.com/originals/93/55/3d/93553de0075970d80b5657a6c9a20e53.png"
            alt=""
            className="home-img"
          />
          <FaHeart className="likes" />
          <h5 className="home-heading">Beautiful rooms</h5>
          <div className="home-location">
            <FaLocationDot className="home-icons" />
            <p className="home-para">Location</p>
          </div>
          <div className="home-location">
            <GoPeople className="home-icons" />
            <p className="home-para">6 rooms</p>
          </div>
          <div className="home-location">
            <FaChartArea className="home-icons" />
            <p className="home-para">
              324 m<sup>2</sup>
            </p>
          </div>
          <div className="home-location">
            <CiLock className="home-icons" />
            <p className="home-para">1,290,000</p>
          </div>
          <button className="cta">Contact Realtor</button>
        </div>
        <div className="home">
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.WxBgUpa7nWlQ_ulgE_1lJAAAAA&pid=Api&P=0&h=180"
            alt=""
            className="home-img"
          />
          <FaHeart className="likes" />
          <h5 className="home-heading">Beautiful rooms</h5>
          <div className="home-location">
            <FaLocationDot className="home-icons" />
            <p className="home-para">Location</p>
          </div>
          <div className="home-location">
            <GoPeople className="home-icons" />
            <p className="home-para">5 rooms</p>
          </div>
          <div className="home-location">
            <FaChartArea className="home-icons" />
            <p className="home-para">
              324 m<sup>2</sup>
            </p>
          </div>
          <div className="home-location">
            <CiLock className="home-icons" />
            <p className="home-para">1,500,000</p>
          </div>
          <button className="cta">Contact Realtor</button>
        </div>
        <div className="home">
          <img
            src="https://wallup.net/wp-content/uploads/2017/11/23/522567-men-nature-landscape-mountains-clouds-Iceland-river-sun_rays-hills-rock.jpg"
            alt=""
            className="home-img"
          />
          <FaHeart className="likes" />
          <h5 className="home-heading">Beautiful rooms</h5>

          <div className="home-location">
            <FaLocationDot className="home-icons" />
            <p className="home-para">Location</p>
          </div>
          <div className="home-location">
            <GoPeople className="home-icons" />
            <p className="home-para">5 rooms</p>
          </div>
          <div className="home-location">
            <FaChartArea className="home-icons" />
            <p className="home-para">
              324 m<sup>2</sup>
            </p>
          </div>
          <div className="home-location">
            <CiLock className="home-icons" />
            <p className="home-para">1,800,000</p>
          </div>
          <button className="cta">Contact Realtor</button>
        </div>
        <div className="home">
          <img
            src="https://wallpapershome.com/images/pages/pic_h/15453.jpg"
            alt=""
            className="home-img"
          />
          <FaHeart className="likes" />
          <h5 className="home-heading">Beautiful rooms</h5>

          <div className="home-location">
            <FaLocationDot className="home-icons" />
            <p className="home-para">Location</p>
          </div>
          <div className="home-location">
            <GoPeople className="home-icons" />
            <p className="home-para">5 rooms</p>
          </div>
          <div className="home-location">
            <FaChartArea className="home-icons" />
            <p className="home-para">
              324 m<sup>2</sup>
            </p>
          </div>
          <div className="home-location">
            <CiLock className="home-icons" />
            <p className="home-para">1,200,000</p>
          </div>
          <button className="cta">Contact Realtor</button>
        </div>
        <div className="home">
          <img
            src="https://wallpapershome.com/images/pages/pic_h/19547.jpg"
            alt=""
            className="home-img"
          />
          <FaHeart className="likes" />
          <h5 className="home-heading">Beautiful rooms</h5>

          <div className="home-location">
            <FaLocationDot className="home-icons" />
            <p className="home-para">Location</p>
          </div>
          <div className="home-location">
            <GoPeople className="home-icons" />
            <p className="home-para">5 rooms</p>
          </div>
          <div className="home-location">
            <FaChartArea className="home-icons" />
            <p className="home-para">
              324 m<sup>2</sup>
            </p>
          </div>
          <div className="home-location">
            <CiLock className="home-icons" />
            <p className="home-para">1,200,000</p>
          </div>
          <button className="cta">Contact Realtor</button>
        </div>
      </section>
      {/* <section className="gallery">gallery</section> */}

      <footer className="footer">
        <ul className="nav">
          <li className="nav__item">
            <a href="" className="nav__link">
              Find your dream home
            </a>
          </li>
          <li className="nav__item">
            <a href="" className="nav__link">
              Request Proposal
            </a>
          </li>
          <li className="nav__item">
            <a href="" className="nav__link">
              Download home planner
            </a>
          </li>
          <li className="nav__item">
            <a href="" className="nav__link">
              Contact us
            </a>
          </li>
          <li className="nav__item">
            <a href="" className="nav__link">
              Submit your property
            </a>
          </li>
          <li className="nav__item">
            <a href="" className="nav__link">
              Come work with us
            </a>
          </li>
        </ul>
        <p className="copyright">
          @Copy 2024 by safiya siddiqui , Feel free to use this project for your
          own purpose
        </p>
      </footer>
    </div>
  );
};

export default Home;
