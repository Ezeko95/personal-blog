"use client";
import React, { useEffect, useState } from "react";
import { Header, Card, LoadingCardContainer } from "./components/index";
import axios from "axios";

const App = () => {
  const [cardData, setCardData] = useState<any>(null);
  console.log(cardData);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/posts");
        const data = await response.data;
        setCardData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Header />
      {!cardData ? <LoadingCardContainer /> : <Card cardData={cardData} />}
    </>
  );
};

export default App;
