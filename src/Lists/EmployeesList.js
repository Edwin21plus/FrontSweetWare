import React, { useState } from "react";
import CardPerson from "../components/CardPerson";

const EmployeesList = () => {
  const [persons, setPersons] = useState([
    {
      id: 1,
      name: "Kevin",
      role: "ADMIN ROLE",
      img: "https://bootdey.com/img/Content/avatar/avatar2.png",
      password: "password",
      email: "correo5@correo.com",
      direccion: "Alguna direccion",
      telefono: "1122334455",
    },
    {
      id: 2,
      name: "Alex",
      role: "Backend Developer",
      img: "https://bootdey.com/img/Content/avatar/avatar3.png",
      password: "password",
      email: "correo5@correo.com",
      direccion: "Alguna direccion",
      telefono: "1122334455",
    },
    {
      id: 3,
      name: "Ben",
      role: "Designer",
      img: "https://bootdey.com/img/Content/avatar/avatar4.png",
      password: "password",
      email: "correo5@correo.com",
      direccion: "Alguna direccion",
      telefono: "1122334455",
    },
    {
      id: 4,
      name: "Ben",
      role: "Designer",
      img: "https://bootdey.com/img/Content/avatar/avatar4.png",
      password: "password",
      email: "correo5@correo.com",
      direccion: "Alguna direccion",
      telefono: "1122334455",
    },
    {
      id: 5,
      name: "Ben",
      role: "Designer",
      img: "https://bootdey.com/img/Content/avatar/avatar4.png",
      password: "password",
      email: "correo5@correo.com",
      direccion: "Alguna direccion",
      telefono: "1122334455",
    },
    {
      id: 6,
      name: "Ben",
      role: "Designer",
      img: "https://bootdey.com/img/Content/avatar/avatar4.png",
      password: "password",
      email: "correo5@correo.com",
      direccion: "Alguna direccion",
      telefono: "1122334455",
    },
  ]);

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {persons.map((person) => {
          return (
            <CardPerson
              key={person.id}
              name={person.name}
              img={person.img}
              role={person.role}
              email={person.email}
              direccion={person.direccion}
              telefono={person.telefono}
            />
          );
        })}
      </div>
    </div>
  );
};

export default EmployeesList;
