import React, { useState, useEffect } from "react";
import { moneyFormat } from "../helpers";
const Balance = ({ count, subs, spent, setSpent }) => {
  const upadateBalance = () => {
    const spent = subs.reduce((total, item) => Number(item.price) + total, 0);
    setSpent(spent);
  };
  useEffect(() => {
    upadateBalance();
  }, [subs]);
  return (
    <div className="balance">
      <h3>Presupuesto: {moneyFormat(count)}</h3>
      <h3>Disponible: {moneyFormat(count - spent)}</h3>
      <h3>Gastado: {moneyFormat(spent)}</h3>
    </div>
  ); // Puedes agregar el valor de retorno aquí
};

export default Balance;
