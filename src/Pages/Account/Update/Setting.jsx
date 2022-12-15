import React from 'react'
import styled from 'styled-components'
import NotificationItem from '../../Element/NotificationItem'
import { AiOutlineMail, AiOutlineMobile } from 'react-icons/ai';
import TextButton from '../../../components/TextButton';

function Setting() {
  return (
    <NotificationSettingContainer>
      <div className="setting_header">
        <h1>Notification settings</h1>
      </div>
      <div className="setting_icons">
        <div className="icons_email_push">
          <div className="email email_push">
            <AiOutlineMail />
            <p>EMAIL</p>
          </div>
          <div className="push email_push">
            <AiOutlineMobile />
            <p>PUSH</p>
          </div>
        </div>
      </div>

      <div className="list_settings">
        <NotificationItem
          header='Music & Artist Recommendations'
          desc='Music and new releases from artists you follow or might like'
        />

        <NotificationItem
          header='Podcast & Show Recommendations'
          desc='Podcasts and shows we think you might like'
        />

        <NotificationItem
          header='Audiobooks'
          desc='Audiobooks from authors you follow or might like'
        />

        <NotificationItem
          header='In-person Concerts & Events'
          desc='Updates about in-person events we think you’ll like'
        />

        <NotificationItem
          header='Livestreams & Virtual Events'
          desc="Updates about virtual events we think you'll like"
        />

        <NotificationItem
          header='Music & Artist Recommendations'
          desc='Music and new releases from artists you follow or might like'
        />

        <NotificationItem
          header='Spotify Features & Tips'
          desc='News and tips to get the most out of your Spotify services'
        />

        <NotificationItem
          header='Spotify Offers & Bundles'
          desc='Special offers for Spotify Premium and our partners'
        />

        <NotificationItem
          header='Spotify Experiences Made for You'
          desc='Fun Spotify experiences based on your listening'
        />

        <NotificationItem
          header='News & Cultural Moments'
          desc='Notifications related to news, society, and other notable moments'
        />

        <NotificationItem
          header='Artist & Creator Merchandise'
          desc='The latest merch from your favorite creator'
        />

        <NotificationItem
          header='Surveys'
          desc='Feedback surveys to help us improve'
        />
      </div>


      <SettingButtons>
        <div className="cancel">
          <button type='button'>
            <span>Cancel</span>
          </button>
        </div>

        <div className="save">
          <TextButton
            type={'submit'}
            text="Save"
            bg="#1ed760"
            fg="black"
          />
        </div>
      </SettingButtons>
      
    </NotificationSettingContainer>
  )
}


const SettingButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap:2rem;
  margin-top: 1.5rem;
  padding-right: 2.5rem;
  .cancel{
    display: flex;
    align-items: center;
    justify-content: center;
    button{
      background: none;
      padding-top: 0.6rem;
      padding-bottom: 0.4rem;
      border: 0;
      border-bottom: 3px solid transparent;
      span{
        font-size: 0.9rem;
        letter-spacing: 0.05rem;
        font-weight: 900;
        color:#6a6a6a;
      }
      &:focus-within{
        border-bottom: 3px solid grey;
      }
      &:hover{
        span{
          color:black;
        }
        transform: scale(1.08);
      }
    }
  }
`
const NotificationSettingContainer = styled.div`
  padding-left: 3rem;
  padding-top: 2.5rem;
  padding-right: 0.5rem;
  padding-bottom: 5rem;
  width: 100%;

  .setting_header{
    h1{
      font-size: 2.8rem;
      font-family: 'product-sans';
    }
  }

  .setting_icons{
    display: flex;
    padding: 0rem 3.9rem;
    justify-content: flex-end;
    margin-top: 3em;
    .icons_email_push{
      display: flex;
      gap:3rem;
      .email_push{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap:0.5rem;
        svg{
          font-size: 1.4rem;
        }
        p{
          box-sizing: border-box;
          -webkit-tap-highlight-color: transparent;
          margin-block: 0px;
          font-size: 0.625rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-family: var(--font-family,CircularSp,CircularSp-Arab,CircularSp-Hebr,CircularSp-Cyrl,CircularSp-Grek,CircularSp-Deva,var(--fallback-fonts,sans-serif));
          color: inherit;
        }
      }
    }
  }

  .list_settings{
    display: flex;
    flex-direction: column;
    gap:1.8rem;
    margin-top: 2rem;
  }
`

export default Setting