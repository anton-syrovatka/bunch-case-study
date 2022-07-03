const dataRepo = {
  marketingBudget: [
    { date: "2021-01-01", value: 4000 },
    { date: "2021-02-01", value: 3000 },
    { date: "2021-03-01", value: 4000 },
    { date: "2021-04-01", value: 2780 },
    { date: "2021-05-01", value: 1890 },
    { date: "2021-06-01", value: 2390 },
    { date: "2021-07-01", value: 3490 },
    { date: "2021-08-01", value: 4900 },
    { date: "2021-09-01", value: 2200 },
    { date: "2021-10-01", value: 3440 },
    { date: "2021-11-01", value: 2000 },
    { date: "2021-12-01", value: 1000 },
  ],
  revenue: [
    { date: "2021-01-01", value: 400 },
    { date: "2021-02-01", value: 300 },
    { date: "2021-03-01", value: 400 },
    { date: "2021-04-01", value: 278 },
    { date: "2021-05-01", value: 189 },
    { date: "2021-06-01", value: 239 },
    { date: "2021-07-01", value: 349 },
    { date: "2021-08-01", value: 490 },
    { date: "2021-09-01", value: 220 },
    { date: "2021-10-01", value: 344 },
    { date: "2021-11-01", value: 400 },
    { date: "2021-12-01", value: 100 },
  ],
  activeUsers: [
    { date: "2021-01-01", value: 100 },
    { date: "2021-02-01", value: 200 },
    { date: "2021-03-01", value: 300 },
    { date: "2021-04-01", value: 478 },
    { date: "2021-05-01", value: 589 },
    { date: "2021-06-01", value: 1000 },
    { date: "2021-07-01", value: 1300 },
    { date: "2021-08-01", value: 1400 },
    { date: "2021-09-01", value: 1600 },
    { date: "2021-10-01", value: 1700 },
    { date: "2021-11-01", value: 1900 },
    { date: "2021-12-01", value: 2500 },
  ],
};

export const getKpiFromDataRepo = (kpi, fromDate, toDate) => ({
  kpi,
  data: dataRepo[kpi].filter(
    (item) => item.date >= fromDate && item.date <= toDate
  ),
});
