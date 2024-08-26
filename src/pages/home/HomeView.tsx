import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../components/content_option";
import { Link } from "react-router-dom";
import './HomeView.css'
import Headermain from "../../components/header/header";

const HomeView: React.FC = () => {
  return (
    <>
      <Headermain/>
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center">
          <BackgroundImage url={introdata.your_img_url} />
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{introdata.title}</h2>
                <h1 className="fluidz-48 mb-1x">
                  <TypewriterEffect />
                </h1>
                <p className="mb-1x">{introdata.description}</p>
                <ActionButtons />
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
    </>
  
  );
};

interface BackgroundImageProps {
  url: string;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({ url }) => {
  return (
    <div
      className="h_bg-image order-1 order-lg-2 h-100"
      style={{ backgroundImage: `url(${url})` }}
    />
  );
};

const TypewriterEffect: React.FC = () => {
  const options = {
    strings: [
      introdata.animated.first,
      introdata.animated.second,
      introdata.animated.third,
    ],
    autoStart: true,
    loop: true,
    deleteSpeed: 10,
  };

  return <Typewriter options={options} />;
};

const ActionButtons: React.FC = () => {
  return (
    <div className="intro_btn-action pb-5">
      <LinkButton to="/portfolio" text="My Portfolio" />
      <LinkButton to="/contact" text="Contact Me" />
    </div>
  );
};

interface LinkButtonProps {
  to: string;
  text: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ to, text }) => {
  return (
    <Link to={to}>
      <div id="button_p" className="ac_btn btn">
        {text}
        <div className="ring one"></div>
        <div className="ring two"></div>
        <div className="ring three"></div>
      </div>
    </Link>
  );
};

export default HomeView;