import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { posterConfig } from '../mocks/posterConfig';
import Poster from 'wxa-plugin-canvas/miniprogram_dist/poster/poster';

export default class Index extends Component {
  config = {
    title: 'my index',
    usingComponents: {
      poster: 'wxa-plugin-canvas/poster'
    },
  }

  componentDidMount () { }

  componentDidShow () { }

  genPoster = () => {
    console.log('generating poster...');
    Poster.create()
  };

  render () {
    return (
      <View className='index'>
        <Text onClick={this.genPoster}>点击生成海报</Text>
        <poster id="poster" config={posterConfig.demoConfig}>
          <button>点击生成海报inner</button>
        </poster>
      </View>
    )
  }
}
