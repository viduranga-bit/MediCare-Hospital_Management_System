import React from 'react'
import "./login.css";

function Login() {
  return (
    <div>
   
    
    <div className='container py-5 h-100'>
  
    
    <div class="row d-flex justify-content-center align-items-center h-100 background">
    <div class="col-xl-10">
    <div class="card rounded-3 text-black"> 
    <div class="row g-0">

    <div class="col-lg-5 d-flex align-items-center">
    <div class="text-white px-1 py-1 p-md-1 mx-md-1">
        <img src="https://i.ibb.co/0J4QxFY/20945529.jpg" class="card-img  imagenew" alt="..."/>
    </div>  
    </div> 
    
   

    <div class="col-lg-7 ">
    <div class="card-body p-md-5 mx-md-3">  
      <div className="title">
        
       <h1 >LOGIN PANEL</h1> 
       </div>

       <form>
   
       <div class="btn-group">
  <button
    class="btn btn-primary btn-lg dropdown-toggle"
    type="button"
    data-mdb-toggle="dropdown"
    aria-expanded="false"
  >
     Select Account Type
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
   
  </ul>
</div>
                    <div>
                    <label class="form-label" for="form2Example11">Username</label>
                      <input type="email" id="form2Example11" class="form-control"
                        placeholder="Phone number or email address" />
                      
                    </div>
  
                    <div>
                    <label class="form-label" for="form2Example22">Password</label>
                      <input type="password" id="form2Example22" class="form-control"  placeholder="Enter Password Here "  />
                    </div>
  
                    <div class="text-center pt-4 mb-6 pb-1">
                      <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-2" type="button">Log
                        in</button>
                      <a class="text-muted" href="#!">Forgot password?</a>
                    </div>
  
                  
  
                  </form>
                  </div>
      </div>
  
     </div>
    </div> 
   </div> 
   </div> 
 
   </div>

        </div>

    

  )
}

export default Login