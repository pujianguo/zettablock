/**
 * 是否为空
 * @param value
 * @returns {boolean}
 */
export function isEmpty(value, allowEmptyString) {
  if (typeof value === 'object') {
    for (let t in value) {
      return false
    }
    return true
  }
  return (
    value == 'null' ||
    value == 'undefined' ||
    value === null ||
    value === undefined ||
    (!allowEmptyString ? value === '' : false) ||
    (toString.call(value) === '[object Array]' && value.length === 0)
  )
}


/**
 * 是否为移动端
 * @param value
 * @returns {boolean}
 */
export function isMobile(value, allowEmptyString) {
  return !!navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  );
}

/**
 * 是否为Android
 * @param value
 * @returns {boolean}
 */
export function isAndroid(value, allowEmptyString) {
  return !!navigator.userAgent.match(/(Android)/i);
}


export const validateEmail = function (value) {
  const regExpEmail = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
  return regExpEmail.test(value);
};


export default {
  isEmpty,
  isMobile,
  isAndroid
}
