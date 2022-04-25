export const formatDate = date => {
  const dateOptions = { weekday: 'long', month: 'long', day: 'numeric' };

  return date.toLocaleString('en-EN', dateOptions);
};
