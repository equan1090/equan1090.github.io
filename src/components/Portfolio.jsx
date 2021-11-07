import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import ModalVideo from "react-modal-video";
import Modal from "react-modal";
import Social from "./Social";
import { Link } from "react-router-dom";

const Portfolio = () => {
  // for popup video
  const [isOpen, setOpen] = useState(false);
  const [isOpen2, setOpen2] = useState(false);

  // for modal
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }

  return (
    <>
      <SimpleReactLightbox>
        <div className="tokyo_tm_portfolio">
          <div className="tokyo_tm_title">
            <div className="title_flex">
              <div className="left">
                <span>Portfolio</span>
                <h3>Minimal Portfolio</h3>
              </div>
            </div>
          </div>
          {/* END TOKYO_TM_TITLE */}

          <div className="portfolio_filter">
            <div className='project-container'>
              <h5>JumpStarter</h5>
                <div className='project-img'>
                  <a href="https://jumpstarter-21.herokuapp.com/" target='_blank'><img src={'assets/img/site/kickstarter.png'} alt="" /></a>
                </div>
            </div>
            <div className='project-container'>
              <h5>ClipIt</h5>
              <div className='project-img'>
                <a href="https://clipit-june-21.herokuapp.com/" target='_blank'><img src={'assets/img/site/clipit.png'} alt="" /></a>
              </div>
            </div>
            <div className='project-container'>
              <h5>Retro Game Tracker</h5>
              <div className='project-img'>
                <a href="https://retro-game-tracker.herokuapp.com/" target='_blank'><img src={'assets/img/site/retro.png'} alt="" /></a>
              </div>
            </div>
            <div className='project-container'>
              <h5>Tune Cloud</h5>
              <div className='project-img'>
                <a href="https://tune-cloud.herokuapp.com/" target='_blank'><img src={'assets/img/site/tunecloud.png'} alt="" /></a>
              </div>
            </div>
          </div>
        </div>
      </SimpleReactLightbox>

    </>
  );
};

export default Portfolio;
