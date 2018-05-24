const requestGet = obj => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: obj.url,
      header: obj.headers || { 'content-type': 'application/x-www-form-urlencoded' },
      data: obj.data,
      method: 'GET',
      success: function (res) {
        //自行处理返回结果
        console.log('返回结果：', res.data);
        if (res && res.statusCode === 200) {
          let data = res.data;
            resolve(data);
        } else {
          reject();
        }
      },
      fail: function (resp) {
        reject(resp);
      }
    })
  })
}
// module.exports = {
//   requestGet: requestGet
// }
export {
  requestGet
}
