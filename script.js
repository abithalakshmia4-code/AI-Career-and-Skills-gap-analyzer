function analyzeSkills() {

    const name = document.getElementById("name").value.trim();
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

    if (name === "") {
        alert("Please enter your name.");
        return;
    }

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

    // Calculate skill match percentage
    const percentage = Math.round(
        (matchedSkills.length / required.length) * 100
    );

    // Display result
    let result = "";

    result += "<h3>Hello, " + name + "! 👋</h3>";

    result += "<h3>🎯 Skill Match: " + percentage + "%</h3>";

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

    // Learning roadmap
    result += "<h3>📚 Recommended Learning Roadmap</h3>";

    if (missingSkills.length > 0) {

        result += "<ol>";

        missingSkills.forEach(function (skill) {
            result += "<li>Learn " + skill.toUpperCase() + "</li>";
        });

        result += "<li>Practice coding problems</li>";
        result += "<li>Build a real-world project</li>";
        result += "<li>Update your resume and GitHub profile</li>";

        result += "</ol>";

    } else {

        result += "<p>Keep practicing and build more projects! 🚀</p>";
    }

    document.getElementById("resultContent").innerHTML = result;

    document.getElementById("result").scrollIntoView({
        behavior: "smooth"
    });
}