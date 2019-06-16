/**
 *
 * @title 拖动列宽
 * @description 拖动改变列宽
 *
 */

import React, { Component } from 'react';

import AcDragWidthLayout from '../../src/index';


const { Content, } = AcDragWidthLayout;

class Demo1 extends Component {
  render() {
    return (
      <div className="demoPadding">
        <AcDragWidthLayout

          // widthList={['200px', '200px', '200px', '200px']} // 每一个元素的宽
          contentHeight='500px'
          // contentWidth='1200px' // 组件的宽
          stretchEnd={true} // 最后一列拉伸
          // rightWidth={}
        >
          <Content>
            xxxxxx0
          </Content>
          <Content>
            xxxxxx1
          </Content>
          <Content>
            xxxxxx2
          </Content>

          <Content>
            xxxxxx3
          </Content>

        </AcDragWidthLayout>
      </div>
    );
  }
}

export default Demo1;
