import React, {useState, useEffect} from "react";
import axios from "axios";
import './App.css';
import Table from "./Table";

const App = () => {

  const [ data, setData ] = useState([]);
  const [ headings, setHeadings ] = useState([]);

  const getHeadingsTable = (data) => Object.keys(data[0]);

  const getData = async () => {
    const response = await axios.get('https://www.nbrb.by/api/exrates/rates?periodicity=0');
    setData(response.data);
    setHeadings(getHeadingsTable(response.data));
  };

  useEffect(() => {
    getData()
  }, []);

  return (
    <div className="App">
      <Table dataUrl={{ data, headings }}/>
    </div>
  );
};

export default App;

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { data: [], headings: [] }
//   }
//
//   componentDidMount() {
//     this.getData();
//   }
//
//   getHeadingsTable = (data) => Object.keys(data[0]);
//
//
//   getData = async () => {
//     const response = await axios.get('https://www.nbrb.by/api/exrates/rates?periodicity=0');
//     const headings = this.getHeadingsTable(response.data);
//     this.setState({ data: response.data, headings: headings });
//   };
//
//   render() {
//     return (
//       <div className="App">
//         <Table dataUrl={this.state}/>
//       </div>
//     )
//   }
// };
