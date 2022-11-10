let count = 0;
let check = () => {
  document.getElementById("clickedcheckbox").innerText = null;
  checkbox: document.getElementById("checkbox").value = "clicked";
  count++;
  if (count % 2 == 0) {
    document.getElementById("clickedcheckbox").innerText = null;
  } else {
    document.getElementById("clickedcheckbox").innerText =
       "Selecting this checkbox will keep you signed into your account on this device until you sign out. Do not select this on shared devices.";
  }
};

let registered = JSON.parse(localStorage.getItem("successful")) || [];

let register = (e) => {
  e.preventDefault();

  let user_details = {
    email: document.getElementById("email").value,
    first_name: document.getElementById("name").value,
    last_name: document.getElementById("last_name").value,
    password: document.getElementById("password").value,
    checkbox: document.getElementById("checkbox").value,
  };

  if (
    user_details.email != "" &&
    user_details.first_name != "" &&
    user_details.last_name != "" &&
    user_details.password != "" &&
    user_details.checkbox == "clicked"
  ) {
    console.log(user_details.checkbox);

    registered.push(user_details);
    localStorage.setItem("successful", JSON.stringify(registered));
    alert("Sign Up Successfully");

    console.log(user_details);

    document.getElementById("email").value = null;
    document.getElementById("name").value = null;
    document.getElementById("last_name").value = null;
    document.getElementById("password").value = null;

    window.location.href = "./signin.html";
  } else {
    alert("Please fill all the valid credentials");
  }
};
let privious_page = () => {
  window.location.href = "./index.html";
};

let applesocial = () => {
  window.location.href =
    "https://appleid.apple.com/auth/authorize?response_type=code&client_id=com.orbitz.iphoneprod.release&response_mode=form_post&scope=name%20email&state=LXBMmjtRF40BW3BBDmYNmmxHgdY9ISPGgeEgvVRbr6U&nonce=oGabl3lto-4Yh55oCvFaMWk0fS7WEWwBfCSI39TryQU&redirect_uri=https://www.orbitz.com/eg-auth-svcs/api/v1/oauth2/callback/apple-web&locale=en_US";
};
let metasocial = () => {
  window.location.href =
    "https://www.facebook.com/login.php?skip_api_login=1&api_key=444673758939659&kid_directed_site=0&app_id=444673758939659&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv11.0%2Fdialog%2Foauth%3Fresponse_type%3Dcode%26client_id%3D444673758939659%26response_mode%3Dquery%26scope%3Dpublic_profile%2Bemail%26state%3DBDichO0wdJb6S1FNcFe57TL_i_wDEsZjUuSmDb_T4ow%26redirect_uri%3Dhttps%253A%252F%252Fwww.orbitz.com%252Feg-auth-svcs%252Fapi%252Fv1%252Foauth2%252Fcallback%252Ffacebook-web%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D16cdc618-a819-4774-8a3d-4623374daacd%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.orbitz.com%2Feg-auth-svcs%2Fapi%2Fv1%2Foauth2%2Fcallback%2Ffacebook-web%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3DBDichO0wdJb6S1FNcFe57TL_i_wDEsZjUuSmDb_T4ow%23_%3D_&display=page&locale=bn_IN&pl_dbl=0";
};

document.getElementById("facebook").addEventListener("click", metasocial);
document.getElementById("apple").addEventListener("click", applesocial);
document.getElementById("checkbox").addEventListener("click", check);
document.getElementById("button").addEventListener("click", register);
document.querySelector(".fa-solid").addEventListener("click", privious_page);
