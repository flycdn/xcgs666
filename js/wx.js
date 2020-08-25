var wxArr = ['s18346785792', 'LOVE3286917006', 'YXF888820', 'lv5236117981', 'Yc040625', 'tmn13517156551', 'mwvon22', 'sdn7522'];
var wx_index = Math.floor((Math.random() * wxArr.length));
var stxlwx = wxArr[wx_index];
$(".wx_html").html(stxlwx);
$(".copy").attr("data-clipboard-text", stxlwx);
$(".wx_img").attr('src', 'wechat/' + stxlwx + '.jpg');