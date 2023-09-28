import React, { useEffect, useState } from "react";
import Header from "../Header";
import Navbar from "../Navbar";
import LastUpdate from "../LastUpdate";
import Footer from "../Footer";
import Homepage from "../Homepage";
import { Modal } from "../Modal";
import { HashRouter, Routes, Route } from "react-router-dom";
import BankCard from "../BankCard";
import Timeline from "../Timeline";

const App = () => {
  const [modalActive, setModalActive] = useState(false);
  const [convertTo, setConvertTo] = useState("australian_dollar");
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const lastUpdated = JSON.parse(localStorage.getItem("data"))?.meta
          .last_updated_at;
        const currentTime = new Date();
        const twentyFourHours = 24 * 60 * 60 * 1000; // 24 часа в миллисекундах

        if (
          !lastUpdated ||
          currentTime - new Date(lastUpdated) >= twentyFourHours
        ) {
          const response = await fetch(
            `https://api.currencyapi.com/v3/latest?apikey=${process.env.REACT_APP_API_KEY}&currencies=EUR%2CUSD%2CCAD%2CARS%2CJPY%2CAUD%2CCNY%2CBTC%2CTRY`
          );
          const data = await response.json();
          setData(data);
          localStorage.setItem("lastUpdated", data.meta.last_updated_at);
          localStorage.setItem("data", JSON.stringify(data));
        } else setData(JSON.parse(localStorage.getItem("data")));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  console.log(data);
  return (
    <>
      <HashRouter>
        <Navbar />
        <Header />
        <LastUpdate lastUpdated={data?.meta.last_updated_at} />

        <Routes>
          <Route
            path="/"
            element={
              <Homepage
                setModalActive={setModalActive}
                convertTo={convertTo}
                data={data}
              />
            }
          />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/bankcard" element={<BankCard />} />
        </Routes>

        <Footer />
        <Modal active={modalActive} setActive={setModalActive}>
          <select
            onChange={(event) => {
              setConvertTo(event.target.value);
              setModalActive(false);
            }}
          >
            <option value="australian_dollar"> Australlian Dollar</option>
            <option value="bitcoin">Bitcoin </option>
            <option value="canadian_dollar">Canadian Dollar</option>
            <option value="dollar">Dollar </option>
            <option value="euro">Euro </option>
            <option value="libra">Libra</option>
            <option value="peso">Peso</option>
            <option value="won">Won </option>
            <option value="yen">Yen </option>
          </select>
        </Modal>
      </HashRouter>
    </>
  );
};

export default App;
