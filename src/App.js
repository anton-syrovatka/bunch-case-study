import KpiChart from "./components/KpiChart";
import KpiList from "./components/KpiList";

import "./App.css";
import { useGetKpiData } from "./api";
import { useState } from "react";

const kpiMap = {
  marketingBudget: "Marketing Budget",
  activeUsers: "Active Users",
  revenue: "Revenue",
};

const kpiDefs = Object.keys(kpiMap).map((key) => ({ key, name: kpiMap[key] }));

function App() {
  const [selectedKpiKeys, setSelectedKpiKeys] = useState([]);
  const {
    loading,
    data,
    kpiKeys: loadedKpiKeys,
  } = useGetKpiData({
    kpiKeys: selectedKpiKeys,
    fromDate: "2021-01-01",
    toDate: "2021-12-31",
  });

  const selectKpi = (kpiKey, isChecked) => {
    if (isChecked) {
      setSelectedKpiKeys((keys) => [...keys, kpiKey]);
    } else {
      setSelectedKpiKeys((keys) => keys.filter((key) => key !== kpiKey));
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <KpiList kpiDefs={kpiDefs} onItemClick={selectKpi} loading={loading} />
        <KpiChart
          data={data}
          kpiKeys={loadedKpiKeys}
          getKpiNameByKey={(key) => kpiMap[key]}
        />
      </header>
    </div>
  );
}

export default App;
