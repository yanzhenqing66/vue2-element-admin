const Util = {}

/**
 * 
 * @param {name} name 传入的cookie
 */
Util.getCookie = name => {
  let arr,
    reg = new RegExp('(^|)' + name + '=([^;]*)(;|$)')
  if(arr = document.cookie.match(reg)) return arr[2]
  else return null
}

//设置cookie
Util.setCookie = (c_name, value, expiredays) => {
  var exdate = new Date()
  exdate.setDate(exdate.getDate() + expiredays)
  document.cookie =
    c_name +
    '=' +
    escape(value) +
    (expiredays == null ? '' : ';expires=' + exdate.toGMTString())
}

//删除cookie
Util.delCookie = name => {
  var exp = new Date()
  exp.setTime(exp.getTime() - 1)
  var cval = Util.getCookie(name)
  if (cval != null) document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString()
}

export default Util