// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(s) {
	s = s.split("");
	let test = [];
	s.forEach( (element,index) => {
      test.push(element.repeat(index+1).toLowerCase());  
	});
	test = capitalizeNames(test);
  	test = test.join("-");
	return test
}

function capitalizeNames(peopleArray) {
    return peopleArray.map(function(name) { 
        return name.split(' ').map(function(word) { 
            return word[0].toUpperCase() + word.slice(1).toLowerCase();
        });
    });
}

accum("ZpglnRxqenU")