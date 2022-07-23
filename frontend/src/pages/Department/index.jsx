import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Container from "../../components/Container";
import ListView from "../../components/ListView";
import baseAxios from "../../utils/axios";

function Department() {
  const [forceRefetch, setForceRefetch] = useState(0);
  const navigate = useNavigate();

  const actions = [
    {
      label: "Edit",
      onClick: (department) => navigate(`/department/${department.id}`),
    },
    {
      label: "Remove",
      onClick: (department) =>
        baseAxios
          .delete(`/departments/${department.id}`)
          .then(() => {
            toast.success(`Department ${department.name} removed with success`);
            setForceRefetch(new Date().getTime())
          })
          .catch(() =>
            toast.error(`Department ${department.name} failed to remove`)
          ),
    },
  ];

  return (
    <Container title="Department">
      <ListView
        addButton={
          <Link className="btn btn-primary float-right" to="/department/new">
            Add Department
          </Link>
        }
        actions={actions}
        columns={[
          {
            key: "id",
            label: "ID",
          },
          {
            key: "name",
            label: "Name",
          },
        ]}
        endpoint="/departments"
        forceRefetch={forceRefetch}
      />
    </Container>
  );
}

export default Department;
