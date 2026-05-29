type PortfolioInfo = {
    title: string,
    briefDesc: string,
    desc: string,
    link: string | null,
    linkLabel: string | null,
    role: string | null
    tags: string[],
    image: string | string[],
    bullets: [string, string][],
    year: number,
    dim: string | null
}

const info: PortfolioInfo[] = [
  {
    title: "Origin Two",
    briefDesc: "An sci-fi platformer built on a custom 2D Java engine.",
    desc: "A 2D platformer built entirely from scratch, encompassing a custom Java game and physics engine, a flexible UI toolkit, and game-specific systems for combat, platforming, progression, and AI.",
    link: "https://github.com/jjesswan/origin-two",
    linkLabel: "Github and demo",
    role: null,
    tags: ["java", "javafx"],
    image: "/images/o2_demo.gif",
    bullets: [
      ["Custom Java engine", 
        "Component-based architecture with physics, collisions, rendering, movement, input, UI, and audio systems."],
      ["Polygonal collision + physics responses", 
        "Collision detection for both standard geometric and arbitrary shapes. Physics layer supports recoil, dampening (friction), and momentum impulse for realistic feel."],
      [
        "Flexible UI toolkit",
        "Reusable component system for menus, HUDs, and in-game overlays.",
      ],
      ["Behavior tree AI + pathfinding", 
        "Enemy logic driven by composable behavior trees. Navigation uses grid-traversal pathfinding system for dynamic obstacle avoidance."],
      ["Original sprites and SFX Support", 
        "Custom environment and sprite art with a modular asset pipeline for easy updates and additions. Uses open-source SFX libraries for sound design."],
    ],
    year: 2023,
    dim: null
  },
  {
    title: "Firmware JSON Manager",
    briefDesc: "Webtool for firmware developers to quickly upload and edit firmware update JSONs to the Cloud.",
    desc: "Owned the E2E firmware update pipeline for Onset's primary IoT product. Project was shipped to production as tooling for developer licenses.",
    link: "https://www.licor.cloud/",
    linkLabel: "Website",
    role: "SWE Intern @ Onset",
    tags: ["node.js", "prometheus", "nodered"],
    image: "/images/firmware_preview.gif",
    bullets: [
      [
        "Internal firmware editing interface",
        "Custom CRUD UI for adding, updating, and deleting firmware files directly in the NoSQL database (Davra). Replaced a manual process for the firmware team by packaging the entire firmware update pipeline into a single interface.",
      ],
      [
        "MQTT message emulation pipeline",
        "To handle each JSON payload, I built a device emulator with NodeRed to emulate MQTT messages from IoT devices. Enables real-time testing and debugging of firmware update processes.",
      ],
      [
        "Real-time device command processing",
        "Parses incoming device commands in the middleware layer. Triggers the appropriate firmware actions immediately, with no polling delay.",
      ],
      [
        "Live status feedback to broker",
        "Sends device state updates back to the MQTT broker in real time, giving developers and operators instant visibility into update progress.",
      ],
    ],
    year: 2024,
    dim: "wide"
  },
  {
    title: "Data Logger Weather Integration",
    briefDesc: "Shipped a multi-layer GIS tool that overlays live IoT sensor data onto satellite, topo, and landmark maps.",
    desc: "Built a geospatial visualization tool for environmental monitoring. Users can switch map styles and view device sensor readings alongside live weather data. Useful for both granular device inspection and regional trend analysis.",
    link: null,
    linkLabel: null,
    role: "SWE Intern @ Onset",
    tags: ["vue.js", "node.js"],
    image: ["/images/windy_preview.gif", "/images/windy_preview2.gif"],
    bullets: [
      [
        "Three switchable map modes",
        "Satellite, topographical, and landmark views via Windy API. Users toggle between them without reloading the page or losing state.",
      ],
      [
        "Real-time weather + IoT data overlay",
        "Device-gathered sensor readings are directly displayed on the map alongside live weather data, providing geographically contextualized data insight.",
      ],
      ["Micro + macro zoom levels", 
        "Allows users to explore data at different scales, from detailed local views to broader regional perspectives."],
      ["Dynamic GIS API rendering", 
        "Windy and Leaflet APIs are composed together client-side, with map tiles and data layers rendering dynamically as the user pans and zooms to offload server-side processing."],
    ],
    year: 2024,
    dim: "wide"
  },
  {
    title: "Brown CS Course Website",
    briefDesc: "Built React site serving 100+ CS1300 (UI/UX) students through a full semester.",
    desc: "Developed and maintained the official course website for Brown University's CS1300 (UI/UX), serving as the central hub for 100+ enrolled students. This platform streamlined course management and maintained reliability for students.",
    link: "https://talie.town/cs1300_spring24/",
    linkLabel: "Website",
    role: null,
    tags: ["react"],
    image: ["/images/cs1300_desktop.gif", "/images/cs1300_mobile.gif"],
    bullets: [
      [
        "Production site for 100+ students",
        "Primary resource for students throughout the semester with daily updates. Any downtime or broken pages affected the whole class, so reliability was critical.",
      ],
      [
        "Responsive, accessible layout",
        "Mobile-first design ensures the site works across all screen sizes. Directly applies the responsive UI principles covered in CS1300 itself.",
      ],
    ],
    year: 2024,
    dim: null
  },
  {
    title: "Syntax App",
    desc: "A full-stack application that turns syntax practice into a fun, competitive experience. Users type real industry-level code, see AI explanations on mistakes, and track improvement over time against other users.",
    briefDesc: "A full-stack typing app for coding syntax with educational GPT-3 explanations.",
    link: "https://github.com/Syntax-App/syntax",
    linkLabel: "Github",
    role: "Frontend Developer",
    tags: ["react.js", "typescript", "html/css", "java"],
    image: "/images/syntax_demo.gif",
    bullets: [
      [
        "Real code challenges across 3 languages",
        "Typing prompts use actual Java, JavaScript, and Python code snippets pulled from large open-source codebases, such as Facebook and Google repos. Users get real practice with industry-level syntax and formatting.",
      ],
      ["GPT-3 inline error explanations", 
        "On each mistake, GPT-3 API returns a contextual explanation of the correct syntax."],
      [
        "Personal stats dashboard",
        "Tracks WPM, accuracy, and improvement over time per language.",
      ],
      [
        "Live leaderboard system",
        "Competitive ranking across users adds motivation and replayability beyond solo practice.",
      ],
      [
        "Full-stack: React/TS frontend + Java backend",
        "Coupled with Firebase data storage and Google Auth for user accounts.",
      ],
    ],
    year: 2023,
    dim: "wide"
  },
  // {
  //   title: "CSV Searcher",
  //   briefDesc: "CSV search tool with React frontend and Java/Spark JSON-processing server.",
  //   desc: "A full-stack search tool that lets users upload and query any CSV file. Built with a React/TypeScript frontend and a Java backend using Spark for routing and Moshi for JSON serialization.",
  //   link: null,
  //   linkLabel: null,
  //   role: "Fullstack dev w/ Sophie Zhang",
  //   tags: ["typescript", "react.js", "java"],
  //   image: "/images/repl_mock.png",
  //   bullets: [
  //     ["Custom CSV upload and parsing", 
  //       "Handles any CSV file regardless of schema. The backend layer processes different delimiters, column counts, and data types."],
  //     [
  //       "Flexible column filtering",
  //       "Users can search by column name or numeric index, for both well-labelled and unlabelled datasets.",
  //     ],
  //     [
  //       "Verbose and brief output modes",
  //       "",
  //     ],
  //     [
  //       "Java + Spark backend with Moshi serialization",
  //       "Spark handles HTTP routing and request dispatch. Moshi serializes responses to JSON cleanly. Designed to be easily extensible for additional query types.",
  //     ],
  //   ],
  //   year: 2023,
  //   dim: null,
  // },
  {
    title: "Qualtrics Session Privacy API",
    desc: "Built and deployed a JavaScript security layer on top of the Qualtrics API to protect sensitive student data during district-wide surveys. Used in production by Brown's Survey Research Center.",
    briefDesc: "A session-locking and auth layer for Qualtrics surveys, live in Rhode Island school districts.",
    link: "https://brown.co1.qualtrics.com/jfe/form/SV_9pmLnWs31ewSVca",
    linkLabel: "Try it out!",
    role: null,
    tags: ["javascript", "html/css"],
    image: "/images/sessionprivacy_demo.gif",
    bullets: [
      [
        "Configurable idle detection and screen lock",
        "Monitors user inactivity and locks the survey screen based on a customizable timout to prevent unauthorized access.",
      ],
      [
        "Access code authentication to resume",
        "Locked sessions require a valid access code before the survey is visible again. Session data and progress is fully preserved.",
      ],
      [
        "Sensitive data masking",
        "Hides personal data fields while session is locked.",
      ],
      [
        "Live across multiple school districts",
        "Deployed by Brown's School of Public Health Survey Research Center for real surveys across Rhode Island school districts.",
      ],
    ],
    year: 2022,
    dim: null
  },
];

export default info;

