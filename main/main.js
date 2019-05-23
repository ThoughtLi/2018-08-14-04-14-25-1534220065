module.exports = function main(number) {
    console.log("Debug Info");
	var out = '';
	for(var i = 0;i < 3 ; i++){
		for(var n = 0;n < number.length ;n ++){
			out += match(i,number.toString().charAt(n));
			if(n != number.length-1)
			out+=' ';
			else
			out+='\n';
		}
	}

    return out;
	function match (i,data){
		if(i==0){
			switch (data){
				case '0':
					return '._.';
					break;
				case '1':
					return '...';
					break;
				case '2':
					return '._.';
					break;
				case '3':
					return '._.';
					break;
				case '4':
					return '...';
					break;
				case '5':
					return '._.';
					break;
				case '6':
					return '._.';
					break;
				case '7':
					return '._.';
					break;
				case '8':
					return '._.';
					break;
				case '9':
					return '._.';
					break;
			}
		}
		if(i==1){
			switch (data){
				case '0':
					return '|.|';
					break;
				case '1':
					return '..|';
					break;
				case '2':
					return '._|';
					break;
				case '3':
					return '._|';
					break;
				case '4':
					return '|_|';
					break;
				case '5':
					return '|_.';
					break;
				case '6':
					return '|_.';
					break;
				case '7':
					return '..|';
					break;
				case '8':
					return '|_|';
					break;
				case '9':
					return '|_|';
					break;
			}
		}
		if(i==2){
			switch (data){
				case '0':
					return '|_|';
					break;
				case '1':
					return '..|';
					break;
				case '2':
					return '|_.';
					break;
				case '3':
					return '._|';
					break;
				case '4':
					return '..|';
					break;
				case '5':
					return '._|';
					break;
				case '6':
					return '|_|';
					break;
				case '7':
					return '..|';
					break;
				case '8':
					return '|_|';
					break;
				case '9':
					return '..|';
					break;
			}
		}
	}
};