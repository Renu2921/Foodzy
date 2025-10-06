// import React from "react";

// class UserClass extends React.Component{

//     constructor(props){
//     super(props);
//     this.state={
//         count:0,
//         count2:2
//     }
//     console.log(this.props.name+" constructor called");
//     }
//     componentDidMount(){
//          console.log( this.props.name+"componentDidMount called");
//     } 
//     render(){
//          console.log(this.props.name+"render called");
//         const {name,location, contact}=this.props;
//         const {count, count2}=this.state; 
//         return (
//              <div className="about-card">
//                  <h2>Count: {count}</h2>
//                  <button onClick={()=>{
//                     this.setState({
//                         count:this.state.count+1,
//                         count2:this.state.count2+1,
//                     })
//                  }}>Increase Count</button>
//             <h2>Count2: {count2}</h2>
//             <h2>Name: {name}</h2>
//             <p>Location:  {location}</p>
//             <p>Contact: {contact}</p>
//         </div>
//         )
//     }
// };

// export default UserClass;

import React from "react";

class UserClass extends React.Component{

    constructor(props){
    super(props);
    this.state={
        userData:{
        name:"hell0",
        contact:"renu@gmail.com"
        }
    }
    console.log(" constructor called");
    }
     async componentDidMount(){
         console.log("componentDidMount called");
         const response=await fetch(" https://api.github.com/users/renu");
         const jsonData=await response.json()
         this.setState({
            userData:jsonData,
         })
    } 
    componentDidUpdate(){
        console.log("componentDidUpdate is called");
    };

    componentWillUnmount(){
        console.log("componentWillUnmount is called");
    }
    render(){
        console.log("render called")
       const {name,avatar_url}=this.state.userData
        return (
             <div className="about-card">
                <img src={avatar_url}/>
            <h2>Name: {name}</h2>
            <p>Contact:renu@gmail.com</p>
        </div>
        )
    }
};

export default UserClass;