import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Character from './routes/Character';
import CharactersPage from './routes/CharactersPage';
import Landing from './routes/Landing';
import SearchResults from './routes/SearchResults';

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
          <Route
            path='/api/characters/search/:searchterm'
            element={<SearchResults />}
          />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
