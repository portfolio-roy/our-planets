import React from 'react';
import PropTypes from 'prop-types';

const BodyThumb = ({
  name, massVal, massExp, volVal, volExp, radius, image, moons, type,
}) => {
  let moonCount = 0;
  if (!Array.isArray(moons) || !moons.length) {
    moonCount = 0;
  } else {
    moonCount = moons.length;
  }
  return (
    <div className="body-thumb">
      <img className="thumbnail" src={image} alt={name} />
      <div className="info">
        <h3>{name}</h3>
        <h5>
          Type:
          {' '}
          {type}
        </h5>

        <p>
          <strong>Mass: </strong>
          {massVal}
          x10
          <sup>{massExp}</sup>
          {' '}
          kg
        </p>
        <p>
          <strong>Volume: </strong>
          {volVal}
          x10
          <sup>{volExp}</sup>
          {' '}
          km
        </p>
        <p>
          <strong>Equatorial Radius: </strong>
          {radius}
          {' '}
          km
        </p>
        {moonCount !== 0
        && (
        <p>
          <strong>Moons: </strong>
          {' '}
          {moonCount}
        </p>
        )}
      </div>
    </div>
  );
};
BodyThumb.propTypes = {
  name: PropTypes.string.isRequired,
  massVal: PropTypes.number.isRequired,
  massExp: PropTypes.number.isRequired,
  volVal: PropTypes.number.isRequired,
  volExp: PropTypes.number.isRequired,
  radius: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  moons: PropTypes.instanceOf(Array),
};
BodyThumb.defaultProps = {
  moons: [],
};
export default BodyThumb;
