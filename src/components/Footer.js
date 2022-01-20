import React from 'react'

function Footer() {
    const year = new Date().getFullYear();
    return (
        <div className="text-center">
            <footer>
                <p className="text-muted">Copyright ⓒ {year} by Boy Engelgeer</p>
            </footer>
        </div>
    );
}

export default Footer