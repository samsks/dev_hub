import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
    --color-primary:          #FF577F;
    --color-primary-focus:    #FF427F;
    --color-primary-negative: #59323F;

    --grey-4: #121214; 
    --grey-3: #212529; 
    --grey-2: #343B41; 
    --grey-1: #868E96; 
    --grey-0: #F8F9FA; 
    
    --grey-2-fade: rgba(52, 59, 65, 0.3);
    --grey-2-shadow: rgba(134, 142, 150, 0.1);

    --color-white: #ffffff;

    --color-negative: #E83F5B;
    --color-success:  #3FE864;

    --fontfamily-inter: 'Inter', sans-serif;
  
}


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--fontfamily-inter);
    color: var(--grey-0);
}

html{
    overflow-x: hidden;
}

body{
    background-color: var(--grey-4);
    
    font-family: var(--fontfamily-inter);
}

.container {
    min-width: 300px;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 0 1rem;
}

button {
    cursor: pointer;
    border: none;
    background: transparent;
}

a{
    text-decoration: none;
}

ul,
ol,
li {
    list-style: none;
}

img {
    max-width: 100%;
}

input,
select {
    background: transparent;
    border: none;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
span,
li,
textarea {
    font-family: var(--fontfamily-inter);
}



`;
