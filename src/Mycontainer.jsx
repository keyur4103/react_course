import React from 'react'
import Mylist from './Mylist'

function fetchdata() {
  return new Promise((resolve)=>{
    setTimeout(() => {
        resolve(['first','second','third']);
    }, 3000);
  });
}

class Mycontainer extends React.Component{
    state = {items:['test']};
    componentDidMount(){
        fetchdata().then((items) => this.setState({items}));
    }
    render(){
        return <Mylist {...this.state}/>
    }
}
export default Mycontainer;
