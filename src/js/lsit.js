$(function () {
  let search = window.location.search
  let id = search.split("=")[1]
  $.get(`http://jx.xuzhixiang.top/ap/api/detail.php?id=${id}`, (res) => {

    let data = res.data
    console.log(data.pimg)
    let str = `
  <img src="img/${data.pimg}" alt="">
  <div class="listDiv">
  <h4>${data.pname}</h4>
  <p>【优惠信息】：${data.pdesc}</p>
  <p>价格：￥${data.pprice}</p>

  <input type="text" id="inp" value="1">
  <a href="javascript:void(0)" id="jia">+</a>
  <a href="javascript:void(0)" id="jian">-</a>
  <div class="shop">
      <a href="javascript:void(0)" id="shopCar">加入购物车</a>
      <a href="javascript:void(0)" id="shopOder">立即下单</a> 
      </div>
  </div>
  
  `
    $(".list1").append(str)
    let inp = document.getElementById("inp")
    $("#jia").click(function () {
      //$("#inp").val()
      inp.value++
    })
    $("#jian").click(function () {
      //$("#inp").val()
      inp.value--
      if (inp.value == 0) {
        inp.value = 1
      }
    })
    $("#inp").change(function () {
      if (inp.value <= 1) {
        inp.value = 1;
      }
    })
    let uid = data.uid
    let pid = data.pid
    $("#shopCar").click(function () {
      let num = inp.value
      location.href = "car.html"
      $.get("http://jx.xuzhixiang.top/ap/api/add-product.php", { uid, pid, pnum: num }, (res) => {
        console.log(res)//添加购物车数据
      })

    })

    /* $.get(` http://jx.xuzhixiang.top/ap/api/cart-delete.php?uid=${uid}&pid=${pid}`, (res) => {
      console.log(res)
    }) */

  })


})