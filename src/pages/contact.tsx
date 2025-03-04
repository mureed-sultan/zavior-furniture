import React, { useEffect } from "react";
import Image from "next/image";
import {getStyle} from "../utils/loadCss"
import Layout from "@/components/Layout";

function Contact() {
    useEffect(() => {
        const cleanup = getStyle("contact");
        return cleanup; 
      }, []);
  return (
    <Layout>
      <main className="body-wrapper body-corporate-agency">
        <section className="hero-area">
          <div className="container">
            <div className="hero-area-inner">
              <div className="section-content">
                <div className="section-title-wrapper">
                  <div className="title-wrapper">
                    <h1 className="section-title large has_fade_anim">
                      Any questions? <br />
                      simply ask us. <br />
                      this is your home!
                    </h1>
                  </div>
                </div>
                <div className="content-last">
                  <div className="col-first">
                    <div className="image-box overflow-hidden">
                      <Image width={1024} height={100} 
                        src="/assets/imgs/gallery/img-s-106.webp"
                        data-speed="0.9"
                        alt="image"
                      />
                    </div>
                    <div className="contact-box">
                      <div className="shape-1">
                        <Image width={1024} height={100} 
                          src="/assets/imgs/shape/img-s-89.webp"
                          alt="shape"
                        />
                      </div>
                      <span className="title">Direct contact: </span>
                      <p className="link">
                        <a href="#">Skype.arolax007</a>
                      </p>
                    </div>
                  </div>
                  <div className="col-second">
                    <div className="image-box">
                      <Image width={1024} height={100} 
                        src="/assets/imgs/gallery/img-s-107.webp"
                        alt="image"
                      />
                    </div>
                    <div className="image-box overflow-hidden">
                      <Image width={1024} height={100} 
                        src="/assets/imgs/gallery/img-s-108.webp"
                        data-speed="0.9"
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="image-wrapper overflow-hidden">
          <Image width={1024} height={100} 
            className="w-100"
            src="/assets/imgs/gallery/img-s-105.webp"
            data-speed="0.9"
            alt="image"
          />
        </div>

        <section className="contact-area">
          <div className="container">
            <div className="contact-area-inner section-spacing">
              <div className="section-header">
                <div className="section-title-wrapper">
                  <div className="title-wrapper">
                    <h2 className="section-title large has_fade_anim">
                      We’ve been waiting for you!
                    </h2>
                  </div>
                </div>
                <div className="text-wrapper">
                  <p className="text has_fade_anim">
                    Add the best talent on the market, an agile skilled
                    management & seamless involvement
                  </p>
                </div>
              </div>
              <div className="section-content">
                <div className="info-box has_fade_anim">
                  <div className="text-wrapper">
                    <p className="text">
                      We want to hear from you. let’s us know how we can help!
                    </p>
                  </div>
                  <ul className="contact-list">
                    <li>
                      <a href="tel:+881750660600">+881 750 6606 00</a>
                    </li>
                    <li>
                      <a href="#">hello@arolax.com</a>
                    </li>
                    <li>
                      230 alaska street dunasia <br />
                      QC (USA) H8R 1A1
                    </li>
                  </ul>
                </div>
                <div className="contact-wrap has_fade_anim" data-delay="0.30">
                  <form action="#">
                    <div className="contact-formwrap">
                      <div className="contact-formfield">
                        <input
                          type="text"
                          name="Name"
                          id="Name"
                          placeholder="Name*"
                        />
                      </div>
                      <div className="contact-formfield">
                        <input
                          type="text"
                          name="Email"
                          id="Email"
                          placeholder="Email*"
                        />
                      </div>
                      <div className="contact-formfield">
                        <input
                          type="text"
                          name="Phone"
                          id="Phone"
                          placeholder="Phone"
                        />
                      </div>
                      <div className="contact-formfield">
                        <input
                          type="text"
                          name="Subject"
                          id="Subject"
                          placeholder="Subject*"
                        />
                      </div>
                      <div className="contact-formfield messages">
                        <input
                          type="text"
                          name="Messages"
                          id="Messages"
                          placeholder="Messages*"
                        />
                      </div>
                    </div>
                    <div className="submit-btn">
                      <button
                        type="submit"
                        className="wc-btn wc-btn-primary btn-text-flip"
                      >
                        <span data-text="Send Message">Send Message</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Contact;
