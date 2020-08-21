import React from "react";

function Forecast(props)
{
    return (
        <div className="day-tile">
            <p className="tile-date">{props.date}</p>
            <img src={props.icon} alt="Logo of weather" />
            <p><span>high:{props.high}</span><span>low:{props.low}</span></p>
            <p><span>rise:{props.rise}</span><span>set:{props.set}</span></p>
            <p><span>rain:{props.rain}</span><span>snow:{props.snow}</span></p>
        </div>
)
}
export default Forecast;