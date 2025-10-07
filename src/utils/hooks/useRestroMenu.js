import { useEffect, useState } from "react";

const useRestroMenu = (resId) => {
  const [menuData, setMenuData] = useState(null);
  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6085642&lng=77.3561307&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const jsonData = await response.json();
    setMenuData(jsonData);
  };
  return menuData;
};

export default useRestroMenu;
