type SetFlickrAction = {
  type: "SET_FLICKR";
  payload: FlickrLinks;
};

type SetTotalAction = {
  type: "SET_TOTAL";
  payload: number;
};

export type FlickrLinks = {
  srcPath: string;
  id: string;
  title: string;
}[];

const cacheReducer = (
  state: Record<string, unknown> & { images: FlickrLinks; total: number },
  action: SetFlickrAction | SetTotalAction
) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_FLICKR": {
      return { ...state, images: payload };
    }
    case "SET_TOTAL": {
      return { ...state, total: payload };
    }
    default:
      throw new Error(`No case for type`);
  }
};

export default cacheReducer;
