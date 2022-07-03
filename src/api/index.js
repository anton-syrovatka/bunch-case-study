import { useState, useEffect } from "react";

import { getKpiFromDataRepo } from "./data";

export const useGetKpiData = ({ kpiKeys = [], fromDate, toDate }) => {
  const [loadedKpiKeys, setLoadedKpiKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (kpiKeys.length > 0) {
      setLoading(true);

      (async () => {
        try {
          const result = await fetchKpIs({ kpiKeys, fromDate, toDate });

          setLoading(false);
          setLoadedKpiKeys(kpiKeys);
          setData(result);
        } catch (e) {
          setLoading(false);
          console.log(e.message);
        }
      })();
    } else {
      setData([]);
      setLoadedKpiKeys([]);
    }
  }, [kpiKeys, setLoading, setData, setLoadedKpiKeys, fromDate, toDate]);

  return { loading, data, kpiKeys: loadedKpiKeys };
};

const getMonthName = (date) =>
  new Date(date).toLocaleString("default", { month: "short" });

const mergeKpis = (kpiList) => {
  const merged = Array(12)
    .fill(true)
    .map((i) => ({}));

  kpiList.forEach((kpiItem) => {
    const { kpi, data } = kpiItem;

    data.forEach((item, index) => {
      const month = merged[index] || {};
      month.name = getMonthName(item.date);
      month[kpi] = item.value;
    });
  });

  return merged;
};

/***
 * Emulates fetching GET /kpi endpoint
 * query params:
 * - kpiKeys - list of kpis to fetch
 * - fromDate - from date filter
 * - toDate - to date filter
 *
 * response:
 * - get list of kpis [{ kpi: "revenue", data: [{ date: "", value: "" }, ... ] }, ... ]
 * - merge kpis into chart data format [{ name: "Jan", key1: n1, key2: n2, key3: n3, ...}, ...]
 */
const fetchKpIs = ({ kpiKeys = [], fromDate, toDate }) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const kpiArray = kpiKeys.map((key) =>
        getKpiFromDataRepo(key, fromDate, toDate)
      );
      const mergedKpis = mergeKpis(kpiArray);

      resolve(mergedKpis);
    }, 1000);
  });
