import logo from './logo.svg';
import './App.css';
import LoadingPage from './LoadingPage/LoadingPage';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import QuizPage from './QuizPage/QuizPage';
import { Provider } from 'react-redux';
import { Store } from './Store/Store';

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoadingPage/>}/>
          <Route path='/QuizPage' element={<QuizPage/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
