import { useContext } from "react";
import {
  Link
} from "react-router-dom";

import Navbar from "../components/Navbar";

import { ReactComponent as LikeOutLine } from "./../assets/svg/like_outline.svg";
import noBanner from "../assets/img/noBanner.jpg";
import './../styles/pages-css/explore.css';

const Explore = () => {

  return (
    <>
      <Navbar />
      <div className="ExploreContainer section-global">
        <div className="Explore__image-container">
          <img className="Explore__Image" src={noBanner} alt="image" />
          <div className="Explore__Image__overlay-container">
            <div className="Explore__Image__likes-comments">
              <LikeOutLine />
              <p>10</p>
            </div>
            <div className="Explore__Image__likes-comments">
              <i className="fa-solid fa-message"></i>
              <p>5</p>
            </div>
          </div>  
        </div>
        <div className="Explore__image-container">
          <img className="Explore__Image" src={noBanner} alt="image" />
          <div className="Explore__Image__overlay-container">
            <div className="Explore__Image__likes-comments">
              <LikeOutLine />
              <p>10</p>
            </div>
            <div className="Explore__Image__likes-comments">
              <i className="fa-solid fa-message"></i>
              <p>5</p>
            </div>
          </div>  
        </div>
        <div className="Explore__image-container">
          <img className="Explore__Image" src={noBanner} alt="image" />
          <div className="Explore__Image__overlay-container">
            <div className="Explore__Image__likes-comments">
              <LikeOutLine />
              <p>10</p>
            </div>
            <div className="Explore__Image__likes-comments">
              <i className="fa-solid fa-message"></i>
              <p>5</p>
            </div>
          </div>  
        </div>
        <div className="Explore__image-container">
          <img className="Explore__Image" src={noBanner} alt="image" />
          <div className="Explore__Image__overlay-container">
            <div className="Explore__Image__likes-comments">
              <LikeOutLine />
              <p>10</p>
            </div>
            <div className="Explore__Image__likes-comments">
              <i className="fa-solid fa-message"></i>
              <p>5</p>
            </div>
          </div>  
        </div>
        <div className="Explore__image-container">
          <img className="Explore__Image" src={noBanner} alt="image" />
          <div className="Explore__Image__overlay-container">
            <div className="Explore__Image__likes-comments">
              <LikeOutLine />
              <p>10</p>
            </div>
            <div className="Explore__Image__likes-comments">
              <i className="fa-solid fa-message"></i>
              <p>5</p>
            </div>
          </div>  
        </div>
        <div className="Explore__image-container">
          <img className="Explore__Image" src={noBanner} alt="image" />
          <div className="Explore__Image__overlay-container">
            <div className="Explore__Image__likes-comments">
              <LikeOutLine />
              <p>10</p>
            </div>
            <div className="Explore__Image__likes-comments">
              <i className="fa-solid fa-message"></i>
              <p>5</p>
            </div>
          </div>  
        </div>
        <div className="Explore__image-container">
          <img className="Explore__Image" src={noBanner} alt="image" />
          <div className="Explore__Image__overlay-container">
            <div className="Explore__Image__likes-comments">
              <LikeOutLine />
              <p>10</p>
            </div>
            <div className="Explore__Image__likes-comments">
              <i className="fa-solid fa-message"></i>
              <p>5</p>
            </div>
          </div>  
        </div>
        <div className="Explore__image-container">
          <img className="Explore__Image" src={noBanner} alt="image" />
          <div className="Explore__Image__overlay-container">
            <div className="Explore__Image__likes-comments">
              <LikeOutLine />
              <p>10</p>
            </div>
            <div className="Explore__Image__likes-comments">
              <i className="fa-solid fa-message"></i>
              <p>5</p>
            </div>
          </div>  
        </div>
        <div className="Explore__image-container">
          <img className="Explore__Image" src={noBanner} alt="image" />
          <div className="Explore__Image__overlay-container">
            <div className="Explore__Image__likes-comments">
              <LikeOutLine />
              <p>10</p>
            </div>
            <div className="Explore__Image__likes-comments">
              <i className="fa-solid fa-message"></i>
              <p>5</p>
            </div>
          </div>  
        </div>
        <div className="Explore__image-container">
          <img className="Explore__Image" src={noBanner} alt="image" />
          <div className="Explore__Image__overlay-container">
            <div className="Explore__Image__likes-comments">
              <LikeOutLine />
              <p>10</p>
            </div>
            <div className="Explore__Image__likes-comments">
              <i className="fa-solid fa-message"></i>
              <p>5</p>
            </div>
          </div>  
        </div>
      </div>
    </>
  );
}

export default Explore;
