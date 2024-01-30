export const snakeCaseConverter = (
  inputObject: Record<string, any>,
): Record<string, any> => {
  const snakeCaseObject: Record<string, any> = {};

  for (const key in inputObject) {
    if (inputObject.hasOwnProperty(key)) {
      const snakeCaseKey = key
        .replace(/([a-z])([A-Z])/g, '$1_$2')
        .toLowerCase();
      snakeCaseObject[snakeCaseKey] = inputObject[key];
    }
  }

  return snakeCaseObject;
};
