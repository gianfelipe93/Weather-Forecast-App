import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from '../components/chart'
import GoogleMap from '../components/google_map'


class WeatherList extends Component {
    renderWeather(cityData) {
        if(!cityData){
            return
        }
        const name = cityData.city.name
        const temps = cityData.list.map(weather => weather.main.temp)
        const pressure = cityData.list.map(weather => weather.main.pressure)
        const humidity = cityData.list.map(weather => weather.main.humidity)

        return  (
            <tr key={name}>
                <td><GoogleMap lat={cityData.city.coord.lat} lon={cityData.city.coord.lon}/></td>
               <td><Chart data={temps} color={'red'} units="K"/></td>
               <td><Chart data={pressure} color={'orange'} units="hPa"/></td>
               <td><Chart data={humidity} color={'blue'} units="%"/></td>
            </tr>
        )
    }

    render(){
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Preassure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({weather}) {
    return { weather }
}

export default connect (mapStateToProps)(WeatherList)