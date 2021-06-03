//直接导出 导入时用{}来结构解析
export const data = {
    name:"yy",
    age:18,
    sex:1
}
export const getNowDate = ()=>{
    return new Date()
}
//默认导出 需要导入时重新命名
export default {
    message:"我是默认导出数据"
}