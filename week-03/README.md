# week-03 作業

## 什麼是 AWS Region, AZ (availability zones)
### AWS Region(現有26個 Region)
- AWS Region 代表特定地理區域的集合，它包括多個數據中心，通常位於這個地理區域的不同城市。
- 每個 AWS Region都是相對獨立的，擁有自己的電源、網路和物理安全性。
- AWS 的全球基礎設施涵蓋了多個地理區域，包括美國東部、歐洲、亞太等等。
- 可以把服務轉到其他 Region 但要依賴特定的服務 
- 特點：高可用性、法規合規性、低延遲

### AZ (availability zones)
- 每個 Region 內還可以包含多個 AZ，每個 AZ 是一個獨立的大機房。
- AZ 網路間的延遲標榜在3ms內。
- AZ code： 通常是 Region code 後面加上一個英文字母，從 a 開始。（如：us-west-2a)
- 特點：容錯容忍性、數據複製、多區部署

## 如果你要使用 AWS 服務，你會怎麼選擇用哪個 Region，考慮的因素有哪些？

