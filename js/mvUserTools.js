let browser = chrome;

browser.storage.local.get(['ignoredUsers', 'checkboxHidePosts', 'checkboxHideThreads', 'checkboxFixNightWolf'], function (userSettings) {

  // Ocultar posts
  if (userSettings.checkboxHidePosts) {
    let x = document.getElementsByClassName("cf post");
    for (let i = 0; i < x.length; i++) {
      if (userSettings.ignoredUsers.includes(x[i].dataset.autor)) {
        let postNumber = x[i].dataset.num;
        let hiddenGroup = document.createElement("div");
        hiddenGroup.classList.add("moderated-group");
        let a = $('<a name="' + i + 1 + '" class="name-pad"></a>');
        let hiddenPostCard = $('<div class="post info"><div class="post-meta"><a href="#' + postNumber + '" class="qn">#' + postNumber + '</a><div class="post-body"><div class="locked-msg"><a class="post-btn hiddenmsg" href="#post-' + postNumber + '"><i class="fa fa-flag"></i> Has ocultado este post de <b>' + x[i].dataset.autor + '</b>. Pulsa para mostrar el post</a></div></div></div></div>');
        x[i].classList.add('locked');
        $(hiddenGroup).append(a);
        $(hiddenGroup).append(hiddenPostCard);
        $(hiddenGroup).insertBefore(x[i]);
      }
    }
  }

  // Ocultar hilos
  if (userSettings.checkboxHideThreads) {
    let threads = document.getElementsByClassName("tooltip-left");
    for (let i = 0; i < threads.length; i++) {
      let nombreUsuario = threads[i].href.split("/");
      nombreUsuario = nombreUsuario[nombreUsuario.length - 1];
      if (userSettings.ignoredUsers.includes(nombreUsuario)) {
        threads[i].parentNode.parentNode.style.display = "none";
      }
    }
  }

  // Misc
  // Fix nick Nightwolf
  
  if (userSettings.checkboxFixNightWolf) {
    let autores = document.getElementsByClassName("autor user-card");
    for (let i = 0; i < autores.length; i++) {
      let userURL = autores[i].href.split("/");
      let username = userURL[userURL.length - 1];
      if (username == "NigthWolf") {
        autores[i].textContent = "NightWolf";
      }
    }
  }
});

