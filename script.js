
let button = document.querySelector("button")

// TODO: Value convert

let kilo_to_pound = 2.20462;
let foot_to_meter = 0.3048;
let inches_to_meter = 0.0254;


const processing = (kilo, inch, foot) => {

    let weight = kilo * kilo_to_pound;
    let height = (inch * inches_to_meter) + (foot * foot_to_meter)

    if (weight <= 0 || height <= 0) {

        throw new Error("Please Enter a Positive Number")

    } else if (isNaN(weight) || isNaN(height)) {

        throw new Error("Please Input a Number")

    } else {
        let calculate = (weight / (height * height));
        let resultText = `Your weight is : ${weight.toFixed(1)} lbs\n Your height is ${height.toFixed(1)} meter\n Your BMI is ${calculate.toFixed(2)}`
        let create = document.createElement("p")
        create.innerText = resultText;
        let result = document.querySelector("#result")
        result.innerText = "";
        result.append(create)

    }
}


button.addEventListener("click", () => {

    let kilogram = Number.parseFloat(document.querySelector("#weight").value)
    let foot = Number.parseFloat(document.querySelector("#foot").value)
    let inches = Number.parseFloat(document.querySelector("#inches").value)

    try {

        processing(kilogram, foot, inches);
        document.querySelector("#weight").value = "";
        document.querySelector("#foot").value = "";
        document.querySelector("#inches").value = "";

    } catch (error) {

        console.log(error);

    }

})