import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from '@clerk/clerk-react'

const Header = () => {
  return (
    <header className="flex flex-row my-6 px-4">
      <div>
        <SignedOut>
          <button className="btn btn-blue">
            <SignInButton />
          </button>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  )
}

export default Header
