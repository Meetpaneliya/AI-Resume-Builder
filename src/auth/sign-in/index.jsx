import { SignIn } from '@clerk/clerk-react'

function SignInPage() {
  return (
    <div
      className="flex justify-center items-center min-h-screen bg-gray-600"
      style={{
        backgroundImage: `url('https://www.transparenttextures.com/patterns/cubes.png')`,
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto',
      }}
    >
      <div className="p-6 rounded-lg shadow-2xl max-w-md w-full">
        <SignIn />
      </div>
    </div>
  )
}

export default SignInPage
