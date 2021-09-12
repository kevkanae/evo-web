import { useState } from "react";

const ZeroThree = () => {
  const [selectedTabIndex, setTabIndex] = useState(0);

  const handleTab = (i: number) => {
    setTabIndex(i);
  };
  return (
    <>
      <div className="root03">
        <div className="root03__head">
          <h2>Google in 2003</h2>
        </div>
        <div className="root03__body">
          <div className="root03__body__title">
            {[
              { key: "G", color: "#1848B8" },
              { key: "o", color: "#E24E38" },
              { key: "o", color: "#C49E02" },
              { key: "g", color: "#1848B8" },
              { key: "l", color: "#54C855" },
              { key: "e", color: "#E24E38" },
            ].map((x, i) => (
              <h2
                style={{
                  color: x.color,
                }}
                key={i}
              >
                {x.key}
              </h2>
            ))}
          </div>
          <div className="root03__body__nav">
            {["Web", "Images", "Groups", "Directory", "News"].map((x, i) => (
              <div
                onClick={() => handleTab(i)}
                className={
                  selectedTabIndex === i
                    ? "root03__body__nav__active"
                    : "root03__body__nav__item"
                }
                key={i}
              >
                {x}
              </div>
            ))}
          </div>
          <div className="root03__body__content">
            <div className="root03__body__content__left">
              <input type="text" name="" id="" />
              <div>
                <button>Google Search</button>
                <button>Im Feeling Lucky</button>
              </div>
            </div>
            <div className="root03__body__content__right">
              <ul>
                <li>
                  <a href="">Advanced Search</a>
                </li>
                <li>
                  <a href="">Preferences</a>
                </li>
                <li>
                  <a href="">Language Tools</a>
                </li>
              </ul>
            </div>
          </div>
          <h1>
            <span style={{ color: "red" }}>New! </span>
            Great Research. Small Fee. <a href="">Google Answers</a>
          </h1>
          <p>
            <a href="">Advertise with us - </a>
            <a href="">Search solutions - </a>
            <a href="">Services and Tools - </a>
            <a href="">Jobs, Press and Help</a>
          </p>
        </div>
      </div>
    </>
  );
};
export default ZeroThree;
