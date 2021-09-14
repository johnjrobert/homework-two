function showVariable(clickedID) {
  console.log("newName app.js " + clickedID);
}

function setClick() {
  $("nav a").click(function (e) {
    let btnID = e.currentTarget.id;
    MODEL.getMyContent(btnID);

    // console.log("Im console.");
    // console.log(btnID);
  });
}

$(document).ready(function () {
  console.log("hello there.");
  setClick();
});
