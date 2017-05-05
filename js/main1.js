/**
 * Created by liuli on 2016/9/7.
 */

// 汇总首页 操作
// IHMA介绍
$('.js-ihma').on('click',function(){
    $('.js-ihma-container').show();
    $('.js-cover-overlay').show();
});
// LMS介绍
$('.js-lms').on('click',function(){
    $('.js-lms-container').show();
    $('.js-cover-overlay').show();
});

// 关闭IHMA介绍
$('.js-close-icon').on('click',function () {
    $('.js-ihma-container').hide();
    $('.js-lms-container').hide();
    $('.js-cover-overlay').hide();
})


// 优惠列表操作
// 返回
$('.jsback').on('click',function(){
    // history.back();
    window.location.href = "coupon.html";
})
// 填写信息
$('.js-formInfo-btn').on('click',function () {
    $('.js-formInfo-container').show();
    $('.js-cover-overlay').show();
})

// 申请
var username = $('#username').val();
var phone = $('#phone').val();
var address = $('#address').val();
$('.js-apply').on('click',function () {

    if(username == '' || username == undefined || username == null){
        popupOpen();
        $('.js-username .error-info').html('姓名不能为空');
        $('input#username').addClass('error');
        popupClose();
        return false;
    }else{
        $('.js-username .error-info').html('');
        $('input#username').removeClass('error');
        popupClose();
    }
    // if(phone == ''){
    //     popupOpen();
    //     $('.js-phone .error-info').html('手机号码不能为空');
    //     popupClose();
    // }else if(!(/^1[3|4|5|7|8]\d{9}$/.test(phone))){
    //     $('.error-info').fadeIn();
    //     $('.js-phone .error-info').html('请输入正确的手机号码');
    //     $('input#phone').addClass('error');
    //     $('.error-info').fadeIn();
    // }else{
    //     $('input#phone').removeClass('error');
    //     $('.error-info').fadeOut();
    // }
    // if(address == ''){
    //     $('.error-info').fadeIn();
    //     $('input#username .error-info').html('地址不能为空');
    // }
    return false;
})
$('input#username').blur(function () {
    if(username == '' || username == undefined || username == null){
        popupOpen();
        $('.js-username .error-info').html('姓名不能为空');
        $('input#username').addClass('error');
        popupClose();
        return false;
    }else{
        $('.js-username .error-info').html('');
        $('input#username').removeClass('error');
        popupClose();
    }
})
$('input#phone').blur(function () {
    if( phone == '' || phone == undefined || phone == null){
        popupOpen();
        $('.js-phone .error-info').html('手机号码不能为空');
        $('input#phone').addClass('error');
    } else if(!(/^1[3|4|5|7|8]\d{9}$/.test(phone))){
        $('.js-phone .error-info').html('请输入正确的手机号码');
        $('input#phone').addClass('error');
    }else{
        $('input#phone').removeClass('error');
        popupClose();
    }
    return false;
})


$('input#phone').focus(function (e) {
    console.log($(this).parent().siblings().find('input'));
    // $(this).parent().siblings().find('input').removeClass('error')
})

// 取消
$('.jscancel').on('click',function () {
    $('.js-formInfo-container').hide();
    $('.js-cover-overlay').hide();
})

//验证提示操作
function popupOpen() {
    $('.error-info').fadeIn();
}
function popupClose() {
    setTimeout(function () {
        $('.error-info').fadeOut();
        $('input#username').removeClass('error');
    },2000);
}



