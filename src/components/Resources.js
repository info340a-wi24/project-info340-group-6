import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { NavLink, Outlet } from 'react-router-dom';

export default function Resources(props) {
  const articles = props.articles.slice(0,3);
  console.log(articles);
  const arrArticles = articles.map( (article) => carouselArticle(article));
  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-md-6'>
          <Carousel>
            {arrArticles}
          </Carousel>
        </div>
        <div className='col-md-6'>
          <Carousel>
            {carouselItem()}  
          </Carousel>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

function carouselArticle(article) {
  return (
    <Carousel.Item key={article.url}>
      <img
        className="d-block w-100"
        src={article.urlToImage || 'placeholder-image-url.jpg'} // Use a placeholder image if none is available
        alt={article.title}
      />
      <Carousel.Caption className="caption-background">
        <h3>{article.title}</h3>
        <p>{article.description}</p>
        <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Read More</a>
        <NavLink to="news" className="btn btn-primary">More Articles</NavLink>
      </Carousel.Caption>
    </Carousel.Item>
  );
}

function carouselItem() {
  return (
    <Carousel.Item key='fire-prevention'>
      <img
      className="d-block w-100"
      src="https://enews.wvu.edu/files/9a7c6c3b-39d3-41b1-b658-69feaac1c4ed/1200x?cb=23e5ef01286ea4ac08cc91efaa584393"
      alt="marked out flame"
      />
      <Carousel.Caption className='caption-background'>
        <h3>Fire Prevention</h3>
        <p>Preventing a fire is the best was to prepare for it.</p>
        <NavLink to='prepare' className="btn btn-primary">Learn More</NavLink>
      </Carousel.Caption>
    </Carousel.Item>
  )
}

