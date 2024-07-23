'use client'

import PageBox from '../atoms/pageBox'

const text = `
{
    'education': {
        'school': 'Northwestern University',
        'majors': ['Computer Science, Environmental Policy and Culture'],
        'year': 'fourth',
    },

    'skills': {
        'frontend': ['React', 'Next.js', 'Javascript', 'Typescript', 'HTML/CSS'],
        'backend': ['Node.js', 'Django', 'Spring'],
        'object-oriented': ['Python', 'C/C++'],
    },

    'interests': {
        'programming': ['software engineering', 'full stack dev'],
        'industries': ['sustainable and green tech','AI','edtech'],
        'hobbies': ['tennis', 'sailing', 'scuba diving', 'guitar'],
    },
}`

const biotext = `
  My name is Annabel Edwards, a recent graduate from Northwestern University in Evanston, IL. I am proficient in Python, JavaScript, C/C++, HTML/CSS, and SQL, with experience in web application development and backend systems. I am passionate about environmental sustainability and motivated to apply my technical skills to make a positive impact. As a determined and hardworking individual, I thrive in dynamic environments and am eager to contribute to innovative projects.`

export default function AboutBox() {
  return (
    <div className="m-20 flex flex-col">
      <PageBox title="Bio" text={biotext} />
      <PageBox title="about-me.json" code={text} />
    </div>
  )
}
