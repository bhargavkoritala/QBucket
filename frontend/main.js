inputs = 4;

function addInput(){
	for(var i=0;i<inputs;i++){
			document.getElementById('qForm').innerHTML+= '<div class="form-group"><label for="question">Option '+ (i+1) +':</label><input'+ ' id="option' +i+'"  class="form-control form-control-sm" type="text" placeholder="Options"></div>';
	}
} 

function beginTest(){
	document.getElementById('start').style.display = 'none';
	document.getElementById('test').style.display = 'block'; 
};

