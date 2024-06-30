'use client'

import PageBox from '../atoms/pageBox'

const project = `
{
    'StayFresh': {
        'frontend': ['Javascript, React', 'Material UI'],
        'backend': 'Firebase',
        'methodology': 'agile',
        'role': 'full-stack',
    },
}`
const project1 = `
{
    'WildcatQuest': {
        'frontend': ['Javascript, React', 'Material UI'],
        'backend': 'Firebase',
        'methodology': 'agile',
        'role': 'full-stack',
    },
}`

const project2 = ` 
{
    'Wildhacks': {
        'frontend': ['React', 'Javascript', 'Typescript'],
        'backend': ['Django'],
        'role': 'front-end dev',
    },
}`

const project3 = ` 
{
    'GrooveVault': {
        'frontend': ['React', 'Javascript'],
        'backend': ['Node.js', 'AWS', 'Python'],
        'role': 'full-stack',
    },
}`

const project4 = ` 
{
    'McGuireWoods Search Engine': {
        'frontend': ['HTML', 'CSS', 'Node.js'],
        'backend': ['Flask'],
        'role': 'full-stack',
    },
}`

const project5 = ` 
{
   'PhotoApp (Instagram Clone)': {
        'frontend': ['React', Javascript],
        'backend': ['Flask', 'Node.js'],
        'role': 'full-stack',
    },
}`

export default function ProjectBox() {
  return (
    <div className="m-20 flex flex-col justify-between">
      <PageBox
        title="stay-fresh.json"
        titleLink={'https://github.com/394-w24/GroceryHelper'}
        code={project}
      />
      <PageBox
        title="wildcat-quest.json"
        titleLink={'https://github.com/394-w24/WildcatQuest'}
        code={project1}
      />
      <PageBox
        title="wildhacks-website.json"
        titleLink={'https://www.wildhacks.net/'}
        code={project2}
      />
      <PageBox title="groove-vault.json" code={project3} />
      <PageBox
        title="mcguirewoods-search.json"
        titleLink={'https://github.com/annabelge7/CS-Law-McGuireWoods'}
        code={project4}
      />
      <PageBox
        title="photo-app.json"
        titleLink={'https://github.com/annabelge7/photo-app-final'}
        code={project5}
      />
    </div>
  )
}
