import React from "react";
import{ Link, withRouter} from "react-router-dom";
//withRouter은 다른 컴포넌트를 감싸는 컴포넌트 그리고 router에게 어떠한 정보를 제공
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
text-align:center;
border-bottom: 5px solid ${props=>props.current ? "#3498db" : "transparent"};
transition :  border-bottom .5s ease-in-out;
`;// styled-component에서는 props를 줄수 있따

const Slink = styled(Link)`
height:50px;
display:flex;
align-items:center;
justify-content:center;
`;//가져온 Link를 사용할때 ().


export default withRouter ( ({location:{pathname}}) => (
    <Header>
       
        <List>
            <Item current={pathname === "/"}>
                <Slink  to="/">Movie</Slink>
            </Item>
            <Item current={pathname === "/tv"}>
                <Slink  to="/tv">TV</Slink>
            </Item>
            <Item current={pathname === "/search"}>
                <Slink  to="/search">Search</Slink>
            </Item>
        </List>
    </Header>
));

   
    //withRounter을  놨기 때문에 props에 접근이 가능하다
    //즉, withRouter덕분에 어떠한 컴포넌트와도 연결 할 수 있다.