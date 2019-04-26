// Module to import images into their corresponding element
// This is used to allow webpack to compile images in the /index.js file
export default function bacCalculator() {
    var bacCalcElement = document.getElementById('bac-calc');
    if (bacCalcElement) {
        // var gender = document.querySelector('input[name=gender]:checked');
        var weightSlider = document.querySelector('input[name=weightSlider]');
        var drinksSlider = document.querySelector('input[name=drinksSlider]');
        var hoursSlider = document.querySelector('input[name=hoursSlider]');
        var weightLabel = document.getElementById('weight-label');
        var drinksLabel = document.getElementById('drinks-label');
        var hoursLabel = document.getElementById('hours-label');
        var bacLabel = document.getElementById('bac-total');
        var beerABV = document.getElementById('abv').dataset.value;
        var gender = 'female';
        var weight = weightSlider.value;
        var drinks = drinksSlider.value;
        var hours = hoursSlider.value;
        bacFormula();

        weightSlider.addEventListener('change', function() {
            weight = this.value;
            bacFormula();
        });

        drinksSlider.addEventListener('change', function() {
            drinks = this.value;
            bacFormula();
        });

        hoursSlider.addEventListener('change', function() {
            hours = this.value;
            bacFormula();
        });

        function bacFormula() {
            var number1 = gender === 'male' ? 0.68 : 0.55;
            var number2 = gender === 'male' ? 0.015 : 0.017;
            // (A × 5.14/W × r) - .015 × H
            //     Where:
            //        A: Total alcohol consumed, in ounces (oz)
            //        W: Body weight, in pounds (lbs)
            //        r: The alcohol distribution ratio, 0.73 for man, and 0.66 for women
            //        H: Time passed since drinking, in hours

            var bac =
                ((drinks * (beerABV * 2.8)) /
                    (number1 * (weight * 453.592) * (hours / 60))) *
                    100 -
                number2;
            // bac = Math.max(0, Math.round(bac * 100) / 100);
            weightLabel.innerHTML = 'Body Weight: ' + weight;
            drinksLabel.innerHTML = 'Drinks: ' + drinks;
            hoursLabel.innerHTML = 'Hours: ' + hours;
            bacLabel.innerHTML = 'BAC: ' + bac;
        }
    }
}
