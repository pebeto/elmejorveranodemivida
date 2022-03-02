import dates from "../assets/data/dates.json";

const sortDates = () => {
  return dates.sort((a, b) => {
    return new Date(a.date) + new Date(b.date);
  });
};

export const getAllDates = () => {
  return sortDates();
};

export const getUpcomingDates = () => {
  let dates = sortDates();
  return dates.filter((d) => Date.parse(d.date) > new Date());
};

export const getPastDates = () => {
  let dates = sortDates();
  return dates.filter((d) => Date.parse(d.date) < new Date());
};
