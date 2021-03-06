import React from 'react'
import "./Style.css"
export default function ContectUs() {
  return (
    <div>
<section className="container main_contectus">
    
   <div className="row">
      <div className="col-sm-12 text-center mb-4">
       <a className="btn btn-primary" target="_blank" href="https://surajifastdigital.netlify.app/"> Connect with us <i className="fa-solid fa-user-plus"></i></a>
     </div>
   
      <div className="col-sm-12 mb-4 col-md-5">
        
         <div className="card border-primary rounded-0">
            <div className="card-header p-0">
               <div className="bg-primary text-white text-center py-2">
                  <h3><i className="fa fa-envelope"></i> Write to us:</h3>
                  <p className="m-0">We’ll write rarely, but only the best content.</p>
               </div>
            </div>
            <div className="card-body p-3">
               
                  <div className="form-group">
                  <label> Your name </label>
                  <div className="input-group">
                     <input value="" type="text" name="data[name]" className="form-control" id="inlineFormInputGroupUsername" placeholder="Your name" />
                  </div>
				</div>
                  <div className="form-group">
                     <label>Your email</label>
                     <div className="input-group mb-2 mb-sm-0">
                        <input type="email" value="" name="data[email]" className="form-control" id="inlineFormInputGroupUsername" placeholder="Email" />
                     </div>
                  </div>
                  <div className="form-group">
                     <label>Subject</label>
                     <div className="input-group mb-2 mb-sm-0">
                        <input type="text" name="data[subject]" className="form-control" id="inlineFormInputGroupUsername" placeholder="Subject" />
                     </div>
                  </div>
                  <div className="form-group">
                     <label>Message</label>
                     <div className="input-group mb-2 mb-sm-0">
                        <input type="text" className="form-control" name="mesg" />
                     </div>
                  </div>
                  <div className="text-center mt-2">
                    <button type="submit" className="btn btn-primary btn-m btn" >Submit</button>
                     {/* <input type="submit" name="submit" value="submit" className="btn btn-primary btn-block rounded-0 py-2" /> */}
                  </div>
             
			     </div>
				  
            </div>
         </div>
    
      <div className="col-sm-12 col-md-7">
       
         <div className="mb-4">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d447986.853145337!2d76.80793089633595!3d28.692718881263545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d047309fff32f%3A0xfc5606ed1b5d46c3!2sDelhi!5e0!3m2!1sen!2sin!4v1657912070587!5m2!1sen!2sin" width="600" height="450"style={{border:"1px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
         </div>
       
         <div className="row text-center">
            <div className="col-md-4">
               <a className="bg-primary px-3 py-2 rounded text-white mb-2 d-inline-block"><i className="fa fa-map-marker"></i></a>
               <p> Your Address ….. </p>
            </div>
            <div className="col-md-4">
               <a className="bg-primary px-3 py-2 rounded text-white mb-2 d-inline-block"><i className="fa fa-phone"></i></a>
               <p>+91- 90000000</p>
            </div>
            <div className="col-md-4">
               <a className="bg-primary px-3 py-2 rounded text-white mb-2 d-inline-block"><i className="fa fa-envelope"></i></a>
               <p> your@gmail.com</p>
            </div>
         </div>
      </div>
    
	    </div>
</section>

    </div>
  )
}
