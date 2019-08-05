const getDateString = rawTimeStamp => (
  new Date(rawTimeStamp).toString().slice(0, 24)
);

export default getDateString;
