import { useState } from "react";
import { Flex, DatePicker, Row, Col } from "antd";
import dayjs from "dayjs";

const { RangePicker } = DatePicker;

const timeRanges = [
  "0 AM -> 1AM",
  "1 AM -> 2 AM",
  "2 AM -> 3 AM",
  "3 AM -> 4 AM",
  "4 AM -> 5 AM",
  "5 AM -> 6AM",
  "6 AM -> 7 AM",
  "7 AM -> 8 AM",
  "8 AM -> 9 AM",
  "9 AM -> 10 AM",
  "10 AM -> 11 AM",
  "11 AM -> 12 AM",
  "12 AM -> 1 PM",
  "1 PM -> 2 PM",
  "2 PM -> 3 PM",
  "3 PM -> 4 PM",
  "4 PM -> 5 PM",
  "5 PM -> 6 PM",
  "6 PM -> 7 PM",
  "7 PM -> 8 PM",
  "8 PM -> 9 PM",
  "9 PM -> 10 PM",
  "10 PM -> 11 PM",
  "11 PM -> 0 AM",
];

const datesRange = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thrusday",
  "Friday",
  "Saturday",
  "Sunday",
];

const App = () => {
  const [range, setRange] = useState([dayjs(), dayjs()]);

  const disabledDate = (current, { from }) => {
    if (from) {
      return Math.abs(current.diff(from, "days")) >= 7;
    }

    return false;
  };

  return (
    <Col>
      <Row>
        <RangePicker
          value={range}
          onChange={(dates) => {
            setRange(dates);
          }}
          disabledDate={disabledDate}
        />
      </Row>

      <Row span={24} style={{ backgroundColor: "red", marginTop: "20px" }}>
        <Col
          span={3}
          style={{ backgroundColor: "blue", minHeight: "50px" }}
        ></Col>
        {datesRange.map((date) => (
          <Col span={3}>
            <Flex justify="center" align="center" style={{ height: "100%" }}>
              {date}
            </Flex>
          </Col>
        ))}
      </Row>
      {timeRanges.map((time_range) => (
        <Row span={24} style={{ backgroundColor: "yellow" }}>
          <Col
            span={3}
            style={{
              backgroundColor: "blue",
              minHeight: "50px",
              border: "2px solid black",
            }}
          >
            <Flex justify="center" align="center" style={{ height: "100%" }}>
              {time_range}
            </Flex>
          </Col>
          <Col span={3}>
            <Flex justify="center" align="center" style={{ height: "100%" }}>
              1
            </Flex>
          </Col>
          <Col span={3}>
            <Flex justify="center" align="center" style={{ height: "100%" }}>
              2
            </Flex>
          </Col>
          <Col span={3}>
            <Flex justify="center" align="center" style={{ height: "100%" }}>
              3
            </Flex>
          </Col>
          <Col span={3}>
            <Flex justify="center" align="center" style={{ height: "100%" }}>
              4
            </Flex>
          </Col>
          <Col span={3}>
            <Flex justify="center" align="center" style={{ height: "100%" }}>
              5
            </Flex>
          </Col>
          <Col span={3}>
            <Flex justify="center" align="center" style={{ height: "100%" }}>
              6
            </Flex>
          </Col>
          <Col span={3}>
            <Flex justify="center" align="center" style={{ height: "100%" }}>
              7
            </Flex>
          </Col>
        </Row>
      ))}
    </Col>
  );
};

export default App;
