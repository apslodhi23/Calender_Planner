import Calender from "./Calender.jsx";
import Filter from "./Filter.jsx";
import { useEffect, useState } from "react";
import "../../App.css";
import CALENDER_CONSTANT from "./Calender.constants.jsx";

const CalenderView = () => {
  const [date, setDate] = useState({
    month: 0,
    year: 2024,
  });

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

  return (
    <>
      <div className="container">
        <div className="filter">
          <Filter date={date} changeDate={changeDate} />
        </div>
        <Calender date={date} />
      </div>
    </>
  );
};
export default CalenderView;
