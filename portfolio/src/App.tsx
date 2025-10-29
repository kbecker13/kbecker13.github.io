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
  const calcHeight = Math.floor((width / height) * 80);
  const calcHeightBounded = Math.min(Math.max(calcHeight, 100), 200);
  const imageSetting = `w-auto absolute bottom-0 object-cover`;
  const ultraWidescreenBreakpoint = 200;

  type ImageData = {
    src: string;
    alt: string;
    extraClassInfo: string;
  }
  const images: ImageData[] = [
{src: bgTreeL, alt: "Background Tree Left", extraClassInfo: `${calcHeight>=ultraWidescreenBreakpoint?"left-0":"right-1/2 transform -translate-x-1/10"} object-right` },
{src: bgTreeR, alt: "Background Tree Right", extraClassInfo: `${calcHeight>=ultraWidescreenBreakpoint?"right-0":"left-1/2 transform -translate-x-1/6"} object-left` },
{src: mgTreeL, alt: "Midground Tree Left", extraClassInfo: `${calcHeight>=ultraWidescreenBreakpoint?"left-0":"right-1/2 "} object-right` },
{src: mgTreeR, alt: "Midground Tree Right", extraClassInfo: `${calcHeight>=ultraWidescreenBreakpoint?"right-0":"left-1/2 transform -translate-x-1/6"} object-left` },
{src: bushL, alt: "Bush Left", extraClassInfo: `${calcHeight<100?"right-1/2":"left-0"} object-right` },
{src: bushR, alt: "Bush Right", extraClassInfo: `${calcHeight<100?"left-1/2":"right-0 "} object-left` },
{src: tree, alt: "Tree", extraClassInfo: `left-1/2 transform -translate-x-1/2` }
  ];
  return (
      <div className="min-h-screen relative bg-sunlight overflow-hidden">
        <div id="underground" style={{height:`${Math.floor(calcHeightBounded*.15)}%`}} className="bg-underground w-full absolute bottom-0"/>
        <div style={{ height: `${calcHeightBounded}%` }} className={`w-full bg-repeat-x bg-size-[auto_100%] bg-[url("./assets/welcomePage/ground.png")] absolute bottom-0 `}/>
        {images.map((image, index) => (
          <img src={image.src} alt={image.alt} key={index} style={{ height: `${calcHeightBounded}%` }} className={`${imageSetting} ${image.extraClassInfo}`} />
        ))}
        
      </div>
  )
}

export default App
