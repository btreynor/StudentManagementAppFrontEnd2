import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListStudentComponent from './components/ListStudentComponent';
import AddStudentComponent from './components/AddStudentComponent';

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <div className= "container">
        <Routes>
          <Route path = "/" element = {<ListStudentComponent />}></Route>
          <Route path = "/students" element = {<ListStudentComponent />}></Route>
          <Route path = "/add-student" element = {<AddStudentComponent />}></Route>
          <Route path = "/add-student/:id" element = {<AddStudentComponent />}></Route>
        </Routes>
      </div>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
