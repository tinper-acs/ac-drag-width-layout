/* eslint-disable prefer-const,react/no-unused-state,react/prop-types */
import React, { Component } from 'react';

import { getHeight, uuid } from './utils';

import './index.less';

class DragWidthLayout extends Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    const { minWidth = 200, id = 'drag', contentHeight } = this.props;

    let rightWidth = `calc(100% - 5px - ${minWidth}px)`; // 右边的宽

    let resize = document.getElementById(`${id}-resize`);
    let left = document.getElementById(`${id}-left`);
    let right = document.getElementById(`${id}-right`);
    let box = document.getElementById(`${id}-box`);

    // 设置右边的宽
    right.style.width = rightWidth;
    // 外层容器的高
    box.style.height = `${getHeight()}px`;
    if (contentHeight) {
      box.style.height = `${contentHeight}px`;
    }

    // 鼠标按下事件
    resize.onmousedown = function (e) {
      let startX = e.clientX;
      resize.left = resize.offsetLeft;
      // 鼠标移动事件
      document.onmousemove = function (e) {
        let endX = e.clientX;
        let moveLen = resize.left + (endX - startX);
        let maxT = box.clientWidth - resize.offsetWidth;
        // 最小宽
        if (moveLen < minWidth) {
          moveLen = minWidth;
        }
        // 最大宽
        if (moveLen > maxT - minWidth) {
          moveLen = maxT - minWidth;
        }

        resize.style.left = moveLen;
        // 左边 表格的宽
        left.style.width = `${moveLen}px`;
        // 右边 表格的宽
        right.style.width = `${box.clientWidth - moveLen - 5}px`;
      };
      // 鼠标弹起事件
      document.onmouseup = function (evt) {
        document.onmousemove = null;
        document.onmouseup = null;
        resize.releaseCapture && resize.releaseCapture();
      };
      resize.setCapture && resize.setCapture();
      return false;
    };
  }


  render() {
    const { minWidth = 200, id = 'drag', children } = this.props;

    return (
      <div id={`${id}-box`} className="drag-box">
        <div id={`${id}-left`} className="drag-left" style={{ width: minWidth }}>
          {children && children[0]}
        </div>
        <div id={`${id}-resize`} className="drag-resize"/>
        <div id={`${id}-right`} className="drag-right">
          {children && children[1]}
        </div>
      </div>
    );
  }
}

export default DragWidthLayout;
