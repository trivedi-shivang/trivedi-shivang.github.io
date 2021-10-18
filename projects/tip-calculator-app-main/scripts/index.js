let tip_percentage_option_value = {
    val: null
}
let input_elems = document.querySelectorAll('#bill-amount, #no-of-people');
let tip_percentage_option_input = document.querySelectorAll('.tip-percentage-option[type="number"]');
let tip_percentage_option = document.querySelectorAll('.tip-percentage-option[type="button"]');
let tip_amount_per_person_value = document.querySelectorAll('.tip-amount-per-person-value');
let total_per_person_value = document.querySelectorAll('.total-per-person-value');

addEventListeners(input_elems, 'input');
addEventListeners(tip_percentage_option_input, 'input', tip_percentage_option_value);
addEventListeners(tip_percentage_option, 'click', tip_percentage_option_value);

// Add event-listeners to both input_elems
function addEventListeners(input_elems, event_type, v) {
    input_elems.forEach(
        function(item){
            item.addEventListener(event_type, function(){
                item.value = item.value || 0;
                if(v) {
                    v.val = item.value;
                }
                updateTipAndTotal();
            })
        });
}

function everyElmsNonEmptyVals(els) {
    return Array.from(els).every((el)=>{
        return !!el.value;
    });
}


function updateTipAndTotal() {
    if(tip_percentage_option_value.val && everyElmsNonEmptyVals(input_elems)){
        let tip_per_person = Math.round(input_elems[0].value*tip_percentage_option_value.val/100/input_elems[1].value * 100)/100;
        let total_amount_per_person = Math.round((input_elems[0].value/input_elems[1].value + tip_per_person)*100)/100;
        tip_amount_per_person_value[0].textContent = tip_per_person;
        total_per_person_value[0].textContent = total_amount_per_person;
    }
}
