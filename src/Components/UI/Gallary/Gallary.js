import React, { Component } from 'react'
import classes from './Gallary.module.css'
import importAll from 'import-all.macro'
import HorizontalScroll from 'react-horizontal-scrolling-menu'
const Arrow = ({ text, className }) => {
    return (
      <div
        className={className}
      >{text}</div>
    );
  };
const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' })
class Gallary extends Component{
    

    state={
        k:[]
    }



    
    
    





scrollright=(e)=>{
    // e.preventDefault()
    //     var container = document.getElementById('container')
    //     var containerScrollPosition = document.getElementById('container').scrollLeft
    //     container.scrollTo({
    //         top: 0,
    //         left: (containerScrollPosition + e.deltaY)*10,
    //         right: (containerScrollPosition - e.deltaY)*10,
    //         // behaviour: 'smooth' //if you want smooth scrolling
    //     })
}



    componentDidMount=()=>{

        importAll('../../../asset/images/*.jpg').then(all => {
           Object.values(all).forEach(e=>{
               this.setState(prev=>({k:[...prev.k,e.default]}))
        })
          })

    }
    
    render(){
        let imgl=<p>wait...</p>;
        if(this.state.k)
        {
            imgl=this.state.k.map(e=>{return <img className={classes.imag} src={e} alt={e} key={e}/>})

            imgl=imgl.sort(() => Math.random() - 0.5)
        }
        // console.log(imgl);


        return(
    <div onWheel={this.scrollright} id='container' className={classes.Gallaryback}>
 
    {imgl}
   
    
    </div>
    
        )
    }
    
}

export default Gallary