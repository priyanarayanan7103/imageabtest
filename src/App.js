import logo from './logo.svg';
import './App.css';
import * as React from 'react';  
import {useState} from 'react';
import ReactDOM from "react-dom/client";
import Stack from '@mui/material/Stack';  
import Button from '@mui/material/Button';  
import Divider from '@mui/material/Divider';
import { Component } from 'react';
import { Column, Row } from 'simple-flexbox';
import {Helmet} from 'react-helmet';
//import ReactToPrint, { PrintContextConsumer } from "react-to-print";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /><img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

//export default App;
function BasicButtons() {  
  return (  
    <Stack spacing={2} direction="row">  
   <Button variant="text">Text</Button>  
      <Button variant="contained">Contained</Button>  
      <Button variant="outlined">Outlined</Button>  
    </Stack>  
  );  
}  

/*
function favColor() {
  const [imagesnumbers_list,setImages1]=useState([<img src="https://gutteringrepairs.com/images/number_one.jpg"  width={250} height={250} alt="React Image" />,
  <img src= "https://i.ebayimg.com/images/g/rVkAAOSw1O9gKFd-/s-l640.jpg" width={250} height={250} alt="React Image" />,
  <img src="https://st2.depositphotos.com/5389310/9481/i/450/depositphotos_94814374-stock-photo-3d-plastic-blue-number-3.jpg"  width={250} height={250} alt="React Image" />]);
  const [imagesletters_list, setImagesA] = useState([<img src="https://clipartmag.com/images/image-of-the-letter-a-1.jpg"  width={250} height={250} alt="React Image" />,
  <img src="https://th.bing.com/th/id/OIP.6z64QR4rPzqpFclpcL14ZwHaHa?pid=ImgDet&rs=1"  width={250} height={250} alt="React Image" />,
  <img src="https://st2.depositphotos.com/5389310/9481/i/450/depositphotos_94813678-stock-photo-3d-plastic-blue-letter-c.jpg"  width={250} height={250} alt="React Image" />]);
  return (<h1>{imagesnumbers_list}!</h1>);
}


const ComponentToPrint = forwardRef((props, ref) => {
  return <div ref={ref}>hello world</div>;
});
const ref = useRef();*/


class App2 extends React.Component {  
    constructor(props) {  
        super(props);  
        this.state = {  
            personName : "priya",
            buttonActive: true,  
            numberOfImages: 10,
            startEnd: 10,
            currentIdx : 0,
            image1Label: "Real",
            image2Label: "Real",  
            names : ["sunil", "rottoo"],
            numsImageList : ["https://gutteringrepairs.com/images/number_one.jpg", "https://i.ebayimg.com/images/g/rVkAAOSw1O9gKFd-/s-l640.jpg", "https://st2.depositphotos.com/5389310/9481/i/450/depositphotos_94814374-stock-photo-3d-plastic-blue-number-3.jpg",
            "https://valleycomfortheatingandair.com/wp-content/uploads/2018/08/4-Types-of-Commercial-Air-Conditioning-Systems-Valley-Comfort-Heating-and-Air-CA-300x300.png", "https://appliquedesignz.com/image/cache/data/Number_5_Applique_Design_530_0-800x800.jpg"],
            lettersImageList: ["https://clipartmag.com/images/image-of-the-letter-a-1.jpg", "https://t3.ftcdn.net/jpg/01/37/43/14/240_F_137431495_XLcEY3GXa2ky7RVlTAWfoXFSTuDZMf8k.jpg",
          "https://i5.walmartimages.com/asr/abe90d3f-54d2-45bb-b889-bfe69c0ba5f5_1.74882f5eb85fddf749403c205bd181d5.jpeg", "https://th.bing.com/th/id/OIP.BkEfhyxRipi_m5AtcVMZIQHaHa?pid=ImgDet&rs=1", "https://t4.ftcdn.net/jpg/01/37/43/15/240_F_137431519_NqAPuFbpeHL3wLpUTHAQTj5pHcqg0Q3D.jpg"]
        }; 
        
        this.handlePersonInputChange = this.handlePersonInputChange.bind(this);  
        this.handleImagesInputChange = this.handleImagesInputChange.bind(this);  
        this.handleStartEndInputChange = this.handleStartEndInputChange.bind(this);  
        this.handleRealClick1 = this.handleRealClick1.bind(this);
        this.handleRealClick2 = this.handleRealClick2.bind(this);
        this.toggle1 = this.toggle1.bind(this);
        this.toggle2 = this.toggle2.bind(this);      
   
   }

   handleRealClick1()
   {
    alert("Image 1 was clicked as real");
    this.setState({"buttonActive" : false});
   }

   handleRealClick2()
   {
    alert("Image 2 was clicked as real");
    this.setState({"buttonActive" : false});
   }

   toggle1() {
   this.setState({"image1Label" : "Real"});
   this.setState({"image2Label" : "Generated"});
   this.setState({"currentIdx": this.state.currentIdx + 1});
    };

    toggle2() {
     this.setState({"currentIdx": this.state.currentIdx + 1});
     this.setState({"buttonActive" : true});
      };

      next(){
        this.setState({"currentIdx": this.state.currentIdx + 1});
      }

      generateReport(){

      };
  
   handlePersonInputChange(event) { 
       const target = event.target;  
       const value = target.type === 'checkbox' ? target.checked : target.value;  
       const name = target.name;  
       console.log("Handled input change", value); 
       this.setState({  
          "personName": value  
       });
       console.log(this.name);  
  }  
  handleImagesInputChange(event) { 
    const target = event.target;  
    const value = target.type === 'checkbox' ? target.checked : target.value;  
    const name = target.name;  
    console.log("Handled input change", value); 
    this.setState({  
       "numberOfImages": value  
    });
    console.log(this.name);  
} 
handleStartEndInputChange(event) { 
  const target = event.target;  
  const value = target.type === 'checkbox' ? target.checked : target.value;  
  const name = target.name;  
  console.log("Handled input change", value); 
  this.setState({  
     "startEnd": value  
  });
  console.log(this.name);  
} 

 // navigate = useNavigate();
  //redirectToPythonPage = () => {
    //Redirect to the python page
   // navigate("/python");
 // };
  //redirectToHome = () => {
    //Redirect to the home page
    //navigate("/");
  //};
  /*let bgColors = { "Default": "#81b71a",
                    "Blue": "#00B1E1",
                    "Cyan": "#37BC9B",
                    "Green": "#8CC152",
                    "Red": "#E9573F",
                    "Yellow": "#F6BB42",
};*/
  render() {  
      return (  
          <form>  
             <Helmet>
                <style>{'body { background-color: lightblue; alignItems: "center"}'}</style>
            </Helmet>
              <h1>
                Can You Tell The Real Image From The Generated Image  ? {this.state.names[1]}
                </h1>  
              <label>  
                  Name:    
                  <input  
                    name="personName"  
                    type="text"  
                    checked={this.state.personGoing}  
                    onChange={this.handlePersonInputChange} />  
             </label>  
             <br /> 
             <label>  
                 Number of Images:  
                 <input  
                 name="startEnd"  
                 type="number"  
                 value={this.state.numberOfImages}  
                 onChange={this.handleStartEndInputChange} />  
             </label>  
              <br />
        <Divider />
        <Column flexGrow={1}>
        <Row vertical='center'>
          <Column flexGrow={1} horizontal='center'>
            <h3> Image 1 </h3>
            <img src={this.state.numsImageList[this.state.currentIdx]}  width={250} height={250} alt="React Image" />
            <Button variant="contained" image1 onClick={this.handleRealClick1}  style={{ backgroundColor: this.state.buttonActive ? "blue" : "grey" }} disabled = {!this.state.buttonActive}>  
              {this.state.image1Label} 
            </Button>  
          </Column>
          <Divider orientation="vertical" flexItem>
          </Divider>
          <Column flexGrow={1} horizontal='center'>
            <h3> Image 2 </h3>
            <img src={this.state.lettersImageList[this.state.currentIdx]}  width={250} height={250} alt="React Image" />
            <Button variant="contained" image2  onClick={this.handleRealClick2} style={{ backgroundColor: this.state.buttonActive ? "blue" : "grey" }} disabled = {!this.state.buttonActive}>  
              {this.state.image2Label}
            </Button>
          </Column>
        </Row>
      </Column>
      <Divider/>
      <Column horizontal='center'>
      <Button variant="contained" reset>  
              Reset
            </Button>
      <Button variant="contained" onClick={this.toggle2}>
              NEXT 
            </Button>
      <Button variant="contained" end>  
              END 
            </Button>    
      <Button variant="contained">
              GENERATE REPORT
            </Button>
            </Column>
         </form>  
     );  
  }  
}  
export default App2; 
const data = [
  { name: "Anom", age: 19, gender: "Male" },
  { name: "Megha", age: 19, gender: "Female" },
  { name: "Subham", age: 25, gender: "Male"},
]
  
function App4() {
  return (
    <div className="App4">
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.age}</td>
              <td>{val.gender}</td>
            </tr>
          )
        })}
      </table>
    </div>
  );
}
/*class ExampleComponent extends Component {
  render() {
    return (
      <Column flexGrow={1}>
        <Row vertical='center'>
          <Column flexGrow={1} horizontal='center'>
            <h3> Image 1 </h3>
            <span> image 1 content </span>
          </Column>
          <Column flexGrow={1} horizontal='center'>
            <h3> Image 2 </h3>
            <span> image 2 content </span>
          </Column>
        </Row>
      </Column>
    );
  }
}*/

export class Hello extends React.Component {
  state = {
    test: ["a", "b", "c"],
    index: 0
  };
  handleClick = () => {
    let i = this.state.index < this.state.test.length ? this.state.index += 1 : 0;
    this.setState({ index: i });
  };
  render() {
    return (
      <div>
        {this.state.test.slice(0, this.state.index).map(v => {
          return (
            <span>{v}</span>
          );
        })}
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}

//export default ExampleComponent;