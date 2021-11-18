ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32643").setExtent([638056.248517, 3459172.483316, 714626.711422, 3516806.905485]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PROXIMITYTOHOSPITALS_1 = new ol.format.GeoJSON();
var features_PROXIMITYTOHOSPITALS_1 = format_PROXIMITYTOHOSPITALS_1.readFeatures(json_PROXIMITYTOHOSPITALS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_PROXIMITYTOHOSPITALS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROXIMITYTOHOSPITALS_1.addFeatures(features_PROXIMITYTOHOSPITALS_1);
var lyr_PROXIMITYTOHOSPITALS_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PROXIMITYTOHOSPITALS_1, 
                style: style_PROXIMITYTOHOSPITALS_1,
                interactive: false,
    title: 'PROXIMITY TO HOSPITALS<br />\
    <img src="styles/legend/PROXIMITYTOHOSPITALS_1_0.png" /> 2 km<br />\
    <img src="styles/legend/PROXIMITYTOHOSPITALS_1_1.png" /> 4 km<br />\
    <img src="styles/legend/PROXIMITYTOHOSPITALS_1_2.png" /> 6 km<br />\
    <img src="styles/legend/PROXIMITYTOHOSPITALS_1_3.png" /> 8 km<br />\
    <img src="styles/legend/PROXIMITYTOHOSPITALS_1_4.png" /> >8 km<br />\
    <img src="styles/legend/PROXIMITYTOHOSPITALS_1_5.png" /> <br />'
        });
var lyr_ELEVATION_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "ELEVATION ",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ELEVATION_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8526709.372873, 3662379.617062, 8615424.822619, 3773720.829049]
                            })
                        });
var lyr_LITERACYRATE_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "LITERACY RATE ",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/LITERACYRATE_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8528047.540330, 3660367.331208, 8772025.411154, 3779687.317786]
                            })
                        });
var lyr_LULC_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "LULC",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/LULC_4.png",
    attributions: ' ',
                                projection: 'EPSG:32643',
                                alwaysInRange: true,
                                imageExtent: [652035.000000, 3457275.000000, 725985.000000, 3550365.000000]
                            })
                        });
var lyr_NDVI_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDVI ",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDVI_5.png",
    attributions: ' ',
                                projection: 'EPSG:32643',
                                alwaysInRange: true,
                                imageExtent: [652060.149187, 3457261.669516, 725963.370974, 3550360.533326]
                            })
                        });
var lyr_PASTLANDSLIDES_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "PAST LANDSLIDES ",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/PASTLANDSLIDES_6.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8527759.059581, 3662942.914280, 8613341.484103, 3773620.723375]
                            })
                        });
var lyr_POPULATIONDENSITY_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "POPULATION DENSITY ",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/POPULATIONDENSITY_7.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8528047.540330, 3660367.331208, 8772025.411154, 3779687.317786]
                            })
                        });
var lyr_PROXIMITYTOBUILTUP_8 = new ol.layer.Image({
                            opacity: 1,
                            title: "PROXIMITY TO BUILTUP ",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/PROXIMITYTOBUILTUP_8.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8522171.371133, 3659224.677939, 8619008.417147, 3777050.401750]
                            })
                        });
var lyr_PROXIMITYTODRAINAGE_9 = new ol.layer.Image({
                            opacity: 1,
                            title: "PROXIMITY TO DRAINAGE",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/PROXIMITYTODRAINAGE_9.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8527759.059570, 3662942.914206, 8613630.914767, 3773266.007525]
                            })
                        });
var lyr_PROXIMITYTORAILWAY_10 = new ol.layer.Image({
                            opacity: 1,
                            title: "PROXIMITY TO RAILWAY ",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/PROXIMITYTORAILWAY_10.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8522271.338485, 3659141.080772, 8619111.624006, 3777083.593392]
                            })
                        });
var lyr_PROXIMITYTOROAD_11 = new ol.layer.Image({
                            opacity: 1,
                            title: "PROXIMITY TO ROAD ",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/PROXIMITYTOROAD_11.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8522247.626140, 3659204.015078, 8619083.853557, 3777029.037151]
                            })
                        });
var lyr_RAINFALLMAP_12 = new ol.layer.Image({
                            opacity: 1,
                            title: "RAINFALL MAP ",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/RAINFALLMAP_12.png",
    attributions: ' ',
                                projection: 'EPSG:32643',
                                alwaysInRange: true,
                                imageExtent: [652060.149187, 3457283.671771, 725950.149187, 3550373.671771]
                            })
                        });
var lyr_SLOPEMAP_13 = new ol.layer.Image({
                            opacity: 1,
                            title: "SLOPE MAP",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SLOPEMAP_13.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8526709.372873, 3662379.617062, 8615424.822619, 3773720.829049]
                            })
                        });
var lyr_SOILTYPEMAP_14 = new ol.layer.Image({
                            opacity: 1,
                            title: "SOIL TYPE MAP",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SOILTYPEMAP_14.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8526627.716802, 3662394.817882, 8615683.309436, 3773816.457454]
                            })
                        });
var lyr_LANDSLIDEVULNERABILITY_15 = new ol.layer.Image({
                            opacity: 1,
                            title: "LANDSLIDE VULNERABILITY",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/LANDSLIDEVULNERABILITY_15.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8528047.540356, 3662942.914280, 8613540.909285, 3773844.068312]
                            })
                        });
var format_PastlandslideSpots_16 = new ol.format.GeoJSON();
var features_PastlandslideSpots_16 = format_PastlandslideSpots_16.readFeatures(json_PastlandslideSpots_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_PastlandslideSpots_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PastlandslideSpots_16.addFeatures(features_PastlandslideSpots_16);
var lyr_PastlandslideSpots_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PastlandslideSpots_16, 
                style: style_PastlandslideSpots_16,
                interactive: false,
                title: '<img src="styles/legend/PastlandslideSpots_16.png" /> Past landslide Spots'
            });
var format_road_17 = new ol.format.GeoJSON();
var features_road_17 = format_road_17.readFeatures(json_road_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_road_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_road_17.addFeatures(features_road_17);
var lyr_road_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_road_17, 
                style: style_road_17,
                interactive: false,
                title: '<img src="styles/legend/road_17.png" /> road'
            });
var format_railway_18 = new ol.format.GeoJSON();
var features_railway_18 = format_railway_18.readFeatures(json_railway_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_railway_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_railway_18.addFeatures(features_railway_18);
var lyr_railway_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_railway_18, 
                style: style_railway_18,
                interactive: false,
                title: '<img src="styles/legend/railway_18.png" /> railway'
            });
var format_Hospitals_19 = new ol.format.GeoJSON();
var features_Hospitals_19 = format_Hospitals_19.readFeatures(json_Hospitals_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_Hospitals_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hospitals_19.addFeatures(features_Hospitals_19);
var lyr_Hospitals_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hospitals_19, 
                style: style_Hospitals_19,
                interactive: false,
                title: '<img src="styles/legend/Hospitals_19.png" /> Hospitals'
            });
var format_MandiBoundary_20 = new ol.format.GeoJSON();
var features_MandiBoundary_20 = format_MandiBoundary_20.readFeatures(json_MandiBoundary_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_MandiBoundary_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MandiBoundary_20.addFeatures(features_MandiBoundary_20);
var lyr_MandiBoundary_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MandiBoundary_20, 
                style: style_MandiBoundary_20,
                interactive: false,
                title: '<img src="styles/legend/MandiBoundary_20.png" /> Mandi Boundary'
            });

lyr_OSMStandard_0.setVisible(true);lyr_PROXIMITYTOHOSPITALS_1.setVisible(true);lyr_ELEVATION_2.setVisible(true);lyr_LITERACYRATE_3.setVisible(true);lyr_LULC_4.setVisible(true);lyr_NDVI_5.setVisible(true);lyr_PASTLANDSLIDES_6.setVisible(true);lyr_POPULATIONDENSITY_7.setVisible(true);lyr_PROXIMITYTOBUILTUP_8.setVisible(true);lyr_PROXIMITYTODRAINAGE_9.setVisible(true);lyr_PROXIMITYTORAILWAY_10.setVisible(true);lyr_PROXIMITYTOROAD_11.setVisible(true);lyr_RAINFALLMAP_12.setVisible(true);lyr_SLOPEMAP_13.setVisible(true);lyr_SOILTYPEMAP_14.setVisible(true);lyr_LANDSLIDEVULNERABILITY_15.setVisible(true);lyr_PastlandslideSpots_16.setVisible(true);lyr_road_17.setVisible(true);lyr_railway_18.setVisible(true);lyr_Hospitals_19.setVisible(true);lyr_MandiBoundary_20.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_PROXIMITYTOHOSPITALS_1,lyr_ELEVATION_2,lyr_LITERACYRATE_3,lyr_LULC_4,lyr_NDVI_5,lyr_PASTLANDSLIDES_6,lyr_POPULATIONDENSITY_7,lyr_PROXIMITYTOBUILTUP_8,lyr_PROXIMITYTODRAINAGE_9,lyr_PROXIMITYTORAILWAY_10,lyr_PROXIMITYTOROAD_11,lyr_RAINFALLMAP_12,lyr_SLOPEMAP_13,lyr_SOILTYPEMAP_14,lyr_LANDSLIDEVULNERABILITY_15,lyr_PastlandslideSpots_16,lyr_road_17,lyr_railway_18,lyr_Hospitals_19,lyr_MandiBoundary_20];
lyr_PROXIMITYTOHOSPITALS_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'distance': 'distance', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_PastlandslideSpots_16.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'SLIDE_NO': 'SLIDE_NO', 'STATE': 'STATE', 'DISTRICT': 'DISTRICT', 'TOPOSHEET': 'TOPOSHEET', 'SLIDE_NAME': 'SLIDE_NAME', 'LONGITUDE': 'LONGITUDE', 'LATITUDE': 'LATITUDE', 'DEPTH': 'DEPTH', 'ACTIVITY': 'ACTIVITY', 'STYLE': 'STYLE', 'INITIATION': 'INITIATION', 'GEOLOGY': 'GEOLOGY', 'STRUCTURE': 'STRUCTURE', 'PHOTOS': 'PHOTOS', 'ABSTRACT': 'ABSTRACT', 'CITATION': 'CITATION', 'REPORT': 'REPORT', 'ENTRY_DATE': 'ENTRY_DATE', 'LENGTH': 'LENGTH', 'WIDTH': 'WIDTH', 'HEIGHT': 'HEIGHT', 'REMARKS': 'REMARKS', 'IMAGELANDS': 'IMAGELANDS', 'REPORTLAND': 'REPORTLAND', 'NH_SH_LOCA': 'NH_SH_LOCA', 'LS_AREA': 'LS_AREA', 'RUNOUT_DIS': 'RUNOUT_DIS', 'MATERIAL_T': 'MATERIAL_T', 'MOVEMENT_T': 'MOVEMENT_T', 'MOVEMENT_R': 'MOVEMENT_R', 'DISTRIBUTI': 'DISTRIBUTI', 'FAILURE_ME': 'FAILURE_ME', 'REACTIVATI': 'REACTIVATI', 'REACTIVA_1': 'REACTIVA_1', 'REACTIVA_2': 'REACTIVA_2', 'GEOMORPHOL': 'GEOMORPHOL', 'HYDROLOGIC': 'HYDROLOGIC', 'LANDUSE_LA': 'LANDUSE_LA', 'TRIGGERING': 'TRIGGERING', 'PERSONS_DE': 'PERSONS_DE', 'PEOPLE_AFF': 'PEOPLE_AFF', 'LIVESTOCK_': 'LIVESTOCK_', 'COMMUNICAT': 'COMMUNICAT', 'LANDUSE_AF': 'LANDUSE_AF', 'GEOSCIENTI': 'GEOSCIENTI', 'PREL_REMED': 'PREL_REMED', 'LS_VOLUME': 'LS_VOLUME', 'INFRASTRUC': 'INFRASTRUC', 'ALERT': 'ALERT', });
lyr_road_17.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'lanes': 'lanes', 'maxspeed': 'maxspeed', 'bridge': 'bridge', 'layer': 'layer', 'ref': 'ref', 'ref_old': 'ref_old', 'level': 'level', 'motorroad': 'motorroad', 'name': 'name', 'oneway': 'oneway', 'surface': 'surface', 'sac_scale': 'sac_scale', 'width': 'width', 'bicycle': 'bicycle', 'foot': 'foot', 'horse': 'horse', 'motorcar': 'motorcar', 'trail_visi': 'trail_visi', 'descriptio': 'descriptio', 'service': 'service', 'ski': 'ski', 'snowmobile': 'snowmobile', 'mtb_scale_': 'mtb_scale_', 'tracktype': 'tracktype', 'covered': 'covered', 'motor_vehi': 'motor_vehi', 'ref_old NH': 'ref_old NH', 'tunnel': 'tunnel', 'comment': 'comment', 'access': 'access', 'source_geo': 'source_geo', 'source_sur': 'source_sur', 'alt_name': 'alt_name', 'footway': 'footway', 'tactile_pa': 'tactile_pa', 'cutting': 'cutting', 'ramp_wheel': 'ramp_wheel', 'smoothness': 'smoothness', 'bridge_str': 'bridge_str', 'lit': 'lit', 'sidewalk': 'sidewalk', 'source_lan': 'source_lan', 'source_bri': 'source_bri', 'embankment': 'embankment', 'ford': 'ford', 'constructi': 'constructi', 'noname': 'noname', 'waterway': 'waterway', 'route': 'route', 'type': 'type', 'junction': 'junction', 'maxheight': 'maxheight', 'addr_stree': 'addr_stree', 'incline': 'incline', 'name_en': 'name_en', 'motorcycle': 'motorcycle', 'start_date': 'start_date', });
lyr_railway_18.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'date_start': 'date_start', 'gauge': 'gauge', 'railway': 'railway', 'source_geo': 'source_geo', 'usage': 'usage', 'name': 'name', 'bridge': 'bridge', 'layer': 'layer', 'embankment': 'embankment', 'source_bri': 'source_bri', 'service': 'service', });
lyr_Hospitals_19.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_MandiBoundary_20.set('fieldAliases', {'Id': 'Id', });
lyr_PROXIMITYTOHOSPITALS_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'distance': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_PastlandslideSpots_16.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'SLIDE_NO': 'TextEdit', 'STATE': 'TextEdit', 'DISTRICT': 'TextEdit', 'TOPOSHEET': 'TextEdit', 'SLIDE_NAME': 'TextEdit', 'LONGITUDE': 'TextEdit', 'LATITUDE': 'TextEdit', 'DEPTH': 'TextEdit', 'ACTIVITY': 'TextEdit', 'STYLE': 'TextEdit', 'INITIATION': 'TextEdit', 'GEOLOGY': 'TextEdit', 'STRUCTURE': 'TextEdit', 'PHOTOS': 'TextEdit', 'ABSTRACT': 'TextEdit', 'CITATION': 'TextEdit', 'REPORT': 'TextEdit', 'ENTRY_DATE': 'DateTime', 'LENGTH': 'TextEdit', 'WIDTH': 'TextEdit', 'HEIGHT': 'TextEdit', 'REMARKS': 'TextEdit', 'IMAGELANDS': 'TextEdit', 'REPORTLAND': 'TextEdit', 'NH_SH_LOCA': 'TextEdit', 'LS_AREA': 'TextEdit', 'RUNOUT_DIS': 'TextEdit', 'MATERIAL_T': 'TextEdit', 'MOVEMENT_T': 'TextEdit', 'MOVEMENT_R': 'TextEdit', 'DISTRIBUTI': 'TextEdit', 'FAILURE_ME': 'TextEdit', 'REACTIVATI': 'TextEdit', 'REACTIVA_1': 'TextEdit', 'REACTIVA_2': 'TextEdit', 'GEOMORPHOL': 'TextEdit', 'HYDROLOGIC': 'TextEdit', 'LANDUSE_LA': 'TextEdit', 'TRIGGERING': 'TextEdit', 'PERSONS_DE': 'TextEdit', 'PEOPLE_AFF': 'TextEdit', 'LIVESTOCK_': 'TextEdit', 'COMMUNICAT': 'TextEdit', 'LANDUSE_AF': 'TextEdit', 'GEOSCIENTI': 'TextEdit', 'PREL_REMED': 'TextEdit', 'LS_VOLUME': 'TextEdit', 'INFRASTRUC': 'TextEdit', 'ALERT': 'TextEdit', });
lyr_road_17.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'lanes': 'TextEdit', 'maxspeed': 'TextEdit', 'bridge': 'TextEdit', 'layer': 'TextEdit', 'ref': 'TextEdit', 'ref_old': 'TextEdit', 'level': 'TextEdit', 'motorroad': 'TextEdit', 'name': 'TextEdit', 'oneway': 'TextEdit', 'surface': 'TextEdit', 'sac_scale': 'TextEdit', 'width': 'TextEdit', 'bicycle': 'TextEdit', 'foot': 'TextEdit', 'horse': 'TextEdit', 'motorcar': 'TextEdit', 'trail_visi': 'TextEdit', 'descriptio': 'TextEdit', 'service': 'TextEdit', 'ski': 'TextEdit', 'snowmobile': 'TextEdit', 'mtb_scale_': 'TextEdit', 'tracktype': 'TextEdit', 'covered': 'TextEdit', 'motor_vehi': 'TextEdit', 'ref_old NH': 'TextEdit', 'tunnel': 'TextEdit', 'comment': 'TextEdit', 'access': 'TextEdit', 'source_geo': 'TextEdit', 'source_sur': 'TextEdit', 'alt_name': 'TextEdit', 'footway': 'TextEdit', 'tactile_pa': 'TextEdit', 'cutting': 'TextEdit', 'ramp_wheel': 'TextEdit', 'smoothness': 'TextEdit', 'bridge_str': 'TextEdit', 'lit': 'TextEdit', 'sidewalk': 'TextEdit', 'source_lan': 'TextEdit', 'source_bri': 'TextEdit', 'embankment': 'TextEdit', 'ford': 'TextEdit', 'constructi': 'TextEdit', 'noname': 'TextEdit', 'waterway': 'TextEdit', 'route': 'TextEdit', 'type': 'TextEdit', 'junction': 'TextEdit', 'maxheight': 'TextEdit', 'addr_stree': 'TextEdit', 'incline': 'TextEdit', 'name_en': 'TextEdit', 'motorcycle': 'TextEdit', 'start_date': 'TextEdit', });
lyr_railway_18.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'date_start': 'TextEdit', 'gauge': 'TextEdit', 'railway': 'TextEdit', 'source_geo': 'TextEdit', 'usage': 'TextEdit', 'name': 'TextEdit', 'bridge': 'TextEdit', 'layer': 'TextEdit', 'embankment': 'TextEdit', 'source_bri': 'TextEdit', 'service': 'TextEdit', });
lyr_Hospitals_19.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_MandiBoundary_20.set('fieldImages', {'Id': 'Range', });
lyr_PROXIMITYTOHOSPITALS_1.set('fieldLabels', {'OBJECTID': 'no label', 'distance': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_PastlandslideSpots_16.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'SLIDE_NO': 'no label', 'STATE': 'no label', 'DISTRICT': 'no label', 'TOPOSHEET': 'no label', 'SLIDE_NAME': 'no label', 'LONGITUDE': 'no label', 'LATITUDE': 'no label', 'DEPTH': 'no label', 'ACTIVITY': 'no label', 'STYLE': 'no label', 'INITIATION': 'no label', 'GEOLOGY': 'no label', 'STRUCTURE': 'no label', 'PHOTOS': 'no label', 'ABSTRACT': 'no label', 'CITATION': 'no label', 'REPORT': 'no label', 'ENTRY_DATE': 'no label', 'LENGTH': 'no label', 'WIDTH': 'no label', 'HEIGHT': 'no label', 'REMARKS': 'no label', 'IMAGELANDS': 'no label', 'REPORTLAND': 'no label', 'NH_SH_LOCA': 'no label', 'LS_AREA': 'no label', 'RUNOUT_DIS': 'no label', 'MATERIAL_T': 'no label', 'MOVEMENT_T': 'no label', 'MOVEMENT_R': 'no label', 'DISTRIBUTI': 'no label', 'FAILURE_ME': 'no label', 'REACTIVATI': 'no label', 'REACTIVA_1': 'no label', 'REACTIVA_2': 'no label', 'GEOMORPHOL': 'no label', 'HYDROLOGIC': 'no label', 'LANDUSE_LA': 'no label', 'TRIGGERING': 'no label', 'PERSONS_DE': 'no label', 'PEOPLE_AFF': 'no label', 'LIVESTOCK_': 'no label', 'COMMUNICAT': 'no label', 'LANDUSE_AF': 'no label', 'GEOSCIENTI': 'no label', 'PREL_REMED': 'no label', 'LS_VOLUME': 'no label', 'INFRASTRUC': 'no label', 'ALERT': 'no label', });
lyr_road_17.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'lanes': 'no label', 'maxspeed': 'no label', 'bridge': 'no label', 'layer': 'no label', 'ref': 'no label', 'ref_old': 'no label', 'level': 'no label', 'motorroad': 'no label', 'name': 'no label', 'oneway': 'no label', 'surface': 'no label', 'sac_scale': 'no label', 'width': 'no label', 'bicycle': 'no label', 'foot': 'no label', 'horse': 'no label', 'motorcar': 'no label', 'trail_visi': 'no label', 'descriptio': 'no label', 'service': 'no label', 'ski': 'no label', 'snowmobile': 'no label', 'mtb_scale_': 'no label', 'tracktype': 'no label', 'covered': 'no label', 'motor_vehi': 'no label', 'ref_old NH': 'no label', 'tunnel': 'no label', 'comment': 'no label', 'access': 'no label', 'source_geo': 'no label', 'source_sur': 'no label', 'alt_name': 'no label', 'footway': 'no label', 'tactile_pa': 'no label', 'cutting': 'no label', 'ramp_wheel': 'no label', 'smoothness': 'no label', 'bridge_str': 'no label', 'lit': 'no label', 'sidewalk': 'no label', 'source_lan': 'no label', 'source_bri': 'no label', 'embankment': 'no label', 'ford': 'no label', 'constructi': 'no label', 'noname': 'no label', 'waterway': 'no label', 'route': 'no label', 'type': 'no label', 'junction': 'no label', 'maxheight': 'no label', 'addr_stree': 'no label', 'incline': 'no label', 'name_en': 'no label', 'motorcycle': 'no label', 'start_date': 'no label', });
lyr_railway_18.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'date_start': 'no label', 'gauge': 'no label', 'railway': 'no label', 'source_geo': 'no label', 'usage': 'no label', 'name': 'no label', 'bridge': 'no label', 'layer': 'no label', 'embankment': 'no label', 'source_bri': 'no label', 'service': 'no label', });
lyr_Hospitals_19.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_MandiBoundary_20.set('fieldLabels', {'Id': 'no label', });
lyr_MandiBoundary_20.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});