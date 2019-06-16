/**
 * @description 根据页面视口区域高度计算表格高度，以确定什么时候出滚动条
 * @returns {Number} height表格内容区高度
 */
export function getHeight() {
  let clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight),
    scrollHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
  let showHeight = (clientHeight < scrollHeight) && clientHeight || scrollHeight;
  return showHeight;
}

/**
 * 生成唯一字符串
 */
export function uuid() {
  const s = [];
  const hexDigits = '0123456789abcdef';
  for (let i = 0; i < 36; i += 1) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = '4';
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
  s[8] = '-';
  s[13] = '-';
  s[18] = '-';
  s[23] = '-';
  s[0] = 'abcdefghigklmnopqrst'.substr(Math.floor(Math.random() * 0x10), 1);
  return s.join('');
}
