import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ChooseDeadline from "./choosedeadline";
import ChoosePair from "./choosepair/choosepair";
import ChooseTopic from "./choosetopic";
import ProposeSale from "./proposesale";
import SetQuantityPrice from "./setquantityprice/setquantityprice";

const CreateVoteForm = () => {
  const [topic, setTopic] = useState();
  const [activeTab, setActiveTab] = useState(0);
  const [selectedPairs, setSelectedPairs] = useState([]);
  const [startPeriod, setStartPeriod] = useState(new Date());
  const [endPeriod, setEndPeriod] = useState(new Date());
  const navigate = useNavigate();

  const tabTitles = [
    "Select the topic",
    "Select the pair",
    "Enter a quantity and price",
    "Enter a Deadline",
    `Propose  ${topic}`,
  ];
  //   useEffect(() => {
  //     setTopic(topic);
  //   }, [topic]);

  const handleChooseTopic = (e) => setTopic(e.target.value);

  const handlePairSelect = (item) => {
    const isSelected = selectedPairs.some((i) => i.id === item.id);
    if (!isSelected) {
      setSelectedPairs([...selectedPairs, item]);
    } else {
      setSelectedPairs(selectedPairs.filter((x) => x.id != item.id));
    }
  };

  const handleNext = () => {
    //if topic is sell include 4th tab
    if (topic == "Sell" || topic == "Withdraw") {
      if (activeTab < 4) setActiveTab(activeTab + 1);
      if (activeTab === 4) {
        navigate("/hedge/hedge-details", {
          state: {
            selectedPairs,
          },
        });
      }
    } else {
      if (activeTab < 3) setActiveTab(activeTab + 1);
      if (activeTab === 3) {
        navigate("/hedge/hedge-details", {
          state: {
            selectedPairs,
          },
        });
      }
    }
  };

  const handleCancel = () => {
    navigate(-1);
  };

  const handleStartPeriod = (e) => {
    setStartPeriod(e);
    setEndPeriod(e); // to prevent end period from being less than start period on default selection
  };

  const handleEndPeriod = (e) => setEndPeriod(e);
  return (
    <div className="bg-darkGrey flex flex-col relative min-h-[500px] rounded-lg">
      <div className="py-10  text-white">
        <div className="flex justify-between px-4 sm:px-10 mb-8">
          <button onClick={handleCancel}>Cancel</button>
          <p>{tabTitles[activeTab]}</p>
          <button className="text-primary" onClick={handleNext}>
            {topic == "Sell" || topic == "Withdraw"
              ? activeTab === 4
                ? "Create Vote"
                : "Next"
              : activeTab === 3
              ? "Create Vote"
              : "Next"}
          </button>
        </div>
        {activeTab === 0 && <ChooseTopic action={handleChooseTopic} />}
        {activeTab === 1 && (
          <ChoosePair selectedPairs={selectedPairs} action={handlePairSelect} />
        )}
        {activeTab === 2 && <SetQuantityPrice selectedPairs={selectedPairs} />}
        {activeTab === 3 && (
          <ChooseDeadline
            start={startPeriod}
            end={endPeriod}
            action={handleStartPeriod}
            actionTwo={handleEndPeriod}
          />
        )}
        {activeTab === 4 && (
          <ProposeSale topic={topic} selectedPairs={selectedPairs} />
        )}
      </div>
    </div>
  );
};

export default CreateVoteForm;
