// TEST VULNERABILITY FOR CODEQL - REMOVE AFTER TESTING
function unsafeRedirect() {
    const params = new URLSearchParams(window.location.search);
    const next = params.get("next");

    if (next) {
        window.location.href = next;
    }
}

unsafeRedirect();
function changeText(){

document.getElementById("message").innerHTML =
"CI/CD Deployment Successful 🎉";

}
