import React, { useState } from 'react';
import { 
  Home, Settings, Cloud, Shield, Code, DollarSign, 
  AlertCircle, Cpu, Database, Globe, Activity, 
  ChevronRight, ChevronLeft, Calendar, CheckCircle, XCircle, 
  Clock, TrendingUp, AlertTriangle, Loader, Bell,
  Search, Filter, Download, Plus, Eye, MoreHorizontal,
  Server, Container, Network, HardDrive, Users,
  BarChart3, PieChart, LineChart, Target, Zap,
  GitBranch, Package, Layers, Monitor, Trash2, PencilRuler
} from 'lucide-react';

// Enhanced Sidebar Component with HeroAI chat
const Sidebar = ({ currentUser, currentPage, setCurrentPage }) => {
  const [expandedSections, setExpandedSections] = useState(['dashboards', 'build', 'onboarding']);
  const [showAIChat, setShowAIChat] = useState(false);
  
  const toggleSection = (section) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const isActive = (page) => currentPage === page;

  return (
    <>
      <div className="w-72 bg-gray-900 text-white h-screen overflow-y-auto border-r border-gray-700 relative">
        {/* User Profile */}
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center text-white font-bold text-lg shadow-lg">
              CK
            </div>
            <div className="flex-1">
              <h4 className="text-white font-semibold">{currentUser.name}</h4>
              <p className="text-gray-400 text-sm">{currentUser.email}</p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-700 flex gap-4">
            <button className="text-gray-400 hover:text-white text-sm transition-colors">Profile</button>
            <button className="text-gray-400 hover:text-white text-sm transition-colors">Settings</button>
            <button className="text-gray-400 hover:text-white text-sm transition-colors">Logout</button>
          </div>
        </div>

        {/* Navigation Sections */}
        <div className="p-4 pb-20">
          {/* Home Section */}
          <div className="mb-6">
            <div 
              onClick={() => setCurrentPage('home')}
              className={`flex items-center px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 ${
                isActive('home') 
                  ? 'bg-gradient-to-r from-red-600 to-red-700 shadow-lg' 
                  : 'hover:bg-gray-800 hover:shadow-md'
              }`}
            >
              <Home className="w-5 h-5 mr-3" />
              <span className="font-medium">Home</span>
            </div>
          </div>

          {/* Dashboards Section */}
          <div className="mb-6">
            <div 
              className="flex items-center justify-between cursor-pointer mb-3 px-2"
              onClick={() => toggleSection('dashboards')}
            >
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Dashboards</h3>
              <ChevronRight className={`w-4 h-4 text-gray-400 transition-transform ${expandedSections.includes('dashboards') ? 'rotate-90' : ''}`} />
            </div>
            {expandedSections.includes('dashboards') && (
              <div className="space-y-2">
                <div 
                  onClick={() => setCurrentPage('dashboard')}
                  className={`px-4 py-2 rounded-lg cursor-pointer text-sm transition-all ${
                    isActive('dashboard') 
                      ? 'bg-gray-800 text-white border-l-4 border-red-600' 
                      : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  <Activity className="w-4 h-4 inline mr-2" />
                  Deployments
                </div>
                <div 
                  onClick={() => setCurrentPage('financial')}
                  className={`px-4 py-2 rounded-lg cursor-pointer text-sm transition-all flex items-center justify-between ${
                    isActive('financial') 
                      ? 'bg-gray-800 text-white border-l-4 border-red-600' 
                      : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  <div className="flex items-center">
                    <DollarSign className="w-4 h-4 mr-2" />
                    Financials
                  </div>
                  <span className="bg-red-600 text-white px-2 py-1 rounded-full text-xs font-bold">3</span>
                </div>
                <div 
                  onClick={() => setCurrentPage('applications')}
                  className={`px-4 py-2 rounded-lg cursor-pointer text-sm transition-all ${
                    isActive('applications') 
                      ? 'bg-gray-800 text-white border-l-4 border-red-600' 
                      : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  <Package className="w-4 h-4 inline mr-2" />
                  Applications
                </div>
                <div 
                  onClick={() => setCurrentPage('vulnerabilities')}
                  className={`px-4 py-2 rounded-lg cursor-pointer text-sm transition-all ${
                    isActive('vulnerabilities') 
                      ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg' 
                      : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  <Shield className="w-4 h-4 inline mr-2" />
                  Vulnerabilities
                </div>
                <div className="px-4 py-2 rounded-lg cursor-pointer text-sm text-gray-400 hover:bg-gray-800 hover:text-white transition-all">
                  <GitBranch className="w-4 h-4 inline mr-2" />
                  Code Commits
                </div>
              </div>
            )}
          </div>

          {/* Onboarding Section */}
          <div className="mb-6">
            <div 
              className="flex items-center justify-between cursor-pointer mb-3 px-2"
              onClick={() => toggleSection('onboarding')}
            >
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Onboarding</h3>
              <ChevronRight className={`w-4 h-4 text-gray-400 transition-transform ${expandedSections.includes('onboarding') ? 'rotate-90' : ''}`} />
            </div>
            {expandedSections.includes('onboarding') && (
              <div className="space-y-2">
                <div 
                  onClick={() => setCurrentPage('projects')}
                  className={`px-4 py-2 rounded-lg cursor-pointer text-sm transition-all ${
                    isActive('projects') 
                      ? 'bg-gray-800 text-white border-l-4 border-red-600' 
                      : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  <Layers className="w-4 h-4 inline mr-2" />
                  Projects
                </div>
                <div 
                  onClick={() => setCurrentPage('cloud-onboarding')}
                  className={`px-4 py-2 rounded-lg cursor-pointer text-sm transition-all ${
                    isActive('cloud-onboarding') || isActive('cloud-onboarding-status')
                      ? 'bg-gray-800 text-white border-l-4 border-red-600' 
                      : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  <Cloud className="w-4 h-4 inline mr-2" />
                  Cloud Service Provider (CSP)
                </div>
                <div 
                  onClick={() => setCurrentPage('kubernetes-onboarding')}
                  className={`px-4 py-2 rounded-lg cursor-pointer text-sm transition-all ${
                    isActive('kubernetes-onboarding') || isActive('kubernetes-onboarding-status')
                      ? 'bg-gray-800 text-white border-l-4 border-red-600' 
                      : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  <Container className="w-4 h-4 inline mr-2" />
                  Kubernetes
                </div>
                <div className="px-4 py-2 rounded-lg cursor-pointer text-sm text-gray-400 hover:bg-gray-800 hover:text-white transition-all">
                  <Network className="w-4 h-4 inline mr-2" />
                  API Management
                </div>
                <div className="px-4 py-2 rounded-lg cursor-pointer text-sm text-gray-400 hover:bg-gray-800 hover:text-white transition-all">
                  <Monitor className="w-4 h-4 inline mr-2" />
                  Observability
                </div>
              </div>
            )}
          </div>

          {/* Build Section */}
          <div className="mb-6">
            <div 
              className="flex items-center justify-between cursor-pointer mb-3 px-2"
              onClick={() => toggleSection('build')}
            >
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Build</h3>
              <ChevronRight className={`w-4 h-4 text-gray-400 transition-transform ${expandedSections.includes('build') ? 'rotate-90' : ''}`} />
            </div>
            {expandedSections.includes('build') && (
              <div className="space-y-2">
                <div 
                  onClick={() => setCurrentPage('infrabuilder')}
                  className={`px-4 py-2 rounded-lg cursor-pointer text-sm transition-all ${
                    isActive('infrabuilder') 
                      ? 'bg-gray-800 text-white border-l-4 border-red-600' 
                      : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  <PencilRuler className="w-4 h-4 inline mr-2" />
                  InfraBuilder
                </div>
                <div className="px-4 py-2 rounded-lg cursor-pointer text-sm text-gray-400 hover:bg-gray-800 hover:text-white transition-all">
                  <Zap className="w-4 h-4 inline mr-2" />
                  Deployments
                </div>
                <div className="px-4 py-2 rounded-lg cursor-pointer text-sm text-gray-400 hover:bg-gray-800 hover:text-white transition-all">
                  <Clock className="w-4 h-4 inline mr-2" />
                  Deployment History
                </div>
              </div>
            )}
          </div>

          {/* Help Section */}
          <div className="mb-6">
            <div 
              className="flex items-center justify-between cursor-pointer mb-3 px-2"
              onClick={() => toggleSection('help')}
            >
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Help</h3>
              <ChevronRight className={`w-4 h-4 text-gray-400 transition-transform ${expandedSections.includes('help') ? 'rotate-90' : ''}`} />
            </div>
            {expandedSections.includes('help') && (
              <div className="space-y-2">
                <div className="px-4 py-2 rounded-lg cursor-pointer text-sm text-gray-400 hover:bg-gray-800 hover:text-white transition-all">
                  Documentation
                </div>
                <div className="px-4 py-2 rounded-lg cursor-pointer text-sm text-gray-400 hover:bg-gray-800 hover:text-white transition-all">
                  Support
                </div>
                <div className="px-4 py-2 rounded-lg cursor-pointer text-sm text-gray-400 hover:bg-gray-800 hover:text-white transition-all">
                  Release Notes
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Ask HeroAI Chat Button - Fixed at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-900 border-t border-gray-700">
          <button
            onClick={() => setShowAIChat(!showAIChat)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
              showAIChat
                ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white hover:shadow-md'
            }`}
          >
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
              showAIChat
                ? 'bg-white/20'
                : 'bg-gradient-to-br from-yellow-400 to-orange-500'
            }`}>
              <span className={`text-sm ${showAIChat ? 'text-white' : 'text-white'}`}>✨</span>
            </div>
            <span>Ask HeroAI</span>
            {showAIChat && (
              <div className="ml-auto">
                <XCircle className="w-4 h-4" />
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Floating AI Chat Window */}
      {showAIChat && (
        <div className="fixed bottom-4 left-80 z-50">
          <FloatingAIChat onClose={() => setShowAIChat(false)} />
        </div>
      )}
    </>
  );
};

// Floating AI Chat Component
const FloatingAIChat = ({ onClose }) => {
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const handleSend = async (inputText = userInput) => {
    if (!inputText.trim()) return;
    
    const newMessage = {
      id: Date.now(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, newMessage]);
    setUserInput('');
    setIsTyping(true);
    
    // Simulate AI response
    setTimeout(() => {
      const responses = {
        "help": "I can help you with Hero Portal configurations, deployments, and questions about your projects. What do you need assistance with?",
        "deployment": "To create a new deployment, go to Build > Deployments and click 'New Deployment'. I can guide you through the process step by step.",
        "cloud": "For cloud onboarding, navigate to Onboarding > Cloud Service Provider (CSP). You'll need your Application ID from ServiceNow CMDB.",
        "project": "To manage projects, go to Onboarding > Projects. You can view, create, and manage project access from there.",
        "cost": "Check your costs in Dashboards > Financials. I can help you understand budget alerts and optimization recommendations.",
        "status": "You can check deployment status in Dashboards > Deployments or view specific cloud onboarding progress in the status page."
      };
      
      let response = "I'm here to help with Hero Portal! I can assist with:\n\n• **Deployments**: Creating and managing deployments\n• **Cloud Onboarding**: Setting up cloud resources\n• **Project Management**: Managing team access and projects\n• **Cost Monitoring**: Understanding financial dashboards\n• **Platform Navigation**: Finding features and functionality\n\nWhat would you like help with?";
      
      // Simple keyword matching for responses
      const lowerInput = inputText.toLowerCase();
      for (const [keyword, keywordResponse] of Object.entries(responses)) {
        if (lowerInput.includes(keyword)) {
          response = keywordResponse;
          break;
        }
      }
      
      const aiResponse = {
        id: Date.now() + 1,
        text: response,
        sender: 'ai',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (isMinimized) {
    return (
      <div className="bg-white rounded-xl shadow-2xl border border-gray-200 w-80">
        <div className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-t-xl border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                <span className="text-white text-xs">✨</span>
              </div>
              <span className="font-semibold text-slate-900">HeroAI Assistant</span>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={() => setIsMinimized(false)}
                className="w-6 h-6 rounded hover:bg-gray-200 flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-4 h-4 text-gray-500 rotate-90" />
              </button>
              <button 
                onClick={onClose}
                className="w-6 h-6 rounded hover:bg-gray-200 flex items-center justify-center transition-colors"
              >
                <XCircle className="w-4 h-4 text-gray-500" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-2xl border border-gray-200 w-96 max-h-[600px] flex flex-col animate-in slide-in-from-bottom-4 duration-300">
      {/* Header */}
      <div className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-t-xl border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
              <span className="text-white text-sm">✨</span>
            </div>
            <div>
              <div className="font-semibold text-slate-900">HeroAI Assistant</div>
              <div className="text-xs text-gray-600">Always here to help</div>
            </div>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => setIsMinimized(true)}
              className="w-6 h-6 rounded hover:bg-gray-200 flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-4 h-4 text-gray-500 -rotate-90" />
            </button>
            <button 
              onClick={onClose}
              className="w-6 h-6 rounded hover:bg-gray-200 flex items-center justify-center transition-colors"
            >
              <XCircle className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[300px] max-h-[400px]">
        {messages.length === 0 && (
          <div className="text-center py-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-100 to-orange-100 flex items-center justify-center mx-auto mb-3">
              <span className="text-lg">🤖</span>
            </div>
            <h4 className="font-semibold text-slate-900 mb-1">Hi! I'm HeroAI</h4>
            <p className="text-gray-600 text-sm">Ask me about deployments, cloud setup, costs, or anything else!</p>
          </div>
        )}
        
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[250px] px-3 py-2 rounded-2xl text-sm ${
              message.sender === 'user' 
                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white' 
                : 'bg-gray-100 text-slate-900'
            }`}>
              {message.sender === 'ai' && (
                <div className="flex items-center gap-1 mb-1">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                    <span className="text-white text-xs">✨</span>
                  </div>
                  <span className="text-xs font-semibold text-gray-600">HeroAI</span>
                </div>
              )}
              <div className="whitespace-pre-line">{message.text}</div>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-100 text-slate-900 px-3 py-2 rounded-2xl text-sm">
              <div className="flex items-center gap-1 mb-1">
                <div className="w-3 h-3 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                  <span className="text-white text-xs">✨</span>
                </div>
                <span className="text-xs font-semibold text-gray-600">HeroAI</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-200 bg-gray-50 rounded-b-xl">
        <div className="flex gap-2">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me anything..."
            className="flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-sm"
          />
          <button
            onClick={() => handleSend()}
            disabled={!userInput.trim() || isTyping}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
              userInput.trim() && !isTyping
                ? 'bg-slate-900 text-white hover:bg-slate-800' 
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            }`}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

// Modern Browser Chrome Component
const BrowserChrome = ({ url, hasAlerts }) => (
  <div className="bg-slate-800 px-6 py-4 border-b border-slate-600 flex items-center justify-between">
    <div className="flex items-center gap-3 flex-1">
      <div className="flex gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="flex-1 bg-slate-900 border border-slate-600 px-4 py-2 rounded-lg text-slate-300 ml-6">
        {url}
      </div>
    </div>
    {hasAlerts && (
      <div className="relative ml-4">
        <Bell className="w-6 h-6 text-slate-300 hover:text-white cursor-pointer transition-colors" />
        <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
          3
        </span>
      </div>
    )}
  </div>
);

// Modern Breadcrumb Component
const Breadcrumb = ({ currentPage }) => {
  const getBreadcrumb = () => {
    const breadcrumbMap = {
      'home': ['Home'],
      'dashboard': ['Home', 'Dashboards', 'Deployments'],
      'financial': ['Home', 'Dashboards', 'Financials'],
      'applications': ['Home', 'Dashboards', 'Applications'],
      'projects': ['Home', 'Onboarding', 'Projects'],
      'cloud-onboarding': ['Home', 'Onboarding', 'Cloud Service Provider'],
      'cloud-onboarding-status': ['Home', 'Onboarding', 'Cloud Service Provider', 'Status'],
      'kubernetes-onboarding': ['Home', 'Onboarding', 'Kubernetes'],
      'kubernetes-onboarding-status': ['Home', 'Onboarding', 'Kubernetes', 'Status']
    };
    
    return breadcrumbMap[currentPage] || ['Home'];
  };
  
  const breadcrumbs = getBreadcrumb();
  
  return (
    <div className="px-8 py-4 bg-white border-b border-gray-100 text-sm">
      {breadcrumbs.map((crumb, index) => (
        <span key={index}>
          {index > 0 && <span className="mx-3 text-gray-300">/</span>}
          <span className={index === breadcrumbs.length - 1 ? 'text-slate-900 font-semibold' : 'text-gray-500'}>
            {crumb}
          </span>
        </span>
      ))}
    </div>
  );
};

// Modern Home Page
const HomePage = ({ setCurrentPage }) => {
  return (
    <div className="p-8 bg-gradient-to-br from-white to-gray-50 min-h-screen">
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-slate-900 mb-4">
          Welcome to the JLL HERO Portal
        </h1>
        <p className="text-2xl text-gray-600 font-light mb-4">
          <span className="font-bold">H</span>elping <span className="font-bold">E</span>ngineers <span className="font-bold">R</span>ealize <span className="font-bold">O</span>pportunities
        </p>
        <p className="text-lg text-gray-500 font-light mb-2">Your unified cloud management platform</p>
      </div>

      {/* Statistics Summary */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">Today's Overview</h2>
        <div className="grid grid-cols-4 gap-6">
          <div 
            onClick={() => setCurrentPage('dashboard')}
            className="bg-white rounded-2xl p-8 cursor-pointer hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-red-600/20 group"
          >
            <div className="flex items-center justify-between mb-4">
              <Activity className="w-8 h-8 text-red-600 group-hover:scale-110 transition-transform" />
              <div className="text-4xl font-bold text-red-600">17</div>
            </div>
            <div className="text-gray-600 font-medium">Active Deployments</div>
            <div className="text-sm text-green-600 mt-2 flex items-center">
              <TrendingUp className="w-4 h-4 mr-1" />
              +3 from yesterday
            </div>
          </div>
          <div 
            onClick={() => setCurrentPage('dashboard')}
            className="bg-white rounded-2xl p-8 cursor-pointer hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-400/20 group"
          >
            <div className="flex items-center justify-between mb-4">
              <CheckCircle className="w-8 h-8 text-green-500 group-hover:scale-110 transition-transform" />
              <div className="text-4xl font-bold text-green-500">96%</div>
            </div>
            <div className="text-gray-600 font-medium">Success Rate</div>
            <div className="text-sm text-gray-500 mt-2">Last 7 days</div>
          </div>
          <div 
            onClick={() => setCurrentPage('financial')}
            className="bg-white rounded-2xl p-8 cursor-pointer hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-400/20 group"
          >
            <div className="flex items-center justify-between mb-4">
              <DollarSign className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform" />
              <div className="text-4xl font-bold text-blue-600">$12.8K</div>
            </div>
            <div className="text-gray-600 font-medium">Monthly Spend</div>
            <div className="text-sm text-orange-600 mt-2">85% of budget</div>
          </div>
          <div 
            onClick={() => setCurrentPage('financial')}
            className="bg-white rounded-2xl p-8 cursor-pointer hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-red-600/20 group"
          >
            <div className="flex items-center justify-between mb-4">
              <AlertTriangle className="w-8 h-8 text-red-600 group-hover:scale-110 transition-transform" />
              <div className="text-4xl font-bold text-red-600">3</div>
            </div>
            <div className="text-gray-600 font-medium">Active Alerts</div>
            <div className="text-sm text-red-600 mt-2">Action required</div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">Quick Actions</h2>
        <div className="grid grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-[#003E51] to-[#BCDEE6] rounded-2xl p-6 cursor-pointer hover:shadow-2xl transition-all duration-300 group hover:scale-105 border border-gray-100">
            <div className="mb-4 group-hover:scale-110 transition-transform">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-white">New Deployment</h3>
            <p className="text-white/90 text-sm">Deploy your applications</p>
          </div>
          <div 
            onClick={() => setCurrentPage('cloud-onboarding')}
            className="bg-gradient-to-br from-[#003E51] to-[#BCDEE6] rounded-2xl p-6 cursor-pointer hover:shadow-2xl transition-all duration-300 group hover:scale-105 border border-gray-100"
          >
            <div className="mb-4 group-hover:scale-110 transition-transform">
              <Cloud className="w-10 h-10 text-white" />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-white">Cloud Onboarding</h3>
            <p className="text-white/90 text-sm">Request cloud resources</p>
          </div>
          <div 
            onClick={() => setCurrentPage('financial')}
            className="bg-gradient-to-br from-[#003E51] to-[#BCDEE6] rounded-2xl p-6 cursor-pointer hover:shadow-2xl transition-all duration-300 group hover:scale-105 border border-gray-100"
          >
            <div className="mb-4 group-hover:scale-110 transition-transform">
              <DollarSign className="w-10 h-10 text-white" />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-white">Cost Analytics</h3>
            <p className="text-white/90 text-sm">Monitor cloud spending</p>
          </div>
          <div 
            onClick={() => setCurrentPage('infrabuilder')}
            className="bg-gradient-to-br from-[#003E51] to-[#BCDEE6] rounded-2xl p-6 cursor-pointer hover:shadow-2xl transition-all duration-300 group hover:scale-105 border border-gray-100"
          >
            <div className="mb-4 group-hover:scale-110 transition-transform">
              <PencilRuler className="w-10 h-10 text-white" />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-white">InfraBuilder</h3>
            <p className="text-white/90 text-sm">Design infrastructure</p>
          </div>
        </div>
      </div>

      {/* Ask HeroAI Agent */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">AI Assistant</h2>
        <AskHeroAI />
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
          <h3 className="font-bold text-slate-900 mb-6 text-xl">Recent Deployments</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-green-50 rounded-xl border border-green-100">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">EDP Core v2.1.4</div>
                  <div className="text-sm text-gray-600">Production</div>
                </div>
              </div>
              <div className="text-sm text-green-600 font-medium">Success • 2h ago</div>
            </div>
            <div className="flex justify-between items-center p-4 bg-red-50 rounded-xl border border-red-100">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                  <XCircle className="w-4 h-4 text-red-600" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">TelmaAI v3.0.0</div>
                  <div className="text-sm text-gray-600">Staging</div>
                </div>
              </div>
              <div className="text-sm text-red-600 font-medium">Failed • 4h ago</div>
            </div>
            <div className="flex justify-between items-center p-4 bg-green-50 rounded-xl border border-green-100">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Corrigo Core v1.8.2</div>
                  <div className="text-sm text-gray-600">Production</div>
                </div>
              </div>
              <div className="text-sm text-green-600 font-medium">Success • 1d ago</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
          <h3 className="font-bold text-slate-900 mb-6 text-xl">Platform Health</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-green-50 rounded-xl">
              <div className="flex items-center gap-3">
                <Cloud className="w-5 h-5 text-green-600" />
                <span className="text-slate-900 font-medium">Cloud Services</span>
              </div>
              <span className="text-green-600 font-semibold flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Operational
              </span>
            </div>
            <div className="flex justify-between items-center p-4 bg-green-50 rounded-xl">
              <div className="flex items-center gap-3">
                <Container className="w-5 h-5 text-green-600" />
                <span className="text-slate-900 font-medium">Kubernetes Clusters</span>
              </div>
              <span className="text-green-600 font-semibold flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Healthy
              </span>
            </div>
            <div className="flex justify-between items-center p-4 bg-orange-50 rounded-xl">
              <div className="flex items-center gap-3">
                <Network className="w-5 h-5 text-orange-600" />
                <span className="text-slate-900 font-medium">API Gateway</span>
              </div>
              <span className="text-orange-600 font-semibold flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                Degraded
              </span>
            </div>
            <div className="flex justify-between items-center p-4 bg-green-50 rounded-xl">
              <div className="flex items-center gap-3">
                <Monitor className="w-5 h-5 text-green-600" />
                <span className="text-slate-900 font-medium">Monitoring</span>
              </div>
              <span className="text-green-600 font-semibold flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Active
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Ask HeroAI Agent Component
const AskHeroAI = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const suggestedQuestions = [
    "Which pull requests need review from our team?",
    "Who owns the payment service codebase?", 
    "What are my next tasks?",
    "Which of our services have the most active development?",
    "Show me authentication-related pull requests",
    "How do I configure a new deployment?",
    "What's the status of my cloud onboarding request?",
    "Help me set up resource configurations"
  ];

  const handleSuggestedQuestion = (question) => {
    setUserInput(question);
    handleSend(question);
  };

  const handleSend = async (inputText = userInput) => {
    if (!inputText.trim()) return;
    
    const newMessage = {
      id: Date.now(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, newMessage]);
    setUserInput('');
    setIsTyping(true);
    
    // Simulate AI response
    setTimeout(() => {
      const responses = {
        "Which pull requests need review from our team?": "Based on your team's repositories, there are 3 pull requests pending review: \n• EDP Core: Authentication refactor (PR #234) - waiting 2 days\n• TelmaAI: Model optimization (PR #89) - waiting 1 day\n• Corrigo: Database migration (PR #156) - waiting 4 hours",
        "Who owns the payment service codebase?": "The payment service codebase is owned by:\n• **Technical Owner**: Sarah Wilson (sarah.wilson@jll.com)\n• **Business Owner**: Michael Chen (michael.chen@jll.com)\n• **Team**: FinTech Platform Team\n• **Repository**: github.com/jll/payment-service",
        "What are my next tasks?": "Here are your upcoming tasks:\n• **Today**: Review TelmaAI deployment configuration\n• **This Week**: Complete EDP Core security audit\n• **Next Week**: Plan Q4 infrastructure scaling\n• **Overdue**: Update project documentation (2 days past due)",
        "Which of our services have the most active development?": "Most active services by commit activity (last 30 days):\n1. **TelmaAI**: 47 commits, 8 contributors\n2. **EDP Core**: 32 commits, 5 contributors\n3. **Corrigo Core**: 28 commits, 6 contributors\n4. **ScheduleAI**: 15 commits, 3 contributors",
        "Show me authentication-related pull requests": "Authentication-related pull requests:\n• **EDP Core**: OAuth 2.0 implementation (PR #234) - Open\n• **TelmaAI**: SSO integration (PR #91) - In Review\n• **API Gateway**: JWT validation fix (PR #45) - Approved\n• **User Service**: Password policy update (PR #67) - Draft"
      };
      
      const defaultResponse = "I can help you with Hero Portal configurations, deployments, and questions about your projects. Here are some things I can assist with:\n\n• **Configuration**: Help set up resources, deployments, and infrastructure\n• **Status Updates**: Check on cloud onboarding, deployments, and services\n• **Project Management**: Find project details, team members, and ownership\n• **Guidance**: Provide step-by-step instructions for platform features\n\nWhat would you like help with today?";
      
      const aiResponse = {
        id: Date.now() + 1,
        text: responses[inputText] || defaultResponse,
        sender: 'ai',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isExpanded) {
    return (
      <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
            <span className="text-white text-lg">✨</span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">Ask HeroAI Agent</h3>
            <p className="text-gray-600 text-sm">Get instant help with configurations and guidance</p>
          </div>
        </div>
        
        <div className="space-y-3 mb-6">
          {suggestedQuestions.slice(0, 5).map((question, idx) => (
            <button
              key={idx}
              onClick={() => {
                setIsExpanded(true);
                setTimeout(() => handleSuggestedQuestion(question), 100);
              }}
              className="flex items-center gap-3 w-full text-left p-4 rounded-xl hover:bg-gray-50 transition-all group border border-gray-100 hover:border-gray-200"
            >
              <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                <Database className="w-4 h-4 text-gray-600" />
              </div>
              <span className="text-gray-800 font-medium">{question}</span>
            </button>
          ))}
        </div>
        
        <button 
          onClick={() => setIsExpanded(true)}
          className="w-full flex items-center justify-between p-4 border-2 border-gray-200 rounded-xl hover:border-yellow-400 hover:bg-yellow-50 transition-all group"
        >
          <span className="text-gray-600 group-hover:text-yellow-700">Ask anything</span>
          <div className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-bold group-hover:bg-yellow-600 transition-colors">
            Ask HeroAI
          </div>
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
              <span className="text-white text-lg">✨</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">Ask HeroAI Agent</h3>
              <p className="text-gray-600 text-sm">AI-powered assistance for Hero Portal</p>
            </div>
          </div>
          <button 
            onClick={() => setIsExpanded(false)}
            className="w-8 h-8 rounded-lg hover:bg-gray-200 flex items-center justify-center transition-colors"
          >
            <XCircle className="w-5 h-5 text-gray-500" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="h-96 overflow-y-auto p-6 space-y-4">
        {messages.length === 0 && (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-100 to-orange-100 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🤖</span>
            </div>
            <h4 className="font-bold text-slate-900 mb-2">How can I help you today?</h4>
            <p className="text-gray-600 text-sm">Ask me about deployments, configurations, project status, or anything else!</p>
          </div>
        )}
        
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
              message.sender === 'user' 
                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white' 
                : 'bg-gray-100 text-slate-900'
            }`}>
              {message.sender === 'ai' && (
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                    <span className="text-white text-xs">✨</span>
                  </div>
                  <span className="text-xs font-semibold text-gray-600">HeroAI</span>
                </div>
              )}
              <div className="whitespace-pre-line text-sm">{message.text}</div>
              <div className={`text-xs mt-2 ${message.sender === 'user' ? 'text-blue-200' : 'text-gray-500'}`}>
                {message.timestamp.toLocaleTimeString()}
              </div>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-100 text-slate-900 px-4 py-3 rounded-2xl">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                  <span className="text-white text-xs">✨</span>
                </div>
                <span className="text-xs font-semibold text-gray-600">HeroAI</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
                <span className="text-xs text-gray-500">Thinking...</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-6 border-t border-gray-200 bg-gray-50">
        <div className="flex gap-3">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask anything..."
            className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 font-medium"
          />
          <button
            onClick={() => handleSend()}
            disabled={!userInput.trim() || isTyping}
            className={`px-6 py-3 rounded-xl font-bold transition-all ${
              userInput.trim() && !isTyping
                ? 'bg-slate-900 text-white hover:bg-slate-800' 
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            }`}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

// Vulnerabilities Dashboard
const VulnerabilitiesDashboard = () => {
  const [selectedSource, setSelectedSource] = useState('all');
  const [selectedProject, setSelectedProject] = useState('all');
  const [selectedVulnerability, setSelectedVulnerability] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);

  // Mock vulnerability data
  const vulnerabilityData = {
    sonarqube: [
      { id: 'SQ001', title: 'SQL Injection in User Authentication', severity: 'critical', project: 'EDP Core', file: 'src/auth/login.js', line: 142, cwe: 'CWE-89', owasp: 'A03:2021', description: 'User input is directly concatenated into SQL query without proper sanitization', recommendation: 'Use parameterized queries or prepared statements' },
      { id: 'SQ002', title: 'Cross-Site Scripting (XSS) in Comments', severity: 'high', project: 'TelmaAI', file: 'src/components/Comments.jsx', line: 87, cwe: 'CWE-79', owasp: 'A03:2021', description: 'User-generated content rendered without proper escaping', recommendation: 'Implement output encoding and content security policy' },
      { id: 'SQ003', title: 'Hardcoded API Key', severity: 'high', project: 'Corrigo Core', file: 'src/config/api.js', line: 23, cwe: 'CWE-798', owasp: 'A07:2021', description: 'API key hardcoded in source code', recommendation: 'Use environment variables or secure key management service' },
      { id: 'SQ004', title: 'Weak Password Hashing', severity: 'medium', project: 'EDP Core', file: 'src/utils/crypto.js', line: 56, cwe: 'CWE-916', owasp: 'A02:2021', description: 'MD5 hash used for password storage', recommendation: 'Use bcrypt, scrypt, or Argon2 for password hashing' },
      { id: 'SQ005', title: 'Missing CSRF Protection', severity: 'medium', project: 'ScheduleAI', file: 'src/api/routes.js', line: 234, cwe: 'CWE-352', owasp: 'A01:2021', description: 'State-changing operations lack CSRF tokens', recommendation: 'Implement CSRF tokens for all state-changing requests' }
    ],
    wiz: [
      { id: 'WIZ001', title: 'Public S3 Bucket with Sensitive Data', severity: 'critical', project: 'TelmaAI', resource: 'telmai-prod-data', service: 'AWS S3', account: 'prod-123456', description: 'S3 bucket containing customer data is publicly accessible', recommendation: 'Enable bucket privacy settings and implement bucket policies' },
      { id: 'WIZ002', title: 'Unencrypted RDS Database', severity: 'high', project: 'EDP Core', resource: 'edp-prod-db', service: 'AWS RDS', account: 'prod-123456', description: 'Production database lacks encryption at rest', recommendation: 'Enable RDS encryption and rotate database credentials' },
      { id: 'WIZ003', title: 'Overly Permissive IAM Role', severity: 'high', project: 'Corrigo Core', resource: 'corrigo-app-role', service: 'AWS IAM', account: 'prod-789012', description: 'IAM role has Administrator access policy attached', recommendation: 'Apply principle of least privilege and scope down permissions' },
      { id: 'WIZ004', title: 'Exposed Load Balancer without WAF', severity: 'medium', project: 'ScheduleAI', resource: 'schedule-prod-alb', service: 'AWS ALB', account: 'prod-345678', description: 'Application load balancer lacks Web Application Firewall', recommendation: 'Enable AWS WAF with appropriate rule sets' },
      { id: 'WIZ005', title: 'Unused Security Group with Open Ports', severity: 'low', project: 'EDP Core', resource: 'sg-old-web', service: 'AWS EC2', account: 'prod-123456', description: 'Security group allows unrestricted inbound traffic on port 22', recommendation: 'Remove unused security groups or restrict access' }
    ],
    snyk: [
      { id: 'SNYK001', title: 'Remote Code Execution in lodash', severity: 'critical', project: 'TelmaAI', package: 'lodash', version: '4.17.11', vulnerability: 'CVE-2020-8203', description: 'Prototype pollution vulnerability allowing arbitrary code execution', recommendation: 'Upgrade to lodash 4.17.21 or later' },
      { id: 'SNYK002', title: 'SQL Injection in sequelize', severity: 'high', project: 'EDP Core', package: 'sequelize', version: '5.21.3', vulnerability: 'CVE-2023-22578', description: 'SQL injection vulnerability in query generation', recommendation: 'Upgrade to sequelize 6.29.0 or later' },
      { id: 'SNYK003', title: 'XSS in react-scripts', severity: 'medium', project: 'Corrigo Core', package: 'react-scripts', version: '3.4.1', vulnerability: 'CVE-2022-24785', description: 'Cross-site scripting vulnerability in development server', recommendation: 'Upgrade to react-scripts 5.0.1 or later' },
      { id: 'SNYK004', title: 'Path Traversal in express', severity: 'medium', project: 'ScheduleAI', package: 'express', version: '4.16.0', vulnerability: 'CVE-2022-24999', description: 'Path traversal vulnerability in static file serving', recommendation: 'Upgrade to express 4.18.2 or later' },
      { id: 'SNYK005', title: 'Denial of Service in ws', severity: 'low', project: 'TelmaAI', package: 'ws', version: '7.4.0', vulnerability: 'CVE-2021-32640', description: 'ReDoS vulnerability in WebSocket handling', recommendation: 'Upgrade to ws 7.4.6 or later' }
    ]
  };

  // Calculate vulnerability counts
  const calculateCounts = () => {
    let critical = 0, high = 0, medium = 0, low = 0;
    const sources = selectedSource === 'all' ? ['sonarqube', 'wiz', 'snyk'] : [selectedSource];
    
    sources.forEach(source => {
      vulnerabilityData[source]?.forEach(vuln => {
        if (selectedProject === 'all' || vuln.project === selectedProject) {
          switch(vuln.severity) {
            case 'critical': critical++; break;
            case 'high': high++; break;
            case 'medium': medium++; break;
            case 'low': low++; break;
          }
        }
      });
    });
    
    return { critical, high, medium, low, total: critical + high + medium + low };
  };

  // Get filtered vulnerabilities
  const getFilteredVulnerabilities = () => {
    const sources = selectedSource === 'all' ? ['sonarqube', 'wiz', 'snyk'] : [selectedSource];
    let filtered = [];
    
    sources.forEach(source => {
      const sourceVulns = vulnerabilityData[source] || [];
      sourceVulns.forEach(vuln => {
        if (selectedProject === 'all' || vuln.project === selectedProject) {
          filtered.push({ ...vuln, source });
        }
      });
    });
    
    return filtered.sort((a, b) => {
      const severityOrder = { critical: 0, high: 1, medium: 2, low: 3 };
      return severityOrder[a.severity] - severityOrder[b.severity];
    });
  };

  // Calculate security score
  const calculateSecurityScore = () => {
    const counts = calculateCounts();
    const baseScore = 100;
    const deductions = {
      critical: 25,
      high: 15,
      medium: 5,
      low: 2
    };
    
    let score = baseScore;
    score -= counts.critical * deductions.critical;
    score -= counts.high * deductions.high;
    score -= counts.medium * deductions.medium;
    score -= counts.low * deductions.low;
    
    return Math.max(0, Math.min(100, score));
  };

  const counts = calculateCounts();
  const securityScore = calculateSecurityScore();
  const filteredVulnerabilities = getFilteredVulnerabilities();

  const handleViewDetails = (vuln) => {
    setSelectedVulnerability(vuln);
    setShowDetailModal(true);
  };

  return (
    <div className="p-8 bg-gradient-to-br from-white to-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-4xl font-bold text-slate-900">Security Vulnerabilities</h2>
        <div className="flex gap-4">
          <select 
            value={selectedProject}
            onChange={(e) => setSelectedProject(e.target.value)}
            className="px-6 py-3 border border-gray-200 rounded-xl bg-white text-slate-900 font-medium"
          >
            <option value="all">All Projects</option>
            <option value="EDP Core">EDP Core</option>
            <option value="Corrigo Core">Corrigo Core</option>
            <option value="TelmaAI">TelmaAI</option>
            <option value="ScheduleAI">ScheduleAI</option>
          </select>
          <select 
            value={selectedSource}
            onChange={(e) => setSelectedSource(e.target.value)}
            className="px-6 py-3 border border-gray-200 rounded-xl bg-white text-slate-900 font-medium"
          >
            <option value="all">All Sources</option>
            <option value="sonarqube">SonarQube</option>
            <option value="wiz">Wiz</option>
            <option value="snyk">Snyk</option>
          </select>
          <button className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl hover:shadow-lg transition-all font-medium">
            <Download className="w-4 h-4 inline mr-2" />
            Export Report
          </button>
        </div>
      </div>

      {/* Vulnerability Overview */}
      <div className="grid grid-cols-5 gap-8 mb-12">
        <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
          <div className="text-5xl font-bold mb-4 text-red-700">{counts.critical}</div>
          <div className="text-gray-600 font-medium mb-2">Critical</div>
          <div className="text-sm text-red-600">Immediate action required</div>
        </div>
        <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
          <div className="text-5xl font-bold mb-4 text-orange-600">{counts.high}</div>
          <div className="text-gray-600 font-medium mb-2">High</div>
          <div className="text-sm text-orange-600">Address within 7 days</div>
        </div>
        <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
          <div className="text-5xl font-bold mb-4 text-yellow-600">{counts.medium}</div>
          <div className="text-gray-600 font-medium mb-2">Medium</div>
          <div className="text-sm text-yellow-600">Address within 30 days</div>
        </div>
        <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
          <div className="text-5xl font-bold mb-4 text-blue-600">{counts.low}</div>
          <div className="text-gray-600 font-medium mb-2">Low</div>
          <div className="text-sm text-blue-600">Track and monitor</div>
        </div>
        <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
          <div className="text-5xl font-bold mb-4 text-slate-700">{counts.total}</div>
          <div className="text-gray-600 font-medium mb-2">Total</div>
          <div className="text-sm text-gray-600">Active vulnerabilities</div>
        </div>
      </div>

      {/* Security Scorecard */}
      <div className="bg-white rounded-2xl p-8 mb-12 shadow-sm border border-gray-100">
        <h3 className="text-xl font-bold text-slate-900 mb-6">Application Security Score</h3>
        <div className="flex items-center gap-8">
          <div className="relative w-32 h-32">
            <svg className="transform -rotate-90 w-32 h-32">
              <circle cx="64" cy="64" r="56" stroke="#e5e7eb" strokeWidth="16" fill="none" />
              <circle 
                cx="64" 
                cy="64" 
                r="56" 
                stroke={securityScore >= 80 ? '#10b981' : securityScore >= 60 ? '#f59e0b' : '#ef4444'}
                strokeWidth="16" 
                fill="none"
                strokeDasharray={`${(securityScore / 100) * 351.86} 351.86`}
                className="transition-all duration-1000"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">{securityScore}</div>
                <div className="text-sm text-gray-600">Score</div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="mb-4">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Production Readiness</span>
                <span className={`text-sm font-bold ${
                  securityScore >= 80 ? 'text-green-600' : 
                  securityScore >= 60 ? 'text-yellow-600' : 
                  'text-red-600'
                }`}>
                  {securityScore >= 80 ? 'Ready' : securityScore >= 60 ? 'Conditional' : 'Not Ready'}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full transition-all duration-1000 ${
                    securityScore >= 80 ? 'bg-green-500' : 
                    securityScore >= 60 ? 'bg-yellow-500' : 
                    'bg-red-500'
                  }`}
                  style={{ width: `${securityScore}%` }}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Critical Issues: </span>
                <span className="font-bold text-red-600">{counts.critical}</span>
              </div>
              <div>
                <span className="text-gray-600">High Issues: </span>
                <span className="font-bold text-orange-600">{counts.high}</span>
              </div>
              <div>
                <span className="text-gray-600">Compliance: </span>
                <span className="font-bold text-green-600">OWASP Top 10</span>
              </div>
              <div>
                <span className="text-gray-600">Last Scan: </span>
                <span className="font-bold text-slate-700">2 hours ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vulnerabilities Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-slate-900">Vulnerability Details</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Source</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Severity</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredVulnerabilities.map((vuln) => (
                <tr key={`${vuln.source}-${vuln.id}`} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      vuln.source === 'sonarqube' ? 'bg-blue-100 text-blue-800' :
                      vuln.source === 'wiz' ? 'bg-purple-100 text-purple-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {vuln.source.toUpperCase()}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      vuln.severity === 'critical' ? 'bg-red-100 text-red-800' :
                      vuln.severity === 'high' ? 'bg-orange-100 text-orange-800' :
                      vuln.severity === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {vuln.severity.toUpperCase()}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">{vuln.title}</div>
                    <div className="text-xs text-gray-500">{vuln.id}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {vuln.project}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {vuln.file ? `${vuln.file}:${vuln.line}` : vuln.resource || vuln.package}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button 
                      onClick={() => handleViewDetails(vuln)}
                      className="text-red-600 hover:text-red-900 font-medium text-sm"
                    >
                      View Details →
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Vulnerability Detail Modal */}
      {showDetailModal && selectedVulnerability && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{selectedVulnerability.title}</h3>
                <div className="flex gap-2">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    selectedVulnerability.source === 'sonarqube' ? 'bg-blue-100 text-blue-800' :
                    selectedVulnerability.source === 'wiz' ? 'bg-purple-100 text-purple-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {selectedVulnerability.source.toUpperCase()}
                  </span>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    selectedVulnerability.severity === 'critical' ? 'bg-red-100 text-red-800' :
                    selectedVulnerability.severity === 'high' ? 'bg-orange-100 text-orange-800' :
                    selectedVulnerability.severity === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {selectedVulnerability.severity.toUpperCase()}
                  </span>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
                    {selectedVulnerability.project}
                  </span>
                </div>
              </div>
              <button 
                onClick={() => setShowDetailModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <XCircle className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Details Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">Vulnerability ID</h4>
                  <p className="text-sm text-gray-900">{selectedVulnerability.id}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">Location</h4>
                  <p className="text-sm text-gray-900 font-mono">
                    {selectedVulnerability.file ? `${selectedVulnerability.file}:${selectedVulnerability.line}` : 
                     selectedVulnerability.resource ? `${selectedVulnerability.service} - ${selectedVulnerability.resource}` :
                     `${selectedVulnerability.package} v${selectedVulnerability.version}`}
                  </p>
                </div>
                {selectedVulnerability.cwe && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">CWE</h4>
                    <p className="text-sm text-gray-900">{selectedVulnerability.cwe}</p>
                  </div>
                )}
                {selectedVulnerability.owasp && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">OWASP Category</h4>
                    <p className="text-sm text-gray-900">{selectedVulnerability.owasp}</p>
                  </div>
                )}
                {selectedVulnerability.vulnerability && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">CVE</h4>
                    <p className="text-sm text-gray-900">{selectedVulnerability.vulnerability}</p>
                  </div>
                )}
                {selectedVulnerability.account && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Account</h4>
                    <p className="text-sm text-gray-900">{selectedVulnerability.account}</p>
                  </div>
                )}
              </div>

              {/* Description */}
              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-2">Description</h4>
                <p className="text-sm text-gray-900 bg-gray-50 p-4 rounded-lg">
                  {selectedVulnerability.description}
                </p>
              </div>

              {/* Recommendation */}
              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-2">Recommendation</h4>
                <p className="text-sm text-gray-900 bg-blue-50 p-4 rounded-lg border border-blue-200">
                  {selectedVulnerability.recommendation}
                </p>
              </div>

              {/* Actions */}
              <div className="flex gap-4 pt-4 border-t border-gray-200">
                <button className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl hover:shadow-lg transition-all font-medium">
                  Create Jira Ticket
                </button>
                <button className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all font-medium">
                  Mark as False Positive
                </button>
                <button className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all font-medium">
                  Suppress for 30 Days
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Modern Dashboard Page
const DashboardPage = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const deployments = [15, 22, 18, 28, 20, 35, 32, 16, 12, 15, 18, 21];
  const currentMonth = 6; // July

  return (
    <div className="p-8 bg-gradient-to-br from-white to-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-4xl font-bold text-slate-900">Deployment Dashboard</h2>
        <div className="flex gap-4">
          <select className="px-6 py-3 border border-gray-200 rounded-xl bg-white text-slate-900 font-medium shadow-sm hover:shadow-md transition-shadow">
            <option>Azara</option>
            <option>Corrigo</option>
            <option>TelmaAI</option>
          </select>
          <select className="px-6 py-3 border border-gray-200 rounded-xl bg-white text-slate-900 font-medium shadow-sm hover:shadow-md transition-shadow">
            <option>Prod</option>
            <option>Stage</option>
            <option>Dev</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8 mb-12">
        <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
          <div className="text-5xl font-bold mb-4 text-red-600">3</div>
          <div className="text-gray-600 font-medium">Total Deployments This Month</div>
        </div>
        <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
          <div className="text-5xl font-bold mb-4 text-green-500">17</div>
          <div className="text-gray-600 font-medium">Total Successful Deployments / Month</div>
        </div>
        <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
          <div className="text-5xl font-bold mb-4 text-red-600">5</div>
          <div className="text-gray-600 font-medium">Total Failed Deployments / Month</div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
        <h3 className="text-center font-bold text-slate-900 mb-8 text-xl">Monthly Deployment Trends 2025</h3>
        <div className="flex items-end justify-around h-72 px-8">
          {months.map((month, idx) => (
            <div key={month} className="flex flex-col items-center">
              <div className="relative">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-sm font-semibold text-slate-900">
                  {deployments[idx]}
                </div>
                <div 
                  className={`w-8 rounded-t-lg transition-all duration-500 hover:scale-105 ${
                    idx < currentMonth ? 'bg-gradient-to-t from-green-500 to-emerald-400 shadow-lg' : 
                    idx === currentMonth ? 'bg-gradient-to-t from-red-600 to-red-500 shadow-lg' : 
                    'bg-gradient-to-t from-gray-300 to-gray-200'
                  }`}
                  style={{ height: `${(deployments[idx] / 35) * 200}px` }}
                ></div>
              </div>
              <div className={`text-sm mt-3 ${idx === currentMonth ? 'font-bold text-red-600' : 'text-gray-600'}`}>
                {month}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-8 mt-8 text-sm">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-emerald-400 rounded"></div>
            <span className="text-gray-600 font-medium">Completed</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-gradient-to-r from-red-600 to-red-500 rounded"></div>
            <span className="text-gray-600 font-medium">Current Month</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-gradient-to-r from-gray-300 to-gray-200 rounded"></div>
            <span className="text-gray-600 font-medium">Future</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// InfraBuilder Component with Component Table
const InfraBuilder = () => {
  const [selectedProject, setSelectedProject] = useState('Project Alpha');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showComponentBuilder, setShowComponentBuilder] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [showStackDefinition, setShowStackDefinition] = useState(false);
  const [showStackConfig, setShowStackConfig] = useState(false);
  const [selectedStack, setSelectedStack] = useState(null);
  const [newComponent, setNewComponent] = useState({
    project: '',
    name: '',
    description: ''
  });

  // Sample components data - different for each project
  const componentsData = {
    'Project Alpha': [
      { 
        id: 1, 
        name: 'Web Application Front End', 
        description: 'React-based SPA with Redux state management', 
        version: 'v2.1.0', 
        lastDeployment: '2025-01-06 14:23 UTC',
        status: 'deployed'
      },
      { 
        id: 2, 
        name: 'API Gateway', 
        description: 'Kong-based API gateway with rate limiting', 
        version: 'v1.8.2', 
        lastDeployment: '2025-01-05 09:15 UTC',
        status: 'deployed'
      },
      { 
        id: 3, 
        name: 'Application Compute Layer', 
        description: 'Kubernetes cluster with auto-scaling', 
        version: 'v3.0.1', 
        lastDeployment: '2025-01-04 16:45 UTC',
        status: 'deployed'
      },
      { 
        id: 4, 
        name: 'Database Cluster', 
        description: 'PostgreSQL HA cluster with read replicas', 
        version: 'v14.5', 
        lastDeployment: '2025-01-02 11:30 UTC',
        status: 'deployed'
      },
      { 
        id: 5, 
        name: 'Application Storage', 
        description: 'Azure Blob Storage with CDN integration', 
        version: 'v1.2.0', 
        lastDeployment: '2025-01-03 08:00 UTC',
        status: 'deployed'
      }
    ],
    'Project Beta': [
      { 
        id: 6, 
        name: 'Event-Driven Data Processing', 
        description: 'Apache Kafka cluster with Spark streaming', 
        version: 'v2.8.0', 
        lastDeployment: '2025-01-07 10:20 UTC',
        status: 'deployed'
      },
      { 
        id: 7, 
        name: 'API Gateway', 
        description: 'AWS API Gateway with Lambda integration', 
        version: 'v2.0.0', 
        lastDeployment: '2025-01-06 15:30 UTC',
        status: 'deployed'
      },
      { 
        id: 8, 
        name: 'Database Cluster', 
        description: 'MongoDB sharded cluster', 
        version: 'v5.0.3', 
        lastDeployment: '2025-01-05 12:00 UTC',
        status: 'deployed'
      }
    ],
    'Project Gamma': [
      { 
        id: 9, 
        name: 'Web Application Front End', 
        description: 'Vue.js application with Vuex', 
        version: 'v1.5.0', 
        lastDeployment: '2025-01-07 09:00 UTC',
        status: 'deployed'
      },
      { 
        id: 10, 
        name: 'Application Compute Layer', 
        description: 'Docker Swarm cluster', 
        version: 'v2.3.1', 
        lastDeployment: '2025-01-06 13:45 UTC',
        status: 'deployed'
      }
    ]
  };

  const components = componentsData[selectedProject] || [];

  const handleCreateComponent = () => {
    console.log('Creating new component:', newComponent);
    setShowCreateModal(false);
    setNewComponent({ project: '', name: '', description: '' });
  };

  const handleViewComponent = (component) => {
    setSelectedComponent(component);
    setShowComponentBuilder(true);
  };

  const handleManageComponent = (component) => {
    setSelectedComponent(component);
    setShowComponentBuilder(true);
  };

  // Component Builder Page
  if (showComponentBuilder) {
    return <ComponentBuilder 
      component={selectedComponent} 
      onBack={() => {
        setShowComponentBuilder(false);
        setSelectedComponent(null);
      }}
      onOpenStackDefinition={() => setShowStackDefinition(true)}
      showStackDefinition={showStackDefinition}
      setShowStackDefinition={setShowStackDefinition}
      showStackConfig={showStackConfig}
      setShowStackConfig={setShowStackConfig}
      selectedStack={selectedStack}
      setSelectedStack={setSelectedStack}
    />;
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
          <PencilRuler className="w-8 h-8 text-blue-600" />
          InfraBuilder
        </h1>
        <p className="text-gray-600 mt-2">Design and manage infrastructure components for your projects</p>
      </div>

      {/* Project Selector and Create Button */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <label className="text-sm font-semibold text-gray-700">Project:</label>
          <select 
            value={selectedProject}
            onChange={(e) => setSelectedProject(e.target.value)}
            className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="Project Alpha">Project Alpha</option>
            <option value="Project Beta">Project Beta</option>
            <option value="Project Gamma">Project Gamma</option>
          </select>
        </div>
        <button 
          onClick={() => setShowCreateModal(true)}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 font-semibold shadow-lg"
        >
          <Plus className="w-5 h-5" />
          Create New Component
        </button>
      </div>

      {/* Component Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-slate-900 flex items-center gap-2">
            <Layers className="w-5 h-5 text-blue-600" />
            Component Table
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Component Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Version
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Project
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Last Deployment
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {components.map((component) => (
                <tr key={component.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div 
                      className="font-medium text-slate-900 cursor-pointer hover:text-blue-600 transition-colors"
                      onClick={() => handleViewComponent(component)}
                    >
                      {component.name}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {component.description}
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded-full">
                      {component.version}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {selectedProject}
                  </td>
                  <td className="px-6 py-4">
                    <a href="#" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                      {component.lastDeployment}
                    </a>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button 
                        onClick={() => handleViewComponent(component)}
                        className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-1"
                      >
                        <Eye className="w-4 h-4" />
                        View
                      </button>
                      <button 
                        onClick={() => handleManageComponent(component)}
                        className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors flex items-center gap-1"
                      >
                        <Settings className="w-4 h-4" />
                        Manage
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Create New Component Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Create New Component</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Select Project
                </label>
                <select 
                  value={newComponent.project}
                  onChange={(e) => setNewComponent({...newComponent, project: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Choose a project...</option>
                  <option value="Project Alpha">Project Alpha</option>
                  <option value="Project Beta">Project Beta</option>
                  <option value="Project Gamma">Project Gamma</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Component Name
                </label>
                <input 
                  type="text"
                  value={newComponent.name}
                  onChange={(e) => setNewComponent({...newComponent, name: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter component name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Component Description
                </label>
                <textarea 
                  value={newComponent.description}
                  onChange={(e) => setNewComponent({...newComponent, description: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  rows="3"
                  placeholder="Enter component description"
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button 
                onClick={() => setShowCreateModal(false)}
                className="px-6 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={handleCreateComponent}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Create Component
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Component Builder Page
const ComponentBuilder = ({ 
  component, 
  onBack, 
  onOpenStackDefinition,
  showStackDefinition,
  setShowStackDefinition,
  showStackConfig,
  setShowStackConfig,
  selectedStack,
  setSelectedStack
}) => {
  const [stacks, setStacks] = useState([]);
  const [showCustomStack, setShowCustomStack] = useState(false);
  const [resourceConfigs, setResourceConfigs] = useState({});
  const [configuredResources, setConfiguredResources] = useState(new Set());

  if (showStackDefinition) {
    return <StackDefinition 
      onBack={() => setShowStackDefinition(false)}
      onSelectStack={(stack) => {
        setSelectedStack(stack);
        setShowStackDefinition(false);
        setShowStackConfig(true);
      }}
      showCustomStack={showCustomStack}
      setShowCustomStack={setShowCustomStack}
    />;
  }

  if (showStackConfig) {
    return <StackConfiguration
      stack={selectedStack}
      onBack={() => {
        setShowStackConfig(false);
        setSelectedStack(null);
      }}
      onSave={(stack) => {
        setStacks([...stacks, stack]);
        setShowStackConfig(false);
        setSelectedStack(null);
      }}
      resourceConfigs={resourceConfigs}
      setResourceConfigs={setResourceConfigs}
      configuredResources={configuredResources}
      setConfiguredResources={setConfiguredResources}
    />;
  }

  return (
    <div className="p-8">
      <div className="mb-6">
        <button 
          onClick={onBack}
          className="text-gray-600 hover:text-gray-900 flex items-center gap-2 mb-4"
        >
          <ChevronLeft className="w-5 h-5" />
          Back to Components
        </button>
        <h1 className="text-3xl font-bold text-slate-900">Component Builder</h1>
      </div>

      {/* Component Details Box */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Component Details</h2>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="font-semibold text-gray-600">Name:</span>
            <p className="text-gray-900 mt-1">{component.name}</p>
          </div>
          <div>
            <span className="font-semibold text-gray-600">Version:</span>
            <p className="text-gray-900 mt-1">{component.version}</p>
          </div>
          <div className="col-span-2">
            <span className="font-semibold text-gray-600">Description:</span>
            <p className="text-gray-900 mt-1">{component.description}</p>
          </div>
          <div>
            <span className="font-semibold text-gray-600">Last Deployment:</span>
            <p className="text-gray-900 mt-1">{component.lastDeployment}</p>
          </div>
          <div>
            <span className="font-semibold text-gray-600">Status:</span>
            <span className="ml-2 px-2 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded-full">
              {component.status}
            </span>
          </div>
        </div>
      </div>

      {/* Graph UI Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Component Architecture</h2>
        
        <div className="min-h-[400px] bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 relative">
          {stacks.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-[400px]">
              <Layers className="w-16 h-16 text-gray-400 mb-4" />
              <p className="text-gray-600 mb-4">No stacks configured yet</p>
              <button 
                onClick={onOpenStackDefinition}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 font-semibold"
              >
                <Plus className="w-5 h-5" />
                Add Stacks
              </button>
            </div>
          ) : (
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Configured Stacks</h3>
                <button 
                  onClick={onOpenStackDefinition}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 text-sm"
                >
                  <Plus className="w-4 h-4" />
                  Add Stack
                </button>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {stacks.map((stack, index) => (
                  <div key={index} className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <Server className="w-5 h-5 text-blue-600" />
                      <h4 className="font-semibold text-gray-900">{stack.name}</h4>
                    </div>
                    <p className="text-sm text-gray-600">{stack.resources.length} resources</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Stack Definition Page
const StackDefinition = ({ onBack, onSelectStack, showCustomStack, setShowCustomStack }) => {
  const [showPreview, setShowPreview] = useState(false);
  const [previewStack, setPreviewStack] = useState(null);

  const prebuiltStacks = [
    { 
      id: 1, 
      name: 'Azure VM + Storage', 
      description: 'Virtual Machine deployment with corresponding Azure Storage Account, Network Security Groups, and backup configuration',
      resources: ['Azure Virtual Machine', 'Storage Account (Blob + Files)', 'Virtual Network + Subnet', 'Network Security Group', 'Recovery Services Vault'],
      image: 'stackTemplate1.png',
      cost: '$180-320/month',
      deployTime: '8-12 minutes'
    },
    { 
      id: 2, 
      name: 'AKS + PaaS Database', 
      description: 'Azure Kubernetes Service with managed SQL Server database connectivity, including ingress, monitoring, and secrets management',
      resources: ['AKS Cluster (3 nodes)', 'Azure SQL Database', 'Application Gateway', 'Key Vault for secrets', 'Azure Monitor + Log Analytics'],
      image: 'stackTemplate1.png',
      cost: '$450-800/month',
      deployTime: '15-20 minutes'
    },
    { 
      id: 3, 
      name: 'Multi-Tier Web App', 
      description: 'Complete 3-tier web application with load balancer, multiple VMs, and database backend with Redis caching layer',
      resources: ['Load Balancer + 2 Web VMs', 'Application VM (API tier)', 'Azure SQL Database', 'Redis Cache', 'Storage Account + CDN'],
      image: 'stackTemplate2.png',
      cost: '$650-1200/month',
      deployTime: '20-25 minutes'
    },
    { 
      id: 4, 
      name: 'Data Analytics Platform', 
      description: 'Complete data platform with ingestion, processing, and analytics capabilities using Azure data services',
      resources: ['Data Factory (ETL)', 'Azure Synapse Analytics', 'Data Lake Storage Gen2', 'Power BI Embedded', 'Event Hub for streaming'],
      image: 'stackTemplate2.png',
      cost: '$800-1500/month',
      deployTime: '25-30 minutes'
    }
  ];

  const handlePreview = (stack) => {
    setPreviewStack(stack);
    setShowPreview(true);
  };

  if (showCustomStack) {
    return <CustomStackBuilder 
      onBack={() => setShowCustomStack(false)}
      onSave={(stack) => {
        onSelectStack(stack);
        setShowCustomStack(false);
      }}
    />;
  }

  if (showPreview && previewStack) {
    return <StackPreview 
      stack={previewStack}
      onBack={() => {
        setShowPreview(false);
        setPreviewStack(null);
      }}
      onSelect={() => {
        onSelectStack(previewStack);
        setShowPreview(false);
        setPreviewStack(null);
      }}
    />;
  }

  return (
    <div className="p-8">
      <div className="mb-6">
        <button 
          onClick={onBack}
          className="text-gray-600 hover:text-gray-900 flex items-center gap-2 mb-4"
        >
          <ChevronLeft className="w-5 h-5" />
          Back to Component Builder
        </button>
        <h1 className="text-3xl font-bold text-slate-900">Stack Definition</h1>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {/* PreBuilt Stacks */}
        <div>
          <h2 className="text-xl font-semibold text-slate-900 mb-4">PreBuilt Stacks</h2>
          <div className="space-y-4">
            {prebuiltStacks.map((stack) => (
              <div key={stack.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{stack.name}</h3>
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                    APPROVED
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-4">{stack.description}</p>
                
                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-500 mb-2">INCLUDES:</p>
                  <div className="flex flex-wrap gap-2">
                    {stack.resources.map((resource, idx) => (
                      <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                        {resource}
                      </span>
                    ))}
                  </div>
                </div>

                {stack.cost && (
                  <div className="mb-4 space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Est. Cost:</span>
                      <span className="font-semibold text-gray-900">{stack.cost}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Deploy Time:</span>
                      <span className="font-semibold text-gray-900">{stack.deployTime}</span>
                    </div>
                  </div>
                )}

                <div className="flex gap-2">
                  <button 
                    onClick={() => handlePreview(stack)}
                    className="px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex-1"
                  >
                    Preview
                  </button>
                  <button 
                    onClick={() => onSelectStack(stack)}
                    className="px-6 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                  >
                    Use Pattern
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Stacks */}
        <div>
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Custom Stacks</h2>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex flex-col items-center justify-center py-8">
              <Package className="w-16 h-16 text-gray-400 mb-4" />
              <p className="text-gray-600 mb-4 text-center">
                Build your own custom stack by selecting and configuring individual cloud resources
              </p>
              <button 
                onClick={() => setShowCustomStack(true)}
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2 font-semibold"
              >
                <Plus className="w-5 h-5" />
                Create Custom Stack
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Stack Preview Component
const StackPreview = ({ stack, onBack, onSelect }) => {
  const [previewResources] = useState(() => 
    stack.resources.map((resourceName, idx) => ({
      id: `preview-${resourceName.toLowerCase().replace(/\s+/g, '-')}-${idx}`,
      name: resourceName,
      position: { 
        x: 150 + (idx % 3) * 350,
        y: 120 + Math.floor(idx / 3) * 200
      },
      icon: getResourceIcon(resourceName),
      color: getResourceColor(resourceName)
    }))
  );

  const [connections] = useState(() => generateDefaultConnections(previewResources));

  // Helper functions (same as in StackConfiguration)
  function getResourceIcon(resourceName) {
    if (resourceName.toLowerCase().includes('vm') || resourceName.toLowerCase().includes('instance')) return Server;
    if (resourceName.toLowerCase().includes('storage') || resourceName.toLowerCase().includes('bucket') || resourceName.toLowerCase().includes('blob')) return HardDrive;
    if (resourceName.toLowerCase().includes('database') || resourceName.toLowerCase().includes('sql') || resourceName.toLowerCase().includes('cosmos') || resourceName.toLowerCase().includes('dynamo') || resourceName.toLowerCase().includes('rds')) return Database;
    if (resourceName.toLowerCase().includes('network') || resourceName.toLowerCase().includes('vpc') || resourceName.toLowerCase().includes('vnet')) return Network;
    if (resourceName.toLowerCase().includes('load') || resourceName.toLowerCase().includes('balancer') || resourceName.toLowerCase().includes('gateway')) return Activity;
    if (resourceName.toLowerCase().includes('kubernetes') || resourceName.toLowerCase().includes('aks') || resourceName.toLowerCase().includes('ecs')) return Container;
    if (resourceName.toLowerCase().includes('function') || resourceName.toLowerCase().includes('lambda')) return Zap;
    if (resourceName.toLowerCase().includes('monitor') || resourceName.toLowerCase().includes('analytics') || resourceName.toLowerCase().includes('synapse') || resourceName.toLowerCase().includes('databricks')) return BarChart3;
    if (resourceName.toLowerCase().includes('app') || resourceName.toLowerCase().includes('web')) return Globe;
    return Server;
  }

  function getResourceColor(resourceName) {
    if (resourceName.toLowerCase().includes('vm') || resourceName.toLowerCase().includes('instance')) return 'blue';
    if (resourceName.toLowerCase().includes('storage') || resourceName.toLowerCase().includes('bucket')) return 'green';
    if (resourceName.toLowerCase().includes('database') || resourceName.toLowerCase().includes('sql')) return 'orange';
    if (resourceName.toLowerCase().includes('network') || resourceName.toLowerCase().includes('vpc')) return 'cyan';
    if (resourceName.toLowerCase().includes('load') || resourceName.toLowerCase().includes('gateway')) return 'indigo';
    if (resourceName.toLowerCase().includes('kubernetes') || resourceName.toLowerCase().includes('aks')) return 'purple';
    if (resourceName.toLowerCase().includes('function') || resourceName.toLowerCase().includes('lambda')) return 'yellow';
    if (resourceName.toLowerCase().includes('monitor') || resourceName.toLowerCase().includes('analytics')) return 'pink';
    return 'blue';
  }

  function generateDefaultConnections(resources) {
    const connections = [];
    for (let i = 0; i < resources.length - 1; i++) {
      connections.push({
        id: `${resources[i].id}-${resources[i + 1].id}`,
        from: resources[i].id,
        to: resources[i + 1].id,
        label: ''
      });
    }
    return connections;
  }

  const getResourceCenter = (resource) => {
    return {
      x: resource.position.x + 125,
      y: resource.position.y + 60
    };
  };

  return (
    <div className="h-screen bg-gray-900 flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-700 bg-gray-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={onBack}
              className="text-gray-400 hover:text-white flex items-center gap-2"
            >
              <ChevronLeft className="w-5 h-5" />
              Back to Stack Selection
            </button>
            <div>
              <h1 className="text-xl font-semibold text-white">Stack Preview: {stack.name}</h1>
              <div className="flex items-center gap-2 mt-1">
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                  APPROVED
                </span>
                <span className="text-gray-400 text-sm">{stack.resources.length} resources</span>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={onBack}
              className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
            >
              Cancel
            </button>
            <button 
              onClick={onSelect}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Use This Stack
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Left Panel - Stack Details */}
        <div className="w-80 bg-gray-800 border-r border-gray-700 overflow-y-auto">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Stack Information</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-gray-300 mb-2">Description</h3>
                <p className="text-gray-400 text-sm">{stack.description}</p>
              </div>

              {stack.cost && (
                <div>
                  <h3 className="text-sm font-semibold text-gray-300 mb-2">Estimated Cost</h3>
                  <p className="text-green-400 font-semibold">{stack.cost}</p>
                </div>
              )}

              {stack.deployTime && (
                <div>
                  <h3 className="text-sm font-semibold text-gray-300 mb-2">Deployment Time</h3>
                  <p className="text-blue-400 font-semibold">{stack.deployTime}</p>
                </div>
              )}

              <div>
                <h3 className="text-sm font-semibold text-gray-300 mb-3">Included Resources</h3>
                <div className="space-y-2">
                  {stack.resources.map((resource, idx) => {
                    const Icon = getResourceIcon(resource);
                    const color = getResourceColor(resource);
                    return (
                      <div key={idx} className="flex items-center gap-3 p-2 bg-gray-700 rounded-lg">
                        <div className={`w-8 h-8 rounded-lg bg-${color}-600 flex items-center justify-center`}>
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-white text-sm font-medium">{resource}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-300 mb-3">Key Features</h3>
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Production-ready configuration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Security best practices included</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Auto-scaling capabilities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Monitoring and logging enabled</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Backup and disaster recovery</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Visual Preview */}
        <div className="flex-1 flex flex-col">
          <div className="p-4 border-b border-gray-700 bg-gray-800">
            <h2 className="text-lg font-semibold text-white">Architecture Preview</h2>
            <p className="text-gray-400 text-sm mt-1">Visual representation of the stack components and their connections</p>
          </div>

          <div className="flex-1 bg-gray-900 relative overflow-hidden"
               style={{ backgroundImage: 'radial-gradient(circle, #374151 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
            
            {/* Preview overlay */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-4 py-2 rounded-lg shadow-lg z-20 flex items-center gap-2">
              <Eye className="w-4 h-4" />
              <span className="text-sm font-medium">Preview Mode - Read Only</span>
            </div>

            {/* SVG for connection lines */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none z-10"
              style={{ zIndex: 1 }}
            >
              {connections.map(connection => {
                const fromResource = previewResources.find(r => r.id === connection.from);
                const toResource = previewResources.find(r => r.id === connection.to);
                
                if (!fromResource || !toResource) return null;
                
                const fromCenter = getResourceCenter(fromResource);
                const toCenter = getResourceCenter(toResource);
                
                return (
                  <g key={connection.id}>
                    <defs>
                      <marker
                        id={`preview-arrowhead-${connection.id}`}
                        markerWidth="10"
                        markerHeight="7"
                        refX="9"
                        refY="3.5"
                        orient="auto"
                      >
                        <polygon
                          points="0 0, 10 3.5, 0 7"
                          fill="#A855F7"
                        />
                      </marker>
                    </defs>
                    
                    <line
                      x1={fromCenter.x}
                      y1={fromCenter.y}
                      x2={toCenter.x}
                      y2={toCenter.y}
                      stroke="#A855F7"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      markerEnd={`url(#preview-arrowhead-${connection.id})`}
                    />
                  </g>
                );
              })}
            </svg>

            {/* Resources */}
            <div className="relative w-full h-full" style={{ zIndex: 2 }}>
              {previewResources.map((resource) => {
                const Icon = resource.icon;
                
                return (
                  <div 
                    key={resource.id}
                    className="absolute cursor-default"
                    style={{ left: resource.position.x, top: resource.position.y }}
                  >
                    <div className="bg-gray-800 border-2 border-purple-500 rounded-lg p-4 min-w-[250px] shadow-lg shadow-purple-500/20 hover:scale-105 transition-transform">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-10 h-10 rounded-lg bg-${resource.color}-600 flex items-center justify-center`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-medium text-sm">{resource.name}</h4>
                          <p className="text-purple-400 text-xs">Ready for configuration</p>
                        </div>
                      </div>
                      
                      {/* Connection points */}
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                      </div>
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                      </div>
                      <div className="absolute -left-1 top-1/2 transform -translate-y-1/2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                      </div>
                      <div className="absolute -right-1 top-1/2 transform -translate-y-1/2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Info Bar */}
          <div className="p-4 bg-gray-800 border-t border-gray-700">
            <div className="flex items-center justify-between text-sm text-gray-400">
              <div className="flex items-center gap-4">
                <span>Resources: {previewResources.length}</span>
                <span>Connections: {connections.length}</span>
                <span>Status: Preview Mode</span>
              </div>
              <div className="flex items-center gap-4">
                <span>Cost: {stack.cost || 'N/A'}</span>
                <span>Deploy: {stack.deployTime || 'N/A'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Stack Configuration Page
const StackConfiguration = ({ stack, onBack, onSave, resourceConfigs, setResourceConfigs, configuredResources, setConfiguredResources }) => {
  const [showResourceConfig, setShowResourceConfig] = useState(false);
  const [selectedResource, setSelectedResource] = useState(null);
  const [isDraggingResource, setIsDraggingResource] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [stackResources, setStackResources] = useState(() => 
    stack.resources.map((resourceName, idx) => ({
      id: `${resourceName.toLowerCase().replace(/\s+/g, '-')}-${idx}`,
      name: resourceName,
      position: { 
        x: 150 + (idx % 3) * 350,  // Increased spacing from 250 to 350
        y: 120 + Math.floor(idx / 3) * 200  // Increased spacing from 150 to 200
      },
      configured: configuredResources.has(resourceName),
      icon: getResourceIcon(resourceName),
      color: getResourceColor(resourceName)
    }))
  );
  const [connections, setConnections] = useState(() => generateDefaultConnections(stackResources));

  // Helper functions to assign icons and colors based on resource name
  function getResourceIcon(resourceName) {
    if (resourceName.toLowerCase().includes('vm') || resourceName.toLowerCase().includes('instance')) return Server;
    if (resourceName.toLowerCase().includes('storage') || resourceName.toLowerCase().includes('bucket') || resourceName.toLowerCase().includes('blob')) return HardDrive;
    if (resourceName.toLowerCase().includes('database') || resourceName.toLowerCase().includes('sql') || resourceName.toLowerCase().includes('cosmos') || resourceName.toLowerCase().includes('dynamo') || resourceName.toLowerCase().includes('rds')) return Database;
    if (resourceName.toLowerCase().includes('network') || resourceName.toLowerCase().includes('vpc') || resourceName.toLowerCase().includes('vnet')) return Network;
    if (resourceName.toLowerCase().includes('load') || resourceName.toLowerCase().includes('balancer') || resourceName.toLowerCase().includes('gateway')) return Activity;
    if (resourceName.toLowerCase().includes('kubernetes') || resourceName.toLowerCase().includes('aks') || resourceName.toLowerCase().includes('ecs')) return Container;
    if (resourceName.toLowerCase().includes('function') || resourceName.toLowerCase().includes('lambda')) return Zap;
    if (resourceName.toLowerCase().includes('monitor') || resourceName.toLowerCase().includes('analytics') || resourceName.toLowerCase().includes('synapse') || resourceName.toLowerCase().includes('databricks')) return BarChart3;
    if (resourceName.toLowerCase().includes('app') || resourceName.toLowerCase().includes('web')) return Globe;
    return Server; // Default icon
  }

  function getResourceColor(resourceName) {
    if (resourceName.toLowerCase().includes('vm') || resourceName.toLowerCase().includes('instance')) return 'blue';
    if (resourceName.toLowerCase().includes('storage') || resourceName.toLowerCase().includes('bucket')) return 'green';
    if (resourceName.toLowerCase().includes('database') || resourceName.toLowerCase().includes('sql')) return 'orange';
    if (resourceName.toLowerCase().includes('network') || resourceName.toLowerCase().includes('vpc')) return 'cyan';
    if (resourceName.toLowerCase().includes('load') || resourceName.toLowerCase().includes('gateway')) return 'indigo';
    if (resourceName.toLowerCase().includes('kubernetes') || resourceName.toLowerCase().includes('aks')) return 'purple';
    if (resourceName.toLowerCase().includes('function') || resourceName.toLowerCase().includes('lambda')) return 'yellow';
    if (resourceName.toLowerCase().includes('monitor') || resourceName.toLowerCase().includes('analytics')) return 'pink';
    return 'blue'; // Default color
  }

  function generateDefaultConnections(resources) {
    const connections = [];
    // Create logical connections based on common patterns
    for (let i = 0; i < resources.length - 1; i++) {
      if (i < resources.length - 1) {
        connections.push({
          id: `${resources[i].id}-${resources[i + 1].id}`,
          from: resources[i].id,
          to: resources[i + 1].id,
          label: ''
        });
      }
    }
    return connections;
  }

  // Handle manual dragging of resources on canvas
  const handleResourceMouseDown = (e, resource) => {
    if (e.button !== 0) return; // Only handle left mouse button
    
    e.preventDefault();
    e.stopPropagation();
    
    const rect = e.currentTarget.getBoundingClientRect();
    
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
    
    setIsDraggingResource(resource.id);
    setSelectedResource(resource.name);
  };

  const handleCanvasMouseMove = (e) => {
    if (isDraggingResource) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left - dragOffset.x;
      const y = e.clientY - rect.top - dragOffset.y;
      
      setStackResources(prev => prev.map(r => 
        r.id === isDraggingResource 
          ? { ...r, position: { x: Math.max(0, Math.min(x, rect.width - 250)), y: Math.max(0, Math.min(y, rect.height - 120)) }}
          : r
      ));
    }
  };

  const handleCanvasMouseUp = () => {
    setIsDraggingResource(false);
    setDragOffset({ x: 0, y: 0 });
  };

  const handleResourceClick = (e, resource) => {
    e.stopPropagation();
    
    // Only open config if not dragging
    if (!isDraggingResource) {
      setSelectedResource(resource.name);
      setShowResourceConfig(true);
    }
  };

  const handleSaveResourceConfig = (config) => {
    setResourceConfigs({...resourceConfigs, [selectedResource]: config});
    setConfiguredResources(new Set([...configuredResources, selectedResource]));
    
    // Update the resource in stackResources
    setStackResources(prev => prev.map(r => 
      r.name === selectedResource 
        ? { ...r, configured: true }
        : r
    ));
    
    setShowResourceConfig(false);
    setSelectedResource(null);
  };

  const allResourcesConfigured = stackResources.every(r => r.configured);

  const getResourceCenter = (resource) => {
    return {
      x: resource.position.x + 100, // Half of resource width
      y: resource.position.y + 50   // Half of resource height
    };
  };

  return (
    <div className="h-screen bg-gray-900 flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-700 bg-gray-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={onBack}
              className="text-gray-400 hover:text-white flex items-center gap-2"
            >
              <ChevronLeft className="w-5 h-5" />
              Back to Stack Selection
            </button>
            <h1 className="text-xl font-semibold text-white">Configure Stack: {stack.name}</h1>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={onBack}
              className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
            >
              Cancel
            </button>
            <button 
              onClick={() => onSave(stack)}
              disabled={!allResourcesConfigured}
              className={`px-6 py-2 rounded-lg transition-colors ${
                allResourcesConfigured
                  ? 'bg-green-600 text-white hover:bg-green-700'
                  : 'bg-gray-600 text-gray-400 cursor-not-allowed'
              }`}
            >
              Save Stack
            </button>
          </div>
        </div>
      </div>

      {/* Canvas */}
      <div className="flex-1 bg-gray-900 relative overflow-hidden select-none"
           style={{ backgroundImage: 'radial-gradient(circle, #374151 1px, transparent 1px)', backgroundSize: '20px 20px' }}
           onMouseMove={handleCanvasMouseMove}
           onMouseUp={handleCanvasMouseUp}
           onMouseLeave={handleCanvasMouseUp}>
        
        {/* Instruction overlay */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg z-20 flex items-center gap-2">
          <Settings className="w-4 h-4" />
          <span className="text-sm font-medium">
            Drag resources to move them • Click to configure • Resources with red borders need configuration
          </span>
        </div>

        {/* SVG for connection lines */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
          style={{ zIndex: 1 }}
        >
          {connections.map(connection => {
            const fromResource = stackResources.find(r => r.id === connection.from);
            const toResource = stackResources.find(r => r.id === connection.to);
            
            if (!fromResource || !toResource) return null;
            
            const fromCenter = getResourceCenter(fromResource);
            const toCenter = getResourceCenter(toResource);
            
            return (
              <g key={connection.id}>
                <defs>
                  <marker
                    id={`arrowhead-${connection.id}`}
                    markerWidth="10"
                    markerHeight="7"
                    refX="9"
                    refY="3.5"
                    orient="auto"
                  >
                    <polygon
                      points="0 0, 10 3.5, 0 7"
                      fill="#60A5FA"
                    />
                  </marker>
                </defs>
                
                <line
                  x1={fromCenter.x}
                  y1={fromCenter.y}
                  x2={toCenter.x}
                  y2={toCenter.y}
                  stroke="#60A5FA"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  markerEnd={`url(#arrowhead-${connection.id})`}
                />
              </g>
            );
          })}
        </svg>

        {/* Resources */}
        <div className="relative w-full h-full" style={{ zIndex: 2 }}>
          {stackResources.map((resource) => {
            const Icon = resource.icon;
            const isDragging = isDraggingResource === resource.id;
            
            return (
              <div 
                key={resource.id}
                className={`absolute group ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
                style={{ 
                  left: resource.position.x, 
                  top: resource.position.y,
                  zIndex: isDragging ? 1000 : selectedResource === resource.name ? 100 : 10
                }}
                onMouseDown={(e) => handleResourceMouseDown(e, resource)}
                onClick={(e) => handleResourceClick(e, resource)}
              >
                <div className={`bg-gray-800 border-2 rounded-lg p-4 min-w-[250px] transition-all ${
                  resource.configured 
                    ? 'border-green-500 shadow-lg shadow-green-500/20' 
                    : 'border-red-500 shadow-lg shadow-red-500/20'
                } ${selectedResource === resource.name ? 'ring-2 ring-blue-500' : ''}
                ${isDragging ? 'scale-105 rotate-1' : 'hover:scale-102'}`}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-10 h-10 rounded-lg bg-${resource.color}-600 flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-medium text-sm">{resource.name}</h4>
                      <p className={`text-xs ${resource.configured ? 'text-green-400' : 'text-red-400'}`}>
                        {resource.configured ? 'Configured' : 'Click to configure'}
                      </p>
                    </div>
                  </div>
                  
                  {/* Connection points */}
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                  <div className="absolute -left-1 top-1/2 transform -translate-y-1/2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                  <div className="absolute -right-1 top-1/2 transform -translate-y-1/2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Status Bar */}
      <div className="p-4 bg-gray-800 border-t border-gray-700 flex items-center justify-between">
        <div className="flex items-center gap-4 text-sm text-gray-400">
          <span>Resources: {stackResources.length}</span>
          <span>Configured: {stackResources.filter(r => r.configured).length}</span>
          <span>Connections: {connections.length}</span>
          {isDraggingResource && (
            <span className="text-blue-400 flex items-center gap-1">
              <Activity className="w-3 h-3" />
              Dragging Resource
            </span>
          )}
        </div>
        <div className="flex items-center gap-4 text-sm text-gray-400">
          <span>Estimated Cost: {stack.cost || 'N/A'}</span>
          <span>Deploy Time: {stack.deployTime || 'N/A'}</span>
          <span>Tips: Drag to move • Click to configure</span>
        </div>
      </div>

      {/* Resource Configuration Panel */}
      {showResourceConfig && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-xl shadow-2xl max-w-md w-full mx-4 border border-gray-700">
            <div className="p-6 border-b border-gray-700 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">Configure {selectedResource}</h2>
              <button 
                onClick={() => setShowResourceConfig(false)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Resource Name
                </label>
                <input 
                  type="text"
                  className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter resource name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Region
                </label>
                <select className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                  <option>East US</option>
                  <option>West US</option>
                  <option>Central US</option>
                  <option>North Europe</option>
                  <option>West Europe</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  SKU / Size
                </label>
                <select className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                  <option>Standard_B1s (1 vCPU, 1 GB RAM)</option>
                  <option>Standard_B2s (2 vCPU, 4 GB RAM)</option>
                  <option>Standard_D2s_v3 (2 vCPU, 8 GB RAM)</option>
                  <option>Standard_D4s_v3 (4 vCPU, 16 GB RAM)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Tags
                </label>
                <div className="space-y-2">
                  <input 
                    type="text"
                    placeholder="Environment: production"
                    className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
                  />
                  <input 
                    type="text"
                    placeholder="Project: infrastructure"
                    className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Additional Configuration
                </label>
                <textarea 
                  className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  rows="3"
                  placeholder="Custom terraform variables..."
                />
              </div>
            </div>

            <div className="p-6 border-t border-gray-700 flex justify-end gap-3">
              <button 
                onClick={() => setShowResourceConfig(false)}
                className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={() => handleSaveResourceConfig({})}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                Save Configuration
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Custom Stack Builder
const CustomStackBuilder = ({ onBack, onSave }) => {
  const [customStack, setCustomStack] = useState({ name: '', resources: [] });
  const [draggedResource, setDraggedResource] = useState(null);
  const [selectedResource, setSelectedResource] = useState(null);
  const [expandedCategories, setExpandedCategories] = useState(['azure', 'aws']);
  const [connections, setConnections] = useState([]);
  const [showConfigPanel, setShowConfigPanel] = useState(false);
  const [isDraggingResource, setIsDraggingResource] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectionStart, setConnectionStart] = useState(null);
  const [tempConnection, setTempConnection] = useState(null);

  const resourceCategories = {
    azure: {
      name: 'Azure Services',
      icon: Cloud,
      color: 'blue',
      resources: [
        { id: 'azure-vm', name: 'Azure Virtual Machine', icon: Server, color: 'blue', category: 'compute' },
        { id: 'azure-storage', name: 'Azure Storage Account', icon: HardDrive, color: 'green', category: 'storage' },
        { id: 'azure-aks', name: 'Azure Kubernetes Service', icon: Container, color: 'purple', category: 'compute' },
        { id: 'azure-sql', name: 'Azure SQL Database', icon: Database, color: 'orange', category: 'database' },
        { id: 'azure-vnet', name: 'Azure Virtual Network', icon: Network, color: 'cyan', category: 'network' },
        { id: 'azure-lb', name: 'Azure Load Balancer', icon: Activity, color: 'indigo', category: 'network' },
        { id: 'azure-appservice', name: 'Azure App Service', icon: Globe, color: 'teal', category: 'compute' },
        { id: 'azure-functions', name: 'Azure Functions', icon: Zap, color: 'yellow', category: 'compute' },
        { id: 'azure-cosmosdb', name: 'Azure Cosmos DB', icon: Database, color: 'pink', category: 'database' },
        { id: 'azure-redis', name: 'Azure Cache for Redis', icon: Monitor, color: 'red', category: 'database' }
      ]
    },
    aws: {
      name: 'AWS Services',
      icon: Cloud,
      color: 'orange',
      resources: [
        { id: 'aws-ec2', name: 'AWS EC2 Instance', icon: Server, color: 'orange', category: 'compute' },
        { id: 'aws-s3', name: 'AWS S3 Bucket', icon: HardDrive, color: 'green', category: 'storage' },
        { id: 'aws-lambda', name: 'AWS Lambda', icon: Zap, color: 'yellow', category: 'compute' },
        { id: 'aws-rds', name: 'AWS RDS Database', icon: Database, color: 'blue', category: 'database' },
        { id: 'aws-vpc', name: 'AWS VPC', icon: Network, color: 'cyan', category: 'network' },
        { id: 'aws-elb', name: 'AWS Load Balancer', icon: Activity, color: 'indigo', category: 'network' },
        { id: 'aws-dynamodb', name: 'AWS DynamoDB', icon: Database, color: 'purple', category: 'database' },
        { id: 'aws-apigateway', name: 'AWS API Gateway', icon: Globe, color: 'teal', category: 'network' },
        { id: 'aws-cloudfront', name: 'AWS CloudFront', icon: Monitor, color: 'pink', category: 'network' },
        { id: 'aws-ecs', name: 'AWS ECS', icon: Container, color: 'red', category: 'compute' }
      ]
    }
  };

  const toggleCategory = (category) => {
    setExpandedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleDragStart = (resource) => {
    setDraggedResource(resource);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    if (draggedResource) {
      const newResource = {
        ...draggedResource,
        instanceId: `${draggedResource.id}-${Date.now()}`,
        position: { x: Math.max(0, x - 100), y: Math.max(0, y - 50) },
        configured: false,
        config: getDefaultConfig(draggedResource.id)
      };
      setCustomStack({
        ...customStack,
        resources: [...customStack.resources, newResource]
      });
      setDraggedResource(null);
    }
  };

  // Handle manual dragging of resources on canvas
  const handleResourceMouseDown = (e, resource) => {
    if (e.button !== 0) return; // Only handle left mouse button
    if (isConnecting) return; // Don't drag while connecting
    
    e.preventDefault();
    e.stopPropagation();
    
    const rect = e.currentTarget.getBoundingClientRect();
    const canvasRect = e.currentTarget.closest('.canvas-container').getBoundingClientRect();
    
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
    
    setIsDraggingResource(resource.instanceId);
    setSelectedResource(resource);
  };

  const handleCanvasMouseMove = (e) => {
    if (isDraggingResource) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left - dragOffset.x;
      const y = e.clientY - rect.top - dragOffset.y;
      
      setCustomStack(prev => ({
        ...prev,
        resources: prev.resources.map(r => 
          r.instanceId === isDraggingResource 
            ? { ...r, position: { x: Math.max(0, Math.min(x, rect.width - 200)), y: Math.max(0, Math.min(y, rect.height - 100)) }}
            : r
        )
      }));
    }
    
    if (tempConnection) {
      const rect = e.currentTarget.getBoundingClientRect();
      setTempConnection(prev => ({
        ...prev,
        endX: e.clientX - rect.left,
        endY: e.clientY - rect.top
      }));
    }
  };

  const handleCanvasMouseUp = () => {
    setIsDraggingResource(false);
    setDragOffset({ x: 0, y: 0 });
    
    if (tempConnection) {
      setTempConnection(null);
    }
  };

  const handleResourceClick = (e, resource) => {
    e.stopPropagation();
    
    if (isConnecting) {
      if (!connectionStart) {
        // Start connection
        setConnectionStart(resource);
        const rect = e.currentTarget.getBoundingClientRect();
        const canvasRect = e.currentTarget.closest('.canvas-container').getBoundingClientRect();
        setTempConnection({
          startX: rect.left - canvasRect.left + rect.width / 2,
          startY: rect.top - canvasRect.top + rect.height / 2,
          endX: rect.left - canvasRect.left + rect.width / 2,
          endY: rect.top - canvasRect.top + rect.height / 2
        });
      } else if (connectionStart.instanceId !== resource.instanceId) {
        // Complete connection
        const newConnection = {
          id: `${connectionStart.instanceId}-${resource.instanceId}`,
          from: connectionStart.instanceId,
          to: resource.instanceId,
          label: ''
        };
        
        // Check if connection already exists
        const exists = connections.find(c => 
          (c.from === newConnection.from && c.to === newConnection.to) ||
          (c.from === newConnection.to && c.to === newConnection.from)
        );
        
        if (!exists) {
          setConnections(prev => [...prev, newConnection]);
        }
        
        setConnectionStart(null);
        setTempConnection(null);
        setIsConnecting(false);
      }
    } else {
      setSelectedResource(resource);
      setShowConfigPanel(true);
    }
  };

  const toggleConnectionMode = () => {
    setIsConnecting(!isConnecting);
    setConnectionStart(null);
    setTempConnection(null);
  };

  const deleteConnection = (connectionId) => {
    setConnections(prev => prev.filter(c => c.id !== connectionId));
  };

  const getResourceCenter = (resource) => {
    return {
      x: resource.position.x + 100, // Half of resource width (200px)
      y: resource.position.y + 50   // Half of resource height (100px)
    };
  };

  const getDefaultConfig = (resourceId) => {
    const baseConfig = {
      tags: { environment: 'dev', project: '', owner: '', cost_center: '' },
      region: resourceId.startsWith('azure') ? 'East US' : 'us-east-1'
    };

    switch (resourceId) {
      case 'azure-vm':
        return {
          ...baseConfig,
          vm_size: 'Standard_B2s',
          os_disk_type: 'Premium_LRS',
          admin_username: 'azureuser',
          availability_zone: '1',
          enable_backup: true,
          auto_shutdown: true,
          environment_variables: {},
          custom_data: ''
        };
      case 'aws-ec2':
        return {
          ...baseConfig,
          instance_type: 't3.medium',
          ami_id: 'ami-0c02fb55956c7d316',
          key_name: '',
          availability_zone: 'us-east-1a',
          enable_monitoring: true,
          ebs_optimized: true,
          environment_variables: {},
          user_data: ''
        };
      case 'azure-storage':
        return {
          ...baseConfig,
          account_tier: 'Standard',
          account_replication_type: 'LRS',
          enable_https_traffic: true,
          min_tls_version: 'TLS1_2',
          allow_blob_public_access: false,
          container_access_type: 'private'
        };
      case 'aws-s3':
        return {
          ...baseConfig,
          bucket_name: '',
          versioning: true,
          encryption: 'AES256',
          block_public_acls: true,
          block_public_policy: true,
          ignore_public_acls: true,
          restrict_public_buckets: true
        };
      default:
        return baseConfig;
    }
  };

  const updateResourceConfig = (resourceId, config) => {
    setCustomStack({
      ...customStack,
      resources: customStack.resources.map(r => 
        r.instanceId === resourceId 
          ? { ...r, config: { ...r.config, ...config }, configured: true }
          : r
      )
    });
  };

  const removeResource = (resourceId) => {
    setCustomStack({
      ...customStack,
      resources: customStack.resources.filter(r => r.instanceId !== resourceId)
    });
    setSelectedResource(null);
    setShowConfigPanel(false);
  };

  return (
    <div className="h-screen bg-gray-900 flex">
      {/* Left Sidebar - Resource Library */}
      <div className="w-80 bg-gray-800 border-r border-gray-700 overflow-y-auto">
        <div className="p-4 border-b border-gray-700">
          <button 
            onClick={onBack}
            className="text-gray-400 hover:text-white flex items-center gap-2 mb-4"
          >
            <ChevronLeft className="w-5 h-5" />
            Back to Stack Definition
          </button>
          <h2 className="text-white font-semibold text-lg">Add New Resource</h2>
        </div>

        <div className="p-4">
          <input 
            type="text"
            placeholder="Search Resources"
            className="w-full bg-gray-700 text-white placeholder-gray-400 rounded-lg px-3 py-2 mb-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />

          {Object.entries(resourceCategories).map(([key, category]) => (
            <div key={key} className="mb-4">
              <button
                onClick={() => toggleCategory(key)}
                className="w-full flex items-center justify-between p-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-white transition-colors"
              >
                <div className="flex items-center gap-2">
                  <category.icon className="w-5 h-5" />
                  <span className="font-medium">{category.name}</span>
                </div>
                <ChevronRight className={`w-4 h-4 transition-transform ${
                  expandedCategories.includes(key) ? 'rotate-90' : ''
                }`} />
              </button>

              {expandedCategories.includes(key) && (
                <div className="mt-2 space-y-1">
                  {category.resources.map((resource) => {
                    const Icon = resource.icon;
                    return (
                      <div 
                        key={resource.id}
                        draggable
                        onDragStart={() => handleDragStart(resource)}
                        className={`p-3 bg-gray-600 hover:bg-gray-500 rounded-lg cursor-move transition-colors flex items-center gap-3 group`}
                      >
                        <div className={`w-8 h-8 rounded-lg bg-${resource.color}-600 flex items-center justify-center`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-white text-sm font-medium">{resource.name}</span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Center Canvas */}
      <div className="flex-1 flex flex-col">
        <div className="p-4 border-b border-gray-700 bg-gray-800">
          <div className="flex items-center justify-between">
            <input 
              type="text"
              value={customStack.name}
              onChange={(e) => setCustomStack({...customStack, name: e.target.value})}
              className="bg-gray-700 text-white placeholder-gray-400 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none text-lg font-semibold"
              placeholder="Enter stack name"
            />
            <div className="flex gap-2">
              <button 
                onClick={toggleConnectionMode}
                className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-2 ${
                  isConnecting 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-700 text-gray-300 hover:text-white'
                }`}
              >
                <GitBranch className="w-4 h-4" />
                {isConnecting ? 'Cancel Connect' : 'Connect Resources'}
              </button>
              <button 
                onClick={onBack}
                className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={() => onSave(customStack)}
                disabled={customStack.resources.length === 0}
                className={`px-6 py-2 rounded-lg transition-colors ${
                  customStack.resources.length > 0
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                }`}
              >
                Save Stack
              </button>
            </div>
          </div>
        </div>

        <div 
          className="canvas-container flex-1 bg-gray-900 relative overflow-hidden select-none"
          style={{ backgroundImage: 'radial-gradient(circle, #374151 1px, transparent 1px)', backgroundSize: '20px 20px' }}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onMouseMove={handleCanvasMouseMove}
          onMouseUp={handleCanvasMouseUp}
          onMouseLeave={handleCanvasMouseUp}
        >
          {/* Connection mode overlay */}
          {isConnecting && (
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg z-20 flex items-center gap-2">
              <GitBranch className="w-4 h-4" />
              <span className="text-sm font-medium">
                {connectionStart ? 'Click another resource to connect' : 'Click a resource to start connecting'}
              </span>
            </div>
          )}

          {/* SVG for connection lines */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none z-10"
            style={{ zIndex: 1 }}
          >
            {/* Render existing connections */}
            {connections.map(connection => {
              const fromResource = customStack.resources.find(r => r.instanceId === connection.from);
              const toResource = customStack.resources.find(r => r.instanceId === connection.to);
              
              if (!fromResource || !toResource) return null;
              
              const fromCenter = getResourceCenter(fromResource);
              const toCenter = getResourceCenter(toResource);
              
              return (
                <g key={connection.id}>
                  {/* Connection line */}
                  <line
                    x1={fromCenter.x}
                    y1={fromCenter.y}
                    x2={toCenter.x}
                    y2={toCenter.y}
                    stroke="#60A5FA"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    className="cursor-pointer hover:stroke-red-400"
                    onClick={() => deleteConnection(connection.id)}
                  />
                  
                  {/* Arrow marker */}
                  <defs>
                    <marker
                      id={`arrowhead-${connection.id}`}
                      markerWidth="10"
                      markerHeight="7"
                      refX="9"
                      refY="3.5"
                      orient="auto"
                    >
                      <polygon
                        points="0 0, 10 3.5, 0 7"
                        fill="#60A5FA"
                      />
                    </marker>
                  </defs>
                  
                  <line
                    x1={fromCenter.x}
                    y1={fromCenter.y}
                    x2={toCenter.x}
                    y2={toCenter.y}
                    stroke="#60A5FA"
                    strokeWidth="2"
                    markerEnd={`url(#arrowhead-${connection.id})`}
                    className="pointer-events-none"
                  />
                  
                  {/* Connection label background */}
                  {connection.label && (
                    <>
                      <rect
                        x={(fromCenter.x + toCenter.x) / 2 - 20}
                        y={(fromCenter.y + toCenter.y) / 2 - 8}
                        width="40"
                        height="16"
                        fill="#374151"
                        rx="8"
                      />
                      <text
                        x={(fromCenter.x + toCenter.x) / 2}
                        y={(fromCenter.y + toCenter.y) / 2}
                        textAnchor="middle"
                        alignmentBaseline="central"
                        fill="white"
                        fontSize="12"
                        className="pointer-events-none"
                      >
                        {connection.label}
                      </text>
                    </>
                  )}
                </g>
              );
            })}
            
            {/* Temporary connection line while connecting */}
            {tempConnection && (
              <line
                x1={tempConnection.startX}
                y1={tempConnection.startY}
                x2={tempConnection.endX}
                y2={tempConnection.endY}
                stroke="#60A5FA"
                strokeWidth="2"
                strokeDasharray="3,3"
                className="pointer-events-none"
              />
            )}
          </svg>

          {customStack.resources.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
              <Layers className="w-16 h-16 mb-4" />
              <p className="text-xl">Drag resources here to build your custom stack</p>
              <p className="text-sm mt-2">Start by dragging services from the left sidebar</p>
            </div>
          ) : (
            <div className="relative w-full h-full" style={{ zIndex: 2 }}>
              {customStack.resources.map((resource) => {
                const Icon = resource.icon;
                const isDragging = isDraggingResource === resource.instanceId;
                const isConnectionTarget = connectionStart && connectionStart.instanceId === resource.instanceId;
                
                return (
                  <div 
                    key={resource.instanceId}
                    className={`absolute group ${isDragging ? 'cursor-grabbing' : isConnecting ? 'cursor-crosshair' : 'cursor-grab'}`}
                    style={{ 
                      left: resource.position.x, 
                      top: resource.position.y,
                      zIndex: isDragging ? 1000 : selectedResource?.instanceId === resource.instanceId ? 100 : 10
                    }}
                    onMouseDown={(e) => handleResourceMouseDown(e, resource)}
                    onClick={(e) => handleResourceClick(e, resource)}
                  >
                    <div className={`bg-gray-800 border-2 rounded-lg p-4 min-w-[200px] transition-all ${
                      resource.configured 
                        ? 'border-green-500 shadow-lg shadow-green-500/20' 
                        : 'border-red-500 shadow-lg shadow-red-500/20'
                    } ${selectedResource?.instanceId === resource.instanceId ? 'ring-2 ring-blue-500' : ''}
                    ${isConnectionTarget ? 'ring-2 ring-yellow-500 shadow-yellow-500/20' : ''}
                    ${isDragging ? 'scale-105 rotate-1' : 'hover:scale-102'}`}>
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-10 h-10 rounded-lg bg-${resource.color}-600 flex items-center justify-center`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-medium text-sm">{resource.name}</h4>
                          <p className={`text-xs ${resource.configured ? 'text-green-400' : 'text-red-400'}`}>
                            {resource.configured ? 'Configured' : 'Configuration Required'}
                          </p>
                        </div>
                      </div>
                      
                      {/* Connection points */}
                      <div className={`absolute -top-1 left-1/2 transform -translate-x-1/2 transition-all ${isConnecting ? 'scale-150' : ''}`}>
                        <div className={`w-2 h-2 rounded-full ${isConnecting ? 'bg-yellow-400 animate-pulse' : 'bg-blue-500'}`}></div>
                      </div>
                      <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 transition-all ${isConnecting ? 'scale-150' : ''}`}>
                        <div className={`w-2 h-2 rounded-full ${isConnecting ? 'bg-yellow-400 animate-pulse' : 'bg-blue-500'}`}></div>
                      </div>
                      <div className={`absolute -left-1 top-1/2 transform -translate-y-1/2 transition-all ${isConnecting ? 'scale-150' : ''}`}>
                        <div className={`w-2 h-2 rounded-full ${isConnecting ? 'bg-yellow-400 animate-pulse' : 'bg-blue-500'}`}></div>
                      </div>
                      <div className={`absolute -right-1 top-1/2 transform -translate-y-1/2 transition-all ${isConnecting ? 'scale-150' : ''}`}>
                        <div className={`w-2 h-2 rounded-full ${isConnecting ? 'bg-yellow-400 animate-pulse' : 'bg-blue-500'}`}></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Bottom Status Bar */}
        <div className="p-4 bg-gray-800 border-t border-gray-700 flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span>Resources: {customStack.resources.length}</span>
            <span>Configured: {customStack.resources.filter(r => r.configured).length}</span>
            <span>Connections: {connections.length}</span>
            {isConnecting && (
              <span className="text-yellow-400 flex items-center gap-1">
                <GitBranch className="w-3 h-3" />
                Connection Mode
              </span>
            )}
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span>Tips: Drag resources to move them • Click "Connect Resources" to link them</span>
          </div>
        </div>
      </div>

      {/* Right Configuration Panel */}
      {showConfigPanel && selectedResource && (
        <div className="w-96 bg-gray-800 border-l border-gray-700 overflow-y-auto">
          <div className="p-4 border-b border-gray-700 flex items-center justify-between">
            <h3 className="text-white font-semibold">Configure {selectedResource.name}</h3>
            <div className="flex items-center gap-2">
              <button
                onClick={() => removeResource(selectedResource.instanceId)}
                className="text-red-400 hover:text-red-300"
              >
                <Trash2 className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setShowConfigPanel(false)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>
          </div>

          <ResourceConfigPanel 
            resource={selectedResource}
            onConfigUpdate={(config) => updateResourceConfig(selectedResource.instanceId, config)}
          />
        </div>
      )}
    </div>
  );
};

// Resource Configuration Panel Component
const ResourceConfigPanel = ({ resource, onConfigUpdate }) => {
  const [config, setConfig] = useState(resource.config);
  const [expandedSections, setExpandedSections] = useState(['basic']);

  const toggleSection = (section) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const updateConfig = (key, value) => {
    const newConfig = { ...config, [key]: value };
    setConfig(newConfig);
    onConfigUpdate(newConfig);
  };

  const updateTags = (key, value) => {
    const newTags = { ...config.tags, [key]: value };
    updateConfig('tags', newTags);
  };

  const updateEnvironmentVariables = (key, value) => {
    const newEnvVars = { ...config.environment_variables, [key]: value };
    updateConfig('environment_variables', newEnvVars);
  };

  return (
    <div className="p-4 space-y-4">
      {/* Basic Configuration */}
      <div>
        <button
          onClick={() => toggleSection('basic')}
          className="w-full flex items-center justify-between p-2 text-white hover:bg-gray-700 rounded-lg"
        >
          <span className="font-medium">Basic Configuration</span>
          <ChevronRight className={`w-4 h-4 transition-transform ${
            expandedSections.includes('basic') ? 'rotate-90' : ''
          }`} />
        </button>

        {expandedSections.includes('basic') && (
          <div className="mt-2 space-y-3 pl-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Region</label>
              <select 
                value={config.region}
                onChange={(e) => updateConfig('region', e.target.value)}
                className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                {resource.id.startsWith('azure') ? (
                  <>
                    <option value="East US">East US</option>
                    <option value="West US">West US</option>
                    <option value="Central US">Central US</option>
                    <option value="North Europe">North Europe</option>
                    <option value="West Europe">West Europe</option>
                  </>
                ) : (
                  <>
                    <option value="us-east-1">US East (N. Virginia)</option>
                    <option value="us-west-2">US West (Oregon)</option>
                    <option value="eu-west-1">Europe (Ireland)</option>
                    <option value="ap-southeast-1">Asia Pacific (Singapore)</option>
                  </>
                )}
              </select>
            </div>

            {/* Resource-specific basic config */}
            {(resource.id === 'azure-vm' || resource.id === 'aws-ec2') && (
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  {resource.id === 'azure-vm' ? 'VM Size' : 'Instance Type'}
                </label>
                <select 
                  value={resource.id === 'azure-vm' ? config.vm_size : config.instance_type}
                  onChange={(e) => updateConfig(resource.id === 'azure-vm' ? 'vm_size' : 'instance_type', e.target.value)}
                  className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  {resource.id === 'azure-vm' ? (
                    <>
                      <option value="Standard_B1s">Standard_B1s (1 vCPU, 1 GB RAM)</option>
                      <option value="Standard_B2s">Standard_B2s (2 vCPU, 4 GB RAM)</option>
                      <option value="Standard_D2s_v3">Standard_D2s_v3 (2 vCPU, 8 GB RAM)</option>
                      <option value="Standard_D4s_v3">Standard_D4s_v3 (4 vCPU, 16 GB RAM)</option>
                    </>
                  ) : (
                    <>
                      <option value="t3.micro">t3.micro (2 vCPU, 1 GB RAM)</option>
                      <option value="t3.small">t3.small (2 vCPU, 2 GB RAM)</option>
                      <option value="t3.medium">t3.medium (2 vCPU, 4 GB RAM)</option>
                      <option value="m5.large">m5.large (2 vCPU, 8 GB RAM)</option>
                    </>
                  )}
                </select>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Tags Section */}
      <div>
        <button
          onClick={() => toggleSection('tags')}
          className="w-full flex items-center justify-between p-2 text-white hover:bg-gray-700 rounded-lg"
        >
          <span className="font-medium">Resource Tags</span>
          <ChevronRight className={`w-4 h-4 transition-transform ${
            expandedSections.includes('tags') ? 'rotate-90' : ''
          }`} />
        </button>

        {expandedSections.includes('tags') && (
          <div className="mt-2 space-y-3 pl-4">
            {Object.entries(config.tags).map(([key, value]) => (
              <div key={key}>
                <label className="block text-sm font-medium text-gray-300 mb-1 capitalize">{key.replace('_', ' ')}</label>
                <input 
                  type="text"
                  value={value}
                  onChange={(e) => updateTags(key, e.target.value)}
                  className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder={`Enter ${key.replace('_', ' ')}`}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Environment Variables */}
      <div>
        <button
          onClick={() => toggleSection('env')}
          className="w-full flex items-center justify-between p-2 text-white hover:bg-gray-700 rounded-lg"
        >
          <span className="font-medium">Environment Variables</span>
          <ChevronRight className={`w-4 h-4 transition-transform ${
            expandedSections.includes('env') ? 'rotate-90' : ''
          }`} />
        </button>

        {expandedSections.includes('env') && (
          <div className="mt-2 space-y-3 pl-4">
            <div className="space-y-2">
              {Object.entries(config.environment_variables || {}).map(([key, value], index) => (
                <div key={index} className="flex gap-2">
                  <input 
                    type="text"
                    value={key}
                    placeholder="Variable name"
                    className="flex-1 bg-gray-700 text-white rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    readOnly
                  />
                  <input 
                    type="text"
                    value={value}
                    onChange={(e) => updateEnvironmentVariables(key, e.target.value)}
                    placeholder="Variable value"
                    className="flex-1 bg-gray-700 text-white rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              ))}
              <button
                onClick={() => updateEnvironmentVariables(`VAR_${Date.now()}`, '')}
                className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1"
              >
                <Plus className="w-4 h-4" />
                Add Variable
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Advanced Configuration */}
      <div>
        <button
          onClick={() => toggleSection('advanced')}
          className="w-full flex items-center justify-between p-2 text-white hover:bg-gray-700 rounded-lg"
        >
          <span className="font-medium">Advanced Configuration</span>
          <ChevronRight className={`w-4 h-4 transition-transform ${
            expandedSections.includes('advanced') ? 'rotate-90' : ''
          }`} />
        </button>

        {expandedSections.includes('advanced') && (
          <div className="mt-2 space-y-3 pl-4">
            {/* Advanced configs based on resource type */}
            {resource.id === 'azure-vm' && (
              <>
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-300">Enable Backup</label>
                  <input 
                    type="checkbox"
                    checked={config.enable_backup}
                    onChange={(e) => updateConfig('enable_backup', e.target.checked)}
                    className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-300">Auto Shutdown</label>
                  <input 
                    type="checkbox"
                    checked={config.auto_shutdown}
                    onChange={(e) => updateConfig('auto_shutdown', e.target.checked)}
                    className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
                  />
                </div>
              </>
            )}

            {resource.id === 'aws-ec2' && (
              <>
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-300">Enable Monitoring</label>
                  <input 
                    type="checkbox"
                    checked={config.enable_monitoring}
                    onChange={(e) => updateConfig('enable_monitoring', e.target.checked)}
                    className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-300">EBS Optimized</label>
                  <input 
                    type="checkbox"
                    checked={config.ebs_optimized}
                    onChange={(e) => updateConfig('ebs_optimized', e.target.checked)}
                    className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
                  />
                </div>
              </>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                {resource.id.includes('vm') || resource.id.includes('ec2') ? 
                  (resource.id.startsWith('azure') ? 'Custom Data' : 'User Data') : 
                  'Custom Configuration'
                }
              </label>
              <textarea 
                value={resource.id.startsWith('azure') ? config.custom_data : config.user_data || ''}
                onChange={(e) => updateConfig(resource.id.startsWith('azure') ? 'custom_data' : 'user_data', e.target.value)}
                className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                rows="4"
                placeholder="Enter initialization script or configuration"
              />
            </div>
          </div>
        )}
      </div>

      {/* Save Button */}
      <div className="pt-4 border-t border-gray-700">
        <button
          onClick={() => {}}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
        >
          Save Configuration
        </button>
      </div>
    </div>
  );
};

// Enhanced Financial Dashboard
const FinancialDashboard = () => {
  const projects = [
    { name: 'EDP Core', spent: 5234, budget: 6000, color: 'slate' },
    { name: 'TelmaAI', spent: 3245, budget: 3000, color: 'red' },
    { name: 'Corrigo Core', spent: 2681, budget: 4000, color: 'green' },
    { name: 'ScheduleAI', spent: 1687, budget: 2000, color: 'blue' }
  ];

  return (
    <div className="p-8 bg-gradient-to-br from-white to-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-4xl font-bold text-slate-900">Financial Dashboard</h2>
        <div className="flex gap-4">
          <select className="px-6 py-3 border border-gray-200 rounded-xl bg-white text-slate-900 font-medium">
            <option>All Projects</option>
            <option>EDP Core</option>
            <option>Corrigo Core</option>
            <option>TelmaAI</option>
          </select>
          <select className="px-6 py-3 border border-gray-200 rounded-xl bg-white text-slate-900 font-medium">
            <option>July 2025</option>
            <option>June 2025</option>
            <option>May 2025</option>
          </select>
          <button className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl hover:shadow-lg transition-all font-medium">
            <Download className="w-4 h-4 inline mr-2" />
            Export Report
          </button>
        </div>
      </div>

      {/* Cost Metrics */}
      <div className="grid grid-cols-4 gap-8 mb-12">
        <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
          <div className="text-5xl font-bold mb-4 text-slate-700">$12,847</div>
          <div className="text-gray-600 font-medium mb-2">Current Month Spend</div>
          <div className="text-sm text-green-600">↗️ +8.3% vs last month</div>
        </div>
        <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
          <div className="text-5xl font-bold mb-4 text-green-500">$15,000</div>
          <div className="text-gray-600 font-medium mb-2">Monthly Budget</div>
          <div className="text-sm text-green-600">✅ 85.6% utilized</div>
        </div>
        <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
          <div className="text-5xl font-bold mb-4 text-blue-600">$2,153</div>
          <div className="text-gray-600 font-medium mb-2">Budget Remaining</div>
          <div className="text-sm text-orange-600">⏰ 7 days left</div>
        </div>
        <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
          <div className="text-5xl font-bold mb-4 text-red-600">$342</div>
          <div className="text-gray-600 font-medium mb-2">Cost Anomalies</div>
          <div className="text-sm text-red-600">🚨 3 alerts active</div>
        </div>
      </div>

      {/* Spending Alerts */}
      <div className="bg-white rounded-2xl p-8 mb-12 shadow-sm border border-gray-100">
        <h3 className="flex items-center gap-3 mb-8 text-slate-900 font-bold text-xl">
          <AlertTriangle className="w-6 h-6 text-red-600" />
          Spending Alerts
          <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm">3</span>
        </h3>
        
        <div className="space-y-6">
          <div className="flex items-center gap-4 p-6 bg-red-50 border-l-4 border-red-600 rounded-xl">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-red-600" />
            </div>
            <div className="flex-1">
              <div className="font-bold text-red-600 mb-1">TelmaAI Project - Budget Exceeded</div>
              <div className="text-gray-600 text-sm">Current spend: $3,245 | Budget: $3,000 | Overage: $245 (8.2%)</div>
            </div>
            <div className="text-sm text-gray-500">2 hours ago</div>
          </div>
          
          <div className="flex items-center gap-4 p-6 bg-orange-50 border-l-4 border-orange-500 rounded-xl">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-orange-600" />
            </div>
            <div className="flex-1">
              <div className="font-bold text-orange-700 mb-1">Azure VM Costs Spike - EDP Core</div>
              <div className="text-gray-600 text-sm">Daily cost increased by 45% ($156 → $226) - Check vm-web-03 instance</div>
            </div>
            <div className="text-sm text-gray-500">5 hours ago</div>
          </div>
          
          <div className="flex items-center gap-4 p-6 bg-orange-50 border-l-4 border-orange-500 rounded-xl">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-orange-600" />
            </div>
            <div className="flex-1">
              <div className="font-bold text-orange-700 mb-1">Approaching 90% Budget Threshold</div>
              <div className="text-gray-600 text-sm">ScheduleAI project at $2,687 of $3,000 monthly budget</div>
            </div>
            <div className="text-sm text-gray-500">1 day ago</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8">
        {/* Cost Trends Chart */}
        <div className="col-span-2 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-slate-900 font-bold text-xl">Daily Cost Trends - July 2025</h3>
            <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm">
              <option>All Services</option>
              <option>Compute Only</option>
              <option>Storage Only</option>
              <option>Networking Only</option>
            </select>
          </div>
          
          <div className="h-80 bg-gray-50 rounded-xl flex items-center justify-center text-gray-500">
            <div className="text-center">
              <TrendingUp className="w-16 h-16 mx-auto mb-4 text-blue-600" />
              <p className="text-lg font-medium">Cost trend visualization</p>
              <p className="text-sm">Interactive chart would display here</p>
            </div>
          </div>
        </div>

        {/* Project Cost Breakdown */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 className="text-slate-900 font-bold mb-8 text-xl">Project Cost Breakdown</h3>
          
          {projects.map((project) => {
            const percentage = Math.min((project.spent / project.budget) * 100, 100);
            const isOverBudget = project.spent > project.budget;
            
            return (
              <div key={project.name} className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-slate-900">{project.name}</span>
                  <span className={`font-bold ${isOverBudget ? 'text-red-600' : 'text-slate-700'}`}>
                    ${project.spent.toLocaleString()}
                  </span>
                </div>
                <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all duration-500 ${
                      isOverBudget ? 'bg-gradient-to-r from-red-600 to-red-500' : 
                      percentage > 80 ? 'bg-gradient-to-r from-orange-500 to-yellow-500' : 
                      'bg-gradient-to-r from-green-500 to-emerald-500'
                    }`}
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                <div className={`text-sm mt-2 ${isOverBudget ? 'text-red-600' : 'text-gray-600'}`}>
                  Budget: ${project.budget.toLocaleString()} • {Math.round(percentage)}% used
                  {isOverBudget && ' ⚠️'}
                </div>
              </div>
            );
          })}

          {/* Cost Optimization */}
          <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
            <h4 className="text-sm font-bold text-slate-900 mb-4 flex items-center">
              💡 Cost Optimization
            </h4>
            <div className="text-sm text-gray-600 space-y-2">
              <div>• Resize 3 oversized VMs: <strong className="text-green-600">Save $156/month</strong></div>
              <div>• Enable auto-scaling: <strong className="text-green-600">Save $89/month</strong></div>
              <div>• Archive old snapshots: <strong className="text-green-600">Save $34/month</strong></div>
            </div>
            <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700 transition-colors">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Projects Management Page
const ProjectsManagement = () => {
  const [currentView, setCurrentView] = useState('list'); // 'list', 'create', 'view', 'manage'
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Mock project data
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: 'EDP Core Platform',
      description: 'Enterprise Data Platform core services and APIs',
      appName: 'EDP Core',
      appId: 'APP-001',
      executiveOwner: 'Michael Chen',
      appOwner: 'Sarah Wilson',
      projectOwner: 'Chad Kellerman',
      environment: 'Production',
      status: 'Active',
      created: '2024-01-15',
      lastModified: '2024-07-15',
      userCount: 12,
      users: [
        { id: 1, email: 'chad.kellerman@jll.com', role: 'Project Admin', status: 'Active', added: '2024-01-15' },
        { id: 2, email: 'sarah.wilson@jll.com', role: 'Prod Developer', status: 'Active', added: '2024-01-16' },
        { id: 3, email: 'mike.rodriguez@jll.com', role: 'Non-Prod Developer', status: 'Active', added: '2024-01-20' },
        { id: 4, email: 'lisa.chen@jll.com', role: 'Prod DBA', status: 'Active', added: '2024-02-01' }
      ]
    },
    {
      id: 2,
      name: 'TelmaAI Analytics',
      description: 'AI-powered analytics and machine learning platform',
      appName: 'TelmaAI',
      appId: 'APP-002',
      executiveOwner: 'David Park',
      appOwner: 'Lisa Zhang',
      projectOwner: 'Alex Johnson',
      environment: 'Production',
      status: 'Active',
      created: '2024-02-20',
      lastModified: '2024-07-10',
      userCount: 8,
      users: [
        { id: 5, email: 'alex.johnson@jll.com', role: 'Project Admin', status: 'Active', added: '2024-02-20' },
        { id: 6, email: 'lisa.zhang@jll.com', role: 'Prod Developer', status: 'Active', added: '2024-02-21' },
        { id: 7, email: 'tom.wilson@jll.com', role: 'Non-Prod Developer', status: 'Active', added: '2024-03-01' }
      ]
    },
    {
      id: 3,
      name: 'Corrigo Development',
      description: 'Property management system development environment',
      appName: 'Corrigo Core',
      appId: 'APP-003',
      executiveOwner: 'Jennifer Liu',
      appOwner: 'Mark Rodriguez',
      projectOwner: 'Emma Davis',
      environment: 'Non-Production',
      status: 'Active',
      created: '2024-03-10',
      lastModified: '2024-07-12',
      userCount: 15,
      users: [
        { id: 8, email: 'emma.davis@jll.com', role: 'Project Admin', status: 'Active', added: '2024-03-10' },
        { id: 9, email: 'mark.rodriguez@jll.com', role: 'Non-Prod Developer', status: 'Active', added: '2024-03-11' },
        { id: 10, email: 'jane.smith@jll.com', role: 'Non-Prod DBA', status: 'Active', added: '2024-03-15' }
      ]
    }
  ]);

  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.appName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.appId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewProject = (project) => {
    setSelectedProject(project);
    setCurrentView('view');
  };

  const handleManageProject = (project) => {
    setSelectedProject(project);
    setCurrentView('manage');
  };

  const updateProject = (updatedProject) => {
    setProjects(projects.map(p => p.id === updatedProject.id ? updatedProject : p));
    setCurrentView('list');
    setSelectedProject(null);
  };

  if (currentView === 'create') {
    return <CreateProject setCurrentView={setCurrentView} projects={projects} setProjects={setProjects} />;
  }

  if (currentView === 'view' && selectedProject) {
    return <ViewProject project={selectedProject} setCurrentView={setCurrentView} onManage={() => setCurrentView('manage')} />;
  }

  if (currentView === 'manage' && selectedProject) {
    return <ManageProject project={selectedProject} setCurrentView={setCurrentView} onSave={updateProject} />;
  }

  return (
    <div className="p-8 bg-gradient-to-br from-white to-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-4xl font-bold text-slate-900">Projects Management</h2>
        <div className="flex gap-4">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              className="pl-10 pr-4 py-3 border border-gray-200 rounded-xl w-64 font-medium focus:ring-2 focus:ring-red-600 focus:border-red-600"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="px-6 py-3 border border-gray-200 rounded-xl bg-white hover:shadow-md transition-all font-medium flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filter
          </button>
          <button 
            onClick={() => setCurrentView('create')}
            className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl hover:shadow-lg transition-all font-medium flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            New Project
          </button>
        </div>
      </div>

      {/* Projects Overview Cards */}
      <div className="grid grid-cols-4 gap-6 mb-10">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <Layers className="w-8 h-8 text-blue-600" />
            <div className="text-3xl font-bold text-blue-600">{projects.length}</div>
          </div>
          <div className="text-gray-600 font-medium">Total Projects</div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <CheckCircle className="w-8 h-8 text-green-500" />
            <div className="text-3xl font-bold text-green-500">{projects.filter(p => p.status === 'Active').length}</div>
          </div>
          <div className="text-gray-600 font-medium">Active Projects</div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <Users className="w-8 h-8 text-purple-600" />
            <div className="text-3xl font-bold text-purple-600">{projects.reduce((sum, p) => sum + p.userCount, 0)}</div>
          </div>
          <div className="text-gray-600 font-medium">Total Users</div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <Database className="w-8 h-8 text-orange-600" />
            <div className="text-3xl font-bold text-orange-600">{projects.filter(p => p.environment === 'Production').length}</div>
          </div>
          <div className="text-gray-600 font-medium">Prod Projects</div>
        </div>
      </div>

      {/* Projects Table */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                <th className="px-8 py-6 text-left text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Project
                </th>
                <th className="px-8 py-6 text-left text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Application
                </th>
                <th className="px-8 py-6 text-left text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Project Owner
                </th>
                <th className="px-8 py-6 text-left text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Environment
                </th>
                <th className="px-8 py-6 text-left text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Users
                </th>
                <th className="px-8 py-6 text-left text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-8 py-6 text-left text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {filteredProjects.map((project) => (
                <tr key={project.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-8 py-6 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-bold text-slate-900">{project.name}</div>
                      <div className="text-xs text-gray-600">{project.description}</div>
                    </div>
                  </td>
                  <td className="px-8 py-6 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-bold text-slate-900">{project.appName}</div>
                      <div className="text-xs text-gray-600 font-mono">{project.appId}</div>
                    </div>
                  </td>
                  <td className="px-8 py-6 whitespace-nowrap text-sm text-gray-600 font-medium">
                    {project.projectOwner}
                  </td>
                  <td className="px-8 py-6 whitespace-nowrap">
                    <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                      project.environment === 'Production' 
                        ? 'bg-red-100 text-red-700 border border-red-200' 
                        : 'bg-blue-100 text-blue-700 border border-blue-200'
                    }`}>
                      {project.environment}
                    </span>
                  </td>
                  <td className="px-8 py-6 whitespace-nowrap text-sm text-gray-600 font-medium">
                    {project.userCount}
                  </td>
                  <td className="px-8 py-6 whitespace-nowrap">
                    <span className="px-3 py-1 text-xs font-bold rounded-full bg-green-100 text-green-700 border border-green-200">
                      {project.status}
                    </span>
                  </td>
                  <td className="px-8 py-6 whitespace-nowrap text-sm">
                    <div className="flex gap-2">
                      <button 
                        onClick={() => handleViewProject(project)}
                        className="px-3 py-2 border border-gray-200 rounded-lg hover:shadow-md transition-all font-medium flex items-center gap-2"
                      >
                        <Eye className="w-4 h-4" />
                        View
                      </button>
                      <button 
                        onClick={() => handleManageProject(project)}
                        className="px-3 py-2 border border-gray-200 rounded-lg hover:shadow-md transition-all font-medium flex items-center gap-2"
                      >
                        <Settings className="w-4 h-4" />
                        Manage
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// View Project Component
const ViewProject = ({ project, setCurrentView, onManage }) => {
  const getRoleColor = (role) => {
    if (role.includes('Admin')) return 'bg-red-100 text-red-700 border-red-200';
    if (role.includes('Prod')) return 'bg-orange-100 text-orange-700 border-orange-200';
    if (role.includes('DBA')) return 'bg-purple-100 text-purple-700 border-purple-200';
    if (role.includes('SRE')) return 'bg-green-100 text-green-700 border-green-200';
    return 'bg-blue-100 text-blue-700 border-blue-200';
  };

  return (
    <div className="p-8 bg-gradient-to-br from-white to-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-4xl font-bold text-slate-900">{project.name}</h2>
          <p className="text-gray-600 mt-2">Project Details</p>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={() => setCurrentView('list')}
            className="px-6 py-3 border border-gray-200 rounded-xl bg-white hover:shadow-md transition-all font-medium"
          >
            Back to Projects
          </button>
          <button 
            onClick={onManage}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:shadow-lg transition-all font-medium flex items-center gap-2"
          >
            <Settings className="w-4 h-4" />
            Manage Project
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8">
        {/* Project Information */}
        <div className="col-span-2 space-y-8">
          {/* Basic Information */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <Layers className="w-6 h-6 text-blue-600" />
              Project Information
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-600 mb-2">Project Name</label>
                <div className="text-lg font-semibold text-slate-900">{project.name}</div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-600 mb-2">Project Owner</label>
                <div className="text-lg font-semibold text-slate-900">{project.projectOwner}</div>
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-bold text-gray-600 mb-2">Description</label>
                <div className="text-slate-900">{project.description}</div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-600 mb-2">Environment</label>
                <span className={`px-3 py-1 text-sm font-bold rounded-full ${
                  project.environment === 'Production' 
                    ? 'bg-red-100 text-red-700 border border-red-200' 
                    : 'bg-blue-100 text-blue-700 border border-blue-200'
                }`}>
                  {project.environment}
                </span>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-600 mb-2">Status</label>
                <span className="px-3 py-1 text-sm font-bold rounded-full bg-green-100 text-green-700 border border-green-200">
                  {project.status}
                </span>
              </div>
            </div>
          </div>

          {/* Application Information */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <Package className="w-6 h-6 text-purple-600" />
              Associated Application
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-600 mb-2">App Name</label>
                <div className="text-lg font-semibold text-slate-900">{project.appName}</div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-600 mb-2">App ID</label>
                <div className="text-lg font-semibold text-slate-900 font-mono">{project.appId}</div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-600 mb-2">Executive Owner</label>
                <div className="text-lg font-semibold text-slate-900">{project.executiveOwner}</div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-600 mb-2">App Owner</label>
                <div className="text-lg font-semibold text-slate-900">{project.appOwner}</div>
              </div>
            </div>
          </div>

          {/* Team Members */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <Users className="w-6 h-6 text-green-600" />
              Team Members ({project.users.length})
            </h3>
            <div className="overflow-hidden border border-gray-200 rounded-xl">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="px-6 py-4 text-left text-sm font-bold text-slate-900">User</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-slate-900">Role</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-slate-900">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-slate-900">Added</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {project.users.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-slate-900">
                        {user.email}
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 text-xs font-bold rounded-full border ${getRoleColor(user.role)}`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 text-xs font-bold rounded-full bg-green-100 text-green-700 border border-green-200">
                          {user.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {new Date(user.added).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Stats */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h4 className="font-bold text-slate-900 mb-4">Quick Stats</h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Created</span>
                <span className="font-semibold text-slate-900">{new Date(project.created).toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Last Modified</span>
                <span className="font-semibold text-slate-900">{new Date(project.lastModified).toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Total Users</span>
                <span className="font-semibold text-slate-900">{project.users.length}</span>
              </div>
            </div>
          </div>

          {/* Role Distribution */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h4 className="font-bold text-slate-900 mb-4">Role Distribution</h4>
            <div className="space-y-3">
              {[...new Set(project.users.map(u => u.role))].map(role => {
                const count = project.users.filter(u => u.role === role).length;
                return (
                  <div key={role} className="flex justify-between items-center">
                    <span className={`px-2 py-1 text-xs font-bold rounded-full border ${getRoleColor(role)}`}>
                      {role}
                    </span>
                    <span className="font-semibold text-slate-900">{count}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Actions */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h4 className="font-bold text-slate-900 mb-4">Actions</h4>
            <div className="space-y-3">
              <button 
                onClick={onManage}
                className="w-full px-4 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all font-medium flex items-center justify-center gap-2"
              >
                <Settings className="w-4 h-4" />
                Manage Project
              </button>
              <button className="w-full px-4 py-3 border border-gray-200 rounded-xl hover:shadow-md transition-all font-medium flex items-center justify-center gap-2">
                <Download className="w-4 h-4" />
                Export Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Manage Project Component
const ManageProject = ({ project, setCurrentView, onSave }) => {
  const [formData, setFormData] = useState({
    name: project.name,
    description: project.description,
    projectOwner: project.projectOwner
  });
  
  const [users, setUsers] = useState([...project.users]);
  const [newUserEmail, setNewUserEmail] = useState('');
  const [newUserRole, setNewUserRole] = useState('Non-Prod Read-Only');
  const [hasChanges, setHasChanges] = useState(false);

  const roles = [
    'Project Admin',
    'Non-Prod Read-Only',
    'Non-Prod Developer',
    'Non-Prod DBA',
    'Prod Read-Only',
    'Prod Developer',
    'Prod DBA',
    'Prod SRE'
  ];

  const handleFormChange = (field, value) => {
    setFormData(prev => ({...prev, [field]: value}));
    setHasChanges(true);
  };

  const addUser = () => {
    if (!newUserEmail.trim()) return;
    
    const newUser = {
      id: Date.now(),
      email: newUserEmail,
      role: newUserRole,
      status: 'Pending',
      added: new Date().toISOString()
    };
    
    setUsers([...users, newUser]);
    setNewUserEmail('');
    setHasChanges(true);
  };

  const removeUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
    setHasChanges(true);
  };

  const updateUserRole = (userId, newRole) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, role: newRole } : user
    ));
    setHasChanges(true);
  };

  const handleSave = () => {
    const updatedProject = {
      ...project,
      ...formData,
      users: users,
      userCount: users.length,
      lastModified: new Date().toISOString()
    };
    onSave(updatedProject);
  };

  const getRoleColor = (role) => {
    if (role.includes('Admin')) return 'bg-red-100 text-red-700 border-red-200';
    if (role.includes('Prod')) return 'bg-orange-100 text-orange-700 border-orange-200';
    if (role.includes('DBA')) return 'bg-purple-100 text-purple-700 border-purple-200';
    if (role.includes('SRE')) return 'bg-green-100 text-green-700 border-green-200';
    return 'bg-blue-100 text-blue-700 border-blue-200';
  };

  return (
    <div className="p-8 bg-gradient-to-br from-white to-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-4xl font-bold text-slate-900">Manage Project</h2>
          <p className="text-gray-600 mt-2">Edit project details and team access</p>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={() => setCurrentView('view')}
            className="px-6 py-3 border border-gray-200 rounded-xl bg-white hover:shadow-md transition-all font-medium"
          >
            Cancel
          </button>
          <button 
            onClick={handleSave}
            disabled={!hasChanges}
            className={`px-8 py-3 rounded-xl font-bold transition-all ${
              hasChanges 
                ? 'bg-gradient-to-r from-green-600 to-green-700 text-white hover:shadow-lg' 
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            }`}
          >
            Save Changes
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto space-y-8">
        {/* Project Details */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
            <Settings className="w-6 h-6 text-blue-600" />
            Project Details
          </h3>

          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-3">
                Project Name *
              </label>
              <input 
                type="text" 
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 font-medium"
                value={formData.name}
                onChange={(e) => handleFormChange('name', e.target.value)}
              />
            </div>
            
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-3">
                Project Owner *
              </label>
              <input 
                type="text" 
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 font-medium"
                value={formData.projectOwner}
                onChange={(e) => handleFormChange('projectOwner', e.target.value)}
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-bold text-slate-900 mb-3">
              Project Description *
            </label>
            <textarea 
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 font-medium"
              rows="4"
              value={formData.description}
              onChange={(e) => handleFormChange('description', e.target.value)}
            />
          </div>

          {/* Read-only Application Info */}
          <div className="p-6 bg-gray-50 rounded-xl">
            <h4 className="font-bold text-slate-900 mb-4">Application Information (Read-Only)</h4>
            <div className="grid grid-cols-2 gap-6 text-sm">
              <div>
                <label className="block text-gray-600 mb-1">App Name</label>
                <div className="font-semibold text-slate-900">{project.appName}</div>
              </div>
              <div>
                <label className="block text-gray-600 mb-1">App ID</label>
                <div className="font-semibold text-slate-900 font-mono">{project.appId}</div>
              </div>
              <div>
                <label className="block text-gray-600 mb-1">Executive Owner</label>
                <div className="font-semibold text-slate-900">{project.executiveOwner}</div>
              </div>
              <div>
                <label className="block text-gray-600 mb-1">App Owner</label>
                <div className="font-semibold text-slate-900">{project.appOwner}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Management */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
            <Users className="w-6 h-6 text-green-600" />
            Team Management
          </h3>

          {/* Add User Section */}
          <div className="mb-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
            <h4 className="font-bold text-slate-900 mb-4">Add Team Member</h4>
            <div className="flex gap-4">
              <div className="flex-1">
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 font-medium"
                  placeholder="user@jll.com"
                  value={newUserEmail}
                  onChange={(e) => setNewUserEmail(e.target.value)}
                />
              </div>
              <div className="w-64">
                <select 
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 font-medium"
                  value={newUserRole}
                  onChange={(e) => setNewUserRole(e.target.value)}
                >
                  {roles.map(role => (
                    <option key={role} value={role}>{role}</option>
                  ))}
                </select>
              </div>
              <button 
                onClick={addUser}
                disabled={!newUserEmail.trim()}
                className={`px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2 ${
                  newUserEmail.trim()
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-lg' 
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                }`}
              >
                <Plus className="w-4 h-4" />
                Add
              </button>
            </div>
          </div>

          {/* Users Table */}
          <div className="overflow-hidden border border-gray-200 rounded-xl">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-6 py-4 text-left text-sm font-bold text-slate-900">User</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-slate-900">Role</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-slate-900">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-slate-900">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">
                      {user.email}
                    </td>
                    <td className="px-6 py-4">
                      <select 
                        className={`px-3 py-1 text-xs font-bold rounded-full border ${getRoleColor(user.role)} bg-transparent`}
                        value={user.role}
                        onChange={(e) => updateUserRole(user.id, e.target.value)}
                      >
                        {roles.map(role => (
                          <option key={role} value={role}>{role}</option>
                        ))}
                      </select>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 text-xs font-bold rounded-full border ${
                        user.status === 'Active' 
                          ? 'bg-green-100 text-green-700 border-green-200' 
                          : 'bg-yellow-100 text-yellow-700 border-yellow-200'
                      }`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button 
                        onClick={() => removeUser(user.id)}
                        className="text-red-600 hover:text-red-800 font-medium text-sm"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {hasChanges && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-yellow-600" />
              <div>
                <div className="font-bold text-yellow-800">You have unsaved changes</div>
                <div className="text-yellow-700 text-sm">Don't forget to save your changes before leaving this page.</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Create Project Component
const CreateProject = ({ setCurrentView, projects, setProjects }) => {
  const [step, setStep] = useState(1); // 1: App Lookup, 2: Project Details, 3: IAM Setup
  const [appId, setAppId] = useState('');
  const [isLookingUp, setIsLookingUp] = useState(false);
  const [lookupComplete, setLookupComplete] = useState(false);
  
  // Form data
  const [formData, setFormData] = useState({
    // From ServiceNow CMDB lookup
    appName: '',
    appId: '',
    executiveOwner: '',
    appOwner: '',
    environment: '',
    // Project specific fields
    projectName: '',
    projectDescription: '',
    projectOwner: ''
  });

  // IAM state
  const [users, setUsers] = useState([]);
  const [newUserEmail, setNewUserEmail] = useState('');
  const [newUserRole, setNewUserRole] = useState('Non-Prod Read-Only');

  const roles = [
    'Project Admin',
    'Non-Prod Read-Only',
    'Non-Prod Developer',
    'Non-Prod DBA',
    'Prod Read-Only',
    'Prod Developer',
    'Prod DBA',
    'Prod SRE'
  ];

  const handleAppLookup = async () => {
    if (!appId.trim()) return;
    
    setIsLookingUp(true);
    
    // Simulate ServiceNow CMDB lookup
    setTimeout(() => {
      // Mock data based on AppID
      const mockData = {
        'APP-001': {
          appName: 'EDP Core',
          executiveOwner: 'Michael Chen',
          appOwner: 'Sarah Wilson',
          environment: 'Production'
        },
        'APP-002': {
          appName: 'TelmaAI',
          executiveOwner: 'David Park',
          appOwner: 'Lisa Zhang',
          environment: 'Production'
        },
        'APP-003': {
          appName: 'Corrigo Core',
          executiveOwner: 'Jennifer Liu',
          appOwner: 'Mark Rodriguez',
          environment: 'Non-Production'
        }
      };

      const data = mockData[appId] || {
        appName: 'Sample Application',
        executiveOwner: 'John Doe',
        appOwner: 'Jane Smith',
        environment: 'Non-Production'
      };

      setFormData(prev => ({
        ...prev,
        appId: appId,
        ...data
      }));
      
      setIsLookingUp(false);
      setLookupComplete(true);
    }, 1500);
  };

  const addUser = () => {
    if (!newUserEmail.trim()) return;
    
    const newUser = {
      id: Date.now(),
      email: newUserEmail,
      role: newUserRole,
      status: 'Pending',
      added: new Date().toISOString()
    };
    
    setUsers([...users, newUser]);
    setNewUserEmail('');
  };

  const removeUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  const updateUserRole = (userId, newRole) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, role: newRole } : user
    ));
  };

  const getRoleColor = (role) => {
    if (role.includes('Admin')) return 'bg-red-100 text-red-700 border-red-200';
    if (role.includes('Prod')) return 'bg-orange-100 text-orange-700 border-orange-200';
    if (role.includes('DBA')) return 'bg-purple-100 text-purple-700 border-purple-200';
    if (role.includes('SRE')) return 'bg-green-100 text-green-700 border-green-200';
    return 'bg-blue-100 text-blue-700 border-blue-200';
  };

  const handleSubmit = () => {
    // Create new project
    const newProject = {
      id: Math.max(...projects.map(p => p.id)) + 1,
      name: formData.projectName,
      description: formData.projectDescription,
      appName: formData.appName,
      appId: formData.appId,
      executiveOwner: formData.executiveOwner,
      appOwner: formData.appOwner,
      projectOwner: formData.projectOwner,
      environment: formData.environment,
      status: 'Active',
      created: new Date().toISOString(),
      lastModified: new Date().toISOString(),
      userCount: users.length,
      users: users
    };
    
    // Add to projects list
    setProjects([...projects, newProject]);
    setCurrentView('list');
  };

  return (
    <div className="p-8 bg-gradient-to-br from-white to-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-4xl font-bold text-slate-900">Create New Project</h2>
          <p className="text-gray-600 mt-2">Step {step} of 3: {step === 1 ? 'Application Lookup' : step === 2 ? 'Project Configuration' : 'Identity & Access Management'}</p>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={() => setCurrentView('list')}
            className="px-6 py-3 border border-gray-200 rounded-xl bg-white hover:shadow-md transition-all font-medium"
          >
            Cancel
          </button>
          {step > 1 && (
            <button 
              onClick={() => setStep(step - 1)}
              className="px-6 py-3 border border-gray-200 rounded-xl bg-white hover:shadow-md transition-all font-medium"
            >
              Previous
            </button>
          )}
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="mb-10">
        <div className="flex items-center justify-center">
          {[1, 2, 3].map((stepNum) => (
            <div key={stepNum} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                stepNum <= step 
                  ? 'bg-red-600 text-white' 
                  : 'bg-gray-200 text-gray-500'
              }`}>
                {stepNum}
              </div>
              {stepNum < 3 && (
                <div className={`w-20 h-1 mx-4 ${
                  stepNum < step ? 'bg-red-600' : 'bg-gray-200'
                }`}></div>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4 text-sm text-gray-600">
          <div className="text-center w-32">App Lookup</div>
          <div className="text-center w-32 ml-8">Project Details</div>
          <div className="text-center w-32 ml-8">IAM Setup</div>
        </div>
      </div>

      {/* Step 1: Application Lookup */}
      {step === 1 && (
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
              <Search className="w-6 h-6 text-blue-600" />
              ServiceNow CMDB Lookup
            </h3>
            
            <div className="mb-8">
              <label className="block text-sm font-bold text-slate-900 mb-3">
                Application ID *
              </label>
              <div className="flex gap-4">
                <input 
                  type="text" 
                  className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-600 focus:border-red-600 font-medium"
                  placeholder="e.g., APP-001"
                  value={appId}
                  onChange={(e) => setAppId(e.target.value)}
                />
                <button 
                  onClick={handleAppLookup}
                  disabled={isLookingUp || !appId.trim()}
                  className={`px-8 py-3 rounded-xl font-bold transition-all flex items-center gap-2 ${
                    isLookingUp || !appId.trim()
                      ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-lg'
                  }`}
                >
                  {isLookingUp ? (
                    <>
                      <Loader className="w-4 h-4 animate-spin" />
                      Looking up...
                    </>
                  ) : (
                    <>
                      <Search className="w-4 h-4" />
                      Lookup
                    </>
                  )}
                </button>
              </div>
            </div>

            {lookupComplete && (
              <div className="border border-green-200 bg-green-50 rounded-xl p-6 mb-8">
                <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Application Found in ServiceNow CMDB
                </h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div><strong>App Name:</strong> {formData.appName}</div>
                  <div><strong>App ID:</strong> {formData.appId}</div>
                  <div><strong>Executive Owner:</strong> {formData.executiveOwner}</div>
                  <div><strong>App Owner:</strong> {formData.appOwner}</div>
                  <div><strong>Environment:</strong> {formData.environment}</div>
                </div>
              </div>
            )}

            <div className="flex justify-end">
              <button 
                onClick={() => setStep(2)}
                disabled={!lookupComplete}
                className={`px-8 py-3 rounded-xl font-bold transition-all ${
                  lookupComplete 
                    ? 'bg-gradient-to-r from-red-600 to-red-700 text-white hover:shadow-lg' 
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                }`}
              >
                Continue to Project Details
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Step 2: Project Details */}
      {step === 2 && (
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
              <Settings className="w-6 h-6 text-purple-600" />
              Project Configuration
            </h3>

            {/* Application Information (Read-only) */}
            <div className="mb-8 p-6 bg-gray-50 rounded-xl">
              <h4 className="font-bold text-slate-900 mb-4">Application Information (from ServiceNow)</h4>
              <div className="grid grid-cols-3 gap-6 text-sm">
                <div>
                  <label className="block text-gray-600 mb-1">App Name</label>
                  <div className="font-semibold text-slate-900">{formData.appName}</div>
                </div>
                <div>
                  <label className="block text-gray-600 mb-1">App ID</label>
                  <div className="font-semibold text-slate-900 font-mono">{formData.appId}</div>
                </div>
                <div>
                  <label className="block text-gray-600 mb-1">Environment</label>
                  <div className="font-semibold text-slate-900">{formData.environment}</div>
                </div>
                <div>
                  <label className="block text-gray-600 mb-1">Executive Owner</label>
                  <div className="font-semibold text-slate-900">{formData.executiveOwner}</div>
                </div>
                <div>
                  <label className="block text-gray-600 mb-1">App Owner</label>
                  <div className="font-semibold text-slate-900">{formData.appOwner}</div>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-3">
                  Project Name *
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-600 focus:border-red-600 font-medium"
                  placeholder="e.g., EDP Core Platform"
                  value={formData.projectName}
                  onChange={(e) => setFormData({...formData, projectName: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-3">
                  Project Owner *
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-600 focus:border-red-600 font-medium"
                  placeholder="e.g., Chad Kellerman"
                  value={formData.projectOwner}
                  onChange={(e) => setFormData({...formData, projectOwner: e.target.value})}
                />
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-bold text-slate-900 mb-3">
                Project Description *
              </label>
              <textarea 
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-600 focus:border-red-600 font-medium"
                rows="4"
                placeholder="Describe the purpose and scope of this project..."
                value={formData.projectDescription}
                onChange={(e) => setFormData({...formData, projectDescription: e.target.value})}
              />
            </div>

            <div className="flex justify-end gap-4">
              <button 
                onClick={() => setStep(1)}
                className="px-6 py-3 border border-gray-200 rounded-xl bg-white hover:shadow-md transition-all font-medium"
              >
                Back
              </button>
              <button 
                onClick={() => setStep(3)}
                disabled={!formData.projectName || !formData.projectOwner || !formData.projectDescription}
                className={`px-8 py-3 rounded-xl font-bold transition-all ${
                  formData.projectName && formData.projectOwner && formData.projectDescription
                    ? 'bg-gradient-to-r from-red-600 to-red-700 text-white hover:shadow-lg' 
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                }`}
              >
                Continue to IAM Setup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Step 3: IAM Setup */}
      {step === 3 && (
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
              <Users className="w-6 h-6 text-green-600" />
              Project Identity & Access Management
            </h3>

            {/* Add User Section */}
            <div className="mb-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
              <h4 className="font-bold text-slate-900 mb-4">Add Team Members</h4>
              <div className="flex gap-4">
                <div className="flex-1">
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 font-medium"
                    placeholder="user@jll.com"
                    value={newUserEmail}
                    onChange={(e) => setNewUserEmail(e.target.value)}
                  />
                </div>
                <div className="w-64">
                  <select 
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 font-medium"
                    value={newUserRole}
                    onChange={(e) => setNewUserRole(e.target.value)}
                  >
                    {roles.map(role => (
                      <option key={role} value={role}>{role}</option>
                    ))}
                  </select>
                </div>
                <button 
                  onClick={addUser}
                  disabled={!newUserEmail.trim()}
                  className={`px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2 ${
                    newUserEmail.trim()
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-lg' 
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <Plus className="w-4 h-4" />
                  Add User
                </button>
              </div>
            </div>

            {/* Users Table */}
            <div className="mb-8">
              <h4 className="font-bold text-slate-900 mb-4">Team Members ({users.length})</h4>
              {users.length === 0 ? (
                <div className="text-center py-12 text-gray-500">
                  <Users className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                  <p>No team members added yet</p>
                  <p className="text-sm">Add users above to manage project access</p>
                </div>
              ) : (
                <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-100 border-b border-gray-200">
                        <th className="px-6 py-4 text-left text-sm font-bold text-slate-900">User</th>
                        <th className="px-6 py-4 text-left text-sm font-bold text-slate-900">Role</th>
                        <th className="px-6 py-4 text-left text-sm font-bold text-slate-900">Status</th>
                        <th className="px-6 py-4 text-left text-sm font-bold text-slate-900">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {users.map((user) => (
                        <tr key={user.id} className="hover:bg-white transition-colors">
                          <td className="px-6 py-4 text-sm font-medium text-slate-900">
                            {user.email}
                          </td>
                          <td className="px-6 py-4">
                            <select 
                              className={`px-3 py-1 text-xs font-bold rounded-full border ${getRoleColor(user.role)}`}
                              value={user.role}
                              onChange={(e) => updateUserRole(user.id, e.target.value)}
                            >
                              {roles.map(role => (
                                <option key={role} value={role}>{role}</option>
                              ))}
                            </select>
                          </td>
                          <td className="px-6 py-4">
                            <span className="px-3 py-1 text-xs font-bold rounded-full bg-yellow-100 text-yellow-700 border border-yellow-200">
                              {user.status}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <button 
                              onClick={() => removeUser(user.id)}
                              className="text-red-600 hover:text-red-800 font-medium text-sm"
                            >
                              Remove
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* Role Descriptions */}
            <div className="mb-8 p-6 bg-gray-50 rounded-xl">
              <h4 className="font-bold text-slate-900 mb-4">Role Descriptions</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-semibold">Project Admin:</span> Full project access and user management
                </div>
                <div>
                  <span className="font-semibold">Non-Prod Read-Only:</span> View access to non-production environments
                </div>
                <div>
                  <span className="font-semibold">Non-Prod Developer:</span> Deploy and manage non-production resources
                </div>
                <div>
                  <span className="font-semibold">Non-Prod DBA:</span> Database administration in non-production
                </div>
                <div>
                  <span className="font-semibold">Prod Read-Only:</span> View access to production environments
                </div>
                <div>
                  <span className="font-semibold">Prod Developer:</span> Deploy and manage production resources
                </div>
                <div>
                  <span className="font-semibold">Prod DBA:</span> Database administration in production
                </div>
                <div>
                  <span className="font-semibold">Prod SRE:</span> Site reliability engineering in production
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <button 
                onClick={() => setStep(2)}
                className="px-6 py-3 border border-gray-200 rounded-xl bg-white hover:shadow-md transition-all font-medium"
              >
                Back
              </button>
              <button 
                onClick={handleSubmit}
                className="px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl hover:shadow-lg transition-all font-bold"
              >
                Create Project
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
const ApplicationManagement = () => {
  const applications = [
    {
      id: 1,
      name: 'EDP Core',
      environment: 'Production',
      status: 'running',
      lastDeploy: '2 hours ago',
      version: 'v2.1.4',
      health: 'healthy',
      healthIcon: '🟢'
    },
    {
      id: 2,
      name: 'Corrigo Core',
      environment: 'Production',
      status: 'running',
      lastDeploy: '1 day ago',
      version: 'v1.8.2',
      health: 'healthy',
      healthIcon: '🟢'
    },
    {
      id: 3,
      name: 'TelmaAI',
      environment: 'Staging',
      status: 'deploying',
      lastDeploy: '30 mins ago',
      version: 'v3.0.1',
      health: 'degraded',
      healthIcon: '🟡'
    },
    {
      id: 4,
      name: 'ScheduleAI',
      environment: 'Production',
      status: 'failed',
      lastDeploy: '6 hours ago',
      version: 'v1.2.3',
      health: 'down',
      healthIcon: '🔴'
    }
  ];

  const getStatusBadgeClass = (status) => {
    switch(status) {
      case 'running': return 'bg-green-100 text-green-700 border border-green-200';
      case 'deploying': return 'bg-orange-100 text-orange-700 border border-orange-200';
      case 'failed': return 'bg-red-100 text-red-700 border border-red-200';
      default: return 'bg-gray-100 text-gray-700 border border-gray-200';
    }
  };

  return (
    <div className="p-8 bg-gradient-to-br from-white to-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-4xl font-bold text-slate-900">Application Management</h2>
        <div className="flex gap-4">
          <button className="px-6 py-3 border border-gray-200 rounded-xl bg-white hover:shadow-md transition-all font-medium flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filter
          </button>
          <button className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl hover:shadow-lg transition-all font-medium flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Deploy New
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                <th className="px-8 py-6 text-left text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Application
                </th>
                <th className="px-8 py-6 text-left text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Environment
                </th>
                <th className="px-8 py-6 text-left text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-8 py-6 text-left text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Last Deploy
                </th>
                <th className="px-8 py-6 text-left text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Version
                </th>
                <th className="px-8 py-6 text-left text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Health
                </th>
                <th className="px-8 py-6 text-left text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {applications.map((app) => (
                <tr key={app.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-8 py-6 whitespace-nowrap text-sm font-bold text-slate-900">
                    {app.name}
                  </td>
                  <td className="px-8 py-6 whitespace-nowrap text-sm text-gray-600 font-medium">
                    {app.environment}
                  </td>
                  <td className="px-8 py-6 whitespace-nowrap">
                    <span className={`px-4 py-2 text-xs font-bold rounded-full ${getStatusBadgeClass(app.status)}`}>
                      {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-8 py-6 whitespace-nowrap text-sm text-gray-600 font-medium">
                    {app.lastDeploy}
                  </td>
                  <td className="px-8 py-6 whitespace-nowrap text-sm text-gray-600 font-mono font-medium">
                    {app.version}
                  </td>
                  <td className="px-8 py-6 whitespace-nowrap text-sm">
                    <span className="flex items-center gap-2 font-medium">
                      {app.healthIcon} {app.health.charAt(0).toUpperCase() + app.health.slice(1)}
                    </span>
                  </td>
                  <td className="px-8 py-6 whitespace-nowrap text-sm">
                    <button className="px-4 py-2 border border-gray-200 rounded-lg hover:shadow-md transition-all font-medium flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Cloud Service Provider Onboarding
const CloudOnboarding = ({ setCurrentPage }) => {
  const [showForm, setShowForm] = useState(false);
  const [selectedProject, setSelectedProject] = useState('all');
  const [cloudProvider, setCloudProvider] = useState('azure');
  const [environment, setEnvironment] = useState('Non-Prod');
  const [region, setRegion] = useState('');
  const [appName, setAppName] = useState('');
  const [appId, setAppId] = useState('');
  const [executiveOwner, setExecutiveOwner] = useState('');
  const [appOwner, setAppOwner] = useState('');
  const [appEnvironment, setAppEnvironment] = useState('');
  const [project, setProject] = useState('');
  const [vnetsCount, setVnetsCount] = useState(1);
  const [subnetsCount, setSubnetsCount] = useState(2);
  const [cidrRanges, setCidrRanges] = useState(['10.0.0.0/16']);
  const [customTags, setCustomTags] = useState([]);
  const [cmdbLoading, setCmdbLoading] = useState(false);
  const [cmdbError, setCmdbError] = useState('');

  // Mock CSP tenant data
  const cspTenants = [
    {
      id: 'azure-edp-prod',
      provider: 'Azure',
      type: 'Subscription',
      name: 'EDP-Core-Production',
      id_value: '12345678-1234-1234-1234-123456789012',
      project: 'EDP Core',
      environment: 'Production',
      region: 'East US 2',
      status: 'Active',
      created: '2024-03-15',
      cost_current: '$2,847',
      resources: 23
    },
    {
      id: 'aws-telma-dev',
      provider: 'AWS',
      type: 'Account',
      name: 'TelmaAI-Development',
      id_value: '123456789012',
      project: 'TelmaAI',
      environment: 'Non-Prod',
      region: 'us-east-1',
      status: 'Active',
      created: '2024-02-20',
      cost_current: '$1,235',
      resources: 15
    },
    {
      id: 'gcp-corrigo-stage',
      provider: 'GCP',
      type: 'Project',
      name: 'corrigo-staging-env',
      id_value: 'corrigo-staging-123456',
      project: 'Corrigo Core',
      environment: 'Non-Prod',
      region: 'us-central1',
      status: 'Active',
      created: '2024-01-10',
      cost_current: '$891',
      resources: 12
    },
    {
      id: 'azure-schedule-test',
      provider: 'Azure',
      type: 'Subscription',
      name: 'ScheduleAI-Testing',
      id_value: '87654321-4321-4321-4321-210987654321',
      project: 'ScheduleAI',
      environment: 'Non-Prod',
      region: 'West US 2',
      status: 'Provisioning',
      created: '2024-07-28',
      cost_current: '$156',
      resources: 5
    }
  ];

  // Mock ServiceNow CMDB data
  const cmdbData = {
    'APP-12345': {
      appName: 'EDP Core Platform',
      appId: 'APP-12345',
      executiveOwner: 'Sarah Johnson',
      appOwner: 'Mike Chen',
      environment: 'Production'
    },
    'APP-67890': {
      appName: 'TelmaAI Analytics',
      appId: 'APP-67890',
      executiveOwner: 'David Wilson',
      appOwner: 'Lisa Rodriguez',
      environment: 'Development'
    },
    'APP-54321': {
      appName: 'Corrigo Maintenance',
      appId: 'APP-54321',
      executiveOwner: 'Jennifer Brown',
      appOwner: 'Alex Kim',
      environment: 'Staging'
    }
  };

  const handleCmdbLookup = async () => {
    if (!appId.trim()) {
      setCmdbError('Please enter an App ID');
      return;
    }

    setCmdbLoading(true);
    setCmdbError('');

    // Simulate API call
    setTimeout(() => {
      const result = cmdbData[appId];
      if (result) {
        setAppName(result.appName);
        setExecutiveOwner(result.executiveOwner);
        setAppOwner(result.appOwner);
        setAppEnvironment(result.environment);
        setCmdbError('');
      } else {
        setCmdbError('Application not found in ServiceNow CMDB');
        setAppName('');
        setExecutiveOwner('');
        setAppOwner('');
        setAppEnvironment('');
      }
      setCmdbLoading(false);
    }, 1500);
  };

  const handleSubmit = () => {
    setCurrentPage('cloud-onboarding-status');
  };

  const filteredTenants = selectedProject === 'all'
    ? cspTenants
    : cspTenants.filter(tenant => tenant.project === selectedProject);

  const isFormValid = appName && appId && executiveOwner && appOwner && project && region;

  const getDefaultTags = () => [
    { key: 'AppName', value: appName, required: true },
    { key: 'AppID', value: appId, required: true },
    { key: 'ExecutiveOwner', value: executiveOwner, required: true },
    { key: 'AppOwner', value: appOwner, required: true },
    { key: 'Environment', value: environment, required: true },
    { key: 'ProjectName', value: project, required: true }
  ];

  const addCustomTag = () => {
    setCustomTags([...customTags, { key: '', value: '', required: false }]);
  };

  const updateCustomTag = (index, field, value) => {
    const updated = [...customTags];
    updated[index][field] = value;
    setCustomTags(updated);
  };

  const removeCustomTag = (index) => {
    setCustomTags(customTags.filter((_, i) => i !== index));
  };

  const addCidrRange = () => {
    setCidrRanges([...cidrRanges, '']);
  };

  const updateCidrRange = (index, value) => {
    const updated = [...cidrRanges];
    updated[index] = value;
    setCidrRanges(updated);
  };

  const removeCidrRange = (index) => {
    if (cidrRanges.length > 1) {
      setCidrRanges(cidrRanges.filter((_, i) => i !== index));
    }
  };

  if (showForm) {
    return (
      <div className="p-8 bg-gradient-to-br from-white to-gray-50 min-h-screen">
        <div className="flex justify-between items-center mb-10">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setShowForm(false)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <h2 className="text-4xl font-bold text-slate-900">New CSP Onboarding Request</h2>
          </div>
          <div className="flex gap-4">
            <button className="px-6 py-3 border border-gray-200 rounded-xl bg-white hover:shadow-md transition-all font-medium">
              Save Draft
            </button>
            <button className="px-6 py-3 border border-gray-200 rounded-xl bg-white hover:shadow-md transition-all font-medium">
              Load Template
            </button>
            <button 
              onClick={handleSubmit}
              disabled={!isFormValid}
              className={`px-8 py-3 rounded-xl font-bold transition-all ${
                isFormValid 
                  ? 'bg-gradient-to-r from-red-600 to-red-700 text-white hover:shadow-lg' 
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
              }`}
            >
              Submit Request
            </button>
          </div>
        </div>

        <div className="space-y-8">
          {/* Cloud Provider Selection */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-slate-900 mb-8">Cloud Provider Selection</h3>
            <div className="flex gap-6">
              <label className={`flex items-center gap-4 cursor-pointer p-6 rounded-xl border-2 transition-all ${
                cloudProvider === 'azure' ? 'border-red-600 bg-red-50' : 'border-gray-200 hover:border-gray-300'
              }`}>
                <input 
                  type="radio" 
                  name="cloudProvider" 
                  value="azure" 
                  checked={cloudProvider === 'azure'}
                  onChange={(e) => setCloudProvider(e.target.value)}
                  className="w-5 h-5"
                />
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                    Az
                  </div>
                  <span className="font-bold text-lg">Azure</span>
                </div>
              </label>
              
              <label className={`flex items-center gap-4 cursor-pointer p-6 rounded-xl border-2 transition-all ${
                cloudProvider === 'aws' ? 'border-red-600 bg-red-50' : 'border-gray-200 hover:border-gray-300'
              }`}>
                <input 
                  type="radio" 
                  name="cloudProvider" 
                  value="aws"
                  checked={cloudProvider === 'aws'}
                  onChange={(e) => setCloudProvider(e.target.value)}
                  className="w-5 h-5"
                />
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                    AWS
                  </div>
                  <span className="font-bold text-lg">AWS</span>
                </div>
              </label>
              
              <label className={`flex items-center gap-4 cursor-pointer p-6 rounded-xl border-2 transition-all ${
                cloudProvider === 'gcp' ? 'border-red-600 bg-red-50' : 'border-gray-200 hover:border-gray-300'
              }`}>
                <input 
                  type="radio" 
                  name="cloudProvider" 
                  value="gcp"
                  checked={cloudProvider === 'gcp'}
                  onChange={(e) => setCloudProvider(e.target.value)}
                  className="w-5 h-5"
                />
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                    GCP
                  </div>
                  <span className="font-bold text-lg">Google Cloud</span>
                </div>
              </label>
            </div>
          </div>

          {/* ServiceNow CMDB Lookup */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-slate-900 mb-8">Application Details from ServiceNow CMDB</h3>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="col-span-2">
                <label className="block text-sm font-bold text-slate-900 mb-3">
                  App ID *
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-600 focus:border-red-600 font-medium"
                  placeholder="e.g., APP-12345"
                  value={appId}
                  onChange={(e) => setAppId(e.target.value)}
                />
                {cmdbError && <p className="text-red-600 text-sm mt-1">{cmdbError}</p>}
              </div>
              <div className="flex items-end">
                <button 
                  onClick={handleCmdbLookup}
                  disabled={cmdbLoading || !appId.trim()}
                  className={`w-full px-4 py-3 rounded-xl font-medium transition-all ${
                    cmdbLoading || !appId.trim()
                      ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {cmdbLoading ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Searching...
                    </div>
                  ) : (
                    <>
                      <Search className="w-4 h-4 inline mr-2" />
                      Lookup CMDB
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-3">
                  App Name
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 font-medium"
                  value={appName}
                  readOnly
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-3">
                  Environment
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 font-medium"
                  value={appEnvironment}
                  readOnly
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-3">
                  Executive Owner
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 font-medium"
                  value={executiveOwner}
                  readOnly
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-3">
                  App Owner
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 font-medium"
                  value={appOwner}
                  readOnly
                />
              </div>
            </div>
          </div>

          {/* Project & Environment Configuration */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-slate-900 mb-8">Project & Environment Configuration</h3>
            <div className="grid grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-3">
                  Project *
                </label>
                <select 
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-600 focus:border-red-600 font-medium"
                  value={project}
                  onChange={(e) => setProject(e.target.value)}
                >
                  <option value="">Select a project...</option>
                  <option value="EDP Core">EDP Core</option>
                  <option value="Corrigo Core">Corrigo Core</option>
                  <option value="TelmaAI">TelmaAI</option>
                  <option value="ScheduleAI">ScheduleAI</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-3">
                  Environment *
                </label>
                <select 
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-600 focus:border-red-600 font-medium"
                  value={environment}
                  onChange={(e) => setEnvironment(e.target.value)}
                >
                  <option value="Prod">Production</option>
                  <option value="Non-Prod">Non-Production</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 mb-3">
                  CSP Region *
                </label>
                <select 
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-600 focus:border-red-600 font-medium"
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                >
                  <option value="">Select region...</option>
                  {cloudProvider === 'azure' && (
                    <>
                      <option value="East US">East US</option>
                      <option value="East US 2">East US 2</option>
                      <option value="West US">West US</option>
                      <option value="West US 2">West US 2</option>
                      <option value="Central US">Central US</option>
                    </>
                  )}
                  {cloudProvider === 'aws' && (
                    <>
                      <option value="us-east-1">US East (N. Virginia)</option>
                      <option value="us-east-2">US East (Ohio)</option>
                      <option value="us-west-1">US West (N. California)</option>
                      <option value="us-west-2">US West (Oregon)</option>
                      <option value="eu-west-1">Europe (Ireland)</option>
                    </>
                  )}
                  {cloudProvider === 'gcp' && (
                    <>
                      <option value="us-central1">us-central1 (Iowa)</option>
                      <option value="us-east1">us-east1 (South Carolina)</option>
                      <option value="us-west1">us-west1 (Oregon)</option>
                      <option value="europe-west1">europe-west1 (Belgium)</option>
                      <option value="asia-east1">asia-east1 (Taiwan)</option>
                    </>
                  )}
                </select>
              </div>
            </div>
          </div>

          {/* Virtual Network Configuration */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-slate-900 mb-8">Virtual Network Configuration</h3>
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-3">
                  Number of {cloudProvider === 'aws' ? 'VPCs' : 'VNets'}
                </label>
                <input 
                  type="number" 
                  min="1"
                  max="10"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-600 focus:border-red-600 font-medium"
                  value={vnetsCount}
                  onChange={(e) => setVnetsCount(parseInt(e.target.value))}
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-3">
                  Number of Subnets
                </label>
                <input 
                  type="number" 
                  min="1"
                  max="20"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-600 focus:border-red-600 font-medium"
                  value={subnetsCount}
                  onChange={(e) => setSubnetsCount(parseInt(e.target.value))}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="block text-sm font-bold text-slate-900">
                  CIDR Ranges
                </label>
                <button 
                  onClick={addCidrRange}
                  className="px-3 py-1 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors"
                >
                  <Plus className="w-4 h-4 inline mr-1" />
                  Add Range
                </button>
              </div>
              <div className="space-y-3">
                {cidrRanges.map((cidr, index) => (
                  <div key={index} className="flex gap-3">
                    <input 
                      type="text" 
                      className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-600 focus:border-red-600 font-medium"
                      placeholder="e.g., 10.0.0.0/16"
                      value={cidr}
                      onChange={(e) => updateCidrRange(index, e.target.value)}
                    />
                    <button 
                      onClick={() => removeCidrRange(index)}
                      disabled={cidrRanges.length === 1}
                      className="px-3 py-3 text-gray-400 hover:text-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tenant Level Tags */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-slate-900 mb-8">Tenant Level Tags</h3>
            
            {/* Default Required Tags */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-slate-900 mb-4">Default Required Tags</h4>
              <div className="space-y-3">
                {getDefaultTags().map((tag, index) => (
                  <div key={index} className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-xl">
                    <div>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-white font-medium"
                        value={tag.key}
                        readOnly
                      />
                    </div>
                    <div>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-white font-medium"
                        value={tag.value}
                        readOnly
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Custom Tags */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-lg font-semibold text-slate-900">Custom Tags</h4>
                <button 
                  onClick={addCustomTag}
                  className="px-3 py-1 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors"
                >
                  <Plus className="w-4 h-4 inline mr-1" />
                  Add Custom Tag
                </button>
              </div>
              <div className="space-y-3">
                {customTags.map((tag, index) => (
                  <div key={index} className="grid grid-cols-2 gap-4 p-4 border border-gray-200 rounded-xl">
                    <div>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-red-600 font-medium"
                        placeholder="Tag Key"
                        value={tag.key}
                        onChange={(e) => updateCustomTag(index, 'key', e.target.value)}
                      />
                    </div>
                    <div className="flex gap-2">
                      <input 
                        type="text" 
                        className="flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-red-600 font-medium"
                        placeholder="Tag Value"
                        value={tag.value}
                        onChange={(e) => updateCustomTag(index, 'value', e.target.value)}
                      />
                      <button 
                        onClick={() => removeCustomTag(index)}
                        className="px-3 py-2 text-gray-400 hover:text-red-600 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
                {customTags.length === 0 && (
                  <p className="text-gray-500 text-center py-4">No custom tags added yet</p>
                )}
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Ready to Submit?</h3>
                <p className="text-gray-600">Your CSP onboarding request will be processed and you'll receive a confirmation email.</p>
              </div>
              <button 
                onClick={handleSubmit}
                disabled={!isFormValid}
                className={`px-12 py-4 rounded-xl font-bold transition-all ${
                  isFormValid 
                    ? 'bg-gradient-to-r from-red-600 to-red-700 text-white hover:shadow-lg' 
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                }`}
              >
                Submit Request
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 bg-gradient-to-br from-white to-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-4xl font-bold text-slate-900">Cloud Service Provider (CSP) Management</h2>
        <div className="flex gap-4">
          <select 
            value={selectedProject}
            onChange={(e) => setSelectedProject(e.target.value)}
            className="px-6 py-3 border border-gray-200 rounded-xl bg-white text-slate-900 font-medium"
          >
            <option value="all">All Projects</option>
            <option value="EDP Core">EDP Core</option>
            <option value="Corrigo Core">Corrigo Core</option>
            <option value="TelmaAI">TelmaAI</option>
            <option value="ScheduleAI">ScheduleAI</option>
          </select>
          <button 
            onClick={() => setShowForm(true)}
            className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl hover:shadow-lg transition-all font-medium"
          >
            <Plus className="w-4 h-4 inline mr-2" />
            New CSP Onboarding
          </button>
        </div>
      </div>

      {/* CSP Tenants Database View */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-slate-900">Current CSP Tenants</h3>
          <p className="text-gray-600 mt-1">View and manage your cloud service provider accounts, subscriptions, and projects</p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Provider</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Environment</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Region</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Monthly Cost</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Resources</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredTenants.map((tenant) => (
                <tr key={tenant.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      tenant.provider === 'Azure' ? 'bg-blue-100 text-blue-800' :
                      tenant.provider === 'AWS' ? 'bg-orange-100 text-orange-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {tenant.provider}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {tenant.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{tenant.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500 font-mono">{tenant.id_value}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {tenant.project}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      tenant.environment === 'Production' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {tenant.environment}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {tenant.region}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      tenant.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : tenant.status === 'Provisioning'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {tenant.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                    {tenant.cost_current}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {tenant.resources}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {tenant.created}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Cloud Onboarding Status Page
const CloudOnboardingStatus = () => {
  const progressPercentage = 60;

  const steps = [
    { name: 'AD Group Configuration', status: 'completed', time: 'July 25, 10:30 AM' },
    { name: 'Subscription Creation', status: 'completed', time: 'July 25, 11:15 AM' },
    { name: 'IAM Configurations', status: 'completed', time: 'July 25, 12:45 PM' },
    { name: 'Security Configurations', status: 'in-progress', time: 'ETA: 30 minutes' },
    { name: 'Network Configurations', status: 'pending', time: 'Waiting' }
  ];

  return (
    <div className="p-8 bg-gradient-to-br from-white to-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-4xl font-bold text-slate-900">Cloud Onboarding Status</h2>
        <div className="flex gap-4">
          <button className="px-6 py-3 border border-gray-200 rounded-xl bg-white hover:shadow-md transition-all font-medium">
            View Logs
          </button>
          <button className="px-6 py-3 border border-gray-200 rounded-xl bg-white hover:shadow-md transition-all font-medium">
            Download Report
          </button>
          <button className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl hover:shadow-lg transition-all font-medium">
            Refresh Status
          </button>
        </div>
      </div>

      {/* Request Overview */}
      <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm border border-gray-100">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Request #REQ-2025-0789</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-gray-600">
              <span><strong>App Name:</strong> TelmaAI-Analytics</span>
              <span><strong>Environment:</strong> Non-Production (Dev)</span>
              <span><strong>Cloud Provider:</strong> Azure</span>
              <span><strong>Region:</strong> us-central</span>
            </div>
          </div>
          <div className="text-right">
            <div className="bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-700 px-6 py-2 rounded-full text-sm font-bold mb-3 border border-orange-200">
              IN PROGRESS
            </div>
            <div className="text-sm text-gray-600">Submitted: July 25, 2025</div>
            <div className="text-sm text-gray-600">Last Updated: 2 hours ago</div>
          </div>
        </div>
        
        <div className="grid grid-cols-4 gap-6 text-sm bg-gray-50 p-6 rounded-xl">
          <div><strong>Requestor:</strong> Chad Kellerman</div>
          <div><strong>App Owner:</strong> Sarah Wilson</div>
          <div><strong>Executive Owner:</strong> Michael Chen</div>
          <div><strong>Project:</strong> TelmaAI</div>
        </div>
      </div>

      {/* Progress Tracker */}
      <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm border border-gray-100">
        <h3 className="text-2xl font-bold text-slate-900 mb-10">Vending Progress</h3>
        
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute top-6 left-6 right-6 h-1 bg-gray-200 z-0 rounded-full">
            <div 
              className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full transition-all duration-1000"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          
          {/* Steps */}
          <div className="flex justify-between relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center max-w-[160px]">
                <div 
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-xl mb-4 shadow-lg transition-all duration-300 ${
                    step.status === 'completed' ? 'bg-gradient-to-r from-green-500 to-emerald-400 text-white' :
                    step.status === 'in-progress' ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white animate-pulse' :
                    'bg-gray-200 text-gray-500'
                  }`}
                >
                  {step.status === 'completed' ? '✓' : 
                   step.status === 'in-progress' ? <Loader className="w-6 h-6 animate-spin" /> : 
                   idx + 1}
                </div>
                <div className="text-center">
                  <div className="font-bold text-slate-900 text-sm mb-2">{step.name}</div>
                  <div className={`text-xs font-semibold ${
                    step.status === 'completed' ? 'text-green-600' :
                    step.status === 'in-progress' ? 'text-orange-600' :
                    'text-gray-500'
                  }`}>
                    {step.status === 'completed' ? 'Completed' :
                     step.status === 'in-progress' ? 'In Progress' :
                     'Pending'}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{step.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Overall Progress */}
        <div className="mt-10 p-6 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-200">
          <div className="flex justify-between items-center">
            <div>
              <div className="font-bold text-slate-900 mb-2 text-lg">Overall Progress: {progressPercentage}% Complete</div>
              <div className="text-gray-600">Estimated completion in 45 minutes</div>
            </div>
            <div className="w-64 bg-gray-200 h-4 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full transition-all duration-1000"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Current Activity & Logs */}
      <div className="grid grid-cols-2 gap-8 mb-8">
        {/* Current Activity */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h4 className="flex items-center gap-3 mb-6 text-slate-900 font-bold text-xl">
            <Activity className="w-6 h-6 text-orange-600" />
            Current Activity
            <span className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-3 py-1 rounded-full text-xs">ACTIVE</span>
          </h4>
          
          <div className="border-l-4 border-orange-500 pl-6 mb-6 bg-orange-50 p-4 rounded-r-xl">
            <div className="font-bold text-slate-900 mb-2">Configuring Security Policies</div>
            <div className="text-gray-600 mb-3">Setting up network security groups and firewall rules</div>
            <div className="text-sm text-orange-600 font-semibold flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Running for 18 minutes
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-4 rounded-xl border border-orange-200">
            <div className="text-sm text-gray-700">
              <strong>Next:</strong> Network configuration will begin automatically once security setup is complete
            </div>
          </div>
        </div>

        {/* Activity Log */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h4 className="mb-6 text-slate-900 font-bold text-xl flex items-center gap-3">
            <Database className="w-6 h-6 text-slate-700" />
            Activity Log
          </h4>
          
          <div className="max-h-64 overflow-y-auto space-y-4">
            {[
              { time: '1:03 PM', title: 'Security configurations started', desc: 'Initializing NSG rules and firewall policies' },
              { time: '12:45 PM', title: 'IAM roles configured successfully', desc: 'User permissions and service accounts created' },
              { time: '12:30 PM', title: 'Key Vault provisioned', desc: 'Secrets management system initialized' },
              { time: '11:15 AM', title: 'Azure subscription created', desc: 'Subscription ID: sub-789abc-dev' },
              { time: '10:30 AM', title: 'Active Directory groups configured', desc: 'Groups: TelmaAI-Dev-Admin, TelmaAI-Dev-Users' }
            ].map((log, idx) => (
              <div key={idx} className="border-b border-gray-100 pb-3 last:border-b-0">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-sm font-semibold text-slate-900">{log.title}</div>
                    <div className="text-xs text-gray-600">{log.desc}</div>
                  </div>
                  <div className="text-xs text-gray-500 font-medium">{log.time}</div>
                </div>
              </div>
            ))}
          </div>
          
          <button className="w-full mt-6 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm hover:shadow-md transition-all font-medium">
            View Full Log
          </button>
        </div>
      </div>

      {/* Resource Details */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
        <h4 className="mb-8 text-slate-900 font-bold text-xl flex items-center gap-3">
          <Package className="w-6 h-6 text-slate-700" />
          Provisioned Resources
        </h4>
        
        <div className="grid grid-cols-3 gap-6">
          {[
            { icon: Cloud, title: 'Subscription', value: 'sub-789abc-dev', color: 'blue', status: 'completed' },
            { icon: Database, title: 'Resource Group', value: 'rg-telmai-analytics-dev-001', color: 'green', status: 'completed' },
            { icon: Shield, title: 'Key Vault', value: 'kv-telmai-dev-001', color: 'purple', status: 'completed' },
            { icon: Shield, title: 'Security Groups', value: 'nsg-telmai-dev', color: 'orange', status: 'in-progress' },
            { icon: Globe, title: 'Virtual Network', value: 'vnet-telmai-dev', color: 'gray', status: 'pending' },
            { icon: Activity, title: 'Load Balancer', value: 'lb-telmai-dev', color: 'gray', status: 'pending' }
          ].map((resource, idx) => (
            <div key={idx} className={`border rounded-2xl p-6 transition-all ${
              resource.status === 'completed' ? 'border-green-200 bg-green-50' :
              resource.status === 'in-progress' ? 'border-orange-200 bg-orange-50' :
              'border-gray-200 bg-gray-50 opacity-60'
            }`}>
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  resource.color === 'blue' ? 'bg-blue-100' :
                  resource.color === 'green' ? 'bg-green-100' :
                  resource.color === 'purple' ? 'bg-purple-100' :
                  resource.color === 'orange' ? 'bg-orange-100' :
                  'bg-gray-100'
                }`}>
                  <resource.icon className={`w-5 h-5 ${
                    resource.color === 'blue' ? 'text-blue-600' :
                    resource.color === 'green' ? 'text-green-600' :
                    resource.color === 'purple' ? 'text-purple-600' :
                    resource.color === 'orange' ? 'text-orange-600' :
                    'text-gray-600'
                  }`} />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">{resource.title}</div>
                  <div className="text-xs text-gray-600 font-mono">{resource.value}</div>
                </div>
              </div>
              <div className={`text-xs font-bold ${
                resource.status === 'completed' ? 'text-green-600' :
                resource.status === 'in-progress' ? 'text-orange-600' :
                'text-gray-500'
              }`}>
                {resource.status === 'completed' ? '✓ Completed' :
                 resource.status === 'in-progress' ? '⏳ In Progress' :
                 '⏸ Pending'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Kubernetes Onboarding Component
const KubernetesOnboarding = ({ setCurrentPage }) => {
  const [showForm, setShowForm] = useState(false);
  const [selectedProject, setSelectedProject] = useState('all');
  
  // Form state
  const [cloudProvider, setCloudProvider] = useState('azure');
  const [kubernetesService, setKubernetesService] = useState('aks');
  const [environment, setEnvironment] = useState('non-prod');
  const [environmentType, setEnvironmentType] = useState('dev');
  const [region, setRegion] = useState('AM');
  const [appId, setAppId] = useState('');
  const [appName, setAppName] = useState('');
  const [executiveOwner, setExecutiveOwner] = useState('');
  const [appOwner, setAppOwner] = useState('');
  const [businessPillar, setBusinessPillar] = useState('');
  const [vmSize, setVmSize] = useState('');
  const [maxNodeCount, setMaxNodeCount] = useState('');
  const [minNodeCount, setMinNodeCount] = useState('');
  const [adGroupObjectId, setAdGroupObjectId] = useState('');
  const [adGroupName, setAdGroupName] = useState('');
  const [workloadGitUrl, setWorkloadGitUrl] = useState('');
  const [helmChartUrl, setHelmChartUrl] = useState('');
  const [kubernetesNamespace, setKubernetesNamespace] = useState('');
  
  // UI state
  const [cmdbLoading, setCmdbLoading] = useState(false);
  const [cmdbError, setCmdbError] = useState('');
  const [urlVerificationStates, setUrlVerificationStates] = useState({
    workloadGit: { loading: false, status: null },
    helmChart: { loading: false, status: null }
  });

  // Mock data for current Kubernetes applications
  const kubernetesApps = [
    {
      id: 'k8s-app-001',
      appName: 'TelmaAI Frontend',
      appId: 'TELMA-001',
      cluster: 'aks-prod-eastus2',
      cloudProvider: 'Azure',
      kubernetesService: 'AKS',
      environment: 'Production',
      environmentType: 'prod',
      region: 'AM',
      namespace: 'telma-frontend',
      businessPillar: 'Tech Services',
      vmSize: 'Standard_D4s_v3',
      nodeCount: '3-10',
      status: 'Active',
      created: '2024-11-15',
      lastDeployment: '2024-12-08'
    },
    {
      id: 'k8s-app-002', 
      appName: 'EDP Analytics',
      appId: 'EDP-ANALYTICS',
      cluster: 'eks-nonprod-useast1',
      cloudProvider: 'AWS',
      kubernetesService: 'EKS',
      environment: 'Non-Prod',
      environmentType: 'dev',
      region: 'AM',
      namespace: 'edp-analytics-dev',
      businessPillar: 'Work Dynamics',
      vmSize: 't3.large',
      nodeCount: '2-5',
      status: 'Active',
      created: '2024-10-22',
      lastDeployment: '2024-12-07'
    },
    {
      id: 'k8s-app-003',
      appName: 'Leasing Portal API',
      appId: 'LEASE-API-001',
      cluster: 'aks-prod-westeurope',
      cloudProvider: 'Azure', 
      kubernetesService: 'AKS',
      environment: 'Production',
      environmentType: 'prod',
      region: 'EMEA',
      namespace: 'leasing-api',
      businessPillar: 'Leasing',
      vmSize: 'Standard_D8s_v3',
      nodeCount: '5-15',
      status: 'Active',
      created: '2024-09-30',
      lastDeployment: '2024-12-06'
    }
  ];

  // Filter applications based on selected project
  const filteredApps = selectedProject === 'all' 
    ? kubernetesApps 
    : kubernetesApps.filter(app => app.businessPillar.toLowerCase() === selectedProject.toLowerCase());

  // Mock CMDB lookup function
  const lookupAppInCMDB = async () => {
    if (!appId.trim()) {
      setCmdbError('Please enter an Application ID');
      return;
    }

    setCmdbLoading(true);
    setCmdbError('');
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock successful lookup
      if (appId === 'TELMA-001') {
        setAppName('TelmaAI Platform');
        setExecutiveOwner('Sarah Chen - VP Technology');
        setAppOwner('Michael Rodriguez - Senior Developer');
      } else if (appId === 'EDP-CORE') {
        setAppName('EDP Core Services');
        setExecutiveOwner('David Park - CTO');
        setAppOwner('Lisa Wang - Tech Lead');
      } else {
        setAppName('Sample Application');
        setExecutiveOwner('John Smith - Executive Director');
        setAppOwner('Jane Doe - Application Owner');
      }
    } catch (error) {
      setCmdbError('Failed to lookup application in CMDB');
    } finally {
      setCmdbLoading(false);
    }
  };

  // URL verification functions
  const verifyUrl = async (url, type) => {
    if (!url.trim()) return;

    setUrlVerificationStates(prev => ({
      ...prev,
      [type]: { loading: true, status: null }
    }));

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock URL verification - check if URL looks valid
      const isValidUrl = url.includes('github.com') || url.includes('gitlab.com') || url.includes('helm.sh');
      const status = isValidUrl ? 'success' : 'error';
      
      setUrlVerificationStates(prev => ({
        ...prev,
        [type]: { loading: false, status }
      }));
    } catch (error) {
      setUrlVerificationStates(prev => ({
        ...prev,
        [type]: { loading: false, status: 'error' }
      }));
    }
  };

  // Handle form submission
  const handleSubmit = (action) => {
    console.log(`${action} Kubernetes onboarding request:`, {
      cloudProvider,
      kubernetesService,
      environment,
      environmentType,
      region,
      appId,
      appName,
      executiveOwner,
      appOwner,
      businessPillar,
      vmSize,
      maxNodeCount,
      minNodeCount,
      adGroupObjectId,
      adGroupName,
      workloadGitUrl,
      helmChartUrl,
      kubernetesNamespace
    });

    if (action === 'Deploy') {
      setCurrentPage('kubernetes-onboarding-status');
    }
  };

  // Update Kubernetes service when cloud provider changes
  const handleCloudProviderChange = (provider) => {
    setCloudProvider(provider);
    setKubernetesService(provider === 'azure' ? 'aks' : 'eks');
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-4xl font-bold text-slate-900">Kubernetes Management</h2>
            <p className="text-gray-600 mt-2">Manage and onboard Kubernetes applications (AKS/EKS)</p>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-xl font-bold hover:from-red-700 hover:to-red-800 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            {showForm ? 'View Applications' : 'New Kubernetes Onboarding'}
          </button>
        </div>
      </div>

      {!showForm ? (
        // Database view of current onboarded Kubernetes applications
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-slate-900">Current Kubernetes Applications</h3>
            <div className="flex items-center gap-4">
              <select
                value={selectedProject}
                onChange={(e) => setSelectedProject(e.target.value)}
                className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option value="all">All Business Pillars</option>
                <option value="leasing">Leasing</option>
                <option value="marketing">Marketing</option>
                <option value="work dynamics">Work Dynamics</option>
                <option value="tech services">Tech Services</option>
              </select>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left px-6 py-4 font-bold text-slate-900">Application</th>
                    <th className="text-left px-6 py-4 font-bold text-slate-900">Cluster</th>
                    <th className="text-left px-6 py-4 font-bold text-slate-900">Provider</th>
                    <th className="text-left px-6 py-4 font-bold text-slate-900">Environment</th>
                    <th className="text-left px-6 py-4 font-bold text-slate-900">Region</th>
                    <th className="text-left px-6 py-4 font-bold text-slate-900">Namespace</th>
                    <th className="text-left px-6 py-4 font-bold text-slate-900">Node Count</th>
                    <th className="text-left px-6 py-4 font-bold text-slate-900">Status</th>
                    <th className="text-left px-6 py-4 font-bold text-slate-900">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredApps.map((app) => (
                    <tr key={app.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div>
                          <div className="font-bold text-slate-900">{app.appName}</div>
                          <div className="text-sm text-gray-600">{app.appId}</div>
                          <div className="text-xs text-gray-500">{app.businessPillar}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-mono text-sm">{app.cluster}</div>
                        <div className="text-xs text-gray-500">{app.kubernetesService}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-bold ${
                          app.cloudProvider === 'Azure' 
                            ? 'bg-blue-100 text-blue-800' 
                            : 'bg-orange-100 text-orange-800'
                        }`}>
                          {app.cloudProvider}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium">{app.environment}</div>
                        <div className="text-xs text-gray-500">{app.environmentType}</div>
                      </td>
                      <td className="px-6 py-4 text-sm">{app.region}</td>
                      <td className="px-6 py-4">
                        <div className="font-mono text-sm bg-gray-100 px-2 py-1 rounded">
                          {app.namespace}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm">{app.nodeCount}</div>
                        <div className="text-xs text-gray-500">{app.vmSize}</div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-bold ${
                          app.status === 'Active' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {app.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button className="text-gray-400 hover:text-slate-600 p-1">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="text-gray-400 hover:text-slate-600 p-1">
                            <MoreHorizontal className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between text-sm text-gray-600">
            <div>Showing {filteredApps.length} of {kubernetesApps.length} applications</div>
            <div className="flex items-center gap-4">
              <span>Created: {kubernetesApps[0]?.created}</span>
              <span>Last Updated: {new Date().toISOString().split('T')[0]}</span>
            </div>
          </div>
        </div>
      ) : (
        // New Kubernetes Onboarding Form
        <div className="bg-white rounded-xl border border-gray-200 p-8">
          <h2 className="text-4xl font-bold text-slate-900">New Kubernetes Onboarding Request</h2>
          <p className="text-gray-600 mt-2 mb-8">Configure your Kubernetes cluster deployment</p>

          <div className="space-y-8">
            {/* Cloud Provider and Kubernetes Service */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  Cloud Provider *
                </label>
                <select
                  value={cloudProvider}
                  onChange={(e) => handleCloudProviderChange(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="azure">Microsoft Azure</option>
                  <option value="aws">Amazon Web Services</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  Kubernetes Service *
                </label>
                <select
                  value={kubernetesService}
                  onChange={(e) => setKubernetesService(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  {cloudProvider === 'azure' ? (
                    <option value="aks">Azure Kubernetes Service (AKS)</option>
                  ) : (
                    <option value="eks">Amazon Elastic Kubernetes Service (EKS)</option>
                  )}
                </select>
              </div>
            </div>

            {/* Environment Configuration */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  Environment *
                </label>
                <select
                  value={environment}
                  onChange={(e) => setEnvironment(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="non-prod">Non-Prod</option>
                  <option value="prod">Prod</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  Environment Type *
                </label>
                <select
                  value={environmentType}
                  onChange={(e) => setEnvironmentType(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="dev">Dev</option>
                  <option value="cat">CAT</option>
                  <option value="demo">Demo</option>
                  <option value="prod">Prod</option>
                  <option value="staging">Staging</option>
                  <option value="test">Test</option>
                  <option value="dr">DR</option>
                  <option value="qa">QA</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  Region *
                </label>
                <select
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="">Select Region</option>
                  <option value="AM">AM (Americas)</option>
                  <option value="EMEA">EMEA (Europe, Middle East & Africa)</option>
                  <option value="APAC">APAC (Asia Pacific)</option>
                </select>
              </div>
            </div>

            {/* Application Lookup */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-lg font-bold text-slate-900 mb-4">Application Information</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">
                    Application ID * (ServiceNow CMDB)
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={appId}
                      onChange={(e) => setAppId(e.target.value)}
                      placeholder="e.g., TELMA-001"
                      className="flex-1 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <button
                      onClick={lookupAppInCMDB}
                      disabled={cmdbLoading || !appId.trim()}
                      className="px-4 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 disabled:bg-gray-400 transition-all"
                    >
                      {cmdbLoading ? <Loader className="w-4 h-4 animate-spin" /> : 'Lookup'}
                    </button>
                  </div>
                  {cmdbError && <p className="text-red-600 text-sm mt-1">{cmdbError}</p>}
                </div>
              </div>

              {appName && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">App Name</label>
                    <input
                      type="text"
                      value={appName}
                      readOnly
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 bg-gray-100"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">Executive Owner</label>
                    <input
                      type="text"
                      value={executiveOwner}
                      readOnly
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 bg-gray-100"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">App Owner</label>
                    <input
                      type="text"
                      value={appOwner}
                      readOnly
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 bg-gray-100"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Business Configuration */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  Business Pillar *
                </label>
                <select
                  value={businessPillar}
                  onChange={(e) => setBusinessPillar(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="">Select Business Pillar</option>
                  <option value="leasing">Leasing</option>
                  <option value="marketing">Marketing</option>
                  <option value="work-dynamics">Work Dynamics</option>
                  <option value="tech-services">Tech Services</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  VM Size *
                </label>
                <select
                  value={vmSize}
                  onChange={(e) => setVmSize(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="">Select VM Size</option>
                  {cloudProvider === 'azure' ? (
                    <>
                      <option value="Standard_B2s">Standard_B2s (2 vCPU, 4 GB RAM)</option>
                      <option value="Standard_B4ms">Standard_B4ms (4 vCPU, 16 GB RAM)</option>
                      <option value="Standard_D4s_v3">Standard_D4s_v3 (4 vCPU, 16 GB RAM)</option>
                      <option value="Standard_D8s_v3">Standard_D8s_v3 (8 vCPU, 32 GB RAM)</option>
                      <option value="Standard_D16s_v3">Standard_D16s_v3 (16 vCPU, 64 GB RAM)</option>
                    </>
                  ) : (
                    <>
                      <option value="t3.medium">t3.medium (2 vCPU, 4 GB RAM)</option>
                      <option value="t3.large">t3.large (2 vCPU, 8 GB RAM)</option>
                      <option value="t3.xlarge">t3.xlarge (4 vCPU, 16 GB RAM)</option>
                      <option value="m5.large">m5.large (2 vCPU, 8 GB RAM)</option>
                      <option value="m5.xlarge">m5.xlarge (4 vCPU, 16 GB RAM)</option>
                    </>
                  )}
                </select>
              </div>
            </div>

            {/* Node Configuration */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  Minimum Node Count *
                </label>
                <input
                  type="number"
                  value={minNodeCount}
                  onChange={(e) => setMinNodeCount(e.target.value)}
                  placeholder="e.g., 2"
                  min="1"
                  max="100"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  Maximum Node Count *
                </label>
                <input
                  type="number"
                  value={maxNodeCount}
                  onChange={(e) => setMaxNodeCount(e.target.value)}
                  placeholder="e.g., 10"
                  min="1"
                  max="100"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>

            {/* AD Group Configuration */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  AD Group Object ID *
                </label>
                <select
                  value={adGroupObjectId}
                  onChange={(e) => setAdGroupObjectId(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="">Select AD Group</option>
                  <option value="12345678-1234-1234-1234-123456789012">JLL-TelmaAI-Developers</option>
                  <option value="87654321-4321-4321-4321-210987654321">JLL-EDP-TeamLead</option>
                  <option value="11111111-2222-3333-4444-555555555555">JLL-Leasing-DevOps</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  AD Group Name (ArgoCD Access) *
                </label>
                <select
                  value={adGroupName}
                  onChange={(e) => setAdGroupName(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="">Select ArgoCD Group</option>
                  <option value="ArgoCD-TelmaAI-Access">ArgoCD-TelmaAI-Access</option>
                  <option value="ArgoCD-EDP-Admin">ArgoCD-EDP-Admin</option>
                  <option value="ArgoCD-Leasing-Deploy">ArgoCD-Leasing-Deploy</option>
                </select>
              </div>
            </div>

            {/* Git and Helm Configuration */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  Workload Git URL *
                </label>
                <div className="flex gap-2">
                  <input
                    type="url"
                    value={workloadGitUrl}
                    onChange={(e) => setWorkloadGitUrl(e.target.value)}
                    placeholder="https://github.com/company/repo.git"
                    className="flex-1 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <button
                    onClick={() => verifyUrl(workloadGitUrl, 'workloadGit')}
                    disabled={urlVerificationStates.workloadGit.loading || !workloadGitUrl.trim()}
                    className="px-4 py-3 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 disabled:bg-gray-400 transition-all"
                  >
                    {urlVerificationStates.workloadGit.loading ? (
                      <Loader className="w-4 h-4 animate-spin" />
                    ) : (
                      'Verify'
                    )}
                  </button>
                </div>
                {urlVerificationStates.workloadGit.status && (
                  <p className={`text-sm mt-1 ${
                    urlVerificationStates.workloadGit.status === 'success' 
                      ? 'text-green-600' 
                      : 'text-red-600'
                  }`}>
                    {urlVerificationStates.workloadGit.status === 'success' 
                      ? '✓ URL is accessible' 
                      : '✗ URL could not be verified'}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  Helm Chart URL *
                </label>
                <div className="flex gap-2">
                  <input
                    type="url"
                    value={helmChartUrl}
                    onChange={(e) => setHelmChartUrl(e.target.value)}
                    placeholder="https://charts.company.com/repository"
                    className="flex-1 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <button
                    onClick={() => verifyUrl(helmChartUrl, 'helmChart')}
                    disabled={urlVerificationStates.helmChart.loading || !helmChartUrl.trim()}
                    className="px-4 py-3 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 disabled:bg-gray-400 transition-all"
                  >
                    {urlVerificationStates.helmChart.loading ? (
                      <Loader className="w-4 h-4 animate-spin" />
                    ) : (
                      'Verify'
                    )}
                  </button>
                </div>
                {urlVerificationStates.helmChart.status && (
                  <p className={`text-sm mt-1 ${
                    urlVerificationStates.helmChart.status === 'success' 
                      ? 'text-green-600' 
                      : 'text-red-600'
                  }`}>
                    {urlVerificationStates.helmChart.status === 'success' 
                      ? '✓ URL is accessible' 
                      : '✗ URL could not be verified'}
                  </p>
                )}
              </div>
            </div>

            {/* Kubernetes Namespace */}
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">
                Kubernetes Namespace *
              </label>
              <input
                type="text"
                value={kubernetesNamespace}
                onChange={(e) => setKubernetesNamespace(e.target.value)}
                placeholder="e.g., my-app-dev"
                pattern="[a-z0-9-]+"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <p className="text-sm text-gray-500 mt-1">
                Must be lowercase letters, numbers, and hyphens only
              </p>
            </div>

            {/* Submission Buttons */}
            <div className="border-t border-gray-200 pt-8">
              <div className="flex items-center justify-between">
                <p className="text-gray-600">Your Kubernetes onboarding request will be processed and you'll receive a confirmation email.</p>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setShowForm(false)}
                    className="px-6 py-3 border border-gray-200 rounded-xl font-bold text-gray-700 hover:bg-gray-50 transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handleSubmit('Save')}
                    className="px-6 py-3 bg-gray-600 text-white rounded-xl font-bold hover:bg-gray-700 transition-all"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => handleSubmit('Preview')}
                    className="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all"
                  >
                    Preview
                  </button>
                  <button
                    onClick={() => handleSubmit('Deploy')}
                    className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl font-bold hover:from-red-700 hover:to-red-800 transition-all shadow-lg hover:shadow-xl"
                  >
                    Deploy
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Kubernetes Onboarding Status Page
const KubernetesOnboardingStatus = () => {
  const deploymentSteps = [
    {
      id: 1,
      title: 'Request Validation',
      description: 'Validating configuration and prerequisites',
      status: 'completed',
      timestamp: '2025-01-08 09:15:00',
      duration: '2 minutes'
    },
    {
      id: 2,
      title: 'Cluster Provisioning',
      description: 'Creating Kubernetes cluster infrastructure',
      status: 'completed', 
      timestamp: '2025-01-08 09:17:00',
      duration: '15 minutes'
    },
    {
      id: 3,
      title: 'Network Configuration',
      description: 'Setting up networking and security groups',
      status: 'in-progress',
      timestamp: '2025-01-08 09:32:00',
      duration: '8 minutes (estimated)'
    },
    {
      id: 4,
      title: 'Node Group Setup',
      description: 'Configuring worker nodes and auto-scaling',
      status: 'pending',
      timestamp: null,
      duration: '10 minutes (estimated)'
    },
    {
      id: 5,
      title: 'ArgoCD Integration',
      description: 'Setting up GitOps deployment pipeline',
      status: 'pending',
      timestamp: null,
      duration: '5 minutes (estimated)'
    },
    {
      id: 6,
      title: 'Application Deployment',
      description: 'Deploying initial application workload',
      status: 'pending',
      timestamp: null,
      duration: '12 minutes (estimated)'
    }
  ];

  const clusterResources = [
    {
      title: 'Kubernetes Cluster',
      value: 'aks-telmaai-prod-eastus2',
      status: 'completed',
      icon: Container,
      color: 'blue'
    },
    {
      title: 'Node Pool',
      value: '3 nodes (Standard_D4s_v3)',
      status: 'completed',
      icon: Server,
      color: 'green'
    },
    {
      title: 'Virtual Network',
      value: 'vnet-k8s-telmaai-prod',
      status: 'in-progress',
      icon: Network,
      color: 'orange'
    },
    {
      title: 'Load Balancer',
      value: 'lb-k8s-external',
      status: 'pending',
      icon: Globe,
      color: 'gray'
    },
    {
      title: 'Storage Class',
      value: 'managed-premium',
      status: 'pending',
      icon: HardDrive,
      color: 'gray'
    },
    {
      title: 'Ingress Controller',
      value: 'nginx-ingress',
      status: 'pending',
      icon: Monitor,
      color: 'gray'
    }
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-slate-900">Kubernetes Onboarding Status</h2>
        <p className="text-gray-600 mt-2">Request ID: REQ-K8S-2025-0790 | Started: January 8, 2025 at 9:15 AM</p>
      </div>

      {/* Overall Progress */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-slate-900">Deployment Progress</h3>
          <div className="flex items-center gap-2">
            <Loader className="w-5 h-5 animate-spin text-orange-600" />
            <span className="text-orange-600 font-bold">In Progress</span>
          </div>
        </div>
        
        <div className="bg-gray-200 rounded-full h-3 mb-4">
          <div className="bg-gradient-to-r from-red-600 to-red-700 h-3 rounded-full transition-all duration-500" style={{width: '42%'}}></div>
        </div>
        
        <div className="flex justify-between text-sm text-gray-600">
          <span>42% Complete</span>
          <span>Estimated completion: ~25 minutes remaining</span>
        </div>
      </div>

      {/* Deployment Steps */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-xl font-bold text-slate-900 mb-6">Deployment Steps</h3>
          
          <div className="space-y-4">
            {deploymentSteps.map((step, index) => (
              <div key={step.id} className="flex items-start gap-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                  step.status === 'completed' ? 'bg-green-600' :
                  step.status === 'in-progress' ? 'bg-orange-600' :
                  'bg-gray-400'
                }`}>
                  {step.status === 'completed' ? '✓' :
                   step.status === 'in-progress' ? <Loader className="w-4 h-4 animate-spin" /> :
                   step.id}
                </div>
                
                <div className="flex-1">
                  <div className={`font-bold ${
                    step.status === 'completed' ? 'text-green-600' :
                    step.status === 'in-progress' ? 'text-orange-600' :
                    'text-gray-500'
                  }`}>
                    {step.title}
                  </div>
                  <div className="text-sm text-gray-600 mb-1">{step.description}</div>
                  <div className="text-xs text-gray-500">
                    {step.timestamp ? `Started: ${step.timestamp}` : 'Pending'} • 
                    Duration: {step.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resource Status */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-xl font-bold text-slate-900 mb-6">Cluster Resources</h3>
          
          <div className="space-y-4">
            {clusterResources.map((resource, index) => (
              <div key={index} className={`p-4 border rounded-lg ${
                resource.status === 'completed' ? 'border-green-200 bg-green-50' :
                resource.status === 'in-progress' ? 'border-orange-200 bg-orange-50' :
                'border-gray-200 bg-gray-50 opacity-60'
              }`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    resource.color === 'blue' ? 'bg-blue-100' :
                    resource.color === 'green' ? 'bg-green-100' :
                    resource.color === 'purple' ? 'bg-purple-100' :
                    resource.color === 'orange' ? 'bg-orange-100' :
                    'bg-gray-100'
                  }`}>
                    <resource.icon className={`w-5 h-5 ${
                      resource.color === 'blue' ? 'text-blue-600' :
                      resource.color === 'green' ? 'text-green-600' :
                      resource.color === 'purple' ? 'text-purple-600' :
                      resource.color === 'orange' ? 'text-orange-600' :
                      'text-gray-600'
                    }`} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">{resource.title}</div>
                    <div className="text-xs text-gray-600 font-mono">{resource.value}</div>
                  </div>
                </div>
                <div className={`text-xs font-bold ${
                  resource.status === 'completed' ? 'text-green-600' :
                  resource.status === 'in-progress' ? 'text-orange-600' :
                  'text-gray-500'
                }`}>
                  {resource.status === 'completed' ? '✓ Completed' :
                   resource.status === 'in-progress' ? '⏳ In Progress' :
                   '⏸ Pending'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App Component
export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  
  const currentUser = {
    name: 'Chad Kellerman',
    email: 'Chad.Kellerman@jll.com'
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'dashboard':
        return <DashboardPage />;
      case 'financial':
        return <FinancialDashboard />;
      case 'applications':
        return <ApplicationManagement />;
      case 'projects':
        return <ProjectsManagement />;
      case 'cloud-onboarding':
        return <CloudOnboarding setCurrentPage={setCurrentPage} />;
      case 'cloud-onboarding-status':
        return <CloudOnboardingStatus />;
      case 'kubernetes-onboarding':
        return <KubernetesOnboarding setCurrentPage={setCurrentPage} />;
      case 'kubernetes-onboarding-status':
        return <KubernetesOnboardingStatus />;
      case 'vulnerabilities':
        return <VulnerabilitiesDashboard />;
      case 'infrabuilder':
        return <InfraBuilder />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  const getPageUrl = () => {
    const urlMap = {
      'home': 'https://hero.jll.com',
      'dashboard': 'https://hero.jll.com/dashboards/deployments',
      'financial': 'https://hero.jll.com/dashboards/financials',
      'applications': 'https://hero.jll.com/dashboards/applications',
      'projects': 'https://hero.jll.com/onboarding/projects',
      'cloud-onboarding': 'https://hero.jll.com/onboarding/csp',
      'cloud-onboarding-status': 'https://hero.jll.com/onboarding/csp/status/REQ-2025-0789',
      'kubernetes-onboarding': 'https://hero.jll.com/onboarding/kubernetes',
      'kubernetes-onboarding-status': 'https://hero.jll.com/onboarding/kubernetes/status/REQ-2025-0790',
      'vulnerabilities': 'https://hero.jll.com/dashboards/vulnerabilities',
      'infrabuilder': 'https://hero.jll.com/build/infrabuilder'
    };
    return urlMap[currentPage] || 'https://hero.jll.com';
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar 
        currentUser={currentUser} 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <BrowserChrome url={getPageUrl()} hasAlerts={true} />
        
        {/* Global Alert Banner - only show on home page */}
        {currentPage === 'home' && (
          <div className="bg-gradient-to-r from-orange-50 to-red-50 border-b border-orange-200 px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              <span className="text-slate-900 font-medium">
                <strong>3 alerts require attention:</strong> Budget exceeded for TelmaAI, Azure VM cost spike detected
              </span>
            </div>
            <button 
              onClick={() => setCurrentPage('financial')}
              className="text-red-600 hover:text-red-700 font-bold transition-colors"
            >
              View Details →
            </button>
          </div>
        )}
        
        {/* Hide breadcrumb for InfraBuilder pages */}
        {currentPage !== 'infrabuilder' && <Breadcrumb currentPage={currentPage} />}
        
        <div className="flex-1 overflow-y-auto">
          {renderPage()}
        </div>
      </div>
    </div>
  );
}