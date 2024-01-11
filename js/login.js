const dataPlayer = localStorage.getItem("dataPlayers");

//cek data pleyer null or no
if (dataPlayer == null) {
  localStorage.setItem("dataPlayers", JSON.stringify({}));
}

//create function btn createAccount
function createAccount() {
  const nickName = document.getElementById("username").value;

  //validasi input null or not
  if (nickName.trim() != "") {
    localStorage.setItem("username", nickName);
    const displayName = JSON.parse(dataPlayer);

    //cek data name player same or not with input
    if (!displayName[nickName]) {
      Swal.fire({
        icon: "success",
        title: "WOW...",
        text: "Nice nickname ",
      }).then((isOkay) => {
        if (isOkay) {
          window.location.href = "menu.html";
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Opss...",
        text: "Nickname already in use ",
      });
    }
  } else {
    Swal.fire({
      icon: "error",
      title: "Opss...",
      text: "Nickname dont empty",
    });
  }
}

//create function btn login
function handleLogin() {
  const nickName = document.getElementById("username").value;

  //validasi input null or not
  if (nickName.trim() != "") {
    // cek data name player null or not
    const dataPlayer = localStorage.getItem("dataPlayers");
    const displayName = JSON.parse(dataPlayer);
    let user = localStorage.getItem("username");

    //validasi data same or not
    if (user == nickName) {
      window.location.href = "menu.html";
    } else {
      //cek name null or not
      if (displayName[nickName]) {
        localStorage.setItem("username", nickName);
        window.location.href = "menu.html";
      } else {
        Swal.fire({
          icon: "error",
          title: "Opss...",
          text: "Your Nickname does not exist",
        });
      }
    }
  } else {
    Swal.fire({
      icon: "error",
      title: "Opss...",
      text: "Nickname dont empty",
    });
  }
}
