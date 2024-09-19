## What is blob, tree, commit, branch, head 
### blob (binary large object) 
* 檔案加入git時，會被計算出一個SHA-1值，這個雜湊值會被當成blob物件的檔名儲存在.git資料夾中
* blob物件就是某個檔案的內容

### tree
* tree物件會儲存某個資料夾下的所有資訊，包括檔名、對應的blob物件檔案連結和其他tree物件等
* tree物件就有點類似資料夾的概念，或某個資料夾的snapshot

### commit
* commit物件用來記錄版本資訊以及上一次commit物件名稱

### branch
* branch就是把某個commit複製一個版本出來，在這個branch對這個commit物件的任何改動都不會影響到原本的commit
* 通常在製作功能時，會拉branch出去做以防同一個branch上的commit太混亂，不方便版本控制

### head
* HEAD就是指向當前branch的指標
[br]
#### 參考資料
[30 天精通 Git 版本控管](https://github.com/doggy8088/Learn-Git-in-30-days)


## 記錄.git的變化
### 第一次git commit
<img src="./assets/first.png" width=400/>
### 第二次git commit
<img src="./assets/second.png" width=400/>

## commit message 怎麼寫比較好
* 在過去自己和同學的project中，我們習慣用feat/refactor/fix等title標明功能，在加上自己在這次版本做的更動，儘量簡要易懂為主
* 在branch name上的命名也會用feat/kkai0828/README 這種方式來讓其他人更快知道這個branch在做什麼
