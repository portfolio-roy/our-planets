import fetchAllBodies from '../../getters/fetcheAllBodies';
import dataLocal from '../../data/bodiesLocal';

const SINGLE_BODY = 'SINGLE_BODY';

export const singleBodyAction = (itemId) => async (dispatch) => {
  const data = await fetchAllBodies();
  const bodies = data.map((body, index) => ({
    id: body.id,
    name: body.englishName,
    massVal: body.mass.massValue,
    massExp: body.mass.massExponent,
    volVal: body.vol.volValue,
    volExp: body.vol.volExponent,
    radius: body.equaRadius,
    moons: body.moons,
    type: body.bodyType,
    image: dataLocal[index].image,
    description: dataLocal[index].description,
  }));
  const singleBody = bodies.filter((item) => item.id === itemId);
  dispatch({
    type: SINGLE_BODY,
    payload: singleBody,

  });
};

const initialState = {
  singleBody: [],
};

const singleBodyReducer = (state = initialState, action) => {
  switch (action.type) {
    case SINGLE_BODY:
      return { ...state, singleBody: action.payload };
    default:
      return state;
  }
};

export default singleBodyReducer;
