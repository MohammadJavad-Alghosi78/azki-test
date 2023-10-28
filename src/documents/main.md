<!-- FOR READING DOCUMENT PRESS: CTRL + SHIFT + V -->

# Description of the project

- This project is a React project because we did not need ssr in general and except in special cases
- In this project, in order to avoid complicating the work and making the project heavier, Redux was not used, and contextAPI was a better option to meet our needs.
- css-in-js was used for styling (specifically styled-components). Since the project size was not that big, css-in-js was a better option and also more convenient (at least for me personally). But if the size of the project was bigger, perhaps choosing pre-processors would be a more logical choice
- [Container/presentational design pattern](https://www.patterns.dev/posts/presentational-container-pattern) was used.
- [TypeScript](https://www.typescriptlang.org/docs/) was used to avoid possible typing errors.
- [Axios](https://axios-http.com/docs/intro) library was used to send requests to the server
- Classes were used to write requests
  I usually use class to write requests
  The requests were written as [static methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static) in the classes so that we don't have to create a new instance to use them. Of course, if we didn't want to use static methods, we could create only one instance for each class according to the [singleton design pattern](https://patterns.dev/posts/singleton-pattern) and use the same created instance everywhere in the project.
