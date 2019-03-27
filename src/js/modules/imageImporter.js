// // Module to import images into their corresponding element
// // This is used to allow webpack to compile images in the /index.js file
// export default function imageImporter(imgSrc, imgID) {
//     let img = new Image();
//     let imgElement = document.getElementById(imgID);
//     img.src = imgSrc;
//
//     // If the element exists, append the image to it.
//     if (imgElement) {
//         imgElement.appendChild(img);
//     }
// }

// Module to import images into their corresponding element
// This is used to allow webpack to compile images in the /index.js file
export default function imageImporter(images) {
    images.forEach(function(imgSrc, imgID) {
        let img = new Image();
        let imgElement = document.getElementById(imgID);
        img.src = imgSrc;

        // If the element exists, append the image to it.
        if (imgElement) {
            imgElement.appendChild(img);
        }
    });
}
