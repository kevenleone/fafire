import { Table, Dropdown } from "react-bootstrap";

const TableComponent = ({ actions = [], columns = [], rows = [] }) => {
  return (
    <Table>
      <thead>
        <tr>
          {columns.map((column, index) => {
            return <th key={index}>{column.label}</th>;
          })}

          {Boolean(actions.length) && <th>Actions</th>}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => {
          return (
            <tr key={index}>
              {columns.map((column, index) => {
                const data = row[column.key];
                const value = column.render ? column.render(data, row) : data;

                return <td key={index}>{value}</td>;
              })}

              {Boolean(actions.length) && (
                <td>
                  <Dropdown>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                      Actions
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {actions.map((action, index) => (
                            <Dropdown.Item key={index} onClick={action.onClick}>
                                {action.label}
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              )}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default TableComponent;
