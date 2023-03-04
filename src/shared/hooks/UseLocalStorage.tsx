const UseGetLocalStorage = (key: string) => {
  //@ts-ignore
  const storage = JSON.parse(localStorage.getItem(key));

  return storage ? storage : null;
};

const UseSetLocalStorage = (key: string, state: string) => {
  const json = JSON.stringify(state);
  const response = window.localStorage.setItem(key, json);
  return response;
};

const UseRemoveLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};

export { UseGetLocalStorage, UseSetLocalStorage, UseRemoveLocalStorage };
