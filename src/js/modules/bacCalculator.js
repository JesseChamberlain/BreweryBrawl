// Module to import images into their corresponding element
// This is used to allow webpack to compile images in the /index.js file
export default function bacCalculator() {
    var bacCalcElement = document.getElementById('bac-calc');
    if (bacCalcElement) {
        console.log('bacCalculator');
    }
}
