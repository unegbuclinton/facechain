/* import react dependencies */
import { useState } from 'react';

/* import components */
import FilterToggle from '../../common/filters/filtertoggle';
import PredictionFilter from '../../predictions/predictionfilter/filter';
import RiderCard from '../riders-card';

/*import mockdata */
import riderData from '../../../mockdata/riders';

const IndividualRiders = () => {
  const [toggle, setToggle] = useState('All');
  const handleToggle = (category) => setToggle(category);

  // create filter categories array
  const categories = ['All', 'Active', 'Finished'];
  return (
    <>
      <PredictionFilter />
      <FilterToggle
        setToggle={handleToggle}
        active={toggle}
        categories={categories}
      />
      <>{riderData && <RiderCard data={riderData} type="Copytrade" />}</>
    </>
  );
};

export default IndividualRiders;
