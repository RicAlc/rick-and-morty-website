import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Character from './routes/Character';
import CharactersPage from './routes/CharactersPage';
import Landing from './routes/Landing';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/api/characters/:id' element={<Character />} />
          <Route
            path='/api/characters/page/:page'
            element={<CharactersPage />}
          />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
