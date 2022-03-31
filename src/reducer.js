 export const init = {count:0}

export function reducer(state=init.count,action) {
switch (action.type) {
  case 'Increment':
      return state+1

  default:
    return state;
}
    
}