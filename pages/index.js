import React from 'react'
import {
  withAuthUser,
  withAuthUserTokenSSR,
  AuthAction
} from 'next-firebase-auth'
import Link from 'next/link'
import Header from '../components/Header'
import FirebaseAuth from '../components/FirebaseAuth'

const Home = () => {
  
  return (
    <div>
      <Header hideAuth="true" />
      <div>
        <h3>Home</h3>
        <FirebaseAuth />
        <Link href="/feed">Feed</Link>
      </div>
    </div>
  )
}
export const getServerSideProps = withAuthUserTokenSSR({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
  appPageURL: {
    destination: '/feed'
  }
})()

export default withAuthUser({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
  appPageURL: {
    destination: '/feed'
  }
})(Home)
