// ITERATION 1
function doc(param) {
	return document.querySelector(param);
}

function updateSubtotal(product) {
	console.log('Calculating subtotal, yey!');
	let price = product.querySelector('.price span').innerText;
	let quantity = product.querySelector('.quantity input').value;
	let total = parseFloat(price) * parseFloat(quantity);
	product.querySelector('.subtotal span').innerText = total;
	return total;
}

function calculateAll() {
	// code in the following two lines is added just for testing purposes.
	// it runs when only iteration 1 is completed. at later point, it can be removed.
	let total = 0;
	document.querySelectorAll('.product').forEach((el) => {
		total += updateSubtotal(el);
		doc('#total-value span').innerText = total;
	});
}

// ITERATION 4

function removeProduct(event) {
	const target = event.currentTarget;
	document.querySelector('#cart tbody').removeChild(target.closest('.product'));

	//... your code goes here
}

// ITERATION 5

function createProduct() {
	let productName = document.querySelectorAll('.create-product td input')[0].value;
	let productPrice = document.querySelectorAll('.create-product td input')[1].value;
	let child = `<tr class="product">
	<td class="name">
		<span>${productName}</span>
	</td>
	<td class="price">$<span>${productPrice}</span></td>
	<td class="quantity">
		<input type="number" value="0" min="0" placeholder="Quantity" />
	</td>
	<td class="subtotal">$<span>0</span></td>
	<td class="action">
		<button class="btn btn-remove">Remove</button>
	</td>
</tr>`;
	document.querySelector('#cart tbody').innerHTML += child;
	remove();
}

window.addEventListener('load', () => {
	// document.querySelectorAll('.btn-remove').forEach((el) => {
	// 	el.addEventListener('click', removeProduct);
	// });
	const calculatePricesBtn = document.getElementById('calculate');
	calculatePricesBtn.addEventListener('click', calculateAll);

	document.querySelector('#create').addEventListener('click', createProduct);
	//... your code goes here
});

function remove() {
	let btns = document.querySelectorAll('.btn-remove');
	for (btn of btns) {
		btn.addEventListener('click', removeProduct);
	}
}

remove();
