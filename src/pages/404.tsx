import React from "react";
import Image from "next/image";
function Custom404() {
  return (
    <main>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="body-wrapper body-corporate-agency">
            <div className="overlay-switcher-close"></div>

            <section className="error-area">
              <div className="container">
                <div className="error-area-inner section-spacing">
                  <div className="section-content">
                    <div className="shape-1">
                      <Image
                        width={100}
                        height={100}
                        className="show-light"
                        src="/assets/imgs/shape/img-s-88.webp"
                        alt="shape"
                      />
                      <Image
                        width={100}
                        height={100}
                        className="show-dark"
                        src="/assets/imgs/shape/img-s-88-light.webp"
                        alt="shape"
                      />
                    </div>
                    <div className="error-shape has_fade_anim">
                      <Image
                        width={100}
                        height={100}
                        className="show-light"
                        src="/assets/imgs/shape/img-s-87.webp"
                        alt="shape"
                      />
                      <Image
                        width={100}
                        height={100}
                        className="show-dark"
                        src="/assets/imgs/shape/img-s-87-light.webp"
                        alt="shape"
                      />
                    </div>
                    <div className="section-title-wrapper">
                      <div className="title-wrapper">
                        <h1
                          className="section-title has_fade_anim"
                          data-delay="0.30"
                        >
                          Ooop! Error page!
                        </h1>
                      </div>
                    </div>
                    <div className="text-wrapper">
                      <p className="text has_fade_anim" data-delay="0.45">
                        The page you are looking for doesn't exist or has been
                        moved.
                      </p>
                    </div>
                    <div
                      className="btn-wrapper has_fade_anim"
                      data-delay="0.60"
                    >
                      <a
                        href="#"
                        className="wc-btn wc-btn-primary btn-text-flip"
                      >
                        {" "}
                        <span data-text="Back to home">Back to home</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Custom404;
