import { Header } from "./header";
import { useRevenue } from "../hooks";

export const Dashboard = () => {
  const { boughtPhones, totalRevenue } = useRevenue();

  return (
    <div>
      <Header />

      <article className="grid justify-center border border-gray-200 p-10 pt-20 bg-gray-200 h-screen">
        <div>
          {boughtPhones?.map((item, index) => (
            <div
              className="w-96 h-16 flex justify-between bg-gray-500 p-5 mb-1"
              key={index}
            >
              <span>{item.id}</span>
              <span>{item.type}</span>
              <span>{item.price}$</span>
            </div>
          ))}
        </div>
        <span className="text-center from-stone-900 text-5xl mt-5">
          Total: {totalRevenue}$
        </span>
      </article>
    </div>
  );
};
