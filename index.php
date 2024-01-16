<!-----------------------------------------
-Filename: index.html
-Description: Main page document for my personal portfolio website
-Copyright: 2024 Kaitlyn Becker
------------------------------------------>
<?php
    include_once 'submit.php';
?>
<!doctype html>
<html>
<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=ABeeZee">
    <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/arual">
    <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/beauty-in-the-starlight">
    <link rel="stylesheet" href="index.css">

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <script src='https://www.google.com/recaptcha/api.js'></script>
    <script defer src="index.js"></script>

    <title>Becker Portfolio</title>
    <link rel="icon" type="image/x-icon" href="Assets/UIGraphics/favicon.svg">
    <!--OG Meta Data-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta property="og:url" content="https://kbecker13.github.io">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Kaitlyn Becker Portfolio">
    <meta property="og:title" content="Kaitlyn Becker Portfolio">
    <meta property="og:description" content="Instructional designer, interactive developer, animator, illustrator and more.">
    <meta property="og:image" content="https://kbecker13.github.io/Assets/UIGraphics/thumb.png">
    <meta name="author" content="Kaitlyn Becker">
    <meta name="publish_date" property="og:publish_date" content="2023-12-18T00:00:00-0600">
    <!--Twitter meta data-->
    <meta name="twitter:card" content="https://kbecker13.github.io/Assets/UIGraphics/thumb.png">
    <meta property="twitter:domain" content="kbecker13.github.io">
    <meta property="twitter:url" content="https://kbecker13.github.io">
    <meta name="twitter:title" content="Kaitlyn Becker Portfolio">
    <meta property="twitter:description" content="Instructional designer, interactive developer, animator, illustrator and more.">
    <meta name="twitter:image" content="https://kbecker13.github.io/Assets/UIGraphics/thumb.png">
    <meta data-rh="true" name="twitter:image:alt" content="Portfolio Preview">
    <meta data-rh="true" name="twitter:image:width" content="1280">
    <meta data-rh="true" name="twitter:image:height" content="720">
</head>

<body>
    <div class="container-fluid p-0">
        <a id="home"></a>
        <div id="landing-watcher"></div>
        <div id="landing" class="animateIn fadeIn asyncImage" data-src="Assets/Graphics/Landing.jpg">
            <div id="landing-text" class="animateIn fadeIn d-1">
                <h1>Welcome!</h1>
                <div id="landing-subheading">
                    <span>
                        My name is Kaitlyn Becker<br>
                        and I am 
                        <div id="landing-rotate"><ul class="rotate loopAnim">
                            <li>happy you're here</li>
                            <li>an instructional designer</li>
                            <li>an interactive developer</li>
                            <li>a technology enthusiast</li>
                            <li>a multimedia artist</li>
                            <li>happy you're here</li>
                        </ul></div>
                    </span>
                </div>
            </div>
            <img class="animateIn fadeIn loopAnim" src="Assets/Graphics/landing1.png">
            <img class="animateIn fadeIn loopAnim" src="Assets/Graphics/landing2.png">
            <img class="animateIn fadeIn loopAnim" src="Assets/Graphics/landing3.png">
        </div>
        <div id="landing-spacer" class="spacer">
            <div class=" my-bg-light box-shadowed"></div>
            <div class="box-shadowed"></div>
            <div id="landing-spacer-text"  class="animateIn fadeIn d-1">
                <h1>Welcome!</h1>
                <div id="landing-spacer-subheading">
                    <span>
                        My name is Kaitlyn Becker<br>
                        and I am 
                        <div id="landing-spacer-rotate"><ul class="rotate">
                            <li>happy you're here</li>
                            <li>an instructional designer</li>
                            <li>an interactive developer</li>
                            <li>a technology enthusiast</li>
                            <li>a multimedia artist</li>
                            <li>happy you're here</li>
                        </ul></div>
                    </span>
                </div>
            </div>
            <img src="Assets/Graphics/plants.png">
        </div>
        <nav id="navbar" class="navbar navbar-expand-sm">
            <button class="navbar-toggler ms-auto me-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a href="#home" class="nav-link">Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="#about" class="nav-link">About</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a href="#works" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">Works</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#elearning">eLearning and Instruction</a></li>
                            <li><a class="dropdown-item" href="#coding">Coding and Development</a></li>
                            <li><a class="dropdown-item" href="#illustration">Illustration and Animation</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a href="#contact" class="nav-link">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
        <div id="about" class="page-wrapper"><div class="page-parent">
            <div class="page">
                <div class="row">
                    <div class="col-sm-7 animateIn fadeIn">
                        <img src="Assets/Graphics/About me.png" class="shadowed">
                    </div>
                    <div class="col-sm-5 centered-column animateIn fadeInRight">
                        <h1>What I'm <span>About</span></h1>
                        <p>
                            I am an experienced developer and artist with a diverse skillset
                            cultivated through professional and personal enrichment opportunities
                            across interconnected disciplines. 
                        </p>
                    </div>
                </div>
            </div>
        </div></div>
        <div id="works-spacer" class="spacer my-bg-light box-shadowed">
            <h1 class="animateIn fadeInRight">Check Out My <span>Work</span></h1>
            <img src="Assets/Graphics/SVG/spacer-1.svg">
        </div>
        <div id="works" class="container-fluid p-0 section">
            <div id="eLearning" class="container-fluid px-5 section my-bg-dark">
                <svg>
                    <line x1="0" y1="9rem" x2="100%" y2="12rem"/>
                    <circle r="25vw" cx="65vw" cy="55vw"/>
                    <circle r="30vw" cx="20vw" cy="115vw"/>
                </svg>
                <div class="animateIn fadeInLeft mb-4">
                    <h2>eLearning and Instruction</h2>
                    <p>
                        I leverage my experience in interactive development and education to design 
                        engaging learning experiences to meet learners where they are. 
                    </p>
                </div>
                <div class="stars s1"><img src="Assets/Graphics/SVG/Star.svg"></div>
                <div class="row row-reverse py-4">
                    <div class="col-sm-7 animateIn fadeIn">
                        <a href="Pages/GettingThingsDone.html"><div class="img-wrap b-r-1 shadowed">
                            <img class="img-fit asyncImage" src="Assets/Graphics/PreviewGraphics/placeholder.jpg" 
                            data-src="Assets/Graphics/PreviewGraphics/GettingThingsDone.jpg">
                        </div></a>
                    </div>
                    <div class="col-sm-5 ar-column animateIn fadeInLeft">
                        <h3>A Guide to<br>Getting Things Done</h3>
                        <p>
                            <i>A Guide to Getting Things Done</i> is an interactive mLearning lesson on how our 
                            Executive Functions come in to play at work, and how we can improve our efficacy through mindful coping skills. 
                        </p>
                        <span><b>Softwares: Articulate Storyline, Photoshop, Illustrator</b></span>
                    </div>
                </div>
                <div class="stars s2"><img src="Assets/Graphics/SVG/Star.svg"></div>
                <div class="stars s3"><img src="Assets/Graphics/SVG/Star.svg"></div>
                <div class="row py-4">
                    <div class="col-sm-7 animateIn fadeIn">
                        <a href="Pages/PannaCotta.html"><div class="img-wrap b-r-1 shadowed">
                            <img class="img-fit asyncImage" src="Assets/Graphics/PreviewGraphics/placeholder.jpg"
                            data-src="Assets/Graphics/PreviewGraphics/PannaCotta.jpg">
                        </div></a>
                    </div>
                    <div class="col-sm-5 al-column animateIn fadeInRight">
                        <h3>How to Make<br>Panna Cotta</h3>
                        <p>
                            <i>How to Make Panna Cotta</i> is a 'Cooking Mama'-style game made with Articulate Storyline. 
                            It is a technical exploration of the interactive capabilities of the software. 
                        </p>
                        <span><b>Softwares: Articulate Storyline, Photoshop, Illustrator</b></span>
                    </div>
                </div>
<!-- Add these back in once their pages are done -->
                <div style="display: show;">
                    <h4 id="other-examples">Other Examples</h4>
                    <div id="eLearning-other" class="row gx-4">
                        <div class="col p-2"><div class="p-4 my-bg-dark-1 shadowed">
                            <a href="Pages/Feedforward.html"><div class="img-wrap b-r-1 shadowed">
                                <img class="img-fit asyncImage" src="Assets/Graphics/PreviewGraphics/placeholder.jpg"
                                data-src="Assets/Graphics/PreviewGraphics/Feedforward.jpg">
                            </div></a>
                            <h4>Feedforward</h4>
                            <div class="card-text">
                                <span><b>Softwares: Powerpoint, Photoshop</b></span>
                                <p>
                                    This micro Instructor-Led Training presented the corporate concept popularized 
                                    by Marshall Goldsmith with strategies for how to integrate it into the secondary classroom. 
                                </p>
                            </div>
                        </div></div>
                        <div class="col p-2"><div class="p-4 my-bg-dark-1 shadowed">
                            <a href="Pages/DiveInTech.html"><div class="img-wrap b-r-1 shadowed">
                                <img class="img-fit asyncImage" src="Assets/Graphics/PreviewGraphics/placeholder.jpg"
                                data-src="Assets/Graphics/PreviewGraphics/DiveIntoTech.jpg">
                            </div></a>
                            <h4>Diving Into Tech</h4>
                            <div class="card-text">
                                <span><b>Softwares: Powerpoint, Photoshop</b></span>
                                <p>
                                    This Instructor-Led Training was designed to lead educators at any level of technology comfort to 
                                    provide actionable guidance and guided practice on properly integrating technology into pre-existing curriculum.
                                </p>
                            </div>
                        </div></div>
                        <div class="col p-2"><div class="p-4 my-bg-dark-1 shadowed">
                            <a href="Pages/TransitionBack.html"><div class="img-wrap b-r-1 shadowed">
                                <img class="img-fit asyncImage" src="Assets/Graphics/PreviewGraphics/placeholder.jpg"
                                data-src="Assets/Graphics/PreviewGraphics/TransitioningBack.jpg">
                            </div></a>
                            <h4>Transitioning Back</h4>
                            <div class="card-text">
                                <span><b>Softwares: Google Slides, Peardeck, MS Teams</b></span>
                                <p>
                                    This blended training presented a trauma-sensitive exploration of how to meet and mitigate the challenges 
                                    of bringing students back into the classroom following a year of eLearning.
                                </p>
                            </div>
                        </div></div>
                    </div>
                </div>
                <div class="stars s4"><img src="Assets/Graphics/SVG/Star.svg"></div>
                <div class="divider"><img src="Assets/Graphics/SVG/spacer-2.svg"> </div>
            </div>
            <div id="coding" class="container-fluid px-5 section my-bg-light">
                <svg><circle r="45%" cx="65%" cy="50%"/></svg>
                <div class="animateIn fadeInLeft">
                    <h2>Coding and Development</h2>
                    <p>I am an accomplished developer with experience in a variety of coding languages, with which  
                        I create diverse products, including this website.
                    </p>
                </div>
                <div class="stars s1"><img src="Assets/Graphics/SVG/Star.svg"></div>
                <div class="container-fluid">
                    <div id="coding-bg"><div></div></div>
                    <div class="row animateIn fadeInRight">
                        <div class="col-sm-5 stack-layers">
                            <div class="shadowed b-r-1"><div></div></div>
                            <a href="Pages/OneMoreShot.html"><div class="img-wrap">
                                <img class="img-fit asyncImage" src="Assets/Graphics/PreviewGraphics/placeholder.jpg"
                                data-src="Assets/Graphics/PreviewGraphics/OneMoreShot.png">
                            </div></a>
                        </div>
                        <div class="col-sm-7 al-column l-coding">
                            <h4>One More Shot</h4>
                            <p>
                                One More Shot is an educational visual novel game developed in Unity. 
                                It has been used in academic studies to test the efficacy of personalized, 
                                immersive intervention techniques versus traditional surveys.
                            </p>
                            <span><b>Languages: C#, JSON, JS</b></span>
                        </div>
                    </div>
                    <div class="row row-reverse  animateIn fadeInLeft">
                        <div class="col-sm-5 stack-layers">
                            <div class="shadowed b-r-1"><div></div></div>
                            <a href="Pages/DressOfStars.html"><div class="img-wrap">
                                <img class="img-fit asyncImage" src="Assets/Graphics/PreviewGraphics/placeholder.jpg"
                                data-src="Assets/Graphics/PreviewGraphics/DressStars.png">
                            </div></a>
                        </div>
                        <div class="col-sm-7 ar-column r-coding">
                            <h4>A Dress of Stars</h4>
                            <p>
                                A Dress of Stars is an interactive children's fairy tale e-book that creates an immersive 
                                experience with adorable paper cutout illustrations and 2.5D parallaxing compositions.
                            </p>
                            <span><b>Languages: HTML, CSS, JS</b></span>
                        </div>
                    </div>
                    <div class="stars s2"><img src="Assets/Graphics/SVG/Star.svg"></div>
                    <div class="row animateIn fadeInRight">
                        <div class="col-sm-5 stack-layers">
                            <div class="shadowed b-r-1"><div></div></div>
                            <a href="Pages/TarotJournal.html"><div class="img-wrap">
                                <img class="img-fit asyncImage" src="Assets/Graphics/PreviewGraphics/placeholder.jpg"
                                data-src="Assets/Graphics/PreviewGraphics/TarotJournal.png">
                            </div></a>
                        </div>
                        <div class="col-sm-7 al-column l-coding">
                            <h4>Tarot Journal</h4>
                            <p>
                                Tarot Journal is a web app that streamlines the journaling process. 
                                It serves as an interactive tarot card reference and intuitive and efficient journal page builder.
                            </p>
                            <span><b>Languages: HTML, CSS, JS, JSON</b></span>
                        </div>
                    </div>
                    <div class="row row-reverse animateIn fadeInLeft">
                        <div class="col-sm-5 stack-layers">
                            <div class="shadowed b-r-1"><div></div></div>
                            <a href="Pages/ReviewBot.html"><div class="img-wrap">
                                <img class="img-fit asyncImage" src="Assets/Graphics/PreviewGraphics/placeholder.jpg"
                                data-src="Assets/Graphics/PreviewGraphics/ReviewBot.png">
                            </div></a>
                        </div>
                        <div class="col-sm-7 ar-column r-coding">
                            <h4>Discord Review Bot</h4>
                            <p>
                                This tool was made to automate the review process for the Take a Plant Leave a Plant subreddit community. 
                                It communicates across three domains: Reddit, Discord and the Google Suite.
                            </p>
                            <span><b>Languages: Python, Reddit API, Google Scripts</b></span>
                        </div>
                    </div>
                    <div class="stars s3"><img src="Assets/Graphics/SVG/Star.svg"></div>
                </div>
            </div>
            <div id="illustration" class="container-fluid px-5 section my-bg-light">
                <div class=" animateIn fadeInLeft">
                    <h2>Illustration and Animation</h2>
                    <p>I enjoy bringing my design visions to life in a variety of mediums, both traditional and digital.</p>
                </div>
                <div class="stars s1"><img src="Assets/Graphics/SVG/Star.svg"></div>
                <div class="stars s2"><img src="Assets/Graphics/SVG/Star.svg"></div>
                <div class="row px-5">
                    <div class="col-sm-5 centered-column animateIn fadeInBottom">
                        <a href="Pages/HemlockGlade.html"><div class="img-wrap">
                            <img class="img-fit shadowed asyncImage" src="Assets/Graphics/PreviewGraphics/placeholder.jpg"
                            data-src="Assets/Graphics/PreviewGraphics/HemlockGlade.png">
                        </div></a>
                        <h4>Hemlock Glade</h4>
                        <p>
                            Hemlock Glade is a coloring book of my illustrations that I self-published with the help of a successful crowd-funding campaign. 
                        </p>
                    </div>
                    <div class="col-sm-5 centered-column animateIn fadeInBottom">
                        <a href="Pages/Commissions.html"><div class="img-wrap">
                            <img class="img-fit shadowed asyncImage" src="Assets/Graphics/PreviewGraphics/placeholder.jpg"
                            data-src="Assets/Graphics/PreviewGraphics/CharacterDesign.png">
                        </div></a>
                        <h4>Character Commissions</h4>
                        <p>
                            In addition to my other hobbies, I also illustrate characters. For more information on these 
                            illustrations, or information regarding commissioning your own piece, 
                            <a href="Pages/Commissions.html">click here</a>.
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-5 centered-column animateIn fadeInBottom">
                        <a href="Pages/Branding.html"><div class="img-wrap">
                            <img class="img-fit shadowed asyncImage" src="Assets/Graphics/PreviewGraphics/placeholder.jpg"
                            data-src="Assets/Graphics/PreviewGraphics/Branding.png">
                        </div></a>
                        <h4>Branding and Logo Design</h4>
                        <p>
                            I have worked with clients to produce branding materials and develop websites for a variety of small business needs.
                        </p>
                    </div>
                    <div class="col-sm-5 centered-column animateIn fadeInBottom">
                        <a href="Pages/Animation.html"><div class="img-wrap">
                            <img class="img-fit shadowed asyncImage" src="Assets/Graphics/PreviewGraphics/placeholder.jpg"
                            data-src="Assets/Graphics/PreviewGraphics/3DAnimation.png">
                        </div></a>
                        <h4>Animation and 3D Work</h4>
                        <p>
                            One of my many creative outlets is the art of animation. I work in a variety of techniques and softwares, 
                            including Blender, Maya, Adobe Animate, Photoshop, Illustrator, and Procreate.
                        </p>
                    </div>
                </div>
                <div class="stars s3"><img src="Assets/Graphics/SVG/Star.svg"></div>
                <div class="divider"><img src="Assets/Graphics/SVG/spacer-3.svg"></div>
            </div>
        </div>
        <div id="contact" class="container-fluid section my-bg-light">
            <div class="row">
                <div class="col-sm-5">
                    <img class="img-fit" src="Assets/Graphics/contact.png">
                </div>
                <div class="col-sm-7 al-column px-4">
                    <h1>Let's Keep in <span>Contact</span></h1>
                    <div class="container-fluid centered-column border border-1 p-4" style="min-height: 50vh;">
                        <form id="contact-form" action="" method="post" action="" class="grid-container">
                            <input id="name" name="name" autocomplete="name" placeholder="Your Name" >
                            <input id="email" name="email" autocomplete="email" type="email" placeholder="Your email">
                            <textarea id="message" name="message" autocomplete="none" placeholder="Your message"></textarea>
                            <input type="hidden" name="submit-frm" value="1">
                            <?php if(!empty($statusMsg)){ ?>
                                <p class="status-msg <?php echo $status; ?>"><?php echo $statusMsg; ?></p>
                            <?php>} ?>
                            <button 
                                id="captcha" class="g-recaptcha" 
                                data-sitekey="6LfAH1ApAAAAAE_SWthDlZfZPrQ7sNLpoHJyuoxb"
                                data-callback="onSubmit"
                                data-action="submit"
                            >
                                Submit
                            </button>
                          </form>
                          
                    </div>
                </div>
            </div>
        </div>
        <div id="footer" class="page-wrapper"><div class="page-parent">
            <div class="page">
                <p>&copy; 2024 Kaitlyn Becker. All Rights Reserved | Designed by Kaitlyn Becker</p>
            </div>
        </div></div>
    </div>
</body>
<footer>

</footer>
</html>
