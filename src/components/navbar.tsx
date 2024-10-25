import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="w-full shadow-lg bg-gradient-to-b from-primary to-primary-foreground text-primary-foreground">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <h1 className="text-2xl font-bold text-primary">Bawo Game</h1>
                    </div>

                    <div className="hidden md:flex space-x-4">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "text-secondary-foreground underline" : "text-primary-foreground hover:underline"
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/game"
                            className={({ isActive }) =>
                                isActive ? "text-secondary-foreground underline" : "text-primary-foreground hover:underline"
                            }
                        >
                            Play Game
                        </NavLink>
                        <NavLink
                            to="/how-to-play"
                            className={({ isActive }) =>
                                isActive ? "text-secondary-foreground underline" : "text-primary-foreground hover:underline"
                            }
                        >
                            How to Play
                        </NavLink>
                    </div>

                    {/* Mobile Menu */}
                    <div className="md:hidden">
                        <button id="menu-btn" className="text-primary-foreground focus:outline-none">
                            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Items */}
            <div className="md:hidden">
                <div className="space-y-1 px-2 pb-3">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "block px-3 py-2 text-secondary-foreground underline" : "block px-3 py-2 text-primary-foreground hover:underline"
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/game"
                        className={({ isActive }) =>
                            isActive ? "block px-3 py-2 text-secondary-foreground underline" : "block px-3 py-2 text-primary-foreground hover:underline"
                        }
                    >
                        Play Game
                    </NavLink>
                    <NavLink
                        to="/how-to-play"
                        className={({ isActive }) =>
                            isActive ? "block px-3 py-2 text-secondary-foreground underline" : "block px-3 py-2 text-primary-foreground hover:underline"
                        }
                    >
                        How to Play
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
