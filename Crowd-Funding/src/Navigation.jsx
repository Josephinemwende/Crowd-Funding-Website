import Logo from './assets/logo.svg'
function Navigation(){
    return(
        <div>
            <img src={Logo}/>
            <nav>
                <ul>
                    <li><a href="about">About</a></li>
                    <li><a href="discover">Discover</a></li>
                    <li><a href="get-started">GetStarted</a></li>
                </ul>
            </nav>
        </div>
    );
}
export default Navigation; 