import "./Calender.css";

const Calender = () => {
  const arrDay = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const dateList = Array.from({ length: 35 }, (_, i) => i + 1);

  const today = new Date().getDate();

  return (
    <>
      <div className="container">
        <div className="month-year box">
          <button className="month-button">APR</button>
          <button className="year-button">2024</button>
        </div>

        <div className="calender">
          {arrDay.map((day, index) => (
            <div key={index} className="day">
              {day}
            </div>
          ))}

          {dateList.map((date, index) => (
            <div
              key={index}
              className={`date ${date === today ? "today" : ""}`}
            >
              {date}
            </div>
          ))}
        </div>

        <div className="holidays box"></div>
      </div>
    </>
  );
};
export default Calender;
