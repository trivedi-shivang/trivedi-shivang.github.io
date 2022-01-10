import { useState } from "react";
import TimerLength from "./TimerLength/TimerLength";

export default function Main() {
  let [sessionLength, setSessionLength] = useState(25);
  let [breakLength, setBreakLength] = useState(5);

  function changeTypeLength(incOrDec, type) {
    let length = type === "session" ? sessionLength : breakLength;
    let updateFn = type === "session" ? setSessionLength : setBreakLength;
    length = incOrDec === "increment" ? length + 1 : length - 1;
    if (length > 59 || length < 0) return;
    updateFn(length);
  }

  return (
    <main>
      <TimerLength
        type="session"
        length={sessionLength}
        setTypeLength={(incOrDec) => changeTypeLength(incOrDec, "session")}
      />
      <TimerLength
        type="break"
        length={breakLength}
        setTypeLength={(incOrDec) => changeTypeLength(incOrDec, "break")}
      />
    </main>
  );
}
