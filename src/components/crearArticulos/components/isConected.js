import firebase from "gatsby-plugin-firebase"

export function isConected() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (
      document.getElementById("notConected") &&
      document.getElementById("conected")
    ) {
      if (user) {
        document.getElementById("notConected").style.display = "none"
        document.getElementById("conected").style.display = "block"
      } else {
        document.getElementById("notConected").style.display = "block"
        document.getElementById("conected").style.display = "none"
      }
    }
  })
}
