import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

import Container from "../../components/Container";
import ListView from "../../components/ListView";
import baseAxios from "../../utils/axios";

const Professor = () => {
  const [forceRefetch, setForceRefetch] = useState(0);
  const navigate = useNavigate();

  const actions = [
    {
      label: "Edit",
      onClick: (professor) => navigate(`/professor/${professor.id}`),
    },
    {
      label: "Remove",
      onClick: (professor) =>
        baseAxios
          .delete(`/professors/${professor.id}`)
          .then(() => {
            toast.success(`Professor ${professor.name} removed with success`);
            setForceRefetch(new Date().getTime());
          })
          .catch(() =>
            toast.error(`Professor ${professor.name} failed to remove`)
          ),
    },
  ];

  return (
    <Container title="Professor">
      <ListView
        addButton={
          <Link className="btn btn-primary float-right" to="/professor/new">
            Add Professor
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
            render: (name) => {
              return <span style={{ color: "red" }}>{name.toUpperCase()}</span>;
            },
            label: "Name",
          },
          {
            key: "cpf",
            label: "CPF",
          },
          {
            key: "department",
            render: (department) => department?.name,
            label: "Departament",
          },
        ]}
        endpoint="/professors"
        forceRefetch={forceRefetch}
      />
    </Container>
  );
};

export default Professor;
