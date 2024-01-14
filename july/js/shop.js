$(function () {
    // 增減餐點
    $('.fa-circle-plus').click(function () {
        let inputAdd = $(this).siblings('.count');
        let currentValue = parseInt(inputAdd.val());
        let originPrice = parseInt($(this).siblings('span').text());
        //點擊增加1
        inputAdd.val(currentValue + 1)
        //更新金額
        let realPrice = (currentValue + 1) * originPrice;
        $(this).siblings('.fa-dollar-sign').text(realPrice);

        updateTotal();
    })

    $('.fa-circle-minus').click(function () {
        let inputRemove = $(this).siblings('.count');
        let lowValue = parseInt(inputRemove.val());
        let lessPrice = parseInt($(this).siblings('span').text());
        let finalPrice;
        //點擊減少1
        inputRemove.val(lowValue - 1);

        //如果數量為零就刪除餐點
        if (lowValue - 1 === 0) {
            let pic = $(this).closest('.txt').prev('.pic')
            pic.remove()
            $(this).closest('.txt').remove()
        } else {
            //不為零就更新金額
            finalPrice = (lowValue - 1) * lessPrice;
            $(this).siblings('.fa-dollar-sign').text(finalPrice);
        }
        updateTotal();
    })

    //點垃圾桶刪除餐點
    $('.fa-trash-can').click(function () {
        $(this).closest('.txt').prev('.pic').remove();
        $(this).closest('.txt').remove();

        updateTotal();
    })

    //總金額更新
    function updateTotal() {
        let total = 0;
        $('.fa-dollar-sign').each(function () {
            let price = parseInt($(this).text());
            total += price;
        })
        $('.total span').text(total);
    }
})