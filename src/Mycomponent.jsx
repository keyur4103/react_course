import React from 'react'

class Mycomponent extends React.Component {
    state = {
        first: true,
        second: false,
        str1: "anvfnfjnv"
    }
    render() {
        const {first,second,str1} = this.state;
        return (<>
            <section>
                <button disabled={first}>button</button>
                <br/>
                <button disabled={second}>button</button>
                <br/>
            
                {str1}
            </section>

        </>
        )
    };
}

export default Mycomponent;