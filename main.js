// var womanImages = ["ss2.png", "ss2.png", "ss2.png","ss2.png"];
//         var manImages = ["ss3.png", "ss3.png", "ss3.png","ss3.png"];
//         var kidsImages = ["ss4.png", "ss4.png", "ss4.png","ss4.png"];
//         var array = [
//             {img: 'ksnd', name:'sf', rating: 5, price: 100},{},{},{}
//         ]
//         var imageContainer = document.querySelector('#imageContainer');

// console.log('hwlwl',imageContainer)
//         showImages('woman');

//         function showImages(category) {
           
//             imageContainer.innerHTML = "";  // Clear previous content

//             var currentImages = [];

//             switch (category) {
//                 case 'woman':
//                     currentImages = womanImages;
//                     break;
//                 case 'man':
//                     currentImages = manImages;
//                     break;
//                 case 'kids':
//                     currentImages = kidsImages;
//                     break;
//                 default:
//                     break;
//             }

//             currentImages.forEach(function (src) {
//                 var imgElement = document.createElement('img');
//                 imgElement.id="as"
//                 imgElement.src = src;
                
//                 imgElement.style.margin = 'auto';
//                 imgElement.style.height = '433px';
//                 imgElement.style.padding = '10px';
//                 imageContainer.appendChild(imgElement);
//             });
//         }

var imagesData = [
    { name: 'Woman Image 1', rating: 4.5, price: '$20.99', src: 'ss2.png' },
    { name: 'Woman Image 2', rating: 4.2, price: '$25.99', src: 'ss2.png' },
    { name: 'Woman Image 3', rating: 4.8, price: '$30.99', src: 'ss2.png' },
    // Add more images with their information
];
var manImages = [
    { name: 'Man Image 1', rating: 4.0, price: '$22.99', src: 'ss3.png' },
    { name: 'Man Image 2', rating: 3.9, price: '$27.99', src: 'ss3.png' },
    { name: 'Man Image 3', rating: 4.2, price: '$32.99', src: 'ss3.png' },
    // Add more man images with their information
];

var kidsImages = [
    { name: 'Kids Image 1', rating: 4.7, price: '$15.99', src: 'ss4.png' },
    { name: 'Kids Image 2', rating: 4.1, price: '$18.99', src: 'ss4.png' },
    { name: 'Kids Image 3', rating: 4.5, price: '$21.99', src: 'ss4.png' },
    // Add more kids images with their information
];

// Show woman images by default when the page loads
showImages('woman');

function showImages(category) {
    var arr = ['woman', 'man', 'kids']
    
    var imageContainer = document.querySelector('.imageContainer');
    var sliderSpans = document.querySelectorAll('.slider span');
    sliderSpans.forEach(span => {
        span.classList.remove('highlight');
    });

    // Add the 'highlight' class to the clicked span
    var clickedSpan = document.querySelector(`#${category}`);
    clickedSpan.classList.add('highlight');

    // Remove the border from other spans
    arr.forEach(spanId => {
        if (spanId !== category) {
            var toRemoveSpan = document.querySelector(`#${spanId}`);
            toRemoveSpan.classList.remove('border-class'); // Replace 'border-class' with the actual class for the border
        }
    });

    // Additional code if needed
    console.log('Clicked span:', clickedSpan);

    imageContainer.innerHTML = "";  // Clear previous content

    var currentImages = [];

    switch (category) {
        case 'woman':
            currentImages = imagesData.filter(image => image.name.includes('Woman'));
            break;
        case 'man':
            currentImages = manImages.filter(image => image.name.includes('Man'));
            break;
        case 'kids':
            currentImages = kidsImages.filter(image => image.name.includes('Kids'));
            break;
        default:
            break;
    }

    currentImages.forEach(function (image) {
        // Create a container for image and information
        var imageInfoContainer = document.createElement('div');
        
        imageInfoContainer.style.textAlign = 'center';

        // Create elements for name, rating, price, and image
        var nameElement = document.createElement('p');
        nameElement.innerText = 'Name: ' + image.name;
        nameElement.style.color = 'gray'

        var ratingElement = document.createElement('p');
        ratingElement.innerText = 'Rating: ' + image.rating;

        var priceElement = document.createElement('p');
        priceElement.innerText = 'Price: ' + image.price;

        var imgElement = document.createElement('img');
        imgElement.classList.add('image2')
        imgElement.src = image.src;
        
        
        


        // Append elements to the container
        imageInfoContainer.appendChild(imgElement);
        imageInfoContainer.appendChild(nameElement);
        imageInfoContainer.appendChild(ratingElement);
        imageInfoContainer.appendChild(priceElement);

        // Append the container to the imageContainer
        imageContainer.appendChild(imageInfoContainer);
    });
}

        // // automatacily scrolling 
        // var myIndex = 0;
        // var index = 0;
        // carousel();

        // function carousel() {
        //     var i;
        //     var x = document.getElementsByClassName("mySlides");
        //     for (i = 0; i < x.length; i++) {
        //         x[i].style.display = "none";
        //     }
        //     myIndex++;
        //     if (myIndex > x.length) { myIndex = 1 }
        //     x[myIndex - 1].style.display = "block";
        //     setTimeout(carousel, 3000); // Change image every 4 seconds

        //     var j;
        //     var y = document.getElementsByClassName("dcr");
        //     for (j = 0; j < y.length; j++) {
        //         y[j].style.display = "none";
        //     }
        //     index++;
        //     if (index > y.length) {
        //         index = 1;
        //     }
        //     y[index - 1].style.display = "block";
        //     setTimeout(carousel, 2000);

            
        // }
        /* Position the "next button" to the right */
        let slideIndex = 1;
        showSlides(slideIndex);

        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        function currentSlide(n) {
            showSlides(slideIndex = n);
        }

        function showSlides(n) {
            let i;
            let slides = document.getElementsByClassName("mySlides");
            let dots = document.getElementsByClassName("dot");
            if (n > slides.length) { slideIndex = 1 }
            if (n < 1) { slideIndex = slides.length }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
        }

