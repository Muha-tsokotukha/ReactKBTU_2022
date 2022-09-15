import { useState } from "react";
import { Header } from "./header";
import { PhoneCard } from "./card";
import { usePhones } from "../hooks";

export const Layout = () => {
  const [data, setData] = useState(usePhones());

  const handleBuy = (id) => {
    setData(data?.filter((item) => item.id !== id));
  };

  return (
    <>
      <Header />
      <main className="flex justify-center flex-wrap gap-5 mt-10">
        {data?.map((phone, index) => (
          <PhoneCard key={index} phone={phone} handleBuy={handleBuy} />
        ))}
      </main>
    </>
  );
};
