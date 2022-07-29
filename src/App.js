import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Character from './routes/Character';
import Landing from './routes/Landing';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/api/characters/:id' element={<Character />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
