import React, { Component } from 'react'
import tractor from './images/tractor.jfif';
import pest from './images/pest.jfif';
import plough from './images/plough.jfif';
import axe from './images/axe.jfif';

export default class Things extends Component {
    render() {
        return ( 
            <div id="materials" className="mt-5">
            <div className="col-md-6 offset-3"><img src={tractor} alt="agri"  width="150px"></img></div>
            <p>A tractor is an engineering vehicle specifically designed to deliver a high tractive effort (or torque) at slow speeds,<br></br>  for the purposes of hauling a trailer or machinery such as that used in agriculture, mining or construction.<br></br>  Most commonly, the term is used to describe a farm vehicle that provides the power and traction to<br></br> mechanize agricultural tasks, especially (and originally) tillage, but nowadays a great variety of tasks</p>
            <div className="col-md-6  offset-3"><img src={pest} alt="agri" width="150px"></img></div>
            <p>A plough is a farm tool for loosening<br></br> or turning the soil before sowing seed or planting<br></br>. Ploughs were traditionally drawn by oxen and horses, but in modern farms are<br></br> drawn by tractors</p>
            <div className="col-md-6  offset-3"><img src={plough} alt="agri" width="150px"></img></div>
            <p>An axe (sometimes ax in American English; see spelling differences) <br></br>is an implement that has been used for millennia to shape, split and cut wood, to harvest timber<br></br>, as a weapon, and as a ceremonial or heraldic symbol. The axe has many forms and<br></br> specialised uses but generally consists of an axe head with a handle, or helve.
Before the modern axe, the stone-age hand<br></br> axe without a handle was used from 1.5 million years BP</p>
            <div className="col-md-6  offset-3"><img src={axe} alt="agri" width="150px"></img></div>
            <p>Pesticides are substances that are meant to control pests. The term pesticide includes all of the following: <br></br>herbicide, insecticides (which may include insect growth regulators, termiticides, etc.) <br></br>nematicide, molluscicide, piscicide, avicide<br></br>, rodenticide, bactericide, insect repellent, animal repellent, antimicrobial, and fungicide.<br></br> The most common of these are herbicides which account for <br></br>approximately 80% of all pesticide use</p>
           
           
            </div>
        )
    }
}
