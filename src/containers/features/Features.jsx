import React from 'react'
import { Feature } from '../../components'
import './features.css'

const featuresData = [
  {
    title: 'Instant Gratification',
    text: 'With GPT-3, the world is open to your ideas. Anything you can imagine, you can create.'
  },
  {
    title: 'Machine Learning',
    text: 'GPT-3 draws from a vast database of knowledge, and builds the knowledgebase futher as it discovers more databases naturally on its own.'
  },
  {
    title: 'Artificial Intelligence',
    text: 'GPT-3 is the smartest computer ever designed - it learns like a human, and even has levels of emotional intelligence not seen in other AI.'
  },
  {
    title: 'Helpful Automation',
    text: 'GPT-3 can take everyday tasks off your hands, freeing up your time for more important details.'
  },
]

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now. GPT-3 is here and soon it will be everywhere - get on board.
        </h1>
        <p>
          Sign up early and reap the rewards.
        </p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item,index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Features
