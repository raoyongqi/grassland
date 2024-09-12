const fs = require('fs');
const path = require('path');
const turf = require('@turf/turf');

// 读取本地的 GeoJSON 文件
const filePath = path.join(__dirname, 'filtered_grasslands.geojson'); // 请将 'your-geojson-file.geojson' 替换为你的文件名

// 读取文件内容
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('读取文件时发生错误:', err);
    return;
  }

  // 解析 GeoJSON 数据
  const geojsonData = JSON.parse(data);

  // 定义面积阈值（单位：平方米）
  const areaThreshold = 10000000; // 1 平方公里

  // 筛选功能
  const filterFeaturesByArea = (geojson, threshold) => {
    const filteredFeatures = geojson.features.filter(feature => {
      const area = turf.area(feature);
      return area > threshold;
    });

    return {
      type: "FeatureCollection",
      features: filteredFeatures
    };
  };

  // 使用筛选功能
  const filteredGeojson = filterFeaturesByArea(geojsonData, areaThreshold);

  // 输出结果到文件
  const outputFilePath = path.join(__dirname, 'filtered-geojson-file.geojson');
  fs.writeFile(outputFilePath, JSON.stringify(filteredGeojson, null, 2), 'utf8', (err) => {
    if (err) {
      console.error('写入文件时发生错误:', err);
    } else {
      console.log('过滤后的 GeoJSON 文件已保存到:', outputFilePath);
    }
  });
});
