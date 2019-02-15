let n = 1
let count = getImagesCount() // 获取图片数量
function getImagesCount() { // 获取图片数量
  return $('.images>img').siblings().length
}

function x(n) {
  if (n > count) {
    n = n % count
    if (n === 0) {
      n = count
    }
  }
  return n
}

$('.images>img:nth-child(1)').addClass('current');
// 自动获取图片数量，并初始化
for (let i = 2; i <= count; i++) {
  $(`.images>img:nth-child(${i})`).addClass('enter');
}

setInterval(() => {
  $(`.images>img:nth-child(${x(n)})`).removeClass('current').addClass('leave')
    .one('transitionend', function (e) {
      $(e.currentTarget).removeClass('leave').addClass('enter')
    })
  $(`.images>img:nth-child(${x(n+1)})`).removeClass('enter').addClass('current')
  n += 1
}, 3000)