import { Link, withRouter } from 'react-router-dom';

const isActive = (history, path)=> {
    if(history.location.pathname === path) {
        return {color: '#ff9900'}
    }else{
        return { color:'grey'}
    }
}

const Menu = ({ history}) =>{
    return(
        <nav className='navbar navbar-dark bg-dark'>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li classNa