export const UseGetLocalStorage = (key: string, state: any) => {
  //@ts-ignore
  const storage = JSON.parse(localStorage.getItem(key));

  return storage ? storage : state;
};

export const UseSetLocalStorage = (key: string, state: any) => {
  const json = JSON.stringify(state);
  const response = window.localStorage.setItem(key, json);
  return response;
};

export const UseRemoveLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};
