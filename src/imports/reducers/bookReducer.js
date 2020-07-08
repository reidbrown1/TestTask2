import uuid from 'uuid/v4';

export const bookReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [...state, {
        firstName: action.book.firstName, 
        lastName: action.book.lastName, 
        deliveryDate: action.book.deliveryDate, 
        deliveryCity: action.book.deliveryCity, 
        deliveryState: action.book.deliveryState, 
        deliveryCountry: action.book.deliveryCountry, 
        
        deliveryAddy: action.book.deliveryAddy,
        phoneNumber: action.book.phoneNumber,
        numberOfBoxes: action.book.numberOfBoxes,

        id: uuid()}
      ]
    case 'REMOVE_BOOK':
      return state.filter(book => book.id !== action.id);
    default:
      return state;
  }
} 