import React from "react";
import { Link } from "react-router-dom";



function Header() {


    return (<div>
        <div className="py-5 text-center text-muted">
            <img src="https://global-uploads.webflow.com/5ee34869dd28cd4237e2a5f2/5f030fe26dc9fc19df8dc16a_Winc-logo-objects.svg" width="72" height="72" className="d-block mx-auto mb-4" alt="" />
            <h4>Student Dashboard by Winc Academy</h4>
        </div>
        <div className="text-center">
            <div className="btn-group flex-wrap">               
                <button type="button" className="btn btn-secondary">Aranka</button>
                <button type="button" className="btn btn-secondary">Evelyn</button>
                <button type="button" className="btn btn-secondary">Floris</button>
                <button type="button" className="btn btn-secondary">Hector</button>
                <button type="button" className="btn btn-secondary">Martina</button>
                <button type="button" className="btn btn-secondary">Maurits</button>
                <button type="button" className="btn btn-secondary">Rahima</button>
                <button type="button" className="btn btn-secondary">Sandra</button>
                <button type="button" className="btn btn-secondary">Storm</button>
                <button type="button" className="btn btn-secondary">Wietske</button>
            </div >

        </div >
    </div >
    );
}

export default Header