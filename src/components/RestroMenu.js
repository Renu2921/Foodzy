 import ShimmerCard from "./ShimmerCard";
import { useParams } from "react-router";
import useRestroMenu from "../utils/hooks/useRestroMenu";
import AccordianMenu from "./AccordianMenu";


const RestroMenu = () => {
  const { resId } = useParams();
  const menuData = useRestroMenu(resId);
  console.log("menudata", menuData);
  if (!menuData?.data?.cards?.length) return <ShimmerCard />;

  const {
    name,
    avgRating,
    cuisines,
    locality,
    totalRatingsString,
    costForTwoMessage,
  } = menuData?.data?.cards?.[2]?.card?.card?.info ?? {};
  const { itemCards } =
    menuData?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]
      ?.card?.card ?? {};

  const accordianCategory =
    menuData?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (item) =>
        item?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(accordianCategory);
  return (
    <div className="w-[50%] ml-[30rem]">
      <h1 className="w-full font-bold text-[2rem] mt-4">{name}</h1>
      <div className="flex flex-col my-4 p-4 rounded-lg justify-center items-start w-full border border-gray-200 shadow-xl">
        <p className="font-semibold">{`${avgRating}   (${totalRatingsString})`}</p>
        <p></p>
        <p className="text-orange-600">{cuisines?.join(",")}</p>
        <p className="font-semibold">{costForTwoMessage}</p>
        <p className="font-semibold">{locality}</p>
      </div>
      <hr className="mt-20"></hr>
      <AccordianMenu accordianCategory={accordianCategory} />
    </div>
  );
};

export default RestroMenu;
