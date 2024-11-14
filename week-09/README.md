## RAC

**1. syntax error**
unexpected ";" in /etc/nginx/nginx.conf:8
解決方法：
`sudo vim /etc/nginx/nginx.conf`
把多的 ; 移除掉

**2. port:80 被佔用**
`sudo kill srv`
or

```
sudo kill <PID>
sudo systemctl disabled srv // in this case
sudo systemctl enabled nginx // reboot時開啟nginx
```

**3. 防火牆設定**
透過 `sudo iptables -L` 看設定
發現有個REJECT
用 `sudo iptables -D INPUT -p tcp --dport 80 -j REJECT` 刪除設定
用`sudo iptables-save > /etc/iptables/rules.v4` 儲存防火牆設定
如果Permission Denied 就 `sudo su` or `sudo chmod 664 /etc/iptables/rules.v4`再做

**4. /etc/myweb 權限不足**
怎麼發現的：403 Forbidden 猜權限不足
看 `/etc/nginx/sites-enabled/default` 中
有 `root /var/myweb`
到 `/var/myweb` 更改權限： `sudo chmod 644 /var/myweb/index.html`

## 進階題：

硬碟爆炸怎麼處理？
`sudo df -h`
<img src="./assets/harddisk-1.png.png" width=400 />
-> 清除 log 和垃圾文件
<img src="./assets/harddisk-2.png.png" width=400 />
<img src="./assets/harddisk-3.png.png" width=400 />
-> 成功釋放硬碟空間
