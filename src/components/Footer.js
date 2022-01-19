import React from 'react'

function Footer() {
    const year = new Date().getFullYear();
    return (
        <div class="text-center">
            <footer>
                <p class="text-muted">Copyright ⓒ {year} by Boy Engelgeer</p>
            </footer>
        </div>
    );
}

export default Footer