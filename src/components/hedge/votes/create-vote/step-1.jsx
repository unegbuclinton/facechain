import { useEffect, useState } from "react";
import BuyPairHeader from "./buy-pair-header";
import PairTile from "./pair-tile";
import Search from "./search";
import SelectedPair from "./selected-pair";
const Step1 = ({ currentStep, proceedStep }) => {
	const pairData = [
		{
			id: 1,
			image: "https://bitcoin.org/img/icons/opengraph.png?1651392467",
			title: "BTC/USDT",
			amount: "56,838.39",
			type: "Bitcoin",
		},
		{
			id: 2,
			image: "https://s2.coinmarketcap.com/static/img/coins/200x200/52.png",
			title: "XRP/USDT",
			amount: "46,236.64",
			type: "Bitcoin",
		},
	];
	const backHandler = () => {};
	const actionHandler = () => {};
	const [pairs] = useState(pairData);
	const [selectedPairs, setSelectedPairs] = useState([]);

	const pairHandler = (item) => {
		let Avalue = parseInt(item.id);
		var checkbox = document.getElementById(`A${item.id}`);
		const state = selectedPairs.some((item) => {
			return item == Avalue;
		});
		if (checkbox.checked != true) {
			const newArr = selectedPairs.filter((x) => {
				return x.id != item.id;
			});
			setSelectedPairs(newArr);
		}
		if (state == false && checkbox.checked == true) {
			setSelectedPairs((items) => [...items, item]);
		}
	};

	useEffect(() => {}, [selectedPairs]);

	return (
		<div className="rounded-[5px] bg-darkGrey w-[100%] md:w-[100%] h-[80vh] overflow-auto bg-auto bg-no-repeat bg-center">
			<BuyPairHeader
				currentStep={currentStep}
				backHandler={backHandler}
				stepTitle="Select the Pair"
				actionTitle="Next"
				actionHandler={proceedStep}
			/>
			<div className="px-[5%] py-[1.5rem]">
				<div className="md:w-[45%] w-[100%]">
					<Search />
				</div>
				<br />
				<div className="flex justify-between flex-wrap">
					<div className="md:w-[45%] w-[100%]">
						<div className="flex justify-between  border-b-[1px] border-[#383838] pb-4">
							<p className="text-white text-[14px]">Pair</p>
							<p className="text-white text-[14px]">Price</p>
						</div>
						{pairs.map((item, index) => {
							return (
								<PairTile key={index} item={item} pairHandler={pairHandler} />
							);
						})}
					</div>

					<div className="md:w-[45%] w-[100%]">
						{selectedPairs.length <= 0 ? (
							<p className="text-white text-[24px] font-bold text-center h-[200px] flex justify-center items-center">
								Choose those pairs that you will buy or sell
							</p>
						) : (
							<div>
								<p className="text-white text-[14px] mb-4">Selected Pairs</p>
								{selectedPairs.map((item, index) => {
									return <SelectedPair key={index} item={item} />;
								})}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Step1;
