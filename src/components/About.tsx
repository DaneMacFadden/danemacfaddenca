import Textbox from "./Textbox"
import Button from "./Button"

function About() {
  return (
    <>
      <Textbox>This section contains a bit about me and my hobbies outside of computer science so you can get to know me! I'm an avid amateur astronomer. I even published an astronomy paper while I was in university.
        <br /><Button link="https://www.jdso.org/volume20/number4/MacFadden_463_474.pdf">Click here to see my paper!</Button>
      </Textbox>
    </>
  )
}

export default About