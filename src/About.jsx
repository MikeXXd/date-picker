import img from "./images/linkedin_icon.png";

export function About({ weekStartsOnSunday, setWeekStartsOnSunday }) {
  return (
    <div className="about date-picker">
      <h1 className="about-header">
        <span>easy peasy</span>Date picker
      </h1>
      <h2>About:</h2>
      <p>
        The date button above opens &#47; closes the date picker. At start it
        shows today date. Then it will change for picked date.
      </p>
      <div className="setting">
        <h2>Setting:</h2>{" "}
        <ul>
          <li>
            <span>
              the week will start with{" "}
              {weekStartsOnSunday ? "Sunday" : "Monday"}
            </span>
            <button
              onClick={() => setWeekStartsOnSunday((current) => !current)}
              className="toggle-week-start-button"
            >
              Switch for {weekStartsOnSunday ? "Monday" : "Sunday"}
            </button>
          </li>
        </ul>
      </div>

      <h2>Navigation:</h2>
      <ul>
        <li>
          Navigate forward and backward through the months by arrow buttons or
          by <kbd>&larr;</kbd> &#47; <kbd>&rarr;</kbd>
          keys.
        </li>
        <li>
          Navigate forward and backward through the years by <kbd>control</kbd>{" "}
          &#43; <kbd>&larr;</kbd> &#47; <kbd>&rarr;</kbd>.
        </li>
        <li>
          Press <kbd>esc</kbd> for restart &#47; return to today date.
        </li>
      </ul>
      <footer>
        created by{" "}
        <a href="http://www.mikexd.cz/">
          <em>MikeXd.cz</em>
        </a>{" "}
        <a href="https://www.linkedin.com/in/michal-vili%C5%A1-483196251/">
          <img src={img} alt="linkedin icon" />
        </a>
      </footer>
    </div>
  );
}
