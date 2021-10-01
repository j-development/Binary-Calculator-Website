let result = document.getElementById('res');
let buttons = Array.from(document.getElementsByClassName('buttonClass'));

buttons.map(button => {button.addEventListener('click', e => {
  switch(e.target.innerText){
    case 'C':
        result.innerText = '';
        break;
    case '=':
        try{
            if(result.innerText.indexOf('+') != -1){
              var nums = result.innerText.split('+');
              var x = parseInt(nums[0], 2)
              var y = parseInt(nums[1], 2)
              var sum = x + y;
              result.innerText = sum.toString(2);
            }
            else if(result.innerText.indexOf('-') != -1){
              var nums = result.innerText.split('-');
              var x = parseInt(nums[0], 2)
              var y = parseInt(nums[1], 2)
              var sum = x - y;
              result.innerText = sum.toString(2);
            }
            else if(result.innerText.indexOf('*') != -1){
              var nums = result.innerText.split('*');
              var x = parseInt(nums[0], 2)
              var y = parseInt(nums[1], 2)
              var sum = x * y;
              result.innerText = sum.toString(2);
            }
            else if(result.innerText.indexOf('/') != -1){
              var nums = result.innerText.split('/');
              var x = parseInt(nums[0], 2)
              var y = parseInt(nums[1], 2)
              var sum = Math.floor(x / y);
              result.innerText = sum.toString(2);
            }
            
        }
        catch{
            result.innerText = 'Error!';
        }
        break;
    default:
        result.innerText += e.target.innerText;
    
}
})
});