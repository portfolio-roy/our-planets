import React from 'react';
import PropTypes from 'prop-types';

const Body = ({
  name, massVal, massExp, volVal, volExp, radius, image, description, moons, type,
}) => {
  let moonCount = 0;
  if (!Array.isArray(moons) || !moons.length) {
    moonCount = 0;
  } else {
    moonCount = moons.length;
  }
  return (
    <>
      <section className="banner">
        <div className="overlay col-md-12">
          <div className="container">
            <div className="jumbotron single-jumbo">
              <div className="col-6 col-md-4 col-sm-4 banner-text left">
                <img className="featured-image" src={image} alt={name} />
              </div>
              <div className="col-6 col-md-4 col-sm-4 banner-text right">
                <h3>{name}</h3>
                <h6>
                  Type:
                  {' '}
                  {type}
                </h6>
                <p className="overview text-end">{description}</p>
              </div>

            </div>
          </div>
        </div>
      </section>
      <div className="col-md-12 single-item">

        <div className="col-md-12 description">

          <div className="quick-facts">
            <p>
              <strong>Mass: </strong>
              <span>
                {massVal}
                x10
                <sup>{massExp}</sup>
                {' '}
                kg
              </span>
            </p>
            <p>
              <strong>Volume: </strong>
              <span>
                {volVal}
                x10
                <sup>{volExp}</sup>
                {' '}
                km
              </span>
            </p>
            <p>
              <strong>Equatorial Radius: </strong>
              <span>
                {radius}
                {' '}
                km
              </span>
            </p>
            {moonCount !== 0
        && (
        <p>
          <strong>Moons: </strong>
          <span>
            {' '}
            {moonCount}
          </span>
        </p>
        )}
          </div>

          <div className="source">
            <p>
              Image and overview sourece:
              {' '}
              <a href="https://solarsystem.nasa.gov/planets/overview/">NASA</a>
            </p>
            <p>
              Api:
              {' '}
              <a href="https://api.le-systeme-solaire.net/">The Solar System OpenData</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

Body.propTypes = {
  name: PropTypes.string.isRequired,
  massVal: PropTypes.number.isRequired,
  massExp: PropTypes.number.isRequired,
  volVal: PropTypes.number.isRequired,
  volExp: PropTypes.number.isRequired,
  radius: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  moons: PropTypes.instanceOf(Array),
};

Body.defaultProps = {
  moons: [],
};
export default Body;
