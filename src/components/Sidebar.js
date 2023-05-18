import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen);
    if(!isMenuOpen) return null;
    return (
        <div className="p-5 shadow-lg col-span-3">
            <div>
                <ul>
                    <Link to="/">
                        <li className="flex items-center cursor-pointer"><img className="h-8 mt-2" alt="home" src="https://static.thenounproject.com/png/3574480-200.png" /> <span className="text-sm">Home</span></li>
                    </Link>
                    <li className="flex items-center cursor-pointer"><img className="h-7 mt-2" alt="shorts" src="data:image/png;base64,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" /> <span className="text-sm">Shorts</span></li>
                    <li className="flex items-center cursor-pointer"><img className="h-5 m-2" alt="subscriptions" src="https://cdn.icon-icons.com/icons2/2248/PNG/512/youtube_subscription_icon_136007.png" /> <span className="text-sm">Subscriptions</span></li>
                </ul>
                <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
                <ul>
                    <li className="flex items-center cursor-pointer"><img className="h-8" alt="home" src="https://static.thenounproject.com/png/3574480-200.png" /> <span className="text-sm">Library</span></li>
                    <li className="flex items-center cursor-pointer"><img className="h-8" alt="shorts" src="https://static.thenounproject.com/png/3574480-200.png" /> <span className="text-sm">History</span></li>
                    <li className="flex items-center cursor-pointer"><img className="h-8" alt="subscriptions" src="https://static.thenounproject.com/png/3574480-200.png" /> <span className="text-sm">Your Videos</span></li>
                    <li className="flex items-center cursor-pointer"><img className="h-8" alt="home" src="https://static.thenounproject.com/png/3574480-200.png" /> <span className="text-sm">Watch Later</span></li>
                    <li className="flex items-center cursor-pointer"><img className="h-8" alt="shorts" src="https://static.thenounproject.com/png/3574480-200.png" /> <span className="text-sm">Liked Videos</span></li>
                </ul>
                <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
                <h1 className="text-sm mb-2 font-bold">Subscriptions</h1>
                <ul>
                    <li className="flex items-center mt-2 cursor-pointer"><img className="h-6 mr-2" alt="home" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" /> <span className="text-sm">JS Cafe</span></li>
                    <li className="flex items-center mt-2 cursor-pointer"><img className="h-6 mr-2" alt="shorts" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" /> <span className="text-sm">Akshay Saini</span></li>
                    <li className="flex items-center mt-2 cursor-pointer"><img className="h-6 mr-2" alt="subscriptions" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" /> <span className="text-sm">Cricbuzz</span></li>
                </ul>
                <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
                <ul>
                    <li className="flex items-center cursor-pointer"><img className="h-8" alt="home" src="https://static.thenounproject.com/png/3574480-200.png" /> <span className="text-sm">Settings</span></li>
                    <li className="flex items-center cursor-pointer"><img className="h-8" alt="subscriptions" src="https://static.thenounproject.com/png/3574480-200.png" /> <span className="text-sm">Help</span></li>
                    <li className="flex items-center cursor-pointer"><img className="h-8" alt="subscriptions" src="https://static.thenounproject.com/png/3574480-200.png" /> <span className="text-sm">Send Feedback</span></li>
                </ul>
            </div>
            <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
            <div className="text-xs text-gray-400">© 2023 Google LLC</div>
        </div>
    )
}

export default Sidebar;