import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 
import './demo.scss';


import Demo1 from "./demolist/Demo1";
var DemoArray = [{"example":<Demo1 />,"title":" 拖动列宽","code":"/**\n *\n * @title 拖动列宽\n * @description 拖动改变列宽\n *\n */\n\nimport React, { Component } from 'react';\n\nimport {\n  Icon, Label, FormControl, Form,\n} from 'tinper-bee';\nimport AcDragWidthLayout from '../../src/index';\n\n// import AcDragWidthLayout from 'ac-drag-width-layout';\n// import 'ac-drag-width-layout/dist/index.css';\n\nconst { Content } = AcDragWidthLayout;\nconst { FormItem } = Form;\n\nclass Demo1 extends Component {\n  render() {\n    const { getFieldProps } = this.props.form;\n\n    return (\n      <div className=\"demoPadding\">\n        <AcDragWidthLayout\n          minWidth={200} // 最小宽\n          contentHeight={200} // 容器的高\n        >\n          {/* 左边内容 */}\n          <Content>\n            <FormItem>\n              <FormControl\n                placeholder=\"请输入姓名\"\n                {...getFieldProps('name', {\n                  validateTrigger: 'onBlur',\n                })}\n              />\n            </FormItem>\n\n          </Content>\n\n          {/* 右边内容 */}\n          <Content>\n            xxxxxx1\n          </Content>\n        </AcDragWidthLayout>\n      </div>\n    );\n  }\n}\n\n\n","desc":" 拖动改变列宽"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
    }
    handleClick=()=> {
        this.setState({ open: !this.state.open })
    }
    fCloseDrawer=()=>{
        this.setState({
            open: false
        })
    }

    render () {
        const { title, example, code, desc, scss_code  } = this.props;

        const header = (
            <div>
                <p className='component-title'>{ title }</p>
                <p>{ desc }</p>
                <span className='component-code' onClick={this.handleClick}> 查看源码 <i className='uf uf-arrow-right'/> </span>
            </div>
        );
        return (
            <Col md={12} id={title.trim()} className='component-demo'>
            <Panel header={header}>
                {example}
            </Panel>
           
            <Drawer className='component-drawerc' title={title} show={this.state.open} placement='right' onClose={this.fCloseDrawer}>
            <div className='component-code-copy'> JS代码 
                <Clipboard action="copy" text={code}/>
            </div>
            <pre className="pre-js">
                <code className="hljs javascript">{ code.replace('../../src/index',COMPONENT).replace('../../src',COMPONENT) }</code>
            </pre >
            {!!scss_code ?<div className='component-code-copy copy-css'> SCSS代码 
                <Clipboard action="copy" text={scss_code}/>
            </div>:null }
                { !!scss_code ? <pre className="pre-css">
                 <code className="hljs css">{ scss_code }</code>
                 </pre> : null }
            </Drawer>
        </Col>
    )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
            <Row>
            {DemoArray.map((child,index) => {

                return (
            <Demo example= {child.example} title= {child.title} code= {child.code} scss_code= {child.scss_code} desc= {child.desc} key= {index}/>
    )

    })}
    </Row>
    )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('root'));
