import React from "react";
import ClientsList from "../Lists/ClientsList";
import BtnCreate from "../components/BtnCreate";

const Clients = () => {
  return (
    <>
      <BtnCreate text={"Cliente"}/>
      <div className="clients">
        <ClientsList />
      </div>
    </>
  );
};

export default Clients;
