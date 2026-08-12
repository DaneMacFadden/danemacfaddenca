import Textbox from "./Textbox"
import Button from "./Button"

// To Do: Implement expanding image cards

function About() {
  return (
    <>
      <Textbox>This section contains a bit about me and my hobbies outside of computer science so you can get to know me! I'm an avid amateur astronomer. I even published an astronomy paper while I was in university.
        <br /><Button link="https://www.jdso.org/volume20/number4/MacFadden_463_474.pdf">Click here to see my paper!</Button><br />This paper was a project for extra credit in my university
        astronomy class. The study covers double star system observations that we took using Skynet's PROMPT telescopes. Skynet is a website that gives students and researchers access to remote robotic telescopes around the world.
        Just enter what celestial object you want to look at, and Skynet schedules a telescope to take pictures for you. One of these telescopes is located just outside Saskatoon, and is maintained by Dr. Daryl Janzen of the Univeristy of Saskatchewan,
        who also taught most of my astronomy classes throughout university. While I was enrolled in one of his classes, he let me help out fixing a problem the telescope was having. Since I love both computers and astronomy, that was quite an exciting experience!
        <br /><h1>IMAGE CARDS WILL GO HERE</h1><br />
        During the astronomy class, Dr. Janzen told the class about a program called ERIRA. It's a study abroad program, hosted by Dr. Daniel Reichart from the University of North Carolina at Chapel Hill, who also hosts Skynet. ERIRA takes
        place at the Greenbank Observatory in West Virginia. There, I got to use and learn all about radio telescopes, which I likely would never have seen otherwise. See the expandable cards below to learn more!
        <br /><h1>IMAGE CARDS WILL GO HERE</h1><br />
      </Textbox>
    </>
  )
}

export default About