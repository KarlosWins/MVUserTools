var browser = chrome;

browser.storage.local.get(['ignoredUsers', 'checkboxHidePosts', 'checkboxHideThreads', 'checkboxFixNightWolf'], function (result) {
  ignoredUsers.value = result.ignoredUsers;
  checkboxHidePosts.checked = result.checkboxHidePosts;
  checkboxHideThreads.checked = result.checkboxHideThreads;
  checkboxFixNightWolf.checked = result.checkboxFixNightWolf;
});

document.getElementById('ignoredUsers').onchange = function () {
  browser.storage.local.set({ 'ignoredUsers': ignoredUsers.value })
};

document.getElementById('checkboxHidePosts').onchange = function () {
  browser.storage.local.set({ 'checkboxHidePosts': checkboxHidePosts.checked })
};
document.getElementById('checkboxHideThreads').onchange = function () {
  browser.storage.local.set({ 'checkboxHideThreads': checkboxHideThreads.checked })
};
document.getElementById('checkboxFixNightWolf').onchange = function () {
  browser.storage.local.set({ 'checkboxFixNightWolf': checkboxFixNightWolf.checked })
}; 