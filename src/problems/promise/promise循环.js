/**
 * promise 各种循环写法
 * 问题：请求一本书，然后每一段文字都要去单独请求，使用 promise 实现
 * 参考：https://developers.google.com/web/fundamentals/primers/promises#_9
 */

const data = [
  { url: '1', time: 1000 },
  { url: '2', time: 1000 },
  { url: '3', time: 3000 },
  { url: '4', time: 6000 },
  { url: '5', time: 1000 },
];

const getBook = () => Promise.resolve({ chapterUrls: data });
const getChapter = ({ url, time }) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(url);
    }, time);
  });
};

// 串行请求数据和显示
// getBook().then(({ chapterUrls }) => {
//   chapterUrls.reduce((promise, url) => {
//     return promise.then(() => getChapter(url)).then(chapter => console.log(chapter));
//   }, Promise.resolve());
// });

// 并行请求数据，全部成功之后再显示
// getBook().then(({ chapterUrls }) => {
//   return Promise.all(chapterUrls.map(url => getChapter(url)));
// }).then(chapters => console.log(chapters));

// 并行请求数据，串行显示
// getBook().then(({ chapterUrls }) => {
//   chapterUrls.map(url => getChapter(url)).reduce((promise, urlPromise) => {
//     return promise.then(() => urlPromise).then(chapter => console.log(chapter));
//   }, Promise.resolve());
// });

// 并行请求数据，成功一个显示一个
// getBook().then(({ chapterUrls }) => {
//   for (url of chapterUrls) {
//     getChapter(url).then(chapter => console.log(chapter));
//   }
// });

// 使用 async 改写
getBook().then(async ({ chapterUrls }) => {
  const urlPromises = chapterUrls.map(url => getChapter(url));
  for (promise of urlPromises) {
    const chapter = await promise;
    console.log(chapter);
  }
});
