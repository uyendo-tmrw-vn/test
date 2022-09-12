import axios from "axios";
import React, { useEffect, useState } from "react";

const UPDATE_INTERVAL_MS = 10000;
const useFetchHeraVal = () => {
  const [heraPrice, setHeraPrice] = useState(0);

  useEffect(() => {
    const interval = setInterval(async () => {
      await updateDataHeraPrice();
    }, UPDATE_INTERVAL_MS);

    const updateDataHeraPrice = async () => {
      await axios
        .get("https://api.coingecko.com/api/v3/coins/hero-arena")
        .then((res) => {
          setHeraPrice(res.data.market_data.current_price.usd);
          return res.data.market_data.current_price.usd;
        });
    };
    updateDataHeraPrice();

    return () => clearInterval(interval);
  }, []);
  return {
    heraPrice: heraPrice,
  };
};

export default useFetchHeraVal;
