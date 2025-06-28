import React from 'react'
import ChannelBlueCTA from "./components/ChannelBlueCTA"
import ChannelBlueHero from "./components/ChannelBlueHero"
import ChannelBlueFeatures from "./components/ChannelBlueFeatures"
import ChannelBlueVideo from "./components/ChannelBlueVideo"

function ChannelBlue() {
  return (
    <div className='channel-blue-page'>
      <ChannelBlueHero />
      <ChannelBlueFeatures />
      <ChannelBlueVideo />
      <ChannelBlueCTA />
      
    </div>
  )
}

export default ChannelBlue