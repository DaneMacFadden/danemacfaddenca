
function Tabbar() {

  return (
    <>
      <div className="d-flex justify-content-left">
        <h2 className="p-3">Welcome to Dane MacFadden's portfolio!</h2>
      </div>

      <div className="btn-group col-md-4 p-2 ms-2">
        <button type="button" className="btn btn-outline-light">Home</button>
        <button type="button" className="btn btn-outline-light">About Me</button>
        <button type="button" className="btn btn-outline-light">My Projects</button>
      </div>
    </>
  )
}

export default Tabbar
