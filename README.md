# Contact Form Validation with JavaScript

## Project Overview

This project is a responsive Contact Form developed using HTML, CSS, and JavaScript. It validates user inputs on the client side before allowing form submission. The form provides real-time feedback through error messages and success notifications, improving user experience and data accuracy.

---

## Features

### Contact Form Fields

* Name
* Email
* Message

### Validation Features

* Name field cannot be empty
* Email field cannot be empty
* Email format validation using Regular Expressions (Regex)
* Message field cannot be empty
* Displays error messages below each field
* Prevents form submission if validation fails
* Displays success message when all fields are valid

### Additional Features

* Reset Button to clear form inputs
* Clears all validation messages on reset
* Modern responsive user interface
* Gradient background design
* Hover effects on buttons
* Mobile-friendly layout

---

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)

---

## Project Structure

```text
ContactFormValidation/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## Validation Rules

### Name

* Must not be empty

### Email

* Must not be empty
* Must follow a valid email format

Example Regex:

```javascript
/^[^\s@]+@[^\s@]+\.[^\s@]+$/
```

### Message

* Must not be empty

---

## How to Run

1. Download the project files.
2. Place all files in the same folder.
3. Open `index.html` in a web browser.
4. Test the form with valid and invalid inputs.

---

## Test Cases

### Invalid Inputs

| Input         | Expected Result             |
| ------------- | --------------------------- |
| Empty Name    | Name is required            |
| Empty Email   | Email is required           |
| Invalid Email | Enter a valid email address |
| Empty Message | Message is required         |

### Valid Inputs

| Input         | Expected Result |
| ------------- | --------------- |
| Valid Name    | Accepted        |
| Valid Email   | Accepted        |
| Valid Message | Accepted        |

Result:

```text
Form submitted successfully!
```

---

## Learning Outcomes

Through this project, I learned:

* HTML Form Creation
* CSS Styling and Responsive Design
* JavaScript DOM Manipulation
* Event Handling
* Client-Side Form Validation
* Regular Expressions (Regex)
* Error Handling
* User Experience Design

---

## Future Enhancements

* Phone Number Validation
* Password Validation
* Backend Integration
* Database Connectivity
* Email Notifications
* Form Data Storage

---

## Author

Guna Vardhan Reddy

---

## Conclusion

This project demonstrates the implementation of client-side form validation using JavaScript. By validating user inputs and displaying meaningful feedback, the application improves data quality and user experience while preventing invalid form submissions.
