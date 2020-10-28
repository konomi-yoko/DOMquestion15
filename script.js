// このファイルに解答を書いてください。
// 問題文はindex.htmlにあります。


// Q 1


// Q 2


// Q 3


// Q 4 (難)
// 「for of」を使います。

// Q 5


// Q 6


// Q 8


// Q 9


// Q 10


// Q 11
let q11 = document.querySelector('.q11-btn');
	q11.addEventListener('click',function(){
	let input_age = document.querySelector('#q11-input-age');
	let result_age = document.querySelector('#q11-result-age');

	if(input_age.value < 20) {
		result_age.textContent = '20歳未満の方の利用は禁止です。';
	}else {
		result_age.textContent = input_age.value;
	}
	});

	q11.addEventListener('click',function(){
	let input_name = document.querySelector('#q11-input-name');
	let result_name = document.querySelector('#q11-result-name');

		if(input_name.value == '') {
		result_name.textContent = '名前が空欄です';
		result_name.style.color = 'red';
	}else {
		result_name.textContent = input_name.value;
		result_name.style.color = 'black';
	}
	});



// Q 12

let q12 = document.querySelector('.q12-btn');
	q12.addEventListener('click',function(){
	let btn_text = this.textContent;
	console.log('btn_text');

	let add_p = document.createElement('p');
add_p.textContent = btn_text;

	var result = document.querySelector('.q12-result');
	result.appendChild(add_p);

});


// Q 13
// 飛ばしていいです。
let q13 = document.querySelector('.q13-btn');
	q13.addEventListener('click',function(){


var apple = document.createElement('li');
apple.textContent = 'リンゴ';

	var q13box = document.querySelector('#q13-box');
		let child = q13box.firstElementChild;
q13box.insertBefore(apple, child);

});



// Q 14

let q14 = document.querySelector('.q14-btn');
	q14.addEventListener('click',function(){

// let chicken = document.querySelector('#chicken');
// chicken.remove();
document.querySelector('#chicken').remove();

});


// Q 15 (難)
// switchまたはifを使います。
// 要素.href = 'https://google.com';
// でリンク先を追加できます。
let q15 = document.querySelectorAll('q15-btn');
for (q15_each of q15)
q15_each.addEventListener('click',function(){

	let q15_link_list = document.querySelector('.q15_link_list');
	let add_a = document.createElement('a');

if (this.textContent == 'Google'){
	add_a.href = 'https//google.com/';
	add_a.textContent = this.textContent;
}
if (this.textContent == 'YouTube'){
	add_a.href = 'https://youtube.com';
	add_a.textContent = this.textContent;
}

if (this.textContent == 'Amazon'){
	add_a.href = 'https://Amazon.com';
	add_a.textContent = this.textContent;
}
q15_link_list.addEventListener

})