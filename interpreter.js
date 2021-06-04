const fs=require('fs')
var fil='';
var onion = []
onion[0] = 0
onion[1] = 0
for (let i=0;i<process.argv.length;i++){
	const n=process.argv[i];
	if(i>1&&i+1!==process.argv.length){
		fil=fil+n+' '
	}else if((i>1)&&(i+1===process.argv.length)){
		fil=fil+n
	}
}var int=0;var $=false;try{
	fs.readFileSync(fil).toString()
	var currstring = ''
}catch(Exception){
	console.log('[*~*] : \''+fil+'\' is\'nt a directory')
	process.exit(1)
}var plant = fs.readFileSync(fil).toString().split('');
var Pumpkins = {}
var Carver = [0]
var Candle = 0
plant.forEach(lambda => {
	if(lambda==='"'||lambda==='\''&&!$){
		$=true
		if (lambda === "'") {currstring="'"}
		else {currstring='"'}
		plant[int] = ' '+plant[int]+' '
	}else if(lambda===currstring&&$&&plant[int-1]!=='\\') {
		$=false
		currstring=''
		plant[int] = ' '+plant[int]+' '
	}if (lambda==='\r'||lambda==='\n') {
		plant[int] = ' '
	}if (lambda==='+'&&!$) {
		plant[int] = ' + '
	}if (lambda==='-'&&!$) {
		plant[int] = ' - '
	}if (lambda==='/'&&!$) {
		plant[int] = ' / '
	}if (lambda==='%'&&!$) {
		plant[int] = ' % '
	}if (lambda==='*'&&!$) {
		plant[int] = ' * '
	}if (lambda==='^'&&!$) {
		plant[int] = ' ^ '
	}if (lambda==='$'&&!$) {
		plant[int] = ' $ '
	}if (lambda==='@'&&!$) {
		plant[int] = ' @ '
	}if (lambda=='@'&&plant[int+1]=='c'&&plant[int+2]=='a'&&plant[int+3]=='l'&&plant[int+4]=='l'&&!$) {
		plant[int] = ' @call '
		plant[int+1] = ''
		plant[int+2] = ''
		plant[int+3] = ''
		plant[int+4] = ''
	}if (lambda=='@'&&plant[int+1]=='d'&&plant[int+2]=='e'&&plant[int+3]=='f'&&!$) {
		plant[int] = ' @def '
		plant[int+1] = ''
		plant[int+2] = ''
		plant[int+3] = ''
	}
	if (lambda==='='&&!$) {
		if (plant[int+1]=='=') {
			plant[int] = ''
			plant[int+1] = ' == '
		}else if (plant[int+1]=='!') {
			plant[int] = ''
			plant[int+1] = ' =! '
		}else{plant[int] = ' = '}
	}if (lambda==='?'&&!$) {
		plant[int] = ' ? '
	}if ((lambda==='('||lambda===')')&&!$) {
		if(lambda==='('){onion[0]++}
		else {onion[1]++}
		plant[int] = ' '+plant[int]+' '
	}
	int++;
});var foo='';
plant.forEach(lambda => {
	foo += lambda
});
if (onion[0]!==onion[1]) {
	foo = foo.replace(/(\(|\))/g,' ')
}
plant = foo.split('');foo=''
int = 0
$ = false
plant.forEach(lambda => {
	if (plant[int-1]===' '&&plant[int]===' '&&!$) {
		plant[int-1] = ''
	}if(lambda==='"'||lambda==='\''&&!$){
		$=true
		if (lambda === "'") {currstring="'"}
		else {currstring='"'}
	}else if(lambda===currstring&&$&&plant[int-1]!=='\\') {
		$=false
		currstring=''
	}int++;
});plant.forEach(lambda => {foo += lambda});
plant = foo.split(' ')
var carrot = {
	root:{},
	core:{},
};var carrots = 0
var potato = 0
$ = false
for (let tomato = 0; tomato < plant.length; tomato++) {
	const slot = plant[tomato];
	if (slot === '$') {
		if (plant[tomato+2] === '=') {
			carrot.core[carrots] = plant[tomato+3]
			carrot.root[plant[tomato+1]] = carrots
			carrots++
		}if (plant[tomato+2] === '=!') {
			try {
				if (plant[tomato+3]==='$') {
					potato = carrot.root[plant[tomato+1]]
					carrot.core[potato] = carrot.core[carrot.root[plant[tomato+4]]]
				}else{
					carrot.core[potato] = plant[tomato+3]
				}
			} catch (Exception) {
				carrot.core[carrots] = plant[tomato+3]
				carrot.root[plant[tomato+1]] = carrots
				carrots++
			}
		}
	}if (slot==='puts') {
		if (plant[tomato+1]==='$') {
			try {
				console.log(carrot.core[carrot.root[plant[tomato+2]]])
			}
		}
	}
			if (plant[tomato]=='@') {
				break
			}if (plant[tomato]==undefined) {
				tomato = value
				break
			}tomato++
		}
	}if (slot == '@call') {
		if (Pumpkins[plant[tomato+1]] !== undefined){
			Candle++
			Carver[Candle] = tomato
			tomato = Pumpkins[plant[tomato+1]]
		}
	}if (slot === '@') {
		tomato = Carver[Candle]
		Candle--
	}
}// console.log(carrot);console.log(Pumpkins);console.log(foo) // for development