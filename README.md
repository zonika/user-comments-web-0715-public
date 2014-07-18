---
  tags: jquery
  languages: JavaScript, js
  resources: 1
---

# User Comments

## Description
You're a web developer working for the technology department of Econ News! **Congratulations!!** 

Econ News is a web periodical with hard hitting stories and a thriving community of commenters reminiscent of YouTube or 4chan. But they need your help to improve the commenting section despite it's lively commentary. As of right now anyone can simply post, but you need to just make sure some basic inputs are given to keep the riff raff out. Comments are the crux of their success, so it's no small feat for your first job. Follow the instructions below!

## Instructions

1. Clone this repository and open `index.html`.
You'll see an amazing website for ECON News Corp.
If you go to the bottom of the page, you'll see a comments form. You'll need to
do several things to the form.
2. The form should be hidden until a visitor clicks on the "add comment" button.
3. Use an object to store the name, email, current date, and comment for the most
recent input.
4. Validate the Name field with a requirement that names be more than 3 characters
5. Validate that the email is formatted properly
6. Validate that a comment was written
7. Print the new comment with the commenters name and email below the existing
comment.
8. Add all your validations and js in `js/comments.js` and don't forget to run `open SpecRunner.html` for guidance.

Here's an email regex test to help
`/^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+@[a-zA-Z0-9_-]+.([a-z]{2}|com|org|net|edu|gov|mil|biz|info|mobi|name|aero|asia|jobs|museum)$/`

## Resources
* [jQuery in Action](http://books.flatironschool.com/books/44) - [Chapter 4, Section 2](http://books.flatironschool.com/books/44), page 140
