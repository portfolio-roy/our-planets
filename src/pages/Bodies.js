import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import BodyThumb from '../components/BodyThumb';
import { fetchBodiesAction } from '../redux/bodies/bodies';
import SingleBody from './SingleBody';

const MainBody = () => {
  const dispatch = useDispatch();
  const elements = useSelector((state) => state.bodies.bodies);
  React.useEffect(() => {
    dispatch(fetchBodiesAction());
  }, [dispatch]);
  const [selectedOption, setSelectedOption] = React.useState('all');

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const filteredBodies = elements.filter(
    (body) => {
      if (selectedOption === 'all') {
        return true;
      }
      return body.type === selectedOption;
    },
  );
  const options = [...new Set(elements.map((body) => body.type))];
  return (
    <div className="container">
      <div className="filter">
        <h5>Category:</h5>
        <select className="select form-select" onChange={handleChange}>
          <option value="all">All</option>
          {options.map((option) => (
            <option value={option} key={option}>{option}</option>
          ))}
        </select>
      </div>
      <div className="col-md-12 item-grid">
        {filteredBodies.map((body) => (
          <Link className="item-link" to={`/single/${body.id}`} key={body.id} element={<SingleBody />}>
            <BodyThumb
              name={body.name}
              massVal={body.massVal}
              massExp={body.massExp}
              volVal={body.volVal}
              volExp={body.volExp}
              radius={body.radius}
              image={body.image}
              moons={body.moons}
              type={body.type}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainBody;
