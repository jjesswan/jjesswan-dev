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
    desc: "Built a 2D Metroidvania-style game from the ground up, integrating both game engine and gameplay mechanics for a seamless experience.",
    link: "https://github.com/jjesswan/origin-two",
    linkLabel: "Github and demo",
    role: null,
    tags: ["java", "game dev", "ui"],
    image: "/images/o2_demo.gif",
    bullets: [
      ["Custom Java game engine", ""],
      ["Polygonic collision detection", ""],
      ["Physics-based responses", "recoil, dampening, elasticity"],
      [
        "Custom UI toolkit",
        "built a flexible UI system for menus, HUDs, and in-game elements",
      ],
      ["Combat, platforming, and progression systems", ""],
      ["AI", "behavior trees & pathfinding"],
      ["Custom sprites & environment art", ""],
      ["Sound effect support", ""],
    ],
    year: 2023,
    dim: null
  },
  // {
  //   title: "Ninja Mouse",
  //   desc: "Developed a 3D open-world role-playing game in C++, featuring a custom-built game engine with advanced gameplay and rendering capabilities. The player embarks on a journey as a ninja mouse navigating a feudal Japan-inspired world in search of his lost clan.",
  //   link: "https://github.com/jjesswan/3d-game-engine",
  //   linkLabel: "Github and demo",
  //   role: null,
  //   tags: ["c++", "opengl", "blender", "game dev"],
  //   image: "/images/ninjamouse_demo1.png",
  //   bullets: [
  //     ["Custom C++ 3D game engine", ""],
  //     ["Memory Optimization", "dynamic pointers and memory reallocation"],
  //     [
  //       "Collision detection & resolution",
  //       "with BVH and grid acceleration structures",
  //     ],
  //     ["AI & Pathfinding", ""],
  //     ["3rd-person camera & player control", ""],
  //     ["2D OpenGL game UI overlays", ""],
  //     ["Custom mesh assets with material loading support", ""],
  //   ],
  //   year: 2023,
  // },
  {
    title: "Firmware Update Manager",
    briefDesc: "A MQTT message handler for streamlining communication between IoT device modules and the Cloud.",
    desc: "Developed a MQTT message handler to streamline communication between IoT device modules and the Cloud, ensuring reliable data processing and system updates.",
    link: "https://www.licor.cloud/",
    linkLabel: "Product",
    role: "SWE Intern @ Onset, Summer 2024",
    tags: ["node.js", "prometheus", "nodered"],
    image: "/images/firmware_preview.gif",
    bullets: [
      [
        "Message processing & verification",
        "validates incoming messages across multiple subscription topics before forwarding data to the backend",
      ],
      [
        "Firmware action handling",
        "processes device commands, triggering appropriate firmware actions in real time",
      ],
      [
        "Updates manager",
        "queues pending firmware updates and ensures seamless execution",
      ],
      [
        "Status response system",
        "sends real-time status updates back to the MQTT broker, improving visibility into device states",
      ],
      [
        "Firmware editing interface",
        "custom toolkit to quickly add, update, and delete existing update files from NoSQL database",
      ],
    ],
    year: 2024,
    dim: "wide"
  },
  {
    title: "Data Logger Live Weather App",
    briefDesc: "A scalable mapping tool that enables users to visualize environmental data across multiple map styles.",
    desc: "Developed a scalable mapping tool that enables users to visualize environmental data across multiple map styles, providing real-time insights into IoT device data and environmental conditions.",
    link: null,
    linkLabel: null,
    role: "SWE Intern @ Onset, Summer 2024",
    tags: ["vue.js", "node.js"],
    image: ["/images/windy_preview.gif", "/images/windy_preview2.gif"],
    bullets: [
      [
        "Multi-style maps",
        "support for sattelite, topographical, and landmark maps",
      ],
      [
        "Real-time data overlay",
        "from device-gathered data alongside live weather conditions",
      ],
      ["Micro & macro-level insights", ""],
      ["Dynamic GIS API rendering", "utilizes Windy API and Leaflet.js"],
    ],
    year: 2024,
    dim: "wide"
  },
  {
    title: "Brown UI/UX",
    briefDesc: "A course website for Brown University's CS1300 (UI/UX).",
    desc: "Developed and maintained the official course website for Brown University's CS1300 (UI/UX), serving as the central hub for 100+ enrolled students. This platform streamlined course management and improved student engagement in UI/UX learning.",
    link: "https://talie.town/cs1300_spring24/",
    linkLabel: "Website",
    role: null,
    tags: ["react"],
    image: ["/images/cs1300_desktop.gif", "/images/cs1300_mobile.gif"],
    bullets: [
      [
        "Course hub",
        "managed and published the latest course information, assignments, and resources",
      ],
      [
        "",
        "Ensured the site remained reliable and accessible throughout the semester",
      ],
    ],
    year: 2024,
    dim: null
  },
  // {
  //   title: "Ocean Water Simulation",
  //   desc: "Developed a real-time ocean simulation based on Jerry Tessendorf’s 'Simulating Ocean Water', leveraging OpenGL and Fast Fourier Transform (FFT) for dynamic wave generation.",
  //   link: "https://github.com/Seb-Park/ocean-simulation",
  //   linkLabel: "Github and Demo",
  //   role: "Physics-based simulations + advanced water effects",
  //   tags: ["c++", "opengl"],
  //   image: "/images/ocean_demo.gif",
  //   bullets: [
  //     [
  //       "Physics-based simulations",
  //       "collaborated on FFT-based wave simulation based on wind speed and turbulence controls",
  //     ],
  //     ["Particle system", "supporting ocean foam and ocean spray"],
  //   ],
  //   year: 2024,
  // },
  // {
  //   title: "ARAP",
  //   desc: "Implemented an As-Rigid-As-Possible (ARAP) surface modeling system, enabling interactive 3D mesh deformation while preserving structural rigidity for realistic, physically plausible transformations.",
  //   link: null, // "https://syntax-front.vercel.app/#",
  //   linkLabel: null, //"Try Syntax!",
  //   role: null,
  //   tags: ["c++"],
  //   image: "/images/arap_demo.gif",
  //   bullets: [
  //     ["User-interactive mesh deformation", ""],
  //     [
  //       "Rigidity-preserving transformations",
  //       "simulates underlying skeletal structures for lifelike deformations",
  //     ],
  //     [
  //       "Iterative optimization",
  //       "computes best-fit rigid transformations at each incremental movement",
  //     ],
  //   ],
  //   year: 2024,
  // },
  // {
  //   title: "Finite Element Method",
  //   desc: "Developed a Finite Element Method (FEM)-based animation system for simulating deformable solid objects, enabling realistic physics-based deformations.",
  //   link: null, // "https://syntax-front.vercel.app/#",
  //   linkLabel: null, //"Try Syntax!",
  //   role: null,
  //   tags: ["c++"],
  //   image: "/images/fem_demo.gif",
  //   bullets: [
  //     [
  //       "Mesh preprocessing",
  //       "divides solid materials into discrete tetrahedra for accurate deformation modeling",
  //     ],
  //     [
  //       "Physics-based forces",
  //       "gravitational, internal elastic, internal viscous damping",
  //     ],
  //     ["Collision detection & resolution", ""],
  //     [
  //       "Time Integration",
  //       "uses forward integration to track deformations over time",
  //     ],
  //   ],
  //   year: 2024,
  // },
  // {
  //   title: "Pathtracer",
  //   desc: "Developed a physically-based rendering system using Monte Carlo path tracing, enabling realistic light interactions for high-fidelity visual effects.",
  //   link: null, // "https://syntax-front.vercel.app/#",
  //   linkLabel: null, //"Try Syntax!",
  //   role: null,
  //   tags: ["c++", "opengl"],
  //   image: "/images/path_demo.gif",
  //   bullets: [
  //     ["Monte Carlo pathtracing", "simulates accurate lighting and shading"],
  //     ["Soft shadows", ""],
  //     ["Color bleeding", ""],
  //     ["Reflection & refraction", ""],
  //     ["Transparency & translucency", ""],
  //   ],
  //   year: 2024,
  // },
  // {
  //   title: "Computational Dolly Zoom",
  //   desc: "Exploration of Dolly Zoom via Single Shot View Synthesis, simulating the dolly zoom effect using a single image.",
  //   link: "DollyZoomPDF",
  //   linkLabel: "Project Report", 
  //   role: null,
  //   tags: ["python"],
  //   image: "/images/zoom2-crop.gif",
  //   bullets: [
  //   ],
  //   year: 2023,
  // },
  {
    title: "Syntax App",
    desc: "Developed a speed typing test application designed to improve coding syntax accuracy across multiple programming languages, integrating AI-powered explanations for educational reinforcement",
    briefDesc: "A speed typing test application for improving coding syntax accuracy.",
    link: "https://github.com/Syntax-App/syntax",
    linkLabel: "Github",
    role: "",
    tags: ["react.js", "typescript", "html/css", "java"],
    image: "/images/syntax_demo.gif",
    bullets: [
      [
        "Practical use",
        "code-based typing challenges in Java, Javascript, and Python",
      ],
      ["GPT-3 powered explanations", "integrates GPT-3 API"],
      [
        "Performance tracking",
        "landing pages with personal stats and leaderboard system",
      ],
    ],
    year: 2023,
    dim: "wide"
  },
  // {
  //   title: "CSV Searcher",
  //   desc: "Allows users to load in custom CSVs and search for values within, with the option to filter by column name or index. The backend uses Moshi and Spark APIs to support a json-processing server, while the frontend makes real-time calls to that server in order to display requested information to the user, as well as process user inputs. Users can also switch between “verbose” and “brief” modes, which change the brevity of the outputted information.",
  //   link: null,
  //   linkLabel: null,
  //   role: "Fullstack dev w/ Sophie Zhang",
  //   tags: ["typescript", "react", "java"],
  //   image: "/images/repl_mock.png",
  //   idx: 0,
  // },
  // {
  //   title: "Raytracing",
  //   desc: "Developed a raytracing renderer that simulates realistic light behavior, achieving high-fidelity lighting and reflections in a single render pass.",
  //   link: null,
  //   linkLabel: null,
  //   role: null,
  //   tags: ["c++", "opengl"],
  //   image: "/images/raytrace_demo.png",
  //   year: 2022,
  //   bullets: [
  //     [
  //       "Phong Illumination model",
  //       "computes realistic lighting effects for smooth shading and highlights",
  //     ],
  //     ["Recursive raytracing for shadows", ""],
  //     [
  //       "Texture Support",
  //       "UV-coordinate mapping for texturing and surface color blending",
  //     ],
  //   ],
  // },
  // {
  //   title: "Diamond in the Sea",
  //   desc: "Underwater scene developed using real-time graphics techniques, featuring height mapping, scrolling textures and displacement mapping, pixelation and outline shaders, shape manipulation, transparency, and texture mapping.",
  //   link: null,
  //   linkLabel: null,
  //   role: "Custom shaders and scene modeling",
  //   tags: ["c++", "opengl"],
  //   image: "/images/water_demo.gif",
  //   idx: 4,
  // },
  // {
  //   title: "Real-Time Graphics",
  //   desc: "Developed a real-time 3D rendering system using OpenGL, balancing performance and visual quality for interactive scene rendering.",
  //   link: null,
  //   linkLabel: null,
  //   role: null,
  //   tags: ["c++", "opengl"],
  //   image: "/images/realtime_demo.gif",
  //   year: 2022,
  //   bullets: [
  //     [
  //       "Real-Time graphics pipeline",
  //       "efficient rendering of 3D scenes with dynamic camera movement",
  //     ],
  //     [
  //       "Adjustable tessellation",
  //       "interactive GUI slider allows real-time control over shape tessellation levels",
  //     ],
  //     ["Postprocessing", "framebuffer objects (FBOs) and custom shaders"],
  //     [
  //       "Performance vs. Quality tradeoff",
  //       "optimized for speed while maintaining realistic lighting effects, unlike raytracing",
  //     ],
  //   ],
  // },
  // {
  //   title: "MyPaint",
  //   desc: "Developed an interactive painting and filtering application, enabling users to create digital artwork with custom brushes and apply real-time image effects.",
  //   link: null,
  //   linkLabel: null,
  //   role: null,
  //   tags: ["c++"],
  //   image: "/images/mypaint_demo.png",
  //   bullets: [
  //     ["Customizable", "supports multiple brush types and softness"],
  //     ["Freeform drawing and editing", ""],
  //     [
  //       "Postprocessing",
  //       "Allows filter application to painted artwork or imported images",
  //     ],
  //   ],
  //   year: 2022,
  // },
  {
    title: "Session Privacy",
    desc: "Developed a JavaScript-based solution integrated with the Qualtrics API to enhance session privacy and protect sensitive student data during a district-wide survey.",
    briefDesc: "A JavaScript-based solution for enhancing session privacy in online Qualtrics surveys.",
    link: "https://brown.co1.qualtrics.com/jfe/form/SV_9pmLnWs31ewSVca",
    linkLabel: "Try it out!",
    role: null,
    tags: ["javascript", "html/css"],
    image: "/images/sessionprivacy_demo.gif",
    bullets: [
      [
        "Idle detection and session locking",
        "Monitors user inactivity and locks the survey screen based on a customizable idle time to prevent unauthorized access",
      ],
      [
        "Authentication",
        "Requires access code authentication before resuming the survey",
      ],
      [
        "Sensitive data protection",
        "Hides personal data while preserving progress, ensuring privacy for student participants",
      ],
      [
        "Live deployment",
        "Used by Brown School of Public Health’s Survey Research Center for multiple surveys across various Rhode Island school districts",
      ],
    ],
    year: 2022,
    dim: null
  },
  // {
  //   title: "Search",
  //   desc: "Terminal-based search engine returning relevant results from user-inputted query. Parsed various sizes of XML-formatted Wikipedia articles and utilized REPL to prompt user interaction",
  //   link: null,
  //   linkLabel: null,
  //   role: null,
  //   tags: ["python", "xml"],
  //   image: null,
  //   idx: 1,
  // },
  // {
  //   title: "Sketchy",
  //   desc: "A simplified version of Microsoft Paint using Java and extensive JavaFX packages. Features shape creation and selection using mouse, button, and keyboard interaction. Additionally features mouse interaction to enable line drawing and shape manipulation. Enables save/load function of drawing files.",
  //   link: null,
  //   linkLabel: null,
  //   role: null,
  //   tags: ["java", "javafx"],
  //   image: null,
  //   idx: 1,
  // },
];

export default info;

