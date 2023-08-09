
import React from 'react'

export default function Card(props) {
  return ( 
  <>
    <div class='container mt-5'>
    <div class="row">
       
      <div class="row mt-2">
      
      <div class=" col-sm-6 col-lg-3">
          <div class="card">
              <img  src="image/x.png"  class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-text"><a href={props.link1}>task1</a></h5>
              </div>
            </div>
      </div>
      <div class=" col-sm-6 col-lg-3">
          <div class="card">
              <img  src="image/x.png" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5  class="card-text"><a href={props.link2}>task2</a></h5>
              </div>
            </div>
      </div>
      <div class=" col-sm-6 col-lg-3">
          <div class="card">
              <img  src="image/x.png" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5  class="card-text"><a href={props.link3}>task3</a></h5>
              </div>
            </div>
      </div>
      <div class=" col-sm-6 col-lg-3">
          <div class="card">
              <img  src="image/x.png" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5   class="card-text"><a href={props.link4}>task4</a></h5>
              </div>
            </div>
      </div>
    
    </div>
  
    </div>
    </div>


    
    </>
      
            
           
  
  
  
 
    
  );
}
