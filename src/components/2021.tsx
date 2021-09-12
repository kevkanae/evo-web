const TwentyOne = () => {
  return (
    <>
      <div className="root21">
        <div className="root21__card">
          <header className="root21__card__head">
            <p className="root21__card__head__title">
              On which year was flash discontinued?
            </p>
          </header>
          <div className="root21__card__body">
            {[2019, 2017, 2020, 2012].map((x, i) => (
              <div className="root21__card__body__options" key={i}>
                <p>{x}</p>
              </div>
            ))}
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
