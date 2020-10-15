import React,{useState} from 'react'
import './tennis.css'
 import Modal from 'react-modal'
import SigninPage from '../pages/signin';
Modal.setAppElement('#root');
function Tresult({score}) {
    const [modalIsOpen,setModalIsOpen]=useState(false)
    let grade = 0;
 
          if(score>=287 && score<=318 ){
         
         grade = 1}
          
         else if(score>=255 && score <=286) {
             grade=2
        } else if(score>=223 && score <=254){
             grade=3
        }else if(score>=191 && score <=222){
             grade=4
        }else if(score>=159 && score <=190){
            grade=5
        }else if(score>=127 && score <=158){
             grade=6
        }else if(
           score>=95 && score <=126
        ){
             grade=7
        }else if(score>=63 && score <=94){
          grade=8
        }else if(score>=31 && score <=62) {
            grade=9
        }else if(score>= -51 && score<=30){
             grade=10
        } 
    return (
        <div className="result">
         <h4>Congratulations- Your UTN is:</h4>  
    <h1>{grade}</h1>

              <p>Keep practicing to get to a UTN 5</p>
              <p>Opt in to our Monthly Newsletter for best tips in your sport.</p>    
                       <button onClick={()=>setModalIsOpen(true)}>Sign Up</button>
            
                       <Modal   isOpen={modalIsOpen}
                       shouldCloseOnOverlayClick={false}
                       style={
                            {
                                 overlay:{
                                   
   
                                 },
                                 content:{
                                   backgroundColor: '#252d4a',
                                      display:'flex',
                                      flexDirection:'column',
                                      justifyContent:'center',
                                      alignItems:'center',
                                 }
                            }
                       }
                       >
                             <SigninPage/>   
                            <button onClick={()=>setModalIsOpen(false)}>Close</button>
                       </Modal>
                        
                       
               <p>No spam-it is not our style-Opt out anytime</p>
              <button className="grade"  type="submit">Graded 27,9888 people and counting</button>
              
       </div>
    )
}

export default Tresult
 
 