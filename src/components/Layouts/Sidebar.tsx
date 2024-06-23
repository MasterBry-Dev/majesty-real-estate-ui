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

    const list_bg = 'dark:hover:bg-white hover:rounded-2xl hover:text-white hover:font-bold'


    return (
        <div className={semidark ? 'dark' : ''}>
        <nav
            className={`sidebar fixed min-h-screen h-full top-0 bottom-0 w-[260px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] z-50 transition-all duration-300 ${semidark ? 'text-white-dark' : ''}`}
        >
            <div className="bg-white dark:bg-black h-full flex flex-col">
                <div className="flex justify-between items-center px-4 py-3">
                    <NavLink to="/" className="main-logo flex items-center shrink-0">
                        <IconUsers className='ms-3 w-fit'/>
                        <span className="text-base ltr:ml-1.5 rtl:mr-1.5 font-semibold align-middle lg:inline dark:text-white-light font-bold">{'Majesty Real Estate'}</span>
                    </NavLink>
    
                    <button
                        type="button"
                        className="collapse-icon w-8 h-8 rounded-full flex items-center hover:bg-gray-500/10 dark:hover:bg-dark-light/10 dark:text-white-light transition duration-300 rtl:rotate-180"
                        onClick={() => dispatch(toggleSidebar())}
                    >
                        <IconCaretsDown className="m-auto rotate-90" />
                    </button>
                </div>
                <PerfectScrollbar className="flex-grow relative">
                    <ul className="relative font-semibold space-y-0.5 p-4 py-0">
                        <h2 className="py-3 px-7 flex items-center justify-center uppercase font-extrabold bg-slate-50 dark:bg-zinc-50 dark:bg-opacity-[0.08] -mx-4 mb-5 text-white-light">
                            <IconMinus className="w-4 h-5 flex-none hidden" />
                            <span className='dark:text-white-light'>{'Sections'}</span>
                        </h2>
    
                        <li className="nav-item">
                            <ul>
                                <li className={`nav-item ${list_bg}`}>
                                    <NavLink to="/property-inventory" className="group">
                                        <div className="flex items-center ">
                                            <IconEdit fill={true} className="group-hover:!text-primary shrink-0 !text-white" />
                                            <span className="ltr:pl-3 rtl:pr-3 text-white dark:text-[#506690] dark:group-hover:text-white-dark group-hover:text-white-light">{('Property Inventory')}</span>
                                        </div>
                                    </NavLink>
                                </li>
                                <li className={`nav-item ${list_bg} `}>
                                    <NavLink to="/apps/mailbox" className="group">
                                        <div className="flex items-center ">
                                            <IconMenuMailbox className="group-hover:!text-primary shrink-0 !text-white" />
                                            <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] group-hover:text-base dark:group-hover:text-white-dark group-hover:text-white-light">{('Property Matching')}</span>
                                        </div>
                                    </NavLink>
                                </li>
                              
                                <li className={`nav-item ${list_bg}`}>
                                    <NavLink to="/apps/notes" className="group">
                                        <div className="flex items-center">
                                            <IconMenuNotes className="group-hover:!text-primary  shrink-0 !text-white" />
                                            <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] group-hover:text-base dark:group-hover:text-white-dark group-hover:text-white-light">{('Inquiry')}</span>
                                        </div>
                                    </NavLink>
                                </li>
                                <li className={`nav-item ${list_bg}`}>
                                    <NavLink to="/apps/scrumboard" className="group">
                                        <div className="flex items-center">
                                            <IconUser fill={true} className="group-hover:!text-primary  shrink-0 !text-white" />
                                            <span className="ltr:pl-3 rtl:pr-3 text-black group-hover:text-white-light dark:text-[#506690] group-hover:text-base dark:group-hover:text-white-dark group-hover:text-white-light">{('Users')}</span>
                                        </div>
                                    </NavLink>
                                </li>
                                <li className={`nav-item ${list_bg}`}>
                                    <NavLink to="/apps/contacts" className="group">
                                        <div className="flex items-center">
                                            <IconMenuContacts className="group-hover:!text-primary  shrink-0 !text-white" />
                                            <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] group-hover:text-base dark:group-hover:text-white-dark group-hover:text-white-light">{('Reports')}</span>
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
