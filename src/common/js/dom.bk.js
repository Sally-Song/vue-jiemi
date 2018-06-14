// 新增样式
export function addClass (el, className) {
  // 判断该样式是否存在，存在跳过
  if (hasClass(el, className)) {
    return
  }
  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}

// 判断样式名是否存在
export function hasClass (el, className) {
  /*
  *
  * ^ 前面无字符，行首
  * $ 后面无字符，行尾
  * \s 空格
  * \\s 转义后的空格
  * | 或
  *
  */
  // debugger
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}
