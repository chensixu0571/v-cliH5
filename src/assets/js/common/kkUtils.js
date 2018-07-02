function kkUtils () {

};
// 下载APP

/**
* 获取本周停止日期
*/
kkUtils.getWeekEndDate = function(){
  var now = new Date(); //当前日期
  var nowDayOfWeek = now.getDay(); //今天本周的第几天
  var nowDay = now.getDate(); //当前日
  var nowMonth = now.getMonth(); //当前月
  var nowYear = now.getYear(); //当前年
  nowYear += (nowYear < 2000) ? 1900 : 0; //
  //获得本周的停止日期
  var weekEndDate = new Date(nowYear, nowMonth, nowDay + (7 - nowDayOfWeek));
  return kkUtils.formatDate(weekEndDate,'yyyy-MM-dd');
}



//对比二个时间段
kkUtils.CompareDate = function(d1,d2){
  return ((new Date(d1.replace(/-/g,"\/"))) > (new Date(d2.replace(/-/g,"\/"))));
  }
// 返回相差几分钟二个时间段
kkUtils.minutesFn = function(d1,d2){
  return (((new Date(d1.replace(/-/g,"\/"))) - (new Date(d2.replace(/-/g,"\/")))) /1000/60);
  }



//返回当前周几
kkUtils.getWeek = function (dateString) {
  var date;
  if(!dateString){
      date = new Date();
  }else{
      var dateArray = dateString.split("-");
      date = new Date(dateArray[0], parseInt(dateArray[1] - 1), dateArray[2]);
  }
  return "周" + "日一二三四五六".charAt(date.getDay());
}
//每三位数字逗号间隔方法,科学计数法
kkUtils.formatNum = function(str) {
        if(!str){
          const zero = 0;
          return zero;
        }
        var str=str.toString();
        var newStr = "";
        var count = 0;
        var i;
        if (str.indexOf(".") == -1) {
            for (i = str.length - 1; i >= 0; i--) {
                if (count % 3 == 0 && count != 0) {
                    newStr = str.charAt(i) + "," + newStr;
                } else {
                    newStr = str.charAt(i) + newStr;
                }
                count++;
            }
            str = newStr;
        }
        else {
            for (i = str.indexOf(".") - 1; i >= 0; i--) {
                if (count % 3 == 0 && count != 0) {
                    newStr = str.charAt(i) + "," + newStr;
                } else {
                    newStr = str.charAt(i) + newStr; //逐个字符相接起来
                }
                count++;
            }
            str = newStr + (str + "00").substr((str + "00").indexOf("."), 3);
        }
        return str;
    }

kkUtils.getQueryString = function() {
  var url = window.location.href; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
       var str = url.split("?")[1]
       var strs = str.split("&");
       for(var i = 0; i < strs.length; i ++) {
          theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
       }
    }
    return theRequest;
}

kkUtils.formatDate = function (data, format) {
  var o = {
    "M+" : data.getMonth() + 1, // month
    "d+" : data.getDate(), // day
    "h+" : data.getHours(), // hour
    "m+" : data.getMinutes(), // minute
    "s+" : data.getSeconds(), // second
    "q+" : Math.floor((data.getMonth() + 3) / 3), // quarter
    "S" : data.getMilliseconds()
    // millisecond
  }
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (data.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for ( var k in o) {
    if (new RegExp("(" + k + ")").test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    }
  }
  return format;
}
kkUtils.se = function simpleEncrypt(plaintext) {
  if (plaintext == undefined) {
    return plaintext;
  }
  if (typeof plaintext !== "string") {
    plaintext = plaintext.toString();
  }
  var cList = [];
  for (var i = 0; i < plaintext.length; i++) {
    var ch = plaintext.charCodeAt(i) << 4;
    cList.push(ch.toString(16));
  }
  return cList.join("*");
};

kkUtils.sd = function simpleDecrypt(ciphertext) {
  if (ciphertext == undefined) {
    return ciphertext;
  }
  if (typeof ciphertext !== "string") {
    ciphertext = ciphertext.toString();
  }
  var plaintext = "";
  try {
    ciphertext = "[\"" + ciphertext.replace(/\*/g, '","') + "\"]";
    var cList = JSON.parse(ciphertext);
  } catch (e) {
    return undefined;
  }
  for (var i = 0; i < cList.length; i++) {
    var ch = parseInt(cList[i], 16);
    ch = ch >> 4;
    plaintext += String.fromCharCode(ch);
  }
  return plaintext;
};

kkUtils.getCookie = function(c_name) {
  if (document.cookie.length>0) {
    var c_start = document.cookie.indexOf(c_name + "=")
    if (c_start != -1) {
      c_start = c_start + c_name.length + 1;
      var c_end = document.cookie.indexOf(";", c_start);
      if (c_end == -1) {
        c_end = document.cookie.length;
      }
      return unescape(document.cookie.substring(c_start, c_end));
    }
  }
  return "";
}

kkUtils.setCookie = function (c_name, value, expiredays) {
  var exdate = new Date()
  exdate.setDate(exdate.getDate() + expiredays);
  document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : "; expires=" + exdate.toGMTString()) + ";path=/";
}
//删除cookie
kkUtils.delCookie = function (name) {
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var value = this.getCookie(name);
  if (value != null) document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
};

module.exports = kkUtils;
