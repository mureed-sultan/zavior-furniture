import { getStyle } from "@/utils/loadCss";
import React, { useEffect } from "react";
import Layout from "@/components/Layout";
function Blog() {
  useEffect(() => {
    const cleanup = getStyle("blog");
    return cleanup;
  }, []);
  return (
    <Layout>
      <main className="body-wrapper body-corporate-agency">
        <section className="featured-area">
          <div className="container">
            <div className="featured-area-inner">
              <div className="section-content">
                <div className="section-title-wrapper">
                  <div className="title-wrapper">
                    <h1 className="section-title large has_fade_anim">
                      We always think
                    </h1>
                  </div>
                </div>
                <div className="text-box">
                  <div className="text-wrapper">
                    <p className="text has_fade_anim">
                      Add the best talent on the market, an agile skilled
                      management & seamless involvement
                    </p>
                  </div>
                  <div className="counter-box has_fade_anim">
                    <div className="counter-item">
                      <span className="number wc-counter">4,00 +</span>
                      <p className="text">Total post</p>
                    </div>
                    <div className="counter-item">
                      <span className="number wc-counter">99 +</span>
                      <p className="text">Blog writer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="featured-post-area">
          <div className="container">
            <div className="featured-post-box">
              <div className="featured-posts">
                <article className="blog-box has_fade_anim">
                  <a href="blog-details.html">
                    <div className="thumb">
                      <img
                        src="/assets/imgs/blog/img-s-17.webp"
                        alt="blog image"
                      />
                    </div>
                    <div className="content">
                      <div className="content-first">
                        <h2 className="title">
                          Insights from Industry Leaders
                        </h2>
                        <span className="tag">
                          Features Post <br />
                          Mar - 2024
                        </span>
                      </div>
                      <div className="icon">
                        <i className="fa-solid fa-arrow-right"></i>
                      </div>
                    </div>
                  </a>
                </article>
                <article className="blog-box has_fade_anim" data-delay="0.30">
                  <a href="blog-details.html">
                    <div className="thumb">
                      <img
                        src="/assets/imgs/blog/img-s-18.webp"
                        alt="blog image"
                      />
                    </div>
                    <div className="content">
                      <div className="content-first">
                        <h2 className="title">Building quality</h2>
                        <span className="tag">
                          Features Post <br />
                          Feb - 2024
                        </span>
                      </div>
                      <div className="icon">
                        <i className="fa-solid fa-arrow-right"></i>
                      </div>
                    </div>
                  </a>
                </article>
                <article
                  className="blog-box has_fade_anim"
                  data-delay="0.45"
                  data-on-scroll="0"
                >
                  <a href="blog-details.html">
                    <div className="thumb">
                      <img
                        src="/assets/imgs/blog/img-s-19.webp"
                        alt="blog image"
                      />
                    </div>
                    <div className="content">
                      <div className="content-first">
                        <h2 className="title">Market research</h2>
                        <span className="tag">
                          Features Post <br />
                          Jan - 2024
                        </span>
                      </div>
                      <div className="icon">
                        <i className="fa-solid fa-arrow-right"></i>
                      </div>
                    </div>
                  </a>
                </article>
              </div>
            </div>
          </div>
        </div>

        <section className="blog-area">
          <div className="container">
            <div className="blog-area-inner section-spacing">
              <div className="section-content">
                <div className="section-title-wrapper">
                  <div className="title-wrapper">
                    <h2 className="section-title has_fade_anim">
                      Latest insight the arolax!
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
              <div className="blogs-wrapper-box">
                <div className="blogs-wrapper has_fade_anim">
                  <a href="blog-details.html">
                    <div className="blog-box">
                      <div className="thumb">
                        <img
                          src="/assets/imgs/blog/img-s-20.webp"
                          alt="image"
                        />
                      </div>
                      <div className="content">
                        <span className="number">01</span>
                        <h3 className="title">
                          Business <br />
                          consultation
                        </h3>
                        <span className="icon">
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                      </div>
                    </div>
                  </a>
                  <a href="blog-details.html">
                    <div className="blog-box">
                      <div className="thumb">
                        <img
                          src="/assets/imgs/blog/img-s-21.webp"
                          alt="image"
                        />
                      </div>
                      <div className="content">
                        <span className="number">02</span>
                        <h3 className="title">
                          Market research <br />& strategy
                        </h3>
                        <span className="icon">
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                      </div>
                    </div>
                  </a>
                  <a href="blog-details.html">
                    <div className="blog-box">
                      <div className="thumb">
                        <img
                          src="/assets/imgs/blog/img-s-22.webp"
                          alt="image"
                        />
                      </div>
                      <div className="content">
                        <span className="number">03</span>
                        <h3 className="title">
                          Building quality <br />
                          sustainable
                        </h3>
                        <span className="icon">
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                      </div>
                    </div>
                  </a>
                  <a href="blog-details.html">
                    <div className="blog-box">
                      <div className="thumb">
                        <img
                          src="/assets/imgs/blog/img-s-23.webp"
                          alt="image"
                        />
                      </div>
                      <div className="content">
                        <span className="number">04</span>
                        <h3 className="title">
                          Business <br />
                          resilience tips
                        </h3>
                        <span className="icon">
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                      </div>
                    </div>
                  </a>
                  <a href="blog-details.html">
                    <div className="blog-box">
                      <div className="thumb">
                        <img
                          src="/assets/imgs/blog/img-s-24.webp"
                          alt="image"
                        />
                      </div>
                      <div className="content">
                        <span className="number">05</span>
                        <h3 className="title">
                          Entrepreneurial <br />
                          journeys
                        </h3>
                        <span className="icon">
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                      </div>
                    </div>
                  </a>
                  <a href="blog-details.html">
                    <div className="blog-box">
                      <div className="thumb">
                        <img
                          src="/assets/imgs/blog/img-s-25.webp"
                          alt="image"
                        />
                      </div>
                      <div className="content">
                        <span className="number">06</span>
                        <h3 className="title">
                          Business growth <br />
                          strategies
                        </h3>
                        <span className="icon">
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="pagination-box has_fade_anim">
                  <ul className="pagination">
                    <li>
                      <a href="#">01</a>
                    </li>
                    <li>
                      <a href="#">02</a>
                    </li>
                    <li>
                      <a href="#">03</a>
                    </li>
                    <li>
                      <a href="#">04</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Blog;
