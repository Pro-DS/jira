const isFlage = (value) => (value === 0 ? false : !value);

export const cleanObject = (object) => {
  const result = { ...object };

  Object.keys(result).forEach((item) => {
    const value = result[item];
    if (isFlage(value)) {
      delete result[item];
    }
  });
  return result;
};
