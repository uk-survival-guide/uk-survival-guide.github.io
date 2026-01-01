document.addEventListener("DOMContentLoaded", () => {
  new DearFlip.DFLIP(document.getElementById("book"), {
    height: "100%",
    width: "100%",
    autoEnableOutline: true,
    pageMode: DearFlip.FLIPBOOK_PAGE_MODE.SINGLE,
    shadows: true,
    perspective: 2000,
    duration: 1000,
    startPage: 0,
    flipSound: false,
    mobileScrollSupport: true,
  });
});
