import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";

export default function PostGrid({ excerpt, frontmatter }) {
  const { banner, title, slug, date, categories } = frontmatter;
  return (
    <>
      <div className="blog__item">
        <Img
          className="img-responsive blog__img"
          fluid={banner.sharp.fluid}
          alt={title}
        />
        <div className="blog__content">
          <Link className="blog-item__link" to={slug}>
            <h3 className="blog__heading">{title}</h3>
          </Link>
          <div className="blog__details flex-start">
            <span>{date}</span>
          </div>
          <div className="blog__details flex-start">
            {categories &&
              categories.map(category => (
                <Link className="tag" to={`/tags/${category}`}>
                  {category}
                </Link>
              ))}
          </div>
          <div>
            <p className="blog__intro-text">{excerpt.substr(0, 80)}</p>
          </div>
          <Link className="blog__link" to={slug}>
            Read More ..
          </Link>
        </div>
        <div className="blog__overlay" />
      </div>
    </>
  );
}
