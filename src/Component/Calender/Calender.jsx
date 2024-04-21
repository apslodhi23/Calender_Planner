import CALENDER_CONSTANT from "./Calender.constants";
import "./Calender.css";

const Calender = ({ date, handleView }) => {
  const dayList = Array.from({ length: 7 }, (_, i) => i);
  let monthLength = CALENDER_CONSTANT.DAYS_IN_MONTHS[date.month];
  if (date.month === 1) {
    if (
      (date.year % 4 === 0 && date.year % 100 !== 0) ||
      date.year % 400 === 0
    ) {
      monthLength = 29;
    }
  }
  const firstDay = new Date(date.year, date.month, 1).getDay();
  const totalDays =
    firstDay >= 5 && CALENDER_CONSTANT.EXTRA_DAYS.includes(date?.month)
      ? 42
      : 35;
  const dateList = Array.from(
    { length: totalDays },
    (_, i) => i + -firstDay + 1
  );

  const today = {
    date: new Date().getDate(),
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  };

  return (
    <>
      <div className="calender">
        {dayList.map((day, index) => (
          <div key={index} className="day">
            {CALENDER_CONSTANT.DAYS[day]}
          </div>
        ))}

        {dateList.map((item, index) => (
          <div
            key={index}
            className={`date ${
              item === today?.date &&
              date?.month === today?.month &&
              date?.year === today?.year
                ? "today"
                : ""
            }`}
          >
            {item > 0 && item <= monthLength ? item : ""}
          </div>
        ))}
      </div>
      <div className="holidays box">
        <button onClick={() => handleView(false)}>Home</button>
      </div>
    </>
  );
};
export default Calender;
