// Module to import images into their corresponding element
// This is used to allow webpack to compile images in the /index.js file
export default function bacCalculator() {
    let bacCalcElement = document.getElementById('bac-calc');
    if (bacCalcElement) {
        // let gender = document.querySelector('input[name=gender]:checked');
        let weightSlider = document.querySelector('input[name=weightSlider]');
        let drinksSlider = document.querySelector('input[name=drinksSlider]');
        let hoursSlider = document.querySelector('input[name=hoursSlider]');
        let weightLabel = document.getElementById('weight-label');
        let drinksLabel = document.getElementById('drinks-label');
        let hoursLabel = document.getElementById('hours-label');
        let bacLabel = document.getElementById('bac-total');
        let beerABV = document.getElementById('abv').dataset.value;
        let gender = 'female';
        let distRatio = gender === 'male' ? 0.58 : 0.49;
        let weight = weightSlider.value;
        let drinks = drinksSlider.value;
        let hours = hoursSlider.value;
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
            // (A × 5.14/W × r) - .015 × H
            //     Where:
            //        A: Total alcohol consumed, in ounces (oz) (drink equal 0.098767oz per 1%)
            //        W: Body weight, in pounds (lbs)
            //        r: The alcohol distribution ratio, 0.73 for man, and 0.66 for women
            //        H: Time passed since drinking, in hours
            let alcoholGrams = drinks * (beerABV * 2.8);
            let bac =
                (alcoholGrams / (weight * 453.592 * distRatio)) * 100 -
                hours * 0.015;
            bac = Math.round(bac * 100) / 100;
            weightLabel.innerHTML = 'Body Weight: ' + weight;
            drinksLabel.innerHTML = 'Drinks: ' + drinks;
            hoursLabel.innerHTML = 'Hours: ' + hours;
            bacLabel.innerHTML = 'BAC: ' + bac;
        }
    }
}
