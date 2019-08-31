let color = document.querySelector('input[name="color"]');
console.log(color);
color.oninput = () => {
    document.documentElement.style.setProperty('--color', color.value);
};

updateRangeValue('--spacing', 'spacing', 'spacing-value');
updateRangeValue('--blur', 'blur', 'blur-value');

function updateRangeValue(cssVariableName, inputName, valueId) {
    let element = document.querySelector(`input[name="${inputName}"]`);
    let elementValue = document.getElementById(valueId);
    element.oninput = () => {
        document.documentElement.style.setProperty(cssVariableName, `${element.value}${element.dataset.sizing}`);
        elementValue.innerText = element.value;
        console.log(`${inputName} = ${element.value}${element.dataset.sizing}`)
    };
}