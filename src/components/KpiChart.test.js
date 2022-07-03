import "@testing-library/jest-dom";
import { render, screen, within } from "@testing-library/react";
import KpiChart from "./KpiChart";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
];

test("renders chart with 3 lines", () => {
  render(<KpiChart data={data} kpiKeys={["uv", "pv", "amt"]} />);

  const chartElement = screen.getByTestId("kpi-chart");
  expect(chartElement).toBeInTheDocument();

  const line1 = within(chartElement).getByText("uv");
  expect(line1).toBeTruthy();

  const line2 = within(chartElement).getByText("pv");
  expect(line2).toBeTruthy();

  const line3 = within(chartElement).getByText("amt");
  expect(line3).toBeTruthy();
});
