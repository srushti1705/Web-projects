let isLiked = false;

function onClickLikeButton() {
    if (isLiked === false) {
        document.getElementById("puppyImage").src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
        document.getElementById("likeButton").style.backgroundColor = "#0967d2";
        document.getElementById("likeButton").style.color = "white";
        document.getElementById("likeIcon").style.color = "#0967d2";
        isLiked = true;
    }
    else {
        document.getElementById("puppyImage").src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
        document.getElementById("likeButton").style.backgroundColor = "#cbd2d9";
        document.getElementById("likeButton").style.color = "#9aa5b1";
        document.getElementById("likeIcon").style.color = "#9aa5b1";
        isLiked = false;
    }
}