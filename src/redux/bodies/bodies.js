import fetchAllBodies from '../../getters/fetcheAllBodies';
import dataLocal from '../../data/bodiesLocal';

const FETCH_BODIES = 'FETCH_BODIES';

export const fetchBodiesAction = () => async (dispatch) => {
  const data = await fetchAllBodies();
  const bodies = data.map((body, index) => ({
    id: body.id,
    name: body.englishName,
    massVal: body.mass.massValue,
    massExp: body.mass.massExponent,
    volVal: body.vol.volValue,
    volExp: body.vol.volExponent,
    radius: body.equaRadius,
    type: body.bodyType,
    image: dataLocal[index].image,
    description: dataLocal[index].description,
  }));
  dispatch({
    type: FETCH_BODIES,
    payload: bodies,

  });
};

const initialState = {
  bodies: [],
};

const bodiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BODIES:
      return { ...state, bodies: action.payload };
    default:
      return state;
  }
};

export default bodiesReducer;
