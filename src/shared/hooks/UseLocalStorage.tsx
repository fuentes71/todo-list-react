const UseLocalStorage = (key: any, state: any) => {
  //@ts-ignore
  let storage = JSON.parse(localStorage.getItem(key));

  storage.forEach((el: any) => {
    if (el === state) return true;
  });
  return false;
};

export default UseLocalStorage;
