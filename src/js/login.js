$(function () {
  $("#messageLogin").click(function () {
    var tex = $("#spanMessage").text();
    var str = `
      <div class="div-input">
      <svg class='icon ren' aria-hidden='true'>
          <use xlink:href='#icon-ren'></use>
          </svg>
      <input type="text" placeholder="手机号码" maxlength="11">
  </div>
 <div class="div-input">
  <svg class='icon suo' aria-hidden='true'>
      <use xlink:href='#icon-suo'></use>
      </svg>
  <input type="text" placeholder="手机验证码">
  <a href="#" class="inp-btn" id="inpBtn">获取验证码</a>
 </div>`;
    var str1 = `
 <div class="div-input">
 <svg class='icon ren' aria-hidden='true'>
      <use xlink:href='#icon-ren'></use>
  </svg>
  <input type="text" placeholder="用户名/手机/邮箱">
  </div>
  <div class="div-input">
      <svg class='icon suo' aria-hidden='true'>
          <use xlink:href='#icon-suo'></use>
      </svg>
  <input type="password" placeholder="密码">
  </div>` ;
    if (tex == "短信验证码登录") {

      $("#divInp").html(str);
      tex = $("#spanMessage").text("账号密码登录")
      //console.log(tex)
    } else if (tex == "账号密码登录") {

      $("#divInp").html(str1);
      tex = $("#spanMessage").text("短信验证码登录")
    }

    $("#inpBtn").click(function () {
      var count = 60;
      console.log(1);
      //jquery要用setInterval()定时器，因为这里不会调用倒计时函数，要循环执行
      var interval = setInterval(() => {
        if (count == 0) {
          //因为button是<input>元素，所以这里要用.val()方法
          $("#inpBtn").text("重新获取");
          count = 60;
          //当倒计时结束，这里要清除定时器
          clearTimeout(interval);
        } else {
          $("#inpBtn").text(count + "s后重新获取");
          count--;
        }
      }, 1000)
    })
  })
  $("#btnSubmit").click(function () {
    $.get("http://jx.xuzhixiang.top/ap/api/login.php",
      { username: $("#username").val(), password: $("#password").val() },
      (res) => {

        alert(res.msg)


        document.cookie = "id=" + res.data.id;
        location.href = `index.html?username=${res.data.username}&${res.data.id}`
        console.log(res)


      })
  })


})