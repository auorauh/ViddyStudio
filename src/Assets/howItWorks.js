import Script from './Script.png';
import Shoot from './Shoot.jpg';
import Download from './Download.jpg';
import Edit from './Edit.jpg';
export const howItWorksData = [
  {
    title: "Script",
    description: "Import or write your script in a bullet point fashion.",
    content: <img src={Script} style={{ width: "auto", height: "55%", objectFit: "cover" }} />
  },
  {
    title: "Shoot",
    description: "Pair Viddy from your phone or computer with any camera and record your script one line at a time, redoing each take until you get it right.",
    content: <img src={Shoot} style={{ width: "auto", height: "55%", objectFit: "cover" }} />
  },
  {
    title: "Download",
    description: "After recording, Viddy creates an Editor’s Guide download with precise timestamps showing where your good takes are within your raw footage.",
    content: <img src={Download} style={{ width: "auto", height: "55%", objectFit: "cover" }} />
  },
  {
    title: "Edit Faster",
    description: "Sync the Editor’s Guide with your footage and Instantly see where to make cuts without re-watching the footage or searching for edits manually. Edit 30 minutes of footage in under 5 minutes.",
    content:<img src={Edit} style={{ width: "auto", height: "70%", objectFit: "cover" }}/>
  },
];