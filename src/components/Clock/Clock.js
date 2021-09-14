import React from "react";
import useClock from "../../hooks/useClock";

function Clock() {
  const { timeString } = useClock();

  return <div style={{ fontSize: "42px" }}>{timeString}</div>;
}

export default Clock;
