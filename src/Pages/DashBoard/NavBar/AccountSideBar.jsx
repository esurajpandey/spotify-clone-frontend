import React from 'react'
import { Link,useLocation } from 'react-router-dom';
import styled from 'styled-components'
import user from '../../../assets/svg/account/user.svg';
import { sideMenu } from './content';

function AccountSideBar() {
  const location = useLocation().pathname;

  return (
    <AccountMenuContainer>
      <ul>
        <li className='user_icon'><img src={user} alt=" " /></li>
        {
          sideMenu.map(item => {
            return (
              <List id={item?.title} isActive={location === item?.path}>
                <ActiveContainer isActive={location === item?.path} />
                <Link to={item?.path}>
                  <img src={item?.icon} alt=" " />
                  <span>{item.title}</span>
                </Link>
              </List>
            )
          })
        }
      </ul>
    </AccountMenuContainer>
  )
}


const ActiveContainer = styled.div`
  width: 0.3rem;
  height: 100%; 
  background-color: ${({ isActive }) => (isActive ? '#71e759' : 'transparent')};
`


const List = styled.li`
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  position: relative;
  font-size: 16px;
  line-height: 24px;
  background-color:rgb(27,27,27);

  a{
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap:1rem;   
    padding: 1rem 1.5rem;
    width: 100%;
    img{
      width: 1.3rem;
      height: 1.3rem;
      fill: white;
    }

    span{
      display: flex;
      align-items: center;
      color: ${({isActive}) => (isActive ? 'white' : "#6e6b6b")}
    }
  }
  &:hover{
    ${ActiveContainer}{
      background-color:#71e759;
    }
  }

`
const AccountMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color:rgb(27,27,27);
  ul{
    list-style-type: none;
    display: flex;
    flex-direction: column;
    width: 19rem;
   

    .user_icon{
      display: flex;
      width: 64px;
      height: 64px;
      margin: 30px auto;
      border-radius: 50%;
      background: rgb(22, 23, 25);
      overflow: hidden;
      img{
        position: relative;
        top: 4px;
        width: 4rem;
        height: 4rem;
      }
    }
  }

`


export default AccountSideBar