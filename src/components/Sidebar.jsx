import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  BellIcon,
} from "@heroicons/react/24/solid";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import logo from "../assets/main_logo.png";
import profile from "../assets/profile.jpg";
import manageLogo from "../assets/manageProducts.png";
import transactionsLogo from "../assets/transactionsLogo.png";
import ordersIcon from "../assets/ordersIcon.png";
import logoutIcon from "../assets/logoutIcon.png";
import dashboardIcon from "../assets/dashboardIcon.png";
import Analytics from "../pages/Analytics";
import Reporting from "../pages/Reporting";
import Orders from "../pages/Orders";
import Products from "../pages/Products";
import { useNavigate } from "react-router-dom";

export function Sidebar() {
  const [open, setOpen] = React.useState(0);
  const [activeContent, setActiveContent] = React.useState(<Analytics />);
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const [showLogoutModal, setShowLogoutModal] = React.useState(false);
  const [lastClickedContent, setLastClickedContent] = React.useState(
    <Analytics />
  );

  const navigate = useNavigate();

  function logOutConfirm() {
    navigate("/");
  }

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const updateContent = (content) => {
    // Set active content based on the clicked menu item
    if (content === "Analytics") {
      setActiveContent(<Analytics />);
      setLastClickedContent(<Analytics />);
    }
    if (content === "Reporting") {
      setActiveContent(<Reporting />);
      setLastClickedContent(<Reporting />);
    }
    if (content === "Orders") {
      setActiveContent(<Orders />);
      setLastClickedContent(<Orders />);
    }
    if (content === "Products") {
      setActiveContent(<Products />);
      setLastClickedContent(<Products />);
    }

    if (content === "Log Out") {
      setActiveContent(null);
      setShowLogoutModal(true);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleCancelLogout = () => {
    setShowLogoutModal(false);
    setActiveContent(lastClickedContent);
  };

  return (
    <div className="flex h-[100vh]">
      {/* Sidebar */}
      <Card
        className={`h-full w-64 transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:block absolute lg:relative z-10 overflow-y-auto fixed top-0 left-0 bottom-0 rounded-none border-r border-gray-300`}
      >
        <div className="absolute top-4 right-4 z-10  cursor-pointer lg:hidden">
          <button
            onClick={closeSidebar} // Close sidebar when X is clicked
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
          >
            <XMarkIcon className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        <div className="sticky top-0 pt-6 pb-4 mb-2">
          <img src={logo} className="w-40 h-25 mx-auto" />
        </div>

        <List className="overflow-y-auto flex-1">
          {/* Dashboard Accordion */}
          <Accordion
            open={open === 1}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${
                  open === 1 ? "rotate-180" : ""
                }`}
              />
            }
          >
            <ListItem className="p-0" selected={open === 1}>
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className="border-b-0 p-3"
              >
                <ListItemPrefix>
                  <img src={dashboardIcon} className="h-6 w-6 text-[#724E2C]" />
                </ListItemPrefix>
                <Typography color="blue-gray" className="mr-auto font-normal">
                  Dashboard
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <ListItem
                  className="cursor-pointer"
                  onClick={() => updateContent("Analytics")}
                >
                  <ListItemPrefix>
                    <ChevronDownIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  <Typography>Analytics</Typography>
                </ListItem>
                <ListItem
                  className="cursor-pointer"
                  onClick={() => updateContent("Reporting")}
                >
                  <ListItemPrefix>
                    <ChevronDownIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  <Typography>Reporting</Typography>
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>

          {/* E-Commerce Accordion */}
          <Accordion
            open={open === 2}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${
                  open === 2 ? "rotate-180" : ""
                }`}
              />
            }
          >
            <ListItem className="p-0" selected={open === 2}>
              <AccordionHeader
                onClick={() => handleOpen(2)}
                className="border-b-0 p-3"
              >
                <ListItemPrefix>
                  <img src={manageLogo} className="h-6 w-6 text-[#724E2C]" />
                </ListItemPrefix>
                <Typography color="blue-gray" className="mr-auto font-normal">
                  Manage Products
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <ListItem
                  className="cursor-pointer"
                  onClick={() => updateContent("Orders")}
                >
                  <ListItemPrefix>
                    <ChevronDownIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  <Typography>Add Products</Typography>
                </ListItem>
                <ListItem
                  className="cursor-pointer"
                  onClick={() => updateContent("Products")}
                >
                  <ListItemPrefix>
                    <ChevronDownIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  <Typography>View Products</Typography>
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>

          {/* Transactions  Accordion */}
          <Accordion
            open={open === 4}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${
                  open === 4 ? "rotate-180" : ""
                }`}
              />
            }
          >
            <ListItem className="p-0" selected={open === 4}>
              <AccordionHeader
                onClick={() => handleOpen(4)}
                className="border-b-0 p-3"
              >
                <ListItemPrefix>
                  <img
                    src={transactionsLogo}
                    className="h-6 w-6 text-[#724E2C]"
                  />
                </ListItemPrefix>
                <Typography color="blue-gray" className="mr-auto font-normal">
                  Transactions
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <ListItem
                  className="cursor-pointer"
                  onClick={() => updateContent("Orders")}
                >
                  <ListItemPrefix>
                    <ChevronDownIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  <Typography>Payments</Typography>
                </ListItem>
                <ListItem
                  className="cursor-pointer"
                  onClick={() => updateContent("Requests")}
                >
                  <ListItemPrefix>
                    <ChevronDownIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  <Typography>PaymentHistory</Typography>
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>
          {/* Orders Accordion */}
          <Accordion
            open={open === 5}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${
                  open === 4 ? "rotate-180" : ""
                }`}
              />
            }
          >
            <ListItem className="p-0" selected={open === 4}>
              <AccordionHeader
                onClick={() => handleOpen(5)}
                className="border-b-0 p-3"
              >
                <ListItemPrefix>
                  <img src={ordersIcon} className="h-6 w-6 text-[#724E2C]" />
                </ListItemPrefix>
                <Typography color="blue-gray" className="mr-auto font-normal">
                  Orders
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <ListItem
                  className="cursor-pointer"
                  onClick={() => updateContent("Orders")}
                >
                  <ListItemPrefix>
                    <ChevronDownIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  <Typography>Add Orders </Typography>
                </ListItem>
                <ListItem
                  className="cursor-pointer"
                  onClick={() => updateContent("Requests")}
                >
                  <ListItemPrefix>
                    <ChevronDownIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  <Typography>Manage Orders</Typography>
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>

          {/* Other Menu Items */}

          <ListItem
            onClick={() => updateContent("Profile")}
            className="group cursor-pointer relative hover:bg-gray-200 p-2"
          >
            <ListItemPrefix>
              <UserCircleIcon className="h-6 w-6 text-[#724E2C]" />
            </ListItemPrefix>
            <Typography className="ml-2">Profile</Typography>
          </ListItem>

          <ListItem
            onClick={() => updateContent("Settings")}
            className="group cursor-pointer relative hover:bg-gray-200 p-2"
          >
            <ListItemPrefix>
              <Cog6ToothIcon className="h-6 w-6 text-[#724E2C]" />
            </ListItemPrefix>
            <Typography className="ml-2">Settings</Typography>
          </ListItem>

          <ListItem
            onClick={() => updateContent("Log Out")}
            className="group cursor-pointer relative hover:bg-gray-200 p-2"
          >
            <ListItemPrefix>
              <img src={logoutIcon} className="h-6 w-6" />
            </ListItemPrefix>
            <Typography className="ml-2">Log Out</Typography>
          </ListItem>
        </List>
      </Card>

      {/* Main Content Area */}
      <div className="flex-1">
        {/* Header Navbar */}
        <div className="flex items-center justify-between bg-white p-4 border border-gray-300 shadow-md shadow-black">
          {/* Hamburger Icon */}
          <button onClick={toggleSidebar} className="lg:hidden">
            <Bars3Icon className="h-6 w-6 text-gray-600" />
          </button>
          <div className="flex-1"></div>{" "}
          {/* This will push the icons to the right */}
          <div className="flex items-center space-x-4">
            {/* Bell Icon, Name, and Profile Icon */}
            <div className="relative">
              <div className="bg-gray-200 p-2 rounded-full">
                <BellIcon className="h-6 w-6 text-[#D3B094]" />
              </div>
              <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></div>
            </div>

            {/* Name and Subname */}
            <div className="flex flex-col items-start">
              <Typography className="text-gray-800 font-semibold">
                Neil
              </Typography>
              <Typography className="text-gray-500 text-sm">Admin</Typography>
            </div>

            {/* Profile Image as Circle */}
            <div className="p-2 rounded-full">
              <img
                src={profile}
                alt="Profile"
                className="h-11 w-11 rounded-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Content Display */}
        <div className="p-8 bg-gray-100">
          {/* Render active content dynamically */}
          {activeContent}
        </div>
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-[rgba(0,0,0,0.1)] bg-opacity-30 z-20">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <Typography variant="h6" className="text-center">
              Are you sure you want to log out?
            </Typography>
            <div className="flex justify-around mt-4">
              <button
                onClick={handleCancelLogout}
                className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={logOutConfirm}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
