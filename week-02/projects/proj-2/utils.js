console.log(import.meta.url); // 當前模組的 URL

// 解析相對路徑
const absolutePath = await import.meta.resolve('../proj-1/.env');
console.log(absolutePath); // 輸出絕對 URL

