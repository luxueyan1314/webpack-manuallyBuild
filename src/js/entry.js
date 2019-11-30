import { cube } from './math'
import data from '../json/data.json'
import '../css/test.css'
//注意data会自动被转换为原生的js对象或者数组
document.write("entry.js is work <br/>");
document.write(cube(2) + '<br/>');
// document.write(JSON.stringify(data) + '<br/>')