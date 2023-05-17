import logo from './logo.svg';
import './App.css';
import Drop from './Questions/Dropdown/Drop';
import Image from './Questions/Image/Image';

import Counter from './Questions/UseMemo/Counter';
import Todo from './Questions/UseReducer/Todo';
import Rough from './Questions/UseReducer/Rough';

import MyContext from './Questions/UseContext/Context';
import CounterContext from './Questions/UseContext/CounterContext';
import Component1 from './Questions/UseContext/Component1'


function App() {
  const nanu = 'helonamu'
  return (
    <div className="App">



     {/* <Drop /> */}
     {/* <Image/> */}
 {/* <Todo/> */}
{/* <Counter /> */}


<CounterContext />
<MyContext.Provider value={'This is the data coming from App.jsx'}>
  <Component1/>
</MyContext.Provider>
 
    </div>
  );
}

export default App;
