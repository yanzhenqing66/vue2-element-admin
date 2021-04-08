const Util = {}

Util.hasChild = item => {
  return item.children && item.children.length > 0
}

Util.showThisMenuEle = (item, accessMap) => {
  if (item.meta && item.meta.access) {
    if (accessMap.includes(item.meta.access)) {
      return true
    } else {
      return false
    }
  } else {
    return true
  }
}

Util.getMenuList = function getMenuListByRoutes(routes, accessMap) {
  let res = []
  routes.forEach(item => {
    console.log(item)
    // meta未设置或meta.hideInMenu为false
    if (!item.meta || (item.meta && !item.meta.hideInMenu)) {
      let obj = {
        icon: (item.meta && item.meta.icon) || '',
        name: item.name,
        meta: item.meta
      }
      if (Util.hasChild(item) && Util.showThisMenuEle(item, accessMap)) {
        obj.children = getMenuListByRoutes(item.children, accessMap)
      }
      res.push(obj)
    }
  })
  return res
}

export default Util