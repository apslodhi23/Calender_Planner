import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import CALENDER_CONSTANT from "./Calender.constants";
import { useEffect } from "react";
const Filter = ({ date, changeDate }) => {
  const months = Array.from(
    { length: CALENDER_CONSTANT.TOTAL_MONTHS },
    (_, i) => i
  );
  const years = Array.from(
    { length: CALENDER_CONSTANT.TOTAL_YEARS },
    (_, i) => i + 2019
  );

  const handleChange = (event, label) => {
    changeDate(event.target.value, label);
  };

  return (
    <>
      <div className="month-year box">
        <FormControl>
          <InputLabel id="month">Month</InputLabel>
          <Select
            labelId="month"
            id="year-select"
            value={date?.month === null ? "" : date.month}
            label="month"
            onChange={(event) =>
              handleChange(event, CALENDER_CONSTANT.FILTER_TYPE.MONTH)
            }
          >
            {months?.map((month) => {
              return (
                <MenuItem value={month} key={month}>
                  {CALENDER_CONSTANT.MONTHS[month]}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel id="year">Year</InputLabel>
          <Select
            labelId="year"
            id="year-select"
            value={date?.year ? date.year : ""}
            label="year"
            onChange={(event) =>
              handleChange(event, CALENDER_CONSTANT.FILTER_TYPE.YEAR)
            }
          >
            {years?.map((year) => {
              return (
                <MenuItem value={year} key={year}>
                  {year}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </div>
    </>
  );
};
export default Filter;
