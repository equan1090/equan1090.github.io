import React, { useState } from "react";
import Modal from "react-modal";
import Brand from "./Brand";

Modal.setAppElement("#root");

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  const birthdate = '03.20.1997'

  function toggleModal() {
    setIsOpen(!isOpen);
  }
  function calculate_age() {
    const day = 20
    const month = 3
    const year = 1997
    let today_date = new Date()
    let today_day = today_date.getDate();
    let today_month = today_date.getMonth();
    let today_year = today_date.getFullYear();

    let age = 0;

    if (today_month > month) age = today_year - year;
    else if (today_month === month) {
      if(today_day >= day) age = today_year - year;
      else age = today_year - year - 1;
    }
    else {
      age = today_year = year - 1
    }
    return age;

  }


  return (
    <>
      <div className="tokyo_tm_about">
        {/* <div className="about_image ">
          <img src="assets/img/slider/1.jpg" alt="about" />
        </div> */}
        {/* <div className="o-video">
          <iframe src="https://www.youtube.com/embed/0yW7w8F2TVA"></iframe>
        </div> */}
        {/* END ABOUT IMAGE */}
        <div className="description">
          <h3 className="name">Eric Quan</h3>
          <div className="description_inner">
            <div className="left">
              <p>
                Hello, I am a full-stack software engineer. I was influenced into the tech industy by my love
                video games and the thought of one day bringing items from sci-fi to life. I enjoy learning new technologies,
                and the problem-solving skills that come with it. Transitioning from the restaurant business, I have experience
                working in fast-paced environments, great communication, and experience in team work.
              </p>
              <div className="tokyo_tm_button">
                <button onClick={toggleModal} className="ib-button">
                  Read More
                </button>
              </div>
              {/* END TOKYO BUTTON */}
            </div>
            {/* END LEFT */}
            <div className="right">
              <ul>
                <li>
                  <p>
                    <span>Birthday:</span>{birthdate}
                  </p>
                </li>
                <li>
                  <p>
                    <span>Age:</span>{calculate_age()}
                  </p>
                </li>
                {/* <li>
                  <p>
                    <span>Address:</span>418 Peak St, Trinidad, Colorado
                  </p>
                </li> */}
                <li>
                  <p>
                    <span>Email:</span>
                    <a href="mailto:equan1090@gmail.com">equan1090@gmail.com</a>
                  </p>
                </li>
                {/* <li>
                  <p>
                    <span>Phone:</span>
                    <a href="tel:+17194069347">+1 (719) 406-9347 </a>
                  </p>
                </li> */}
                <li>
                  <p>
                    <span>Study:</span>App Academy, UCCS
                  </p>
                </li>
              </ul>
              {/* END UL */}
            </div>
            {/* END RIGHT */}
          </div>
          {/* END DESCRIPTION INNER */}
        </div>
      </div>

      {/* START ABOUT POPUP BOX */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_about">
          <button className="close-modal" onClick={toggleModal}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END POPUP CLOSE BUTTON */}
          <div className="box-inner">
            <div
              className="description_wrap scrollable"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <div className="my_box">
                <div className="left">
                  <div className="about_title">
                    <h3>Skills and Frameworks</h3>
                  </div>
                  {/* END ABOUT TITLE */}

                  <div className="skill-container">
                    <div className="skills" >
                      <span>Python</span>
                      <img className='skills-logo' src={'assets/img/skills/python.png'} alt="" />
                    </div>

                    <div className="skills" >
                      <span>JavaScript</span>
                      <img className='skills-logo' src={'assets/img/skills/javascript.png'} alt="" />
                    </div>
                    <div className="skills" >
                      <span>React</span>
                      <img className='skills-logo' src={'assets/img/skills/react.png'} alt="" />
                    </div>
                    <div className="skills" >
                      <span>HTML</span>
                      <img className='skills-logo' src={'assets/img/skills/html.png'} alt="" />
                    </div>
                    <div className="skills" >
                      <span>CSS</span>
                      <img className='skills-logo' src={'assets/img/skills/css.png'} alt="" />
                    </div>
                    <div className="skills" >
                      <span>Node</span>
                      <img className='skills-logo' src={'assets/img/skills/node.png'} alt="" />
                    </div>
                    <div className="skills" >
                      <span>Flask</span>
                      <img className='skills-logo flask-logo' src={'assets/img/skills/flask.png'} alt="" />
                    </div>


                  </div>
                  {/* END PROGRESS */}
                </div>
                {/* END LEFT */}

                <div className="right">
                  <div className="about_title">
                    <h3>Hobbies</h3>
                  </div>
                  {/* END TITLE */}
                  <div className="tokyo_progress">
                    <div className="progress_inner" data-value="95">
                      <span>
                        <span className="label">Playing video games</span>
                      </span>

                    </div>

                    <div className="progress_inner" data-value="90">
                      <span>
                        <span className="label">Reading novels</span>
                      </span>
                    </div>

                    <div className="progress_inner" data-value="85">
                      <span>
                        <span className="label">Watching anime</span>
                      </span>
                    </div>
                    <div className="progress_inner" data-value="85">
                      <span>
                        <span className="label">Getting other people into my hobbies</span>
                      </span>
                    </div>
                  </div>
                  {/* EDN TOKYO PROGRESS */}
                </div>
                {/* END RIGHT */}
              </div>
              {/* END MYBOX */}

              <div className="counter">
                <div className="about_title">
                  <h3>Fun Facts</h3>
                </div>
                <ul>
                  <li>
                    <div className="list_inner">
                      <h3>Strong work ethic</h3>
                      <span>I have been working since age 10</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <h3>100K+</h3>
                      <span>Lines of code written and still going</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <h3>Binger</h3>
                      <span>I can binge anything from books to shows</span>
                    </div>
                  </li>
                </ul>
                {/* END COUNTER CONTENT */}
              </div>
              {/* END COUNTER */}


              {/* END PARTNER SLIDER */}
            </div>
          </div>
        </div>
      </Modal>
      {/* END ABOUT POPUP BOX */}
    </>
  );
};

export default About;
