/*��ҳ����banner�ֲ�*/
var banner_swiper = new Swiper('.banner-swiper',{
    pagination:'.banner-page',
    paginationClickable:true,
    loop:true,
    paginationBulletRender: function (swiper, index, className) {
        return '<span class="' + className + '"></span>';
    }
});
/*��Ʒ�ֲ�*/
var yz_swiper = new Swiper('.yz-swiper',{
    pagination:'.yz-page',
    paginationClickabel:true,
    loop:true
});
var ts_swiper = new Swiper('.ts-swiper',{
    pagination:'.ts-page',
    paginationClickable:true
});