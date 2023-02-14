import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import Body from '../components/Body';
import { singleBodyAction } from '../redux/single/singlebody';

const SingleBody = () => {
  const param = useParams();
  const dispatch = useDispatch();
  const single = useSelector((state) => state.singleBody.singleBody);
  React.useEffect(() => {
    dispatch(singleBodyAction(param.itemId));
  }, [dispatch, param.itemId]);

  return (
    <div className="container single-body">
      {single.map((body) => (
        <Body
          key={body.id}
          name={body.name}
          massVal={body.massVal}
          massExp={body.massExp}
          volVal={body.volVal}
          volExp={body.volExp}
          radius={body.radius}
          image={body.image}
          description={body.description}
          moons={body.moons}
          type={body.type}
        />
      ))}
    </div>
  );
};

export default SingleBody;
