import React from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';

let marked = require('marked');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: placeholder
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    this.setState({
      markdown: event.target.value
    });
  }
  render() {
    return (
      <div className="App container text-left">
        <div className="row">
          <div className="col-sm-6">
            <Editor markdown={this.state.markdown} onChange={this.handleChange}/>
          </div>
          <div className="col-sm-6">
            <Preview markdown={this.state.markdown}/>
          </div>
        </div>
      </div>
    )
  }
}

const Editor = (props) => {
  return (
    <div style={boxStyle}>
      <h3 style={h3Style} className='text-center'>Editor</h3>
      <textarea id="editor"
        value={props.markdown}
        onChange={props.onChange}
        type="text"
        style={viewStyle} />
    </div>
  )
}
const Preview = (props) => {
  return (
    <div style={boxStyle}>
      <h3 style={h3Style} className='text-center'>Previewer</h3>
      <div id='preview' style={viewStyle} dangerouslySetInnerHTML={{__html: marked(props.markdown)}}></div>
    </div>
  )
}

let boxStyle = {
  width: '90%',
  minHeight: '500px',
  marginLeft: '5%',
  marginRight: '5%',
  marginTop: '5%',
  marginBottom: '5%',
  background: '#e8f3b2'
};
let viewStyle = {
  background: '#e8f3b2',
  width: '100%',
  height: '100%',
  minHeight: '500px',
  marginBottom: '-7px',
  padding: '10px'
};
let h3Style = {
  background: '#bfd163',
  marginBottom: 0
};

export default App;

const placeholder=
`# The markdown trainer
## Hi there, let's practice markdown
Do you know there is an easy way for edit text in Github, is called markdown. While you write you can put _the text in italic_ or  **bold**. And also **_you can use both_**.

It is useful for explain code like this one \`for(var i=0 ;i<total; i++)\`, and also in blocks 

    for(var i=0 ;i<total; i++){
          console.log(messege);
    }
Even there are links: [my portfolio page](https://edcfong.github.io/),
and quotes:
> "Hello world!" - A program

If you need a list, here it is:
* blue
* red
* yellow
  1. yellow one
  2.yellow two

Images? Of course!

![github logo](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRw9oGdsNhFSTFA8voE95hWKFoCRUNHyrTNapDiV2djK6bphRG)
`;