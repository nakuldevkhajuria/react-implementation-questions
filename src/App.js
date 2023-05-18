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
import { Suspense, lazy } from 'react';
import CleanUp from './Questions/UseEffect/CleanUp';
import Helo from './Questions/Redux/Helo';
import { Provider } from 'react-redux';
import Store from './Questions/Redux/Store';
const LazyComponent = lazy(() => import('./Questions/LazyLoading/LazyComponent'));

function App() {
  const nanu = 'helonamu'
  return (
    <div className="App">



     {/* <Drop /> */}
     {/* <Image/> */}
 {/* <Todo/> */}
{/* <Counter /> */}


{/* <CounterContext />
<MyContext.Provider value={'This is the data coming from App.jsx'}>
  <Component1/>
</MyContext.Provider> */}

{/* <h1>Lazy Loading Example</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense> */}

      {/* <CleanUp/> */}
      <Provider store={Store}>
      <Helo />
      </Provider>
    </div>
  );
}

export default App;
