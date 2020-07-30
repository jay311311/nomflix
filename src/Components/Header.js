import React from "react";
import{ Link} from "react-router-dom";
// router에서 주어진 Link를 사용 & link는 해당 페이지가 내 어플리케이션에 있으면 javascript 방식으로 가게해줌 
import styled from "styled-components";

const Header = styled.header`

position: fixed;
top:0;
left:0;
width:100%;
height:50px;
display:flex;
align-items:center;
padding : 0 10px;
z-index:10;
background-color: rgba(20,20,20,0.5);
box-shadow: 0px 1px 5px 2px rgba(0,0,0,0.8)
`;

const List =styled.ul`
display:flex;

`;

const Item = styled.li`
width:80px;
height:50px;
text-align:center

`;

const Slink = styled(Link)`
height:50px;
display:flex;
align-items:center;
justify-content:center;
`;//가져온 Link를 사용할때 ().


export default () => (
<Header>
    <List>
        <Item>
            <Slink  to="/">Movie</Slink>
        </Item>
        <Item>
            <Slink  to="/tv">TV</Slink>
        </Item>
        <Item>
            <Slink  to="/search">Search</Slink>
        </Item>
    </List>
</Header>
)