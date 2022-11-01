
import * as React from "react"
import isef from "../images/isef.JPG"
import canada from "../images/canada.png"
import {ArrowLeftIcon, ChartPieIcon, ClipboardIcon} from '@heroicons/react/24/outline'
import landle from "../images/landle2.png"
const LandlePage = () => {
  return (
    <main>
        
        <div className="p-10">
        <a href="/">
        <ArrowLeftIcon className="w-8 h-8 ml-5 mr-1 hover:text-teal-500"></ArrowLeftIcon>
        </a>
        <div className="flex justify-center">
        <img src={landle} className="w-2/5 text-center mb-5">
        </img>
        </div>
        <div className="grid grid-cols-2 place-items-center gap-4">
            <div>
            <h1 className="text-4xl text-teal-500 font-black m-5">Why did I start this project?</h1>
            <p className="font-light text-lg px-5">
            I learned about my research problem when a local news station announced that the FAA banned telecom companies from installing 5G radios at the local Birmingham Shuttlesworth International Airport, due to concerns about interference with the landing instruments of landing airplanes.
            As a young aviator and seeing the rise of 5G in our daily lives, I was curious on whether I could engineer a solution where aircraft landing technologies and 5G telecom could coexist.
            </p>
            </div>
            <div className="flex justify-center">
        <img className="w-4/5 m-5" src={isef}></img>
        </div>
        <div>
        <h1 className="text-4xl text-teal-500 font-black m-5">Abstract</h1>
            <p className="font-light text-lg px-5">
            Accurate and robust autonomous landing of fixed-wing aircraft will revolutionize economic, industrial, and military missions that are generally dangerous or suboptimal for humans to perform. However, current semi-autonomous airport-based landing solutions are costly and unsustainable. There is a need for an aircraft-based solution that is both inexpensive and does not interfere with nearby radio frequencies. Humans pilots already perform safe landings, so imitation learning can be leveraged to produce an effective behavioral policy. An effective behavioral policy needs to be both accurate and confident. To simultaneously model behavior and uncertainty, we propose a novel solution based on Bayesian methods, the Landing Deep Learning Ensemble model (Lan-DLE), which is a combination of 10 different deep neural networks trained on different datasets. Lan-DLE learns fly-by-wire landing actions based on onboard sensor outputs, while also assessing the confidence of those predictions. Then, a policy is implemented to decide when the model is confident enough to make a safe prediction. Results demonstrate that Lan-DLE can accurately clone the throttle inputs of a human pilot during landing, with maximum confidence in the flare phase of landing. We also show Lan-DLE accurately generalizes well to unseen data disjoint from the training dataset.
            </p>
        </div>
        <div>
        <h1 className="text-4xl text-teal-500 font-black m-5">Media</h1>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/19ntO3u2kXk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div className="flex items-center justify-center mt-5">
        <ClipboardIcon className="w-8 h-8 ml-5 mr-1"></ClipboardIcon>
        <a href="https://projectboard.world/isef/finalist-booth/robo074---airplane-landing-with-deep-learning-ensembles" className="text-xl font-light hover:text-teal-400">Link to ISEF ProjectBoard</a>
        </div>
        <div className="flex items-center justify-center mt-5">
        <ChartPieIcon className="w-8 h-8 ml-5 mr-1"></ChartPieIcon>
        <a href="https://drive.google.com/file/d/1aZkFx4fES3Zd2ACj-kqC4fpqsUqbu_gW/view?usp=sharing" className="text-xl font-light hover:text-teal-400">Link to Poster</a>
        </div>
        </div>
        </div>
        </div>
        <footer className="h-24 bg-slate-50">
          <div className="flex items-center justify-center h-full">
            <div className="text-sm text-slate-300 italic">
I think we could build a better one. -William Boeing</div>
          </div>
        </footer>
    </main>
  )
}

export default LandlePage

export const Head = () => <title>Landle</title>