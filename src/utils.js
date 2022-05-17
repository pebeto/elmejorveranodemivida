export const getImageURL = (imageSource) => {
  return process.env.PUBLIC_URL + imageSource;
};

export const isEmptyArray = (array) => {
  return Array.isArray(array) && array.length;
};

export const getUniqueId = (name) => {
  return `${name}-${Math.random()}`;
};
