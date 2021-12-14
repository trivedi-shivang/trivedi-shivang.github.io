// track tip-value
let selected_tip = {
    val: null
}

let input_elems = document.querySelectorAll('#bill-amount, #no-of-people');
let tip_percentage_option_input = document.querySelectorAll('.tip-percentage-option[type="number"]');
let tip_percentage_option = document.querySelectorAll('.tip-percentage-option[type="button"]');
let tip_reset_button = document.querySelectorAll('.tip-reset-button');

let tip_amount_per_person_value = document.querySelectorAll('.tip-amount-per-person-value');
let total_per_person_value = document.querySelectorAll('.total-per-person-value');
let inputs = [
    {
        els: input_elems,
        event_type: 'input',
        fn: updateResults,
        update_tip: false
    }, {
        els: tip_percentage_option_input,
        event_type: 'input',
        fn: updateResults,
        update_tip: true,
        toggle_class_name: 'selected-tip'
    }, {
        els: tip_percentage_option,
        event_type: 'click',
        fn: updateResults,
        update_tip: true,
        toggle_class_name: 'selected-tip'
    }, {
        els: tip_reset_button,
        event_type: 'click',
        fn: resetInputs,
        update_tip: false
    }
]

for(let i=0;i<inputs.length;i++){
    addEventListeners(inputs[i]);
}

function updateResults(item, update_tip,toggle_class_name) {
    // toggle-class for selected button and prev-selected button
    toggleClasses(document.querySelector(`[value="${selected_tip.val}"]`), toggle_class_name);
    toggleClasses(item, 'selected-tip');
    if(update_tip) {
        selected_tip.val = item.value;
    }
    updateTipAndTotal();
}

function resetInputs() {
    // toggleClasses(document.querySelector(`[value="${selected_tip.val}"]`), 'selected-tip');
}

function addEventListeners({els, event_type, fn, update_tip, toggle_class_name}) {
    els.forEach(function(item){
        item.addEventListener(event_type, function(){
            fn(item, update_tip, toggle_class_name);
        });
    });
}

// check if all els (if exists) have non-empty values
function everyElmsNonEmptyVals(els) {
    return Array.from(els).every((el)=>{
        return !!el.value;
    });
}


// Toggle Class for prev-selected tip-option as well as for current tip-option
function toggleClasses(item, cls){
    item?.classList.toggle(cls);
}


function updateTipAndTotal() {
    if(selected_tip.val && everyElmsNonEmptyVals(input_elems)){
        let tip_per_person = Math.round(input_elems[0].value*selected_tip.val/100/input_elems[1].value * 100)/100;
        let total_amount_per_person = Math.round((input_elems[0].value/input_elems[1].value + tip_per_person)*100)/100;
        tip_amount_per_person_value[0].textContent = tip_per_person;
        total_per_person_value[0].textContent = total_amount_per_person;
    }
}
