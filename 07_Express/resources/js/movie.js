document.addEventListener('DOMContentLoaded', function () {
    console.log('HTML Loaded....');
    //getReviews();
});

var listUl = null;
var movieId = null;

function getReviews() {
    listUl = document.querySelector('ul.reviews');
    movieId = listUl.dataset.id;
    fetch('/movies/' + movieId + '/reviews', {
            method: 'get'
        }).then(response => response.json())
        .then(data => showReviews(data));
}

function showReviews(data) {
    /**
     * <li class="list-group-item">
            <div class="font-weight-bold">sjlee</div>
            <div>This movie is good~!</div>
        </li>
    */
    elementEmpty(listUl);
    console.log(data);
    data.forEach(movie => {
        var liTag = document.createElement('li');
        var writerTag = document.createElement('div');
        var contentTag = document.createElement('div');
        liTag.classList.add('list-group-item');
        writerTag.classList.add('font-weight-bold');
        writerTag.innerText = movie.writer;
        contentTag.innerText = movie.review;
        liTag.appendChild(writerTag);
        liTag.appendChild(contentTag);
        listUl.appendChild(liTag);
    });
}

function elementEmpty(element) {
    while (element.hasChildNodes()) {
        element.removeChild(element.firstChild);
    }
}

function addReview() {
    listUl = document.querySelector('ul.reviews');
    movieId = listUl.dataset.id;
    var writerData = document.querySelector("input[name='writer'");
    var reviewData = document.querySelector("input[name='review'");
    var postData = {
        writer: writerData.value,
        review: reviewData.value
    }
    console.log('Add Review', postData);
    fetch('/movies/' + movieId + '/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        }).then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.Result == 'Success') {
                alert("Add a review! Thank you :)");
                location.reload();
            }
        })
        .catch(err => console.log("Can't add a Review"));
}