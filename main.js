const nameField = document.getElementById('nameField')
const priceField = document.getElementById('priceField')
const name = document.getElementById('name')
const price = document.getElementById('price')
const add = document.getElementById('add')
const list = document.getElementById('list')
const total = document.getElementById('total')

add.addEventListener('click', _ => {

  if (!name.value || !price.value) {
    showAlert()
    return
  }

  list.appendChild(createListItem(name.value, price.value))

  total.innerText = calculateTotal()
  clearFields()
})

function createListItem(name, price) {
  const listItemNode = document.createElement('li')
  const nameNode = document.createElement('span')
  const priceNode = document.createElement('span')
  const removeButton = document.createElement('button')
  const itemInfo = document.createElement('span')
  const wrapper = document.createElement('div')

  nameNode.innerText = `${name}:`
  priceNode.innerText = Number(price)
  priceNode.className = 'item-price'
  removeButton.innerText = 'X'
  removeButton.className = 'button button--error'
  removeButton.addEventListener('click', removeSelf)

  itemInfo.appendChild(nameNode)
  itemInfo.appendChild(document.createTextNode(' '))
  itemInfo.appendChild(priceNode)

  wrapper.appendChild(itemInfo)
  wrapper.appendChild(removeButton)
  wrapper.className = 'list-item'

  listItemNode.appendChild(wrapper)
  /*
   * listItemNode structure
   *
   * <li>
   *  <div class="list-item">
   *    <span>
   *      <span>Name</span>
   *      <span class="item-price">Price</span>
   *    </span>
   *    <button class="button button--error>X</button>
   *  </div>
   * </li>
   * */

  return listItemNode
}

function calculateTotal() {
  let prices = Array.from(document.querySelectorAll('.item-price'))
  prices = prices.map(el => el.innerText)

  let totalPrice = 0
  if (prices.length > 0) totalPrice = prices.reduce((t, v) => Number(t) + Number(v))
  return totalPrice
}


function removeSelf(e) {
  e.target.closest('li').remove()
  total.innerText = calculateTotal()
}

function showAlert() {
  if(!name.value) {
    nameField.classList.add('field--error')
    name.classList.add('input--error')
  }
  if(!price.value) {
    priceField.classList.add('field--error')
    price.classList.add('input--error')
  }
}


function clearFields() {
  name.value = ''
  price.value = ''
  nameField.classList.remove('field--error')
  priceField.classList.remove('field--error')
  name.classList.remove('input--error')
  price.classList.remove('input--error')



}
