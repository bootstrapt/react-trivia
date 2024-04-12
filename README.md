# Trivia App

Simple trivia application that uses questions from the Open Trivia Database.

### Spec

✅ At least 20 questions and answers
✅ 2 or more components
✅ 1 or more Buttons for interactivity
✅ Show one question or answer at a time
✅ Move forward or back through the trivia questions
✅ When moving forward or back through cards the new card should show the question and not the answer

### Requirements

- Git CLI
- Node 16.14
- Node Version Manager (optional)
- curl (optional)

### Installation

1. Clone the repo
   `$ git clone `

2. Enter the project directory
   `$ cd react-trivia`

3. (as needed) Switch to Node v16.14
   `$ nvm use`

4. Install dependencies
   `$ npm install`

### Usage

To run the app locally:
`$ nvm use` (as needed)
`$ npm run dev`

To update the trivia questions:
Please visit [https://opentdb.com/api_config.php](https://opentdb.com/api_config.php) for trivia API options.
`$ cd <react-trivia-location>/assets`
`$ curl -X GET 'https://opentdb.com/api.php?amount=20' > questions.json`

_built with React + Typescript + Node + Vite_
