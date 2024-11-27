const pages = {
    home: document.getElementById("home-page"),
    form: document.getElementById("form-page"),
    resume: document.getElementById("resume-page"),
};

const buttons = {
    getStarted: document.getElementById("get-started"),
    backToHome1: document.getElementById("back-to-home-1"),
    backToHome2: document.getElementById("back-to-home-2"),
};

function showPage(pageToShow) {
    Object.values(pages).forEach((page) => (page.style.display = "none"));
    pageToShow.style.display = "block";
}

showPage(pages.home);

buttons.getStarted.addEventListener("click", () => showPage(pages.form));
buttons.backToHome1.addEventListener("click", () => showPage(pages.home));
buttons.backToHome2.addEventListener("click", () => showPage(pages.home));

const form = document.getElementById("resume-form");
const resumeContent = document.getElementById("resume-content");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const fields = ["name", "email", "phone", "address", "summary", "skills", "experience", "education", "projects", "certifications"];
    const data = {};

    fields.forEach((field) => {
        data[field] = document.getElementById(field).value || "Not Provided";
    });

    const resumeColor = document.getElementById("resume-color").value;
    document.getElementById("resume-display").style.borderTopColor = resumeColor;

    resumeContent.innerHTML = `
        <h3>${data.name}</h3>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Address:</strong> ${data.address}</p>
        <h4>Summary</h4>
        <p>${data.summary}</p>
        <h4>Skills</h4>
        <p>${data.skills}</p>
        <h4>Experience</h4>
        <p>${data.experience}</p>
        <h4>Education</h4>
        <p>${data.education}</p>
        <h4>Projects</h4>
        <p>${data.projects}</p>
        <h4>Certifications</h4>
        <p>${data.certifications}</p>
    `;

    showPage(pages.resume);
});

document.getElementById("download-resume").addEventListener("click", () => {
    const opt = {
        margin: 0.5,
        filename: "Resume.pdf",
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    html2pdf().set(opt).from(resumeContent).save();
});
