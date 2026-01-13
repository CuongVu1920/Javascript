// Thuộc tính innerText và innerHTML

// 2. innerHTML
// 👉 Là gì?

// Lấy / gán toàn bộ HTML bên trong phần tử

// Giữ nguyên thẻ HTML

// KHÔNG quan tâm CSS

// 1. innerText
// 👉 Là gì?

// Lấy / gán nội dung văn bản hiển thị của phần tử

// BỎ QUA thẻ HTML

// Tôn trọng CSS (display: none, visibility: hidden)

const output = document.querySelector(".output");
const courses = ["HTML", "CSS", "Javascript", "ReactJS"];

const result = courses.map((item) => `<li>${item}</li>`);

console.log(result);

output.innerHTML = `<ul>${result.join(" ")}</ul>`;


// VD2:

const content = `<h2 class="left"><span class="left_h2">HTML</span> Examples</h2>
<a target="_top" class="no-checkmark" href="html_examples.asp">HTML Examples</a>
<a target="_top" class="no-checkmark" href="html_editor.asp">HTML Editor</a>
<a target="_top" class="no-checkmark" href="html_quiz.asp">HTML Quiz</a>
<a target="_top" class="no-checkmark" href="html_exercises.asp">HTML Exercises</a>
<a target="_top" class="no-checkmark" href="html_website.asp">HTML Website</a>
<a target="_top" class="no-checkmark" href="html_syllabus.asp">HTML Syllabus</a>
<a target="_top" class="no-checkmark" href="html_study_plan.asp">HTML Study Plan</a>
<a target="_top" class="no-checkmark" href="html_interview_prep.asp">HTML Interview Prep</a>
<a target="_top" class="no-checkmark" href="html_bootcamp.asp">HTML Bootcamp</a>
<a target="_top" class="no-checkmark" href="html_exam.asp">HTML Certificate</a>
<a target="_top" class="no-checkmark" href="html_summary.asp">HTML Summary</a>
<a target="_top" class="no-checkmark not-wired" href="html_accessibility.asp">HTML Accessibility</a>
<br>
<h2 class="left"><span class="left_h2">HTML</span> References</h2>
<a target="_top" class="no-checkmark not-wired" href="/tags/default.asp">HTML Tag List</a>
<a target="_top" class="no-checkmark not-wired" href="/tags/ref_attributes.asp">HTML Attributes</a>
<a target="_top" class="no-checkmark not-wired" href="/tags/ref_standardattributes.asp">HTML Global Attributes</a>
<a target="_top" class="no-checkmark not-wired" href="/tags/ref_html_browsersupport.asp">HTML Browser Support</a>
<a target="_top" class="no-checkmark not-wired" href="/tags/ref_eventattributes.asp">HTML Events</a>
<a target="_top" class="no-checkmark not-wired" href="/tags/ref_colornames.asp">HTML Colors</a>
<a target="_top" class="no-checkmark not-wired" href="/tags/ref_canvas.asp">HTML Canvas</a>
<a target="_top" class="no-checkmark not-wired" href="/tags/ref_av_dom.asp">HTML Audio/Video</a>
<a target="_top" class="no-checkmark not-wired" href="/tags/ref_html_dtd.asp">HTML Doctypes</a>
<a target="_top" class="no-checkmark not-wired" href="/tags/ref_charactersets.asp">HTML Character Sets</a>
<a target="_top" class="no-checkmark not-wired" href="/tags/ref_urlencode.asp">HTML URL Encode</a>
<a target="_top" class="no-checkmark not-wired" href="/tags/ref_language_codes.asp">HTML Lang Codes</a>
<a target="_top" class="no-checkmark not-wired" href="/tags/ref_httpmessages.asp">HTTP Messages</a>
<a target="_top" class="no-checkmark not-wired" href="/tags/ref_httpmethods.asp">HTTP Methods</a>
<a target="_top" class="no-checkmark not-wired" href="/tags/ref_pxtoemconversion.asp">PX to EM Converter</a>
<a target="_top" class="no-checkmark not-wired" href="/tags/ref_keyboardshortcuts.asp">Keyboard Shortcuts</a>`
const test = document.querySelector(".test");

test.innerHTML = content;
console.log(test.innerText);



