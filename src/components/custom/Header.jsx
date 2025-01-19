import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { UserButton, useUser } from '@clerk/clerk-react'

function Header() {
    const { isSignedIn } = useUser();
    return (
        <div className="p-3 py-4 px-5 flex justify-between shadow-md bg-purple-200">
            <Link to={'/dashboard'}>
                <div
                    className='text-3xl font-medium text-purple-600 pl-20'
                    style={{ fontFamily: 'Pacifico, cursive' }}
                >
                    Resumegen
                </div>
            </Link>
            {isSignedIn ? (
                <div className="flex gap-6 items-center pr-28">
                    <Link to={"/dashboard"}>
                        <Button variant="dashboard" className='border-slate-600 hover:border-slate-950 bg-slate-300 hover:bg-slate-400'>Dashboard</Button>
                    </Link>
                    {/* Increase the size of UserButton */}
                    <div className='pt-2' style={{ transform: 'scale(1.5)', transformOrigin: 'center' }}>
                        <UserButton />
                    </div>
                </div>
            ) : (
                <div className="pr-24">
                    <Link to={'/auth/sign-in'}>
                        <Button>Get Started</Button>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default Header;
