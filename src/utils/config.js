// const baseUrl = 'https://api.douban.com';
const baseUrl = 'https://douban.uieee.com';
const config = {
  in_theaters: baseUrl + '/v2/movie/in_theaters', // 正在上映
  coming_soon: `${baseUrl}/v2/movie/coming_soon`, // 即将上映
};




/**
 * 大坑三.Cannot assign to read only property 'exports' of object '#<Object>' 编译报错
 这是因为引用第三方插件的时候,带入了module.exports的写法,webpack可以使用require和export ，
 但是不能混合使用import 和module.exports,你需要做的是更新根目录下的.babelrc文件配置
 */
// module.export = {
//   config: config
// }
export default config;
;
