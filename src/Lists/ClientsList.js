import React, { useState } from "react";
import CardPerson from "../components/CardPerson";

const ClientsList = () => {
  const [persons, setPersons] = useState([
    {
      id: 1,
      name: "Kevin",
      img: "https://bootdey.com/img/Content/avatar/avatar2.png",
      password: "password",
      email: "correo5@correo.com",
      direccion: "Alguna direccion",
      telefono: "1122334455",
    },
    {
      id: 2,
      name: "Alex",
      img: "https://bootdey.com/img/Content/avatar/avatar3.png",
      password: "password",
      email: "correo5@correo.com",
      direccion: "Alguna direccion",
      telefono: "1122334455",
    },
    {
      id: 3,
      name: "Ben",
      img: "https://bootdey.com/img/Content/avatar/avatar4.png",
      password: "password",
      email: "correo5@correo.com",
      direccion: "Alguna direccion",
      telefono: "1122334455",
    },
    {
      id: 4,
      name: "Ben",
      img: "https://bootdey.com/img/Content/avatar/avatar4.png",
      password: "password",
      email: "correo5@correo.com",
      direccion: "Alguna direccion",
      telefono: "1122334455",
    },
    {
      id: 5,
      name: "Ben",
      img: "https://bootdey.com/img/Content/avatar/avatar4.png",
      password: "password",
      email: "correo5@correo.com",
      direccion: "Alguna direccion",
      telefono: "1122334455",
    },
    {
      id: 6,
      name: "Ben",
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

export default ClientsList;
