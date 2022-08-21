(function(){
    const ratingElements = document.querySelectorAll(".rating-blobs-container .rating-blob");
    const submitButton = document.querySelector(".submit-button");
    const ratingComponentElement = document.querySelector(".rating-component");
    const thankYouComponentElement = document.querySelector(".thank-you-component");
    
    let activeRatingElement = null;
    ratingElements.forEach(element => {
        element.addEventListener("click", setActiveRating);        
    });
    submitButton.addEventListener("click", submitRating);

    //Events
    function setActiveRating(event) {
        if (activeRatingElement == null) {
            activeRatingElement = event.currentTarget;
        }
        else {
            activeRatingElement.classList.remove("active");
            activeRatingElement = event.currentTarget;
        }
        activeRatingElement.classList.add("active");
    }

    function submitRating(event) {
        ratingComponentElement.classList.remove("active");
        thankYouComponentElement.classList.add("active");
        const ratingSpanElement = document.querySelector(".selected-rating");
        ratingSpanElement.textContent = activeRatingElement.firstChild.textContent;
    }
    
})();
