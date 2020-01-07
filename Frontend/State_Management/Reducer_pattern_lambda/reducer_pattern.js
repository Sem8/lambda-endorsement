/* Change integer state without changing original data */

const initialState = 0
const reducer = (state) => {
  const newState = state + 1
  return newState;
};
const newStateValue = reducer(initialState);
console.log(initialState, newStateValue); // 0, 1


/* Change data in an object without changing original object or original data in object */

const initialState = { count: 0 }
const reducer = (state) => {
  return { count: state.count + 1 }
};
const newReducerCount = reducer(initialState);
console.log(initialState, newReducerCount); // { count: 0 } , { count: 1 }


/* change data based on input action */
const initialState = { count: 0 }
const reducer = (state, action) => {
    if (action.type === 'increment') {
        return {count: state.count + 1};
    } else if (action.type === 'decrement') {
        return {count: state.count - 1 };
    }
};

console.log(initialState);  // { count: 0 }
console.log(reducer(initialState, { type: 'increment'}));  // { count: 1 } 
console.log(reducer(initialState, { type: 'decrement'}));  // { count: -1 }


/* Adding payload to action object (payload just means new data) */
const initialState = { name: 'Donald Duck' };
const reducer = (state, action) => {
    if (action.type === 'changeName') {
        return { name: action.payload}
    }
};

console.log(initialState);  // { name: 'Donald Duck' }
console.log(reducer(initialState, { type: 'changeName', payload: 'Mickey Mouse'}));  // { name: 'Mickey Mouse}


/* To-do assignment with reducer */
const initialState = [{'description': 'Prep for FE interview'}, {'description': 'Prep for coding interview'}, 
{'description': 'Learn .NET CORE web app building from docs'}];

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return [...state, action.payload];
        case 'EDIT':
            state[action.id] = action.payload;
            return [...state];
        default:
            return [...state];
    }
};

console.log(initialState);
console.log(reducer(initialState, { type: 'ADD', payload: {'description': 'Build shopping cart with C#/.NET Core'}}));
console.log(reducer(initialState, { type: 'EDIT', payload: { 'description': 'Build shopping cart with C#/.NET Core'}, id: 2 }));