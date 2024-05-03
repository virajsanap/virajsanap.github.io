---
layout: page
permalink: /resume/
title: Resume
nav: true
nav_order: 4
cv_pdf: VirajSanapResume.pdf
#description: This is a description of the page. You can modify it in '_pages/cv.md'. You can also change or remove the top pdf download button.
---
<div class="resume">
  <a href="{{ page.cv_pdf | prepend: 'assets/pdf/' | relative_url}}" target="_blank" rel="noopener noreferrer" class="btn btn-icon btn-radius {% if site.theme == 'repo_theme_dark' %}dark{% else %}light{% endif %}">
    <i class="fa-solid fa-file-pdf"></i> Download Viraj Resume
  </a>
</div>