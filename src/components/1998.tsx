import AZ from "../assets/az.png";

const NinetyEight = () => {
  return (
    <>
      <div className="root98">
        <div className="root98__head">
          <img src={AZ} alt="" />
          <h1>
            Welcome to Amazon.com <br /> Books!
            <br />
            <br />
            <a href="">One Billion Titles!</a> <br />
            <a href="">Consistently Low Prices!</a>
          </h1>
        </div>
        <div className="root98__body">
          <p>
            (If you explore just one thing, make it our personal notification
            service. We think its very cool)
          </p>
          <div className="root98__body__text">
            <div>
              <h2>
                <a href="">Spotlight -- August 16th</a>
              </h2>
              <p>
                These are books we love, offered at Amazon.com low prices. The
                spotlight moves <strong>EVERY</strong> day, so please visit
                often.
              </p>
            </div>
            <div>
              <h2>
                <a href="">One Million Titles</a>
              </h2>
              <p>
                Search Amazon.com's <a href="">million title catalog</a> by
                author, subject, title, keyword, and more... Or take a look at
                the <a href="">books we recommend</a> in over 20 categories...
                Check out our <a href="">customer reviews</a> and the{" "}
                <a href="">
                  award winners from Hugo and Nebula to the Pulitzer and
                  Nobel... and <a href="">bestsellers</a> are 30% off the
                  publishers list...
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NinetyEight;
