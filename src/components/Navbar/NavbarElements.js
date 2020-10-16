import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom';

 
export const Nav =styled.nav`
// background: #4b6cb7;  
// background: -webkit-linear-gradient(to right, #182848, #4b6cb7);  
// background: linear-gradient(to right, #182848, #4b6cb7);  

// background:transparent;
font-family: 'Times New Roman', Times, serif;
   height: 80px;
    margin-top: -80px;
  
   display:flex;
   justify-content:center;
   align-items:center;
   font-size:1rem;
   position:sticky;
   top:0;
   z-index:10;

   @media screen and(max-width:960px){
       transition:0.8s all ease
   }

`;

 
export const NavbarContainer =styled.div`

display:flex;
justify-content:space-between;
height:80px;
z-index:1;
width:100%;
padding:24px;
 max-width:1200px;

`;
export const NavLogo = styled.div `
 
justify-self:flex-start;
cursor:pointer;
 
display:flex;
align-items:center;
margin-left:0px;
 
width:600px;


`;
export const Logoimage=styled.img`
 width:200px;
 height:20px;


`

export const MobileIcon =styled.div`
 
display:none;
 

@media screen and (max-width: 950px) {
    display:block;
    position:absolute;
    top:0;
    right:0;
    
    transform:translate(-100%,60%);
    font-size:1.8rem;
     cursor:pointer;
    color: #01bf71;

}
`;

export const NavMenu=styled.ul`
 display:flex;
 align-items:center;
 list-style:none;
 text-align:center;
 margin-right:-22px;
 @media screen and (max-width:950px) {
     display:none;
 }

`;
export const NavItem =styled.li`
height:80px;

`;

export const NavLinks =styled(LinkR)`
//  color:#ddd;
 
display:flex;
align-items:center;
text-decoration:none;
padding:0 1rem;
height:100%;
cursor:pointer;
&:hover {
    border-bottom:3px solid #01bf71;
}
 

`;