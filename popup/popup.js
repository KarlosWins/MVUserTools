var browser = chrome;

browser.storage.local.get(['ignoredUsers', 'checkboxHidePosts', 'checkboxHideThreads', 'checkboxFixNightWolf'], function (result) {
  $("#ignoredUsers").val(result.ignoredUsers);
  $("#checkboxHidePosts").prop("checked", (result.checkboxHidePosts));
  $("#checkboxHideThreads").prop("checked", (result.checkboxHideThreads));
  $("#checkboxFixNightWolf").prop("checked", (result.checkboxFixNightWolf));
});

$("#ignoredUsers").change(function () {
  browser.storage.local.set({ 'ignoredUsers': this.value })
});

$("#checkboxHidePosts").change(function () {
  let value = $("#checkboxHidePosts").prop('checked');
  browser.storage.local.set({ 'checkboxHidePosts': value })
});

$("#checkboxHideThreads").change(function () {
  let value = $("#checkboxHideThreads").prop('checked');
  browser.storage.local.set({ 'checkboxHideThreads': value })
});

$("#checkboxFixNightWolf").change(function () {
  let value = $("#checkboxFixNightWolf").prop('checked');
  browser.storage.local.set({ 'checkboxFixNightWolf': value })
}); 