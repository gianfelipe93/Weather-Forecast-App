import React, {Component} from 'react'

class GoogleMap extends Component {
    componentDidMount(){
        new google.maps.maps.Map(
            this.refs.map,
            {
                zoom:12,
                center: {
                    lat: this.props.lat,
                    lng: this.props.lon
                }
            }
        )
    }

    render() {
        return <div ref="map" />
    }
}

export default GoogleMap