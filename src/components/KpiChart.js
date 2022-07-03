import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend } from "recharts";

const colors = [
  "#8E44AD",
  "#3498DB",
  "#16A085",
  "#2ECC71",
  "#F39C12",
  "#D35400",
  "#E74C3C",
];

const getColor = (index, colors) => colors[index % colors.length];

function KpiChart({ data, kpiKeys, getKpiNameByKey = () => {} }) {
  return (
    <div data-testid="kpi-chart">
      <LineChart width={800} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
        <YAxis />
        <Legend />
        {kpiKeys.map((kpiKey, index) => (
          <Line
            id={kpiKey}
            key={kpiKey}
            type="monotone"
            data-testid="kpi-line"
            name={getKpiNameByKey(kpiKey)}
            dataKey={kpiKey}
            stroke={getColor(index, colors)}
            activeDot={{ r: 8 }}
          />
        ))}
      </LineChart>
    </div>
  );
}

export default KpiChart;
