import * as React from "react"
import Card from "../components/Card"
import logo from "../images/landle.png"
import pencl from "../images/parachute.png"
import speech from "../images/speech.png"
import {CommandLineIcon, EnvelopeIcon, AcademicCapIcon} from '@heroicons/react/24/outline'
const awards = [
  
    {
      "title": "Regeneron ISEF Finalist (ROBO074)",
      "date": "May 2022",
      "location": "International Science and Engineering Fair, Atlanta, GA",
      "description": "I was awarded a Best of Fair award at the 2022 Alabama Science and Engineering Fair for my work in autonomous aircraft landings, which qualified me for the International Fair. Along the way, I earned Best of Category in both my state and regional fair, as well as the Future Rocket Scientist Award from Auburn University.",
    },
    {
      "title": "American Regional Mathematics League (ARML) Division B - 1st Place",
      "date": "May 2022",
      "location": "University of Alabama at Huntsville, Huntsville, AL",
      "description": "Representing Team Alabama, we were awarded the 1st Place for in-person Division B teams across the nation. The team was comprised of 15 of the top high school math students in the state.",
    },
    {
      "title": "MAA AMC 12 Distinguished Honor Roll",
      "date": "November 2021",
      "location": "Mathematical Association of America",
      "description": "I was awarded a Distinguished Honor Roll for my performance on the 2021 AMC 12 (Fall), a 25-question, 75-minute, multiple-choice examination in high school mathematics. I scored in the top 1% of all students who took the exam.",
    },
    {
      "title": "Alabama State Math Competition Top 3",
      "date": "April 2019 - April 2022",
      "location": "Alabama Council of Teachers of Mathematics",
      "description" : "I achieved a Top 3 score in three consecutive years in the Alabama State Math Competition. This includes a 2nd place finish in the Comphrehensive Division, a 3rd place finish in the Algebra II/Trigonometry Division, and a 2nd place finish in the Geometry Division. In 2022, I was also part of the 4-person state championship team.",
    },
    {
      "title": "Hudson Alpha Tech Challenge Winner",
      "date": "April 2021",
      "location": "Hudson Alpha Institute for Biotechnology, Huntsville, AL",
      "description": "I was awarded the top prize in the Hudson Alpha Tech Challenge for my work in developing a novel method for the detection of common cancers called Teddy. We used a combination of machine learning and friendly UI/UX to design a easy-to-use site for both patients and doctors to perform early cancer diagnosis.",
    },
    {
      "title": "National Merit Scholarship Semifinalist",
      "date": "September 2022",
      "location": "National Merit Scholarship Corporation, Evanston, IL",
      "description": "I was awarded a Semifinalist award in the 2023 National Merit Scholarship Program. This award is based on my PSAT scores and is a recognition of my academic achievement.",
    }
  
]
const IndexPage = () => {
  return (
    <main>
      <div className="p-10">
      <h1 className="text-8xl font-bold text-sky-900 m-5">
        Hi, I'm Daniel!
      </h1>
      <p className="text-4xl text-black m-5 font-light">
        I'm a High School senior at the Alabama School of Fine Arts interested in aviation, robotics, entrepreneurship, and how these fields interact.
      </p>
      <div className="flex">
      <img className="h-96 m-5 rounded-lg" src={speech}></img>
      <div>
      <h1 className="text-3xl text-sky-800 font-black m-5">Contact Me:</h1>
      <div className="flex items-center">
        <EnvelopeIcon className="w-8 h-8 ml-5 mr-1"></EnvelopeIcon>
        <a href="mailto: dz7379@gmail.com" className="text-xl font-light hover:text-blue-300">dz7379@gmail.com</a>
      </div>
      <div className="flex items-center mt-2">
        <CommandLineIcon className="w-8 h-8 ml-5 mr-1"></CommandLineIcon>
        
        <a href="https://github.com/el-agua" className="text-xl font-light hover:text-blue-300">github.com/el-agua</a>
      </div>
      <div className="flex items-center mt-2">
        <AcademicCapIcon className="w-8 h-8 ml-5 mr-1"></AcademicCapIcon>
        <a href="https://drive.google.com/file/d/13c2Dz4fJ6JkwSzATy-pBgHrVoM5wRh4H/view?usp=sharing" className="text-xl font-light hover:text-blue-300">Link to CV</a>
      </div>
      </div>
      </div>
      <h1 className="text-5xl text-sky-700 font-black m-5">What I'm working on now:</h1>
      <div className="m-5 font-light text-2xl">I am working with Dr. Vamvoudakis at Georgia Tech to create a cobotics system where delivery drones and trucks interact to create efficient logistic solutions.</div>
      </div>
    
      <div className="bg-slate-50 p-10">
      <h1 className="text-5xl text-sky-700 font-black m-5">Projects</h1>
      <p className="text-2xl font-light  text-black m-5">
        Click on each project to learn more about it!
      </p>
      <div className="grid justify-items-center lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-3 gap-4">
      <div className="flex items-center">
      <div>
      <div className="flex w-full justify-center">
        <a href="/landle">
      <img className="h-96" src={logo}></img>
      </a>
      </div>
      <div className="font-light text-lg px-5">LanDLE uses the power of Deep Learning Ensembles to provide a onboard solution for autonomous landing of fixed-wing aircraft, circumventing outside radio systems. This work was presented as part of the 2022 Regeneron ISEF Fair.</div>
      </div>
      </div>
      <div className="flex items-center">
      <div>
      <div className="h-96 flex items-center">
      <div className="w-full">
      <div className="flex w-full justify-center">
        <a href="https://pencltests.netlify.app/">
        <img className="h-52" src={pencl}></img>
        </a>
        </div>
      <div className="flex w-full justify-center">
        <a href="https://pencltests.netlify.app/" className="text-black text-4xl font-black mt-2">Pencl Testing</a>
      </div>
      </div>
      </div>
      <div className="font-light text-lg px-5">Looking for a way to host math competitions during the pandemic, I created Pencl, an online testing platform that makes it easy to create and share problems as well as host contests. This app achieved recognition at the 2021 Alabama Governor's CS Summit. </div>
      
      </div>
      </div>
      <div>
      <div className="h-96 flex items-center justify-center">
      <a href="https://devpost.com/software/teddy-f246gj" className="text-8xl text-black font-semibold">Teddy<strong className="text-blue-400">.</strong></a>
      </div>
      <div className="font-light text-lg px-5">Teddy is a genetic counseling app that uses the power of machine learning. Patients screening for common cancers and their doctors are able to recieve a pre-diagnosis within seconds. This app won the 1st Place Prize ($1000) at the 2021 Hudson Alpha Genomics Hackathon</div>
      </div>
      </div>
      </div>
      <div className="p-10">
      <h1 className="text-5xl text-sky-700 font-black m-5">Awards and Honors</h1>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5 place-items-strech">
      {awards.map(award => (
          <Card color="bg-slate-50" width="w-full">
          <div>
            <h1 className="text-sky-600 font-bold text-2xl">{award.title}</h1>
            <div className="mt-2 mb-2">
            <Card color="bg-slate-200" padding="pt-1 pb-1 pr-2 pl-2" width="w-fit"><div className="text-md font-thin">{award.date}</div></Card>
            </div>
            <h2 className="italic mt-2 mb-2">{award.location}</h2>
            <p className="font-light">{award.description}</p>
          </div>
          </Card>
        ))}
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

export default IndexPage

export const Head = () => <title>Home Page</title>
