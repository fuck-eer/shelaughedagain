import React, { Component } from 'react'
import classes from './Gallary.module.css'
import { imagesRef, videoRef } from '../../../Firebase/firebase'


class Gallary extends Component{
    

    state={
        imgUrl:[],
        vdourl:null
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

//------------------------static calll--------------------------------------------------
        // importAll('../../../asset/images/*.jpg').then(all => {
        //    Object.values(all).forEach(e=>{
        //        this.setState(prev=>({k:[...prev.k,e.default]}))
        // })
        //   })
//--------------------------------------------------------------------------

videoRef.getDownloadURL().then(d=>{
    this.setState({vdourl:d})
})


imagesRef.listAll().then(res=>{
    res.items.forEach(e=>{
        imagesRef.child(e.location.path.split('/')[1]).getDownloadURL().then(d=>{
            this.setState(prev=>({imgUrl:[...prev.imgUrl,d]}))
        })
    })

})



    }


    
    render(){
// console.log(this.state.imgUrl);

        let imgl=<p>wait...</p>;
//------------------------static calll--------------------------------------------------

        // if(this.state.k)
        // {
        //     imgl=this.state.k.map(e=>{return <img className={classes.imag} src={e} alt={e} key={e}/>})

        //     imgl=imgl.sort(() => Math.random() - 0.5)
        // }
        // console.log(imgl);
//------------------------static calll--------------------------------------------------

if(this.state.imgUrl.length>=95){
    imgl=this.state.imgUrl.map(e=>(
        <img className={classes.imag} src={e} alt={e} key={e}/>
    ))
}
let vdo=null
if(this.state.vdourl){
vdo=<video className={classes.imag} src={this.state.vdourl} width='21%' autoPlay loop muted >not supported</video>
}

        return(
    <div id='container' className={classes.Gallaryback}>
 
    {vdo}
    {imgl}
    
    </div>
    
        )
    }
    
}

export default Gallary