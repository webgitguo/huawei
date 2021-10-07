$(function () {
  let arr = ["手机", "智慧屏", "智能穿戴", "耳机音箱", "电脑", "平板", "智能路由", "配件", "生态产品", "家用电器", "美食酒饮", "增值服务/企业商用"]
  $.each(arr, (i, n) => {
    $(".navTop").append(`<a href="" class="navTopn">
   <span>${n}</span>
   <svg class="icon youjiantou" aria-hidden="true">
     <use xlink:href="#icon-youjiantou"></use>
   </svg>
 </a>` )
  })
})