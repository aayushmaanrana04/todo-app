// Function called while clicking add button
function add_item() {
 
    // Getting box and ul by selecting id;
    let item = document.getElementById("myInput");
    let list_item = document.getElementById("myUL");
    // const btn = `<button class="input-group-text" id="inputGroup-sizing-lg">x</button>`;

    



    if(item.value != ""){
   
        // Creating element and adding value to it
        let make_li = document.createElement("LI");
        make_li.setAttribute('style','display:flex;justify-content:space-between; align-items:center;')
        
        make_li.setAttribute('class','list-group-item');
        make_li.appendChild(document.createElement('label'));
        make_li.appendChild(document.createElement('button')).setAttribute('class','input-group-text');
        make_li.firstChild.innerHTML = item.value;
        make_li.lastChild.innerHTML = 'X';
        // Adding li to ul
        list_item.appendChild(make_li);
        // list_item.appendChild('button');
        // Reset the value of box
        item.value=""
        const strike = `text-decoration: line-through`;
        const unstrike = `text-decoration: none`;
        // Delete a li item on click
        let check = false;
        make_li.onclick = function(){
          // this.parentNode.removeChild(this);
          if(!check){
            this.firstChild.setAttribute('style',strike);
            check = !check;
          }
          else{
            this.firstChild.setAttribute('style',unstrike);
            
            
            check = !check;
          }
        }

        make_li.lastChild.onclick = function(){
            this.parentElement.parentElement.removeChild(this.parentElement);
            
        }
   
    }
    else{
   
      // Alert msg when value of box is "" empty.
      alert("plz add a value to item");
    }
   
  }