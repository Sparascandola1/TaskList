import Header from './components/Header'
import Tasks from './components/Tasks';

/**
 * This is the function style and no import is required
 */
const App = () => {

  // this is a string variable that we can pass into the view through the header
  const name = "Sal"

  // REMINDER: you can only return one element from the function
  return (

    // this will return the header component that we designed
    <div className="container ">
      <Header />
    </div>
  )
}

/**
 * This is a class that renders a view. Above is the function style which would do the same thing.
 * REMINDER: You need to import React from "react" in order to user this style. 
 */
// class App extends React.Component{
//   render(){
//     return <h1>Hello From a Class!</h1>
//   }
// }

export default App;
