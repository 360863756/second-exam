var tools = {
  /** 给标签设置属性
   * @param obj  <object> 设置属性的标签
   * @param attr <object> 设置属性的键值对  比如：{left: '100px', top: '200px'}
   *  */
  css: function (obj, attr) {
    for (var key in attr) {
      obj.style[key] = attr[key]
    }
  }
}
