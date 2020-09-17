import React, { Component } from 'react';
import classes from './App.module.css';
import Musicmg from './Components/Musicpla/Musicmanage';
import Background from './Components/UI/background/background';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage, faPlay, faSyncAlt, faVolumeMute } from '@fortawesome/free-solid-svg-icons'
import Gallary from './Components/UI/Gallary/Gallary';
import Headding from './Components/UI/Heading/header';

const playele = <FontAwesomeIcon icon={faPlay} />
const stopele = <FontAwesomeIcon icon={faVolumeMute} />
const suffleele = <FontAwesomeIcon icon={faSyncAlt} />
const photoele = <FontAwesomeIcon icon={faImage} />



class App extends Component {
  
  state={
    soundshow:false,
    Galaryshow:false,

  }

clicked=()=>{
this.setState(prev=>({soundshow:true}))
}



paused=()=>{
  this.setState(prev=>({soundshow:false}))
  }


  galary=()=>{
    this.setState(prev=>({Galaryshow:!prev.Galaryshow}))
    }



  render(){
    let modal;
    if(!this.state.Modal)
    {modal=null;}
    if(this.state.soundshow){
      modal=( <Musicmg/> )
    }
    return (
      <div>

    <div className={classes.App}>
    {/* <video autoplay muted loop className={classes.myVideo}>
        <source src={sourcevdo} type="video/mp4" />
   </video> */}
   <div className={classes.buttons}>
    <button onClick={this.clicked}>{this.state.soundshow?suffleele:playele}</button>
    <button onClick={this.paused}>{stopele}</button>
    <button onClick={this.galary}>{photoele}</button>
    </div>
    {modal}
    </div>
    
    {this.state.Galaryshow?<Gallary/>:<Headding/>}
   <Background/>
    </div>

  );}
}

export default App;
