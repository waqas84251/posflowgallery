import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  Settings,
  Zap,
  ShoppingCart,
  Layers,
  Users,
  ClipboardList,
  LifeBuoy,
  LogIn,
  UserPlus,
  Moon,
  Sun,
  ExternalLink,
  Calendar,
  DollarSign,
  Package,
  FileBarChart,
  Github,
  ArrowRight,
  X
} from 'lucide-react';
import './index.css';

const Logo = ({ size = "md" }) => {
  const isSmall = size === "sm";
  const iconSize = isSmall ? 18 : size === "lg" ? 48 : 24;

  return (
    <div className={`logo-container ${size}`}>
      <div className="logo-visual">
        <motion.div
          className="logo-hexagon"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="logo-icon-box"
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <Zap size={iconSize} className="logo-spark" fill="currentColor" />
        </motion.div>
      </div>
      <span className="logo-text">POS<span>FLOW</span></span>
    </div>
  );
};

const DashboardMockup = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    className="pos-mockup"
  >
    <div className="mockup-sidebar">
      <div className="sidebar-brand"><Logo size="sm" /></div>
      <div className="sidebar-link active"><LayoutDashboard size={14} /> Dashboard</div>
      <div className="sidebar-link"><Package size={14} /> Products</div>
      <div className="sidebar-link"><ShoppingCart size={14} /> Sales</div>
      <div className="sidebar-link"><Layers size={14} /> Categories</div>
      <div className="sidebar-link"><Users size={14} /> Customers</div>
      <div className="sidebar-link"><ClipboardList size={14} /> Inventory</div>
      <div className="sidebar-link"><FileBarChart size={14} /> Reports</div>
    </div>
    <div className="mockup-main">
      <div className="mockup-top-bar">
        <h3 className="m-0">Dashboard</h3>
        <div className="mockup-date-chip">
          <Calendar size={14} /> Saturday, February 21, 2026
        </div>
      </div>
      <div className="mockup-stats-grid">
        <div className="stat-card">
          <div className="stat-label">TODAY'S SALES</div>
          <div className="stat-value">Rs. 6.00</div>
          <div className="stat-sub">1 orders</div>
          <DollarSign className="stat-icon" size={24} />
        </div>
        <div className="stat-card">
          <div className="stat-label">WEEKLY SALES</div>
          <div className="stat-value">Rs. 15.00</div>
          <div className="stat-sub">3 orders</div>
          <Calendar className="stat-icon" size={24} />
        </div>
        <div className="stat-card">
          <div className="stat-label">MONTHLY SALES</div>
          <div className="stat-value">Rs. 15.00</div>
          <div className="stat-sub">3 orders</div>
          <Calendar className="stat-icon" size={24} />
        </div>
        <div className="stat-card">
          <div className="stat-label">TOTAL CUSTOMERS</div>
          <div className="stat-value">2</div>
          <div className="stat-sub">0 new today</div>
          <Users className="stat-icon" size={24} />
        </div>
      </div>
      <div className="mockup-charts-row">
        <div className="mock-chart-box">
          <div className="chart-header">Sales Overview (Last 7 Days)</div>
          <div className="chart-line-placeholder"></div>
        </div>
        <div className="mock-chart-box doughnut">
          <div className="chart-header">Payment Methods (Last 30 Days)</div>
          <div className="chart-doughnut-placeholder"></div>
        </div>
      </div>
    </div>
  </motion.div>
);

const WelcomeModal = ({ onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="welcome-overlay"
  >
    <motion.div
      initial={{ scale: 0.9, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.9, opacity: 0, y: 20 }}
      className="welcome-modal"
    >
      <button className="modal-close" onClick={onClose}>
        <X size={24} />
      </button>

      <div className="hero-badge">Welcome to POSFlow Gallery</div>
      <h1 className="hero-title">
        High-Quality <span>POS System</span> Showcase
      </h1>
      <p className="hero-description">
        This website is built to showcase the professional user interface and features of our POS system through screenshots.
        Browse all modules like Sales, Reports, and Inventory to see the software in action.
      </p>

      <div className="hero-cta">
        <button onClick={onClose} className="btn btn-primary btn-lg">
          Start Exploring <ArrowRight size={20} />
        </button>
        <a
          href="https://github.com/WaqasKhan786"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline btn-lg"
        >
          <Github size={20} /> View Source Code
        </a>
      </div>

      <div className="hero-footer-note">
        Want to see the actual software? Download the full source code from <strong>GitHub</strong> and run it locally!
      </div>
    </motion.div>
  </motion.div>
);

const Header = ({ theme, toggleTheme, onSelectModule, activeModule }) => {
  const navItems = [
    { icon: LayoutDashboard, id: "dashboard", label: "Dashboard" },
    { icon: Package, id: "products", label: "Products" },
    { icon: ShoppingCart, id: "sales", label: "Sales" },
    { icon: Layers, id: "categories", label: "Categories" },
    { icon: Users, id: "customers", label: "Customers" },
    { icon: ClipboardList, id: "inventory", label: "Inventory" },
    { icon: FileBarChart, id: "reports", label: "Reports" },
    { icon: Settings, id: "settings", label: "Settings" },
    { icon: LifeBuoy, id: "support", label: "Support" },
    { icon: LogIn, id: "login", label: "Login" },
    { icon: UserPlus, id: "register", label: "Register" }
  ];

  return (
    <header className="header">
      <div className="header-top">
        <motion.a
          href="/"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="logo-link"
        >
          <Logo size="sm" />
        </motion.a>

        <div className="header-actions">
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <motion.a
            href="https://waqasportfolio.site/#contact"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="btn btn-primary btn-sm"
          >
            Get Started
          </motion.a>
        </div>
      </div>

      <nav className="header-nav">
        <div className="nav-scroll-container">
          {navItems.map((item, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className={`nav-slash-button ${activeModule === item.id ? 'active' : ''}`}
              onClick={() => onSelectModule(item.id)}
            >
              <item.icon size={14} className="nav-icon" />
              <span>{item.label}</span>
            </motion.button>
          ))}
        </div>
      </nav>
    </header>
  );
};

function App() {
  const [theme, setTheme] = useState('light');
  const [activeModule, setActiveModule] = useState('dashboard');
  const [showWelcome, setShowWelcome] = useState(true);
  const showcaseRef = React.useRef(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, []);

  const scrollToShowcase = () => {
    showcaseRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const moduleData = {
    dashboard: {
      title: "Executive Dashboard",
      desc: "Comprehensive overview of your business performance, sales trends, and customer metrics.",
      screenshots: ["/screenshots/dashboard_1.png", "/screenshots/dashboard_2.png"]
    },
    products: {
      title: "Product Management",
      desc: "Manage your inventory with ease. Add, edit, and organize products with detailed specifications.",
      screenshots: [
        "/screenshots/product (1).png",
        "/screenshots/product (2).png",
        "/screenshots/product (3).png",
        "/screenshots/product (4).png",
        "/screenshots/product (5).png",
        "/screenshots/product (6).png",
        "/screenshots/product (7).png"
      ]
    },
    sales: {
      title: "Smart Point of Sale",
      desc: "Fast, intuitive, and reliable checkout experience for your customers.",
      screenshots: [
        "/screenshots/sale.png",
        "/screenshots/sale (1).png",
        "/screenshots/sale (2).png",
        "/screenshots/sale (3).png",
        "/screenshots/sale (4).png"
      ]
    },
    categories: {
      title: "Product Organization",
      desc: "Easily manage and categorize your entire product catalog.",
      screenshots: [
        "/screenshots/category (1).png",
        "/screenshots/category (2).png",
        "/screenshots/category (3).png",
        "/screenshots/category (4).png"
      ]
    },
    customers: {
      title: "CRM & Insights",
      desc: "Build lasting relationships with detailed customer profiles and purchase history.",
      screenshots: [
        "/screenshots/customers (1).png",
        "/screenshots/customers (2).png",
        "/screenshots/customers (3).png"
      ]
    },
    inventory: {
      title: "Inventory Control",
      desc: "Track stock levels, manage suppliers, and stay on top of your supply chain.",
      screenshots: [
        "/screenshots/inventory (1).png",
        "/screenshots/inventory (2).png",
        "/screenshots/inventory (3).png"
      ]
    },
    reports: {
      title: "Business Intelligence",
      desc: "Generate detailed reports and gain actionable insights into your business growth.",
      screenshots: [
        "/screenshots/reports (1).png",
        "/screenshots/reports (2).png",
        "/screenshots/reports (3).png",
        "/screenshots/reports (4).png"
      ]
    },
    settings: {
      title: "System Configuration",
      desc: "Customize the platform to fit your business needs with advanced settings.",
      screenshots: [
        "/screenshots/settings (1).png",
        "/screenshots/settings (2).png"
      ]
    },
    support: {
      title: "Help & Support",
      desc: "Get the help you need when you need it. Browse our knowledge base or contact support.",
      screenshots: ["/screenshots/help and support.png"]
    },
    login: {
      title: "Secure Access",
      desc: "Safe and secure login for authorized personnel only.",
      screenshots: ["/screenshots/login.png"]
    },
    register: {
      title: "Join POSFlow",
      desc: "Create your account and start managing your business more efficiently today.",
      screenshots: ["/screenshots/register.png"]
    }
  };

  const activeData = moduleData[activeModule] || { title: activeModule, desc: "Explore this module's features.", screenshots: [] };

  return (
    <div className="app-container">
      <div className="bg-blur" />
      <Header
        theme={theme}
        toggleTheme={toggleTheme}
        onSelectModule={(id) => {
          setActiveModule(id);
          scrollToShowcase();
        }}
        activeModule={activeModule}
      />

      <main className="main-content">
        <AnimatePresence>
          {showWelcome && <WelcomeModal onClose={() => setShowWelcome(false)} />}
        </AnimatePresence>

        <div ref={showcaseRef} className="showcase-anchor" style={{ height: '20px' }} />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeModule}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="showcase-section"
          >
            <div className="showcase-header">
              <h2 className="module-title">
                {activeData.title.split(' ')[0]} <span>{activeData.title.split(' ').slice(1).join(' ')}</span>
              </h2>
              <p className="module-desc">{activeData.desc}</p>
            </div>

            <div className="screenshot-container">
              {activeData.screenshots?.length > 0 ? (
                <div className="screenshot-grid">
                  {activeData.screenshots.map((src, idx) => (
                    <div key={idx} className="screenshot-card">
                      <div className="mock-header">
                        <div className="dot red" />
                        <div className="dot yellow" />
                        <div className="dot green" />
                        <span className="mock-url">posflow.admin/{activeModule}</span>
                      </div>
                      <div className="mock-body">
                        <img
                          src={src}
                          alt={activeModule}
                          onError={(e) => {
                            if (activeModule === 'dashboard' && idx === 0) {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'block';
                            } else {
                              e.target.closest('.screenshot-card').style.display = 'none';
                            }
                          }}
                        />
                        {activeModule === 'dashboard' && idx === 0 && (
                          <div style={{ display: 'none' }} className="fallback-mockup">
                            <DashboardMockup />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="empty-showcase">
                  <Logo size="lg" />
                  <p>Module preview coming soon...</p>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
