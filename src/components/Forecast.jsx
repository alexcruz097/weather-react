import React from "react";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import AcUnitIcon from '@material-ui/icons/AcUnit';
function Forecast(props)
{
    const fontSize = {
        fontSize: 10,
        color: "blue"
    }
    
    return (
        <div className="day-tile">
            <p className="tile-date">{props.date}</p>
            <img src={props.icon} alt="Logo of weather" />
            <p><span className="weather-high">{props.high}&deg;</span>/<span className="weather-low">{props.low}&deg;</span></p>
            <p><ArrowUpwardIcon style={fontSize} /><span className="sun-rise">{props.rise}</span><ArrowDownwardIcon style={fontSize} /><span className="sun-set">{props.set}</span></p>
            <p><InvertColorsIcon style={fontSize} /><span className="rain-percentage">{props.rain}%</span><AcUnitIcon style={{fontSize: 10  , color: "skyBlue"}} /><span className="snow-percentage">{props.snow}%</span></p>
        </div>
)
}
export default Forecast;