import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WelcomePage from './pages/WelcomePage';
import PlannerPage from './pages/PlannerPage';
import ExpensePage from './pages/ExpensePage';
import EditDaily from './pages/EditDaily';
import './pages/WelcomePage.css';
import './pages/PlannerPage.css'
import './pages/EditDaily.css';
import './components/DailyColumn.css';



ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <Router>
  <Routes>
    <Route path="/" element={<WelcomePage/>} />
    <Route path="/PlannerPage" element={<PlannerPage/>} />

    <Route path="/ExpensePage" element={<ExpensePage/>} />
    {/* <Route path="/QuestionPage" element={<QuestionPage />} />
    <Route path="/test" element={<Test />} />
    <Route path="/ResultsPage" element={<ResultsPage />} /> */}

    <Route path="/EditDaily" element={<EditDaily/>} />

    
  </Routes>
  {/* <Footer /> */}
</Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
