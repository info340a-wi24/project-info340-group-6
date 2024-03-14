import React from 'react';
import { Carousel } from 'react-bootstrap';
import { NavLink, Outlet } from 'react-router-dom';

export default function Resources(props) {
  // const articles = props.articles.slice(0,3);
  // const arrArticles = articles.map( (article) => carouselArticle(article));
  return (
    <div className='container'>
      <div className='row justify-content-center'>
        {/* <div className='col-md-6'>
          <Carousel>
            {arrArticles}
          </Carousel>
        </div> */}
        <div className='col-md-6'>
          {carouselPrepare()}
        </div>
        <div className='col-md-6'>
          {carouselDuring()}
        </div>
        <div className='col-md-6'>
          {carouselAfter()}
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
        src={article.urlToImage || 'placeholder-image-url.jpg'}
        alt={article.title}
      />
      <Carousel.Caption className="caption-background">
        <h3 className='carousel-title'>News Articles</h3>
        <br/>
        <h4>{article.title}</h4>
        <p>{article.description}</p>
        <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Read More</a>
        <NavLink to="news" className="btn btn-primary">More Articles</NavLink>
      </Carousel.Caption>
    </Carousel.Item>
  );
}

function carouselPrepare() {
  return (
    <Carousel>
      <Carousel.Item key='fire-prevention'>
        <img
        className="d-block w-100"
        src="https://enews.wvu.edu/files/9a7c6c3b-39d3-41b1-b658-69feaac1c4ed/1200x?cb=23e5ef01286ea4ac08cc91efaa584393"
        alt="marked out flame"
        />
        <Carousel.Caption className='caption-background'>
          <h3 className='carousel-title'>Preparing for a Fire</h3>
          <br />
          <h4>Fire Prevention</h4>
          <p>Preventing a fire is the best was to prepare for it.</p>
          <NavLink to='prepare' className="btn btn-primary">Learn More</NavLink>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item key='emergency-kit'>
        <img
        className="d-block w-100"
        src="https://t3.ftcdn.net/jpg/04/87/69/84/240_F_487698406_Q4tdLj3aUSsAMtKVh566Qik74bc9wPNN.jpg"
        alt="emergency kit"
        />
        <Carousel.Caption className='caption-background'>
          <h3 className='carousel-title'>Preparing for a Fire</h3>
          <br />
          <h4>Emergency Preparedness Kit</h4>
          <p>An emergency kit is a critical component of fire preparedness.</p>
          <NavLink to='prepare' className="btn btn-primary">Learn More</NavLink>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item key='escape-plan'>
        <img
        className="d-block w-100"
        src="https://media.istockphoto.com/id/1150730658/vector/evacuation-plan-in-clipboard-vector-flat-illustration.jpg?s=612x612&w=0&k=20&c=O96AbQ9TCwhEqb6seL3MXj2xjaa20zfwKdhtWuBLMx8="
        alt="escape plan route stock image"
        />
        <Carousel.Caption className='caption-background'>
          <h3 className='carousel-title'>Preparing for a Fire</h3>
          <br />
          <h4>Fire Escape Plan</h4>
          <p>Having a fire escape plan is essential for quickly and safely evacuating in the event of a fire.</p>
          <NavLink to='prepare' className="btn btn-primary">Learn More</NavLink>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

function carouselDuring() {
  return (
    <Carousel>
      <Carousel.Item key='immediate-actions'>
        <img
        className="d-block w-100"
        src="https://media.istockphoto.com/id/1454257680/vector/action-required-grunge-rubber-stamp.jpg?s=612x612&w=0&k=20&c=la8qIxoYAHevAEzZonTIYu1RuiwIRLOrArws12dnlxg="
        alt="action required stamp"
        />
        <Carousel.Caption className='caption-background'>
          <h3 className='carousel-title'>What to do During a Fire</h3>
          <br></br>
          <h4>Immediate Action</h4>
          <p>As soon as you become aware of a fire, act quickly and calmly to ensure your safety and that of others.</p>
          <NavLink to='during' className="btn btn-primary">Learn More</NavLink>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item key='evacuation-procedure'>
        <img
        className="d-block w-100"
        src="https://media.istockphoto.com/id/1204433170/vector/emergency-exit-icon-great-design-for-any-purposes-fire-symbol.jpg?s=612x612&w=0&k=20&c=fIx2BZ3gFh620x-QqgDu8PLBHkedBsTrERi9jWQW5x4="
        alt="person exiting"
        />
        <Carousel.Caption className='caption-background'>
          <h3 className='carousel-title'>What to do During a Fire</h3>
          <br></br>
          <h4>Evacuation Procedures</h4>
          <p>Evacuating safely is paramount during a fire.</p>
          <NavLink to='during' className="btn btn-primary">Learn More</NavLink>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item key='wildfire-specifics'>
        <img
        className="d-block w-100"
        src="https://media.istockphoto.com/id/1322594131/vector/spruce-forest-fire-natural-disaster-background.jpg?s=612x612&w=0&k=20&c=teiHqxcbAewODDyxWkgK5kV33h8YfTwvDvEI4851z8Y="
        alt="forest fire"
        />
        <Carousel.Caption className='caption-background'>
          <h3 className='carousel-title'>What to do During a Fire</h3>
          <br></br>
          <h4>Evacuation Procedures</h4>
          <p>If you're dealing with a wildfire, additional precautions are necessary.</p>
          <NavLink to='during' className="btn btn-primary">Learn More</NavLink>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

function carouselAfter() {
  return (
    <Carousel>
      <Carousel.Item key='safety-first'>
        <img
        className="d-block w-100"
        src="https://www.accuform.com/files/damObject/Image/huge/MGNF971.jpg"
        alt="marked out flame"
        />
        <Carousel.Caption className='caption-background'>
          <h3 className='carousel-title'>What to do After a Fire</h3>
          <br />
          <h4>Safety First</h4>
          <p>Before re-entering your home or any affected are, ensure it's safe.</p>
          <NavLink to='after' className="btn btn-primary">Learn More</NavLink>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item key='assessing-documenting'>
        <img
        className="d-block w-100"
        src="https://media.istockphoto.com/id/492911692/vector/writing.jpg?s=612x612&w=0&k=20&c=Li_2Liwg7W_3_Y3NCgUfNm_jMZs5fXNLzfe8-AMNDt4="
        alt="pen and paper"
        />
        <Carousel.Caption className='caption-background'>
          <h3 className='carousel-title'>What to do After a Fire</h3>
          <br />
          <h4>Assessing and Documenting Damage</h4>
          <p>Documenting the damage thoroughly is essential for insurance claims and rebuilding efforts.</p>
          <NavLink to='after' className="btn btn-primary">Learn More</NavLink>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item key='cleaning-up'>
        <img
        className="d-block w-100"
        src="https://media.istockphoto.com/id/1218730281/vector/cleaning-icon.jpg?s=612x612&w=0&k=20&c=IvXuY23ZG4ARgSvMKWaqSqxczjdjLl9jEns2saU3Br8="
        alt="hand with sponge"
        />
        <Carousel.Caption className='caption-background'>
          <h3 className='carousel-title'>What to do After a Fire</h3>
          <br />
          <h4>Cleaning Up</h4>
          <p>Cleaning up after a fire is a daunting task that may require professional services.</p>
          <NavLink to='after' className="btn btn-primary">Learn More</NavLink>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  )
}

