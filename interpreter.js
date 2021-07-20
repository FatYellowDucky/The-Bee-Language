// Vegetables [potato, carrot, pumpkin]
const fs = require('fs');
var fil=process.argv[2];
var onion = []
onion[0] = 0
onion[1] = 0
var int=0;var $=false;try{
	fs.readFileSync(fil).toString()
	var currstring = ''
}catch(Exception){
	console.log(`[*~*] File '${fil}' not found`)
	process.exit(1)
}var plant = fs.readFileSync(fil).toString().split('');
var Pumpkins = {}
var Carver = [0]
var Candle = 0
// parsing the code
plant.forEach(lambda => {
	// check if the current character is the first character of a string
	if(lambda==='"'||lambda==='\''&&!$){
		// goto string mode
		$=true
		if (lambda === "'") {currstring="'"}
		else {currstring='"'}
		plant[int] = ` ${lambda} `
	}// check if the current character is the last character of a string
	else if(lambda===currstring&&$&&plant[int-1]!=='\\') {
		// goto non-string mode
		$=false
		currstring = ''
		plant[int] = ` ${lambda} `
	};if (lambda==='\r'||lambda==='\n') {plant[int] = ' '}
	if (lambda==='#' && plant[int+1]==='/' && !$) {
		// comments
		plant[int] = ' #/ '
		plant[int+1] = ''
	}
	// check the current character is an arithmetic operator
	if (lambda==='+'&&!$) {plant[int] = ' + '}
	if (lambda==='-'&&!$) {plant[int] = ' - '}
	if (lambda==='/'&&!$) {plant[int] = ' / '}
	if (lambda==='%'&&!$) {plant[int] = ' % '}
	if (lambda==='*'&&!$) {plant[int] = ' * '}
	if (lambda==='^'&&!$) {plant[int] = ' ^ '}
	if (lambda==='$'&&!$) {plant[int] = ' $ '}
	if (lambda==='@'&&!$) {plant[int] = ' @ '}
	if (lambda==='?'&&!$) {plant[int] = ' ? '}
	if (lambda===':'&&!$) {plant[int] = ' : '}
	if (lambda===':'&&plant[int+1]===':'&&!$) {
		plant[int] = ' :: '
		plant[int+1] = ''
	}// check if its an atcall call comand
	if (lambda=='@'&&plant[int+1]=='c'&&plant[int+2]=='a'&&
			plant[int+3]=='l'&&plant[int+4]=='l'&&!$) {
			plant[int] = ' @call '
			plant[int+1] = ''
			plant[int+2] = ''
			plant[int+3] = ''
			plant[int+4] = ''
	}if ( // check if its an atwith command
		lambda=='@'&&plant[int+1]=='w'&&plant[int+2]=='i'&&
		plant[int+3]=='t'&&plant[int+4]=='h'&&!$
	) {
		plant[int] = ' @with '
		plant[int+1] = ''
		plant[int+2] = ''
		plant[int+3] = ''
		plant[int+4] = ''
	}if (// check if its an atcall define command
			lambda=='@'&&plant[int+1]=='d'&&
			plant[int+2]=='e'&&plant[int+3]=='f'&&!$) {
			plant[int] = ' @def '
			plant[int+1] = ''
			plant[int+2] = ''
			plant[int+3] = ''
	}if (lambda=='^'&&plant[int+1]=='a'&&plant[int+2]=='d'&&
		plant[int+3]=='d'&&!$) {
		plant[int] = ' ^add '
		plant[int+1] = ''
		plant[int+2] = ''
		plant[int+3] = ''
		plant[int+4] = ''
	}if (lambda=='^'&&plant[int+1]=='b'&&plant[int+2]=='i'&&
		plant[int+3]=='n'&&!$) {
		plant[int] = ' ^bin '
		plant[int+1] = ''
		plant[int+2] = ''
		plant[int+3] = ''
		plant[int+4] = ''
	}if (lambda=='^'&&plant[int+1]=='h'&&plant[int+2]=='e'&&
		plant[int+3]=='x'&&!$) {
		plant[int] = ' ^hex '
		plant[int+1] = ''
		plant[int+2] = ''
		plant[int+3] = ''
		plant[int+4] = ''}
	// condition and variable things
	if (lambda==='='&&!$) {
		if (plant[int+1]=='=') {
			plant[int] = ''
			plant[int+1] = ' == '
		}else if (plant[int+1]=='!') { // variable re-assignment
			plant[int] = ''
			plant[int+1] = ' =! '
		}else{plant[int] = ' = '}
	}if ((lambda==='('||lambda===')')&&!$) {
		if(lambda==='('){onion[0]++}
		else {onion[1]++}
		plant[int] = ' '+plant[int]+' '
	}if (lambda=='/'&&plant[int+1]=='?'&&!$) { // atwith string
		plant[int+1] = ''
		plant[int] = ' ?/ '
	}if (lambda=='-'&&plant[int+1]=='>'&&!$) { // atwith string
		plant[int+1] = ''
		plant[int] = ' -> '
	}int++;
});// set foo to the new plant
var foo='';
plant.forEach(lambda => {
	foo += lambda
});if (onion[0]!==onion[1]) {
	foo = foo.replace(/(\(|\))/g,' ')
}// set plant to the new foo
plant = foo.split('');foo=''
int = 0
$ = false
// remove whitespace
plant.forEach(lambda => {
	if (plant[int-1]===' '&&plant[int]===' '&&!$) {
		plant[int-1] = ''
	}if(lambda==='"'||lambda==='\''&&!$){
		$=true
		if (lambda === "'") {currstring="'"}
		else {currstring='"'}
	}else if(lambda===currstring&&$&&plant[int-1]!=='\\') {
		currstring=''
		$=false
	};int++;
});plant.forEach(lambda => {foo += lambda});
plant = foo.split(' ')
// variable variables
var carrot = {
	root:{},
	core:{},
};var carrots = 0
var potato = 0
$ = false
// start interpreting
for (let tomato = 0; tomato < plant.length; tomato++) {
	const slot = plant[tomato];
	if (slot === '#/') {
		// comments
		let value = tomato+1
		while(plant[tomato] != '#/'){
			if (plant[tomato] === undefined){
				tomato = value
			}
		}
	}
	if (slot === '$') {
		let endvalue = Math.floor((Math.random()+1)*(Math.random()+1)*(Math.random()+1))
		// assigning variables
		if (plant[tomato+2] === '=') {
			// strings
			if (plant[tomato+3] === '\'') {
				let str = ''
				let start = tomato
				let value = tomato+4
				tomato += 4
				while (plant[tomato] != '\''){
					if (plant[tomato-1] === '\'') {
						str += plant[tomato]
					}else if (plant[tomato+1] === '\'') {
						str += ' '+plant[tomato]
					}else if (plant[tomato+1] !== '\''&&plant[tomato-1] !== '\'') {
						str += ' '+plant[tomato]+' '
					}
					if (plant[tomato] === undefined) {
						tomato = value
						break
					}
					tomato += 1
				}
				tomato = start
				endvalue = str
			}else if (plant[tomato+3] === '?'){// arithemtic
				let one
				let two
				let oporatore = '+'
				tomato += 3	
				// check if its a variable
				if (plant[tomato+1]=='$') {// set one to the variable
					oporatore = plant[tomato+3]
					tomato++;tomato++ // 1 -> 3
					one = carrot.core[carrot.root[plant[tomato]]]
				}else{// set one to the value
					tomato++; // 1 -> 2
					oporatore = plant[tomato+1]
					one = plant[tomato]
				}// check if its a variable
				if (plant[tomato+2]=='$') {// set two to the variable
					two = carrot.core[carrot.root[plant[tomato+3]]]
				} else {// set two to the value
					two = plant[tomato+2]
				}if (oporatore == '*') { // check if oporatore is valid
					endvalue = parseFloat(one)*parseFloat(two)
				}else if (oporatore == '+') { // check if its +
					endvalue = parseFloat(one)+parseFloat(two)
				}else if (oporatore == '-') { // check if its -
					endvalue = parseFloat(one)-parseFloat(two)
				}else if (oporatore == '/') { // check if its /
					endvalue = parseFloat(one)/parseFloat(two)
				}else if (oporatore == '%') { // check if its %
					endvalue = parseFloat(one)%parseFloat(two)
				}else if (oporatore == '^') { // check if its ^
					endvalue = parseFloat(one)^parseFloat(two)
				}else { // check if its not a valid operator
					endvalue = `nil`// if not set endvalue to `nil`
				}
			}else{
				endvalue = plant[tomato+3]
			}
			if (carrot.core[carrot.root[plant[tomato+1]]] === undefined) {
				carrot.core[carrots] = endvalue
				carrot.root[plant[tomato+1]] = carrots
				carrots++
			}
		}
		// reasigning variables
		if (plant[tomato+2] === '=!') {
			try {
				if (plant[tomato+3]==='$') {
					if (carrot.core[carrot.root[plant[tomato+4]]] == undefined) {
						plant[tomato+2] = '='
						tomato--
					}
				}else{
					carrot.core[potato] = plant[tomato+3]
				}
			} catch (Exception) {
				carrot.core[carrots] = plant[tomato+3]
				carrot.root[plant[tomato+1]] = carrots
				carrots++
			}
		}
	}
	if (plant[tomato]==='puts') {
		if (plant[tomato+1]==='$') {
			try {
				console.log(carrot.core[carrot.root[plant[tomato+2]]])
			} catch (Exception) {
				console.log(`nil`)
			}
		}else if (plant[tomato+1]=='?') {
			tomato++ // 0 -> 1
			let one
			let two
			let oporatore
			if (plant[tomato+1]=='$') {
				oporatore = plant[tomato+3]
				tomato++;tomato++ // 1 -> 3
				one = carrot.core[carrot.root[plant[tomato]]]
			}else{
				tomato++; // 1 -> 2
				oporatore = plant[tomato+1]
				one = plant[tomato]
			}if (plant[tomato+2]=='$') {
				two = carrot.core[carrot.root[plant[tomato+3]]]
			} else {
				two = plant[tomato+2]
			}
			if (oporatore == '*') {
				console.log(parseFloat(one)*parseFloat(two))
			}else if (oporatore == '+') {
				console.log(parseFloat(one)+parseFloat(two))
			}else if (oporatore == '-') {
				console.log(parseFloat(one)-parseFloat(two))
			}else if (oporatore == '/') {
				console.log(parseFloat(one)/parseFloat(two))
			}else if (oporatore == '%') {
				console.log(parseFloat(one)%parseFloat(two))
			}else if (oporatore == '^') {
				console.log(parseFloat(one)^parseFloat(two))
			}else {
				console.log(`nil`)
			}
		}
	}if (slot=='@def') {
		// define atcall
		Pumpkins[plant[tomato+1]] = tomato+1
		let value = tomato+2
		while (true) {
			if (plant[tomato]=='@') {
				break
			}if (plant[tomato]==undefined) {
				tomato = value
				break
			}tomato++
		}
	}if (slot == '@call') {
		// goto atcall mode
		if (Pumpkins[plant[tomato+1]] !== undefined){
			Candle++
			Carver[Candle] = tomato
			tomato = Pumpkins[plant[tomato+1]]
		}
	}if (slot === '@') {
		// set the value of tomato to the value of the candle
		// and subtract the value of the candle by one
		tomato = Carver[Candle]
		Candle--
	}if (slot == '@with'){
		// atwith time
		if (plant[tomato+1] == 'file') {
			let potato = 0
			if (plant[tomato+3] == 'read') {
				let dir = ''
				let value = tomato+5
				tomato += 5
				// get directory
				while(plant[tomato] != '?/'){
					if (plant[tomato] === '\'') {
						tomato++
						while(plant[tomato] !== '\''){
							if (plant[tomato-1] === '\'') {
								dir += plant[tomato]
							}else if (plant[tomato+1] === '\'') {
								dir += ' '+plant[tomato]
							}else if (plant[tomato+1] !== '\''&&plant[tomato-1] !== '\'') {
								dir += ' '+plant[tomato]+' '
							}
							if (plant[tomato] === undefined) {
								tomato = value
								break
							}
							tomato += 1
						}
					}
					if (plant[tomato] === undefined) {
						tomato = value
						potato = value
						break
					}
					potato = tomato+1
					tomato++
				}tomato = potato
				// read file
				if (plant[tomato+1] === '->') {
					tomato += 1
					if (plant[tomato+1] === '$') {
						tomato++
						// create variabile if it does not exit
						if (carrot.core[carrot.root[plant[tomato+1]]] === 'undefined') {
							carrot.core[carrots] = fs.readFileSync(dir).toString()
							carrot.root[plant[tomato+1]] = carrots
							carrots++
						}else {
							carrot.core[carrot.root[plant[tomato+1]]] = carrot.core[carrots] = fs.readFileSync(dir).toString()
						}
					}
				}
			}
			if (plant[tomato+3] == 'write') {
				// put variabiles
				let dir = ''
				let value = tomato+5
				tomato += 5
				// get directory
				while(plant[tomato] != '?/'){
					if (plant[tomato] === '\'') {
						tomato++
						while(plant[tomato] !== '\''){
							if (plant[tomato-1] === '\'') {
								dir += plant[tomato]
							}else if (plant[tomato+1] === '\'') {
								dir += ' '+plant[tomato]
							}else if (plant[tomato+1] !== '\''&&plant[tomato-1] !== '\'') {
								dir += ' '+plant[tomato]+' '
							}
							if (plant[tomato] === undefined) {
								tomato = value
								break
							}
							tomato += 1
						}
					}
					if (plant[tomato] === undefined) {
						tomato = value
						potato = value
						break
					}
					potato = tomato+1
					tomato++
				}tomato = potato
				// write to the file
				if (plant[tomato+1] === '$') {
					tomato++
					if (carrot.core[carrot.root[plant[tomato+1]]] === undefined) {
						1/0 // simple way to get to the catch block just divide by zero
					}else {
						// set the default value of the variable
						let contence = 'generic text'
						contence = carrot.core[carrot.root[plant[tomato+1]]].toString()
						if (contence == undefined) {
							// set value to 'generic text' if the variable is undefined
							contence = 'generic text'
						}
						// write to file
						fs.writeFileSync(dir, contence)
					}
				}// TODO: ‘:’ tag for epic variables
			}// TODO: updates without 100 lines of code, just less lines of code
		}// TODO: make into npm package for better code runing ablity and no more download from github
	}// TODO: user input
}// console.log(carrot);console.log(Pumpkins);console.log(carrots);console.log(foo) // for debugging
// NOTE: im adding coments to every thing yay
/* do not asign value non existant variable with '=!' */