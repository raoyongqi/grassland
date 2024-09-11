# npm 全局安装需要root

# 在外面设置了 registry root仍然不生效


# question

npm error code ETIMEDOUT
npm error syscall connect
npm error errno ETIMEDOUT
npm error network request to https://registry.npmjs.org/@placemarkio%2ftokml failed, reason: connect ETIMEDOUT 2606:4700::6810:1d22:443

# 解决方案
```
root@r-OMEN-by-HP-Laptop-17-cb1xxx:~# npm config get registry
https://registry.npmjs.org/
root@r-OMEN-by-HP-Laptop-17-cb1xxx:~# npm config set registry https://registry.npmmirror.com
root@r-OMEN-by-HP-Laptop-17-cb1xxx:~# npm config get registry
```


# dp（Douglas-Peucker 算法），请确保命令的格式如下：

mapshaper filtered_grasslands.geojson -simplify dp 10% -o simplified.geojson


