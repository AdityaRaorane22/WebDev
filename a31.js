document.getElementById('courseForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const numCourses = document.getElementById('numCourses').value;
    generateCourseInputs(numCourses);
});

function generateCourseInputs(numCourses) {
    const courseInputsContainer = document.getElementById('courseInputs');
    courseInputsContainer.innerHTML = '';

    for (let i = 0; i < numCourses; i++) {
        const courseInputDiv = document.createElement('div');
        courseInputDiv.className = 'course-input';

        const courseCodeInput = document.createElement('input');
        courseCodeInput.type = 'text';
        courseCodeInput.name = `courseCode${i}`;
        courseCodeInput.placeholder = 'Course Code';
        courseCodeInput.required = true;

        const courseGradeInput = document.createElement('input');
        courseGradeInput.type = 'text';
        courseGradeInput.name = `courseGrade${i}`;
        courseGradeInput.placeholder = 'Grade (S, A, B, C, D, E, F, U, P)';
        courseGradeInput.required = true;

        courseInputDiv.appendChild(courseCodeInput);
        courseInputDiv.appendChild(courseGradeInput);
        courseInputsContainer.appendChild(courseInputDiv);
    }

    document.getElementById('gradesForm').style.display = 'block';
}

document.getElementById('gradesForm').addEventListener('submit', function(event) {
    event.preventDefault();
    calculateCGPA();
});

function calculateCGPA() {
    const formData = new FormData(document.getElementById('gradesForm'));
    let totalCredits = 0;
    let weightedCredits = 0;
    const courseEntries = Array.from(formData.entries());
    const courseCodes = courseEntries.filter((_, index) => index % 2 === 0).map(entry => entry[1]);
    const courseGrades = courseEntries.filter((_, index) => index % 2 === 1).map(entry => entry[1].toUpperCase());

    courseCodes.forEach((courseCode, index) => {
        const courseGrade = courseGrades[index];
        const course = course_details.courseDetails.find(c => c.code === courseCode);

        if (course && grades_details.hasOwnProperty(courseGrade)) {
            const gradePoint = grades_details[courseGrade];
            const credits = parseInt(course.credits);

            if (credits > 0) {
                weightedCredits += gradePoint * credits;
                totalCredits += credits;
            }
        } else {
            console.error(`Invalid course code or grade: ${courseCode}, ${courseGrade}`);
        }
    });

    const cgpa = totalCredits === 0 ? 0 : (weightedCredits / totalCredits).toFixed(2);
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Your CGPA is: ${cgpa}`;
    resultElement.style.display = 'block';
}
