import './App.css';
import items from "./items.js"
import topMenu from "./topMenu.js"
import React from "react";
import ReactDOM from 'react-dom';   
import {Route, BrowserRouter as Router,Switch,Link} from "react-router-dom";

function App() {
  return (
    <Router>
      <div >
        {/*drawing top menu*/}
            <div className="topnav">{
              topMenu.map(item=> {
                return(
                <div id={"top"+item}>
                  <a>
                    <Link to={"/"+item}>{item}</Link> 
                  </a>
                </div>
                );
              })}
            </div>
        {/*drawing items*/}
        <Switch>
          <Route path="/" component={Items} />
          <Route path="/vyhladat" component={Items} />
          <Route path="/jedlo" component={Items} />
          <Route path="/pitie" component={Items} />
          <Route path="/pecivo" component={Items} />
          <Route path="/prislusenstvo" component={Items} />
          <Route path="/ku pecivu" component={Items} />

        </Switch>
        {/*drawing left navbar*/}
        <nav className="main-menu">
          <ul>
            {
              topMenu.map(item => {
                return(
                  <li id={"left"+item}>
                      <a href="#">
                        <i className="fa fa-info fa-2x"></i>
                          <span className="nav-text">
                              {item}
                          </span>
                      </a>
                  </li>
                );
              })
            }
          </ul>
        </nav>

      </div>
    </Router>
  )
}
class Items extends React.Component {
  render() {
    return (
        <div className="items">
        {
          items.map(item => {
            return(
              <div className="item" id={item.id}>
                <p>{ item.poto }</p>
                <p>{ item.name }</p>
                <p>{ item.price }</p>
              </div>
            );
          })
        }
      </div>
    )
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
