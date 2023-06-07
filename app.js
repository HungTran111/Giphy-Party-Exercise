const $searchInput = $('#search');
const $gifContainer = $('#gif-container')


//add gif
function addGif(res) {
    let numResults = res.data.length;
    if(numResults){
        let randomIndex = Math.floor(Math.random() * numResults);
        let $newDivForGif = $('<div>');
        let $newGif = $('<img>', {
            src: res.data[randomIndex].images.original.url
        });
        $newDivForGif.append($newGif);
        $gifContainer.append($newDivForGif);
    }
}

//handle form submisson
$('form').on('submit', async function(e){
    e.preventDefault();

    let searchTerm = $searchInput.val();
    $searchInput.val('');

    const response = await axios.get("http://api.giphy.com/v1/gifs/search", { 
        params: {
        q: searchTerm,
        api_key: "M9DqJBBKUsvme7P4UPf9UFUsuUVZy7F1"
        }
    })
    addGif(response.data);
})

// remove gif
$('#remove').on('click', function(){
    $gifContainer.empty();
})

