
import { Link } from 'react-router-dom';
import './Signup.css';
import Logo from '../Image/Logo.jpg';
function Signup(){
    return (
        <div className='container'>
          <img src={Logo} />
         <form className='signupform'>
            <div className='form'>
              <div className='mail'>
                <input type='email' placeholder='Mobile Number or Email'/>
                </div>
                <div className='name'>
                <input type='text' placeholder='Full Name'/>
                </div>
                <input type='email' placeholder='Phone number ,username,or email'/>
                <input type='password' placeholder='Password'/>
             <Link to="/" className='submit'>Signup</Link>
            </div>
         </form>
          <div className='login'>
            <p>have an account?<Link to="/Login" className='btn'>Login</Link></p>
          </div>
        </div>
    )
}
export default Signup;