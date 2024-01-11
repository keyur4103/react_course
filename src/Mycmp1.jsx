
import React from 'react'
class Mycmp1 extends React.Component {


render(){
    const{disabled,text} = this.props;
  return (
    <>
      <button  disabled={disabled}>{text}</button>
    </>
  )
}};

export default Mycmp1;
