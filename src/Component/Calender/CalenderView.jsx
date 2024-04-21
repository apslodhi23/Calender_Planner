import Calender from "./Calender.jsx";
import Filter from "./Filter.jsx";
import { useEffect, useState } from "react";
import "../../App.css";
import CALENDER_CONSTANT from "./Calender.constants.jsx";
import LandingPage from "../LandingPage.jsx";

const CalenderView = () => {
  const [date, setDate] = useState({
    month: 0,
    year: 2024,
  });

  const [view, setView] = useState(false);

  const changeDate = (value, label) => {
    let tempDate = {};
    if (label === CALENDER_CONSTANT.FILTER_TYPE.YEAR) {
      tempDate = {
        ...date,
        year: value,
      };
    } else {
      tempDate = {
        ...date,
        month: value,
      };
    }
    setDate(tempDate);
  };
  useEffect(() => {
    const date = new Date();
    const month = date.getMonth();
    const year = date.getFullYear();
    setDate({
      month,
      year,
    });
  }, []);

  const handleView = (value) => {
    setView(value);
  };

  return (
    <>
      {view ? (
        <div className="container">
          <div className="filter">
            <Filter date={date} changeDate={changeDate} />
          </div>
          <Calender date={date} handleView={handleView} />
        </div>
      ) : (
        <LandingPage handleView={handleView} />
      )}
    </>
  );
};
export default CalenderView;
