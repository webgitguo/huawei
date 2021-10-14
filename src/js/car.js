$(function () {
  $.get(`http://jx.xuzhixiang.top/ap/api/cart-list.php?id=68590`, (res) => {
    console.log(res)//查询购物车数据
    let data = res.data

    let str = ""
    for (let i = 0; i < data.length; i++) {
      str += `
      <li class="List" data-id="${data[i].pid}">
              <input type="checkbox" class="ck">
              <img src="img/${data[i].pimg}">
              <span>${data[i].pname}</span>
              <span class="perPrice">￥${data[i].pprice}</span>
              <span class="minus">-</span>
              <input type="text" class="num" value="${data[i].pnum}" >
              <span class="plus">+</span>
              <span class="perTotalPrice">${data[i].pprice * data[i].pnum
        }</span>
              <span class="del">删除</span>
              </li>
      `
    }
    $(".oul").append(str)
    let num = document.querySelectorAll(".num")
    let Oul = document.querySelector(".oul")

    for (let i = 0; i < data.length; i++) {
      let uid = data[i].uid
      let pid = data[i].pid
      $(".minus").eq(i).click(function () {
        num[i].value--;
        $(".perTotalPrice").eq(i).text(data[i].pprice * num[i].value)
        $.get(" http://jx.xuzhixiang.top/ap/api/cart-update-num.php", { uid: uid, pid: pid, pnum: num[i].value }, (res) => {
          console.log(res)//添加购物车数据
        })
      })
      $(".plus").eq(i).click(function () {
        num[i].value++
        $(".perTotalPrice").eq(i).text(data[i].pprice * num[i].value)
        $.get("http://jx.xuzhixiang.top/ap/api/cart-update-num.php", { uid, pid, pnum: num[i].value }, (res) => {
          console.log(res)//添加购物车数据
        })
      })
      $(".del").eq(i).click(function () {
        //删结构

        //Oul.removeChild($(".List").get(i));
        console.log($(this))
        $(".List").eq(i).empty();
        $(".ck").eq(i).checked = false;
        //删数据  id  delete
        console.log($(".List"))
        let pid = $(".List").eq(i).attr("data-id");
        $.get("http://jx.xuzhixiang.top/ap/api/cart-delete.php", { uid: 68590, pid }, (res) => {
          console.log(res)//添加购物车数据
        })
        //更新总价
        getTotalPrice();
        var count = 0;
        for (let i in data) {
          count++;
        }
        if (count == 0) {
          $("#checkAll").get(0).checked = false;
        }

      }

      )
    }
    $("#checkAll").click(function () {//全选
      for (let i = 0; i < $(".ck").length; i++) {
        $(".ck").get(i).checked = $("#checkAll").get(0).checked;
      }
      getTotalPrice()
    })
    for (let i = 0; i < $(".ck").length; i++) {//单选
      $(".ck").get(i).onclick = () => {

        let count = 0; //保存选中的数量
        for (let j = 0; j < $(".ck").length; j++) {
          if ($(".ck").get(j).checked) {
            count++;
          }
        }
        if (count == $(".ck").length) {
          $("#checkAll").get(0).checked = true;
        } else {
          $("#checkAll").get(0).checked = false;
        }
        getTotalPrice();
      };
    }
    function getTotalPrice() {
      var totals = 0;
      for (let j = 0; j < $(".ck").length; j++) {
        if ($(".ck").get(j).checked) {

          totals += parseInt($(".perTotalPrice").eq(j).text());
        }
      }
      $("#totalPrice").text(totals);
    };

  })

})

