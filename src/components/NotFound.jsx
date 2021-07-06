import React from 'react'
import {Link, useHistory, useLocation} from 'react-router-dom'


const NotFound = () => {
    let history= useHistory();
    let location= useLocation();

    
    return (
        <div className="about-page page-container">
            <h1>صفحه یافت نشد</h1>
            {/* <strong>{history.location.pathname}</strong> &nbsp; is not found &spades; */}
            <strong>{location.pathname}</strong> &nbsp; پیدا نشد &spades;
            <br/>
            <button className="btn" onClick={()=> history.push("/home")}> بازگشت به صفحه اصلی</button>
            <br/>

            <Link to="/home">بازگشت به صفحه اصلی</Link>
            
        </div>
    )
}

export default NotFound
