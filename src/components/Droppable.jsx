import { useDroppable } from "@dnd-kit/core";
import { Flex, Col } from "antd";

export const Droppable = (props) => {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });
  const style = {
    borderLeft: "1px solid black",
    borderBottom: "1px solid black",
    borderRight: props.id.includes("Sunday") ? "1px solid black" : null,
  };

  return (
    <Col span={3} ref={setNodeRef} style={style}>
      <Flex justify="center" align="center" style={{ height: "100%" }}>
        {props.children}
      </Flex>
    </Col>
  );
};
