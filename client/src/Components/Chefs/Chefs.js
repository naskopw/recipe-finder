
import './style.css'

export const Chefs = () => {
    return (
        <div id="team" className="text-center">
    <div className="overlay">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Meet the Chefs</h2>
          <hr/>
        </div>
        <div id="row">
          <div className="col-md-6 team">
            <div className="thumbnail">
              <div className="team-img"><img src="img/team/01.jpg" alt="..."/></div>
              <div className="caption">
                <h3>Atanas Ivanov</h3>
                <p>Internet Software Technologies, NBU, f98757</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 team">
            <div className="thumbnail">
              <div className="team-img"><img src="img/team/02.jpg" alt="..."/></div>
              <div className="caption">
                <h3>Philip Yankov</h3>
                <p>Mentor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    )
}
