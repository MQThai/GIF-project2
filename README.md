# GIF-project2
GIF Library is for users to save gifs for easy access and future use instead of having to comb and look through their bookmarks.

## Features
* Filter/search function for faster access
* Users can add tags for easier recall of gifs

## Unsolved Problems
* Users don't have their own collection of gifs
* Users signing up/logging have no connection to management of their collection of gifs
* Filter/search is case sensitive
* Tags don't open a new collection of gifs relating to specified tag
## Credits
James Reichard for helping with the filter/search function.

The function is done with DOM manipulation
```
// gifs shown
var ul = document.getElementById('gifTable') 

// search field
var search = document.querySelector('#search')

// search bar functionality
search.addEventListener('keyup', searchFunction)

function searchFunction (event) {
  let listItems = ul.getElementsByTagName('li')
  Array.from(listItems).forEach(item => {
    a = item.getElementsByTagName('a')[0]
    if (a.dataset.tags.includes(event.target.value)) {
      item.style.display = ''
    } else {
      item.style.display = 'none'
    }
  })
}
```
The function looks for ```data-tags="{{this.tags}}"``` of each gif
## Resources
* https://www.w3schools.com/
* https://stackoverflow.com/
* https://giphy.com/