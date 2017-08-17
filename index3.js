$(document).ready(function () {
    $('select').material_select();
    $('select').on('change', go)
    go();//一進來自動選擇台北市+男性的身份證字號
});
function calmid(mid) {
    var ret = 0;
    var i;
    for (i = 0; i < mid.length; i++) {
        ret = ret + (7 - i) * eval(mid.substring(i, i + 1));
    }
    return ret;
}
function calcity1(city_code) {
    return eval(city_code.substring(0, 1)) + eval(city_code.substring(1, 2)) * 9;
}
function cal_sex(sex_code) {
    return eval(sex_code) * 8;
}
function go() {
    let city1 = $('#city').val();
    const options = $('#city > optgroup > option')
    // 產生隨機city
    city1 = city1 ? city1 : options[getRandomInt(0, options.length - 1)].value
    let sex = $('#sex').val();
    // 產生隨機sex
    sex = sex ? sex : getRandomInt(1, 2)
    //產生7位亂數
    let mid = Math.random().toString().substring(2, 9);
    //計算檢查碼
    let ret = 0;

    ret = calcity1(city1) + cal_sex(sex) + calmid(mid);
    ret = ret % 10;
    ret = 10 - ret;
    ret = ret % 10;
    //ret 為檢查碼
    let output = city1.substring(2, 3) + sex + mid + ret;
    $('#output').val(output);
    $('.card-title').text(output);
    return output;


}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}