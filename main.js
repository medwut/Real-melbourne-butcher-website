// this was the declared component 
var component1 = {
    template: '<div> Payment On Delivery. </div>'

}
var component2 = {
    template:'<button class="fancy-btn"> <slot></slot> </button>'
}
// This was used to add components and email/location to show when user entered it
Vue.createApp({
    data() {
        return {
            email: '',
            checkedNames: []
        }
    },
    components:{
        component1,
        component2,
    }
}).mount('#app')


var addItemId = 0;
// this was used to add functionality to the cart system.
function addTocart(item) {
    addItemId += 1;
    var selectedItem = document.createElement('div');
    selectedItem.classList.add('cartImg');
    selectedItem.setAttribute('id', addItemId);

    var img = document.createElement('img');
    img.setAttribute('src', item.children[0].currentSrc);

    var title = document.createElement('div');
    title.innerText = item.children[1].innerText;

    var label = document.createElement('div');
    label.innerText = item.children[2].children[0].innerText;

    var select = document.createElement('span');
    select.innerText = item.children[2].children[1].value;
    label.append(select);

    var delBtn = document.createElement('button');
    delBtn.innerText = 'Delete';
    delBtn.setAttribute('onclick','del('+addItemId+')');

    var cartItems = document.getElementById('title');
    selectedItem.append(img);
    selectedItem.append(title);
    selectedItem.append(label);
    selectedItem.append(delBtn);
    cartItems.append(selectedItem);
}
// this was added to be able to delete from the cart
function del (item){
    document.getElementById(item).remove();
}


 FancyButton('Click me!')

// FancyButton renders slot content in its own template
function FancyButton(slotContent) {
  return `<button class="fancy-btn">
      ${slotContent}
    </button>`
}

function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
// expermintals
const btn = document.getElementById('btn');

// var activeColor =ref('red')
