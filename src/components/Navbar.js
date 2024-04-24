import React from 'react';
import "./styles/Navbarst.css"

class Navbar extends React.Component {
    state = { scrolled: false, activeSection: '' };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const scrollTop = window.scrollY 
        if (scrollTop > 50) {
            this.setState({ scrolled: true });
        } else {
            this.setState({ scrolled: false });
        }
    };

    render() {
        return (
            <nav className={`navbar navbar-expand-lg bg-dark ${this.state.scrolled ? 'navbar-scrolled' : ''}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#Main" style={{color:"white"}}>
                        Raghav Kejriwal
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className={`nav-item ${this.state.activeSection === 'Main' ? 'active' : ''}`}>
                                <a className="nav-link" href="#Main">
                                    Home
                                </a>
                            </li>
                            <li className={`nav-item ${this.state.activeSection === 'About' ? 'active' : ''}`}>
                                <a className="nav-link" href="#About">
                                    About Me
                                </a>
                            </li>
                            <li className={`nav-item ${this.state.activeSection === 'Portfolio' ? 'active' : ''}`}>
                                <a className="nav-link" href="#Portfolio">
                                    Portfolio
                                </a>
                            </li>
                            <li className={`nav-item ${this.state.activeSection === 'Skills' ? 'active' : ''}`}>
                                <a className="nav-link" href="#Skills">
                                    Skills
                                </a>
                            </li>
                            <li className={`nav-item ${this.state.activeSection === 'Testimonials' ? 'active' : ''}`}>
                                <a className="nav-link" href="#Testimonials">
                                    Testimonials
                                </a>
                            </li>
                            <li className={`nav-item ${this.state.activeSection === 'Resume' ? 'active' : ''}`}>
                                <a className="nav-link" href="#Resume">
                                    Resume
                                </a>
                            </li>
                            <li className={`nav-item ${this.state.activeSection === 'Contact' ? 'active' : ''}`}>
                                <a className="nav-link" href="#Contact">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
