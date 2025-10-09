import UserContext from "../utils/context/UserContext";
import User from "./User";
import UserClass from "./UserClass";
import React from "react";
// const About=()=>{
//     return (
//         <div>
//         <div>About Page</div>
//         <User name="Renu (Function)" location="India" contact="renu@gmail.com"/>
//         <UserClass name="Renu (Class)" location="India" contact="renu@gmail.com"/>
//         </div>
//     )
// };
// export default About;

class About extends React.Component{
    constructor(props){
        console.log("parent constructor called")
        super(props);

        this.state={
            count:0,
        }
    }

    componentDidMount(){
        console.log("Parent componentDidMount is called")
    }
    render(){
        console.log("Parent render is called")
        return (
             <div>
                <div className="text-green-500">LoggedInUser: 
                    <UserContext.Consumer>
                        {(data)=><h1>{data.loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div>
         <div>About Page</div>
         {/* <User name="Renu (Function)" location="India" contact="renu@gmail.com"/> */}
         {/* <UserClass name="Renu1 (Class)" location="India" contact="renu@gmail.com"/> */}
         <UserClass name="Renu2 (Class)" location="India" contact="renu@gmail.com"/>
        </div>
        )
    }
};

export default About;
