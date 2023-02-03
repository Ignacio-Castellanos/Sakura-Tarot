
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import General from './Components/General';
import SakuraCards from './Components/SakuraCards';
import ClowCards from './Components/ClowCards';
import MeaningCards from './Components/MeaningCards'
import ReverseCards from './Components/ReverseCards';



function App() {
  return (
    <div className="Container">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<General></General>}></Route>
        <Route path='/SakuraCards/:id' element={<SakuraCards></SakuraCards>}></Route>
        <Route path='/ClownCards/:id' element={<ClowCards></ClowCards>}></Route>
        <Route path='/MeaningCards/:id' element={<MeaningCards></MeaningCards>}></Route>
        <Route path='/ReverseCards/:id' element={<ReverseCards></ReverseCards>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
   
  );


}




export default App;
