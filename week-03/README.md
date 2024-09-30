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

- 我的選擇順序如下，若在價格合理的情況下選擇較近的區域，反之則以價格為優先考量，最後如果有非要不可的服務才會因此選擇特定區域。

1. 價格：依專案規模、甲方預算等不同選擇可負擔的 Region。
2. 主要客群的地理位置：若主要用戶都在日本，就選擇東京；若在香港則選香港，這樣在使用上會較順暢。
3. 提供服務的不同：不同的區域提供的服務有些微的不同，可以參考需要的服務選擇區域。

---

## 進階：Callback, Promise, Await 差別

- Callback： 簡單直接、但容易嵌套形成「Callback 地獄」(Callback Hell)
- Promise：Promise 是用來表示一個異步操作的最终完成（或失敗）及其结果值。Promise 接收一個函式(executor)當做參數，executor 會立即執行。

  - executor 函式，會再接受另外兩個函式參數
    - resolve：請求成功時，正確的時候會調用 resolve 函式，並回傳結果。
    - reject：請求失敗時，失敗的時候會調用 reject 函式，並回傳結果。
  - 三種狀態：
    - pending：初始狀態，執行了 executor，但還在等待中。
    - fulfilled：表示操作完成，執行 resolve 函式。
    - rejected：表示操作失敗，執行 reject 函式。
  - `then`：Promise 可以用鏈式(chaining)的方式來串連異步操作，避免使用 Callback 造成 Callback Hell。

    - 一樣可以接受兩種函式，成功的回傳和失敗的回傳。

    ```
    test(data).then(
        (res) => {
         console.log(res)
        },
        (reason) => {
          console.log(reason)
        }
    )
    ```

  - 錯誤處理：Promise 能更好的錯誤處理，最簡單的方式是加上 `catach` 來捕捉錯誤，並執行錯誤處理程式碼。像是

    ```
    .catch((err) => {
        console.log('error:', err)
    })
    ```

  - `finally`：如果有加上 `finally` 不論是 fulfilled 或 rejected，都會需要執行，例如 loader 無論有沒有拿到資料，最後都要關閉loader，就適合放在 `finally` 中。

- Async/Await：是一種基於 Promise 之上的語法糖，比 Promise 的寫法更像是同步操作。

  - async：將函式標記為異步函式，異步函式就是指返回值為 Promise 物件的函式。
  - 異步函式可以使用其他的異步函式，不是使用 then() 而是用 await，await 會等 Promise 完成後直接返回最終的結果。

  ```
  // async 標註為異步函式
  async function getData() {
    // await 等待 Promise 執行完後返回最終結果。
    const res = await fetch("https://getsomedata");
    const data = await res.json();
    console.log(data);
  }

  getData();
  ```

### 參考資料：

[Promise 是什麼？有什麼用途？](https://www.explainthis.io/zh-hant/swe/what-is-promise)<br/>
