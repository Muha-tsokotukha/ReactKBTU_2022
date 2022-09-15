import { phones } from "./utility/phones";

const usePhones = ()=> {
  const boughtPhones = JSON.parse(localStorage.getItem("bought"));
  const actualPhones = boughtPhones?.length > 0
  ? phones.filter(
      (item) =>
        !boughtPhones?.some((boughtPhone) => boughtPhone.id === item.id)
    )
  : phones;

  return actualPhones;
}

const useRevenue = ()=> {
  const boughtPhones = JSON.parse(localStorage.getItem("bought"));
  const totalRevenue = boughtPhones.reduce((accumulator, object) => {
    return accumulator + object.price;
  }, 0);

  return {boughtPhones,totalRevenue};
}

export {usePhones, useRevenue};