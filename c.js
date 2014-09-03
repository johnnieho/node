//use exports
//////////////////////////////////
// exports.data='ee';
// var pb =5;
// exports.getpb = function(){
// 	return pb;
// }
/////////////////////////////////
b=require('./b');
console.log(b.data+'--'+b.getpb());
//custom exports
/////////////////////////////
// module.exports = Person;
// function Person(data){
// 	this.data = data; 
// };
// Person.prototype.show = function(){
// 	console.log('my data is : '+this.data);
// }
/////////////////////////////
Person=require('./a');
var jj = new Person('big d');
jj.show();
//events emitter
var EE = require('events').EventEmitter,
	a = new EE;
a.on('hit',function(){
	console.log('attacked');
});
a.emit('hit');
setTimeout(function(){
			a.emit('hit');
			a.emit('hit');
//			my.emit('hit');
			}
		,2000);
//inher from EE
var EventEmitter = process.EventEmitter , MyClass = function (){};
MyClass.prototype.__proto__ = Object.create(EventEmitter.prototype);
var my = new MyClass;
my.on('hit',function(){
	console.log('met hihi');
});
//buffer
var img64 = 'iVBORw0KGgoAAAANSUhEUgAAAG4AAABuCAYAAADGWyb7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODYwNDI4QjAxMjE3MTFFNDhDMDFERDFCOUQxMzU3NUEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODYwNDI4QjExMjE3MTFFNDhDMDFERDFCOUQxMzU3NUEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4NjA0MjhBRTEyMTcxMUU0OEMwMUREMUI5RDEzNTc1QSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4NjA0MjhBRjEyMTcxMUU0OEMwMUREMUI5RDEzNTc1QSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pp/CB2oAAATFSURBVHja7JxvTFVlHMez9cdbhoK4FKUR14wJLaY3k+JW2JCWRW4QJq2IckX5olqrma0XrT9ara1emLdWGTUtsja6my2gwroskq5lQxgtEJZ4pRQwzC7hC/J75WFnZ/fvi6Dk83lzDuc8z3POns85v9/vPHdj2ujo6NNnwf+Os5kCxAHiAHGIA8QB4hAHiAPEAeIQB4gDxCEOEAeIA8QhDhAHiEMcIA4QB4hDHCAOEIc4QBwgDnGAOEAcIA5xgDhAHOIAcYA4QBziAHGAuKnEORN5Me8HTxZ27Nvith8/97zZwUef7d5kPXZ86Kijcdcr+b921uX89Wdnsjmelbved5W7wt/qr82ZlZI+sOy6O9vs4x3u7Uj+3lft6mr/0HVypN9hruFcfIe/YNVjTRclpQZN25Zvtmfv3vXgGvP3BTMWDpZU7nh33oKswXjuf8Glq9vKq96rmWhx0ybj3x7u8Ny9pre7NjvSJH1d97prz1cbinV+0RVl/pWrN/jCTd7VKzZ7ry96yG/tW1+72b2v+YXCOfMKum4qfdFrxtaYP/+003Wsf29auH4639ryllsPyazZSwNrq3ZWWwVb2fbqbRUnR4Yc9z/R6JlSoTJ17uKAtilzcgJ2aZp4SdPkVTxc77FKE8VrNzWUVH7u0Rv0d3DIEU5aZtZd/spHPq22ji1RmmiNq/ElytpX5/WQaF9yP37nvrJI9z8/I+/A3PTlXeS4Mbo6vk3TxGv/xuLnvZGeeGfWNYHspQ80WY+17v3Mqb4SWlTyTEOka+QuXxd6EH5oerlQIdV+XmK1PXK40anIQHESB3t2e9xm8iQnWlv7m+j3vZGvbXrmzW2RhAvlRIVg5T7lQft5vUm5eRtD4hXOFZoRF4PfDvkytc1YVNQWT3sjT4WM3hDtJyWnD8bqpxCtrQqfSOMqR2pf+VQhGHFRwqSpAM93JAUT6dvzS0vaeKg7VWnGaj9j5vxQGxUikh6ujXKkCZsKwfaciLgx+n/vHs83DsfMhMQFTwxO/zfu6dbyrTXKmaEwfqqgUR5FnA3HhcnDk9E3GqpKry18zmv+/qJ2fVm4gmZKi0u9OHM8xB0bOJiSSN+My5YFEuk7Mnz6M0JFSrRCxhQzplhRKP9kW/k9iLM93SanHOppzkykrybfFBNH+9rTYrXv620OhbxLFhbtj7cIMuMrL5pPFsSNcfmVt/vNN5SKlVjtrdVe9pLTH8+qTCMVHKYI0uQrd2n5K957K7337Y/Mg8UbZ0OrF1r70/6X3qeKownQx3HeinV+a0jTionCWbRVD42rrXJXrDBpf6utxcqUFGdC4cCR/Wn2ZK8FW4UlLTtVv7ayyv4NpbJca4UFt2yst098aeUWr/KR3li1sb616vfmSwVVJ473JN+wamtNuMVp3Vffwe+c0cL5kvzHG/4L4iZ0kTmRXwe0at/ZXpej1QtzTMWE8pLWK2N9E/7YvN11oON9l72v/deBSPelXyEiXUcP03Dwj+mx7uOMEQdnaI4DxCEOEAeIA8QhDhAHiEMcIA4QhzhAHCAOEIc4QBwgDnGAOEAcIA5xgDhAHOIAcYA4QBziAHGAOMQB4gBxiAPEAeIAcYgDxAHiEAeIA8QB4hAHk84/AgwADR0PgG0aloIAAAAASUVORK5CYII="';
var mybuffer = new Buffer(img64, 'base64');
console.log(mybuffer); 
require('fs').writeFile('logo.png', mybuffer);
