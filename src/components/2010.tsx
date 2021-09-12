import A from "../assets/msa.png";
import B from "../assets/msb.png";

const Ten = () => {
  return (
    <>
      <div className="root10">
        <div className="root10__head">
          <h2>Microsoft in 2010</h2>
        </div>
        <div className="root10__body">
          <div className="root10__body__nav">
            {[
              "Windows",
              "Office",
              "All Products",
              "Buy Now",
              "Trials",
              "Solutions",
              "Help",
              "About Microsoft",
            ].map((x, i) => (
              <div className="root10__body__nav__item" key={i}>
                {x}
              </div>
            ))}
          </div>
          <div className="root10__body__content">
            <img className="root10__body__content__a" src={A} alt="a" />
            <img className="root10__body__content__b" src={B} alt="a" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Ten;
