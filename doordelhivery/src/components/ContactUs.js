import React, { useState } from 'react'
import "../css/contactus.css";
import { useNavigate } from 'react-router-dom';

export default function ContactUs() {
  const history = useNavigate();
  const [enquiry, setEnquiry] = useState({
    name: "", email: "", movefrom: "", moveto: "", phone: ""
  });
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setEnquiry({ ...enquiry, [name]: value });
  }
  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, movefrom, moveto, phone } = enquiry;

    const res = await fetch("/send", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name, email, movefrom, moveto, phone
      })
    });
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert('Invalid Registration');
      
    }
    else {
      window.alert('Registration Successfull');
      history('/');
    }
  }
  return (
    <div>
       <h2 className='head1 my-5'>Contact Us</h2>
       <div className='box'>
        <div className='row'>
            <div className='col-md-6'>
                <h4 className='text12'>Got questions or need assistance? Reach out to us today for prompt and friendly support</h4><br/><br/>
                <h5 className='text13'>Address:-</h5><br/>
                <p className='para6'>Greater Noida Uttar Pradesh 201310</p><br/><br/>

                <h5 className='text13'>Email Us:-</h5><br/>
                <p className='para6'>doordelhivery123@gmail.com</p><br/><br/>

                <h5 className='text13'>Call Us:-</h5><br/>
                <p className='para6'>9616412393</p><br/><br/>
            </div>

            <div className="col-md-6">
          <h4 className='text12'>Track & Schedule with Ease: One-Call Convenience for Package Updates</h4>
          <form className='group'>
            <input id='te' type="text" name="name" className="form-control" value={enquiry.name} onChange={handleInputs} placeholder="Name" aria-label="Name" />

            <input type="email" name='email' className="form-control" value={enquiry.email} onChange={handleInputs} id="exampleFormControlInput1" placeholder="name@example.com" />

            <input id='te' type="text" name="movefrom" className="form-control" value={enquiry.movefrom} onChange={handleInputs} placeholder="Move From" aria-label="Move From" />

            <input id='te' type="text" name="moveto" className="form-control" value={enquiry.moveto} onChange={handleInputs} placeholder="Move To" aria-label="Move To" />

            <input id='te' type="text" name="phone" className="form-control" value={enquiry.phone} onChange={handleInputs} placeholder="Phone No." aria-label="Phone No." />

            <input type='submit' name='submit' id='submit' className='form-submit' value='submit' onClick={PostData} />




          </form>
        </div>
        </div>
       </div>
    </div>
  )
}
