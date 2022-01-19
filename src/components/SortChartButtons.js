import React from "react";

function SortChartButtons() {
    return (
        <div class="text-center">
            <div class="btn-group flex-wrap">
                <button type="button" class="btn btn-secondary">Sort by difficulty</button>
                <button type="button" class="btn btn-secondary">Sort by fun</button>
                <button type="button" class="btn btn-secondary">Reset</button>
                
            </div>
        </div>
    );
}

export default SortChartButtons