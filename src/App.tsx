import './App.css'
import Tabbar from './components/Tabbar'
import Card from './components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <Tabbar />
      <div className="d-flex gap-3 justify-content-center">
          <Card img="https://cdn.pixabay.com/photo/2022/12/23/01/25/steering-7673519_1280.jpg" text="This is some sample text" />
          <Card img="https://cdn.pixabay.com/photo/2022/12/23/01/25/steering-7673519_1280.jpg" text="This is some sample text" />
          <Card img="https://cdn.pixabay.com/photo/2022/12/23/01/25/steering-7673519_1280.jpg" text="This is some sample text" />

      </div>
    </>
  )
}

export default App
