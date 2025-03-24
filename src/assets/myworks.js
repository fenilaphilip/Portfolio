import weatherForecast from "../media/weatherForecast.png";
import dictionary from "../media/dictionary.png";
import investmentCalculator from "../media/investmentCalculator.png";
import boutique from "../media/boutique.png";
import placePicker from "../media/placePicker.png";
import ticTacToe from "../media/tic-tac-toe.png";
import encoder from "../media/encoder.png";
import weatherApp from "../media/weatherApp.png";
import todolist from "../media/todolist.png";
import todos from "../media/todos.png"


const MY_WORKS = [
    {
        id: 10,
        caption: "TODO PLANNER",
        img: todos,
        img_alt: "app view",
        techStack: [{
            src: "https://img.shields.io/badge/-Typescript-blue?&style=flat",
            alt: "Typescript"
        }, {
            src: "https://img.shields.io/badge/-ReactJS-gray?&style=flat",
            alt: "React"
        }, {
            src: "https://img.shields.io/badge/-React%20Router-black?&style=flat",
            alt: "React router"
        },
        {
            src: "https://img.shields.io/badge/-Material%20UI-violet?&style=flat",
            alt: "Material UI"
        },
        {
            src: "https://img.shields.io/badge/-Cypress-98FB98?&style=flat",
            alt: "Cypress"
        }],
        description: "Todos application built using React, Redux Toolkit, React Router and Material UI. These powerful combination of technologies offers a seamless and intuitive user experience, allowing you to efficiently manage your tasks.",
        link: "https://todosplanner.netlify.app/",
        gitrepo: "https://github.com/fenilaphilip/todos"
    },
    {
        id: 9,
        caption: "WEATHER FORECAST",
        img: weatherApp,
        img_alt: "app view",
        techStack: [{
            src: "https://img.shields.io/badge/-Open%20weather%20API-orange?&style=flat",
            alt: "Open Weather API"
        }, {
            src: "https://img.shields.io/badge/-React-black?&style=flat",
            alt: "React"
        }, {
            src: "https://img.shields.io/badge/-ECMAScript-yellow?&style=flat",
            alt: "Javascript"
        },
        {
            src: "https://img.shields.io/badge/-Bootstrap-blueviolet?&style=flat",
            alt: "bootstrap"
        },
        {
            src: "https://img.shields.io/badge/-Axios-blue?&style=flat",
            alt: "axios"
        }],
        description: "A React Web App that utilizes the OpenWeatherMap API to get the current and 7-day weather forecast for a given location. Its displays maximum and minimum temperature of each day of the week as well as an hourly forecast of the day.",
        link: "https://weather.fenilas.com/",
        gitrepo: "https://github.com/fenilaphilip/Weather-App"
    },
    {
        id: 8,
        caption: "DICTIONARY APP",
        img: dictionary,
        img_alt: "app view",
        techStack: [{
            src: "https://img.shields.io/badge/-React-black?&style=flat",
            alt: "React"
        }, {
            src: "https://img.shields.io/badge/-Javascript-yellow?&style=flat",
            alt: "Javascript"
        },
        {
            src: "https://img.shields.io/badge/-External%20API-darkgreen?&style=flat",
            alt: "External API"
        },
        {
            src: "https://img.shields.io/badge/-Bootstrap-blueviolet?&style=flat",
            alt: "bootstrap"
        },
        {
            src: "https://img.shields.io/badge/-Axios-blue?&style=flat",
            alt: "axios"
        }],
        description: "The React Dictionary App is a web application that let users to look up the definition of a word. It displays word definitions, synonyms, antonyms, images and example sentences with the help of third-party API's.",
        link: "https://dictionary.fenilas.com/",
        gitrepo: "https://github.com/fenilaphilip/Dictionary"
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
            src: "https://img.shields.io/badge/-ECMAScript-yellow?&style=flat",
            alt: "Javascript"
        },
        {
            src: "https://img.shields.io/badge/-CSS3-blueviolet?l&style=flat",
            alt: "CSS3"
        },
        {
            src: "https://img.shields.io/badge/-HTML5-DC143C?&style=flat",
            alt: "HTML5"
        }],
        description: "A React App designed to easily assess the value of your investments over a specified period. With a user-friendly and straightforward interface, the app displays an investment value table for each year. ",
        link: "https://ic.fenilas.com/",
        gitrepo: "https://github.com/fenilaphilip/Investment-Calc"
    },

    {
        id: 6,
        caption: "REACT TIC-TAC-TOE",
        img: ticTacToe,
        img_alt: "app view",
        techStack: [{
            src: "https://img.shields.io/badge/-React-black?&style=flat",
            alt: "React"
        }, {
            src: "https://img.shields.io/badge/-Javascript-bluegreen?&style=flat",
            alt: "Javascript"
        },
        {
            src: "https://img.shields.io/badge/-CSS3-blueviolet?&style=flat",
            alt: "CSS3"
        }],
        description: "Tic-Tac-Toe Game website is created using JavaScript with React framework.",
        link: "https://main--marvelous-llama-ae7acc.netlify.app/",
        gitrepo: "https://github.com/fenilaphilip/Tic-tac-toe"
    },
    {
        id: 5,
        caption: "ENCODER",
        img: encoder,
        img_alt: "app view",
        techStack: [{
            src: "https://img.shields.io/badge/-Typescript-green?&style=flat",
            alt: "Typescript"
        }, {
            src: "https://img.shields.io/badge/-TailwindCSS-black?&style=flat",
            alt: "Tailwind CSS"
        }, {
            src: "https://img.shields.io/badge/-React-red?&style=flat",
            alt: "React"
        }, {
            src: "https://img.shields.io/badge/-Context%20API-yellow?&style=flat",
            alt: "context Api"
        }],
        description: "Users can enter some text and encode it using URL encoding, Base 64 encoding, or generate a QR Code that can be scanned. History of all the previous usages are stored in local storage of quick access again.",
        link: "https://encoder.fenilas.com",
        gitrepo: "https://github.com/fenilaphilip/Encode"
    },
    {
        id: 4,
        caption: "ELEGANT BOUTIQUE",
        img: boutique,
        img_alt: "app view",
        techStack: [{
            src: "https://img.shields.io/badge/-React-black?l&style=flat",
            alt: "React"
        },
        {
            src: "https://img.shields.io/badge/-Context%20API-blue?&style=flat",
            alt: "Context API"
        }, {
            src: "https://img.shields.io/badge/-Vanilla%20JS-blueviolet?&style=flat",
            alt: "Javascript"
        },
        {
            src: "https://img.shields.io/badge/-tailwind-green?&style=flat",
            alt: "tailwind"
        }],
        description: "A demo e-commerce store built with vanilla JavaScript & React hooks. You can select multiple numbers of clothes. Adding them to cart, removing them from cart, decreasing and increasing the cart amount and calculating the total cost of the cart. ",
        link: "https://master--dazzling-dodol-f7d555.netlify.app/",
        gitrepo: "https://github.com/fenilaphilip/elegant-boutique"
    },
    {
        id: 3,
        caption: "TODO LIST",
        img: todolist,
        img_alt: "app view",
        techStack: [{
            src: "https://img.shields.io/badge/-ES6-blueviolet?&style=flat",
            alt: "Javascript"
        },
        {
            src: "https://img.shields.io/badge/-ReactJS-black?logo=react?&tyle=flat",
            alt: "React"
        },
        {
            src: "https://img.shields.io/badge/-Cypress-98FB98?&style=flat",
            alt: "Cypress"
        },
        {
            src: "https://img.shields.io/badge/-CSS3-yellow?&style=flat",
            alt: "CSS3"
        },
        {
            src: "https://img.shields.io/badge/-Context%20API-DC143C?&style=flat",
            alt: "Context API"
        }],
        description: "Todo App allows to manage a list of tasks in a simple and effective way which want to complete on that day. It's a CRUD application - Create, Read, Update and Delete. It is created using React context API and Reducers. End to end testing is done using cypress. ",
        link: "https://fenilaphilip.github.io/things-to-do/",
        gitrepo: "https://github.com/fenilaphilip/things-to-do"
    },
    {
        id: 2,
        caption: "PLACE PICKER",
        img: placePicker,
        img_alt: "app view",
        techStack: [{
            src: "https://img.shields.io/badge/-Javascript-yellow?&style=flat",
            alt: "Javascript"
        },
        {
            src: "https://img.shields.io/badge/-Vite-violet?&style=flat",
            alt: "vite"
        },
        {
            src: "https://img.shields.io/badge/-React%20hooks-green?&style=flat",
            alt: "React hooks"
        },
        {
            src: "https://img.shields.io/badge/-Custom%20CSS-lightyellow?&style=flat",
            alt: "Custom css"
        }],
        description: "A demo-website that sorts available tourist places according to users locations. It helps users to choose the places near by. This website is created using React, Javascript and styled by custom CSS.",
        link: "https://master--grand-lily-2ee416.netlify.app/",
        gitrepo: "https://github.com/fenilaphilip/Place-picker"
    },
    {
        id: 1,
        caption: "WEATHER REPORT",
        img: weatherForecast,
        img_alt: "app view",
        techStack: [{
            src: "https://img.shields.io/badge/-Open%20weather%20API-red?&style=flat",
            alt: "Open Weather API"
        }, {
            src: "https://img.shields.io/badge/-ECMAScript-yellow?&style=flat",
            alt: "Javascript"
        },
        {
            src: "https://img.shields.io/badge/-DOM%20manupulation-green?&style=flat",
            alt: "Javascript"
        }],
        description: "Displaying the data through the DOM manipulation. User can search city by entering the city name and displaying current temperature of city. Also it shows maximum and minimum temperature of the day and upcoming 5 days.",
        link: "https://tangerine-tanuki-6fca77.netlify.app/",
        gitrepo: "https://github.com/fenilaphilip/Weather-Forecast"
    },

]

export default MY_WORKS;