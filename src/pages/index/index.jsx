import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { posterConfig } from '../../mocks/posterConfig';
import Poster from '../../wxa-plugin-canvas/poster/poster';

export default class Index extends Component {
  /*config = {
    title: 'my index',
    usingComponents: {
      poster: 'wxa-plugin-canvas/poster'
    },
  }*/
  constructor() {
    super();
    this.state = {
      posterConfig: posterConfig.jdConfig
    }
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
        <poster id="poster"
                config={this.state.posterConfig}
                onSuccess={(e) => {
                  console.log('e success: ', e);
                  const { detail } = e;
                  wx.previewImage({
                    current: detail,
                    urls: [detail]
                  })
                }}
                onFail={err => {
                  console.log('err: ', err);
                }}
        >
          <button>点击生成海报inner</button>
        </poster>
      </View>
    )
  }
}
