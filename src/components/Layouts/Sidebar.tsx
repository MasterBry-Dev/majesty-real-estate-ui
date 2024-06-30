import PerfectScrollbar from 'react-perfect-scrollbar';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { toggleSidebar } from '../../store/themeConfigSlice';
import AnimateHeight from 'react-animate-height';
import { IRootState } from '../../store';
import { useState, useEffect } from 'react';
import IconCaretsDown from '../Icon/IconCaretsDown';
import IconCaretDown from '../Icon/IconCaretDown';
import IconMenuDashboard from '../Icon/Menu/IconMenuDashboard';
import IconMinus from '../Icon/IconMinus';
import IconMenuChat from '../Icon/Menu/IconMenuChat';
import IconMenuMailbox from '../Icon/Menu/IconMenuMailbox';
import IconMenuTodo from '../Icon/Menu/IconMenuTodo';
import IconMenuNotes from '../Icon/Menu/IconMenuNotes';
import IconMenuScrumboard from '../Icon/Menu/IconMenuScrumboard';
import IconMenuContacts from '../Icon/Menu/IconMenuContacts';
import IconMenuInvoice from '../Icon/Menu/IconMenuInvoice';
import IconMenuCalendar from '../Icon/Menu/IconMenuCalendar';
import IconMenuComponents from '../Icon/Menu/IconMenuComponents';
import IconMenuElements from '../Icon/Menu/IconMenuElements';
import IconMenuCharts from '../Icon/Menu/IconMenuCharts';
import IconMenuWidgets from '../Icon/Menu/IconMenuWidgets';
import IconMenuFontIcons from '../Icon/Menu/IconMenuFontIcons';
import IconMenuDragAndDrop from '../Icon/Menu/IconMenuDragAndDrop';
import IconMenuTables from '../Icon/Menu/IconMenuTables';
import IconMenuDatatables from '../Icon/Menu/IconMenuDatatables';
import IconMenuForms from '../Icon/Menu/IconMenuForms';
import IconMenuUsers from '../Icon/Menu/IconMenuUsers';
import IconMenuPages from '../Icon/Menu/IconMenuPages';
import IconMenuAuthentication from '../Icon/Menu/IconMenuAuthentication';
import IconMenuDocumentation from '../Icon/Menu/IconMenuDocumentation';
import IconEdit from '../Icon/IconEdit';
import IconUser from '../Icon/IconUser';
import IconUsers from '../Icon/IconUsers';

import { faBook, faCopy, faGear, faHouse, faNewspaper, faPenToSquare, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar = () => {
    const [currentMenu, setCurrentMenu] = useState<string>('');
    const [errorSubMenu, setErrorSubMenu] = useState(false);
    const themeConfig = useSelector((state: IRootState) => state.themeConfig);
    const semidark = useSelector((state: IRootState) => state.themeConfig.semidark);
    const location = useLocation();
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const toggleMenu = (value: string) => {
        setCurrentMenu((oldValue) => {
            return oldValue === value ? '' : value;
        });
    };

    useEffect(() => {
        const selector = document.querySelector('.sidebar ul a[href="' + window.location.pathname + '"]');
        if (selector) {
            selector.classList.add('active');
            const ul: any = selector.closest('ul.sub-menu');
            if (ul) {
                let ele: any = ul.closest('li.menu').querySelectorAll('.nav-link') || [];
                if (ele.length) {
                    ele = ele[0];
                    setTimeout(() => {
                        ele.click();
                    });
                }
            }
        }
    }, []);

    useEffect(() => {
        if (window.innerWidth < 1024 && themeConfig.sidebar) {
            dispatch(toggleSidebar());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

    // const list_bg = 'dark:hover:bg-white hover:rounded-2xl hover:text-white hover:font-bold'

    const [isActive, setIsActive] = useState(false);
    return (
        <div className={semidark ? 'dark' : ''}>
        <nav
            className={`sidebar fixed min-h-screen h-full top-0 bottom-0 w-[260px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] z-50 transition-all duration-300 ${semidark ? 'text-white-dark' : ''}`}
        >
            <div className="bg-white dark:bg-[#050a30] h-full flex flex-col">
                <div className="flex justify-center items-center m-2">
                    <div className="ltr:ml-1.5 rtl:mr-1.5">
                        <img src="../assets/images/gmec-icon.jpg" alt="" className='w-28' />
                    </div> 
                </div>
                <PerfectScrollbar className="flex-grow relative">
                    <ul className="relative font-semibold space-y-0.5 p-4 py-0">
                        
                        <h2 className="py-3 px-7 flex items-center justify-center uppercase font-extrabold bg-slate-50 dark:bg-zinc-50 dark:bg-opacity-[0.08] -mx-4 mb-5 text-white-light">
                            <IconMinus className="w-4 h-5 flex-none hidden" />
                            <span className='dark:text-white-light text-xs'>Property Inventory System</span> 
                            
                        </h2>
    
                        <li className="nav-item">
                            <ul>
                                <li className={`nav-item`}>
                                    <NavLink to="/property-inventory" className="group" >
                                        <div className="flex items-center ">
                                         <FontAwesomeIcon icon={faPenToSquare } className="icon" />
                                            <span className="icon-span">Property Inventory</span>
                                        </div>
                                    </NavLink>
                                    
                                </li>
                                <li className={`nav-item`}>
                                    <NavLink to="/property-matching" className="group">
                                        <div className="flex items-center ">
                                          <FontAwesomeIcon icon={faCopy} className='icon'/>
                                            <span className="icon-span">Property Matching</span>
                                        </div>
                                    </NavLink>
                                </li>
                              
                                <li className={`nav-item `}>
                                    <NavLink to="/" className="group">
                                        <div className="flex items-center">
                                            <FontAwesomeIcon icon={faBook} className='icon'/>
                                            <span className="icon-span">Inquiry</span>
                                        </div>
                                    </NavLink>
                                </li>
                                <li className={`nav-item `}>
                                    <NavLink to="/" className="group">
                                        <div className="flex items-center">
                                            <FontAwesomeIcon icon={faUsers} className='icon'/>
                                            <span className="icon-span">Users</span>
                                        </div>
                                    </NavLink>
                                </li>
                                <li className={`nav-item `}>
                                    <NavLink to="/" className="group">
                                        <div className="flex items-center">
                                        <FontAwesomeIcon icon={faNewspaper} className='icon'/>
                                            <span className="icon-span">Reports</span>
                                        </div>
                                    </NavLink>
                                </li>
                                <li className={`nav-item `}>
                                    <NavLink to="/" className="group">
                                        <div className="flex items-center">
                                        <FontAwesomeIcon icon={faGear} className='icon'/>
                                            <span className="icon-span">Settings</span>
                                        </div>
                                    </NavLink>
                                </li>

                                
                            </ul>
                        </li>
                    </ul>
                </PerfectScrollbar>
               
            </div>
        </nav>
    </div>
    
    );
};

export default Sidebar;
