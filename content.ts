import type { PlasmoCSConfig } from "plasmo"

import "./style.scss"

export const config: PlasmoCSConfig = {
  matches: ["https://manaba.tsukuba.ac.jp/ct/home_library_query"]
}

document.querySelectorAll(".row0, .row1").forEach((element) => {
  const period = element.getElementsByClassName("td-period")
  if (period.length == 2 && !!period[1].textContent) {
    const endDate = new Date(period[1].textContent)
    element.setAttribute(
      "style",
      `animation-duration:${
        0.5 + (endDate.valueOf() - Date.now()) / 100000000
      }s; 
      `
    )
  }
})
