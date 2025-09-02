function Sidebar() {
    return (
        <aside className="h-screen">
            <nav className="h-full flex flex-col bg-white border-r shadow-sm">
                <div className="p-4 flex justify-between items-center">
                    <img 
                        src="https://logoipsum.com/artwork/397" 
                        alt="Logo"
                        className="w-32"
                    />
                    <button className="p-1.5 rounded-lg hover:bg-gray-100">
                        ‹
                    </button>
                </div>
            </nav>
        </aside>
    );
}

export default Sidebar;
