const fs=require('fs')
var fil='';/* λ / læmbʌdɑ / */
var beta = { /* / bɛta / */
	storeage:{} /* / stɔridʒ / */
};for (let i=0;i<process.argv.length;i++){
	const n=process.argv[i];
	if((i>1)&&(i+1!==process.argv.length)){
		fil=fil+n+' '
	}else if((i>1)&&(i+1===process.argv.length)){
		fil=fil+n
	}
}var int=0;var $=false;try{
	fs.readFileSync(fil).toString()
	var currstring = '' /* / kəɹɹstɹɪŋ / */
}catch(Exception){
	console.log('[*~*] : '+fil+' is\'nt a directory')
	process.exit(1)
}var λ = fs.readFileSync(fil).toString().split('');λ.forEach(lambda => {
	if((lambda==='"'||lambda==='\'')&&(!$)){/* $ / ɪstɹɪŋ / inst'ring if in string or not */
		$=true // use dont adapt text if in a string //
		if (lambda === "'") {currstring="'"}
		else {currstring='"'}
		λ[int] = ' '+λ[int]+' '
	}else if((lambda===currstring)&&($)&&λ[int-1]!=='\\') {
		$=false// tis is functionality of it (with inst'ring[$x="$x" -> " $ x = " $x "])
		currstring=''/* (without inst'ring[$x="$x" -> " $ x = " $ x "]) */
		λ[int] = ' '+λ[int]+' '
	}int++; /* ɪnt */
});var foo=''; /* fʊː */
λ.forEach(lambda => {
	foo += lambda
});console.log(foo)