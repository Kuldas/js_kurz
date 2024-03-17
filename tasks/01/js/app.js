//
// ČÁST A) AŽ C)
//

let jmeno = prompt("Jaké jméno dnes urazíme? 😈");
let urazka = prompt("Jakým slovem ho urazíme? 😈");

// Kontrola, zda uživatel nenechal prázdné vstupy
if (jmeno && urazka) {
    function pojdMeUrazit(jmeno, urazka) {
        alert(jmeno + ' je naprostej ' + urazka + ' 🤣');
    }

    pojdMeUrazit(jmeno, urazka);
} else {
    alert("Nezadal si žádné jméno ani urážku 😔");
}

//
// ČÁST D) AŽ E)
//

// let cisloJedna = parseFloat(prompt("První číslo 🔢").replace(',','.'));
// let cisloDva = parseFloat(prompt("Druhé číslo 🔢").replace(',','.'));
// let vysledek = scitani(cisloJedna, cisloDva);

// function scitani(cisloJedna, cisloDva) {

// 	return cisloJedna + cisloDva;
// }

// console.log("🚀 ~ vysledek:", vysledek)

//
// ČÁST F) AŽ H)
//

// let productQuantity = 10;
// let productPrice = 100;
// let discountAmount = 23;

// function calcCart(productQuantity, productPrice) {
// 	// Vypočítání celkové ceny košíku
// 	let totalPrice = productQuantity * productPrice;
// 	// Naformátování ceny
// 	let formattedTotalPrice = formattedSum(totalPrice);

// 	// Vrácení naformátované ceny košíku
// 	return [totalPrice, formattedTotalPrice];
// }

// function discount(cartTotal, discountAmount) {
// 	// Vypočítání slevy
// 	let calcDiscount = (discountAmount / 100) * cartTotal;
// 	// Odečtení slevy od celkové hodnoty před slevou
// 	let priceWithDiscount = cartTotal - calcDiscount;
// 	// Naformátování výše slevy
// 	let formattedDiscountValue = formattedSum(calcDiscount);
// 	// Naformátovaní ceny po slevě
// 	let formattedPriceWithDiscount = formattedSum(priceWithDiscount);

// 	// Vrácení naformátované výše slevy a ceny po slevě
// 	return [formattedDiscountValue, formattedPriceWithDiscount];
// }

// // Můžeš klidně změnit localString i currency. Vše funguje a formátuje tak jak má! P.S.: Konečně 😅
// function formattedSum(number) {
// 	number = number.toLocaleString('cs-CZ', {
// 		style: 'currency',
// 		currency: 'CZK'
// 	});

// 	return number;
// }

// //
// let [cartTotal, cartTotalFormatted] = calcCart(productQuantity, productPrice)
// let [discountValue, discountTotal] = discount(cartTotal, discountAmount)

// // Hodnoty vypisované do konzole
// console.log("🚀 ~ Výsledek v košíku:", "Nakoupil si " + productQuantity + " produktů (jeden produkt tě stál " + formattedSum(productPrice) + "). Proto si teď chudší o " + cartTotalFormatted + " 🤭😅 *MAGIC* > https://www.youtube.com/watch?v=Qji5x8gBVX4")
// console.log("🚀 ~ Výsledek se slevou:", "Využil si slevu " + discountAmount + " % a nyní je cena " + discountTotal + ". Ušetřil si " + discountValue +". FRAJER! 🤘 > https://www.youtube.com/watch?v=DWtpNPZ4tb4")

//
// UPRAVENÁ ČÁST F) AŽ H) ZDE DOSTÁVÁM HODNOTY Z UŽIVATELSKÉHO VSTUPU
//

// let productQuantity = prompt("Kolik produktů chcete koupit? 💸");
// let productPrice = prompt("Kolik má produkt stát? 💰").replace(',','.');
// let discountAmount = prompt("Jak velkou chceš slevu? ％").replace('%','');
// let language = prompt("V jakém jazyce chceš formátovat měnu? 👅 (cs-CZ,en-GB, en-US, de-DE apod.)");
// let currency = prompt("V jaké měně chceš formátovat měnu? 💶 (czk, eur nebo usd?");


// function calcCart(productQuantity, productPrice) {
// 	// Vypočítání celkové ceny košíku
// 	let totalPrice = productQuantity * productPrice;
// 	// Naformátování ceny
// 	let formattedTotalPrice = formattedSum(totalPrice);

// 	// Vrácení naformátované ceny košíku
// 	return [totalPrice, formattedTotalPrice];
// }

// function discount(cartTotal, discountAmount) {
// 	// Vypočítání slevy
// 	let calcDiscount = (discountAmount / 100) * cartTotal;
// 	// Odečtení slevy od celkové hodnoty před slevou
// 	let priceWithDiscount = cartTotal - calcDiscount;
// 	// Naformátování výše slevy
// 	let formattedDiscountValue = formattedSum(calcDiscount);
// 	// Naformátovaní ceny po slevě
// 	let formattedPriceWithDiscount = formattedSum(priceWithDiscount);

// 	// Vrácení naformátované výše slevy a ceny po slevě
// 	return [formattedDiscountValue, formattedPriceWithDiscount];
// }

// // Můžeš klidně změnit localString i currency. Vše funguje a formátuje tak jak má! P.S.: Konečně 😅
// function formattedSum(price) {
// 	price = price.toLocaleString(language, {
// 		style: 'currency',
// 		currency: currency
// 	});

// 	return price;
// }

// //
// let [cartTotal, cartTotalFormatted] = calcCart(productQuantity, productPrice)
// let [discountValue, discountTotal] = discount(cartTotal, discountAmount)

// // Hodnoty vypisované do konzole
// console.log("🚀 ~ Výsledek v košíku:", "Nakoupil si " + productQuantity + " produktů (jeden produkt tě stál " + formattedSum(productPrice) + "). Proto si teď chudší o " + cartTotalFormatted + " 🤭😅 *MAGIC* > https://www.youtube.com/watch?v=Qji5x8gBVX4")
// console.log("🚀 ~ Výsledek se slevou:", "Využil si slevu " + discountAmount + " % a nyní je cena " + discountTotal + ". Ušetřil si " + discountValue +". FRAJER! 🤘 > https://www.youtube.com/watch?v=DWtpNPZ4tb4")
