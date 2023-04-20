var products = []

for (i = 1; i < 4; i++) {
    products.push(i);
    $.ajax({
        url: "https://dummyjson.com/products/" + i,
        type: "GET",
        success: function (data) {
            var product = $('.product-template').clone().removeClass('product-template').addClass('product-' + i);
            $('body').append(product);
            product.find('.img').attr('src', data.thumbnail);
            product.find('.img').attr('alt', data.title);
            product.find('.title').text(data.name);
            product.find('.brand').text(data.brand);
            product.find('.price').text(data.price);
            product.find('.old-price').text(data.old_price);
            product.find('.stock').text(data.stock);
        }
    });
}


$('#product-generation').click(function () {
    if (products.length >= 100) {
        $(this).prop('disabled', true);
        return;
    }

    var newId;
    do {
        newId = Math.floor(Math.random() * 100) + 1;
    } while (products.includes(newId));

    products.push(newId);

    $.ajax({
        type: 'GET',
        url: 'https://dummyjson.com/products/' + newId,
        success: function (data) {
            var $product = $('.product-template').clone();
            $product.removeClass('product-template').addClass('product-' + newId);

            $product.find('.img').attr('src', data.thumbnail).attr('alt', data.title);
            $product.find('.title').text(data.title);
            $product.find('.brand').text(data.brand);
            $product.find('.price').text(data.price + ' €');
            $product.find('.old-price').text((data.price / (1 - data.discountPercentage / 100)).toFixed(2) + ' €');
            $product.find('.stock').text(data.stock);
            $('body').append($product);
        }
    });
});
