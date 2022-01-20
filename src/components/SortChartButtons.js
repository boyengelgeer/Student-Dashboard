import React from "react";

function SortChartButtons() {
    return (
        <div className="text-center">
            <div className="btn-group flex-wrap">
                <button type="button" className="btn btn-secondary">Sort by difficulty</button>
                <button type="button" className="btn btn-secondary">Sort by fun</button>
                <button type="button" className="btn btn-secondary">Reset</button>
                
            </div>
        </div>
    );
}

export default SortChartButtons