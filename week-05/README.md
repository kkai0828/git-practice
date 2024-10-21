## week-05/README.md

1. 你的網址，應該是 https://www.xxx.xxx，點擊過去應該要可以看到個人作業 4 架設的 Express server （由 Nginx proxy 到 Express）
   - https://www.kaitt.store
2. 你在哪裡購買網域的
   - namecheap
3. DNS 的 A record 是什麼？
   - A Record (Address Record) 將域名解析為對應的 IPv4 地址。
     當用戶在瀏覽器中輸入一個域名(e.g. kaitt.store)時，DNS 會根據 A 記錄將這個域名轉換成對應的 IP 地址(13.55.122.149)，以便瀏覽器能夠找到對應的伺服器並與之進行通信。
4. ## DNS 的 NS record 是什麼？
   - NS Record (Name Server Record)指定哪個名稱伺服器 (Name Server) 具有這個域名的權威解析權限。
     NS 記錄告訴其他 DNS 伺服器應該向哪個名稱伺服器查詢某個域名的詳細解析記錄（如 A 記錄、CNAME 記錄等）。
5. ## Domain Name vs FQDN vs URL 這三者分別為何？
   - Domain Name (域名):
     - 一個域名是網絡中某個網站或伺服器的識別名稱，例如 example.com。
     - 它是用於標識網站或網絡資源的簡化名稱，使人們不需要記住 IP 地址。
   - FQDN (Fully Qualified Domain Name, 完全合格的域名):
     - 完整的域名，它包括了域名中的所有級別，從最具體的子域名到頂級域名（TLD）。
     - 格式是：[主機名].[二級域名].[頂級域名]
     - FQDN 是在 DNS 系統中唯一標識的域名
   - URL (Uniform Resource Locator, 統一資源定位符):
     - URL 是一個網頁的完整地址
     - 包括域名和所需的協議（如 http:// 或 https://）、路徑（如 /path/to/resource）、以及可選的 port 和查詢參數。
6. 為什麼應該要為網站加上憑證？而不是直接用 http 就好？
   - 安全性：如果網站需要收集用戶資訊（如帳號、密碼、信用卡號碼等），SSL 可以防止資訊在網路上被盜取或竄改
   - SEO 排名提升：Google 等搜索引擎更傾向於對使用 HTTPS 的網站給予更好的排名，這樣可以增加網站的可見度。
   - 避免瀏覽器警告：大多數瀏覽器都會對沒有 SSL 的網站顯示「不安全」的警告。
