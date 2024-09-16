# What is blob, tree, commit, branch, head 
## blob (binary large object) 
* 檔案加入git時，會被計算出一個SHA-1值，這個雜湊值會被當成blob物件的檔名儲存在.git資料夾中
* blob物件就是某個檔案的內容

## tree
* tree物件會儲存某個資料夾下的所有資訊，包括檔名、對應的blob物件檔案連結和其他tree物件等
* tree物件就有點類似資料夾的概念，或某個資料夾的snapshot

## commit
* commit物件用來記錄版本資訊以及上一次commit物件名稱

## branch
* branch就是把某個commit複製一個版本出來，在這個branch對這個commit物件的任何改動都不會影響到原本的commit
* 通常在製作功能時，會拉branch出去做以防同一個branch上的commit太混亂，不方便版本控制

## head
* HEAD就是指向當前branch的指標
