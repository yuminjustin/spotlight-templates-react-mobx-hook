import React from "react";
import { DatePicker } from "antd";
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

function onChange(date, dateString) {
  console.log(date, dateString);
}

const Test = () => {
  return (
    <div>
      <DatePicker onChange={onChange} />
      <br />
      <br />
      <MonthPicker onChange={onChange} placeholder="Select month" />
      <br />
      <br />
      <RangePicker onChange={onChange} />
      <br />
      <br />
      <WeekPicker onChange={onChange} placeholder="Select week" />
    </div>
  );
};

export default Test;
