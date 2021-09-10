import Body from "../assets/body.png";

const TwentyOne = () => {
  return (
    <>
      <div className="root21">
        <div className="root21__card">
          <header className="root21__card__head">
            <p className="root21__card__head__title">sugoi</p>
            <p className="root21__card__head__menu">☰</p>
          </header>
          <div className="root21__card__body">
            {/* <img className="root21__card__body__img" src={Body} alt="Body" /> */}
          </div>
          <div className="root21__card__foot">
            <p>Copyright@{new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default TwentyOne;
