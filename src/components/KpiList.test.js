import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import KpiList from "./KpiList";

test("renders empty list", () => {
  render(<KpiList kpiDefs={[]} />);
  const listElement = screen.getByTestId("kpi-list");

  expect(listElement).toBeInTheDocument();
  expect(listElement.hasChildNodes()).toBeFalsy();
});

test("renders list with 2 items", () => {
  render(
    <KpiList
      kpiDefs={[
        { key: "key1", name: "name1" },
        { key: "key2", name: "name2" },
      ]}
    />
  );

  const listElement = screen.getByTestId("kpi-list");
  expect(listElement).toBeInTheDocument();
  expect(listElement.hasChildNodes()).toBeTruthy();

  const checkboxes = screen.getAllByTestId("kpi-item");
  expect(checkboxes.length).toEqual(2);

  checkboxes.forEach((checkbox) => {
    expect(checkbox).not.toBeChecked();
  });

  const label1 = screen.getByLabelText("name1");
  expect(label1).toBeTruthy();

  const label2 = screen.getAllByLabelText("name2");
  expect(label2).toBeTruthy();
});
