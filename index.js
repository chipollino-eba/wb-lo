let items = [
  {
    id: 1,
    name: 'Футболка UZcotton мужская',
    color: 'белый',
    size: '56',
    storage: 'Коледино WB',
    provider: 'ООО Вайлдберриз',
    price: 1051,
    img: './img/man-tshirt.jpg',
    max: 2,
    count: 1,
    discount: 0.55,
    isChecked: false,
    address: '42181, Московская область, г.о. Подольск, д. Коледино, тер. Индустриальный Парк Коледино, д. 6 стр. 1',
    ogrn: 5167746237148,

  },

  {
    id: 2,
    name: 'Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe',
    color: 'прозрачный',
    storage: 'Коледино WB',
    provider: 'ООО Мегапрофстиль',
    price: 10000,
    img: './img/case.jpg',
    max: 4,
    count: 1,
    discount: 0.8,
    isChecked: false,
    address: '129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34',
    ogrn: 5167746237148,

  },

  {
    id: 3,
    name: 'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные, Faber-Castell',
    storage: 'Коледино WB',
    provider: 'ООО Вайлдберриз',
    price: 522,
    img: './img/pencils.jpg',
    max: 10,
    count: 1,
    discount: 0.55,
    isChecked: false,
    address: '42181, Московская область, г.о. Подольск, д. Коледино, тер. Индустриальный Парк Коледино, д. 6 стр. 1',
    ogrn: 5167746237148,
  },
]

const renderItems = (items) => {
  let cart = items
    .map((item, index, arr) => {
      return `
        <div class="cart-form__item" id="item-${item.id}">
          <div class="cart-form__item-info">
            <div class="cart-form__image-wrapper">
              <input class="cart-form__checkbox checkbox" id=${
                item.id
              } type="checkbox" onchange="handleCheckboxChange(this.id)" ${
                item.isChecked ? 'checked' : ''
              }/> 
              <a class="cart-form__image-link" href="#">
                <img class="cart-form__item-image" src=${item.img} alt=${
                  item.name
                }/>
              </a>
              ${item.size ? `<div class="cart-form__size-mobile-container"><p class="cart-form__size-mobile-text">${item.size}</p></div>`: ''}
            </div>

            <div class="cart-form__item-text">
              <div class="cart-form__item-price-value-mobile">
                <p class="cart-form__price-new">${
                  Math.round(item.price * item.discount * item.count)
                }<span class="cart-form__item-price-currency"> сом</span></p>
                <p class="cart-form__price-old">${item.price * item.count} <span class="cart-form__item-price-currency cart-form__price-old">сом</span></p>
              </div>
              <h2 class="cart-form__item-header">${item.name}</h2>
              <div class="cart-form__item-properties properties-${
                item.color || item.size ? true : false
              }">
                <span class="cart-form__text properties-${
                  item.color ? true : false
                }">Цвет: ${item.color}</span>
                <span class="cart-form__text item__size properties-${
                  item.size ? true : false
                }">Размер: ${item.size}</span>
              </div>
              <div class="cart-form__item-storage">
                <span class="cart-form__text">${item.storage}</span>
                <div class="cart-form__item-provider">
                  <span class="cart-form__text">${item.provider}</span>
                  <svg class="cart-form__info-icon icon-${item.id}" id="icon-${item.id}" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8" cy="8" r="7.5" stroke="#A0A0A4"/>
                    <path d="M7.88867 5.58691C7.62826 5.58691 7.41504 5.51042 7.24902 5.35742C7.08301 5.20117 7 5.01074 7 4.78613C7 4.55501 7.08301 4.36621 7.24902 4.21973C7.41504 4.07324 7.62826 4 7.88867 4C8.15234 4 8.36556 4.07324 8.52832 4.21973C8.69434 4.36621 8.77734 4.55501 8.77734 4.78613C8.77734 5.02051 8.69434 5.21257 8.52832 5.3623C8.36556 5.51204 8.15234 5.58691 7.88867 5.58691ZM8.65039 11.3779H7.10742V6.37793H8.65039V11.3779Z" fill="#A0A0A4"/>
                  </svg>
                  <p class="cart-form__provider-tooltip" id="tooltip-${item.id}">
                    <span class="cart-form__provider-tooltip-name">${item.provider}</span>
                    <span class="cart-form__provider-tooltip-ogrn">ОГРН: ${item.ogrn} </span>
                    <span class="cart-form__provider-tooltip-adress">${item.address}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="cart-form__item-price">
            <div class="cart-form__item-price-buttons">
              <div class="counter">
                <div class="counter__wrapper">
                  <button class="counter__button" onclick="handleCountChange(this.id, -1)" id="minus-${
                    item.id
                  }">–</button>
                  <input class="counter__input" type="number" value='${
                    item.count
                  }' id="count-${item.id}"/>
                  <button class="counter__button" onclick="handleCountChange(this.id, 1)" id="plus-${
                    item.id
                  }">+</button>
                </div>
              </div>
              <label class="cart-form__item-price-label none-${item.max - item.count >= 5}" for="count">Осталось ${
                item.max - item.count
              } шт.</label>
              <div class="cart-form__item-icons" id="icons-${item.id}">
                <svg class="cart-like" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.03399 4.05857C2.26592 4.75224 1.76687 5.83284 1.99496 7.42928C2.22335 9.02783 3.26497 10.6852 4.80439 12.3478C6.25868 13.9184 8.10965 15.4437 9.99999 16.874C11.8903 15.4437 13.7413 13.9184 15.1956 12.3478C16.7351 10.6852 17.7767 9.02783 18.005 7.4293C18.2331 5.83285 17.734 4.75224 16.9659 4.05856C16.1767 3.34572 15.055 3 14 3C12.132 3 11.0924 4.08479 10.5177 4.68443C10.4581 4.7466 10.4035 4.80356 10.3535 4.85355C10.1583 5.04882 9.84169 5.04882 9.64643 4.85355C9.59644 4.80356 9.54185 4.7466 9.48227 4.68443C8.9076 4.08479 7.868 3 5.99999 3C4.94498 3 3.82328 3.34573 3.03399 4.05857ZM2.36374 3.31643C3.37372 2.40427 4.75205 2 5.99999 2C8.07126 2 9.34542 3.11257 9.99999 3.77862C10.6545 3.11257 11.9287 2 14 2C15.2479 2 16.6262 2.40428 17.6362 3.31644C18.6674 4.24776 19.2669 5.66715 18.995 7.5707C18.7233 9.47217 17.515 11.3148 15.9294 13.0272C14.3355 14.7486 12.3064 16.3952 10.3 17.9C10.1222 18.0333 9.87776 18.0333 9.69999 17.9C7.69356 16.3952 5.66446 14.7485 4.07063 13.0272C2.48506 11.3148 1.27668 9.47217 1.00501 7.57072C0.733043 5.66716 1.33253 4.24776 2.36374 3.31643Z" fill="black"/>
                </svg>

                <svg class="cart-delete" id="delete-${
                  item.id
                }" onclick="handleDelete(this.id)" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 5C2.5 4.72386 2.72386 4.5 3 4.5H17C17.2761 4.5 17.5 4.72386 17.5 5C17.5 5.27614 17.2761 5.5 17 5.5H3C2.72386 5.5 2.5 5.27614 2.5 5Z" fill="black"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.4584 4.5H16.5059L15.6411 15.6926C15.5405 16.9947 14.4546 18 13.1486 18H6.84639C5.54299 18 4.45829 16.9986 4.35435 15.6994L3.4584 4.5ZM4.5416 5.5L5.35117 15.6196C5.41353 16.3992 6.06435 17 6.84639 17H13.1486C13.9322 17 14.5837 16.3968 14.6441 15.6155L15.4256 5.5H4.5416Z" fill="black"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M13 5.5H7V3.46875C7 2.65758 7.65758 2 8.46875 2H11.5312C12.3424 2 13 2.65758 13 3.46875V5.5ZM8.46875 3C8.20987 3 8 3.20987 8 3.46875V4.5H12V3.46875C12 3.20987 11.7901 3 11.5312 3H8.46875Z" fill="black"/>
                </svg>
              </div>
            </div>
            <div class="cart-form__item-price-value">
              <p class="cart-form__price-new">${
                  Math.round(item.count * (item.price - (item.price * item.discount)))
              } <span class="cart-form__item-price-currency">сом</span></p>
              <div class="cart-form__price-old-wrapper">
                <p class="cart-form__price-old" id="price-tooltip-trigger-${item.id}"> ${item.price * item.count} <span class="cart-form__item-price-currency cart-form__price-old">сом</span></p>
                <div class="cart-form__price-tooltip" id="price-tooltip-${item.id}">
                  <span class="cart-form__price-tooltip-row">
                    <p class="cart-form__price-tooltip-discount">Скидка ${Math.round(item.discount * 100)}%</p>
                    <p>–${ Math.round(item.count * item.price * item.discount)} сом</p>
                  </span>
                  <span class="cart-form__price-tooltip-row">
                    <p class="cart-form__price-tooltip-discount" >Скидка покупателя 0%</p>
                    <p>-0 сом</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          ${ index !== arr.length-1 ? '<span class="section-list-split mobile-split"></span>' : ''}
        </div>`
    })
    .join('')

  const cartContainer = document.querySelector('.cart-form__items-list')
  if (cart === '') {
    cart = `пустая корзина`
  }


  cartContainer.innerHTML = cart
  iconsHover()
  tooltipProviderHandler()
  tooltipPriceHandler()
  renderSidebar(items)
  setCounterStyle()
  cartLabelCounter()
}
const renderUnavailableItems = (items) => {
  let cart = items.map((item, index, arr) => {
    return `
    <div class="cart-form__item" id="item-${item.id}">
      <div class="cart-form__item-info cart-page__item-info--disabled">
        <div class="cart-form__image-wrapper">
          <a class="cart-form__image-link" href="#">
            ${item.size ? `<div class="cart-form__size-mobile-container"><p class="cart-form__size-mobile-text">${item.size}</p></div>`: ''}
            <img class="cart-form__item-image cart-page__item-image--disabled" src="${item.img}" alt="${item.name}"/>
          </a>
        </div>

        <div class="cart-form__item-text">
          <h2 class="cart-form__item-header">${item.name}</h2>
              <div class="cart-form__item-properties properties-${item.color || item.size ? true : false}">
                <span class="cart-form__text properties-${item.color ? true : false}">Цвет: ${item.color}</span>
                <span class="cart-form__text item__size properties-${item.size ? true : false}">Размер: ${item.size}</span>
              </div>
        </div>
      </div>
      <div class="cart-form__item-price">
        <div class="cart-form__item-price-buttons buttons-unavailable">
          <div class="cart-form__item-icons" id="icons-${item.id}">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M3.03399 4.05857C2.26592 4.75224 1.76687 5.83284 1.99496 7.42928C2.22335 9.02783 3.26497 10.6852 4.80439 12.3478C6.25868 13.9184 8.10965 15.4437 9.99999 16.874C11.8903 15.4437 13.7413 13.9184 15.1956 12.3478C16.7351 10.6852 17.7767 9.02783 18.005 7.4293C18.2331 5.83285 17.734 4.75224 16.9659 4.05856C16.1767 3.34572 15.055 3 14 3C12.132 3 11.0924 4.08479 10.5177 4.68443C10.4581 4.7466 10.4035 4.80356 10.3535 4.85355C10.1583 5.04882 9.84169 5.04882 9.64643 4.85355C9.59644 4.80356 9.54185 4.7466 9.48227 4.68443C8.9076 4.08479 7.868 3 5.99999 3C4.94498 3 3.82328 3.34573 3.03399 4.05857ZM2.36374 3.31643C3.37372 2.40427 4.75205 2 5.99999 2C8.07126 2 9.34542 3.11257 9.99999 3.77862C10.6545 3.11257 11.9287 2 14 2C15.2479 2 16.6262 2.40428 17.6362 3.31644C18.6674 4.24776 19.2669 5.66715 18.995 7.5707C18.7233 9.47217 17.515 11.3148 15.9294 13.0272C14.3355 14.7486 12.3064 16.3952 10.3 17.9C10.1222 18.0333 9.87776 18.0333 9.69999 17.9C7.69356 16.3952 5.66446 14.7485 4.07063 13.0272C2.48506 11.3148 1.27668 9.47217 1.00501 7.57072C0.733043 5.66716 1.33253 4.24776 2.36374 3.31643Z" fill="black"/>
            </svg>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 5C2.5 4.72386 2.72386 4.5 3 4.5H17C17.2761 4.5 17.5 4.72386 17.5 5C17.5 5.27614 17.2761 5.5 17 5.5H3C2.72386 5.5 2.5 5.27614 2.5 5Z" fill="black"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M3.4584 4.5H16.5059L15.6411 15.6926C15.5405 16.9947 14.4546 18 13.1486 18H6.84639C5.54299 18 4.45829 16.9986 4.35435 15.6994L3.4584 4.5ZM4.5416 5.5L5.35117 15.6196C5.41353 16.3992 6.06435 17 6.84639 17H13.1486C13.9322 17 14.5837 16.3968 14.6441 15.6155L15.4256 5.5H4.5416Z" fill="black"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M13 5.5H7V3.46875C7 2.65758 7.65758 2 8.46875 2H11.5312C12.3424 2 13 2.65758 13 3.46875V5.5ZM8.46875 3C8.20987 3 8 3.20987 8 3.46875V4.5H12V3.46875C12 3.20987 11.7901 3 11.5312 3H8.46875Z" fill="black"/>
            </svg>
          </div>
        </div>
        <div class="cart-form__item-price-value">
        </div>
      </div>
       ${ index !== arr.length-1 ? '<span class="section-list-split mobile-split"></span>' : ' '}
    </div>
    `


  }).join('')

  const cartEmptyContainer = document.querySelector('.items-unavailable')
  cartEmptyContainer.innerHTML = cart

  iconsHover()
  tooltipPriceHandler()

}

const renderSidebar = (items) => {
  const totalSum = document.querySelector('#total-sum')
  const totalOldPrice = document.querySelector('#oldprice-sum')
  const totalDiscount = document.querySelector('#total-discount')


  let [oldSum,discountSum, sum, count] = [0, 0, 0, 0, 0]
  items.forEach((item) => {
    if (item.isChecked) {
      sum += Math.round(item.count * (item.price - (item.price * item.discount)))
      discountSum += Math.round(item.count * item.price * item.discount)
      oldSum += item.price * item.count
      count++
    }
  })

  totalSum.innerHTML = sum
  totalDiscount.innerHTML = '–' + discountSum + ' сом'
  totalOldPrice.innerHTML = oldSum + ' сом'


  const counter = document.querySelector('#sidebar-counter')
  counter.innerHTML = count + ' ' + getNoun(count, 'товар', 'товара', 'товаров')
  handlePaymentAgreement(sum)
}

document.addEventListener('DOMContentLoaded', () => {

  renderItems(items)
  renderUnavailableItems(items)
  tooltipPriceHandler()
  tooltipPaymentHandler()
  tooltipSidebarPaymentHandler()
  openPaymentModal()
  closePaymentModal()
  closeDeliveryModal()
  openDeliveryModal()
  cartLabelCounter()





  //accordion
  const acc = document.getElementsByClassName('list-button')
  let panel = document.getElementsByClassName('cart-form__items-list')

  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function () {
      this.classList.toggle('list-button-active')

      if (panel[i].style.display !== 'none') {
        panel[i].style.display = 'none'
      } else {
        panel[i].style.display = 'flex'
      }
    })
  }

  const userForm = document.getElementById('user-form')

  userForm.addEventListener('submit', function (event) {
    event.preventDefault()
    inputValidationSubmit(this)
  })

  userForm.querySelectorAll('input').forEach(input => {
    input.addEventListener('blur', function(event) {
      inputValidationBlur(input)
    })
  })
})

function handleCheckboxChange(id) {
  const checkboxes = document.querySelectorAll('.checkbox')
  const mainCheckbox = document.querySelector('.checkbox')

  if (id == 0) {
    items = items.map((item) => {
      return {
        ...item,
        isChecked: mainCheckbox.checked,
      }
    })
  } else {
    const idx = items.findIndex((item) => item.id == id)
    items[idx].isChecked = checkboxes[idx + 1].checked
    const isAllChecked = items.reduce((acc, item) => {
      return acc && item.isChecked
    }, true)

    mainCheckbox.checked = isAllChecked
  }
  renderItems(items)
}

//delete-item
function handleDelete(rawId) {
  const id = rawId.replace('delete-', '')
  const idx = items.findIndex((item) => item.id == id)
  items.splice(idx, 1)
  renderItems(items)
  renderUnavailableItems(items)
}

//counter
function handleCountChange(rawId, diff) {
  const id = rawId.split('-')[1]

  items = items.map((item) => {
    const nextCount = item.count + diff
    if (item.id == id && nextCount >= 0 && nextCount <= item.max) {
      return {
        ...item,
        count: nextCount,
      }
    }
    return item
  })

  renderItems(items)
}

//payment-agreement

function handlePaymentAgreement(sum) {
  const checkbox = document.querySelector('.agreement-checkbox')
  const button = document.querySelector('.sidebar__order-button')

  if (checkbox.checked) {
    button.innerHTML = `Оплатить ${sum} сом`
  } else {
    button.innerHTML = 'Заказать'
  }

  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      button.innerHTML = `Оплатить ${sum} сом`
    } else {
      button.innerHTML = 'Заказать'
    }
  })
}

//icons hover
function iconsHover() {
  const getId = items.map((item) => {
    const el = document.getElementById(`item-${item.id}`)
    const hiddenDiv = document.getElementById(`icons-${item.id}`)

    if (document.body.clientWidth>800){
      el.addEventListener('mouseover', function handleMouseOver() {
        hiddenDiv.style.display = 'flex'
      })

      el.addEventListener('mouseout', function handleMouseOut() {
        hiddenDiv.style.display = 'none'
      })
    }

  })
}

//
function getNoun(number, one, two, five) {
  let n = Math.abs(number)
  n %= 100
  if (n >= 5 && n <= 20) {
    return five
  }
  n %= 10
  if (n === 1) {
    return one
  }
  if (n >= 2 && n <= 4) {
    return two
  }
  return five
}

//tooltip

function tooltipProviderHandler() {
  const getId = items.map(item => {
    const tooltip = document.getElementById(`tooltip-${item.id}`)
    const icon = document.getElementById(`icon-${item.id}`)

    icon.addEventListener('mouseover', function handleMouseOver() {
      tooltip.style.display = 'inherit'
    })

    icon.addEventListener('mouseout', function handleMouseOut() {
      tooltip.style.display = 'none'
    })

  })
}


function tooltipPaymentHandler() {
  const tooltip = document.getElementById(`form-payment-tooltip`)
  const icon = document.getElementById(`form-payment-tooltip-trigger`)

  icon.addEventListener('mouseover', function handleMouseOver() {
    tooltip.style.display = 'inherit'
  })

  icon.addEventListener('mouseout', function handleMouseOut() {
    tooltip.style.display = 'none'
  })
}

function tooltipSidebarPaymentHandler() {
  const tooltip = document.getElementById(`sidebar-payment-tooltip`)
  const icon = document.getElementById(`sidebar__tooltip-payment-trigger`)

  icon.addEventListener('mouseover', function handleMouseOver() {
    tooltip.style.display = 'inherit'
  })

  icon.addEventListener('mouseout', function handleMouseOut() {
    tooltip.style.display = 'none'
  })
}
function tooltipPriceHandler() {
  const getId = items.map(item => {
    const tooltip = document.getElementById(`price-tooltip-${item.id}`)
    const icon = document.getElementById(`price-tooltip-trigger-${item.id}`)

    icon.addEventListener('mouseover', function handleMouseOver() {
      tooltip.style.display = 'flex'
    })

    icon.addEventListener('mouseout', function handleMouseOut() {
      tooltip.style.display = 'none'
    })

  })
}

function setCounterStyle() {

    const getId = items.map(item => {
      const counterValue = document.querySelector(`#count-${item.id}`)
      const counterPlus = document.querySelector(`#plus-${item.id}`)
      const counterMinus = document.querySelector(`#minus-${item.id}`)
        if (counterValue.value == item.max) {
          counterPlus.classList.add('disabled')
        } else if (counterValue.value == 0) {
          counterMinus.classList.add('disabled')
        }
  })
}


//input validation
function inputValidationBlur(input) {
  const emailLabel = document.querySelector('#email-label')
  const phoneLabel = document.querySelector('#phone-label')
  const innLabel = document.querySelector('#inn-label')
  function createError(input, errorLabelText, label) {
    input.classList.add('error')
    label.style.color = 'red'
    label.innerHTML = errorLabelText
  }
  function removeError(input, label) {
    if (input.classList.contains('error')) {
      input.classList.remove('error')
      label.innerHTML = ' '
      label.style.color = 'black'
    }
  }

  switch (input.id) {
      case 'email':
        switch (input.value) {
          case "": {
            removeError(input, emailLabel)
          }
          break
          default: if ((input.value.toLowerCase()
            .match(
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            ) === null)) {
            createError(input, 'Проверьте адрес электронной почты', emailLabel)
          } else {
            removeError(input, emailLabel)
          }
          break
        }
        break

      case 'phone':
        switch (input.value) {
          case "":
            removeError(input, phoneLabel)
            break
          default: if (input.value.match(/^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d$/) === null) {
            createError(input, 'Формат: +7 999 999 99 99', phoneLabel)
          } else {
            removeError(input, phoneLabel)
          }
            break
        }
        break
      case 'inn':
        switch (input.value) {
          case "":
            removeError(input, innLabel)
            innLabel.innerHTML = 'Для таможенного управления'
            break
          default:
            if (input.value.length < 14 || input.value.length > 14) {
              createError(input, 'Проверьте ИНН', innLabel)
            } else {
              removeError(input, phoneLabel)
              innLabel.style.color = 'black'
              innLabel.innerHTML = 'Для таможенного управления'
            }
        }
        break
    }
}
function inputValidationSubmit(form) {
  const nameLabel = document.querySelector('#name-label')
  const surnameLabel = document.querySelector('#surname-label')
  const emailLabel = document.querySelector('#email-label')
  const phoneLabel = document.querySelector('#phone-label')
  const innLabel = document.querySelector('#inn-label')
  function createError(input, errorLabelText, label) {
    input.classList.add('error')
    label.innerHTML = errorLabelText
    label.style.color = 'red'
    window.scrollTo(0, document.body.scrollHeight);
  }
  function removeError(input, label) {
    if (input.classList.contains('error')) {
      input.classList.remove('error')
      label.innerHTML = ' '
    }
  }

  form.querySelectorAll('input').forEach(input => {
    switch (input.id) {
      case 'name':
        if (input.value === "") {
          createError(input, 'Введите имя', nameLabel)
        } else {
          removeError(input, nameLabel)
        }
        break
      case 'surname':
        if (input.value === "") {
          createError(input, 'Введите фамилию', surnameLabel)
        } else {
          removeError(input, surnameLabel)
        }
        break
      case 'email':
        switch (input.value) {
          case "":
            createError(input, 'Укажите электронную почту', emailLabel)
            break
          default:
            if (input.value.toLowerCase()
              .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              ) === null) {
              createError(input, 'Проверьте адрес электронной почты', emailLabel)
            } else {
              removeError(input, emailLabel)
            }
            break
        }
        break
      case 'phone':
        switch (input.value) {
          case "":
            createError(input, 'Укажите номер телефона', phoneLabel)
            break
          default:
            if (input.value.match(/^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d$/) === null) {
              createError(input, 'Формат: +7 999 999 99 99', phoneLabel)
            } else {
              removeError(input, phoneLabel)
            }
            break
        }
        break
      case 'inn':
        switch (input.value){
          case "":
            createError(input, 'Укажите ИНН', innLabel)
            innDefault.style.display = 'none'
            break
          default:
            if (input.value.length < 14 || input.value.length > 14) {
              createError(input, 'Проверьте ИНН', innLabel)
              innDefault.style.display = 'none'
            } else {
              removeError(input, phoneLabel)
              innLabel.style.display = 'none'
            }
        }
    }
  })

}



function openPaymentModal() {
  const modal = document.querySelector('.modal-payment')
  const openText = document.querySelector('.payment-button-text')
  const open = document.querySelector('.payment-button')

  open.addEventListener('click', () => {
      modal.style.display = 'flex'
    })

  openText.addEventListener('click', () => {
    modal.style.display = 'flex'
  })
}

function closePaymentModal() {
  const close = document.querySelector('#closePayment')
  const modal = document.querySelector('.modal-payment')
  const overlay = document.querySelector('.modal-overlay')


  close.addEventListener('click', () => {
    console.log('hello')
    modal.style.display = 'none'
  })

  overlay.addEventListener('click', () => {
    console.log('hello')
    modal.style.display = 'none'
  })

}

function openDeliveryModal() {
  const modal = document.querySelector('.modal-delivery')
  const openText = document.querySelector('.delivery-button-text')
  const open = document.querySelector('.delivery-button')

  open.addEventListener('click', () => {
    modal.style.display = 'flex'
  })

  openText.addEventListener('click', () => {
    modal.style.display = 'flex'
  })
}
function closeDeliveryModal() {
  const close = document.querySelector('#closeDelivery')
  const modal = document.querySelector('.modal-delivery')
  const overlay = document.querySelector('.modal-overlay')
  const deliveryButton = document.querySelector('#delivery-button')

  close.addEventListener('click', () => {
    console.log('hello')
    modal.style.display = 'none'
  })

  overlay.addEventListener('click', () => {
    console.log('hello')
    modal.style.display = 'none'
  })

  deliveryButton.addEventListener('click', () => {
    console.log('hello')
    modal.style.display = 'none'
  })

}


function cartLabelCounter() {
  const counter = document.querySelector('.cart-counter')
  const mobileCounter = document.querySelector('.mobile-counter')
  let activeCount = 0;

  const getActiveCount = (items) => {
    items.forEach(item => {
      if (item.isChecked) {
        activeCount++
      }
    })
  }

  getActiveCount(items)

  counter.innerHTML = `${activeCount}`
  mobileCounter.innerHTML = `${activeCount}`
}