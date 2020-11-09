## Portfolio Projects JSX

### Description

The `Projects.jsx` file provided is a example code taken from my Portfolio projects. The project is created using Gatsby which is built on top of react.

### UseContext

As this is a static site the project uses Reacts builtin useContext hook instead of a more complex Redux store. This useContext allows for all of the page text to be written in one single file. The data is broken up into section headers and then the relevant section data is obtained via the useContext hook.

### useEffect

This hook is used to determine where the graphic fade in from. If the page is detected to be a large display (greater then 769) then components move in from left. If page is a small display then components move in from bottom.

### Styling

The project is styled using pre-made components from the react-bootstrap library. This is then further styled with custom project specific Sass files. The custom className (e.g. `project-wrapper\_\_text`) are used as identifiers for the Sass files to style.

### JSX values

- All components are wrapped in a container and then a project-wrapper div.
- A title is input from custom component.
- The projects array (imported info this file from the useEffect hook) contains one object for each project displayed. Each object key is destructured in the .map function.
- Each project is put in it's own row and then all text is placed in the left colum with an image in the right.
  - note: using react-bootstrap components on small devices the text appears on top of the image.
- Text Data
  - all sub components are wrapped in a Fade Component from the react-reveal library to provide some DOM slid-in effects as the component moves into view
  - the project title, info, tech stack & repo are then displayed.
  - The tech stack destructed is an array.
    - Each value in the array is used on a Badge component from the react-bootstrap library
  - Logic is included to see the the data has a value before inputting the JSX on the page. (e.g. the below checks that a repo has been provided before including the a tag `{repo && ( <a target="_blank" rel="noopener noreferrer" className="cta-btn text-color-main" href={repo} > Source Code </a> )}`)
  - Logic also included for link to open in a new tab
- Image Data
  - image is wrapped in a Fade component similar to the text but with slightly more delay
  - whole image is wrapped in an a tag to allow for it to be clickable
  - Image then wrapped in a Tilt component from the react-tilt library. Allows for DOM where the picture moves/tilts as the mouse moves over it.
  - Image is displayed from the Custom ProjectImg Component.
    - as this is a gatsby project this custom component uses the gatsby-image library and graphql to ensure the image is optimized for the display size
