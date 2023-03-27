/* ================ Import Dependencies ================ */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

/* ================ Import Components ================ */
import ProgressDots from "../../common/progress/progressdots";
import FamilyPoolMeta from "./familypoolmeta";
import FamilyPoolDeposit from "./familypooldeposit";
import FamilyPoolDepositNetwork from "./depositnetwork";
import FamilyPoolQr from "./familypoolqr";
import StepNavigation from "./stepnavigation";

/* ================ Import Hooks ================ */
import useCreateFamilyPool from "../../../hooks/familypools/usecreatefamilypools";

const CreatePoolForm = () => {
  // Create states
  const [activeTab, setActiveTab] = useState(0);
  const [poolName, setPoolName] = useState("");
  const [exchange, setExchange] = useState("");
  const [depositValue, setDepositValue] = useState(150);
  const [memberValue, setMemberValue] = useState(3);
  const [endForm, setEndForm] = useState(false);
  const { createFamilyPool } = useCreateFamilyPool();

  const navigate = useNavigate();

  const data = [1, 2, 3, 4];

  // Create functions
  function handleRangeInput(e) {
    if (e.target.name === "minDeposit") setDepositValue(e.target.value);
    if (e.target.name === "totalMembers") setMemberValue(e.target.value);
  }

  const handleNext = () => {
    if (activeTab === 1) {
      if (poolName && exchange && depositValue && memberValue) {
        handleSubmit();
      }
    } else if (activeTab !== 4) {
      setActiveTab(activeTab + 1);
    }

    // if(activeTab === data.length - 1) setEndForm(true);
  };

  const handleName = (e) => {
    setPoolName(e.target.value);
  };

  const handleExchange = (e) => {
    setExchange(e.target.value);
  };

  const handlePrev = () => {
    if (activeTab !== 0) setActiveTab(activeTab - 1);
    if (activeTab === 0) navigate(-1);
    setEndForm(false);
  };

  const handleSubmit = () => {
    const familyPool = {
      poolName,
      exchange,
      depositValue,
      memberValue,
    };
    createFamilyPool(familyPool);
  };
  return (
    <div className="flex flex-col relative">
      <div className="bg-darkGrey  rounded-lg min-h-[500px] relative">
        <StepNavigation
          handleNext={handleNext}
          handlePrev={handlePrev}
          isFinal={endForm}
          title={
            activeTab === 0
              ? "Family Pool Meta"
              : activeTab === 1
              ? "Deposit & Members"
              : activeTab === 2
              ? "Deposit Network"
              : "Create Family Pool"
          }
          currentStep={activeTab}
        />
        {activeTab === 0 && (
          <FamilyPoolMeta
            handleName={handleName}
            handleExchange={handleExchange}
          />
        )}
        {activeTab === 1 && (
          <FamilyPoolDeposit
            action={handleRangeInput}
            depositValue={depositValue}
            memberValue={memberValue}
          />
        )}
        {activeTab === 2 && <FamilyPoolDepositNetwork />}
        {activeTab === 3 && <FamilyPoolQr />}
        <div className="border-t border-[#404142] absolute bottom-0 w-full py-5 flex justify-center">
          <ProgressDots data={data} activeTab={activeTab} />
        </div>
      </div>
    </div>
  );
};

export default CreatePoolForm;
