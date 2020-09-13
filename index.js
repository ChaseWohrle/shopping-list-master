$(function() {
  $(".js-additem").click(renderShoppingItem);  
  $(".shopping-list").on("click" , ".shopping-item-toggle", checkShoppingItem);
  $(".shopping-list").on("click" , ".shopping-item-delete" , deleteShoppingItem);
});  

function shoppingItemHTML(name) {
  return `<li>
  <span class="shopping-item">`+ name +`</span>
  <div class="shopping-item-controls">
    <button class="shopping-item-toggle">
      <span class="button-label">check</span>
    </button>
    <button class="shopping-item-delete">
      <span class="button-label">delete</span>
    </button>
  </div>
</li>`
}

function renderShoppingItem(event) {
  event.preventDefault();
  const name = $("input").val();
  const shoppingItem = shoppingItemHTML(name);
  $(".shopping-list").append(shoppingItem)
}

function checkShoppingItem(event) {
  event.preventDefault(); 
  $(this).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");
}

function deleteShoppingItem(event) {
  event.preventDefault();
  $(this).closest("li").remove();
}
