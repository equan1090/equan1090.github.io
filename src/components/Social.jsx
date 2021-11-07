import React from "react";

const SocialShare = {
  'facebook': 'https://www.facebook.com/aye.gooble/',
  'twitter': 'https://twitter.com/equan1090',
  'github' : 'https://github.com/equan1090',
  'linkedin': 'https://www.linkedin.com/in/eric-quan-821139190/',
  'angelslist': 'https://angel.co/u/eric-quan-2'
}


const Social = () => {
  return (
    <>
      <ul className="social">
        <li >
          <a href={`${SocialShare.facebook}`} target="_blank" rel="noreferrer">
            <img
              className="svg"
              src={`/assets/img/svg/social/facebook.svg`}
              alt="social"
            ></img>
          </a>
        </li>
        <li >
          <a href={`${SocialShare.twitter}`} target="_blank" rel="noreferrer">
            <img
              className="svg"
              src={`/assets/img/svg/social/twitter.svg`}
              alt="social"
            ></img>
          </a>
        </li>
        <li >
          <a id='github-link' href={`${SocialShare.github}`} target="_blank" rel="noreferrer">
            <img
              className="svg"
              src={`/assets/img/svg/social/github.png`}
              alt="social"
            ></img>
          </a>
        </li>
        <li >
          <a id='linkedin-link' href={`${SocialShare.linkedin}`} target="_blank" rel="noreferrer">
            <img
              className="svg"
              src={`/assets/img/svg/social/linkedin.png`}
              alt="social"
            ></img>
          </a>
        </li>
        <li >
          <a href={`${SocialShare.angelslist}`} target="_blank" rel="noreferrer">
            <img
              className="svg"
              src={`/assets/img/svg/social/angelslist.png`}
              alt="social"
            ></img>
          </a>
        </li>
      </ul>
      {/* END SOCIAL */}
    </>
  );
};

export default Social;
