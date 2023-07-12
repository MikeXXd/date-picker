export function About() {
  return (
    <div className="about date-picker">
      <h1 className="about-header">Date picker</h1>
      <p>
      The date button above opens &#47; closes the date picker. At start it shows today date. Then it will change for picked date.
      </p>
      <h3>navigation:</h3>
      <ul>
        <li>
          navigate forward and backward through the months by arrow buttons or by <kbd>&larr;</kbd> &#47; <kbd>&rarr;</kbd>
           keys.
        </li>
        <li>navigate forvard and backward through the years by <kbd>control</kbd> &#43; <kbd>&larr;</kbd> &#47; <kbd>&rarr;</kbd></li>
        <li>press <kbd>esc</kbd> for return to today date</li>
      </ul>
      <footer>created by <a href="http://www.mikexd.cz/"><em>MikeXd.cz</em></a></footer>
    </div>
  );
}
