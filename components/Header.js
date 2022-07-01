import React from 'react'
import Link from 'next/link'
import {
  useAuthUser,
  withAuthUser,
  withAuthUserTokenSSR
} from 'next-firebase-auth'

const Header = (hideAuth = false) => {
  const AuthUser = useAuthUser()
  return (
    <div className="Header">
      <Link href="/feed">
        <div className="brand">
          <span className="bread">P</span>
          <span className="pbj">B</span>
          <span className="bread">J</span>
        </div>
      </Link>
      {hideAuth ? null : (
        <>
          {AuthUser.displayName ? (
            <h2 className="hover-hidden-text" onClick={() => { AuthUser.signOut() }}>
              <span className="hidden-text">logout</span>
              {displayName}.</h2>
          ) : (
            <h2>Guest.</h2>
          )}
        </>
      )}
    </div>
  )
}

export default withAuthUser()(Header)