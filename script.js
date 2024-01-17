//keyup event is handled here
function searchEmoji(){
    let inputValue = document.getElementById("search_field").value;
    // console.log(inputValue);
    displayResult(inputValue);
    // return false;
}


//displaying the meojis from here
// ... (previous JavaScript code)

function displayResult(searchQuery = "") {
    let filteredData = emojiList.filter((e) => {
      if (e.description.indexOf(searchQuery) !== -1) {
        return true;
      }
  
      if (e.tags.some((elem) => elem.startsWith(searchQuery))) {
        return true;
      }
  
      if (e.aliases.some((elem) => elem.startsWith(searchQuery))) {
        return true;
      }
    });
  
    let parent = document.getElementById("search_result_container");
    parent.innerHTML = "";
  
    // Calculate the number of columns (6) for the grid
    const columns = 6;
  
    filteredData.forEach((e, index) => {
      // Create a card container
      let card = document.createElement("div");
      card.classList.add("emoji-card");
  
      // Create elements for emoji, aliases, and description
      let new_emoji = document.createElement("div");
      new_emoji.classList.add("emoji");
      new_emoji.innerText = e.emoji;
  
      let new_aliases = document.createElement("div");
      new_aliases.classList.add("aliases");
      new_aliases.innerText = e.aliases.join(", ");
  
      let new_desc = document.createElement("div");
      new_desc.classList.add("desc");
      new_desc.innerText = e.description;
  
      // Append elements to the card
      card.appendChild(new_emoji);
      card.appendChild(new_aliases);
      card.appendChild(new_desc);
  
      // Append the card to the parent container
      parent.appendChild(card);
  
      // If it's the last item in a row, add a line break
      if ((index + 1) % columns === 0) {
        parent.appendChild(document.createElement("br"));
      }
    });
  
    // Add clearfix to clear the float and prevent container collapse
    let clearfix = document.createElement("div");
    clearfix.classList.add("clearfix");
    parent.appendChild(clearfix);
  }
  
  // ... (other JavaScript code)
  

// console.log(emojiList);

//keyup event is applied here
document.getElementById("search_field").addEventListener("keyup", searchEmoji)

//first time to show all the emojis
window.onload = () => displayResult();