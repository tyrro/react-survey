export const formatTodaysDate = () => {
  const date = new Date();
  const dateOptions = { weekday: 'long', month: 'long', day: 'numeric' };

  return date.toLocaleString('en-EN', dateOptions).toUpperCase();
};
