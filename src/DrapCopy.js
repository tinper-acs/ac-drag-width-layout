/* eslint-disable prefer-const,react/no-unused-state,react/prop-types */
import React, { Component } from 'react';

import { getHeight, uuid } from './utils';

import './index.less';

class DragWidthLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resizeLeft: '0px',
      leftWidth: 'calc(30% - 5px)',
      rightWidth: '70%',
      contentWidth: '100%',
      widthList: [],
    };
  }


  componentDidMount() {

    let { widthList, contentWidth } = this.props;
    this.setState({
      widthList,
      contentWidth,
    });


    // let { contentWidth = '100%', leftWidth = '200px', rightWidth } = this.props;
    // if (!rightWidth) {
    //   rightWidth = `calc(100% - 5px - ${leftWidth})`;
    // }
    // this.setState({
    //   contentWidth,
    //   leftWidth,
    //   rightWidth,
    // });
  }

  widthList = [];


  onMouseDownLine = (index, e) => {

    console.log('index', index);

    const { widthList } = this.state;


    const _this = this;
    e = e || window.event;

    const startX = e.clientX;


    const { parentElement, offsetLeft, offsetWidth } = e.target;


    this.widthList = [...widthList];

    console.log('xxxxx', this.widthList);


    // console.log("offsetLeft, offsetWidth",offsetLeft, offsetWidth);

    document.onmousemove = function (e) {
      const endX = e.clientX;

      // console.log("endX",endX)

      // let moveLen = offsetLeft + (endX - startX) - 40;
      // console.log('xxx', moveLen);
      // const maxT = parentElement.clientWidth - offsetWidth;
      // if (moveLen < 150) {
      //   moveLen = 150; // 最小宽
      // }
      //
      // if (moveLen > maxT - 150) {
      //   moveLen = maxT - 150; // 最大宽
      // }
      //
      // console.log(moveLen);

      let moveLen = endX - startX;

      const leftIndex = index;
      const rightIndex = index + 1;


      const leftWidth = parseInt(_this.widthList[leftIndex]);
      const rightWidth = parseInt(_this.widthList[rightIndex]);

      console.log('leftWidth', leftWidth);


      // 往右拖动
      if (moveLen > 0 && rightWidth) {
        if (leftWidth && (leftWidth + 5) <= moveLen) {
          moveLen = leftWidth - 5;
        }

        widthList[leftIndex] = (leftWidth + moveLen) + 'px';
        widthList[rightIndex] = rightWidth ? (rightWidth - moveLen) + 'px' : '0px';
        // debugger
      }

      // 往左拖动
      if (moveLen < 0 && rightWidth) {
        if (leftWidth && rightWidth <= -moveLen) {
          moveLen = -rightWidth;
        }
        widthList[leftIndex] = (leftWidth + moveLen) + 'px';
        widthList[rightIndex] = rightWidth ? (rightWidth - moveLen) + 'px' : '0px';
      }

      // 最后一个 往右拖动
      if (moveLen > 0 && Number.isNaN(rightWidth)) {
        widthList[leftIndex] = (leftWidth + moveLen) + 'px';
        console.log('widthList[rightIndex]', widthList[rightIndex]);
      }

      if (moveLen < 0 && Number.isNaN(rightWidth)) {
        if (leftWidth <= -moveLen) {
          moveLen = -leftWidth;
        }
        widthList[leftIndex] = (leftWidth + moveLen) + 'px';
      }


      console.log('moveLen', rightWidth, rightWidth, moveLen);

      // const rightWidth = parseInt(widthList[index]);
      // const leftWidth = parseInt(widthList[index - 1]);
      //
      // if (moveLen > 0 && rightWidth <= moveLen) {
      //   moveLen = rightWidth - 5;
      // }
      // if (moveLen < 0 && leftWidth <= -moveLen) {
      //   moveLen = leftWidth - 5;
      // }
      //
      // console.log('moveLen', moveLen);
      //
      // widthList[index - 1] = moveLen + 'px';
      // widthList[index] = (rightWidth - (endX - startX)) + 'px';

      //
      _this.setState({ widthList });

      // const [leftWidth, rightWidth] = [`${moveLen}px`, `${parentElement.clientWidth - moveLen - 5}px`];
      // _this.setState({
      //   resizeLeft: moveLen,
      //   leftWidth,
      //   rightWidth,
      // });
    };
    document.onmouseup = function (evt) {
      document.onmousemove = null;
      document.onmouseup = null;
      evt.target.releaseCapture && evt.target.releaseCapture();
    };

    e.target.setCapture && e.target.setCapture();
    return false;
  };


  render() {
    const _this = this;
    const { children } = _this.props;
    const { resizeLeft, contentWidth, widthList } = _this.state;


    return (
      <div
        style={{
          width: contentWidth,
          height: getHeight(),
        }}
        className="alt-content"
      >

        {children && children.map((item, index) => {

          return (
            <div className="alt-left-body" key={uuid()}>


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
          );
        })}


      </div>
    );
  }
}

export default DragWidthLayout;
