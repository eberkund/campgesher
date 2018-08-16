/* global google */

// eslint-disable-next-line no-unused-vars
function initMap () {
    // Create a new StyledMapType object, passing it an array of styles,
    // and the name to be displayed on the map type control.
    var styledMapType = new google.maps.StyledMapType([
        {
            'elementType': 'labels',
            'stylers': [
                {
                    'visibility': 'off'
                },
                {
                    'color': '#f49f53'
                }
            ]
        },
        // {
        //     'featureType': 'landscape',
        //     'stylers': [
        //         {
        //             'color': '#f9ddc5'
        //         },
        //         {
        //             'lightness': -7
        //         }
        //     ]
        // },
        {
            'featureType': 'road',
            'stylers': [
                {
                    'color': '#e2585d'
                }
                // {
                //     "lightness": 43
                // }
            ]
        },
        {
            'featureType': 'poi.business',
            'stylers': [
                {
                    'color': '#645c20'
                },
                {
                    'lightness': 38
                }
            ]
        },
        {
            'featureType': 'water',
            'stylers': [
                {
                    'color': '#1994bf'
                },
                {
                    'saturation': -69
                },
                {
                    'gamma': 0.99
                },
                {
                    'lightness': 43
                }
            ]
        },
        {
            'featureType': 'road.local',
            'elementType': 'geometry.fill',
            'stylers': [
                {
                    'color': '#f19f53'
                },
                {
                    'weight': 1.3
                },
                {
                    'visibility': 'on'
                },
                {
                    'lightness': 16
                }
            ]
        },
        {
            'featureType': 'poi.business'
        },
        {
            'featureType': 'poi.park',
            'stylers': [
                {
                    'color': '#645c20'
                },
                {
                    'lightness': 39
                }
            ]
        },
        {
            'featureType': 'poi.school',
            'stylers': [
                {
                    'color': '#a95521'
                },
                {
                    'lightness': 35
                }
            ]
        },
        {},
        {
            'featureType': 'poi.medical',
            'elementType': 'geometry.fill',
            'stylers': [
                {
                    'color': '#813033'
                },
                {
                    'lightness': 38
                },
                {
                    'visibility': 'off'
                }
            ]
        },
        {
            'elementType': 'labels'
        },
        {
            'featureType': 'poi.sports_complex',
            'stylers': [
                {
                    'color': '#9e5916'
                },
                {
                    'lightness': 32
                }
            ]
        },
        {},
        {
            'featureType': 'poi.government',
            'stylers': [
                {
                    'color': '#9e5916'
                },
                {
                    'lightness': 46
                }
            ]
        },
        {
            'featureType': 'transit.station',
            'stylers': [
                {
                    'visibility': 'off'
                }
            ]
        },
        {
            'featureType': 'transit.line',
            'stylers': [
                {
                    'color': '#813033'
                },
                {
                    'lightness': 22
                }
            ]
        },
        {
            'featureType': 'transit',
            'stylers': [
                {
                    'lightness': 38
                }
            ]
        },
        {
            'featureType': 'road.local',
            'elementType': 'geometry.stroke',
            'stylers': [
                {
                    'color': '#f19f53'
                },
                {
                    'lightness': -10
                }
            ]
        }
    ], { name: 'Styled Map' })

    // Create a map object, and include the MapTypeId to add
    // to the map type control.
    var map = new google.maps.Map(document.getElementById('map'), {
        zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_CENTER
        },
        center: { lat: 44.7758898, lng: -77.3795555 },
        zoom: 10,
        draggable: false,
        disableDefaultUI: true,
        zoomControl: true,
        scaleControl: false
    })

    // Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set('styled_map', styledMapType)
    map.setMapTypeId('styled_map')
}
