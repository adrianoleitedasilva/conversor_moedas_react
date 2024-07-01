import "./CurrencyConverter.css";
import { useState, useEffect } from "react";
import axios from "axios";

// https://v6.exchangerate-api.com/v6/3ef7cf79213be1e43468b694/latest/USD

const CurrencyConverter = () => {
  return (
    <div className="converter">
      <h2>💵Conversor de Moedas💵</h2>
      <input type="number" />
      <span>Selecione as moedas</span>
      <select>
        <option value="BRL">BRL</option>
      </select>
      <span>para</span>
      <select>
        <option value="USD">USD</option>
      </select>
      <h3>BRL para USD</h3>
      <p>20 BRL valem 5 USD</p>
    </div>
  );
};

export default CurrencyConverter;
