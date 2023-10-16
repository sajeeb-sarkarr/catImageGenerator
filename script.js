const customCursor = document.querySelector(".custom-cursor");
const catImage = document.getElementById('catImage');

document.addEventListener("mousemove", (e) => {
    // Update the custom cursor position to follow the mouse
    customCursor.style.left = e.clientX + "px";
    customCursor.style.top = e.clientY + "px";
});

function fetchingCatImage() {
    const apiKey = 'live_LeSuArGyMeVuHrQvvK1RQ2DIz6XaqIs6f6o7g7rXJOH7hvaCathfYqGGIBmQl4lz';
    const apiUrl = "https://api.thecatapi.com/v1/images/search?q=British%20Longhair";

    fetch(apiUrl, {
        "method": "GET",
        "headers": { 'x-api-key': apiKey }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let imageUrl = data[0].url;

            document.getElementById("image").innerHTML = `<img src="${imageUrl}" width=300 height=360>`
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

}
