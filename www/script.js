var markRegex = /^(?:[1-9]|0[1-9]|10)$/;
function markValidation() {
	var validation = true;
	var inputs = document.getElementsByTagName('input');
	for (let index = 0; index < inputs.length; ++index) {
		if (!markRegex.test(inputs[index].value)) {
			validation = false;
			document.getElementById(inputs[index].name).innerHTML = '<small class="form-text text-danger">Please input a number between 1-10</small>';
		}else{
            document.getElementById(inputs[index].name).innerHTML = '';
        }
	}
	return validation;
}


var daysArray ={
    0:'Sunday',
    1:'Monday',
    2:'Tuesday',
    3:'Wednesday',
    4:'Thursday',
    5:'Friday',
    6:'Saturday',
};
function seedDate(){
        let dayOptions='<option selected> Choose Date...</option>';
        for(let i = 1; i <=7;i++){
            var currentDate = new Date();
            currentDate.setDate(currentDate.getDate()+i);
            var dd = currentDate.getDate();
            var mm =  currentDate.getMonth()+1;
            var yyyy = currentDate.getFullYear();
            if(dd<10){
                dd='0'+dd;
            }

            if(mm<10){
                 mm='0'+mm;
            }
            var dateFormat = dd+'-'+mm+'-'+yyyy;
            var dayFormat = daysArray[currentDate.getDay()];
            dayOptions+='<option>' + dateFormat+', '+dayFormat +'</option>';
        }
        document.getElementById('daySelect').innerHTML=dayOptions;
        firstTimeRender=false;
    
}


function closeModal() {
    document.getElementById("modal").style.display = 'none';
}

function openRegister(){
  window.open("./signup.php");
}
