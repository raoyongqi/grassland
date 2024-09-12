import geojson
import json
import chardet
JSON_PATH= 'chongqing.json'
# 假设你的 JSON 数据在 data.json 文件中
# 读取文件的前几个字节来检测编码
with open(JSON_PATH, 'rb') as f:
    raw_data = f.read()
    result = chardet.detect(raw_data)
    encoding = result['encoding']

print(f"Detected encoding: {encoding}")

# 使用检测到的编码读取文件
with open(JSON_PATH, 'r', encoding=encoding) as f:
    data = json.load(f)
# 创建 GeoJSON 对象
geojson_data = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "type": "Polygon",  # 依据你的数据类型选择 Geometry 类型
                "coordinates": [data["coordinates"]]
            },
            "properties": data["properties"]
        }
    ]
}

# 将 GeoJSON 数据写入文件
with open('chongqing.geojson', 'w') as f:
    geojson.dump(geojson_data, f, indent=2)
