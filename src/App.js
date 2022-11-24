import { useState, useEffect } from "react"
import "./App.css"
import Child1 from "./component/Child1"

const App = () => {
  const [count, setCount] = useState(0)
  const [showChildComponent, setShowChildComponent] = useState(true)

	useEffect(() => {
		console.log('Parent: Component has mounted')
	}, [])

	useEffect(() => {
		console.log('Parent: Component has updated')
	}, [count, showChildComponent])

  return (
    <>
      <h1>App</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {showChildComponent && <Child1 />}
      <br />
      <button onClick={() => setShowChildComponent(!showChildComponent)}>
        Show/Hide
      </button>
    </>
  );
};

export default App;

/*
	render: Evaluation of JSX, updation of DOM with relevant HTML
	Component Lifecycle:
	3 phases:
	1. Mounting (Birth)
	2. Updating (Life events)
	3. Unmounting (Death)
	Component Lifecycle Methods:
	1. Mounting -> componentDidMount 
	Eg: API calls, initial values
	2. Updating -> componentDidUpdate
	Eg: track state changes, track props changes
	3. Unmounting -> componentWillUnmount
	Eg: Reset fields, data, etc
	useEffect hook: 
	- Replicate component life cycle methods in Functional components
	- Two arguments: Callback, Dependency array
	useEffect as
	1. componentDidMount 
		- useEffect dependency array is empty
	2. componentDidUpdate
		- Pass the states/props to track in the dependency array
	3. componentWillUnmount
		- Return a callback
*/


// practice
/*import Show from './component/Show';
import './App.css';

function App() {
  return (
    <div className="App">
     <Show/>

    </div>
  );
}

export default App;*/



