import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext({
  items: [],
  favourites: [],
  createItem: (item) => {},
  getItem: (id) => {},
  updateItem: (item) => {},
  deleteItem: (id) => {},
});

const Store = ({ children }) => {
  const localStorageKey = "items";

  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem(localStorageKey);
    return storedItems ? JSON.parse(storedItems) : [];
  });

  const [favourites, setFavourites] = useState([]);

  function createItem(item) {
    const temp = [...items];
    temp.push(item);
    setItems(temp);
  }

  function getItem(id) {
    const item = items.find((item) => item.id === id);
    return item;
  }

  function updateItem(item) {
    const index = items.findIndex((i) => i.id === item.id);
    const temp = [...items];
    temp[index] = { ...item };
    setItems(temp);

    // Actualiza también el estado de favoritos
    const favouriteIndex = favourites.findIndex((i) => i.id === item.id);
    if (item.favourite) {
      if (favouriteIndex === -1) {
        setFavourites((prevFavourites) => [...prevFavourites, item]);
      }
    } else {
      if (favouriteIndex !== -1) {
        const updatedFavourites = [...favourites];
        updatedFavourites.splice(favouriteIndex, 1);
        setFavourites(updatedFavourites);
      }
    }
  }

  function deleteItem(id) {
    const filteredItems = items.filter((item) => item.id !== id);
    setItems(filteredItems);
  }

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(items));
  }, [items]);

  return (
    <AppContext.Provider
      value={{ items, favourites, createItem, getItem, updateItem, deleteItem }}
    >
      {children}
    </AppContext.Provider>
  );
};

export function useAppContext() {
  return useContext(AppContext);
}

export default Store;
