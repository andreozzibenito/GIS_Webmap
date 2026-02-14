var wms_layers = [];


        var lyr_Basemap_0 = new ol.layer.Tile({
            'title': 'Base map',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png'
            })
        });
var format_Cityinformation_1 = new ol.format.GeoJSON();
var features_Cityinformation_1 = format_Cityinformation_1.readFeatures(json_Cityinformation_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cityinformation_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cityinformation_1.addFeatures(features_Cityinformation_1);
var lyr_Cityinformation_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cityinformation_1, 
                style: style_Cityinformation_1,
                popuplayertitle: 'City information',
                interactive: true,
                title: '<img src="styles/legend/Cityinformation_1.png" /> City information'
            });
var format_AnnualglobalhorizontalirradiationkWhm_2 = new ol.format.GeoJSON();
var features_AnnualglobalhorizontalirradiationkWhm_2 = format_AnnualglobalhorizontalirradiationkWhm_2.readFeatures(json_AnnualglobalhorizontalirradiationkWhm_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnnualglobalhorizontalirradiationkWhm_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnnualglobalhorizontalirradiationkWhm_2.addFeatures(features_AnnualglobalhorizontalirradiationkWhm_2);
var lyr_AnnualglobalhorizontalirradiationkWhm_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnnualglobalhorizontalirradiationkWhm_2, 
                style: style_AnnualglobalhorizontalirradiationkWhm_2,
                popuplayertitle: 'Annual global horizontal irradiation [kWh/m²]',
                interactive: true,
    title: 'Annual global horizontal irradiation [kWh/m²]<br />\
    <img src="styles/legend/AnnualglobalhorizontalirradiationkWhm_2_0.png" /> 0 - 599<br />\
    <img src="styles/legend/AnnualglobalhorizontalirradiationkWhm_2_1.png" /> 600 - 1199<br />\
    <img src="styles/legend/AnnualglobalhorizontalirradiationkWhm_2_2.png" /> 1200 - 1799<br />\
    <img src="styles/legend/AnnualglobalhorizontalirradiationkWhm_2_3.png" /> 1800 - 2399<br />\
    <img src="styles/legend/AnnualglobalhorizontalirradiationkWhm_2_4.png" /> > 2400<br />' });
var format_AnnualHeatingDegreeDaysHDD_3 = new ol.format.GeoJSON();
var features_AnnualHeatingDegreeDaysHDD_3 = format_AnnualHeatingDegreeDaysHDD_3.readFeatures(json_AnnualHeatingDegreeDaysHDD_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnnualHeatingDegreeDaysHDD_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnnualHeatingDegreeDaysHDD_3.addFeatures(features_AnnualHeatingDegreeDaysHDD_3);
var lyr_AnnualHeatingDegreeDaysHDD_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnnualHeatingDegreeDaysHDD_3, 
                style: style_AnnualHeatingDegreeDaysHDD_3,
                popuplayertitle: 'Annual Heating Degree Days (HDD)',
                interactive: true,
    title: 'Annual Heating Degree Days (HDD)<br />\
    <img src="styles/legend/AnnualHeatingDegreeDaysHDD_3_0.png" /> 0 - 799<br />\
    <img src="styles/legend/AnnualHeatingDegreeDaysHDD_3_1.png" /> 800 - 1599<br />\
    <img src="styles/legend/AnnualHeatingDegreeDaysHDD_3_2.png" /> 1600 - 2399<br />\
    <img src="styles/legend/AnnualHeatingDegreeDaysHDD_3_3.png" /> 2400 - 3199<br />\
    <img src="styles/legend/AnnualHeatingDegreeDaysHDD_3_4.png" /> > 3200<br />' });
var format_AnnualCoolingDegreeDaysCDD_4 = new ol.format.GeoJSON();
var features_AnnualCoolingDegreeDaysCDD_4 = format_AnnualCoolingDegreeDaysCDD_4.readFeatures(json_AnnualCoolingDegreeDaysCDD_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnnualCoolingDegreeDaysCDD_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnnualCoolingDegreeDaysCDD_4.addFeatures(features_AnnualCoolingDegreeDaysCDD_4);
var lyr_AnnualCoolingDegreeDaysCDD_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnnualCoolingDegreeDaysCDD_4, 
                style: style_AnnualCoolingDegreeDaysCDD_4,
                popuplayertitle: 'Annual Cooling Degree Days (CDD)',
                interactive: true,
    title: 'Annual Cooling Degree Days (CDD)<br />\
    <img src="styles/legend/AnnualCoolingDegreeDaysCDD_4_0.png" /> 0 - 349<br />\
    <img src="styles/legend/AnnualCoolingDegreeDaysCDD_4_1.png" /> 350 - 699<br />\
    <img src="styles/legend/AnnualCoolingDegreeDaysCDD_4_2.png" /> 700 - 1049<br />\
    <img src="styles/legend/AnnualCoolingDegreeDaysCDD_4_3.png" /> 1050 - 1399<br />\
    <img src="styles/legend/AnnualCoolingDegreeDaysCDD_4_4.png" /> > 1400<br />' });
var format_AveragesoilthermalconductivityWmK_5 = new ol.format.GeoJSON();
var features_AveragesoilthermalconductivityWmK_5 = format_AveragesoilthermalconductivityWmK_5.readFeatures(json_AveragesoilthermalconductivityWmK_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AveragesoilthermalconductivityWmK_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AveragesoilthermalconductivityWmK_5.addFeatures(features_AveragesoilthermalconductivityWmK_5);
var lyr_AveragesoilthermalconductivityWmK_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AveragesoilthermalconductivityWmK_5, 
                style: style_AveragesoilthermalconductivityWmK_5,
                popuplayertitle: 'Average soil thermal conductivity [W/m*K]',
                interactive: true,
    title: 'Average soil thermal conductivity [W/m*K]<br />\
    <img src="styles/legend/AveragesoilthermalconductivityWmK_5_0.png" /> 0 - 1.24<br />\
    <img src="styles/legend/AveragesoilthermalconductivityWmK_5_1.png" /> 1.25 - 2.49<br />\
    <img src="styles/legend/AveragesoilthermalconductivityWmK_5_2.png" /> 2.5 - 3.74<br />\
    <img src="styles/legend/AveragesoilthermalconductivityWmK_5_3.png" /> 3.75 - 4.99<br />\
    <img src="styles/legend/AveragesoilthermalconductivityWmK_5_4.png" /> > 5<br />' });
var format_AveragesoilvolumetricheatcapacityMJmK_6 = new ol.format.GeoJSON();
var features_AveragesoilvolumetricheatcapacityMJmK_6 = format_AveragesoilvolumetricheatcapacityMJmK_6.readFeatures(json_AveragesoilvolumetricheatcapacityMJmK_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AveragesoilvolumetricheatcapacityMJmK_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AveragesoilvolumetricheatcapacityMJmK_6.addFeatures(features_AveragesoilvolumetricheatcapacityMJmK_6);
var lyr_AveragesoilvolumetricheatcapacityMJmK_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AveragesoilvolumetricheatcapacityMJmK_6, 
                style: style_AveragesoilvolumetricheatcapacityMJmK_6,
                popuplayertitle: 'Average soil volumetric heat capacity  [MJ/m³*K]',
                interactive: true,
    title: 'Average soil volumetric heat capacity  [MJ/m³*K]<br />\
    <img src="styles/legend/AveragesoilvolumetricheatcapacityMJmK_6_0.png" /> 0 - 0.69<br />\
    <img src="styles/legend/AveragesoilvolumetricheatcapacityMJmK_6_1.png" /> 0.7 - 1.39<br />\
    <img src="styles/legend/AveragesoilvolumetricheatcapacityMJmK_6_2.png" /> 1.4 - 2.09<br />\
    <img src="styles/legend/AveragesoilvolumetricheatcapacityMJmK_6_3.png" /> 2.1 - 2.79<br />\
    <img src="styles/legend/AveragesoilvolumetricheatcapacityMJmK_6_4.png" /> > 2.8<br />' });
var format_AverageannualthermalenergydemandkWh_7 = new ol.format.GeoJSON();
var features_AverageannualthermalenergydemandkWh_7 = format_AverageannualthermalenergydemandkWh_7.readFeatures(json_AverageannualthermalenergydemandkWh_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AverageannualthermalenergydemandkWh_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AverageannualthermalenergydemandkWh_7.addFeatures(features_AverageannualthermalenergydemandkWh_7);
var lyr_AverageannualthermalenergydemandkWh_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AverageannualthermalenergydemandkWh_7, 
                style: style_AverageannualthermalenergydemandkWh_7,
                popuplayertitle: 'Average annual thermal energy demand [kWh]',
                interactive: true,
    title: 'Average annual thermal energy demand [kWh]<br />\
    <img src="styles/legend/AverageannualthermalenergydemandkWh_7_0.png" /> 0 - 59<br />\
    <img src="styles/legend/AverageannualthermalenergydemandkWh_7_1.png" /> 60 - 119<br />\
    <img src="styles/legend/AverageannualthermalenergydemandkWh_7_2.png" /> 120 - 179<br />\
    <img src="styles/legend/AverageannualthermalenergydemandkWh_7_3.png" /> 180 - 239<br />\
    <img src="styles/legend/AverageannualthermalenergydemandkWh_7_4.png" /> > 240<br />' });
var format_AverageannualcoolingenergydemandkWh_8 = new ol.format.GeoJSON();
var features_AverageannualcoolingenergydemandkWh_8 = format_AverageannualcoolingenergydemandkWh_8.readFeatures(json_AverageannualcoolingenergydemandkWh_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AverageannualcoolingenergydemandkWh_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AverageannualcoolingenergydemandkWh_8.addFeatures(features_AverageannualcoolingenergydemandkWh_8);
var lyr_AverageannualcoolingenergydemandkWh_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AverageannualcoolingenergydemandkWh_8, 
                style: style_AverageannualcoolingenergydemandkWh_8,
                popuplayertitle: 'Average annual cooling energy demand [kWh]',
                interactive: true,
    title: 'Average annual cooling energy demand [kWh]<br />\
    <img src="styles/legend/AverageannualcoolingenergydemandkWh_8_0.png" /> 0 - 29<br />\
    <img src="styles/legend/AverageannualcoolingenergydemandkWh_8_1.png" /> 30 - 59<br />\
    <img src="styles/legend/AverageannualcoolingenergydemandkWh_8_2.png" /> 60 - 89<br />\
    <img src="styles/legend/AverageannualcoolingenergydemandkWh_8_3.png" /> 90 - 119<br />\
    <img src="styles/legend/AverageannualcoolingenergydemandkWh_8_4.png" /> > 120<br />' });
var format_Mostusedheatingsystemtypology_9 = new ol.format.GeoJSON();
var features_Mostusedheatingsystemtypology_9 = format_Mostusedheatingsystemtypology_9.readFeatures(json_Mostusedheatingsystemtypology_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mostusedheatingsystemtypology_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mostusedheatingsystemtypology_9.addFeatures(features_Mostusedheatingsystemtypology_9);
var lyr_Mostusedheatingsystemtypology_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mostusedheatingsystemtypology_9, 
                style: style_Mostusedheatingsystemtypology_9,
                popuplayertitle: 'Most used heating system typology',
                interactive: true,
    title: 'Most used heating system typology<br />\
    <img src="styles/legend/Mostusedheatingsystemtypology_9_0.png" /> Centralized System<br />\
    <img src="styles/legend/Mostusedheatingsystemtypology_9_1.png" /> Independent System<br />\
    <img src="styles/legend/Mostusedheatingsystemtypology_9_2.png" /> Other System Typology<br />' });
var format_Mostusedheatingenergysource_10 = new ol.format.GeoJSON();
var features_Mostusedheatingenergysource_10 = format_Mostusedheatingenergysource_10.readFeatures(json_Mostusedheatingenergysource_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mostusedheatingenergysource_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mostusedheatingenergysource_10.addFeatures(features_Mostusedheatingenergysource_10);
var lyr_Mostusedheatingenergysource_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mostusedheatingenergysource_10, 
                style: style_Mostusedheatingenergysource_10,
                popuplayertitle: 'Most used heating energy source',
                interactive: true,
    title: 'Most used heating energy source<br />\
    <img src="styles/legend/Mostusedheatingenergysource_10_0.png" /> Heating Oil<br />\
    <img src="styles/legend/Mostusedheatingenergysource_10_1.png" /> LPG<br />\
    <img src="styles/legend/Mostusedheatingenergysource_10_2.png" /> Natural Gas<br />\
    <img src="styles/legend/Mostusedheatingenergysource_10_3.png" /> Electric Energy<br />\
    <img src="styles/legend/Mostusedheatingenergysource_10_4.png" /> Biomass<br />' });
var group_Mostusedtechnologiesforheating = new ol.layer.Group({
                                layers: [lyr_Mostusedheatingsystemtypology_9,lyr_Mostusedheatingenergysource_10,],
                                fold: 'close',
                                title: 'Most used technologies for heating'});
var group_EnergyDemandParameters = new ol.layer.Group({
                                layers: [lyr_AverageannualthermalenergydemandkWh_7,lyr_AverageannualcoolingenergydemandkWh_8,],
                                fold: 'close',
                                title: 'Energy Demand Parameters'});
var group_GeologyParameters = new ol.layer.Group({
                                layers: [lyr_AveragesoilthermalconductivityWmK_5,lyr_AveragesoilvolumetricheatcapacityMJmK_6,],
                                fold: 'close',
                                title: 'Geology Parameters'});
var group_ClimateParameters = new ol.layer.Group({
                                layers: [lyr_AnnualglobalhorizontalirradiationkWhm_2,lyr_AnnualHeatingDegreeDaysHDD_3,lyr_AnnualCoolingDegreeDaysCDD_4,],
                                fold: 'close',
                                title: 'Climate Parameters'});
var group_Basecitieslayers = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Base cities layers'});
var group_BaseWorldmap = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Base World map'});

lyr_Basemap_0.setVisible(true);lyr_Cityinformation_1.setVisible(true);lyr_AnnualglobalhorizontalirradiationkWhm_2.setVisible(false);lyr_AnnualHeatingDegreeDaysHDD_3.setVisible(false);lyr_AnnualCoolingDegreeDaysCDD_4.setVisible(false);lyr_AveragesoilthermalconductivityWmK_5.setVisible(false);lyr_AveragesoilvolumetricheatcapacityMJmK_6.setVisible(false);lyr_AverageannualthermalenergydemandkWh_7.setVisible(false);lyr_AverageannualcoolingenergydemandkWh_8.setVisible(false);lyr_Mostusedheatingsystemtypology_9.setVisible(false);lyr_Mostusedheatingenergysource_10.setVisible(false);
var layersList = [lyr_Basemap_0,lyr_Cityinformation_1,group_ClimateParameters,group_GeologyParameters,group_EnergyDemandParameters,group_Mostusedtechnologiesforheating];
lyr_Cityinformation_1.set('fieldAliases', {'fid': 'fid', 'Country': 'Country', 'City': 'City', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'popup_html': 'popup_html', });
lyr_AnnualglobalhorizontalirradiationkWhm_2.set('fieldAliases', {'fid': 'fid', 'Country': 'Country', 'City': 'City', 'Annual global horizontal irradiation [kWh/m² ]': 'Annual global horizontal irradiation [kWh/m² ]', });
lyr_AnnualHeatingDegreeDaysHDD_3.set('fieldAliases', {'fid': 'fid', 'Country': 'Country', 'City': 'City', 'Annual Heating Degree Days (HDD)': 'Annual Heating Degree Days (HDD)', });
lyr_AnnualCoolingDegreeDaysCDD_4.set('fieldAliases', {'fid': 'fid', 'Country': 'Country', 'City': 'City', 'Annual Cooling Degree Days (CDD)': 'Annual Cooling Degree Days (CDD)', });
lyr_AveragesoilthermalconductivityWmK_5.set('fieldAliases', {'fid': 'fid', 'Country': 'Country', 'City': 'City', 'Average soil thermal conductivity (reference depth of 30 m) [W/m*K]': 'Average soil thermal conductivity (reference depth of 30 m) [W/m*K]', });
lyr_AveragesoilvolumetricheatcapacityMJmK_6.set('fieldAliases', {'fid': 'fid', 'Country': 'Country', 'City': 'City', 'Average soil volumetric heat capacity (reference depth of 30 m) [MJ/m³*K]': 'Average soil volumetric heat capacity (reference depth of 30 m) [MJ/m³*K]', });
lyr_AverageannualthermalenergydemandkWh_7.set('fieldAliases', {'fid': 'fid', 'Country': 'Country', 'City': 'City', 'Average annual thermal energy demand per m² [kWh]': 'Average annual thermal energy demand per m² [kWh]', });
lyr_AverageannualcoolingenergydemandkWh_8.set('fieldAliases', {'fid': 'fid', 'Country': 'Country', 'City': 'City', 'Average annual cooling energy demand per m² [kWh]': 'Average annual cooling energy demand per m² [kWh]', });
lyr_Mostusedheatingsystemtypology_9.set('fieldAliases', {'fid': 'fid', 'Country': 'Country', 'City': 'City', 'Most used heating system typology': 'Most used heating system typology', 'technologies': 'technologies', });
lyr_Mostusedheatingenergysource_10.set('fieldAliases', {'fid': 'fid', 'Country': 'Country', 'City': 'City', 'Most used technologies for heating': 'Most used technologies for heating', 'popup_chart': 'popup_chart', });
lyr_Cityinformation_1.set('fieldImages', {'fid': 'TextEdit', 'Country': 'TextEdit', 'City': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'popup_html': 'TextEdit', });
lyr_AnnualglobalhorizontalirradiationkWhm_2.set('fieldImages', {'fid': 'TextEdit', 'Country': 'TextEdit', 'City': 'TextEdit', 'Annual global horizontal irradiation [kWh/m² ]': 'TextEdit', });
lyr_AnnualHeatingDegreeDaysHDD_3.set('fieldImages', {'fid': 'TextEdit', 'Country': 'TextEdit', 'City': 'TextEdit', 'Annual Heating Degree Days (HDD)': 'TextEdit', });
lyr_AnnualCoolingDegreeDaysCDD_4.set('fieldImages', {'fid': 'TextEdit', 'Country': 'TextEdit', 'City': 'TextEdit', 'Annual Cooling Degree Days (CDD)': 'TextEdit', });
lyr_AveragesoilthermalconductivityWmK_5.set('fieldImages', {'fid': 'TextEdit', 'Country': 'TextEdit', 'City': 'TextEdit', 'Average soil thermal conductivity (reference depth of 30 m) [W/m*K]': 'TextEdit', });
lyr_AveragesoilvolumetricheatcapacityMJmK_6.set('fieldImages', {'fid': 'TextEdit', 'Country': 'TextEdit', 'City': 'TextEdit', 'Average soil volumetric heat capacity (reference depth of 30 m) [MJ/m³*K]': 'TextEdit', });
lyr_AverageannualthermalenergydemandkWh_7.set('fieldImages', {'fid': 'TextEdit', 'Country': 'TextEdit', 'City': 'TextEdit', 'Average annual thermal energy demand per m² [kWh]': 'TextEdit', });
lyr_AverageannualcoolingenergydemandkWh_8.set('fieldImages', {'fid': 'TextEdit', 'Country': 'TextEdit', 'City': 'TextEdit', 'Average annual cooling energy demand per m² [kWh]': 'TextEdit', });
lyr_Mostusedheatingsystemtypology_9.set('fieldImages', {'fid': 'TextEdit', 'Country': 'TextEdit', 'City': 'TextEdit', 'Most used heating system typology': 'TextEdit', 'technologies': 'TextEdit', });
lyr_Mostusedheatingenergysource_10.set('fieldImages', {'fid': 'TextEdit', 'Country': 'TextEdit', 'City': 'TextEdit', 'Most used technologies for heating': 'TextEdit', 'popup_chart': 'TextEdit', });
lyr_Cityinformation_1.set('fieldLabels', {'fid': 'hidden field', 'Country': 'hidden field', 'City': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'popup_html': 'no label', });
lyr_AnnualglobalhorizontalirradiationkWhm_2.set('fieldLabels', {'fid': 'hidden field', 'Country': 'inline label - visible with data', 'City': 'inline label - visible with data', 'Annual global horizontal irradiation [kWh/m² ]': 'inline label - visible with data', });
lyr_AnnualHeatingDegreeDaysHDD_3.set('fieldLabels', {'fid': 'hidden field', 'Country': 'inline label - visible with data', 'City': 'inline label - visible with data', 'Annual Heating Degree Days (HDD)': 'inline label - visible with data', });
lyr_AnnualCoolingDegreeDaysCDD_4.set('fieldLabels', {'fid': 'hidden field', 'Country': 'inline label - visible with data', 'City': 'inline label - visible with data', 'Annual Cooling Degree Days (CDD)': 'inline label - visible with data', });
lyr_AveragesoilthermalconductivityWmK_5.set('fieldLabels', {'fid': 'hidden field', 'Country': 'inline label - visible with data', 'City': 'inline label - visible with data', 'Average soil thermal conductivity (reference depth of 30 m) [W/m*K]': 'inline label - visible with data', });
lyr_AveragesoilvolumetricheatcapacityMJmK_6.set('fieldLabels', {'fid': 'hidden field', 'Country': 'inline label - visible with data', 'City': 'inline label - visible with data', 'Average soil volumetric heat capacity (reference depth of 30 m) [MJ/m³*K]': 'inline label - visible with data', });
lyr_AverageannualthermalenergydemandkWh_7.set('fieldLabels', {'fid': 'hidden field', 'Country': 'inline label - visible with data', 'City': 'inline label - visible with data', 'Average annual thermal energy demand per m² [kWh]': 'inline label - visible with data', });
lyr_AverageannualcoolingenergydemandkWh_8.set('fieldLabels', {'fid': 'hidden field', 'Country': 'inline label - visible with data', 'City': 'inline label - visible with data', 'Average annual cooling energy demand per m² [kWh]': 'inline label - visible with data', });
lyr_Mostusedheatingsystemtypology_9.set('fieldLabels', {'fid': 'hidden field', 'Country': 'inline label - visible with data', 'City': 'inline label - visible with data', 'Most used heating system typology': 'hidden field', 'technologies': 'no label', });
lyr_Mostusedheatingenergysource_10.set('fieldLabels', {'fid': 'hidden field', 'Country': 'inline label - visible with data', 'City': 'inline label - visible with data', 'Most used technologies for heating': 'hidden field', 'popup_chart': 'no label', });
lyr_Mostusedheatingenergysource_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});