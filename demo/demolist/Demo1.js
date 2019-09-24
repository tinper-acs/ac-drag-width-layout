/**
 *
 * @title 拖动列宽
 * @description 拖动改变列宽
 *
 */

import React, { Component } from 'react';

import {
  Icon, Label, FormControl, Form,
} from 'tinper-bee';
import AcDragWidthLayout from '../../src/index';

// import AcDragWidthLayout from 'ac-drag-width-layout';
// import 'ac-drag-width-layout/dist/index.css';

const { Content } = AcDragWidthLayout;
const { FormItem } = Form;

class Demo1 extends Component {
  render() {
    const { getFieldProps } = this.props.form;

    return (
      <div className="demoPadding">
        <AcDragWidthLayout
          minWidth={200} // 最小宽
          contentHeight={200} // 容器的高
        >
          {/* 左边内容 */}
          <Content>
            <FormItem>
              <FormControl
                placeholder="请输入姓名"
                {...getFieldProps('name', {
                  validateTrigger: 'onBlur',
                })}
              />
            </FormItem>

          </Content>

          {/* 右边内容 */}
          <Content>
            xxxxxx1
          </Content>
        </AcDragWidthLayout>
      </div>
    );
  }
}

export default Form.createForm()(Demo1);
