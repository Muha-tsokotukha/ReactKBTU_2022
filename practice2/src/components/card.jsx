export const PhoneCard = ({ phone, handleBuy }) => {
  const onBuy = () => {
    const bought = JSON.parse(localStorage.getItem("bought"));

    if (bought?.length > 0) {
      if (!bought?.some((item) => item.id === phone.id)) bought.push(phone);
      localStorage.setItem("bought", JSON.stringify(bought));
    } else {
      localStorage.setItem("bought", JSON.stringify([phone]));
    }

    handleBuy(phone.id);
  };

  return (
    <section className="grid text-center border-2 border-gray-700">
      <img src={phone.img} alt="phone" width={164} height={164} />
      <h3>{phone.type}</h3>
      <span>{phone.price}$</span>
      <button
        className="border-2 border-white-600 p-1 bg-red-600 rounded hover:bg-yellow-500 cursor-pointer "
        onClick={onBuy}
      >
        Buy
      </button>
    </section>
  );
};
