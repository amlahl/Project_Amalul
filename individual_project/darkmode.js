const darklight = document.getElementById("darklight");
const body = document.body;

darklight.onclick = () => {
    if (body.classList.contains("light-mode")) {
        body.classList.replace("light-mode", "dark-mode");
    } else if (body.classList.contains("dark-mode")) {
        body.classList.replace("dark-mode", "light-mode");
    }
};