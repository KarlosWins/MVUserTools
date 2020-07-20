var browser = chrome;

browser.storage.local.get(['ignoredUsers', 'checkboxHidePosts', 'checkboxHideThreads', 'checkboxFixNightWolf'], function (userSettings) {

  // Ocultar posts
  if (userSettings.checkboxHidePosts) {
    var x = document.getElementsByClassName("cf post");
    for (var i = 0; i < x.length; i++) {
      if (userSettings.ignoredUsers.includes(x[i].dataset.autor)) {
        let postNumber = x[i].dataset.num;
        var hiddenGroup = document.createElement("div");
        hiddenGroup.classList.add("moderated-group");
        var a = $('<a name="' + i + 1 + '" class="name-pad"></a>');
        var hiddenPostCard = $('<div class="post info"><div class="post-meta"><a href="#' + postNumber + '" class="qn">#' + postNumber + '</a><div class="post-body"><div class="locked-msg"><a class="post-btn hiddenmsg" href="#post-' + postNumber + '"><i class="fa fa-flag"></i> Has ocultado este post de <b>' + x[i].dataset.autor + '</b>. Pulsa para mostrar el post</a></div></div></div></div>');
        x[i].classList.add('locked');
        $(hiddenGroup).append(a);
        $(hiddenGroup).append(hiddenPostCard);
        $(hiddenGroup).insertBefore(x[i]);
      }
    }
  }

  // Ocultar hilos
  if (userSettings.checkboxHideThreads) {
    var threads = document.getElementsByClassName("tooltip-left");
    for (var i = 0; i < threads.length; i++) {
      var nombreUsuario = threads[i].href.split("/");
      nombreUsuario = nombreUsuario[nombreUsuario.length - 1];
      if (userSettings.ignoredUsers.includes(nombreUsuario)) {
        threads[i].parentNode.parentNode.style.display = "none";
      }
    }
  }

  // Misc
  // Fix nick Nightwolf
  
  if (userSettings.checkboxFixNightWolf) {
    var nicks = document.getElementsByClassName("autor user-card");
    for (var i = 0; i < nicks.length; i++) {
      var nombreUsuario = nicks[i].href.split("/");
      nombreUsuario = nombreUsuario[nombreUsuario.length - 1];
      if (nombreUsuario == "NigthWolf") {
        nicks[i].textContent = "NightWolf";
      }
    }
  }
});

