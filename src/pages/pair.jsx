import Header from "../components/header/header";
import BottomNavigation from "../components/bottomnav/bottomnav";
import { useState } from "react";
import buy from "../assets/images/pairs/buy.png";
import sell from "../assets/images/pairs/sell.png";
import withdraw from "../assets/images/pairs/withdraw.png";
import PairHeader from "../components/hedge/votes/pair-header";
import OptionTile from "../components/hedge/votes/option-tile";

const Pair = () => {
  const optionData = [
    {
      title: "Buy",
      icon: buy,
      route: "/buy-pair",
    },
    {
      title: "Sell",
      icon: sell,
      route: "/sell-pair",
    },
    {
      title: "Withdraw",
      icon: withdraw,
      route: "/withdraw-pair",
    },
  ];
  const [options] = useState(optionData);

  return (
    <div className="bg-black h-screen overflow-auto ">
      <Header />
      <div className="flex justify-center overflow-auto mt-24 w-[90%] h-[70vh] md:w-2/3 m-auto mb-4 pb-20">
        <div className="rounded-[5px] bg-darkGrey w-[100%] md:w-[80%] bg-auto bg-no-repeat bg-center">
          <PairHeader
            backHandler={() => {}}
            stepTitle="Select the topic"
            actionTitle="Next"
            actionHandler={() => {}}
          />
          {options.map((item, index) => {
            return <OptionTile key={index} item={item} />;
          })}
        </div>
      </div>
      <BottomNavigation />
    </div>
  );
};

export default Pair;
