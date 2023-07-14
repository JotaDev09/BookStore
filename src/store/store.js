import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext({
  items: [],
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
      value={{ items, createItem, getItem, updateItem, deleteItem }}
    >
      {children}
    </AppContext.Provider>
  );
};

export function useAppContext() {
  return useContext(AppContext);
}

export default Store;
