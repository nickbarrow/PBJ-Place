import React from 'react'
import {
  useAuthUser,
  withAuthUser,
  withAuthUserTokenSSR
} from 'next-firebase-auth'
import Header from '../components/Header'
import DemoPageLinks from '../components/DemoPageLinks'

const Feed = () => {
  const AuthUser = useAuthUser()
  return (
    <>
      <Header displayName={AuthUser.displayName || AuthUser.email} signOut={AuthUser.signOut} />
      <div className="container">
        <h3>Feed</h3>
        <p>
          Yall dis da feed
        </p>
      </div>
    </>
  )
}

export const getServerSideProps = withAuthUserTokenSSR()()

export default withAuthUser()(Feed)