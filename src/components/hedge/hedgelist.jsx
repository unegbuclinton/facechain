import PredictionFilter from "../predictions/predictionfilter/filter";
import RidersCard from "../riders/riders-card";

import CreateHedgeButton from "./createhedgebutton";

/*import mockdata */
import riderData from "../../mockdata/riders";

const HedgeRiders = () => {
  return (
    <div>
      <PredictionFilter />
      <CreateHedgeButton />
      {riderData && <RidersCard data={riderData} type="Hedge" />}
    </div>
  );
};

export default HedgeRiders;
