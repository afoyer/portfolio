import React, { createContext, useContext, useReducer } from "react";
import cacheReducer, { FlickrLinks } from "../reducers/cache";

const Context = createContext<{
  cache: Record<string, unknown> & { images?: FlickrLinks; total: number };
  updateFlickr: (images: FlickrLinks) => void;
  setTotal: (total: number) => void;
}>({
  cache: { total: Infinity },
  updateFlickr: () => {},
  setTotal: () => {},
});
export const CacheProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [state, dispatch] = useReducer(cacheReducer, {
    images: [],
    total: Infinity,
  });
  const updateFlickr = (images: FlickrLinks) => {
    dispatch({
      type: "SET_FLICKR",
      payload: images,
    });
  };
  const setTotal = (number: number) => {
    dispatch({
      type: "SET_TOTAL",
      payload: number,
    });
  };
  const value = {
    cache: { ...state },
    updateFlickr,
    setTotal,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

const useCache = () => {
  const context = useContext(Context);

  if (context === undefined) {
    throw new Error("useShop must be used within ShopContext");
  }

  return context;
};

export default useCache;
