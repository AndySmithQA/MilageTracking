import skoda from '../images/Skoda.png'

export default function Navbar(){
    return (
        
        <nav className="navbar navbar-custom">
            <a className="navbar-brand p-2" href="#">
            <img src={skoda} width="100"  alt="" />
        </a>
        <h2 class="reg">AP72 HZZ</h2>
        <span id="title" className="lead fw-bold px-4 skoda-custom">Kodiaq Milage Tracking</span>
    </nav>
    
    )
}