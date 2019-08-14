/* eslint-disable prefer-const,react/no-unused-state,react/prop-types */
import React, { Component } from 'react';

import { getHeight, uuid } from './utils';

import './index.less';

class DragWidthLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contentWidth: '100%',
      widthList: [],
    };
  }


  componentDidMount() {
    let { children, widthList, stretchEnd } = this.props;

    // 默认设为 ‘200px’
    if (!widthList) {
      widthList = children.map(item => '200px');
    }

    // 最后一个自动适应
    if (stretchEnd) {
      // 获取除了最后一个元素外的其他子元素的宽
      const otherChildrenWidth = widthList.slice(0, -1)
        .reduce((total, item) => {
          return parseInt(total) + parseInt(item);
        });
      // 可调节宽的数量
      const resizeWidth = widthList.length * 5;
      // 获取组件的宽
      const componeParent = ReactDOM.findDOMNode(this);
      widthList[widthList.length - 1] = componeParent.offsetWidth - parseInt(otherChildrenWidth) - resizeWidth + 'px';

    }


    this.setState({
      widthList,
    });


  }

  widthList = [];


  onMouseDownLine = (index, e) => {
    const { widthList } = this.state;

    let { allowDragEnd = false } = this.props;


    const _this = this;
    e = e || window.event;

    const startX = e.clientX;


    const { parentElement } = e.target;
    const parentNodeWidth = parentElement.parentNode.offsetWidth;
    const currentOffsetLeft = parentElement.offsetLeft;

    this.widthList = [...widthList];


    // 鼠标移动事件
    document.onmousemove = function (e) {
      const endX = e.clientX;


      let moveLen = endX - startX;

      const leftIndex = index;
      const rightIndex = index + 1;


      const leftWidth = parseInt(_this.widthList[leftIndex]);
      const rightWidth = parseInt(_this.widthList[rightIndex]);


      // 往右拖动
      if (moveLen > 0 && rightWidth && leftWidth) {
        if (rightWidth && (rightWidth <= (moveLen + 10))) {
          moveLen = rightWidth - 10;
        }
        widthList[leftIndex] = `${leftWidth + moveLen}px`;
        widthList[rightIndex] = `${rightWidth - moveLen}px`;
      }


      // 往左拖动
      let leftMove = (moveLen * (-1)); // 复数变成正数

      if (leftMove > 0 && rightWidth && leftWidth) {
        if (leftWidth <= leftMove) {
          leftMove = leftWidth - 10;
        }
        widthList[leftIndex] = `${leftWidth - leftMove}px`;
        widthList[rightIndex] = `${rightWidth + leftMove}px`;
      }

      // 最后一个 往右拖动
      if (moveLen > 0 && Number.isNaN(rightWidth) && allowDragEnd) {
        const maxWidth = parentNodeWidth - currentOffsetLeft;
        let tempWidth = leftWidth + moveLen;

        if (maxWidth < (tempWidth + 10)) {
          tempWidth = maxWidth - 10;
        }
        widthList[leftIndex] = `${tempWidth}px`;
      }

      // 最后一个 往左拖动
      if (moveLen < 0 && Number.isNaN(rightWidth) && allowDragEnd) {
        if (leftWidth <= -moveLen) {
          moveLen = (-leftWidth + 10);
        }
        widthList[leftIndex] = `${leftWidth + moveLen}px`;
      }
      _this.setState({ widthList });
    };


    // 鼠标松开事件
    document.onmouseup = function (evt) {
      _this.widthList = [...widthList];
      document.onmousemove = null;
      document.onmouseup = null;
      evt.target.releaseCapture && evt.target.releaseCapture();
    };

    e.target.setCapture && e.target.setCapture();
    return false;
  };


  render() {
    const _this = this;
    let { children, contentHeight, contentWidth = '100%' } = _this.props;
    const { resizeLeft, widthList } = _this.state;

    if (!contentHeight) {
      contentHeight = getHeight();
    }


    return (
      <div
        style={{
          width: contentWidth,
          height: contentHeight,
        }}
        className="alt-content"
      >

        {children && children.map((item, index) => (
          <div className="alt-left-body" key={uuid()} style={{ height: contentHeight }}>

            <div className="alt-width-left" style={{ width: widthList[index] }}>
              {item}
            </div>
            <div
              className="resize"
              // onMouseDown={this.onMouseDownLine}
              onMouseDown={() => this.onMouseDownLine(index)}
              style={{ left: resizeLeft }}
            />
          </div>
        ))}


      </div>
    );
  }
}

export default DragWidthLayout;
