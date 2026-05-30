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
    desc: "A 2D platformer built from scratch, encompassing a custom Java game and physics engine, a flexible UI toolkit, and game-specific systems for combat, platforming, level loading, progress save, and AI.",
    link: "https://github.com/jjesswan/origin-two",
    linkLabel: "Github",
    role: null,
    tags: ["java", "javafx"],
    image: "/images/o2_demo.gif",
    bullets: [
      ["Custom Java engine", 
        "Component-based architecture with physics, collisions, rendering, movement, input, UI, and audio systems."],
      ["Polygonal collision + physics responses", 
        "Collision detection for both primitive shapes and custom sprites. The physics layer supports mass-based recoil, dampening (friction), and impulse for realistic behavior."],
      [
        "Flexible UI toolkit",
        "Reusable component system for menus, HUDs, and in-game overlays, including component nesting, alignment, parenting, and event handling.",
      ],
      ["Behavior tree AI + pathfinding", 
        "Enemy logic is driven by behavior trees. Pathfinding uses A* minimal distance graph traversal to find the optimal, non-blocked path to the target."],
      ["Original sprites and SFX support", 
        "Custom environment and sprite art with a streamlined asset creation pipeline for easy updates and additions. Uses open-source SFX libraries for sound design."],
    ],
    year: 2023,
    dim: null
  },
  {
    title: "Firmware JSON Manager",
    briefDesc: "Fullstack webapp for firmware developers to quickly upload and edit firmware JSONs to the Cloud.",
    desc: "Designed and shipped a fullstack firmware update tool for Onset's primary IoT product, creating frontend and middleware infrastucture that helped developers efficiently manage firmware files and test updates in real time.",
    link: "https://www.licor.cloud/",
    linkLabel: "Company Website",
    role: "SWE Intern @ LICOR (formerly) Onset",
    tags: ["vue.js","typescript", "node.js", "prometheus", "nodered"],
    image: "/images/firmware_preview.gif",
    bullets: [
      [
        "Internal file editing interface",
        "Custom CRUD UI for uploading, updating, and deleting JSON-formated firmware files directly to the NoSQL cloud database. Replaced the previously time-intensive process for the engineering team by packaging the entire firmware update pipeline into a single interface.",
      ],
      [
        "Pub-sub messaging emulator",
        "To process each JSON payload, I also built a MQTT (Message Queuing Telemetry Transport) emulator with NodeRed to simulate the communication between devices and the cloud. The MQTT emulator processes firmware device-side commands in real time by parsing different message types and sending them to the backend. Then, after recieving the backend's response, it sends the appropriate follow-up messages back to the cloud to complete the firmware update cycle. This allows developers to test firmware updates in real time without needing to interact with physical devices or wait for scheduled update windows.",
      ],
    ],
    year: 2024,
    dim: "wide"
  },
  {
    title: "Data Logger Weather Map",
    briefDesc: "A multi-layer GIS tool that overlays live weather sensor data onto satellite, topographical, and landmark maps.",
    desc: "Built a geospatial visualization tool for environmental monitoring. Users can switch map styles and view device sensor readings alongside live weather data. Useful for both granular and regional analysis of environmental conditions.",
    link: "https://www.licor.cloud/",
    linkLabel: "Company Website",
    role: "SWE Intern @ Onset",
    tags: ["vue.js", "typescript", "node.js"],
    image: ["/images/windy_preview.gif", "/images/windy_preview2.gif"],
    bullets: [
      [
        "Three switchable map modes",
        "Satellite, topographical, and landmark overlays via Windy API. Users toggle between them without reloading the page or losing state.",
      ],
      [
        "Real-time weather + device data overlay",
        "Device-gathered sensor readings are directly displayed on the map alongside live weather data, providing contextualized insights.",
      ],
      [
        "Interactive device markers",
        "Users can place, move, and remove device markets on the map. Each marker displays the device's sensor readings and metadata on click, allowing for easy monitoring and analysis. Users can also connect markers with lines to visualize extension probes to larger devices.",
      ]
    ],
    year: 2024,
    dim: "wide"
  },
  {
    title: "Brown CS Course Website",
    briefDesc: "A React-based website serving 100+ CS1300 (UI/UX) students through a full semester.",
    desc: "Developed and maintained the official course website for Brown University's CS1300 (Introduction to UI/UX Principles), serving as the central hub for 100+ enrolled students. This platform simplified course management and kept updated resources for students.",
    link: "https://talie.town/cs1300_spring24/",
    linkLabel: "Website",
    role: null,
    tags: ["react"],
    image: ["/images/cs1300_desktop.gif", "/images/cs1300_mobile.gif"],
    bullets: [
      [
        "Course hub for 100+ students",
        "Primary resource for students throughout the semester with daily updates. Any downtime or broken pages affected the whole class, so reliability was critical.",
      ],
      [
        "Responsive, accessible layout",
        "Mobile-first design ensures the site works across all screen sizes. Directly applies the responsive UI principles covered in CS1300.",
      ],
    ],
    year: 2024,
    dim: null
  },
  {
    title: "Syntax App",
    desc: "A fullstack application that turns syntax practice into a fun, competitive experience. Users practice with real industry-level code, learn from AI explanations, and track improvement over time against other users.",
    briefDesc: "A fullstack typing app for code language syntax with educational GPT-3 explanations.",
    link: "https://github.com/Syntax-App/syntax",
    linkLabel: "Github",
    role: "Frontend Developer",
    tags: ["react.js", "typescript", "html/css", "java"],
    image: "/images/syntax_demo.gif",
    bullets: [
      [
        "Real code challenges across 3 languages",
        "Typing prompts use Java, JavaScript, and Python code snippets pulled from large open-source codebases, such as Facebook and Google repos, allowing users to practice speed-typing with both industry-level and purposeful coding styles.",
      ],
      ["GPT-3 educational feedback", 
        "After each challenge, users receive detailed, AI-generated explanations of the code they just typed, including syntax breakdowns, common pitfalls, and what the overall code snippet does. This transforms the app from a pure typing tool into an educational resource for learning programming languages."],
      [
        "Personal stats dashboard",
        "Tracks WPM, accuracy, and improvement over time per language.",
      ],
      [
        "Live leaderboard system",
        "Competitive ranking across users adds motivation and replayability beyond solo practice.",
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
    desc: "Built and deployed a JavaScript security layer on top of the Qualtrics API to protect sensitive student data during school-issued surveys. Used by Brown School of Public Health Survey Research Center.",
    briefDesc: "A session-locking and authentication layer for Qualtrics surveys, live in Rhode Island school districts.",
    link: "https://brown.co1.qualtrics.com/jfe/form/SV_9pmLnWs31ewSVca",
    linkLabel: "Try it out!",
    role: null,
    tags: ["javascript", "html/css"],
    image: "/images/sessionprivacy_demo.gif",
    bullets: [
      [
        "Idle detection and screen lock",
        "Monitors user inactivity and locks the survey screen based on a customizable timout to prevent unauthorized access.",
      ],
      [
        "Access code authentication to resume",
        "Locked sessions require a valid access code before the survey is visible again. Session data and progress is fully preserved. Another timeout can be set to log out and clear data after extended inactivity.",
      ],
    ],
    year: 2022,
    dim: null
  },
];

export default info;

