/* 随机生成json文件内容 */
let fs = require('fs'),
    ary = [];
for (let i =1; i <= 20; i++) {
    ary.push({
        id: i,
        pic: `img/${Math.round(Math.random() * 12 + 1)}.jpg`,
        title: '山水画',
        link: 'https://huaban.com/'
    });
}
fs.writeFileSync('data.json', JSON.stringify(ary), 'utf-8');