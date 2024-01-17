
function searchEmoji(){
    let inputValue = document.getElementById("search_field").value;
    displayResult(inputValue);
}

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
  
    const columns = 6;
  
    filteredData.forEach((e, index) => {
      let card = document.createElement("div");
      card.classList.add("emoji-card");
  
      let new_emoji = document.createElement("div");
      new_emoji.classList.add("emoji");
      new_emoji.innerText = e.emoji;
  
      let new_aliases = document.createElement("div");
      new_aliases.classList.add("aliases");
      new_aliases.innerText = e.aliases.join(", ");
  
      let new_desc = document.createElement("div");
      new_desc.classList.add("desc");
      new_desc.innerText = e.description;
  
      card.appendChild(new_emoji);
      card.appendChild(new_aliases);
      card.appendChild(new_desc);
  
      parent.appendChild(card);
  
      if ((index + 1) % columns === 0) {
        parent.appendChild(document.createElement("br"));
      }
    });
  
    let clearfix = document.createElement("div");
    clearfix.classList.add("clearfix");
    parent.appendChild(clearfix);
  }
  
document.getElementById("search_field").addEventListener("keyup", searchEmoji)

window.onload = () => displayResult();
