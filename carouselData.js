/*************************************************************
 * Filename: carouselData.js
 * Description: Contains data (image sources, copy text, tags, etc) for each portfolio asset
 *              Used by index.js to generate carousel cards and preview iFrames
 * Copyright: 2023 Kaitlyn Becker
 *************************************************************/
const codingItems = [
    {
        title:  "One More Shot",
        imgUrl: "../Assets/Graphics/PreviewGraphics/Code/OneMoreShot.png",
        bgUrl:  "../Assets/Graphics/PreviewGraphics/Code/OneMoreShotBG.png",
        detail: `Educational visual novel game developed in Unity.
        Languages: C#, JSON, JS`,
        tags:"#Unity #Git #CSharp #Twine #Photoshop #JavaScript #JSON",
        timelineInfo:"Initially developed 2013-2016, routinely updated",
        description:`One More Shot is an experimental visual novel game developed by a small team at Dual Path Learning LLC. The game provides an interactive and personalized glimpse at the potential impact of alcohol abuse on a user’s life goals. With a focus on compassionate, non-judgemental delivery of information, the game seeks to give young people the means to assess their own relationship with alcohol.

        We developed this game in Unity using a combination of C#, Javascript and JSON. The most interesting code I worked on in this project was creating a custom parser that could convert the large, branching story we wrote in Twine to dialog cards, complete with stage directions, for the game. 
        
        I worked on this project in a number of roles, including storywriter, technical artist, developer, and finally lead developer. I coordinated different teams in implementing features and assets required by the project. I met routinely with our client to ensure their vision was realized. Currently, I work with our server handler and clients to routinely update the game.`,
        preUrl:"oneMoreShotPre.html"
    },
    {
        title:  "Tarot Journal",
        imgUrl: "../Assets/Graphics/PreviewGraphics/Code/TarotJournal.png",
        bgUrl:  "../Assets/Graphics/PreviewGraphics/Code/TarotJournalBG.png",
        detail: `Interactive Tarot reference and journal page builder
        Languages: HTML, CSS, JS, JSON`,
        tags:"#HTML #CSS #JavaScript #Open Source #Bullet Journal",
        timelineInfo:"June 2023 - Present",
        description:`Tarot Journal is a web app that serves as a curated Tarot card reference and streamlined recording tool for tarot readings. Users can design their spread and draw from a virtual deck or record draws from a physical deck, then access the information for each card and record their personal notes. They can then export a convenient print-format page of their results.

        <center><a target= "_blank" href= "../TarotJournal/JournalBuilder.html"> Check out the project here!</a></center>
        
        This ongoing, open source* project will continue to evolve as I add new features.
        
        Around October 2022, I discovered an interest in using Tarot reading as a tool for journaling. In tarot readings, you draw cards to place in specific layouts, called spreads, with meanings for the positions. Each card in the 78-card deck also has its own meaning, which can be a overwhelming for a beginner. 
        
        I wanted a tool that allowed me to neatly record my thoughts, and gave me intuitive access to card descriptions. Since I couldn’t find one that met my needs, I decided to develop my own and make it available to others.
        
        *<sub>If you have any questions, suggestions for improvements, or want to contribute to the project, please contact me!</sub>`,
        preUrl:""
    },
    {
        title:  "Discord Review Bot",
        imgUrl: "../Assets/Graphics/PreviewGraphics/Code/ReviewBot.png",
        bgUrl:  "../Assets/Graphics/PreviewGraphics/Code/ReviewBotBG.png",
        detail: `Cross-platform Reddit/Discord Automated Review System
        Languages: Python, Reddit API, Google Scripts`,
        tags:"#Python #PRAW #Reddit #Discord #Google Sheets #Google Forms",
        timelineInfo:"April 2023-May 2023",
        description:`TaPLaP Review Bot is a cross-platform tool that streamlines the moderating process for trade and sale reviews within the community.

        Take a Plant Leave a Plant is a vibrant and growing houseplant enthusiast community housed on Reddit and Discord. Members of the subreddit can buy, trade and sell plants with other members, while the Discord server is a more robust and varied social ground. Due to increased growth, the moderators needed to automate parts of the review system to meet the demand.
        
        I worked remotely with the moderators and another volunteer coder to develop a system to streamline the review process. Users submit their reviews using Google Forms. On a successful review, the Python script will send a confirmation message to the poster, add the review to the community directory, and update the reviewed user's community info. On a failed or flagged review, the bot will alert the appropriate party of the issue, either through Reddit or Discord. Following preliminary bug testing, the bot went live in May 2023.
        
        <center><a target="_blank" href="https://www.reddit.com/r/TakeaPlantLeaveaPlant/">Check out the subreddit here.</a></center>
        The pictured TaPLaP banner was illustrated by me in March 2023.`,
        preUrl:""
    },
    {
        title:  "A Dress of Stars",
        imgUrl: "../Assets/Graphics/PreviewGraphics/Code/DressStars.png",
        bgUrl:  "../Assets/Graphics/PreviewGraphics/Code/DressStarsBG.png",
        detail: `Interactive children's fairy tale E-Book
        Languages: HTML, CSS, JS`,
        tags:"#HTML #CSS #Javascript #parallax.js #Illustration",
        timelineInfo:"Fall 2015, updated Spring 2023",
        description:`A Dress of Stars is an online storybook based on the German fairy tale <i>Die Sterntaler</i>, which tells the tale of a young girl with next to nothing who nonetheless shares what she has with those around her. In the Brothers Grimm version of the tale (and this one, spoiler alert!), she is rewarded for her kindness and generosity and has a happy ending.

        <center><a target="_blank" href="../DressOfStars/index.html">Read the full story here!</a></center>
        
        This project was initially developed as an experiment when I first discovered the parallax.js library. I was heavily inspired by the beautiful papercraft of Brittany Lee and Helen Musselwhite, and wanted to merge that with the parallax to make an effect reminiscent of a shadowbox. 
        
        While the effect works with a mouse, the immersive nature is best experienced on a tablet, where the parallax is driven by tilting the screen.
        `,
        preUrl:""
    }
];
const illustrationItems = [
    {
        title:  "Hemlock Glade",
        imgUrl: "../Assets/Graphics/PreviewGraphics/Illustration/HemlockGlade.png",
        bgUrl:  "../Assets/Graphics/PreviewGraphics/Illustration/HemlockGladeBG.png",
        detail: "Successfully crowd-funded coloring book of my illustrations",
        tags:"",
        timelineInfo:"September 2022-January 2023",
        description:`Hemlock Glade is a themed collection of some of my favorite ink illustrations. I love creating intricately detailed drawings with layers of symbolism. My favorite subjects include plants, birds, insects and interior settings with a lot of interesting clutter. I am inspired by the Art Nouveau movement, and the works of Alphonse Mucha in particular. 

        <center><a target="_blank" href="https://thriftywiftydiy.etsy.com/listing/1397414686/woodland-forest-adult-coloring-book">Visit my Etsy to purchase a printable version</a>
        </center>
        I was encouraged by friends and family to collate my illustrations into a coloring book. To guarantee enough funding for manufacturing, I chose to set up a kickstarter campaign. I enjoyed the process of creating the promotional images and product mockups. The project was fully funded in 6.5 hours and reached a total of 420% funding in the month it was live. 

        <center><a target="_blank" href="https://www.kickstarter.com/projects/thriftywifty/hemlock-glade-a-dark-and-mossy-coloring-book">Visit the original Kickstarter page here.</a>
        </center>
        While the advertising, manufacturing and fulfillment of the project took from September '22 to January '23, the illustrations in the book have evolved over the course of many years. Each piece was a labor of love and each has its own unique story. I collected many of those stories in the "Artist's Musings" minizine.
        
        `,
        preUrl:""
    },
    {
        title:  "Character Design",
        imgUrl: "../Assets/Graphics/PreviewGraphics/Illustration/CharacterDesign.png",
        bgUrl:  "../Assets/Graphics/PreviewGraphics/Illustration/CharacterDesignBG.png",
        detail: "Collection of character artwork",
        tags:"",
        timelineInfo:"",
        description:`One of my favorite hobbies is playing Tabletop Role-Playing Games like Dungeons and Dragons. I love the experience of working together to shape a totally unexpected story, and the unexpected results you can get when players have to get creative with the results the dice give them.

        Over the years, I have designed many characters to fit in these many stories. Drawing the character helps me, as a player, get to know their personality and the role they fill in their world. I strive to communicate their personal story through the artwork, in their dynamic posing, their expressions, their style and their environment.
        
        I have also drawn others' characters, and enjoy the process of working with a client to get to know their characters and the story they want to tell. 
        
        <center><a target="_blank" href="../Commission.html">Check out my Commission Info page here!</a></center>
        `,
        preUrl:""
    },
    {
        title:  "Environment Design",
        imgUrl: "../Assets/Graphics/PreviewGraphics/Illustration/BGDesign.png",
        bgUrl:  "../Assets/Graphics/PreviewGraphics/Illustration/BGDesignBG.png",
        detail: "Collection of environment illustrations",
        tags:"",
        timelineInfo:"",
        description:`As with my other illustrations, my environment-focused pieces showcase my love of intricate detail and love of nature.

        One of my strengths as an illustrator is my sense of perspective. I often favor compositions that are reinforced with strong perspective, and I am especially fond of interior environments. Drawing in perspective appeals to my analytical approach to art. 
        
        When I first began exploring perspective, I challenged myself with increasingly complex designs. In recent years however, I have discovered that a visually interesting piece does not require more and more vanishing points, but rather a sense of depth and a composition that leads the eye.
        
        An area I am actively improving is lighting. Much like my other areas of interest, I am drawn to complex, dynamic lighting. In my current work, I am building a strong foundation by instead focusing on simple, striking lighting with high contrast.
        
        `,
        preUrl:""
    },
    {
        title:  "Stylized Design",
        imgUrl: "../Assets/Graphics/PreviewGraphics/Illustration/Stylized.png",
        bgUrl:  "../Assets/Graphics/PreviewGraphics/Illustration/StylizedBG.png",
        detail: "Collection of highly stylized character artwork",
        tags:"",
        timelineInfo:"",
        description:`My art has evolved a great deal over the years and undergone many stylistic shifts. As much as I enjoy detailed scenes and realistic perspective, I also enjoy the creative freedom of cutesy, cartoonish characters. Even with their simpler designs, I still focus on expressive, dynamic poses and little details to make the characters pop.

        Many of these examples are commissions of others' original characters.

        <center><a target="_blank" href="../Commissions.html">Check out my Commission Info page here!</a></center>
        
        `,
        preUrl:""
    }
];
const animationItems = [
    {
        title:  "3D Works",
        imgUrl: "../Assets/Graphics/PreviewGraphics/Animation/3DAnimation.png",
        bgUrl:  "../Assets/Graphics/PreviewGraphics/Animation/3DAnimationBG.png",
        detail: `Collection of 3D modeling, texturing, animating and rendering
        Softwares: Blender, Photoshop, Illustrator`,
        tags:"#Blender #Photoshop #Illustrator #Modeling #Rendering #Lighting #Multimedia",
        timelineInfo:"",
        description:`I often use 3D modeling as part of my planning process for sculptures, illustrations, home upgrades, and furniture plans. It allows for perfect measurements and visualizing how complex ideas can come together. 

        I also enjoy modeling as its own art form. CGI is constantly evolving at a breakneck speed, so there's always some new technique to learn and try. 
        
        Recently, I’ve been especially interested in the node-based, procedural shader editor and geometry nodes in Blender. These allow for a satisfying meld of my aesthetic vision with my technical, programmatic skills. As an example, all the chamomile flowers and greenery in the tea set were modeled procedurally. All of the materials and lighting effects were coded, as well.
        
        `,
        preUrl:""
    },
    {
        title:  "Something Blue",
        imgUrl: "../Assets/Graphics/PreviewGraphics/Animation/SomethingBlue.png",
        bgUrl:  "../Assets/Graphics/PreviewGraphics/Animation/SomethingBlueBG.png",
        detail: `Animated 3D short inspired by a traditional poem
        Softwares: Maya, Blender, Photoshop`,
        tags:"#Maya #Blender #Linux #Photoshop",
        timelineInfo:"Fall 2013",
        description:`<center><i>Something Old, Something New
        Something Borrowed, Something Blue</i></center>        
        Something Blue is an animated short based on the classic wedding poem. Around this time, I had recently lost a loved one, and was surrounded by friends getting engaged and married. I was inspired to tell a story that combined that heartbreak of loss with the joy of a long life lived together. 
        
        I developed this animation through the whole pipeline: the storyboard, look development, modeling, texturing, rigging, animating, lighting, rendering and post-processing. My favorite result is the melancholic lighting of the window and two chairs.
        
        It is obviously not a perfect product, and given time I would like to make improvements with the benefit of my improved skills. Unfortunately, this animation has been a hard lesson in file management. All of the original files were on a hard drive that is now corrupted, so improvements are impossible without recreating the entire project.
        
        `,
        preUrl:""
    },
    {
        title:  "2D Animations",
        imgUrl: "../Assets/Graphics/PreviewGraphics/Animation/2DAnimation.gif",
        bgUrl:  "../Assets/Graphics/PreviewGraphics/Animation/2DAnimationBG.png",
        detail: `Collection of 2D animations in a variety of techniques
        Softwares: Adobe Animate, Photoshop, Illustrator, Procreate`,
        tags:"#AdobeAnimate #Photoshop #Illustrator #Procreate",
        timelineInfo:"",
        description:`I first discovered my love of digital animation in my high school digital media class in 10th grade. For Christmas that year, my dad gifted me with a copy of Macromedia Flash 8, which I used to create short music videos, lip sync animations, and Flash games. 

        While I don't often have as much time to devote to the art these days, I enjoy experimenting with new techniques and keep in practice to keep my skills sharp.
        `,
        preUrl:""
    },
    {
        title:  "Facial Rigging",
        imgUrl: "../Assets/Graphics/PreviewGraphics/Animation/Rigging.png",
        bgUrl:  "../Assets/Graphics/PreviewGraphics/Animation/RiggingBG.png",
        detail: `Advanced facial rigs for efficient lip-syncing
        Software: Blender`,
        tags:"#Blender #Rigging #Modeling #LipSync #FacialAnimation",
        timelineInfo:"",
        description:`One type of animation I find particularly fascinating is lip syncing. One can spend hours studying the intricacies of the minute changes in the face producing sound. We often get distracted by the mundanity of existing, and forget to appreciate the infinitely complex symphony of muscle, bone and air that comes together to create speech.

        These are two examples of facial models and rigs I made, including a panel for different visemes (the faces that make particular sounds) to speed up or automate a simplified lip-sync.
        `,
        preUrl:""
    }
];
const brandingItems = [
    {
        title:  "Thrifty Wifty DIY",
        imgUrl: "../Assets/Graphics/PreviewGraphics/Branding/ThriftyWifty.png",
        bgUrl:  "../Assets/Graphics/PreviewGraphics/Branding/ThriftyWiftyBG.png",
        detail: "My personal brand and storefront",
        tags:"",
        timelineInfo:"",
        description:`In addition to pursuing other creative avenues, I also launched Thrifty Wifty DIY early this year. In developing my personal brand, I wanted to showcase some of my personal aesthetic and symbolism. Since my target audience would largely be nature-loving, Gothic DIY enthusiasts like me, the brand look is leans toward a moodier, contemplative palate, with floral and botanical elements throughout. My brand logo is a stylized allspice flower, which symbolizes compassion in the language of flowers.

        <center><a target="_blank" href="https://thriftywiftydiy.etsy.com">Visit my storefront here!</a></center>
        
        I offer digital crafting kits, printable coloring pages, holiday cards and more. As time goes on, I will continue to expand my inventory.
        `,
        preUrl:""
    },
    {
        title:  "Fence Shield",
        imgUrl: "../Assets/Graphics/PreviewGraphics/Branding/FenceShield.png",
        bgUrl:  "../Assets/Graphics/PreviewGraphics/Branding/FenceShieldBG.png",
        detail: "A US veteran owned and operated fence-staining business",
        tags:"",
        timelineInfo:"",
        description:`This client was a recently-retired Marine Corps Colonel who was starting a fence-staining business. He wanted his brand to show who he was and what he does. The logo I designed for him is evocative of the Eagle Globe and Anchor emblem of the Marine Corps, while the fence resembles a shield to communicate the protective benefit staining has for woodwork. 

        In addition to logo design, I created a suite of promotional graphics for print and web purposes. I also helped the client set up his business website with a before/after gallery, informational articles, social media integration, and contact form.
        
        Fence Shield was a one-man business based in San Antonio for 2 years. The company was dissolved after the owner moved on to work at Texas A&M University.
        `,
        preUrl:""
    },
    {
        title:  "Patience Farms",
        imgUrl: "../Assets/Graphics/PreviewGraphics/Branding/PatienceFarms.png",
        bgUrl:  "../Assets/Graphics/PreviewGraphics/Branding/PatienceFarmsBG.png",
        detail: "A family-run farm in rural Kentucky",
        tags:"",
        timelineInfo:"",
        description:`Patience Farms is a family owned and operated farm in the beautiful countryside of Morgantown KY. The farm and its animals are tended by the owner, her husband, and her parents. They grow produce and make small-batch homemade treats, from spicy squash relish to blueberry pie. The owner also keeps bees and hopes to expand her honey and beeswax-based products in the coming years as her hives mature.

        This client wanted a detailed brand design that showcased elements from the farm and her own faith. I focused on a bright, cheerful color palette and balanced the number of elements she wanted by pushing the depth of the piece. I also designed a few simpler assets for consistent branding on smaller products where the detail would not come through.
        `,
        preUrl:""
    }
];
const educationItems = [
    {
        title:  "Technology Integration",
        imgUrl: "../Assets/Graphics/PreviewGraphics/Education/TechIntegration.png",
        bgUrl:  "../Assets/Graphics/PreviewGraphics/Education/TechIntegrationBG.png",
        detail: "Training teachers in functional and approachable tech integration",
        tags:"",
        timelineInfo:"",
        description:`In my tenure as a career and technology teacher, I saw opportunities to use my expertise to help my fellow teachers who were not as technologically savvy. There was always a push for teachers to use technology within their classrooms, but not always guidance on best practices.

        I am passionate about integrating technology in the classroom <i>the right way</i>. A core tenet of good pedagogy is backwards design, i.e. starting from where you want the students to end up. In my various mentor and leadership roles in the district, I strove to make technology more approachable and seamless with pre-existing instructional design.
        
        This particular training was about meeting teachers and students where they were and gave them actionable guidance for how to integrate a tool into a pre-existing lesson. 
        
        `,
        preUrl:""
    },
    {
        title:  "Professional Development",
        imgUrl: "../Assets/Graphics/PreviewGraphics/Education/ProDev.png",
        bgUrl:  "../Assets/Graphics/PreviewGraphics/Education/ProDevBG.png",
        detail: "Collection of trainings on a variety of topics",
        tags:"",
        timelineInfo:"",
        description:`Coming from industry rather than a traditional educator background, I had a great deal of technology expertise to share with my colleagues. Starting early in my career, I made a name for myself as someone to reach out to with questions or problems. Through this, I discovered an aptitude and enjoyment for training educators.

        During the Covid lockdown, when teaching remotely threw all of us into using new tools with no preparation or training, I stepped forward as a resource for my fellow teachers. From there, I expanded my scope from technical assistance to pedagogical training and mentorship.
        
        I designed and delivered numerous presentations on topics I am passionate about, centering a focus on real-world connection and student-driven learning. Presentations included titles such as: <ul>
        <li>Feedforward: Encouraging your students to STEP UP on the journey to mastery.</li>
        <li>Have More Meaningful Classroom Discussions: Are you reaching<i>every</i> student?</li>
        <li>Transitioning Back: An exploration of the challenges and strategies
        to bring students back into the physical classroom
        </li></ul>        
        <center><a target="_blank" href="https://drive.google.com/drive/folders/1sRVKEA0dnRkMYHDTpLI9VHUF4j75ADCU?usp=sharing">To access the public resources of an example presentation, click here.</a></center>
        
        `,
        preUrl:""
    },
    {
        title:  "Curriculum Design",
        imgUrl: "../Assets/Graphics/PreviewGraphics/Education/Curriculum.png",
        bgUrl:  "../Assets/Graphics/PreviewGraphics/Education/CurriculumBG.png",
        detail: "Collection of lesson plans from 6 years of curriculum creation",
        tags:"",
        timelineInfo:"",
        description:`In addition to teaching student-focused, career-oriented courses in a variety of subjects, I developed the curriculum for my courses from scratch.

        Because many of the courses I taught were innovative courses, they had very little to no district-provided resources. As such, I was privileged to have the opportunity and freedom to design my own framework for courses like Animation, Advanced Animation and Video Game Design.
        
        For each course, I independently developed a full year’s Scope and Sequence, as well as all the necessary coursework and rubrics. As the years progressed, I was able to iterate on the course designs and fine-tune the student experience. 
        
        In each course, I focused on industry standards, real-world connections, professionalism in a collaborative and inclusive classroom culture. Each year, I encouraged students to develop professional and leadership skills, and watched as my students grew and supported each other.
        `,
        preUrl:""
    },
    {
        title:  "Tool Creation",
        imgUrl: "../Assets/Graphics/PreviewGraphics/Education/Tools.png",
        bgUrl:  "../Assets/Graphics/PreviewGraphics/Education/ToolsBG.png",
        detail: "Tools made to assist fellow teachers",
        tags:"",
        timelineInfo:"",
        description:`Anyone who has taught in a classroom can tell you that there simply aren't enough hours in the day to accomplish all the curriculum delivery, differentiation, social emotional support, discipline, data assessment, and general paperwork that comes with the job. As such, it is important to work smarter and not harder. 

        I am a lover of efficiency, and developed a number of tools for use in my and my colleague's classrooms. Many of the tools I created were made using the Google Suite, and Google Sheets in particular. There are so many possibilities opened with the use of a well-crafted spreadsheet.
        
        Some examples of these tools are: <ul>
        <li>Attendance Scanner: students scanned their ID on entering the classroom</li>
        <li>Dean/Student List: our record system had no way for teachers to know who a student's Dean was. I created a lookup tool</li>
        <li>Student Check-ins: my students would complete a weekly form to track their progress</li>
        <li>Digital Doorbell: a QR code on my door when I was not available, where students or staff could leave me a message</li>
        </ul>
        
        I also trained my colleagues in the use of existing tools to help with their various tasks. Some examples include: <ul>
        <li>VLookup and Query in Google Sheets and Excel</li>
        <li>Learning Management Systems: Canvas and ELearning</li>
        <li>MailMerge for automated contact</li>
        <li>Google Forms for easy data keeping</li>
        <li>Veyon computer lab management tool</li>
        </ul>`,
        preUrl:""
    }
];

const carouselArrays = [codingItems,illustrationItems,animationItems,educationItems,brandingItems];