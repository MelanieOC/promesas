import createStore from 'redux-zero';

const initialState = {
    planets : []
}

const store = createStore(initialState);

export default store; 