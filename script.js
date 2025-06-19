const tabLinks = document.querySelectorAll(".tab-link");
tabLinks.forEach((tabLink) => {
  tabLink.addEventListener("click", () => {
    tabLinks.forEach((tLink) => {
      tLink.classList.remove("active-link");
    });
    tabLink.classList.add("active-link");
  });
});
function showTab(tab) {
  const tabs = document.querySelectorAll(".tab-content");
  for (const tab of tabs) {
    tab.style.display = "none";
  }
  document.getElementById(tab).style.display = "block";
}
