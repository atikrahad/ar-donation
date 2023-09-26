const getStored = () => {
  const stroddata = localStorage.getItem("loadData");
  if (stroddata) {
    return JSON.parse(stroddata);
  }
  return [];
};

const seveData = (loadData) => {
  const loadedDataStringify = JSON.stringify(loadData);
  localStorage.setItem("loadData", loadedDataStringify);
};

const setData = (id) => {
  const loadData = getStored();
  loadData.push(id);
  seveData(loadData);
};

export {setData, getStored}