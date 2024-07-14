import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton,
} from '@clerk/clerk-react'
import { Button } from '../ui/button'

const Header = () => {
  return (
    <header className="container flex flex-row justify-between items-center py-4">
      <span className="">GraphQL Demo Project</span>
      <div>
        <SignedOut>
          <SignInButton>
            <Button className="btn btn-blue">Sign in</Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <div className="flex gap-6">
            <UserButton />
            <SignOutButton>
              <Button className="btn btn-blue">Sign out</Button>
            </SignOutButton>
          </div>
        </SignedIn>
      </div>
    </header>
  )
}

export default Header
