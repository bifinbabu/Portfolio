import React from 'react'
import './Works.css'
function Works() {
  return (
    <section className='work-page' id='work'>
      <h1 className='title'><span className="material-symbols-outlined ">home_repair_service</span>My Projects</h1>
      <div className='content'>
        {/* <p>Following are some of my  works : </p> */}
      </div>
      <div className='works-display' >
        <div className='item' style={{ textAlign: 'center' }}>
          <img src={require('./Capture.JPG')} alt="" />
          <a className="link-icon" href="https://maxcart.herokuapp.com/" target="_blank" rel="noopener noreferrer">
          <div className="item-title cart">
            <span>Shopping Website</span>
              <i className="fa fa-external-link" aria-hidden="true"></i>
          </div>
          </a>
          <p className='p' style={{ paddingTop: '0.6rem' }}>
            Front-end : <b>Html,Css,Javascript</b> <br />Back-end : <b>NodeJS</b> <br />Data Base : <b>MongoDB</b> <br />FrameWorks : <b>Handlebars,ExpressJS,Bootstrap</b> </p>
        </div>

        <div className='item' style={{ textAlign: 'center' }}>
          <img src={require('./Capture.JPG')} alt="" />
          <a className="link-icon" href="https://maxcart.herokuapp.com/" target="_blank" rel="noopener noreferrer">
          <div className="item-title cart">
            <span>Shopping Website</span>
              <i className="fa fa-external-link" aria-hidden="true"></i>
          </div>
          </a>
          <p className='p' style={{ paddingTop: '0.6rem' }}>
            Front-end : <b>Html,Css,Javascript</b> <br />Back-end : <b>NodeJS</b> <br />Data Base : <b>MongoDB</b> <br />FrameWorks : <b>Handlebars,ExpressJS,Bootstrap</b> </p>
        </div>

        <div className='item' style={{ textAlign: 'center' }}>
          <img src={require('./Capture.JPG')} alt="" />
          <a className="link-icon" href="https://maxcart.herokuapp.com/" target="_blank" rel="noopener noreferrer">
          <div className="item-title cart">
            <span>Shopping Website</span>
              <i className="fa fa-external-link" aria-hidden="true"></i>
          </div>
          </a>
          <p className='p' style={{ paddingTop: '0.6rem' }}>
            Front-end : <b>Html,Css,Javascript</b> <br />Back-end : <b>NodeJS</b> <br />Data Base : <b>MongoDB</b> <br />FrameWorks : <b>Handlebars,ExpressJS,Bootstrap</b> </p>
        </div>


        <div className='item' style={{ textAlign: 'center' }}>
          <img src={require('./netflix.JPG')} alt="" />
          <a class="link-icon" href="https://richardshaju.github.io/netflix/" target="_blank" rel="noopener noreferrer">
          <div class="item-title netflix">
            <span>Netflix-Clone</span>
            
              <i class="fa fa-external-link" aria-hidden="true" ></i>
            
          </div>
          </a>
          <p className='p' style={{ paddingTop: '0.6rem'}}>
            Front-end : <b>React,Css,Javascript</b> <br />Back-end : <b>Nill</b> <br />API used : <b>TMDB</b> <br />FrameWorks : <b>ReactJS</b>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Works