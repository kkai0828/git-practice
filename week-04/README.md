# Week 4 Assigment - Nginx, proxy and pm2

## Puclic IP

`IP: 13.55.122.149`

## What is instance type?

- instance 是在雲端上運的虛擬機器，可以用來執行資料庫、Web伺服器、應用程式等，
  當在 AWS 的 EC2(Elastic Compute Cloud)中建立 instance 時，會依據不同的規格需求(例如CPU、記憶體、儲存和網路能力)選擇instance type。
- 常見一般用途(如 t2.micro)、計算密集型或內存密集型的工作(如 c5.large 或 r5.large)
- 不同的 instance type 有不同的成本。

## Nginx intro

- ### What is Nginx?
  - Nginx 是輕量且快速的網路伺服器，可以在 Linux 和 Windows 上執行，而且可以設定成反向 Proxy 伺服器。

### `proxy`

- ### What is proxy?

  - Proxy 是「代理」的意思，起初用於作為防火牆中管理內外部網路的代理主機(Proxy server)，
    通常需要極大的硬碟空間儲存進出資料的內容與目的。
  - 於 www 世界中，一樣透過 proxy server 來儲存經過由他代理擷取過的所有網址內容。

- ### Why use Nginx to proxy to a Web Server developed with Express?

  - nginx 可以幫忙把流量分散到不同的伺服器去。

- ### Nginx config

```
   server {
   listen 80;
   server_name 52.194.253.186;

   location / {
       proxy_pass <http://localhost:3000>;
       proxy_http_version 1.1;
       proxy_set_header Upgrade $http_upgrade;
       proxy_set_header Connection 'upgrade';
       proxy_set_header Host $host;
       proxy_cache_bypass $http_upgrade;
       }
   }
```

- ### Where is log file of Nginx and how do yo find it?

  - `/var/log/nginx/access.log`，裡面有 access.log 與 error.log 兩份檔案。
  - Google 查到的。
  - 可以使用`sudo cat /var/log/nginx/access.log` 來查看。

## pm2 intro

- pm2 是一個管理 node 服務的工具，可以簡單實現服務狀態監控、自動重啟和負載平衡等功能。

## Security group intro

- 安全性群組概念像是防火牆，控制雲端哪些人和資料能夠進出機器，可以設定規則，比如只允許特定的 IP 地址或 Port 進入。

## What is sudo?

- sudo 就是 Super User DO ，透過 `sudo` 啟動指令等同擁有最高管理者的權限執行命令，可執行例如更改電腦設定、查看密鑰等指令。

## Linux 檔案目錄結構

- /etc 是什麼的縮寫？這裡通常都放哪些檔案？
  - `etc` 是 "et cetera" 的縮寫
  - `/etc` 裡會放置各種系統和服務的配置文件
- /var 這裡通常都放哪些檔案？
  - `/var` 通常用來存放系統運行時變化的數據，例如日誌、快取、鎖檔案、暫存檔案、電子郵件、以及系統和應用程式的運行數據
- /boot 這裡通常都放哪些檔案？
  - `/boot` 包含了系統啟動所需的文件，例如內核、引導加載器（如 GRUB）的配置文件和其他必要的啟動相關數據。
- $PATH 環境變數的作用是什麼？
  - `$PATH` 告訴操作系統在哪些目錄中尋找可執行文件。當你在命令行輸入一個命令時，操作系統會依次搜索 $PATH 中列出的目錄，直到找到對應的可執行文件。
- `which` 指令的作用？
  - 用來查找並顯示某個命令的可執行文件所在的完整路徑。

---

### ref

[Proxy 是什麼東東?](http://macgyver.info.fju.edu.tw/docs/whatisproxy.html)
[【筆記】使用 pm2 進行 node 服務管理](https://blog.jsy.tw/2661/pm2-node-service-manager/)
