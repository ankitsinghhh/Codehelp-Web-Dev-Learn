
import './App.css';
import Item from './components/Item'
import ItemDate from './components/ItemDate'
import Card from './components/Card'

function App() {
  const response = [ // is trh ka reponse api se milega
    {
      name: 'Himanshu',
      day: 1,
      month: 11,
      year: 1999
    },

    {
      name: 'sahil',
      day: 6,
      month: 3,
      year: 1999
    },

    {
      name: 'preeti',
      day: 13,
      month: 3,
      year: 1997
    }
  ]
  return (
    <div className="App text-[25px] text-black ">
      
    <Card>
    hello world
      <div className="bg-amber-500">
        this is new line 
      </div>
      <Item/>
      <ItemDate/>

      <p>
        date changing dynamically using props below
      </p>
      <p>=----</p>
      
      <Item name = "Nirma">Hello sir this is props children example</Item>
      <ItemDate day="20" month= "june" year = " 1998"></ItemDate>

      <Item name = "tide"></Item>
      <ItemDate day="10" month= "january" year = " 1955"></ItemDate>
      <br></br>
      <Item name ={response[2].name} ></Item>
      <ItemDate day={response[2].day} month= {response[2].month} year ={response[2].year} ></ItemDate>
      <br></br>
      <Item name ={response[1].name} ></Item>
      <ItemDate day={response[1].day} month= {response[1].month} year ={response[1].year} ></ItemDate>
    </Card>

    </div>
  );
}

export default App;
