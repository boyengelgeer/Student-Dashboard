import React from "react";

function SortChartButtons(props) {
    return (<div>
        <div className="text-center">
            <input type="checkbox" class="btn-check" name="filterbuttons" id="difcheckbt" autocomplete="off" onClick={props.onDifficultyToggle} />
            <label class="btn btn btn-outline-danger" for="difcheckbt">Filter by difficulty</label>
            <input type="checkbox" class="btn-check" name="filterbuttons" id="funcheckbt" autocomplete="off" onClick={props.onFunToggle} />
            <label class="btn btn btn-outline-dark" for="funcheckbt">Filter by fun</label>
            <button type="button" className="btn btn-secondary" onClick={props.onHomeClick}>Back to home</button>

        </div>
    </div>

    );
}

export default SortChartButtons