import dates from "../assets/data/dates.json";

const sortDates = () => {
  return dates.sort((a, b) => {
    return new Date(a.date) + new Date(b.date);
  });
};

export const getAllDates = () => {
  let dates = sortDates();
  return dates;
};

export const getUpcomingDates = () => {
  let dates = sortDates();
  let upcomingDates = dates.filter((d) => Date.parse(d.date) > new Date());
  return upcomingDates;
};

export const getPastDates = () => {
  let dates = sortDates();
  let pastDates = dates.filter((d) => Date.parse(d.date) < new Date());
  return pastDates;
};
