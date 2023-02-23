/* eslint-disable eqeqeq */
import { StyledTaskBarSummary, StyledTaskBarWrapper } from "./task.style";

type Reading = {
  color: string;
  value: number;
  name?: string;
  total: number;
};

type Props = {
  readings: Reading[];
};

const TaskBar = ({ readings }: Props) => {
  let values =
    readings &&
    readings.length &&
    readings.map(function (item, i) {
      if (item.value > 0) {
        return (
          <div
            className="value"
            style={{
              color: item.color,
              width: (item.value / item.total) * 100 + "%",
            }}
            key={i}
          >
            <span>{item.value}%</span>
          </div>
        );
      }

      return "";
    }, this);

  const renderValues = () => {
    return (values =
      readings &&
      readings.length &&
      readings.map(function (item, i) {
        if (item.value > 0) {
          return (
            <div
              className="value"
              style={{
                color: item.color,
                width: (item.value / item.total) * 100 + "%",
              }}
              key={i}
            >
              <StyledTaskBarSummary
                color={item.color}
                style={{
                  opacity: i === readings.length - 1 ? "0" : "1",
                  margin: "0 -14px 0 0 ",
                }}
              >
                <span>{item.value} Tasks</span> {item.name}
              </StyledTaskBarSummary>
            </div>
          );
        }

        return "";
      }, this));
  };

  const renderCalibrations = () => {
    return (
      readings &&
      readings.length &&
      readings.map(function (item, i) {
        if (item.value > 0) {
          return (
            <div
              className="graduation"
              style={{
                opacity: i === readings.length - 1 ? "0" : "1",
                color: item.color,
                width: (item.value / item.total) * 100 + "%",
              }}
              key={i}
            >
              <span>|</span>
            </div>
          );
        }

        return "";
      }, this)
    );
  };

  const renderBars = () => {
    return (
      readings &&
      readings.length &&
      readings.map(function (item, i) {
        if (item.value > 0) {
          return (
            <div
              className="bar"
              style={{
                backgroundColor: item.color,
                width: (item.value / item.total) * 100 + "%",
              }}
              key={i}
            ></div>
          );
        }

        return "";
      }, this)
    );
  };

  const renderLegends = () => {
    return (
      readings &&
      readings.length &&
      readings.map(function (item, i) {
        if (item.value > 0) {
          return (
            <div className="legend" key={i}>
              <span className="dot" style={{ color: item.color }}>
                ●
              </span>
              <span className="label">{item.name}</span>
            </div>
          );
        }
      }, this)
    );
  };

  return (
    <StyledTaskBarWrapper>
      <div className="multicolor-bar">
        <div className="values">{renderValues()}</div>
        <div className="scale">{renderCalibrations()}</div>
        <div className="bars">{renderBars()}</div>
        {/* <div className="legends">{renderLegends()}</div> */}
      </div>
    </StyledTaskBarWrapper>
  );
};

export default TaskBar;
