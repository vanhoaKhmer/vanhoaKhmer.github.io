dropDownStatus = ''

function ativeDropDownMenu(){
    if (dropDownStatus=='closing'){
        document.querySelector('.dropDown').style["display"] = 'none'
        document.getElementById('toggel_btn').innerHTML = '<i class="fa-solid fa-bars"></i>'
        dropDownStatus = 'opening'
    }else{
        document.querySelector('.dropDown').style["display"] = 'unset'
        document.getElementById('toggel_btn').innerHTML = '<i class="fa-solid fa-xmark"></i>'
        dropDownStatus = 'closing'
    }
}