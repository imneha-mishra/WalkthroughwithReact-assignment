import { Link } from "react-router-dom";
import Logo from '../Image/Logo.jpg';
function Login(){
    return(
        
  <div className='container'>
            <img src={Logo} />
         <form className='logform'>
            <div className='form'>
              <div className="mail">
                <input type='text,number,email' placeholder='Phone number,username,or email'/>
                </div>
                <input type='password' placeholder='Password'/>
              <Link to="/Login" className="submit">Sign in</Link>
            </div>
         </form>
          <div className='login'>
            <p>Don't have  account? <Link to="/" className="btn">Sign up</Link></p>
          </div>
        </div>
    )
}

export default Login;