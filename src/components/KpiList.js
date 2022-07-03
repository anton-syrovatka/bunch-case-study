import Form from "react-bootstrap/Form";

function KpiLists({ kpiDefs = [], onItemClick, loading = false }) {
  const onClick = (e) => {
    const kpiKey = e?.target?.dataset?.key;
    const isChecked = e?.target?.checked;

    onItemClick && onItemClick(kpiKey, isChecked);
  };

  return (
    <Form.Group className="mb-3 form-list" data-testid="kpi-list">
      {kpiDefs.map(({ key, name }) => (
        <Form.Check
          type="checkbox"
          label={name}
          key={key}
          id={key}
          data-key={key}
          onClick={onClick}
          disabled={loading}
          data-testid="kpi-item"
        />
      ))}
    </Form.Group>
  );
}

export default KpiLists;
