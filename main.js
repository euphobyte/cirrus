window.onload = function init(){
  alert(location.pathname.substring(location.pathname.lastIndexOf("/") + 1));
  window.document.title = "Web Editor";
};
