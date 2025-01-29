function openWhatsApp() {
    const name = document.getElementById("name").value;
    const adress = document.getElementById("adress").value;
    const phoneNumber = "+201147182463";
    
    // استرجاع البيانات من localStorage
    const cartItems = JSON.parse(localStorage.getItem("cartItems"));
    const userData = JSON.parse(localStorage.getItem("userData"));
    
    let message = `أهلاً، اسمي ${name} وأود طلب:\n`;
    let totalPrice = 0; // متغير لحساب السعر الإجمالي

    // إنشاء كائن لتخزين عدد الطلبات لكل عنصر
    const countMap = {};
    userData.forEach((item) => {
        countMap[item.name] = item.count;
    });

    cartItems.forEach((dish) => {
        const price = parseFloat(dish.price); // تحويل السعر إلى عدد
        const count = countMap[dish.name] || 0; // الحصول على عدد الطلبات من userData

        if (!isNaN(price)) { // التحقق إذا كان السعر عدد
            totalPrice += price * count; // حساب السعر الإجمالي
            message += `* ${dish.name} (عدد الطلبات: ${count}) - السعر: ${price} جنيه\n`;
        } else {
            console.error(`السعر غير معرف للعنصر: ${dish.name}`);
            message += `* ${dish.name} (عدد الطلبات: ${count}) - السعر: غير متوفر\n`;
        }
    });

    message += `\nالسعر الإجمالي: ${totalPrice} جنيه\n`;
    message += `على عنوان ${adress}`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
}

const showImageBtn = document.getElementById("showImage");
const overlayImage = document.getElementById("overlayImage");
let isImageShown = false;

showImageBtn.addEventListener("click", () => {
    isImageShown = !isImageShown;
    overlayImage.style.display = isImageShown ? "flex" : "none";
});

document.addEventListener("click", (event) => {
    if (event.target.id === "overlayImage") {
        overlayImage.style.display = "none";
    }
});