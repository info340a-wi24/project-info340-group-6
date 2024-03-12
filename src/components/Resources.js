import React, { useEffect, useState } from 'react';
import { Carousel, Card} from 'react-bootstrap';

export default function Resources(props) {
  const articles = props.articles.slice(0,3);
  console.log(articles);
  const arrArticles = articles.map( (article) => carouselItem(article));
  return (
    <div className='containter'>
      <Carousel>
        {arrArticles}
      </Carousel>
    </div>
  );
}

function carouselItem(article) {
  return (
    <Carousel.Item key={article.url}>
      <img
        className="d-block w-100"
        src={article.urlToImage || 'placeholder-image-url.jpg'} // Use a placeholder image if none is available
        alt={article.title}
      />
      <Carousel.Caption>
        <h3>{article.title}</h3>
        <p>{article.description}</p>
        <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Read More</a>
      </Carousel.Caption>
    </Carousel.Item>
  );
}

