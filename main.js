window.onload = function init(){
  alert(location.pathname.substring(location.pathname.lastIndexOf("/") + 1));
  document.title = "Web Editor";
};
