import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import BuildTable from './components/table';
import ShowGraph from './components/BuildGraph';
import Input from './components/Input';
import './App.css'

function App() {
  

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="grid">
          <div className="row align-items-centre">
            <div className="col-md-12 input-box p-3">
              <Input />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="grid">
          <div className="row align-items-centre">
            <div className="col-md-5">
              <BuildTable />
            </div>
            <div className="col-md-6 offset-1">
              <ShowGraph />
            </div>
          </div>
        </div>
      </div>
      
    </>
    
  )
}

export default App
