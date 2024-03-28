import { useState } from "react";
import { Card, Flex, DatePicker, Row, Col } from "antd";
import dayjs from "dayjs";
import { DndContext } from "@dnd-kit/core";
import { Droppable } from "./components/Droppable";
import { Draggable } from "./components/Draggable";

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

const App = () => {
  const [range, setRange] = useState([dayjs(), dayjs()]);
  const [parent, setParent] = useState(`0 AM -> 1AM-Thursday-28`);
  const appRange = 7;
  const appRangeIteration = Array.from(
    { length: appRange },
    (_, index) => index + 1
  );
  console.log("parent", parent);

  const disabledDate = (current, { from }) => {
    if (from) {
      return Math.abs(current.diff(from, "days")) >= appRange;
    }

    return false;
  };

  const handleDragEnd = (event) => {
    const { over } = event;
    setParent(over ? over.id : null);
  };

  const draggableMarkup = ({ date, time }) => (
    <Draggable id="draggable">
      <Card
        title={date}
        size="small"
        hoverable={true}
        style={{ borderRadius: "0px" }}
      >
        {time}
      </Card>
    </Draggable>
  );

  return (
    <DndContext onDragEnd={handleDragEnd}>
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

        <Row span={24} style={{ marginTop: "20px" }}>
          <Col
            span={3}
            style={{
              minHeight: "50px",
              borderTop: "1px solid black",
              borderBottom: "1px solid black",
            }}
          ></Col>
          {appRangeIteration.map((_, i) => {
            const nameOfDay = dayjs(dayjs(range[0]).add(i, "day")).format(
              "dddd"
            );
            const dayOfMonth = dayjs(dayjs(range[0]).add(i, "day")).format("D");

            return (
              <Col
                span={3}
                style={{
                  borderTop: "1px solid black",
                  borderLeft: "1px solid black",
                  borderBottom: "1px solid black",
                }}
              >
                <Flex
                  justify="center"
                  align="center"
                  style={{
                    height: "100%",
                  }}
                >
                  {nameOfDay} - {dayOfMonth}
                </Flex>
              </Col>
            );
          })}
        </Row>
        {timeRanges.map((time_range) => (
          <Row span={24}>
            <Col
              span={3}
              style={{
                minHeight: "50px",
                borderBottom: "1px solid black",
              }}
            >
              <Flex justify="center" align="center" style={{ height: "100%" }}>
                {time_range}
              </Flex>
            </Col>
            {appRangeIteration.map((i) => {
              const nameOfDay = dayjs(dayjs(range[0]).add(i - 1, "day")).format(
                "dddd"
              );
              const dayOfMonth = dayjs(
                dayjs(range[0]).add(i - 1, "day")
              ).format("D");
              const key = `${time_range}-${nameOfDay}-${dayOfMonth}`;

              return (
                <Droppable key={key} id={key}>
                  {parent === key
                    ? draggableMarkup({ date: nameOfDay, time: time_range })
                    : null}
                </Droppable>
              );
            })}
          </Row>
        ))}
      </Col>
    </DndContext>
  );
};

export default App;
