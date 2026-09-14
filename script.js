function analyzeSkills() {

    const role = document.getElementById("role").value;

    const selectedSkills = [];

    const checkboxes = document.querySelectorAll(
        'input[type="checkbox"]:checked'
    );

    checkboxes.forEach(function (checkbox) {
        selectedSkills.push(checkbox.value);
    });

    const requiredSkills = {

        java: ["java", "mysql"],

        web: ["html", "css", "javascript"],

        fullstack: [
            "html",
            "css",
            "javascript",
            "mysql",
            "java"
        ],

        data: ["python", "mysql"]
    };

    if (role === "") {
        alert("Please select a target job role.");
        return;
    }

    const required = requiredSkills[role];

    const matchedSkills = required.filter(function (skill) {
        return selectedSkills.includes(skill);
    });

    const missingSkills = required.filter(function (skill) {
        return !selectedSkills.includes(skill);
    });

    let result = "";

    result += "<h3>Matched Skills ✅</h3>";

    if (matchedSkills.length > 0) {
        result += "<p>" + matchedSkills.join(", ") + "</p>";
    } else {
        result += "<p>No matched skills yet.</p>";
    }

    result += "<h3>Missing Skills ❌</h3>";

    if (missingSkills.length > 0) {
        result += "<p>" + missingSkills.join(", ") + "</p>";
    } else {
        result += "<p>Great! You have all the required skills 🎉</p>";
    }

    document.getElementById("resultContent").innerHTML = result;

    document.getElementById("result").scrollIntoView({
        behavior: "smooth"
    });
}