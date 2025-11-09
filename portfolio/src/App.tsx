import './styles.css'
import bgTreeL from "./assets/welcomePage/bgTreeL.png"
import bgTreeR from "./assets/welcomePage/bgTreeR.png"
import mgTreeL from "./assets/welcomePage/mgTreeL.png"
import mgTreeR from "./assets/welcomePage/mgTreeR.png"
import bushL from "./assets/welcomePage/bushL.png"
import bushR from "./assets/welcomePage/bushR.png"
import tree from "./assets/welcomePage/tree.png"
import useWindowDimensions from './hooks.ts';


//convert each image into a partial component
function App() {
  //todo clean the repetitive stuff with classes and styles
  const { width, height } = useWindowDimensions();
  console.log(`Width: ${width}, Height: ${height}`);
  const calcHeightPercentage = Math.floor((width / height) * .8);
  const calcHeightBounded = Math.min(Math.max(calcHeightPercentage, 1), 2)*height;
  const treeRatio = 4000/3160; //image width/height
  const calcTreeOffset = Math.floor(((calcHeightBounded/100*height)*treeRatio)*0.40);
  const imageSetting = `w-auto absolute bottom-0 object-cover`;
  const ultraWidescreenBreakpoint = 2;

  type ImageData = {
    src: string;
    alt: string;
    extraClassInfo: string;
  }
  const images: ImageData[] = [
{src: bgTreeL, alt: "Background Tree Left", extraClassInfo: `${calcHeightPercentage>=ultraWidescreenBreakpoint?"left-0":"right-1/2 transform -translate-x-1/10"} object-right` },
{src: bgTreeR, alt: "Background Tree Right", extraClassInfo: `${calcHeightPercentage>=ultraWidescreenBreakpoint?"right-0":"left-1/2 transform -translate-x-1/6"} object-left` },
{src: mgTreeL, alt: "Midground Tree Left", extraClassInfo: `${calcHeightPercentage>=ultraWidescreenBreakpoint?"left-0":"right-1/2 "} object-right` },
{src: mgTreeR, alt: "Midground Tree Right", extraClassInfo: `${calcHeightPercentage>=ultraWidescreenBreakpoint?"right-0":"left-1/2 transform -translate-x-1/6"} object-left` },
{src: bushL, alt: "Bush Left", extraClassInfo: `${calcHeightPercentage<100?"right-1/2":"left-0"} object-right` },
{src: bushR, alt: "Bush Right", extraClassInfo: `${calcHeightPercentage<100?"left-1/2":"right-0 "} object-left` },
// {src: tree, alt: "Tree", extraClassInfo: `right-1/2 transform translate-x-[${calcTreeOffset}px]` }
  ];
  //! modify tree to be wrapped in a div that handles positioning and size. if that works, do the same for other images
  //todo figure out how to track the center of the tree, then position the text box based on that
  //* resize text box to fit clearing, resize and arrange text to fit box
  //* make rotating text 
  return (
      <div className="min-h-screen relative bg-sunlight overflow-hidden">
        <div id="underground" style={{height:`${Math.floor(calcHeightBounded*.15)}px`}} className="bg-underground w-full absolute bottom-0"/>
        <div id="ground" style={{ height: `${calcHeightBounded}px` }} className={`w-full bg-repeat-x bg-size-[auto_100%] bg-[url("./assets/welcomePage/ground.png")] absolute bottom-0 `}/>
        {images.map((image, index) => (
          <img src={image.src} alt={image.alt} key={index} style={{ height: `${calcHeightBounded}px` }} className={`${imageSetting} ${image.extraClassInfo}`} />
        ))}
        {/* <div className='size-full bg-sunlight absolute left-0 top-0'/> */}
        <img src={tree} alt="Tree" style={{ height: `${calcHeightBounded}%`, translate: `${calcTreeOffset}px 0px` }} className={`w-auto absolute bottom-0 right-1/2`} />
    <div className='absolute left-1/2 top-1/2 translate -translate-1/2 border-2 border-black'>
      <p>Welcome! My name is</p>
      <h1 className="font-welcome text-8xl">Kaitlyn Becker</h1>
      <p>and I'm happy you're here.</p>
    </div>
      </div>
      
  )
}

export default App
