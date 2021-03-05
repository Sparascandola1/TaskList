import PropTypes from 'prop-types' 
 
/**
 * This is an arrow function that supports the creation of the button component
 * we pass two props for the color of the button and the text that is on the button
 * 
 * @param {string} color
 * @param {string} text
 *  
 */
 const Button = ({ color, text, onClick }) => {

    /**
     * This is what gets sent to the view that renders the button
     */
    return (
        <button 
        onClick={onClick}
        style={{ backgroundColor: color }} 
        className='btn'
        >
            {text}
        </button>
     )
 }

 /**
  * This is the props that we can make default (anything can be added to this)
  */
 Button.defaultProps = {
     color: 'steelblue'
 }

 /**
  * This is how we assign types to the props that we are using, we can also make these required and several other 
  * things.
  */
 Button.propTypes = {
     text: PropTypes.string,
     color: PropTypes.string,
     onClick: PropTypes.func
 }

 
 export default Button
 