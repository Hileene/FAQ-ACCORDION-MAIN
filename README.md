# Frontend Mentor - FAQ accordion solution

![Desktop design solution screenshot for the FAQ accordion challenge ](./assets/images/Screenshot_%20FAQ-accordion_desktop.png)

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

![Mobile design solution screenshot for the FAQ accordion challenge ](./assets/images/Screenshot_%20FAQ-accordion_mobile1.png)
![Mobile design solution screenshot for the FAQ accordion challenge ](./assets/images/Screenshot_%20FAQ-accordion_mobile2.png)
![Tablet design solution screenshot for the FAQ accordion challenge ](./assets/images/Screenshot_%20FAQ-accordion_tablet.png)
![Desktop design solution screenshot for the FAQ accordion challenge ](./assets/images/Screenshot_%20FAQ-accordion_desktop.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://hileene.github.io/FAQ-ACCORDION-MAIN/)

## My process

The development of the FAQ accordion project was carried out in several stages to ensure a structured and responsive design:

1. **HTML Structure**: The initial step was to build the HTML structure. This involved creating the basic skeleton of the FAQ accordion, including the main container, question blocks, and answer blocks. Semantic HTML tags were used to ensure a clear and accessible markup.

2. **CSS Styling (Mobile First)**: After establishing the HTML structure, the next step was to style the FAQ accordion using CSS. Following the mobile-first approach, styles were first applied to optimize the layout for small screens (375px). This included setting fonts, colors, and layout properties to ensure a user-friendly experience on mobile devices.

3. **CSS Styling (Tablet and Desktop)**: Once the mobile version was in place, media queries were used to adjust the styles for larger screens. For tablet devices (768px and up), adjustments were made to improve the layout and spacing. Finally, for desktop screens (1280px and up), further enhancements were made to take full advantage of the available screen real estate, ensuring a consistent and responsive design across all devices.

4. **JavaScript for Collapse Effect**: The final step involved adding interactivity to the FAQ accordion using JavaScript. Event listeners were added to the question blocks to toggle the visibility of the corresponding answer blocks when clicked. Additionally, the icon was dynamically changed between a plus and a minus to indicate the state of the answer (collapsed or expanded). Smooth transitions were implemented to enhance the user experience.

By following these steps, the FAQ accordion project was developed to be fully responsive and interactive, providing a seamless user experience across various devices and screen sizes.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript

### What I learned

During the development of the FAQ Accordion project, I gained significant insights and practical experience in several key areas of web development. Firstly, I honed my skills in building a semantic HTML structure, ensuring that the content is well-organized and accessible. I also deepened my understanding of mobile-first CSS design principles, allowing me to create a responsive layout that adapts seamlessly to various screen sizes, from mobile devices to desktops. However, I made some mistakes at the beginning of the process.

At first, my positionning was not correct. I used the "position: absolute" property on my "container" element and after that "position: absolute" for the "faq-container" element and the "attribution" element. Because of that, the layout was not responsive.
By using only relative positionning, flexbox layout and the property z-index, I managed to ensure a solid layout for all screen sizes. This project also reinforced the importance of maintaining a balance between design aesthetics and functionality, ensuring that the interface is both visually appealing and user-friendly.

Code snippets:

```css
.svg-container {
  position: relative;
  z-index: 0;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  z-index: 0;
}

.faq-container {
  position: relative; /* Ensure position relative for absolute positioning within */
  z-index: 2; /* Ensure the FAQ container is above other elements */
  align-self: center;
}
```

One of the most valuable aspects of this project was implementing the collapse and expand functionality using JavaScript. I learned how to manipulate the DOM effectively, add event listeners, and toggle classes to create interactive elements. This enhanced my proficiency in writing clean, modular JavaScript code and improved my problem-solving skills when debugging and refining the user interactions.

Code snippets:

```js
questionBlocks.forEach((questionBlock) => {
  questionBlock.addEventListener('click', () => {
    const answerBlock = questionBlock.nextElementSibling
    answerBlock.classList.toggle('answer-visible')
  })
})
```

Overall, this project was an excellent opportunity to integrate various web development techniques and deepen my understanding of creating dynamic and responsive web applications.

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

### Continued development

For futur projects, I would like learn how to implement the collapse and expand functionnality using a JavaScript framework like Vue.js, Angulr or Next.js. I've already used React to implement this fuctionnality for a school project but I would like to refine my knowlege also in this area.

Also, I would like to deepen my understanding with the position CSS property.

### Useful resources

- [Position CSS property](https://www.pierre-giraud.com/html-css-apprendre-coder-cours/position/) - This resource help me to refresh my memory about this property and updated my logic about my layout.
- [Javascript Collapse/Expand animation](https://www.w3schools.com/howto/howto_js_collapsible.asp) - I had already an idea about how I wanted to implement the collapse and expand functionnality but my idea was more complicated and this W3School tutorial help me to remember the "nexElementSibling" property. This way my code is shorter and smoother.

## Author

- Website - [Aline Behalal](https://aline-behalal.netlify.app/)
- Frontend Mentor - [@yHileene](https://www.frontendmentor.io/profile/Hileene)
