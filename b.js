<script>
        // Function to display the uploaded image
        document.getElementById('uploadInput').addEventListener('change', function(event) {
            var file = event.target.files[0];
            var reader = new FileReader();
            reader.onload = function(event) {
                var img = document.createElement('img');
                img.src = event.target.result;
                document.getElementById('imageContainer').innerHTML = '';
                document.getElementById('imageContainer').appendChild(img);
            };
            reader.readAsDataURL(file);
        });





        function checkColor() {
            alert("Checking the image colour...");
            var img = document.querySelector('#imageContainer img');
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');
            var width = img.width;
            var height = img.height;
            canvas.width = width;
            canvas.height = height;
            ctx.drawImage(img, 0, 0, width, height);

            var imageData = ctx.getImageData(0, 0, width, height);
            var pixels = imageData.data;
            var redCount = 0;
            var greenCount = 0;
            var blueCount = 0;

            // Counting the number of red, green, and blue pixels
            for (var i = 0; i < pixels.length; i += 4) {
                var r = pixels[i];
                var g = pixels[i + 1];
                var b = pixels[i + 2];
                if (r > g && r > b) {
                    redCount++;
                } else if (g > r && g > b) {
                    greenCount++;
                } else if (b > r && b > g) {
                    blueCount++;
                }
            }

            // Calculating the percentage 
            var totalPixels = width * height;

            var redPercentage = (redCount / totalPixels) * 100;
            var greenPercentage = (greenCount / totalPixels) * 100;
            var bluePercentage = (blueCount / totalPixels) * 100;
            // Checking if the image is reddish,grren,blue
            if (redCount > blueCount+greenCount&& redPercentage>50) {
                alert("The image is reddish.");
            } 
            if (greenCount > blueCount+redCount && greenPercentage>50) {
                alert("The image is Greenish.");
            } 
            if (blueCount > redCount+greenCount) {
                alert("The image is Blueish.");
            } 
        }
        






        function makeReddish() {
            var img = document.querySelector('#imageContainer img');
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');
            var width = img.width;
            var height = img.height;
            canvas.width = width;
            canvas.height = height;
            ctx.drawImage(img, 0, 0, width, height);

            var imageData = ctx.getImageData(0, 0, width, height);
            var pixels = imageData.data;
            for (var i = 0; i < pixels.length; i += 4) {
                pixels[i] += 50;
            }

            // Put the modified image data back to the canvas
            ctx.putImageData(imageData, 0, 0);

            // Replace the original image with the modified one
            var modifiedImg = new Image();
            modifiedImg.src = canvas.toDataURL();
            document.getElementById('imageContainer').innerHTML = '';
            document.getElementById('imageContainer').appendChild(modifiedImg);
        }








        function makeGreenish() {
            var img = document.querySelector('#imageContainer img');
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');
            var width = img.width;
            var height = img.height;
            canvas.width = width;
            canvas.height = height;
            ctx.drawImage(img, 0, 0, width, height);

            var imageData = ctx.getImageData(0, 0, width, height);
            var pixels = imageData.data;

            // Adjusting the RGB values to enhance the green channel
            for (var i = 0; i < pixels.length; i += 4) {
                // Increase the green channel value
                pixels[i + 1] += 50; //  can adjust this value to control the intensity of green
            }

            // Put the modified image data back to the canvas
            ctx.putImageData(imageData, 0, 0);

            // Replace the original image with the modified one
            var modifiedImg = new Image();
            modifiedImg.src = canvas.toDataURL();
            document.getElementById('imageContainer').innerHTML = '';
            document.getElementById('imageContainer').appendChild(modifiedImg);
        }








        function makeBlueish() {
            var img = document.querySelector('#imageContainer img');
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');
            var width = img.width;
            var height = img.height;
            canvas.width = width;
            canvas.height = height;
            ctx.drawImage(img, 0, 0, width, height);

            var imageData = ctx.getImageData(0, 0, width, height);
            var pixels = imageData.data;

            for (var i = 0; i < pixels.length; i += 4) {
                // Increase the blue channel value
                pixels[i + 2] += 50; // can adjust this value to control the intensity of blue
            }

            ctx.putImageData(imageData, 0, 0);

            var modifiedImg = new Image();
            modifiedImg.src = canvas.toDataURL();
            document.getElementById('imageContainer').innerHTML = '';
            document.getElementById('imageContainer').appendChild(modifiedImg);
        }



        function duplicateImage() {
            var img = document.querySelector('#imageContainer img');
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');
            var width = img.width;
            var height = img.height;
            canvas.width = width;
            canvas.height = height;
            ctx.drawImage(img, 0, 0, width, height);

            var imageData = ctx.getImageData(0, 0, width, height);

            // Create a new canvas and context for the duplicated image
            var duplicateCanvas = document.createElement('canvas');
            var duplicateCtx = duplicateCanvas.getContext('2d');
            duplicateCanvas.width = width;
            duplicateCanvas.height = height;

            // Put the duplicated image data onto the new canvas
            duplicateCtx.putImageData(imageData, 0, 0);

            // Create a new image element and set its source to the duplicated canvas
            var duplicatedImg = new Image();
            duplicatedImg.src = duplicateCanvas.toDataURL();

            // Append the duplicated image to the image container
            document.getElementById('imageContainer').appendChild(duplicatedImg);
        }







        function increaseBrightness() {
            var img = document.querySelector('#imageContainer img');
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');
            var width = img.width;
            var height = img.height;
            canvas.width = width;
            canvas.height = height;
            ctx.drawImage(img, 0, 0, width, height);

            var imageData = ctx.getImageData(0, 0, width, height);
            var pixels = imageData.data;

            for (var i = 0; i < pixels.length; i += 4) {
                pixels[i] += 50; // Increase red channel
                pixels[i + 1] += 50; // Increase green channel
                pixels[i + 2] += 50; // Increase blue channel
            }
            
            ctx.putImageData(imageData, 0, 0);

            var modifiedImg = new Image();
            modifiedImg.src = canvas.toDataURL();
            document.getElementById('imageContainer').innerHTML = '';
            document.getElementById('imageContainer').appendChild(modifiedImg);
        }







        function reduceResolution() {
            var img = document.querySelector('#imageContainer img');
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');
            var width = img.width;
            var height = img.height;
            var newWidth = width / 2; // Reduce width by half
            var newHeight = height / 2; // Reduce height by half
            canvas.width = newWidth;
            canvas.height = newHeight;
            ctx.drawImage(img, 0, 0, newWidth, newHeight);

            var reducedImg = new Image();
            reducedImg.src = canvas.toDataURL();
            document.getElementById('imageContainer').innerHTML = '';
            document.getElementById('imageContainer').appendChild(reducedImg);
        }





        function createAvatar() {
            var img = document.querySelector('#imageContainer img');
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');
            var size = Math.min(img.width, img.height); 
            canvas.width = size;
            canvas.height = size;

            var centerX = img.width / 2;
            var centerY = img.height / 2;

            // Calculate the starting point for cropping the image
            var startX = centerX - (size / 2);
            var startY = centerY - (size / 2);

            // Draw the cropped image onto the canvas
            ctx.drawImage(img, startX, startY, size, size, 0, 0, size, size);

            // Create a new image element for the avatar
            var avatarImg = new Image();
            avatarImg.src = canvas.toDataURL();

            // Replace the original image with the avatar
            document.getElementById('imageContainer').innerHTML = '';
            document.getElementById('imageContainer').appendChild(avatarImg);
        }






        // g. Make a RGB image to Gray scale image
        function rgbToGrayScale() {
            var img = document.querySelector('#imageContainer img');
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');
            var width = img.width;
            var height = img.height;
            canvas.width = width;
            canvas.height = height;
            ctx.drawImage(img, 0, 0, width, height);

            var imageData = ctx.getImageData(0, 0, width, height);
            var pixels = imageData.data;






            // Convert RGB to grayscale
            for (var i = 0; i < pixels.length; i += 4) {
                var avg = (pixels[i] + pixels[i + 1] + pixels[i + 2]) / 3;
                pixels[i] = avg;
                pixels[i + 1] = avg;
                pixels[i + 2] = avg;
            }

            ctx.putImageData(imageData, 0, 0);

            var grayScaleImg = new Image();
            grayScaleImg.src = canvas.toDataURL();
            document.getElementById('imageContainer').innerHTML = '';
            document.getElementById('imageContainer').appendChild(grayScaleImg);
        }










        // h. Generate QR code from an image
        function generateQRCode() {






       }







        // i. Filter images based on some criteria and show only those images when that filter is selected
        function filterImages(criteria) {
            var img = document.querySelector('#imageContainer img');
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');
            var width = img.width;
            var height = img.height;
            canvas.width = width;
            canvas.height = height;
            ctx.drawImage(img, 0, 0, width, height);

            var imageData = ctx.getImageData(0, 0, width, height);
            var pixels = imageData.data;

            // Filter images based on the criteria
            for (var i = 0; i < pixels.length; i += 4) {
                var r = pixels[i];
                var g = pixels[i + 1];
                var b = pixels[i + 2];

                // Example criteria: filter images with more red than green and blue
                if (r > g && r > b) {
                    // Keep the pixel as it is
                } else {
                    // Set the pixel to white (remove it)
                    pixels[i] = 255; // Red
                    pixels[i + 1] = 255; // Green
                    pixels[i + 2] = 255; // Blue
                    pixels[i + 3] = 0; // Alpha (transparent)
                }
            }

            // Put the modified image data back to the canvas
            ctx.putImageData(imageData, 0, 0);

            // Replace the original image with the modified one
            var filteredImg = new Image();
            filteredImg.src = canvas.toDataURL();
            document.getElementById('imageContainer').innerHTML = '';
            document.getElementById('imageContainer').appendChild(filteredImg);
        }





        // j. Create thumbnails of the images
        function createThumbnails() {
    var img = document.querySelector('#imageContainer img');
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var thumbnailWidth = 100; // Adjust the width of the thumbnail as needed
    var thumbnailHeight = 100; // Adjust the height of the thumbnail as needed
    canvas.width = thumbnailWidth;
    canvas.height = thumbnailHeight;

    // Draw the image onto the canvas with the desired thumbnail dimensions
    ctx.drawImage(img, 0, 0, thumbnailWidth, thumbnailHeight);

    // Create a new image element for the thumbnail
    var thumbnailImg = new Image();
    thumbnailImg.src = canvas.toDataURL();

    // Display the thumbnail in the image container
    document.getElementById('imageContainer').innerHTML = '';
    document.getElementById('imageContainer').appendChild(thumbnailImg);
}

function applyBlur() {
    var img = document.querySelector('#imageContainer img');
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var blurAmount = 5; // Adjust the blur amount as needed

    canvas.width = img.width;
    canvas.height = img.height;

    // Draw the image onto the canvas
    ctx.drawImage(img, 0, 0);

    // Apply Gaussian blur
    ctx.filter = 'blur(' + blurAmount + 'px)';

    // Draw the blurred image back onto the canvas
    ctx.drawImage(canvas, 0, 0);

    // Create a new image element for the blurred image
    var blurredImg = new Image();
    blurredImg.src = canvas.toDataURL();

    // Replace the original image with the blurred image
    document.getElementById('imageContainer').innerHTML = '';
    document.getElementById('imageContainer').appendChild(blurredImg);
}

    </script>