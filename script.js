// complete the given function

function palindrome(str){
// for(let i=0;i<str.length;i++){
// 	for(let j=str.length-1;j>=0;j--){
// 		if(str.charAt(i)!=str.charAt(j))
// 			return false;
// 	}
//   }
	let i = 0;
	let string = str.toLowerCase();
	let j = string.length-1;
	//let ans = false;
	while(i<j){
		if(str.charAt(i)!=str.charAt(j))
			return false;
		i++;
		j--;
	}
	return true;
}
module.exports = palindrome
