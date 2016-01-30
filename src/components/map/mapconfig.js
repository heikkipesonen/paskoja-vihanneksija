export default {
  disableDefaultUI:true,
  center: new google.maps.LatLng(60.162863613884376, 24.936561584472656),
  zoom:8,
  minZoom:1,
  styles:[
    {
        'featureType': 'all',
        'elementType': 'geometry',
        'stylers': [
            {
                'color': '#e5efc1'
            }
        ]
    },
    {
        'featureType': 'administrative.province',
        'elementType': 'all',
        'stylers': [
            {
                'visibility': 'off'
            }
        ]
    },
    {
        'featureType': 'landscape',
        'elementType': 'all',
        'stylers': [
            {
                'saturation': -100
            },
            {
                'lightness': 65
            },
            {
                'visibility': 'on'
            }
        ]
    },
    {
        'featureType': 'poi',
        'elementType': 'all',
        'stylers': [
            {
                'saturation': -100
            },
            {
                'lightness': 51
            },
            {
                'visibility': 'simplified'
            }
        ]
    },
    {
        'featureType': 'road.highway',
        'elementType': 'all',
        'stylers': [
            {
                'saturation': -100
            },
            {
                'visibility': 'simplified'
            }
        ]
    },
    {
        'featureType': 'road.arterial',
        'elementType': 'all',
        'stylers': [
            {
                'saturation': -100
            },
            {
                'lightness': 30
            },
            {
                'visibility': 'on'
            }
        ]
    },
    {
        'featureType': 'road.local',
        'elementType': 'all',
        'stylers': [
            {
                'saturation': -100
            },
            {
                'lightness': 40
            },
            {
                'visibility': 'on'
            }
        ]
    },
    {
        'featureType': 'transit',
        'elementType': 'all',
        'stylers': [
            {
                'saturation': -100
            },
            {
                'visibility': 'simplified'
            }
        ]
    },
    {
        'featureType': 'water',
        'elementType': 'geometry',
        'stylers': [
            {
                'hue': '#ffff00'
            },
            {
                'lightness': -25
            },
            {
                'saturation': -97
            }
        ]
    },
    {
        'featureType': 'water',
        'elementType': 'labels',
        'stylers': [
            {
                'visibility': 'on'
            },
            {
                'lightness': -25
            },
            {
                'saturation': -100
            }
        ]
    }
]
//   styles:[
//     {
//         'featureType': 'all',
//         'elementType': 'labels.text.fill',
//         'stylers': [
//             {
//                 'saturation': 36
//             },
//             {
//                 'color': '#000000'
//             },
//             {
//                 'lightness': '-100'
//             }
//         ]
//     },
//     {
//         'featureType': 'all',
//         'elementType': 'labels.text.stroke',
//         'stylers': [
//             {
//                 'visibility': 'off'
//             },
//             {
//                 'color': '#ffffff'
//             },
//             {
//                 'lightness': 16
//             }
//         ]
//     },
//     {
//         'featureType': 'all',
//         'elementType': 'labels.icon',
//         'stylers': [
//             {
//                 'visibility': 'off'
//             }
//         ]
//     },
//     {
//         'featureType': 'administrative',
//         'elementType': 'geometry.fill',
//         'stylers': [
//             {
//                 'color': '#fefefe'
//             },
//             {
//                 'lightness': 20
//             }
//         ]
//     },
//     {
//         'featureType': 'administrative',
//         'elementType': 'geometry.stroke',
//         'stylers': [
//             {
//                 'color': '#fefefe'
//             },
//             {
//                 'lightness': 17
//             },
//             {
//                 'weight': 1.2
//             }
//         ]
//     },
//     {
//         'featureType': 'landscape',
//         'elementType': 'geometry',
//         'stylers': [
//             {
//                 'color': '#f5f5f5'
//             },
//             {
//                 'lightness': 20
//             }
//         ]
//     },
//     {
//         'featureType': 'poi',
//         'elementType': 'geometry',
//         'stylers': [
//             {
//                 'color': '#f5f5f5'
//             },
//             {
//                 'lightness': 21
//             }
//         ]
//     },
//     {
//         'featureType': 'poi.park',
//         'elementType': 'geometry',
//         'stylers': [
//             {
//                 'color': '#dedede'
//             },
//             {
//                 'lightness': 21
//             }
//         ]
//     },
//     {
//         'featureType': 'road.highway',
//         'elementType': 'geometry.fill',
//         'stylers': [
//             {
//                 'color': '#ffffff'
//             },
//             {
//                 'lightness': 17
//             }
//         ]
//     },
//     {
//         'featureType': 'road.highway',
//         'elementType': 'geometry.stroke',
//         'stylers': [
//             {
//                 'color': '#0a0a0a'
//             },
//             {
//                 'lightness': '-20'
//             },
//             {
//                 'weight': 0.2
//             }
//         ]
//     },
//     {
//         'featureType': 'road.arterial',
//         'elementType': 'geometry',
//         'stylers': [
//             {
//                 'color': '#808080'
//             },
//             {
//                 'lightness': 18
//             }
//         ]
//     },
//     {
//         'featureType': 'road.local',
//         'elementType': 'geometry',
//         'stylers': [
//             {
//                 'color': '#828282'
//             },
//             {
//                 'lightness': 16
//             }
//         ]
//     },
//     {
//         'featureType': 'transit',
//         'elementType': 'geometry',
//         'stylers': [
//             {
//                 'color': '#ffffff'
//             },
//             {
//                 'lightness': 19
//             }
//         ]
//     },
//     {
//         'featureType': 'water',
//         'elementType': 'geometry',
//         'stylers': [
//             {
//                 'color': '#242424'
//             },
//             {
//                 'lightness': 17
//             }
//         ]
//     }
// ]
  // styles:[{'featureType':'landscape','stylers':[{'saturation':-100},{'lightness':65},{'visibility':'on'}]},{'featureType':'poi','stylers':[{'saturation':-100},{'lightness':51},{'visibility':'simplified'}]},{'featureType':'road.highway','stylers':[{'saturation':-100},{'visibility':'simplified'}]},{'featureType':'road.arterial','stylers':[{'saturation':-100},{'lightness':30},{'visibility':'on'}]},{'featureType':'road.local','stylers':[{'saturation':-100},{'lightness':40},{'visibility':'on'}]},{'featureType':'transit','stylers':[{'saturation':-100},{'visibility':'simplified'}]},{'featureType':'administrative.province','stylers':[{'visibility':'off'}]},{'featureType':'water','elementType':'labels','stylers':[{'visibility':'on'},{'lightness':-25},{'saturation':-100}]},{'featureType':'water','elementType':'geometry','stylers':[{'hue':'#ffff00'},{'lightness':-25},{'saturation':-97}]}]
  // styles:[{'featureType':'administrative','elementType':'labels.text.fill','stylers':[{'color':'#444444'}]},{'featureType':'landscape','elementType':'all','stylers':[{'color':'#f2f2f2'}]},{'featureType':'poi','elementType':'all','stylers':[{'visibility':'off'}]},{'featureType':'poi.government','elementType':'labels.text.fill','stylers':[{'color':'#b43b3b'}]},{'featureType':'poi.park','elementType':'geometry.fill','stylers':[{'hue':'#ff0000'}]},{'featureType':'road','elementType':'all','stylers':[{'saturation':-100},{'lightness':45}]},{'featureType':'road','elementType':'geometry.fill','stylers':[{'lightness':'8'},{'color':'#bcbec0'}]},{'featureType':'road','elementType':'labels.text.fill','stylers':[{'color':'#5b5b5b'}]},{'featureType':'road.highway','elementType':'all','stylers':[{'visibility':'simplified'}]},{'featureType':'road.arterial','elementType':'labels.icon','stylers':[{'visibility':'off'}]},{'featureType':'transit','elementType':'all','stylers':[{'visibility':'off'}]},{'featureType':'water','elementType':'all','stylers':[{'color':'#7cb3c9'},{'visibility':'on'}]},{'featureType':'water','elementType':'geometry.fill','stylers':[{'color':'#abb9c0'}]},{'featureType':'water','elementType':'labels.text','stylers':[{'color':'#fff1f1'},{'visibility':'off'}]}]
  // mapTypeId:'toner',
  // mapTypeControlOptions:{
  // 	mapTypeIds: ['toner']
  // }
  // styles: [
  //     {
  //         'featureType': 'all',
  //         'elementType': 'labels.text.fill',
  //         'stylers': [
  //             {
  //                 'saturation': 36
  //             },
  //             {
  //                 'color': '#000000'
  //             },
  //             {
  //                 'lightness': 40
  //             }
  //         ]
  //     },
  //     {
  //         'featureType': 'all',
  //         'elementType': 'labels.text.stroke',
  //         'stylers': [
  //             {
  //                 'visibility': 'on'
  //             },
  //             {
  //                 'color': '#000000'
  //             },
  //             {
  //                 'lightness': 16
  //             }
  //         ]
  //     },
  //     {
  //         'featureType': 'all',
  //         'elementType': 'labels.icon',
  //         'stylers': [
  //             {
  //                 'visibility': 'off'
  //             }
  //         ]
  //     },
  //     {
  //         'featureType': 'administrative',
  //         'elementType': 'geometry.fill',
  //         'stylers': [
  //             {
  //                 'color': '#000000'
  //             },
  //             {
  //                 'lightness': '20'
  //             }
  //         ]
  //     },
  //     {
  //         'featureType': 'administrative',
  //         'elementType': 'geometry.stroke',
  //         'stylers': [
  //             {
  //                 'color': '#000000'
  //             },
  //             {
  //                 'lightness': 17
  //             },
  //             {
  //                 'weight': 1.2
  //             }
  //         ]
  //     },
  //     {
  //         'featureType': 'administrative.locality',
  //         'elementType': 'labels.text',
  //         'stylers': [
  //             {
  //                 'weight': '0.01'
  //             },
  //             {
  //                 'lightness': '100'
  //             }
  //         ]
  //     },
  //     {
  //         'featureType': 'administrative.neighborhood',
  //         'elementType': 'labels.text',
  //         'stylers': [
  //             {
  //                 'lightness': '100'
  //             },
  //             {
  //                 'saturation': '-100'
  //             },
  //             {
  //                 'weight': '0.01'
  //             },
  //             {
  //                 'visibility': 'simplified'
  //             }
  //         ]
  //     },
  //     {
  //         'featureType': 'landscape',
  //         'elementType': 'geometry',
  //         'stylers': [
  //             {
  //                 'color': '#424242'
  //             },
  //             {
  //                 'lightness': '15'
  //             }
  //         ]
  //     },
  //     {
  //         'featureType': 'poi',
  //         'elementType': 'geometry',
  //         'stylers': [
  //             {
  //                 'color': '#565555'
  //             },
  //             {
  //                 'lightness': 21
  //             }
  //         ]
  //     },
  //     {
  //         'featureType': 'road.highway',
  //         'elementType': 'geometry.fill',
  //         'stylers': [
  //             {
  //                 'color': '#e0e0e0'
  //             },
  //             {
  //                 'lightness': '10'
  //             }
  //         ]
  //     },
  //     {
  //         'featureType': 'road.highway',
  //         'elementType': 'geometry.stroke',
  //         'stylers': [
  //             {
  //                 'color': '#e4e4e4'
  //             },
  //             {
  //                 'lightness': 29
  //             },
  //             {
  //                 'weight': '0.01'
  //             }
  //         ]
  //     },
  //     {
  //         'featureType': 'road.arterial',
  //         'elementType': 'geometry',
  //         'stylers': [
  //             {
  //                 'color': '#afafaf'
  //             },
  //             {
  //                 'lightness': '10'
  //             }
  //         ]
  //     },
  //     {
  //         'featureType': 'road.arterial',
  //         'elementType': 'labels.text.fill',
  //         'stylers': [
  //             {
  //                 'weight': '0.01'
  //             },
  //             {
  //                 'color': '#ffdd00'
  //             }
  //         ]
  //     },
  //     {
  //         'featureType': 'road.local',
  //         'elementType': 'geometry',
  //         'stylers': [
  //             {
  //                 'color': '#c5c4c4'
  //             },
  //             {
  //                 'lightness': '11'
  //             },
  //             {
  //                 'gamma': '1'
  //             }
  //         ]
  //     },
  //     {
  //         'featureType': 'road.local',
  //         'elementType': 'labels.text.stroke',
  //         'stylers': [
  //             {
  //                 'weight': '0.01'
  //             }
  //         ]
  //     },
  //     {
  //         'featureType': 'transit',
  //         'elementType': 'geometry',
  //         'stylers': [
  //             {
  //                 'color': '#b2b2b2'
  //             },
  //             {
  //                 'lightness': 19
  //             }
  //         ]
  //     },
  //     {
  //         'featureType': 'water',
  //         'elementType': 'geometry',
  //         'stylers': [
  //             {
  //                 'lightness': '-100'
  //             },
  //             {
  //                 'visibility': 'on'
  //             },
  //             {
  //                 'color': '#222222'
  //             }
  //         ]
  //     }
  // ]
  //
  //
  // styles: [
  //   {
  //       'featureType': 'all',
  //       'elementType': 'geometry.fill',
  //       'stylers': [
  //           {
  //               'weight': '0.53'
  //           },
  //           {
  //               'gamma': '1.21'
  //           },
  //           {
  //               'lightness': '-56'
  //           },
  //           {
  //               'saturation': '-32'
  //           },
  //           {
  //               'visibility': 'on'
  //           },
  //           {
  //               'color': '#000000'
  //           }
  //       ]
  //   },
  //   {
  //       'featureType': 'all',
  //       'elementType': 'geometry.stroke',
  //       'stylers': [
  //           {
  //               'lightness': '-68'
  //           },
  //           {
  //               'visibility': 'on'
  //           },
  //           {
  //               'weight': '0.57'
  //           }
  //       ]
  //   },
  //   {
  //       'featureType': 'all',
  //       'elementType': 'labels.text.fill',
  //       'stylers': [
  //           {
  //               'saturation': 36
  //           },
  //           {
  //               'color': '#000000'
  //           },
  //           {
  //               'lightness': 40
  //           },
  //           {
  //               'visibility': 'on'
  //           }
  //       ]
  //   },
  //   {
  //       'featureType': 'all',
  //       'elementType': 'labels.text.stroke',
  //       'stylers': [
  //           {
  //               'visibility': 'off'
  //           },
  //           {
  //               'color': '#ffffff'
  //           },
  //           {
  //               'lightness': 16
  //           }
  //       ]
  //   },
  //   {
  //       'featureType': 'all',
  //       'elementType': 'labels.icon',
  //       'stylers': [
  //           {
  //               'visibility': 'on'
  //           },
  //           {
  //               'saturation': '5'
  //           },
  //           {
  //               'lightness': '0'
  //           }
  //       ]
  //   },
  //   {
  //       'featureType': 'administrative',
  //       'elementType': 'geometry.fill',
  //       'stylers': [
  //           {
  //               'color': '#fefefe'
  //           },
  //           {
  //               'lightness': 20
  //           }
  //       ]
  //   },
  //   {
  //       'featureType': 'administrative',
  //       'elementType': 'geometry.stroke',
  //       'stylers': [
  //           {
  //               'color': '#fefefe'
  //           },
  //           {
  //               'lightness': '-48'
  //           },
  //           {
  //               'weight': 1.2
  //           },
  //           {
  //               'visibility': 'on'
  //           }
  //       ]
  //   },
  //   {
  //       'featureType': 'administrative.land_parcel',
  //       'elementType': 'geometry.stroke',
  //       'stylers': [
  //           {
  //               'visibility': 'off'
  //           }
  //       ]
  //   },
  //   {
  //       'featureType': 'landscape',
  //       'elementType': 'geometry',
  //       'stylers': [
  //           {
  //               'color': '#ffffff'
  //           },
  //           {
  //               'lightness': '-10'
  //           }
  //       ]
  //   },
  //   {
  //       'featureType': 'landscape.natural.terrain',
  //       'elementType': 'geometry.fill',
  //       'stylers': [
  //           {
  //               'visibility': 'on'
  //           },
  //           {
  //               'weight': '2.96'
  //           },
  //           {
  //               'lightness': '-17'
  //           }
  //       ]
  //   },
  //   {
  //       'featureType': 'landscape.natural.terrain',
  //       'elementType': 'geometry.stroke',
  //       'stylers': [
  //           {
  //               'lightness': '0'
  //           },
  //           {
  //               'visibility': 'off'
  //           }
  //       ]
  //   },
  //   {
  //       'featureType': 'poi',
  //       'elementType': 'geometry',
  //       'stylers': [
  //           {
  //               'color': '#f5f5f5'
  //           },
  //           {
  //               'lightness': '-28'
  //           }
  //       ]
  //   },
  //   {
  //       'featureType': 'poi.park',
  //       'elementType': 'geometry',
  //       'stylers': [
  //           {
  //               'color': '#dedede'
  //           },
  //           {
  //               'lightness': '-27'
  //           }
  //       ]
  //   },
  //   {
  //       'featureType': 'road.highway',
  //       'elementType': 'geometry.fill',
  //       'stylers': [
  //           {
  //               'lightness': '-51'
  //           },
  //           {
  //               'visibility': 'off'
  //           },
  //           {
  //               'hue': '#ff0000'
  //           }
  //       ]
  //   },
  //   {
  //       'featureType': 'road.highway',
  //       'elementType': 'geometry.stroke',
  //       'stylers': [
  //           {
  //               'color': '#000000'
  //           },
  //           {
  //               'lightness': '24'
  //           },
  //           {
  //               'weight': '0.01'
  //           },
  //           {
  //               'visibility': 'on'
  //           },
  //           {
  //               'saturation': '24'
  //           },
  //           {
  //               'gamma': '0.00'
  //           }
  //       ]
  //   },
  //   {
  //       'featureType': 'road.arterial',
  //       'elementType': 'geometry',
  //       'stylers': [
  //           {
  //               'color': '#515151'
  //           },
  //           {
  //               'lightness': '-46'
  //           }
  //       ]
  //   },
  //   {
  //       'featureType': 'road.local',
  //       'elementType': 'geometry',
  //       'stylers': [
  //           {
  //               'color': '#d1d1d1'
  //           },
  //           {
  //               'lightness': '-50'
  //           }
  //       ]
  //   },
  //   {
  //       'featureType': 'transit',
  //       'elementType': 'geometry',
  //       'stylers': [
  //           {
  //               'color': '#f2f2f2'
  //           },
  //           {
  //               'lightness': '-17'
  //           }
  //       ]
  //   },
  //   {
  //       'featureType': 'water',
  //       'elementType': 'geometry',
  //       'stylers': [
  //           {
  //               'color': '#000000'
  //           },
  //           {
  //               'lightness': '28'
  //           },
  //           {
  //               'saturation': '-97'
  //           }
  //       ]
  //   }
  // ]
  // styles:[{'featureType':'landscape.natural','elementType':'geometry.fill','stylers':[{'visibility':'on'},{'color':'#e0efef'}]},{'featureType':'poi','elementType':'geometry.fill','stylers':[{'visibility':'on'},{'hue':'#1900ff'},{'color':'#c0e8e8'}]},{'featureType':'road','elementType':'geometry','stylers':[{'lightness':100},{'visibility':'simplified'}]},{'featureType':'road','elementType':'labels','stylers':[{'visibility':'off'}]},{'featureType':'transit.line','elementType':'geometry','stylers':[{'visibility':'on'},{'lightness':700}]},{'featureType':'water','elementType':'all','stylers':[{'color':'#7dcdcd'}]}]
  // styles:[{'elementType':'geometry','stylers':[{'hue':'#ff4400'},{'saturation':-68},{'lightness':-4},{'gamma':0.72}]},{'featureType':'road','elementType':'labels.icon'},{'featureType':'landscape.man_made','elementType':'geometry','stylers':[{'hue':'#0077ff'},{'gamma':3.1}]},{'featureType':'water','stylers':[{'hue':'#00ccff'},{'gamma':0.44},{'saturation':-33}]},{'featureType':'poi.park','stylers':[{'hue':'#44ff00'},{'saturation':-23}]},{'featureType':'water','elementType':'labels.text.fill','stylers':[{'hue':'#007fff'},{'gamma':0.77},{'saturation':65},{'lightness':99}]},{'featureType':'water','elementType':'labels.text.stroke','stylers':[{'gamma':0.11},{'weight':5.6},{'saturation':99},{'hue':'#0091ff'},{'lightness':-86}]},{'featureType':'transit.line','elementType':'geometry','stylers':[{'lightness':-48},{'hue':'#ff5e00'},{'gamma':1.2},{'saturation':-23}]},{'featureType':'transit','elementType':'labels.text.stroke','stylers':[{'saturation':-64},{'hue':'#ff9100'},{'lightness':16},{'gamma':0.47},{'weight':2.7}]}]
  // styles:[{'featureType':'administrative','stylers':[{'visibility':'off'}]},{'featureType':'poi','stylers':[{'visibility':'simplified'}]},{'featureType':'road','stylers':[{'visibility':'simplified'}]},{'featureType':'water','stylers':[{'visibility':'simplified'}]},{'featureType':'transit','stylers':[{'visibility':'simplified'}]},{'featureType':'landscape','stylers':[{'visibility':'simplified'}]},{'featureType':'road.highway','stylers':[{'visibility':'off'}]},{'featureType':'road.local','stylers':[{'visibility':'on'}]},{'featureType':'road.highway','elementType':'geometry','stylers':[{'visibility':'on'}]},{'featureType':'water','stylers':[{'color':'#84afa3'},{'lightness':52}]},{'stylers':[{'saturation':-77}]},{'featureType':'road'}]
};
