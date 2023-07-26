function MododeAuterna() {
  const html = document.documentElement

  if (html.classList.contains("luz")) {
    html.classList.remove("luz")
  } else {
    html.classList.add("luz")
  }
}
