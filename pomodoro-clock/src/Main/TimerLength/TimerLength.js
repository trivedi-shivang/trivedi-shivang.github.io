import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
export default function TimerLength({ type, length, setTypeLength }) {
  return (
    <div className={`${type}-container`}>
      <h3 id={`${type}-label`}>{type.toUpperCase()} Length</h3>
      <div className={`${type}-length-container`}>
        <FontAwesomeIcon
          id={`${type}-increment`}
          icon={faChevronUp}
          onClick={() => setTypeLength("increment")}
        />
        <div id={`${type}-length`}>{length}</div>
        <FontAwesomeIcon
          id={`${type}-decrement`}
          icon={faChevronDown}
          onClick={() => setTypeLength("decrement")}
        />
      </div>
    </div>
  );
}
