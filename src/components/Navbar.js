import React from 'react';

function Navbar() {
    return (
        <>
            <nav className="container navbar navbar-expand-lg navbar-light bg-light rounded">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">TextUtils</a>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Mode</label>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
