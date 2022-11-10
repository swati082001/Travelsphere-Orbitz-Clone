let clickbox = () => {
    let tick = document.getElementById("checkbox").checked;
    if (tick == true) {
      console.log(clickbox);
      document.getElementById("clickedcheckbox").innerText =
        "Selecting this checkbox will keep you signed into your account on this device until you sign out. Do not select this on shared devices.";
    } else {
      document.getElementById("clickedcheckbox").innerText = null;
    }
  
    return tick;
  };
  
  let users_data = JSON.parse(localStorage.getItem("successful"));
  console.log(users_data);
  
  let verify = () => {
    let x = clickbox();
    console.log(x);
  
    let email = document.getElementById("user_email").value;
    let password = document.getElementById("user_password").value;
    console.log(email, password);
    let flag = true;
    let click = true;
    for (let i = 0; i < users_data.length; i++) {
      if (
        users_data[i].email == email &&
        users_data[i].password == password &&
        x == true
      ) {
        console.log(x);
        flag = false;
        console.log(users_data[i].email, users_data[i].password);
        localStorage.setItem("user", JSON.stringify(users_data[i]));
        break;
      } else if (
        users_data[i].email == email &&
        users_data[i].password == password &&
        x == false
      ) {
        click = false;
      }
    }
    if (flag == false) {
      alert("Sign in successfully");
      window.location.href = "./index.html";
    } else if (click == false) {
      alert("Please click on checkbox");
    } else {
      alert("Valid data doesn't match");
    }
  };
  
  let appleacount = () => {
    window.location.href =
      "https://appleid.apple.com/auth/authorize?response_type=code&client_id=com.orbitz.iphoneprod.release&response_mode=form_post&scope=name%20email&state=9P8poAQHwg-09WKRkLHi5w54lo6hFr2ayoI7DhYnn_Q&nonce=rGWIsvAawW-Rb3VZbwxhRy4ya5iCKRcmzfqunfHP5pI&redirect_uri=https://www.orbitz.com/eg-auth-svcs/api/v1/oauth2/callback/apple-web&locale=en_US";
  };
  let metaacount = () => {
    window.location.href =
      "https://www.facebook.com/login.php?skip_api_login=1&api_key=444673758939659&kid_directed_site=0&app_id=444673758939659&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv11.0%2Fdialog%2Foauth%3Fresponse_type%3Dcode%26client_id%3D444673758939659%26response_mode%3Dquery%26scope%3Dpublic_profile%2Bemail%26state%3Drq_IwsExollUmHI_hWvLOmWNI-5AbRXOdzzWtBWw7cw%26redirect_uri%3Dhttps%253A%252F%252Fwww.orbitz.com%252Feg-auth-svcs%252Fapi%252Fv1%252Foauth2%252Fcallback%252Ffacebook-web%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D0dcd5f35-cbb8-4471-9319-daa61dc8dfcd%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.orbitz.com%2Feg-auth-svcs%2Fapi%2Fv1%2Foauth2%2Fcallback%2Ffacebook-web%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3Drq_IwsExollUmHI_hWvLOmWNI-5AbRXOdzzWtBWw7cw%23_%3D_&display=page&locale=bn_IN&pl_dbl=0";
  };
  
  document.getElementById("facebook").addEventListener("click", metaacount);
  document.getElementById("apple").addEventListener("click", appleacount);
  document.getElementById("checkbox").addEventListener("click", clickbox);
  document.getElementById("button").addEventListener("click", verify);
  
  document
    .querySelector(".back-button-on-signinPage")
    .addEventListener("click", () => {
      window.location.href = "index.html";
    });
  