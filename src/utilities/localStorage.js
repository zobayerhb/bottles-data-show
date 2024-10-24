// get data from local storage
const getSavedDataLS = () => {
  const savedDataLS = localStorage.getItem("cart");
  if (savedDataLS) {
    return JSON.parse(savedDataLS);
  }
  return [];
};

// save data to local storage convert json stringify
const saveCartToLS = (cart) => {
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

// data add to local storage
const addToLS = (id) => {
  const cart = getSavedDataLS();
  cart.push(id);

  // save to local storage
  saveCartToLS(cart);
};

export { addToLS };
