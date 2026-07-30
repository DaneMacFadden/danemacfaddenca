import { useNavigate } from 'react-router-dom';
function Tabbar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="d-flex justify-content-left">
        <h2 className="p-3">Welcome to Dane MacFadden's portfolio!</h2>
      </div>

      <div className="btn-group col-md-4 p-2 ms-2">
        <button type="button" className="btn btn-outline-light" onClick={() => navigate("/")}>Home</button>
        <button type="button" className="btn btn-outline-light" onClick={() => navigate("/About")}>About Me</button>
        <button type="button" className="btn btn-outline-light" onClick={() => navigate("/Projects")}>My Projects</button>
      </div>
    </>
  )
}

export default Tabbar
