import React, { useEffect, useState } from 'react';

export default function News(props) {
  const articles = props.articles;
  const articlesArr = articles.map ((article, index) => (
    <div key={index} className='col-md-4 mb-4'>
        <div className='card'>
            <img 
            src={article.urlToImage}
            className='card-img-top'
            alt='article.title' />
            <div className='card-body'>
                <h5 className='card-title'>{article.title}</h5>
                <p className='card-text'>{formatDate(article.publishedAt)} - {article.description}</p>
                <a href={article.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Read More</a>
            </div>
        </div>
    </div>
  ))

  return (
    <div className='container'>
        <div className='row'>
            {articlesArr}
        </div>
    </div>
  )

}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric'});
}