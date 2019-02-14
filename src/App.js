import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Design from './Design';
import Music from './Music';
import Video from './Video';
import Button from './Button';
import axios from 'axios';

const text1= 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';
const text2= 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).';
const text3= 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.'

class App extends Component {


  constructor(props){
    super(props);
    this.state={
      text: '',
      button: '',
      data: []
    }
  }

  componentDidMount() {

    axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
        this.setState({data: response.data})
        console.log(this.state.data);
    })
}
  show= (text)=>{
    this.setState({button: <Button clear={this.clear}/>})
    this.setState({text: <TestComponent items={text}/>})

     
  }

  clear=()=>{


    this.setState({text: ''})
    this.setState({button: ''})

  }

  

  render() {


    return (
      <div class='wrapper'>
        <div class="widget">
          <h3 class="widget-title">Категории</h3>
          <ul class="widget-list">
            <li><Design showText={()=>this.show(this.state.data.slice(3,15))}/></li>
            <li><Music showText={()=>this.show(this.state.data.slice(15,27))}/></li>
            <li><Video showText={()=>this.show(this.state.data.slice(27,39))}/></li>
          </ul>
        </div>
        <p>{this.state.text}  {this.state.button}</p>
        <div class='footer'><div class='text'>by lilvodu 2019 </div><img src="https://5.imimg.com/data5/PY/XK/MY-44752249/instagram-500x500.png" alt="instagram link"/></div>
      </div>
    );
  }
}

function TestComponent(props){
    
  return(
      
      <ul>
          {props.items.map( (el, i) => <li id={i}> {el.title}</li>)} 
      </ul>
  )
}
export default App;
