var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Vtrcythucquhim_1 = new ol.format.GeoJSON();
var features_Vtrcythucquhim_1 = format_Vtrcythucquhim_1.readFeatures(json_Vtrcythucquhim_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vtrcythucquhim_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vtrcythucquhim_1.addFeatures(features_Vtrcythucquhim_1);
var lyr_Vtrcythucquhim_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vtrcythucquhim_1, 
                style: style_Vtrcythucquhim_1,
                popuplayertitle: 'Vị trí cây thuốc quý, hiếm',
                interactive: true,
    title: 'Vị trí cây thuốc quý, hiếm<br />\
    <img src="styles/legend/Vtrcythucquhim_1_0.png" /> Bảy lá một hoa<br />\
    <img src="styles/legend/Vtrcythucquhim_1_1.png" /> Bình vôi<br />\
    <img src="styles/legend/Vtrcythucquhim_1_2.png" /> Bổ béo đen<br />\
    <img src="styles/legend/Vtrcythucquhim_1_3.png" /> Bồ đề rừng<br />\
    <img src="styles/legend/Vtrcythucquhim_1_4.png" /> Cẩu tích<br />\
    <img src="styles/legend/Vtrcythucquhim_1_5.png" /> Củ dòm (BV Diels)<br />\
    <img src="styles/legend/Vtrcythucquhim_1_6.png" /> Đại lăng Ba Vì<br />\
    <img src="styles/legend/Vtrcythucquhim_1_7.png" /> Đảng sâm Việt Nam<br />\
    <img src="styles/legend/Vtrcythucquhim_1_8.png" /> Địa lan rừng<br />\
    <img src="styles/legend/Vtrcythucquhim_1_9.png" /> Dứa núi Bắc Bộ<br />\
    <img src="styles/legend/Vtrcythucquhim_1_10.png" /> Dương xỉ gỗ lớn<br />\
    <img src="styles/legend/Vtrcythucquhim_1_11.png" /> Gỗ sến trắng quý<br />\
    <img src="styles/legend/Vtrcythucquhim_1_12.png" /> Hoàng đằng<br />\
    <img src="styles/legend/Vtrcythucquhim_1_13.png" /> Hoàng đằng (Nam)<br />\
    <img src="styles/legend/Vtrcythucquhim_1_14.png" /> Hoàng tinh đỏ<br />\
    <img src="styles/legend/Vtrcythucquhim_1_15.png" /> Hoàng tinh trắng<br />\
    <img src="styles/legend/Vtrcythucquhim_1_16.png" /> Lan chân châu xếp<br />\
    <img src="styles/legend/Vtrcythucquhim_1_17.png" /> Lan kim tuyến<br />\
    <img src="styles/legend/Vtrcythucquhim_1_18.png" /> Lan kim tuyến (đá vôi)<br />\
    <img src="styles/legend/Vtrcythucquhim_1_19.png" /> Pơ mu<br />\
    <img src="styles/legend/Vtrcythucquhim_1_20.png" /> Tế tân<br />\
    <img src="styles/legend/Vtrcythucquhim_1_21.png" /> Thu hải đường Ba Vì<br />\
    <img src="styles/legend/Vtrcythucquhim_1_22.png" /> Trai lý<br />\
    <img src="styles/legend/Vtrcythucquhim_1_23.png" /> Trường mật<br />\
    <img src="styles/legend/Vtrcythucquhim_1_24.png" /> Tuế Balansa<br />\
    <img src="styles/legend/Vtrcythucquhim_1_25.png" /> Vù hương<br />\
    <img src="styles/legend/Vtrcythucquhim_1_26.png" /> <br />' });
var format_Tuyniutra_2 = new ol.format.GeoJSON();
var features_Tuyniutra_2 = format_Tuyniutra_2.readFeatures(json_Tuyniutra_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tuyniutra_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tuyniutra_2.addFeatures(features_Tuyniutra_2);
var lyr_Tuyniutra_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tuyniutra_2, 
                style: style_Tuyniutra_2,
                popuplayertitle: 'Tuyến điều tra',
                interactive: true,
    title: 'Tuyến điều tra<br />\
    <img src="styles/legend/Tuyniutra_2_0.png" /> Bản Pheo trong –Pù Tương<br />\
    <img src="styles/legend/Tuyniutra_2_1.png" /> Chặng 1 Mốc 166- Mốc 162<br />\
    <img src="styles/legend/Tuyniutra_2_2.png" /> Chặng 1 tuyến Mốc 1- đỉnh Pù Đen<br />\
    <img src="styles/legend/Tuyniutra_2_3.png" /> Chặng 2 Mốc 166- Mốc162<br />\
    <img src="styles/legend/Tuyniutra_2_4.png" /> Chặng 2 tuyến Mốc 1- đỉnh Pù Đen<br />\
    <img src="styles/legend/Tuyniutra_2_5.png" /> Co Chao – Ngã ba suối Co Chao & Suối Sang<br />\
    <img src="styles/legend/Tuyniutra_2_6.png" /> Đường mòn sang Trung Lý (điểm giáp ranh) – khu suối Căm<br />\
    <img src="styles/legend/Tuyniutra_2_7.png" /> Ngã ba suối – Đỉnh Pù Hu<br />\
    <img src="styles/legend/Tuyniutra_2_8.png" /> Ngã ba suối – Thác suối Tầm<br />\
    <img src="styles/legend/Tuyniutra_2_9.png" /> Ngã ba suối – Thung suối Tầm<br />\
    <img src="styles/legend/Tuyniutra_2_10.png" /> Ngã ba suối (suối Hạm- suối Pù Hu)- Suối Mạ<br />\
    <img src="styles/legend/Tuyniutra_2_11.png" /> Suối Kẹn – đỉnh khe Kẹn<br />\
    <img src="styles/legend/Tuyniutra_2_12.png" /> Suối Kẹn – giông Buốc Mu<br />\
    <img src="styles/legend/Tuyniutra_2_13.png" /> Suối Kẹn – khu suối Dẹ<br />\
    <img src="styles/legend/Tuyniutra_2_14.png" /> Suối Ngà – Bản Ngà<br />\
    <img src="styles/legend/Tuyniutra_2_15.png" /> Suối Ngà – Thượng nguồn suối Ngà<br />\
    <img src="styles/legend/Tuyniutra_2_16.png" /> Suối Quai – Buốc Mu<br />\
    <img src="styles/legend/Tuyniutra_2_17.png" /> Suối Sang – Suối Co Chao<br />\
    <img src="styles/legend/Tuyniutra_2_18.png" /> Suối Yên – Giông Líp<br />\
    <img src="styles/legend/Tuyniutra_2_19.png" /> Sườn đông thung Cà Dé<br />\
    <img src="styles/legend/Tuyniutra_2_20.png" /> Sườn tây thung Cà Dé<br />\
    <img src="styles/legend/Tuyniutra_2_21.png" /> Thung Ong – Khu suối Ngà<br />\
    <img src="styles/legend/Tuyniutra_2_22.png" /> Thung Ong – Suối Cua<br />\
    <img src="styles/legend/Tuyniutra_2_23.png" /> Thung Ong – Thượng nguồn suối Sán<br />\
    <img src="styles/legend/Tuyniutra_2_24.png" /> <br />' });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_Vtrcythucquhim_1.setVisible(true);lyr_Tuyniutra_2.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_Vtrcythucquhim_1,lyr_Tuyniutra_2];
lyr_Vtrcythucquhim_1.set('fieldAliases', {'fid': 'fid', 'Tên loài': 'Tên loài', 'X': 'X', 'Y': 'Y', 'tuyến': 'tuyến', });
lyr_Tuyniutra_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'TENTUYEN': 'TENTUYEN', 'Tên tuyến điều tra': 'Tên tuyến điều tra', });
lyr_Vtrcythucquhim_1.set('fieldImages', {'fid': 'TextEdit', 'Tên loài': 'TextEdit', 'X': 'Range', 'Y': 'Range', 'tuyến': 'TextEdit', });
lyr_Tuyniutra_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'TENTUYEN': 'TextEdit', 'Tên tuyến điều tra': 'TextEdit', });
lyr_Vtrcythucquhim_1.set('fieldLabels', {'fid': 'no label', 'Tên loài': 'no label', 'X': 'no label', 'Y': 'no label', 'tuyến': 'no label', });
lyr_Tuyniutra_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'TENTUYEN': 'no label', 'Tên tuyến điều tra': 'no label', });
lyr_Tuyniutra_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});