// FrontPage Dynamic Animation Script (reconstructed)
// Original: Microsoft FrontPage 4.0 dynamicanimation module

function dynAnimation() {}
function clickSwapImg() {}

function swapImg(name, src) {
  if (document[name]) document[name].src = src;
}

function swapImgRestore() {}
function preloadImages() {
  var d = document;
  if (d.images) {
    var args = preloadImages.arguments;
    for (var i = 0; i < args.length; i += 3) {
      if (args[i + 0] && d.images[args[i + 0]]) d.images[args[i + 0]].src = args[i + 2];
    }
  }
}
