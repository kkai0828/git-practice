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

- ### Nginx config

- ### Where is log file of Nginx and how do yo find it?

## pm2 intro

## Security group intro

## What is sudo?

---

### ref

[](https://learn.microsoft.com/zh-tw/troubleshoot/developer/webapps/aspnetcore/practice-troubleshoot-linux/2-2-install-nginx-configure-it-reverse-proxy)
[Proxy 是什麼東東?](http://macgyver.info.fju.edu.tw/docs/whatisproxy.html)
