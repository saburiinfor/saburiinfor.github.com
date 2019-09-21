import  React, {component}  from 'react'
import ReactDOM from 'react-dom';
import './style.css'
import { blockStatement } from '@babel/types';


class Myinfo extends component{
    constructor(props){
        super(props);
    logic =(event) =>{
      const x =document.getElementById('flip').style.display;
    }
        }
    render(){
        return(
               <div>
                     <header>
                    <h1>Saburi Informatics on REACT</h1>
                    <h2 >App about saburi informatics</h2>
                    </header>

                
                    <button  className="a" onclick={()=>this.logic()}> ABOUT US</button>
                    <img src="https://media.licdn.com/dms/image/C5103AQG-63J4nkPgoQ/profile-displayphoto-shrink_200_200/0?e=1568246400&v=beta&t=No6uOQ8aLGuN8jk76NvR7mW5dLsMjhIfgLGAHBnAhmg" alt="sbimage"/>
                    <br></br>
                    <p className="a"> 
                    Welcome to Saburi Informatics! We provide consultation and services in world wide web space. 
                    Anything related to UI/UX, web or mobile development, we would help you. 
                    We have a vast experience in a different type of IT industries so would be able to help in any domain you need. We operate from Hyderabad, Telangana, India for now.

                    One more thing, don't forget to like or follow this page where many updates in our space would be shared. Thanks a lot for showing interest and visiting our page...
                    </p>
                    <br></br>
                    <footer>
                    <div className="info"> 
                        Saburi Informatics,
                        E-0402 Aparna Hillpark,Hyderabad 500050,
                        mob:91-9100663684,
                        Email:Saburi.informatics@gmail.com
                    </div>
</footer>
              
       
               </div>

              );
            }
        }
        




ReactDOM.render(<Myinfo/>, document.getElementById('root'));


