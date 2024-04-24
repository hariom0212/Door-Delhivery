import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../css/about.css";

export default function About() {
    const history = useNavigate();
    const [user, setUser] = useState({
        name: "", phone: ""
    });
    let name, value;

    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value });
    }

    const PostData = async (e) => {
        e.preventDefault();
        const { name, phone } = user;

        const res = await fetch("/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name, phone
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
            <h2 className='head1 my-5'>ABOUT US</h2>
            <div className='box'>
                <h3 className='text5'>Empowering Seamless Logistics: Our Mission is to Redefine Convenience in Transportation, While Our Vision Strives for a World Where Shipping and Moving are Effortless and Stress-Free.</h3>
                <div className='row'>
                    <div className='col-md-4'>
                        <h4 className='text6'>Our Mission</h4>
                        <p className='para3'>We're dedicated to revolutionizing convenience in logistics. Our commitment lies in offering seamless, reliable, and innovative solutions for package delivery and corporate moving. We aim to empower individuals and businesses alike with hassle-free transportation services, ensuring peace of mind and satisfaction throughout the entire process.<br /><br />Driven by our mission, we continually strive to surpass expectations and cultivate enduring relationships with our clients. Moreover, we're deeply committed to making a positive impact on the communities we serve, aiming to foster growth and prosperity through our dedicated services. At At Door Delivery, our mission is clear: to redefine convenience in logistics and leave a lasting impression on every doorstep we reach.</p>

                    </div>

                    <div className='col-md-4'>
                        <h4 className='text6'>Our Vision</h4>
                        <p className='para3'>At Door Delivery, our values form the cornerstone of our operations. We prioritize reliability, ensuring our customers consistently rely on us for seamless package deliveries and precision-driven corporate moves. Through collaboration and teamwork, we leverage diverse talents to uphold our unwavering commitment to excellence.


                            <br /><br />Our culture of innovation and dedication to core values drive us toward our vision of industry leadership. Each team member contributes to our success, propelling us forward as we strive to deliver unparalleled logistics solutions. At Door Delivery, we're more than just a delivery service; we're your trusted partner, delivering reliability and excellence with every doorstep.</p>

                    </div>

                    <div className='col-md-4'>
                        <form method='POST' className='contactus-form' id='contactus-form'>
                            <h2 className='form-title' id='conthead'> Reach Out To Us</h2>
                            <div className='form-group'>
                                <label htmlFor='name'>
                                </label>
                                <input type='text' name='name' id='name' autoComplete='off' value={user.name} onChange={handleInputs} placeholder=' Your name' />
                            </div>

                            <div className='form-group'>
                                <label htmlFor='phone'>
                                </label>
                                <input type='text' name='phone' id='name' value={user.phone} onChange={handleInputs} autoComplete='off' placeholder=' Your phone' />
                            </div>

                            <div className='form-group form-button'>
                                <input type='submit' name='submit' id='submit' className='form-submit' value='submit' onClick={PostData} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className='box my-5'>
                <div className='row'>
                    <div className='col-md-10'>
                        <h2 className='text4'>"Unlock Seamless Logistics: Book Your Appointment Now!"</h2>
                    </div>

                    <div className='col-md-2'>
                        <button className="btn">Dispatch Today</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
