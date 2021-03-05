import PropTypes from "prop-types";
import Button from "./Button";

/**
 * This is an arrow function that supports the creation of the header on the webpage
 *
 * @param {string} title
 */
const Header = ({ title }) => {
  const onClick = () => {
    console.log('click');
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Add" onClick={onClick} />
    </header>
  );
};

/**
 * Defines the default props that will be used for styling
 */
Header.defaultProps = {
  title: "Task Tracker",
};

/**
 * Defines the prop types and other quick functions like isRequired
 */
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

/**
 * this is an example of inline styling for the html page using CSS
 */
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header;
