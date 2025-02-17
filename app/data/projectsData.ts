export type ProjectListType = {
  project_title: string
  project_client: string
  project_type: string
  project_tasks: string
  project_description: string
  project_image: string
  project_url: string
  project_id?: string
  app_store_url?: string
  google_play_url?: string
}
export const ProjectList: ProjectListType[] = [
  {
    project_title: "Bindl - Travel Tracker",
    project_client: "Personal",
    project_type: "Expo/React Native mobile app",
    project_tasks:
      "Complete ownership of the app from conception to deployment, using Expo/React Native.",
    project_description:
      "Bindl is an application that enables users to track their travel history. It allows you to monitor the number of countries visited, along with the dates and duration of your stays",
    project_image: "bindl.jpg",
    project_url: "#",
    project_id: "p-54",
    app_store_url:
      "https://apps.apple.com/us/app/bindl-travel-tracker/id6741480988",
    google_play_url: "#",
  },
  {
    project_title: "Aviva - Simple Wealth",
    project_client: "Aviva PLC",
    project_type: "Expo/React Native mobile app",
    project_tasks:
      "Technical leadership, relate to developers of all levels, help formulate solutions to problems and be a source of hands-on support to upskill the team.  Own larger pieces of work, contribute to the continuous integration of code by raising and reviewing pull requests.  Enforce test driven development.",
    project_description:
      "The Simple Wealth app offers personalised investment advice and enables clients the opportunity to talk with an Aviva Money Coach.",
    project_image: "aviva.jpg",
    project_url: "#",
    project_id: "p-53",
  },
  {
    project_title: "Universal App - Order and Pay",
    project_client: "Pollinate International",
    project_type: "Expo/React Native mobile/web app",
    project_tasks:
      "I led the proof of concept stage for the universal app approach using Expo/React Native Mobile/Web - Introducting a new approach to state management and api consumption (zustand and Tanstack) to produce web/mobile tools through one codebase",
    project_description:
      "A suite of digital tools for banks to offer their SMEs to streamline their food and beverage services",
    project_image: "oap.jpg",
    project_url: "#",
    project_id: "p-52",
  },
  {
    project_title: "Mobile App - Tyl by Natwest",
    project_client: "Natwest - Pollinate International",
    project_type: "React Native mobile app",
    project_tasks:
      "As a hands on mobile team lead my work involved architecture and strategy road maps to meet business objectives including white labelling and a UI overhaul, and mentoring other developers.",
    project_description:
      "A loyalty and rewards app for consumers of SMB merchants banking with NatWest. Shop with local and online merchants and recieve points each time you spend with them. The app is also home to hundreds of offers which can be used instore and online.",
    project_image: "tyl.jpg",
    project_url: "https://www.tylbynatwest.com/",
    project_id: "p-51",
  },
  {
    project_title: "Mobile App - Digital Bank",
    project_client: "RBS/Natwest - Bó (bank)",
    project_type: "React Native mobile app",
    project_tasks:
      "As part of the front end team my work involved development using React Native, Redux, JavaScript, TypeScript, Flow, TDD (Jest), BDD (Selenium,Cucumber), Rest APIs, Realm DB",
    project_description:
      "Bó is a stand alone greenfield digital bank owned by RBS. The Bó app is designed to help users have more clarity and transparency over how they manage money, helping you do money better by helping you save more and spend less.",
    project_image: "bo.jpg",
    project_url: "https://wearebo.co.uk",
    project_id: "p-50",
  },
  {
    project_title: "Dashboard",
    project_client: "Oliver Wyman/Santander",
    project_type:
      "HTML 5 VueJS, VueX ES6/JavaScript, Bootstrap, Express and MongoDB, Unit testing",
    project_tasks:
      "HTML 5 VueJS, VueX ES6/JavaScript, Bootstrap, Express and MongoDB, Unit testing.  Working in a team of 10 consisting of developers, engineers, designers and project managers, my role was to build components and pages, including charts, tables, apis and testing for these. This project involved complex data structures and user profiles dictating workflow.",
    project_description:
      "An authenticated dashboard/management tool for financial institution and their clients",
    project_image: "OW_ILAX.jpg",
    project_url: "#",
    project_id: "p-49",
  },
  {
    project_title: "Dashboard",
    project_client: "Oliver Wyman",
    project_type:
      "HTML 5 VueJS, VueX, ES6/JavaScript, Bootstrap, Express and MongoDB",
    project_tasks:
      "HTML 5 VueJS, VueX, ES6/JavaScript, Bootstrap, Express and MongoDB.  Working for a consultancy client, my role as part of the development team was to build components to display and compare data, formulate an approach to efficiently reuse components, allow these to fetch data from apis and be reactive to user interaction.",
    project_description:
      "A dashboard/comparison tool with heavy use of visualization of complex data",
    project_image: "OW_credit_studio.jpg",
    project_url: "#",
    project_id: "p-48",
  },
  {
    project_title: "Jaguar",
    project_client: "Jaguar / B-Reel",
    project_type: "HTML 5 VueJS ES6/JavaScript",
    project_tasks:
      "HTML 5 VueJS ES6/JavaScript -  My role on this project was to build and test the UI elements including data capture, svg animations and layout.",
    project_description:
      "A series of interactive challenges designed to run on iPads.  Created for a Jaguar exhibition, this app was purpose-built to recruit potential future Jaguar engineers",
    project_image: "jaguar.jpg",
    project_url: "#",
    project_id: "p-47",
  },
  {
    project_title: "Guardians of the Galaxy II",
    project_client: "Disney Marvel/ Grand Visual",
    project_type: "HTML 5 JavaScript/Video/WebCam",
    project_tasks:
      "Javascript/HTML5/CSS development -  My role here was to provide the front end functionality for users to interact with app, animate webcam in sync with video",
    project_description:
      "Interactive digital signage stand designed to engage movie enthusiasts into participating in a dance off with movie stars via a webcam. The app was successfully run in cinema outlets and Comicon events worldwide.",
    project_image: "gog.png",
    project_url: "https://www.facebook.com/DisneyAUNZ/videos/1243897545708660/",
    project_id: "p-45",
  },
  {
    project_title: "Walkers Crisps",
    project_client: "Pepsico/ Grand Visual",
    project_type: "HTML 5 JavaScript/Video",
    project_tasks: "Javascript/HTML5/CSS development",
    project_description:
      "A multi facet campaign for the Champions League Final 2017 where football fans are recorded performing a Mexican wave and added to multistorey high screen.  My role here was to build the front end, that accepted new wave strips, performs the wave and gradually filled the screen with fans. ",
    project_image: "walkers.jpg",
    project_url: "#",
    project_id: "p-44",
  },
  {
    project_title: "Earfold Game",
    project_client: "Earfold/ DDB Remedy",
    project_type: "HTML 5 JavaScript",
    project_tasks: "Javascript/HTML5/CSS development",
    project_description:
      "Interactive digital signage App/Game for the 2017 Aesthetic & Anti-aging Medicine World Congress in Monaco.  The app/game consisted of a series of multiple choice questions and analysis on answers",
    project_image: "earfold.jpg",
    project_url: "#",
    project_id: "p-43",
  },

  {
    project_title: "Baxter Wag Staff",
    project_client: "Woolley Pau Gyro",
    project_type: "HTML 5 JavaScript/ Parallax ",
    project_tasks:
      "Javascript/HTML5/CSS development - Parallax implementation using ScrollMagic and some Google Captcha integration (later removed)",
    project_description:
      "A simple, fully responsive site, consisting of some parallax effects",
    project_image: "baxter.png",
    project_url: "http://www.baxterwagstaff.com/",
    project_id: "p-46",
  },
  {
    project_title: "Wanda and the Alien",
    project_client: "Random House UK",
    project_type: "HTML 5 CreateJS / Parallax",
    project_tasks: "Javascript/CreateJS/HTML/CSS development",
    project_description:
      "This website was developed to digitally support television show 'Wanda and the Alien' airing on Channel 5",
    project_image: "wanda3.jpg",
    project_url: "#",
    project_id: "p-42",
  },
  {
    project_title: "Twinkle",
    project_client: "Eyecon Pty Ltd",
    project_type: "HTML 5 / Javascript",
    project_url: "http://www.eyecon.com/game/twinkle-slots/",
    project_description:
      "Slot game, my role with eyecon is to develop front end solutions for their games across mobile devices. On this game my contribution was to develop the features, implement animations and come up with alternative to effects for mobile.  Sparkle and dust particles using TweenMax and CSS.",
    project_tasks: "HMTL 5 / Javascript programming",
    project_image: "twinkle1.jpg",
    project_id: "p-41",
  },
  {
    project_title: "Sugar Train Xmas",
    project_client: "Eyecon Pty Ltd",
    project_type: "HTML 5 / Javascript",
    project_url: "http://www.eyecon.com/game/sugar-train-xmas/",
    project_description:
      "Slot game, my role with eyecon is to develop front end solutions for their games across mobile devices. On this game my contribution was to develop the prizepick features, including implementing animations and effects.  Snow effect using TweenMax and CSS.",
    project_tasks: "HMTL 5 / Javascript programming",
    project_image: "stx1.jpg",
    project_id: "p-40",
  },
  {
    project_title: "City Ninja",
    project_client: "Non commercial / Personal",
    project_type: "Phaser",
    project_url: "http://horaciolopez.com/games/ninja/",
    project_description:
      "Desktop/Mobile, click/touch and release to jump and land on top of buildings.  Personal Project to experiment with HTML 5/ Javascript, making my own template using RequireJS, TweenMax and Phaser and making use of the Phaser Physics engine Arcade. City graphics courtesy of vecteezy.com",
    project_tasks: "Phaser Javascript programming",
    project_image: "exp_ninja1.jpg",
    project_id: "p-39",
  },
  {
    project_title: "Ball Crusher",
    project_client: "Non commercial / Personal",
    project_type: "Phaser",
    project_url: "http://horaciolopez.com/games/ballcrusher/",
    project_description:
      "Personal project attempting a candy crush style game. Using Phaser, RequireJS,TweenMax.",
    project_tasks: "Phaser Javascript programming",
    project_image: "bc1.jpg",
    project_id: "p-36",
  },

  {
    project_title: "Jurassic Juniors",
    project_client: "Eyecon Pty Ltd",
    project_type: "HTML 5 / Javascript",
    project_url: "http://www.eyecon.com/game/jurassic-juniors-slots/",
    project_description:
      "Slot game, my role with eyecon is to develop front end solutions for their games across mobile devices. My role on this game was to implement animations, parrallax background effect and integration with existing framework.",
    project_tasks: "HMTL 5 / Javascript programming",
    project_image: "jj1.jpg",
    project_id: "p-35",
  },
  {
    project_title: "Irish Luck",
    project_client: "Eyecon Pty Ltd",
    project_type: "HTML 5 / Javascript",
    project_url: "http://www.eyecon.com/game/irish-luck-slots/",
    project_description:
      "Mobile Solution for slot game. My role on this game was to implement animations and effects for the match and win, and prizepick features.  Implemented new sound manager to allow more support across devices.",
    project_tasks: "HMTL 5 / Javascript programming",
    project_image: "iluck1.jpg",
    project_id: "p-34",
  },

  {
    project_title: "Kingdom of Cash",
    project_client: "Eyecon Pty Ltd",
    project_type: "HTML 5 / Javascript",
    project_url: "http://www.eyecon.com/game/kingdom-of-cash-slots/",
    project_description:
      "Mobile version of slot game. My role on this game was to implement animations and effects for prizepick fight scene.  Includes animation sequences, particle effects, sound and integration with backend framework.",
    project_tasks: "HMTL 5 / Javascript programming",
    project_image: "koc3.jpg",
    project_id: "p-33",
  },

  {
    project_title: "Peppa Pig Muddy Puddles",
    project_client: "eOne UK",
    project_type: "HTML 5 / CreateJS",
    project_url: "http://www.horaciolopez.com/peppa/muddy_puddles/index.html",
    project_description:
      "Gain points by using spacebar or tap on mobile devices to jump in puddles or pop balloons.   My role was convert this original Flash game into a HTML 5 game to use on desktop/mobile/tablets.",
    project_tasks: "HMTL 5 / CreateJS programming",
    project_image: "muddy_1.jpg",
    project_id: "p-32",
  },
  {
    project_title: "Pip Ahoy! Mobile site",
    project_client: "Cosgrove Hall Films UK",
    project_type: "HTML 5 Responsive site",
    project_url: "http://www.pipahoy.com/mobile",
    project_description:
      "Pip ahoy! is a childrens TV show where his friends carry out a rescue here, solve a problem there, and take care of the community and look out for others. The task here was to establish online presence on mobile devices.",
    project_tasks: "HMTL 5 /CSS",
    project_image: "pip_mobile_1.jpg",
    project_id: "p-31",
  },
  {
    project_title: "Pip Ahoy! Peeping Puffins",
    project_client: "Cosgrove Hall Films UK",
    project_type: "HTML 5 Game",
    project_url: "#",
    project_description:
      "Pip ahoy! Peeping Puffins is a whack-a-mole type of game, click/tap on the puffins but not pip to get to the next level. Aimed at preschool children.",
    project_tasks: "HMTL 5 /CSS",
    project_image: "puffins_1.jpg",
    project_id: "p-30",
  },
  {
    project_title: "Henri le Worm",
    project_client: "Henri le Worm",
    project_type: "Javascript/CreateJS/HTML/CSS development",
    project_url: "http://www.henrileworm.com",
    project_description:
      "Henri Le Worm is a website that has narration by Simon Pegg and features recipes by Raymond Blanc. It includes loads of interactive points which offer up loads of facts about food and nature as well as fun animations introducing the different characters in henris world. ",
    project_tasks: "Javascript/CreateJS/HTML/CSS development",
    project_image: "henri3.jpg",
    project_id: "p-29",
  },
  {
    project_title: "Tree Fu Tom",
    project_client: "Freemantle Media UK",
    project_type: "HTML 5 CreateJS Game",
    project_url: "http://www.horaciolopez.com/games/tree_fu_tom/index.html",
    project_description:
      "This game was developed for use on broadcaster sites for Television show Tree Fu Tom.  The aim of this game is to click/tap on the zap balls before the time meter runs out.  It was developed to be accessable to mobile/tablet and desktop users",
    project_tasks:
      "Game development in Javascript using CreateJS, including preloaders, sound/animation integration and game play affects",
    project_image: "tft3.jpg",
    project_id: "p-28",
  },
  {
    project_title: "Dinosaur Roar!",
    project_client: "Immediate Media UK",
    project_type: "IOS Ap",
    project_description:
      "Dinosaur Roar is a popular children's book written and illustrated by Paul and Henrietta Stickland.  This App extends the book into an interactive experience for kids that includes, animation, audio, colouring activity and recording features.  Since Launch in May 2014, this App has seen great reviews including a top 20 new App listing in The Guardian",
    project_url:
      "https://itunes.apple.com/gb/app/dinosaur-roar!/id857865979?mt=8",
    project_tasks:
      "XCODE development, assets/Animation integration and device testing across IOS family.",
    project_image: "dinoroar1.jpg",
    project_id: "p-27",
  },
  {
    project_title: "Andy's Dinosaur Adventures",
    project_client: "Cbeebies BBC",
    project_type: "HTML 5 / CreateJS",
    project_url:
      "http://www.bbc.co.uk/cbeebies/games/andys-dinosaur-adventures-game",
    project_description:
      "The task here was to develop a HTML 5 adventure experience to support the CBeebies launch of the Andy's Dinosaur Adventure television show. The aim is to explore the rich environment and collect badges along the way.  It includes three interactive games within the environment. The site was supported on Mobile/tablet and desktop.  A very successful launch, 274K unique browser hits in the first week, a new record for Cbeebies!",
    project_tasks:
      "I was part of a team of 4 developers on this project, my task was to develop the three interactive games , Xylobones, Dinotrax and Dinospot.  The development was done in CreateJS Javascript/HTML.",
    project_image: "ada1.jpg",
    project_id: "p-26",
  },
  {
    project_title: "SwashBuckle Bouncy Sails",
    project_client: "Cbeebies BBC",
    project_type: "DOM/HTML/CSS/Javascript",
    project_url: "#",
    project_description:
      "Drag and drop game, involves collecting the items and sorting them to the correct buckets, the pesky pirates hinder progress.",
    project_tasks:
      "DOM/HTML/CSS/Javascript development / audio/animation sprites integration, including support for mobile, desktop browsers.",
    project_image: "bs1.jpg",
    project_id: "p-25",
  },
  {
    project_title: "SwashBuckle ",
    project_client: "Cbeebies BBC",
    project_type: "DOM/HTML/CSS/Javascript",
    project_url: "#",
    project_description:
      "This project consisted of a hub area with four links to games to support the Swashbuckle Television show on CBeebies.  On the completion of each game, the player is taken to a 'walk the plank' activity.",
    project_tasks:
      "DOM/HTML/CSS/Javascript development audio intergration animation integration using Spritely/Tweenmax.  Full development of 'bouncy sails' and 'walk the plank' games including drag and drop functionality and support for IE8",
    project_image: "sb1.jpg",
    project_id: "p-24",
  },

  {
    project_title: "Andy's Wild Adventures",
    project_client: "Cbeebies BBC",
    project_type: "Flash AS3 - Games and environment",
    project_url:
      "http://www.bbc.co.uk/cbeebies/games/andys-wild-adventures-game",
    project_description:
      "This project involved expanding the existing web presence of Andys Wild Adventures on CBeebies.  Two new environments (British Countryside and The Great Barrier Reef) and 7 new mini games. ",
    project_tasks:
      "Full actionscript development using FDT for 'British Countryside' and 'Hungry Turtle', 'Grubs up Woodbpeckers' and 'Eagle Express'",
    project_image: "awa1.jpg",
    project_id: "p-23",
  },

  {
    project_title: "In The Night Garden",
    project_client: "BBC",
    project_type: "DOM/HTML/CSS/Javascript",
    project_url: "#",
    project_description:
      "In the night Garden Live is a BBC children's television series, aimed at children aged from 1 to 8 years old. It is produced by the team that also co-created Teletubbies. This simple matching pairs game was part of a facebook based competition that involved accumulating points daily to win a prize.  As a result the game recieved substancial traffic daily.",
    project_tasks:
      "DOM/HTML/CSS/Javascript development support for IE8 and mobile devices",
    project_image: "ng1.jpg",
    project_id: "p-22",
  },
  {
    project_title: "Eagle Express",
    project_client: "BBC",
    project_type: "Flash AS3 Game",
    project_url:
      "http://www.bbc.co.uk/cbeebies/games/andys-wild-adventures-game",
    project_description:
      "This game involves using the keyboard or mouse to fly the eagle to its nest, avoiding tree shrubs and other eagles ",
    project_tasks:
      "Flash AS3 development, sound/animation intergration compliance with BBC Standards",
    project_image: "ex1.jpg",
    project_id: "p-21",
  },
  {
    project_title: "Bin Golfing",
    project_client: "Bin Weevils Ltd",
    project_type: "IOS App - objective C using XCODE",
    project_url: "#",
    project_description:
      "Bin Weevils is a virtual world for kids to explore online.  This project involved the development of an IOS App to support the brand, a golf game adventure with multiple levels",
    project_tasks:
      "My role on this project involved support development including view creation, optimising for the IOS family",
    project_image: "bw1.jpg",
    project_id: "p-20",
  },
  {
    project_title: "Triple Trains",
    project_client: "Ludorum",
    project_type: "DOM/HTML/CSS/Javascript",
    project_url: "#",
    project_description:
      "Bejeweled style game involving matching train types in a row to gain more points",
    project_tasks: "DOM/HTML/CSS/Javascript development / audio intergration",
    project_image: "bj1.jpg",
    project_id: "p-19",
  },
  {
    project_title: "Woodpecker ",
    project_client: "BBC",
    project_type: "Flash AS3 Game",
    project_url:
      "http://www.bbc.co.uk/cbeebies/games/andys-wild-adventures-game",
    project_description:
      "Flash AS3 Game that involves flying from tree to tree pecking shrubs, getting there before the other woodpeckers do. Get as many as you can withing the timeframe",
    project_tasks:
      "Flash AS3 development, sound/animation intergration compliance with BBC Standards",
    project_image: "wp1.jpg",
    project_id: "p-18",
  },
  {
    project_title: "Hungry Turtle ",
    project_client: "BBC",
    project_type: "Flash AS3 Game",
    project_url:
      "http://www.bbc.co.uk/cbeebies/games/andys-wild-adventures-game",
    project_description:
      "This game involves collecting turtle food items and avoiding rocks as they go past.",
    project_tasks:
      "Flash AS3 development, assets preperation sound/animation intergration compliance with BBC Standards",
    project_image: "ht1.jpg",
    project_id: "p-17",
  },
  {
    project_title: "Jedwards Big Adventure ",
    project_client: "BBC",
    project_type: "Flash AS3",
    project_url: "#",
    project_description:
      "Jedward's Big Adventure is a children's television programme on the BBC. Hosted by the Jedward twins and follows them as they visit various historical sites around the United Kingdom. This game launched at the same time as the show aired. You have the choice to play either of the twins and try to keep the visitors to an attraction happy for as long as you can. The more visitors the more chaos.. ",
    project_tasks:
      "Flash AS3 development, assets preperation sound/animation intergration compliance with BBC Standards",
    project_image: "jed1.jpg",
    project_id: "p-16",
  },
  {
    project_title: "Peppa Pig",
    project_client: "eOne UK",
    project_type: "Flash AS3",
    project_url: "#",
    project_description: "Flash Website",
    project_tasks:
      "Peppa Pig is a world known brand, our task here was to create a rich engaging site for kids to explore through reading, playing games, activities and watching videos.  The site included a CMS intergration with Flash site.  I was part of a team of 5 developers and have done substantial maintenance work on the site since its launch including the expansion into international territories. ",
    project_image: "pp1.jpg",
    project_id: "p-15",
  },
  {
    project_title: "Peppa Pig Pancake Game",
    project_client: "eOne UK",
    project_type: "Flash AS3",
    project_url: "http://www.peppapig.co.uk/play/pancake-game",
    project_description:
      "The aim of this game is to help Daddy Pig cook pancakes by flipping them in the frying pan, strike a good balance between burning them for not flipping or flipping too hard and getting the pancake stuck on the roof!",
    project_tasks:
      "I worked with a designer and was responsible for the planning and development of the AS3 programming",
    project_image: "pcake1.jpg",
    project_id: "p-14",
  },
  {
    project_title: "Peppa Pig Snorts and Crosses",
    project_client: "eOne UK",
    project_type: "HTML 5 / CreateJS",
    project_url:
      "http://www.horaciolopez.com/peppa/peppa_snorts_crosses/index.html",
    project_description:
      "A naughts and crosses game, play against the computer or your friend.   My role was convert this original Flash game into a HTML 5 game to use on desktop/mobile/tablets.",
    project_tasks: "HMTL 5 / CreateJS programming",
    project_image: "snorts1.jpg",
    project_id: "p-13",
  },

  {
    project_title: "City of Friends",
    project_client: "CreaCon Entertainment Norway",
    project_type: "Website - DOM/HTML/CSS/Javascript",
    project_url: "#",
    project_description:
      "City of friends in a Norwegian produced pre-school 3D animated TV series that airs on UK's Milkshake channel. This project involved the use of various technologies fusing together for one website, including php, Flash, Javascript and HTML",
    project_tasks: "DOM/HTML/CSS/Javascript development and AS3 Development",
    project_image: "cof1.jpg",
    project_id: "p-12",
  },
  {
    project_title: "City of Friends - Color",
    project_client: "CreaCon Entertainment Norway ",
    project_type: "Flash AS3",
    project_url: "#",
    project_description:
      "This colouring in activity enables the user to choose a color sheet and use the pallete to color in as they wish, you can cheat by using the 'magic' brush that colors the image perfectly.  This activity was developed fully in AS3 flash and including intergration with a CMS that allowed the client to update color sheets.",
    project_tasks: "DOM/HTML/CSS/Javascript development and AS3 Development",
    project_image: "cof3.jpg",
    project_id: "p-11",
  },
  {
    project_title: "Little Kingdom",
    project_client: "BBC",
    project_type: "Flash AS3",
    project_url: "#",
    project_description: "Flash AS3 Website",
    project_tasks:
      "Site maintenance, development of a advent calendar allowing users to comeback everyday and reveal a new advent box and activity. I was part of a team of 3 of 1 designer and two developers",
    project_image: "lk1.jpg",
    project_id: "p-10",
  },
  {
    project_title: "Olly The Little White Van",
    project_client: "Ideas at Work UK",
    project_type: "Flash AS3",
    project_url: "#",
    project_description: "Flash Website",
    project_tasks:
      "My involvement on this project was the development of post launch extensions and maintenence such us video competitions and promos. All developed in FLash AS3",
    project_image: "olly1.jpg",
    project_id: "p-9",
  },
  {
    project_title: "Olly The Little White Van - Mobile",
    project_client: "Ideas at Work UK",
    project_type: "DOM/HTML/CSS/Javascript",
    project_url: "#",
    project_description:
      "Mobile site for the Olly brand specificaly optimised for the IOS family",
    project_tasks:
      "DOM/HTML/CSS/Javascript development, including games, meet carousel and video intergration",
    project_image: "olly_mob1.jpg",
    project_id: "p-8",
  },
  {
    project_title: "Mister Maker",
    project_client: "Zodiak UK",
    project_type: "DOM/HTML/CSS/Javascript and Flash",
    project_url: "#",
    project_description:
      "Mister maker is a TV series that airs in multiple countries worldwide. The series comprises a mixture of animation and real time content. The website supports the TV show, users are able to search and watch makes, play games and activities.",
    project_tasks:
      "DOM/HTML/CSS/Javascript development / audio/animation sprites integration Flash development for the matching pairs game.  Social media intergration.",
    project_image: "mm3.jpg",
    project_id: "p-7",
  },
]

export default ProjectList
