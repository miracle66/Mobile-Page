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
// 右上角报名人数 半小时+3
function addNum() {
    var i;
    var num = $('.count-num').html();
    var count = 3;
    i = num*1 + count*1;
    $('.count-num').html(i);
    console.log(i);
    // return i;
}
// addNum();
setInterval (addNum, 1800000);//1800000  半小时加3


// 申请
function validateForm() {
    var username = $('#username').val(); //姓名
    var phone = $('#phone').val(); //手机
    var address = $('#address').val(); //地址

    var nums = $('.count-num').html(); //获取报名人数
    console.log(nums);

    // lms
    var company = $('#company').val(); //企业名称
    var company_length = $('div.js-company').length;
    if(company_length > 0){
        if(company == '' || company == undefined || company == null){
            popupOpen();
            $('.js-company .error-info').html('企业名称不能为空');
            $('input#company').addClass('error');
            popupClose();
            return false;
        }else{
            $('.js-company .error-info').html('');
            popupClose();
            console.log(company);
        }
    }

    if(username == '' || username == undefined || username == null){
        popupOpen();
        $('.js-username .error-info').html('姓名不能为空');
        $('input#username').addClass('error');
        popupClose();
        return false;
    }else if($.isNumeric(username) || username.match(/\d+/g)){
        popupOpen();
        $('.js-username .error-info').html('姓名不能包含数字');
        $('input#username').addClass('error');
        popupClose();
        return false;
    }else{
        $('.js-username .error-info').html('');
        popupClose();
    }

    if(phone == '' || phone == undefined || phone == null){
        popupOpen();
        $('.js-phone .error-info').html('手机号码不能为空');
        $('input#phone').addClass('error');
        popupClose();
        return false;
    }else if(!(/^1{1}[3,4,5,7,8]{1}\d{9}$/.test(phone))){
        popupOpen();
        $('.js-phone .error-info').html('请输入正确的手机号码');
        $('input#phone').addClass('error');
        popupClose();
        return false;
    }else{
        $('.js-phone .error-info').html('');
        popupClose();
        console.log(phone);
    }

    var address_length = $('div.js-address').length;
    if(address_length > 0){
        if(address == '' || address == undefined || address == null){
            popupOpen();
            $('.js-address .error-info').html('地址不能为空');
            $('input#address').addClass('error');
            popupClose();
            return false;
        }else{
            $('.js-address .error-info').html('');
            popupClose();
            console.log(address);
        }
    }


    if(nums.indexOf("8") >= 0 || nums <= '3'){
        $('.js-formInfo-container').hide();
        $('.js-success').show();
    }else{
        $('.js-formInfo-container').hide();
        $('.js-presuccess').show();
    }
    return false;
}

// 填写信息
$('.js-apply').on('click',function () {
    validateForm();
    return false;
})

// 支付预购
$('.js-preorder').on('click',function () {
    validateForm();
    return false;
})


$('input#phone').focus(function (e) {
    console.log($(this).parent().siblings().find('input'));
    // $(this).parent().siblings().find('input').removeClass('error')
})

// 取消
$('.jscancel').on('click',function () {
    $('.js-formInfo-container').hide(); //信息填写框
    $('.js-success').hide(); //报名成功提示框
    $('.js-presuccess').hide(); //报名成功提示框 需分享
    $('.js-cover-overlay').hide();
})

//验证提示操作
function popupOpen() {
    $('.error-info').fadeIn();
    // $('input').addClass('error');
}
function popupClose() {
    setTimeout(function () {
        $('.error-info').fadeOut();
        $('input').removeClass('error');
    },2000);
}
var browser = {
    versions: function () {
        var u = navigator.userAgent, app = navigator.appVersion;
        return {//移动终端浏览器版本信息
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile/i) || !!u.match(/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
            iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, //是否iPad
            webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
        };
    } (),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
}
if (browser.versions.iPhone || browser.versions.iPad || browser.versions.ios) {
}
if (browser.versions.android) {
    var cover_height = $('.js-cover-overlay').height();
    $('.js-cover-overlay').css('height',cover_height);

    $('.js-coupon-p p').css({'font-size':'14px','line-height':'25px','margin-bottom':'5px'});
}
