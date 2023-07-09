# styled-components-basics-practice

learning and practicing fundamentals of styled-components

# initialize app with create react app

create a github repo and intialize create react app in that folder in vscode

# install styled-components

install package styled-components using one of the following commands.

npm install styled-components

npm install styled-components@latest

yarn add styled-components

# intro

styled-components is a css in js library.

# basic styled component

style a button using styled components.

# using props

you can pass props to styled component, and style according to props.

# extending styles

extending the already existing style-component styles to another styled-component and add some variation also. it can also be done using props but it can lead to too many props to keep track of. hence using extend method helps in easy styling.

while creating styled components, we apply styles on html elements. instead, you can also pass other react components(styled component) as element, whose styling is preset, on top of it you can modify based on your requirement. i.e., extending other components styles, and modifying few styles if needed.

# polymorphic prop

making one type element (ex. button) to act like another type of element (ex. a) using 'as' prop on the styled-component.

# pseudo classes

applying pseudo classes (ex. hover, focus, etc.) on styled components.

# passed props and adding attributes

ex. adding type='submit' on button by passing as props, by using attrs constructor or props function.
