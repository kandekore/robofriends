import React, { useState, useEffect } from "react";
import Cardlist from "./Cardlist";
import { robots } from "./robots";
import Searchbox from "./Searchbox";
import "./App.css";
import Scroll from "./Scroll";
import ErrorBoundary from "./ErrorBoundary";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       robots: [],
//       searchfield: ""
//     };
//   }

function App() {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState("");
  const [count, setCount] = useState(0);

  //   componentDidMount() {
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((response) => response.json())
  //       .then((users) => this.setState({ robots: users }));
  //   }
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setRobots(users));
    console.log(count);
  }, [count]);
  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });
  console.log("search field" + searchfield);
  return !robots.length ? (
    <h1>loading</h1>
  ) : (
    <div className="tc">
      <h1>RoboFreinds</h1>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      <Searchbox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundary>
          <Cardlist robots={filteredRobots} />
        </ErrorBoundary>
      </Scroll>
    </div>
  );
}
export default App;
