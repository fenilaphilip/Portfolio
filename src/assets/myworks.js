import weatherForecast from "../media/weatherForecast.png";
import dictionary from "../media/dictionary.png";
import investmentCalculator from "../media/investmentCalculator.png";
import boutique from "../media/boutique.png";
import placePicker from "../media/placePicker.png";
import ticTacToe from "../media/tic-tac-toe.png";
import encoder from "../media/encoder.png";
import weatherApp from "../media/weatherApp.png";
import todolist from "../media/todolist.png";


const MY_WORKS = [
    {
        id: 9,
        caption: "WEATHER APP",
        img: weatherApp,
        img_alt: "app view",
        techStack: [{
            src: "https://img.shields.io/badge/-Open%20weather%20API-orange?&style=flat",
            alt: "Open Weather API"
        }, {
            src: "https://img.shields.io/badge/-React-black?logo=react&logoColor=blue&style=flat",
            alt: "React"
        }, {
            src: "https://img.shields.io/badge/-ES6-yellow?logo=javascript&logoColor=black&style=flat",
            alt: "Javascript"
        },
        {
            src: "https://img.shields.io/badge/-Axios-blue?logo=axios&logoColor=white&style=flat",
            alt: "axios"
        },
        {
            src: "https://img.shields.io/badge/-Bootstrap-blueviolet?logo=bootstrap&logoColor=white&style=flat",
            alt: "bootstrap"
        }],
        description: "A React Web App that utilizes the OpenWeatherMap API to get the current and 7-day weather forecast for a given location. Its displays maximum and minimum temperature of each day of the week as well as an hourly forecast of the day.",
        link: "https://weather.fenilas.com/",
    },
    {
        id: 8,
        caption: "DICTIONARY APP",
        img: dictionary,
        img_alt: "app view",
        techStack: [{
            src: "https://img.shields.io/badge/-React-black?logo=react&logoColor=blue&style=flat",
            alt: "React"
        }, {
            src: "https://img.shields.io/badge/-Javascript-yellow?logo=javascript&logoColor=black&style=flat",
            alt: "Javascript"
        },
        {
            src: "https://img.shields.io/badge/-External%20API-darkgreen?&style=flat",
            alt: "External API"
        },
        {
            src: "https://img.shields.io/badge/-Bootstrap-blueviolet?logo=bootstrap&logoColor=white&style=flat",
            alt: "bootstrap"
        },
        {
            src: "https://img.shields.io/badge/-Axios-blue?logo=axios&logoColor=white&style=flat",
            alt: "axios"
        }],
        description: "The React Dictionary App is a web application that let users to look up the definition of a word. It displays word definitions, synonyms, antonyms, images and example sentences with the help of third-party API's.",
        link: "https://dictionary.fenilas.com/",
    },
    {
        id: 7,
        caption: "INVESTMENT CALCULATOR",
        img: investmentCalculator,
        img_alt: "app view",
        techStack: [{
            src: "https://img.shields.io/badge/-React-black?logo=react&logoColor=blue&style=flat",
            alt: "React"
        }, {
            src: "https://img.shields.io/badge/-Javascript-yellow?logo=javascript&logoColor=black&style=flat",
            alt: "Javascript"
        },
        {
            src: "https://img.shields.io/badge/-CSS3-blueviolet?logo=CSS3&logoColor=white&style=flat",
            alt: "CSS3"
        },
        {
            src: "https://img.shields.io/badge/-HTML5-DC143C?logo=HTML5&logoColor=white&style=flat",
            alt: "HTML5"
        }],
        description: "A React App designed to easily assess the value of your investments over a specified period. With a user-friendly and straightforward interface, the app displays an investment value table for each year. ",
        link: "https://ic.fenilas.com/",
    },

    {
        id: 6,
        caption: "REACT TIC-TAC-TOE",
        img: ticTacToe,
        img_alt: "app view",
        techStack: [{
            src: "https://img.shields.io/badge/-React-black?logo=react&logoColor=blue&style=flat",
            alt: "React"
        }, {
            src: "https://img.shields.io/badge/-Javascript-yellow?logo=javascript&logoColor=black&style=flat",
            alt: "Javascript"
        },
        {
            src: "https://img.shields.io/badge/-CSS3-blueviolet?logo=CSS3&logoColor=white&style=flat",
            alt: "CSS3"
        }],
        description: "Tic-Tac-Toe Game website is created using JavaScript with React framework.",
        link: "https://main--marvelous-llama-ae7acc.netlify.app/",
    },
    {
        id: 5,
        caption: "ENCODER",
        img: encoder,
        img_alt: "app view",
        techStack: [{
            src: "https://img.shields.io/badge/-Typescript-blue?logo=typescript&logoColor=white&style=flat",
            alt: "Typescript"
        }, {
            src: "https://img.shields.io/badge/-TailwindCSS-black?logo=tailwindcss&logoColor=blue&style=flat",
            alt: "context Api"
        }, {
            src: "https://img.shields.io/badge/-React-lightyellow?logo=react&logoColor=blue&style=flat",
            alt: "React"
        }, {
            src: "https://img.shields.io/badge/-Context%20API-yellow?logo=api&logoColor=white&style=flat",
            alt: "context Api"
        }, {
            src: "https://img.shields.io/badge/-Vite-violet?logo=vite&logoColor=white&style=flat",
            alt: "Vite"
        }],
        description: "Encoder is created with TypeScript, React, Tailwind CSS and Vite. Users can enter some text and encode it using URL encoding, Base 64 encoding, or generate a QR Code that can be scanned. History of all the previous usages are stored in local storage of quick access again.",
        link: "https://encoder.fenilas.com",
    },
    {
        id: 4,
        caption: "ELEGANT BOUTIQUE",
        img: boutique,
        img_alt: "app view",
        techStack: [{
            src: "https://img.shields.io/badge/-React-black?logo=react&logoColor=blue&style=flat",
            alt: "React"
        },
        {
            src: "https://img.shields.io/badge/-Context%20API-blue?logo=api&logoColor=white&style=flat",
            alt: "Context API"
        }, {
            src: "https://img.shields.io/badge/-Javascript-yellow?logo=javascript&logoColor=black&style=flat",
            alt: "Javascript"
        },
        {
            src: "https://img.shields.io/badge/-React%20Modal-green?logo=api&logoColor=white&style=flat",
            alt: "Modal"
        }],
        description: "A demo e-commerce store built with vanilla JavaScript, React and Tailwind CSS. You can select multiple numbers of clothes. Adding them to cart, removing them from cart, decreasing and increasing the cart amount and calculating the total cost of the cart. ",
        link: "https://master--dazzling-dodol-f7d555.netlify.app/",
    },
    {
        id: 3,
        caption: "Todo List",
        img: todolist,
        img_alt: "app view",
        techStack: [{
            src: "https://img.shields.io/badge/-Javascript-yellow?logo=javascript&logoColor=black&style=flat",
            alt: "Javascript"
        },
        {
            src: "https://img.shields.io/badge/-ReactJS-blue?logo=react&logoColor=white&style=flat",
            alt: "React"
        },
        {
            src: "https://img.shields.io/badge/-Cypress-98FB98?logo=Cypress&logoColor=black&style=flat",
            alt: "Cypress"
        },
        {
            src: "https://img.shields.io/badge/-CSS3-blueviolet?logo=CSS3&logoColor=white&style=flat",
            alt: "CSS3"
        },
        {
            src: "https://img.shields.io/badge/-HTML5-DC143C?logo=HTML5&logoColor=white&style=flat",
            alt: "HTML5"
        }],
        description: "Todo App allows to manage a list of tasks in a simple and effective way. It is created using React context API and Reducers. End to end testing is done using cypress",
        link: "https://fenilaphilip.github.io/things-to-do/",
    },
    {
        id: 2,
        caption: "PLACE PICKER",
        img: placePicker,
        img_alt: "app view",
        techStack: [{
            src: "https://img.shields.io/badge/-Javascript-yellow?logo=javascript&logoColor=black&style=flat",
            alt: "Javascript"
        },
        {
            src: "https://img.shields.io/badge/-Vite-violet?logo=vite&style=flat",
            alt: "vite"
        },
        {
            src: "https://img.shields.io/badge/-React-black?logo=react&logoColor=blue&style=flat",
            alt: "React"
        },
        {
            src: "https://img.shields.io/badge/-Custom%20CSS-lightyellow?logo=CSS3&logoColor=blue&style=flat",
            alt: "Custom css"
        }],
        description: "A demo-website that sorts available tourist places according to users locations. It helps users to choose the places near by. This website is created using React, Javascript and styled by custom CSS.",
        link: "https://master--grand-lily-2ee416.netlify.app/",
    },
    {
        id: 1,
        caption: "WEATHER FORECAST",
        img: weatherForecast,
        img_alt: "app view",
        techStack: [{
            src: "https://img.shields.io/badge/-Open%20weather%20API-orange?&style=flat",
            alt: "Open Weather API"
        }, {
            src: "https://img.shields.io/badge/-JavaScript-yellow?logo=javascript&logoColor=black&style=flat",
            alt: "Javascript"
        },
        {
            src: "https://img.shields.io/badge/-HTML5-DC143C?logo=HTML5&logoColor=white&style=flat",
            alt: "HTML5"
        },
        {
            src: "https://img.shields.io/badge/-Custom%20CSS-blueviolet?logo=CSS3&logoColor=white&style=flat",
            alt: "custom Css"
        }],
        description: "This website is developed completely using ECMAScript, Bootstrap and OpenWeather API. Displaying the data through the DOM manipulation. User can search city by entering the city name and displaying current temperature of city. Also it shows maximum and minimum temperature of the day and upcoming 5 days.",
        link: "https://tangerine-tanuki-6fca77.netlify.app/",
    },

]

export default MY_WORKS;