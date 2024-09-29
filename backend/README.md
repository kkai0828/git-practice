# Express 專案

## package.json 中的 dependencies 與 devDependencies 分別是什麼

- dependencies：使用在已經發布的環境下，換句話說，是指發布後仍然需要依賴使用的 plugin
- devDependencies：使用在開發中的環境下，意思是指——只單純會在開發時應用到的 plugin。

## package.json 中的 scripts 這個區塊怎麼用？

- 用來執行 npm run 指令的
- 範例如下："test" 為名稱，通常依據一些規範如dev, build, test等。
- 後面的 "node test.js" 則為實際指令，這代表在執行 `npm run test` 時，實際上是跑`node test.js`這個指令。

```
"scripts":{
    "test": "node test.js"
}
```

## Port number 要怎麼以環境變數來設定？

- 我在宣告port時用`const port = process.env.PORT || 3000`來以環境變數設定，若沒有設定則預設 Port 3000。

## 哪些檔案應該要放上 github repo? 為什麼選擇上傳/不上傳某些檔案，決策的要素是什麼？

- 資安問題：如.env 檔或任何存有密碼、個資、API Key等資訊的檔案。
- 非必要檔案：如 node_modules 可以用`npm install`下載的就沒必要一起放上repo。

## CJS vs ESM，這兩者分別怎麼用？

- CJS：
- ESM：

### 參考資料

[package.json 需要了解的事](https://hackmd.io/@Hsuan93625/HkUdUG8zd)
[【前端工程化】配置package.json中scripts命令脚本，新手必学](https://blog.csdn.net/qq_17335549/article/details/126784270)
