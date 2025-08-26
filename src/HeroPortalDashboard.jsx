import React, { useState, useEffect } from 'react';
import { 
  Home, Settings, Cloud, Shield, Code, DollarSign, 
  AlertCircle, Cpu, Database, Globe, Activity, 
  ChevronRight, ChevronLeft, Calendar, CheckCircle, XCircle, 
  Clock, TrendingUp, TrendingDown, Minus, AlertTriangle, Loader, Bell,
  Search, Filter, Download, Plus, Eye, MoreHorizontal,
  Server, Container, Network, HardDrive, Users,
  BarChart3, PieChart, LineChart, Target, Zap,
  GitBranch, Package, Layers, Monitor, Trash2, PencilRuler, Info,
  Sparkles, MoreVertical, Rocket, Bolt, ShieldCheck, Award,
  TestTube, Scale, Lock, Clock4, Users2, Palette, Settings2,
  FlaskConical, Wrench, Gauge, Medal, Trophy, Flame
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
                <div 
                  onClick={() => setCurrentPage('code-commits')}
                  className={`px-4 py-2 rounded-lg cursor-pointer text-sm transition-all ${
                    isActive('code-commits') 
                      ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg' 
                      : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                  }`}
                >
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
                <div 
                  onClick={() => setCurrentPage('deployments')}
                  className={`px-4 py-2 rounded-lg cursor-pointer text-sm transition-all ${
                    isActive('deployments') 
                      ? 'bg-gray-800 text-white border-l-4 border-red-600' 
                      : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  <Zap className="w-4 h-4 inline mr-2" />
                  Deployments
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
      'projects': ['Home', 'Onboarding', 'Projects'],
      'cloud-onboarding': ['Home', 'Onboarding', 'Cloud Service Provider'],
      'cloud-onboarding-status': ['Home', 'Onboarding', 'Cloud Service Provider', 'Status'],
      'kubernetes-onboarding': ['Home', 'Onboarding', 'Kubernetes'],
      'kubernetes-onboarding-status': ['Home', 'Onboarding', 'Kubernetes', 'Status'],
      'vulnerabilities': ['Home', 'Dashboards', 'Vulnerabilities'],
      'code-commits': ['Home', 'Dashboards', 'Code Commits'],
      'infrabuilder': ['Home', 'Build', 'InfraBuilder'],
      'deployments': ['Home', 'Build', 'Deployments']
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

// Modern Minimal Home Page
const HomePage = ({ setCurrentPage }) => {
  return (
    <div className="p-12 bg-white min-h-screen">
      {/* Simplified Header */}
      <div className="mb-16">
        <h1 className="text-4xl font-light text-slate-900 mb-2">
          Welcome to the JLL HERO Portal
        </h1>
        <p className="text-sm text-gray-500 uppercase tracking-wider">Cloud Infrastructure Management</p>
      </div>

      {/* Minimal Statistics */}
      <div className="mb-16">
        <div className="grid grid-cols-4 gap-8">
          <div 
            onClick={() => setCurrentPage('dashboard')}
            className="cursor-pointer group"
          >
            <div className="text-3xl font-light text-slate-900 mb-2 group-hover:text-[#003E51] transition-colors">17</div>
            <div className="text-xs text-gray-500 uppercase tracking-wider">Active Deployments</div>
            <div className="text-xs text-green-600 mt-1">↑ 3</div>
          </div>
          <div 
            onClick={() => setCurrentPage('dashboard')}
            className="cursor-pointer group"
          >
            <div className="text-3xl font-light text-slate-900 mb-2 group-hover:text-[#003E51] transition-colors">96%</div>
            <div className="text-xs text-gray-500 uppercase tracking-wider">Success Rate</div>
            <div className="text-xs text-gray-400 mt-1">7 days</div>
          </div>
          <div 
            onClick={() => setCurrentPage('financial')}
            className="cursor-pointer group"
          >
            <div className="text-3xl font-light text-slate-900 mb-2 group-hover:text-[#003E51] transition-colors">$12.8K</div>
            <div className="text-xs text-gray-500 uppercase tracking-wider">Monthly Spend</div>
            <div className="text-xs text-orange-600 mt-1">85% budget</div>
          </div>
          <div 
            onClick={() => setCurrentPage('financial')}
            className="cursor-pointer group"
          >
            <div className="text-3xl font-light text-slate-900 mb-2 group-hover:text-[#003E51] transition-colors">3</div>
            <div className="text-xs text-gray-500 uppercase tracking-wider">Active Alerts</div>
            <div className="text-xs text-red-600 mt-1">Action required</div>
          </div>
        </div>
      </div>

      {/* Refined Quick Actions */}
      <div className="mb-16">
        <h2 className="text-xs text-gray-500 uppercase tracking-wider mb-6">Quick Actions</h2>
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-gradient-to-br from-[#003E51] to-[#BCDEE6] rounded-xl p-6 cursor-pointer hover:shadow-lg transition-all duration-300 group">
            <Zap className="w-6 h-6 text-white mb-3" />
            <h3 className="font-medium text-sm text-white">New Deployment</h3>
          </div>
          <div 
            onClick={() => setCurrentPage('cloud-onboarding')}
            className="bg-gradient-to-br from-[#003E51] to-[#BCDEE6] rounded-xl p-6 cursor-pointer hover:shadow-lg transition-all duration-300 group"
          >
            <Cloud className="w-6 h-6 text-white mb-3" />
            <h3 className="font-medium text-sm text-white">Cloud Onboarding</h3>
          </div>
          <div 
            onClick={() => setCurrentPage('financial')}
            className="bg-gradient-to-br from-[#003E51] to-[#BCDEE6] rounded-xl p-6 cursor-pointer hover:shadow-lg transition-all duration-300 group"
          >
            <DollarSign className="w-6 h-6 text-white mb-3" />
            <h3 className="font-medium text-sm text-white">Cost Analytics</h3>
          </div>
          <div 
            onClick={() => setCurrentPage('infrabuilder')}
            className="bg-gradient-to-br from-[#003E51] to-[#BCDEE6] rounded-xl p-6 cursor-pointer hover:shadow-lg transition-all duration-300 group"
          >
            <PencilRuler className="w-6 h-6 text-white mb-3" />
            <h3 className="font-medium text-sm text-white">InfraBuilder</h3>
          </div>
        </div>
      </div>

      {/* AI Assistant - Minimal */}
      <div className="mb-16">
        <h2 className="text-xs text-gray-500 uppercase tracking-wider mb-6">AI Assistant</h2>
        <AskHeroAI />
      </div>

      {/* Streamlined Activity */}
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h3 className="text-xs text-gray-500 uppercase tracking-wider mb-6">Recent Deployments</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-3 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div>
                  <div className="text-sm font-medium text-slate-900">EDP Core v2.1.4</div>
                  <div className="text-xs text-gray-500">Production</div>
                </div>
              </div>
              <div className="text-xs text-gray-500">2h ago</div>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div>
                  <div className="text-sm font-medium text-slate-900">TelmaAI v3.0.0</div>
                  <div className="text-xs text-gray-500">Staging</div>
                </div>
              </div>
              <div className="text-xs text-gray-500">4h ago</div>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div>
                  <div className="text-sm font-medium text-slate-900">Corrigo Core v1.8.2</div>
                  <div className="text-xs text-gray-500">Production</div>
                </div>
              </div>
              <div className="text-xs text-gray-500">1d ago</div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xs text-gray-500 uppercase tracking-wider mb-6">Platform Health</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-3 border-b border-gray-100">
              <span className="text-sm text-slate-900">Cloud Services</span>
              <span className="text-xs text-green-600 font-medium">Operational</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-100">
              <span className="text-sm text-slate-900">Kubernetes Clusters</span>
              <span className="text-xs text-green-600 font-medium">Healthy</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-100">
              <span className="text-sm text-slate-900">API Gateway</span>
              <span className="text-xs text-orange-600 font-medium">Degraded</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-100">
              <span className="text-sm text-slate-900">Monitoring</span>
              <span className="text-xs text-green-600 font-medium">Active</span>
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

// Enterprise Code Commits Dashboard  
const CodeCommitsDashboard = () => {
  const [selectedProject, setSelectedProject] = useState('All Projects');
  const [selectedComponent, setSelectedComponent] = useState('All Components');
  const [selectedTimeRange, setSelectedTimeRange] = useState('30d');
  const [selectedView, setSelectedView] = useState('overview');
  const [expandedMetrics, setExpandedMetrics] = useState(new Set());
  const [isHeroAIPanelExpanded, setIsHeroAIPanelExpanded] = useState(true);

  // Comprehensive code metrics data structure
  const codeMetricsData = {
    projects: ['All Projects', 'EDP Core', 'TelmaAI', 'Corrigo Core', 'ScheduleAI', 'PropertyOS'],
    components: ['All Components', 'Frontend', 'Backend API', 'Database', 'Microservices', 'Infrastructure'],
    
    // DORA Metrics with trend analysis
    doraMetrics: {
      deploymentFrequency: {
        current: 2.3,
        previous: 1.8,
        trend: '+27.8%',
        status: 'excellent',
        target: 2.0,
        description: 'Deployments per day',
        details: {
          weekly: [1.2, 1.5, 1.8, 2.1, 2.3],
          byProject: {
            'EDP Core': 3.1,
            'TelmaAI': 2.8,
            'Corrigo Core': 1.9,
            'ScheduleAI': 2.0
          }
        }
      },
      leadTime: {
        current: 2.1,
        previous: 3.2,
        trend: '-34.4%',
        status: 'excellent',
        target: 2.5,
        description: 'Days from commit to production',
        details: {
          weekly: [3.8, 3.2, 2.8, 2.4, 2.1],
          byProject: {
            'EDP Core': 1.8,
            'TelmaAI': 2.2,
            'Corrigo Core': 2.5,
            'ScheduleAI': 1.9
          }
        }
      },
      changeFailureRate: {
        current: 8.2,
        previous: 12.1,
        trend: '-32.2%',
        status: 'good',
        target: 10.0,
        description: '% of deployments causing failures',
        details: {
          weekly: [15.2, 12.1, 10.8, 9.3, 8.2],
          byProject: {
            'EDP Core': 6.1,
            'TelmaAI': 7.8,
            'Corrigo Core': 10.5,
            'ScheduleAI': 8.9
          }
        }
      },
      mttr: {
        current: 1.3,
        previous: 2.1,
        trend: '-38.1%',
        status: 'excellent',
        target: 2.0,
        description: 'Hours to restore service',
        details: {
          weekly: [2.8, 2.1, 1.8, 1.5, 1.3],
          byProject: {
            'EDP Core': 1.1,
            'TelmaAI': 1.2,
            'Corrigo Core': 1.6,
            'ScheduleAI': 1.4
          }
        }
      }
    },

    // Pull Request Analytics
    pullRequestMetrics: {
      totalPRs: 847,
      openPRs: 23,
      mergedPRs: 789,
      closedPRs: 35,
      avgReviewTime: 4.2,
      avgMergeTime: 6.1,
      reviewParticipation: 89.3,
      codeReviewCoverage: 94.7,
      prSizeDistribution: {
        'XS (1-10 lines)': 156,
        'S (11-50 lines)': 342,
        'M (51-250 lines)': 267,
        'L (251-500 lines)': 61,
        'XL (500+ lines)': 21
      },
      reviewerLoad: [
        { name: 'Sarah Chen', reviews: 89, avgTime: 3.2, projects: ['EDP Core', 'TelmaAI'] },
        { name: 'Mike Rodriguez', reviews: 67, avgTime: 4.1, projects: ['Corrigo Core', 'ScheduleAI'] },
        { name: 'Lisa Johnson', reviews: 54, avgTime: 2.8, projects: ['PropertyOS', 'EDP Core'] },
        { name: 'David Kim', reviews: 48, avgTime: 5.2, projects: ['TelmaAI', 'Microservices'] }
      ]
    },

    // Developer Productivity Insights
    developerMetrics: {
      commits: {
        total: 2847,
        weekly: [187, 203, 234, 198, 221, 189, 215],
        byAuthor: [
          { name: 'Alex Thompson', commits: 298, linesAdded: 18420, linesDeleted: 8930, files: 156, projects: 3 },
          { name: 'Emma Davis', commits: 276, linesAdded: 16780, linesDeleted: 9200, files: 143, projects: 2 },
          { name: 'Josh Wilson', commits: 254, linesAdded: 15330, linesDeleted: 7890, files: 134, projects: 4 },
          { name: 'Maria Garcia', commits: 231, linesAdded: 14220, linesDeleted: 6780, files: 127, projects: 2 }
        ],
        languages: {
          'JavaScript/TypeScript': 42.3,
          'Python': 28.1,
          'Java': 15.7,
          'C#': 8.9,
          'Go': 5.0
        }
      },
      codeQuality: {
        testCoverage: 87.3,
        codeComplexity: 'Medium',
        technicalDebt: 2.1, // hours
        duplication: 3.4, // %
        maintainabilityIndex: 8.2,
        securityHotspots: 12,
        bugDensity: 0.8, // per 1000 lines
        vulnerabilities: 3
      },
      velocity: {
        storyPoints: 127,
        burndown: 85.2,
        cycleTime: 5.8,
        throughput: 23.4,
        predictability: 91.7
      }
    },

    // Code Quality Trends
    qualityTrends: {
      coverage: [82.1, 84.3, 85.7, 86.9, 87.3],
      complexity: [6.2, 5.8, 5.6, 5.4, 5.2],
      duplication: [4.1, 3.9, 3.7, 3.5, 3.4],
      maintainability: [7.8, 8.0, 8.1, 8.1, 8.2]
    },

    // Repository Health
    repoHealth: [
      { name: 'EDP Core', health: 92, commits: 567, contributors: 8, lastActivity: '2 hours ago', issues: 3, prs: 7 },
      { name: 'TelmaAI', health: 89, commits: 423, contributors: 6, lastActivity: '1 hour ago', issues: 5, prs: 4 },
      { name: 'Corrigo Core', health: 85, commits: 398, contributors: 9, lastActivity: '4 hours ago', issues: 8, prs: 6 },
      { name: 'ScheduleAI', health: 88, commits: 334, contributors: 5, lastActivity: '3 hours ago', issues: 2, prs: 3 },
      { name: 'PropertyOS', health: 91, commits: 298, contributors: 7, lastActivity: '1 hour ago', issues: 1, prs: 2 }
    ]
  };

  const getStatusColor = (status) => {
    const colors = {
      excellent: 'text-green-600 bg-green-50 border-green-200',
      good: 'text-blue-600 bg-blue-50 border-blue-200',
      warning: 'text-yellow-600 bg-yellow-50 border-yellow-200',
      critical: 'text-red-600 bg-red-50 border-red-200'
    };
    return colors[status] || colors.good;
  };

  const getTrendIcon = (trend) => {
    if (trend.startsWith('+')) return <TrendingUp className="w-4 h-4 text-green-600" />;
    if (trend.startsWith('-')) return <TrendingDown className="w-4 h-4 text-green-600" />;
    return <Minus className="w-4 h-4 text-gray-600" />;
  };

  const getHealthColor = (health) => {
    if (health >= 90) return 'text-green-600';
    if (health >= 80) return 'text-yellow-600';
    return 'text-red-600';
  };

  const toggleMetricExpansion = (metricKey) => {
    const newExpanded = new Set(expandedMetrics);
    if (newExpanded.has(metricKey)) {
      newExpanded.delete(metricKey);
    } else {
      newExpanded.add(metricKey);
    }
    setExpandedMetrics(newExpanded);
  };

  // Enhanced filtering logic that dynamically calculates metrics
  const getFilteredData = () => {
    const baseData = codeMetricsData;
    
    // Project-specific metrics variations
    const projectMultipliers = {
      'EDP Core': { 
        deployment: 1.35, leadTime: 0.85, failure: 0.74, mttr: 0.85,
        commits: 1.2, coverage: 1.05, complexity: 0.9, reviewTime: 0.85
      },
      'TelmaAI': { 
        deployment: 1.22, leadTime: 1.05, failure: 0.95, mttr: 0.92,
        commits: 1.15, coverage: 0.98, complexity: 1.1, reviewTime: 1.1
      },
      'Corrigo Core': { 
        deployment: 0.83, leadTime: 1.19, failure: 1.28, mttr: 1.23,
        commits: 0.9, coverage: 0.92, complexity: 1.2, reviewTime: 1.3
      },
      'ScheduleAI': { 
        deployment: 0.87, leadTime: 0.90, failure: 1.09, mttr: 1.08,
        commits: 1.05, coverage: 0.95, complexity: 1.05, reviewTime: 0.95
      },
      'PropertyOS': { 
        deployment: 1.1, leadTime: 0.95, failure: 0.85, mttr: 0.90,
        commits: 1.1, coverage: 1.02, complexity: 0.95, reviewTime: 0.90
      }
    };

    // Component-specific adjustments
    const componentMultipliers = {
      'Frontend': { commits: 1.3, complexity: 0.8, coverage: 0.9, reviewTime: 0.85 },
      'Backend API': { commits: 1.1, complexity: 1.2, coverage: 1.1, reviewTime: 1.1 },
      'Database': { commits: 0.6, complexity: 1.4, coverage: 1.2, reviewTime: 1.3 },
      'Microservices': { commits: 0.9, complexity: 1.1, coverage: 1.05, reviewTime: 1.05 },
      'Infrastructure': { commits: 0.4, complexity: 1.3, coverage: 0.8, reviewTime: 1.2 }
    };

    // Time-based adjustments
    const timeMultipliers = {
      '7d': { scale: 0.25, commits: 0.3, prs: 0.2 },
      '30d': { scale: 1.0, commits: 1.0, prs: 1.0 },
      '90d': { scale: 3.2, commits: 3.1, prs: 2.8 },
      '1y': { scale: 12.5, commits: 12.2, prs: 11.8 }
    };

    let projectMult = selectedProject === 'All Projects' ? 
      { deployment: 1, leadTime: 1, failure: 1, mttr: 1, commits: 1, coverage: 1, complexity: 1, reviewTime: 1 } : 
      projectMultipliers[selectedProject];
    
    let componentMult = selectedComponent === 'All Components' ? 
      { commits: 1, complexity: 1, coverage: 1, reviewTime: 1 } : 
      componentMultipliers[selectedComponent];
    
    let timeMult = timeMultipliers[selectedTimeRange];

    // Calculate filtered DORA metrics
    const filteredDORA = {
      deploymentFrequency: {
        current: Math.round((baseData.doraMetrics.deploymentFrequency.current * projectMult.deployment) * 10) / 10,
        previous: Math.round((baseData.doraMetrics.deploymentFrequency.previous * projectMult.deployment * 0.9) * 10) / 10,
        trend: `+${Math.round(((baseData.doraMetrics.deploymentFrequency.current * projectMult.deployment) / (baseData.doraMetrics.deploymentFrequency.previous * projectMult.deployment * 0.9) - 1) * 100 * 10) / 10}%`,
        status: baseData.doraMetrics.deploymentFrequency.status,
        target: baseData.doraMetrics.deploymentFrequency.target,
        description: baseData.doraMetrics.deploymentFrequency.description,
        details: baseData.doraMetrics.deploymentFrequency.details
      },
      leadTime: {
        current: Math.round((baseData.doraMetrics.leadTime.current * projectMult.leadTime) * 10) / 10,
        previous: Math.round((baseData.doraMetrics.leadTime.previous * projectMult.leadTime * 1.1) * 10) / 10,
        trend: `-${Math.round((1 - (baseData.doraMetrics.leadTime.current * projectMult.leadTime) / (baseData.doraMetrics.leadTime.previous * projectMult.leadTime * 1.1)) * 100 * 10) / 10}%`,
        status: baseData.doraMetrics.leadTime.status,
        target: baseData.doraMetrics.leadTime.target,
        description: baseData.doraMetrics.leadTime.description,
        details: baseData.doraMetrics.leadTime.details
      },
      changeFailureRate: {
        current: Math.round((baseData.doraMetrics.changeFailureRate.current * projectMult.failure) * 10) / 10,
        previous: Math.round((baseData.doraMetrics.changeFailureRate.previous * projectMult.failure * 1.2) * 10) / 10,
        trend: `-${Math.round((1 - (baseData.doraMetrics.changeFailureRate.current * projectMult.failure) / (baseData.doraMetrics.changeFailureRate.previous * projectMult.failure * 1.2)) * 100 * 10) / 10}%`,
        status: baseData.doraMetrics.changeFailureRate.status,
        target: baseData.doraMetrics.changeFailureRate.target,
        description: baseData.doraMetrics.changeFailureRate.description,
        details: baseData.doraMetrics.changeFailureRate.details
      },
      mttr: {
        current: Math.round((baseData.doraMetrics.mttr.current * projectMult.mttr) * 10) / 10,
        previous: Math.round((baseData.doraMetrics.mttr.previous * projectMult.mttr * 1.15) * 10) / 10,
        trend: `-${Math.round((1 - (baseData.doraMetrics.mttr.current * projectMult.mttr) / (baseData.doraMetrics.mttr.previous * projectMult.mttr * 1.15)) * 100 * 10) / 10}%`,
        status: baseData.doraMetrics.mttr.status,
        target: baseData.doraMetrics.mttr.target,
        description: baseData.doraMetrics.mttr.description,
        details: baseData.doraMetrics.mttr.details
      }
    };

    // Calculate filtered PR metrics
    const filteredPRs = {
      totalPRs: Math.round(baseData.pullRequestMetrics.totalPRs * timeMult.prs * projectMult.commits),
      openPRs: Math.round(baseData.pullRequestMetrics.openPRs * timeMult.prs * projectMult.commits * 0.8),
      mergedPRs: Math.round(baseData.pullRequestMetrics.mergedPRs * timeMult.prs * projectMult.commits),
      closedPRs: Math.round(baseData.pullRequestMetrics.closedPRs * timeMult.prs * projectMult.commits * 0.3),
      avgReviewTime: Math.round((baseData.pullRequestMetrics.avgReviewTime * projectMult.reviewTime * componentMult.reviewTime) * 10) / 10,
      avgMergeTime: Math.round((baseData.pullRequestMetrics.avgMergeTime * projectMult.reviewTime * componentMult.reviewTime * 1.2) * 10) / 10,
      reviewParticipation: Math.round((baseData.pullRequestMetrics.reviewParticipation * (projectMult.coverage || 1)) * 10) / 10,
      codeReviewCoverage: Math.round((baseData.pullRequestMetrics.codeReviewCoverage * (projectMult.coverage || 1)) * 10) / 10,
      prSizeDistribution: baseData.pullRequestMetrics.prSizeDistribution,
      reviewerLoad: baseData.pullRequestMetrics.reviewerLoad
    };

    // Calculate filtered developer metrics
    const filteredDevMetrics = {
      commits: {
        total: Math.round(baseData.developerMetrics.commits.total * timeMult.commits * projectMult.commits * componentMult.commits),
        weekly: baseData.developerMetrics.commits.weekly.map(w => Math.round(w * projectMult.commits * componentMult.commits)),
        byAuthor: baseData.developerMetrics.commits.byAuthor.map(author => ({
          ...author,
          commits: Math.round(author.commits * projectMult.commits * componentMult.commits * timeMult.commits),
          linesAdded: Math.round(author.linesAdded * projectMult.commits * componentMult.commits * timeMult.commits),
          linesDeleted: Math.round(author.linesDeleted * projectMult.commits * componentMult.commits * timeMult.commits * 0.8),
          files: Math.round(author.files * projectMult.commits * componentMult.commits * timeMult.commits * 0.9)
        })),
        languages: baseData.developerMetrics.commits.languages
      },
      codeQuality: {
        testCoverage: Math.round((baseData.developerMetrics.codeQuality.testCoverage * projectMult.coverage * componentMult.coverage) * 10) / 10,
        codeComplexity: baseData.developerMetrics.codeQuality.codeComplexity,
        technicalDebt: Math.round((baseData.developerMetrics.codeQuality.technicalDebt * projectMult.complexity * componentMult.complexity) * 10) / 10,
        duplication: Math.round((baseData.developerMetrics.codeQuality.duplication * projectMult.complexity * componentMult.complexity * 0.9) * 10) / 10,
        maintainabilityIndex: Math.round((baseData.developerMetrics.codeQuality.maintainabilityIndex * (2 - projectMult.complexity * componentMult.complexity * 0.5)) * 10) / 10,
        securityHotspots: Math.round(baseData.developerMetrics.codeQuality.securityHotspots * projectMult.complexity * componentMult.complexity),
        bugDensity: Math.round((baseData.developerMetrics.codeQuality.bugDensity * projectMult.complexity * componentMult.complexity * 0.8) * 10) / 10,
        vulnerabilities: Math.round(baseData.developerMetrics.codeQuality.vulnerabilities * projectMult.complexity * componentMult.complexity * 0.7)
      },
      velocity: baseData.developerMetrics.velocity
    };

    // Filter repositories based on selected project
    let filteredRepos = baseData.repoHealth;
    if (selectedProject !== 'All Projects') {
      filteredRepos = baseData.repoHealth.filter(repo => repo.name.includes(selectedProject.split(' ')[0]));
      if (filteredRepos.length === 0) {
        // If no exact match, show the selected project as primary repo
        filteredRepos = [{
          name: selectedProject,
          health: Math.round(92 * (projectMult.coverage || 1)),
          commits: Math.round(567 * projectMult.commits * timeMult.commits),
          contributors: Math.round(8 * (projectMult.commits > 1 ? 1.2 : 0.8)),
          lastActivity: '2 hours ago',
          issues: Math.round(3 * (projectMult.failure || 1)),
          prs: Math.round(7 * projectMult.commits)
        }];
      }
    }

    return {
      ...baseData,
      doraMetrics: filteredDORA,
      pullRequestMetrics: filteredPRs,
      developerMetrics: filteredDevMetrics,
      repoHealth: filteredRepos,
      // Add filter context for display
      filterContext: {
        project: selectedProject,
        component: selectedComponent,
        timeRange: selectedTimeRange,
        showing: selectedProject === 'All Projects' ? 'all projects' : selectedProject,
        componentScope: selectedComponent === 'All Components' ? 'all components' : selectedComponent.toLowerCase()
      }
    };
  };

  const filteredData = getFilteredData();

  // HeroAI insights and recommendations
  const getHeroAIInsights = () => {
    const data = filteredData;
    const insights = [];
    const recommendations = [];
    const alerts = [];

    // Analyze DORA metrics for insights
    const deploymentFreq = data.doraMetrics.deploymentFrequency.current;
    const leadTime = data.doraMetrics.leadTime.current;
    const failureRate = data.doraMetrics.changeFailureRate.current;
    const mttr = data.doraMetrics.mttr.current;

    // Performance Analysis
    if (deploymentFreq >= 2.5) {
      insights.push({ icon: Rocket, text: "Excellent deployment velocity detected - your team is in the elite performance tier" });
    } else if (deploymentFreq < 1.0) {
      alerts.push({ icon: AlertTriangle, text: "Low deployment frequency may indicate deployment bottlenecks" });
      recommendations.push("Consider implementing automated deployment pipelines and reducing batch sizes");
    }

    if (leadTime <= 2.0) {
      insights.push({ icon: Bolt, text: "Outstanding lead time - changes reach production quickly" });
    } else if (leadTime > 3.0) {
      alerts.push({ icon: Clock4, text: "High lead time detected - development velocity could be improved" });
      recommendations.push("Review code review processes and consider feature flagging to reduce cycle time");
    }

    if (failureRate <= 5.0) {
      insights.push({ icon: ShieldCheck, text: "Excellent stability - very low change failure rate" });
    } else if (failureRate > 15.0) {
      alerts.push({ icon: Flame, text: "High change failure rate indicates quality issues" });
      recommendations.push("Implement additional testing automation and consider trunk-based development");
    }

    // Code Quality Analysis
    const coverage = data.developerMetrics.codeQuality.testCoverage;
    const debt = data.developerMetrics.codeQuality.technicalDebt;
    const hotspots = data.developerMetrics.codeQuality.securityHotspots;

    if (coverage >= 90) {
      insights.push({ icon: CheckCircle, text: "Excellent test coverage - well-protected codebase" });
    } else if (coverage < 80) {
      alerts.push({ icon: TestTube, text: "Test coverage below recommended threshold" });
      recommendations.push("Prioritize writing unit tests for critical business logic");
    }

    if (debt > 5.0) {
      alerts.push({ icon: Scale, text: "Technical debt accumulation detected" });
      recommendations.push("Schedule regular refactoring sessions to address technical debt");
    }

    if (hotspots > 20) {
      alerts.push({ icon: Lock, text: "Multiple security hotspots require attention" });
      recommendations.push("Run security scans and address high-priority vulnerabilities");
    }

    // PR Analysis
    const reviewTime = data.pullRequestMetrics.avgReviewTime;
    const participation = data.pullRequestMetrics.reviewParticipation;

    if (reviewTime > 8.0) {
      alerts.push({ icon: Clock, text: "Long PR review times may slow development" });
      recommendations.push("Consider smaller PR sizes and dedicated review time slots");
    }

    if (participation < 80) {
      alerts.push({ icon: Users2, text: "Low review participation affects code quality" });
      recommendations.push("Implement review assignment rotation and provide review guidelines");
    }

    // Filter-specific insights
    if (selectedProject !== 'All Projects') {
      const projectContext = {
        'EDP Core': {
          insight: { icon: Trophy, text: "EDP Core is your highest performing project with elite DevOps metrics" },
          recommendation: "Use EDP Core's practices as a template for other projects"
        },
        'TelmaAI': {
          insight: { icon: Cpu, text: "TelmaAI shows strong AI/ML development patterns with good testing practices" },
          recommendation: "Monitor complexity growth as ML models evolve"
        },
        'Corrigo Core': {
          insight: { icon: Settings2, text: "Corrigo Core shows legacy system characteristics with improvement opportunities" },
          recommendation: "Focus on modernizing deployment practices and reducing lead time"
        },
        'ScheduleAI': {
          insight: { icon: Gauge, text: "ScheduleAI demonstrates well-balanced development practices across all metrics" },
          recommendation: "Maintain current practices and consider as reference for other projects"
        },
        'PropertyOS': {
          insight: { icon: Home, text: "PropertyOS shows modern architecture benefits with strong performance" },
          recommendation: "Continue leveraging modern practices and monitor scaling challenges"
        }
      };
      
      const context = projectContext[selectedProject];
      if (context) {
        insights.push(context.insight);
        recommendations.push(context.recommendation);
      }
    }

    if (selectedComponent !== 'All Components') {
      const componentContext = {
        'Frontend': {
          insight: { icon: Palette, text: "Frontend components show high velocity with good maintainability" },
          recommendation: "Consider component library standardization to improve consistency"
        },
        'Backend API': {
          insight: { icon: Settings, text: "Backend APIs demonstrate solid engineering practices with good test coverage" },
          recommendation: "Monitor API performance and consider implementing automated contract testing"
        },
        'Database': {
          insight: { icon: Database, text: "Database changes follow careful review patterns due to high impact" },
          recommendation: "Implement database migration testing and rollback procedures"
        },
        'Microservices': {
          insight: { icon: Network, text: "Microservices show distributed development patterns with cross-team coordination" },
          recommendation: "Focus on service contracts and inter-service communication monitoring"
        },
        'Infrastructure': {
          insight: { icon: Wrench, text: "Infrastructure changes demonstrate careful change management practices" },
          recommendation: "Consider Infrastructure as Code adoption and automated testing for configs"
        }
      };
      
      const context = componentContext[selectedComponent];
      if (context) {
        insights.push(context.insight);
        recommendations.push(context.recommendation);
      }
    }

    // Add dynamic trend insights
    const deploymentTrend = parseFloat(data.doraMetrics.deploymentFrequency.trend.replace('%', '').replace('+', ''));
    const leadTimeTrend = parseFloat(data.doraMetrics.leadTime.trend.replace('%', '').replace('-', ''));
    
    if (deploymentTrend > 25) {
      insights.push({ icon: TrendingUp, text: "Deployment frequency has significantly improved - excellent velocity gains" });
    }
    
    if (leadTimeTrend > 30) {
      insights.push({ icon: Target, text: "Lead time reduction is outstanding - your development process is highly optimized" });
    }

    // Add team performance insights
    const totalCommits = data.developerMetrics.commits.total;
    const avgReviewTime = data.pullRequestMetrics.avgReviewTime;
    
    if (selectedTimeRange === '7d' && totalCommits > 100) {
      insights.push({ icon: Zap, text: "High development activity this week - team is very productive" });
    }
    
    if (avgReviewTime < 3.0) {
      insights.push({ icon: Users, text: "Exceptionally fast code reviews - excellent team collaboration" });
    }

    // Add security and quality insights
    if (coverage > 85 && debt < 3.0 && hotspots < 10) {
      insights.push({ icon: Medal, text: "Exceptional code quality across all metrics - maintain these standards" });
    }

    return { insights, recommendations, alerts };
  };

  const heroAIAnalysis = getHeroAIInsights();

  return (
    <div className="p-8 bg-gradient-to-br from-white to-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-4xl font-bold text-slate-900 mb-3">Code Commits Dashboard</h2>
          <div className="flex items-center gap-4">
            <p className="text-gray-600 text-lg">Enterprise-grade development metrics and insights</p>
            {(selectedProject !== 'All Projects' || selectedComponent !== 'All Components' || selectedTimeRange !== '30d') && (
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-xl">
                <Filter className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-700">
                  Showing {filteredData.filterContext.showing}
                  {selectedComponent !== 'All Components' && ` • ${filteredData.filterContext.componentScope}`}
                  {selectedTimeRange !== '30d' && ` • ${selectedTimeRange === '7d' ? 'last 7 days' : selectedTimeRange === '90d' ? 'last 3 months' : 'last year'}`}
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="flex gap-4">
          <select 
            value={selectedProject}
            onChange={(e) => setSelectedProject(e.target.value)}
            className="px-6 py-3 border border-gray-200 rounded-xl bg-white text-slate-900 font-medium shadow-sm"
          >
            {codeMetricsData.projects.map(project => (
              <option key={project} value={project}>{project}</option>
            ))}
          </select>
          <select 
            value={selectedComponent}
            onChange={(e) => setSelectedComponent(e.target.value)}
            className="px-6 py-3 border border-gray-200 rounded-xl bg-white text-slate-900 font-medium shadow-sm"
          >
            {codeMetricsData.components.map(component => (
              <option key={component} value={component}>{component}</option>
            ))}
          </select>
          <select 
            value={selectedTimeRange}
            onChange={(e) => setSelectedTimeRange(e.target.value)}
            className="px-6 py-3 border border-gray-200 rounded-xl bg-white text-slate-900 font-medium shadow-sm"
          >
            <option value="7d">Last 7 Days</option>
            <option value="30d">Last 30 Days</option>
            <option value="90d">Last 3 Months</option>
            <option value="1y">Last Year</option>
          </select>
        </div>
      </div>

      {/* View Toggle */}
      <div className="flex bg-white rounded-2xl p-2 mb-8 shadow-sm border border-gray-100 w-fit">
        {['overview', 'dora', 'quality', 'teams'].map((view) => (
          <button
            key={view}
            onClick={() => setSelectedView(view)}
            className={`px-6 py-3 rounded-xl font-medium transition-all capitalize ${
              selectedView === view
                ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {view === 'dora' ? 'DORA Metrics' : view}
          </button>
        ))}
      </div>

      {/* HeroAI Insights Panel */}
      {(heroAIAnalysis.insights.length > 0 || heroAIAnalysis.recommendations.length > 0 || heroAIAnalysis.alerts.length > 0) && (
        <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 border border-purple-200 rounded-2xl mb-8 shadow-sm overflow-hidden transition-all duration-300">
          {/* Panel Header - Always Visible */}
          <div 
            className="flex items-center justify-between p-8 cursor-pointer hover:bg-white/30 transition-colors"
            onClick={() => setIsHeroAIPanelExpanded(!isHeroAIPanelExpanded)}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent mb-2">
                  HeroAI Insights & Recommendations
                </h3>
                <p className="text-gray-600">AI-powered analysis of your development metrics and performance patterns</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {/* Summary badges when collapsed */}
              {!isHeroAIPanelExpanded && (
                <div className="flex items-center gap-2">
                  {heroAIAnalysis.insights.length > 0 && (
                    <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium flex items-center gap-1">
                      <CheckCircle className="w-4 h-4" />
                      {heroAIAnalysis.insights.length}
                    </div>
                  )}
                  {heroAIAnalysis.recommendations.length > 0 && (
                    <div className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium flex items-center gap-1">
                      <Target className="w-4 h-4" />
                      {heroAIAnalysis.recommendations.length}
                    </div>
                  )}
                  {heroAIAnalysis.alerts.length > 0 && (
                    <div className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium flex items-center gap-1">
                      <AlertTriangle className="w-4 h-4" />
                      {heroAIAnalysis.alerts.length}
                    </div>
                  )}
                </div>
              )}
              <button className="p-2 hover:bg-white/50 rounded-xl transition-colors">
                <ChevronRight className={`w-5 h-5 text-purple-600 transition-transform duration-300 ${isHeroAIPanelExpanded ? 'rotate-90' : ''}`} />
              </button>
            </div>
          </div>

          {/* Panel Content - Collapsible */}
          <div className={`transition-all duration-300 ease-in-out ${isHeroAIPanelExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
            <div className="px-8 pb-8">

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Insights */}
            {heroAIAnalysis.insights.length > 0 && (
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-green-200">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <h4 className="font-bold text-green-900">Key Insights</h4>
                </div>
                <div className="space-y-3">
                  {heroAIAnalysis.insights.map((insight, index) => {
                    const IconComponent = insight.icon;
                    return (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                          <IconComponent className="w-4 h-4 text-green-600" />
                        </div>
                        <p className="text-green-800 text-sm leading-relaxed">{insight.text}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Recommendations */}
            {heroAIAnalysis.recommendations.length > 0 && (
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-blue-200">
                <div className="flex items-center gap-2 mb-4">
                  <Target className="w-5 h-5 text-blue-600" />
                  <h4 className="font-bold text-blue-900">Recommendations</h4>
                </div>
                <div className="space-y-3">
                  {heroAIAnalysis.recommendations.map((recommendation, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-blue-800 text-sm leading-relaxed">{recommendation}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Alerts */}
            {heroAIAnalysis.alerts.length > 0 && (
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-orange-200">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="w-5 h-5 text-orange-600" />
                  <h4 className="font-bold text-orange-900">Action Items</h4>
                </div>
                <div className="space-y-3">
                  {heroAIAnalysis.alerts.map((alert, index) => {
                    const IconComponent = alert.icon;
                    return (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                          <IconComponent className="w-4 h-4 text-orange-600" />
                        </div>
                        <p className="text-orange-800 text-sm leading-relaxed">{alert.text}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

              {/* AI Processing Indicator */}
              <div className="mt-6 pt-4 border-t border-purple-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-purple-700">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                    <span>Analysis generated by HeroAI • Last updated: {new Date().toLocaleTimeString()}</span>
                  </div>
                  <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      Refresh Analysis
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedView === 'overview' && (
        <div className="space-y-8">
          {/* DORA Metrics Summary */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(filteredData.doraMetrics).map(([key, metric]) => (
              <div key={key} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer"
                   onClick={() => toggleMetricExpansion(key)}>
                <div className="flex items-start justify-between mb-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(metric.status)}`}>
                    {metric.status.toUpperCase()}
                  </div>
                  <div className="flex items-center gap-1">
                    {getTrendIcon(metric.trend)}
                    <span className="text-sm font-bold text-green-600">{metric.trend}</span>
                  </div>
                </div>
                <div className="mb-2">
                  <div className="text-3xl font-bold text-slate-900 mb-1">{metric.current}</div>
                  <div className="text-sm font-medium text-gray-600">{metric.description}</div>
                </div>
                <div className="text-xs text-gray-500">Target: {metric.target}</div>
                
                {expandedMetrics.has(key) && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-gray-700">By Project:</div>
                      {Object.entries(metric.details.byProject).map(([project, value]) => (
                        <div key={project} className="flex justify-between text-sm">
                          <span className="text-gray-600">{project}</span>
                          <span className="font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Pull Request Analytics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Pull Request Analytics</h3>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">{filteredData.pullRequestMetrics.totalPRs}</div>
                  <div className="text-sm text-gray-600">Total PRs</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-1">{filteredData.pullRequestMetrics.mergedPRs}</div>
                  <div className="text-sm text-gray-600">Merged</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="text-lg font-bold text-slate-900 mb-1">{filteredData.pullRequestMetrics.avgReviewTime}h</div>
                  <div className="text-xs text-gray-600">Avg Review Time</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="text-lg font-bold text-slate-900 mb-1">{filteredData.pullRequestMetrics.reviewParticipation}%</div>
                  <div className="text-xs text-gray-600">Review Participation</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Code Quality Overview</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Test Coverage</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-gray-200 rounded-full">
                      <div className="h-2 bg-green-500 rounded-full" style={{width: `${filteredData.developerMetrics.codeQuality.testCoverage}%`}}></div>
                    </div>
                    <span className="font-bold text-slate-900">{filteredData.developerMetrics.codeQuality.testCoverage}%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Maintainability Index</span>
                  <span className="font-bold text-slate-900">{filteredData.developerMetrics.codeQuality.maintainabilityIndex}/10</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Technical Debt</span>
                  <span className="font-bold text-orange-600">{filteredData.developerMetrics.codeQuality.technicalDebt}h</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Security Hotspots</span>
                  <span className="font-bold text-red-600">{filteredData.developerMetrics.codeQuality.securityHotspots}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Repository Health */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="p-8 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-slate-900">Repository Health</h3>
              <p className="text-gray-600 mt-2">Overall health and activity across all repositories</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-8 py-4 text-left text-sm font-bold text-slate-900 uppercase tracking-wider">Repository</th>
                    <th className="px-8 py-4 text-left text-sm font-bold text-slate-900 uppercase tracking-wider">Health Score</th>
                    <th className="px-8 py-4 text-left text-sm font-bold text-slate-900 uppercase tracking-wider">Commits</th>
                    <th className="px-8 py-4 text-left text-sm font-bold text-slate-900 uppercase tracking-wider">Contributors</th>
                    <th className="px-8 py-4 text-left text-sm font-bold text-slate-900 uppercase tracking-wider">Last Activity</th>
                    <th className="px-8 py-4 text-left text-sm font-bold text-slate-900 uppercase tracking-wider">Open Issues</th>
                    <th className="px-8 py-4 text-left text-sm font-bold text-slate-900 uppercase tracking-wider">Active PRs</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredData.repoHealth.map((repo) => (
                    <tr key={repo.name} className="hover:bg-gray-50 transition-colors">
                      <td className="px-8 py-6 whitespace-nowrap">
                        <div className="flex items-center gap-3">
                          <GitBranch className="w-5 h-5 text-gray-400" />
                          <span className="font-bold text-slate-900">{repo.name}</span>
                        </div>
                      </td>
                      <td className="px-8 py-6 whitespace-nowrap">
                        <div className="flex items-center gap-3">
                          <div className={`text-2xl font-bold ${getHealthColor(repo.health)}`}>{repo.health}</div>
                          <div className="w-16 h-2 bg-gray-200 rounded-full">
                            <div className={`h-2 rounded-full ${repo.health >= 90 ? 'bg-green-500' : repo.health >= 80 ? 'bg-yellow-500' : 'bg-red-500'}`} 
                                 style={{width: `${repo.health}%`}}></div>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6 whitespace-nowrap text-sm font-bold text-slate-900">{repo.commits}</td>
                      <td className="px-8 py-6 whitespace-nowrap text-sm font-bold text-slate-900">{repo.contributors}</td>
                      <td className="px-8 py-6 whitespace-nowrap text-sm text-gray-600">{repo.lastActivity}</td>
                      <td className="px-8 py-6 whitespace-nowrap">
                        <span className="px-3 py-1 text-xs font-bold rounded-full bg-red-100 text-red-800">{repo.issues}</span>
                      </td>
                      <td className="px-8 py-6 whitespace-nowrap">
                        <span className="px-3 py-1 text-xs font-bold rounded-full bg-blue-100 text-blue-800">{repo.prs}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {selectedView === 'dora' && (
        <div className="space-y-8">
          {/* Detailed DORA Metrics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {Object.entries(filteredData.doraMetrics).map(([key, metric]) => (
              <div key={key} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</h3>
                    <p className="text-gray-600">{metric.description}</p>
                  </div>
                  <div className={`px-4 py-2 rounded-xl text-sm font-bold border ${getStatusColor(metric.status)}`}>
                    {metric.status.toUpperCase()}
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl font-bold text-slate-900">{metric.current}</div>
                  <div className="flex items-center gap-2">
                    {getTrendIcon(metric.trend)}
                    <span className="font-bold text-green-600">{metric.trend}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="text-sm font-medium text-gray-700">Weekly Trend</div>
                  <div className="flex items-end gap-2 h-20">
                    {metric.details.weekly.map((value, index) => (
                      <div key={index} className="flex-1 flex flex-col items-center gap-2">
                        <div className="bg-blue-500 rounded-t" style={{height: `${(value / Math.max(...metric.details.weekly)) * 60}px`, minHeight: '4px'}}></div>
                        <div className="text-xs text-gray-500">W{index + 1}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <div className="text-sm font-medium text-gray-700 mb-3">By Project</div>
                    <div className="space-y-2">
                      {Object.entries(metric.details.byProject).map(([project, value]) => (
                        <div key={project} className="flex justify-between items-center">
                          <span className="text-gray-600">{project}</span>
                          <span className="font-bold text-slate-900">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedView === 'quality' && (
        <div className="space-y-8">
          {/* Code Quality Trends */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Quality Trends</h3>
              <div className="space-y-6">
                {Object.entries(filteredData.qualityTrends).map(([metric, values]) => (
                  <div key={metric}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700 capitalize">{metric}</span>
                      <span className="font-bold text-slate-900">{values[values.length - 1]}%</span>
                    </div>
                    <div className="flex items-end gap-1 h-12">
                      {values.map((value, index) => (
                        <div key={index} className="flex-1 bg-blue-500 rounded-t" style={{height: `${(value / Math.max(...values)) * 100}%`, minHeight: '2px'}}></div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Language Distribution</h3>
              <div className="space-y-4">
                {Object.entries(filteredData.developerMetrics.commits.languages).map(([language, percentage]) => (
                  <div key={language} className="flex justify-between items-center">
                    <span className="text-gray-700">{language}</span>
                    <div className="flex items-center gap-3">
                      <div className="w-32 h-3 bg-gray-200 rounded-full">
                        <div className="h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" style={{width: `${percentage}%`}}></div>
                      </div>
                      <span className="font-bold text-slate-900 w-12 text-right">{percentage}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* PR Size Distribution */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Pull Request Size Distribution</h3>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
              {Object.entries(filteredData.pullRequestMetrics.prSizeDistribution).map(([size, count]) => (
                <div key={size} className="bg-gray-50 rounded-xl p-6 text-center">
                  <div className="text-2xl font-bold text-slate-900 mb-2">{count}</div>
                  <div className="text-sm text-gray-600">{size}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {selectedView === 'teams' && (
        <div className="space-y-8">
          {/* Developer Productivity */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="p-8 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-slate-900">Developer Productivity</h3>
              <p className="text-gray-600 mt-2">Individual contributions and metrics</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-8 py-4 text-left text-sm font-bold text-slate-900 uppercase tracking-wider">Developer</th>
                    <th className="px-8 py-4 text-left text-sm font-bold text-slate-900 uppercase tracking-wider">Commits</th>
                    <th className="px-8 py-4 text-left text-sm font-bold text-slate-900 uppercase tracking-wider">Lines Added</th>
                    <th className="px-8 py-4 text-left text-sm font-bold text-slate-900 uppercase tracking-wider">Lines Deleted</th>
                    <th className="px-8 py-4 text-left text-sm font-bold text-slate-900 uppercase tracking-wider">Files Changed</th>
                    <th className="px-8 py-4 text-left text-sm font-bold text-slate-900 uppercase tracking-wider">Projects</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredData.developerMetrics.commits.byAuthor.map((dev) => (
                    <tr key={dev.name} className="hover:bg-gray-50 transition-colors">
                      <td className="px-8 py-6 whitespace-nowrap">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                            {dev.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <span className="font-bold text-slate-900">{dev.name}</span>
                        </div>
                      </td>
                      <td className="px-8 py-6 whitespace-nowrap text-sm font-bold text-slate-900">{dev.commits}</td>
                      <td className="px-8 py-6 whitespace-nowrap text-sm font-bold text-green-600">+{dev.linesAdded.toLocaleString()}</td>
                      <td className="px-8 py-6 whitespace-nowrap text-sm font-bold text-red-600">-{dev.linesDeleted.toLocaleString()}</td>
                      <td className="px-8 py-6 whitespace-nowrap text-sm font-bold text-slate-900">{dev.files}</td>
                      <td className="px-8 py-6 whitespace-nowrap text-sm font-bold text-slate-900">{dev.projects}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Code Review Load */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Code Review Load</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredData.pullRequestMetrics.reviewerLoad.map((reviewer) => (
                <div key={reviewer.name} className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                        {reviewer.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className="font-bold text-slate-900">{reviewer.name}</span>
                    </div>
                    <span className="text-2xl font-bold text-blue-600">{reviewer.reviews}</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Avg Review Time</span>
                      <span className="font-medium">{reviewer.avgTime}h</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Projects</span>
                      <span className="font-medium">{reviewer.projects.join(', ')}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Enterprise Deployment Dashboard
const DashboardPage = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState('7d');
  const [selectedEnvironment, setSelectedEnvironment] = useState('All');
  const [selectedProject, setSelectedProject] = useState('All Projects');

  // Enterprise deployment metrics by project and environment
  const deploymentMetrics = {
    'All Projects': {
      'All Environments': {
        '7d': {
          totalDeployments: 142, successfulDeployments: 127, failedDeployments: 15, successRate: 89.4,
          avgDeploymentTime: '8.2', changeFailureRate: 10.6, leadTime: '2.3', mttr: '1.8',
          deploymentFrequency: 20.3, hotfixCount: 3, rollbackRate: 4.2, totalDowntime: 47
        },
        '30d': {
          totalDeployments: 582, successfulDeployments: 524, failedDeployments: 58, successRate: 90.0,
          avgDeploymentTime: '9.1', changeFailureRate: 10.0, leadTime: '2.1', mttr: '2.1',
          deploymentFrequency: 19.4, hotfixCount: 12, rollbackRate: 3.8, totalDowntime: 186
        },
        '90d': {
          totalDeployments: 1847, successfulDeployments: 1672, failedDeployments: 175, successRate: 90.5,
          avgDeploymentTime: '8.8', changeFailureRate: 9.5, leadTime: '2.0', mttr: '2.0',
          deploymentFrequency: 20.5, hotfixCount: 38, rollbackRate: 4.1, totalDowntime: 642
        }
      },
      'Production': {
        '7d': {
          totalDeployments: 45, successfulDeployments: 41, failedDeployments: 4, successRate: 91.1,
          avgDeploymentTime: '11.2', changeFailureRate: 8.9, leadTime: '3.1', mttr: '2.2',
          deploymentFrequency: 6.4, hotfixCount: 1, rollbackRate: 2.2, totalDowntime: 28
        },
        '30d': {
          totalDeployments: 185, successfulDeployments: 170, failedDeployments: 15, successRate: 91.9,
          avgDeploymentTime: '12.1', changeFailureRate: 8.1, leadTime: '2.9', mttr: '2.4',
          deploymentFrequency: 6.2, hotfixCount: 4, rollbackRate: 2.7, totalDowntime: 112
        },
        '90d': {
          totalDeployments: 547, successfulDeployments: 501, failedDeployments: 46, successRate: 91.6,
          avgDeploymentTime: '11.8', changeFailureRate: 8.4, leadTime: '2.8', mttr: '2.3',
          deploymentFrequency: 6.1, hotfixCount: 14, rollbackRate: 2.9, totalDowntime: 334
        }
      },
      'Staging': {
        '7d': {
          totalDeployments: 52, successfulDeployments: 48, failedDeployments: 4, successRate: 92.3,
          avgDeploymentTime: '8.7', changeFailureRate: 7.7, leadTime: '1.9', mttr: '1.4',
          deploymentFrequency: 7.4, hotfixCount: 1, rollbackRate: 3.8, totalDowntime: 12
        },
        '30d': {
          totalDeployments: 208, successfulDeployments: 194, failedDeployments: 14, successRate: 93.3,
          avgDeploymentTime: '8.9', changeFailureRate: 6.7, leadTime: '1.8', mttr: '1.6',
          deploymentFrequency: 6.9, hotfixCount: 3, rollbackRate: 4.3, totalDowntime: 48
        },
        '90d': {
          totalDeployments: 634, successfulDeployments: 591, failedDeployments: 43, successRate: 93.2,
          avgDeploymentTime: '8.6', changeFailureRate: 6.8, leadTime: '1.7', mttr: '1.5',
          deploymentFrequency: 7.0, hotfixCount: 10, rollbackRate: 4.1, totalDowntime: 156
        }
      },
      'Development': {
        '7d': {
          totalDeployments: 45, successfulDeployments: 38, failedDeployments: 7, successRate: 84.4,
          avgDeploymentTime: '6.1', changeFailureRate: 15.6, leadTime: '1.2', mttr: '1.1',
          deploymentFrequency: 6.4, hotfixCount: 1, rollbackRate: 6.7, totalDowntime: 7
        },
        '30d': {
          totalDeployments: 189, successfulDeployments: 160, failedDeployments: 29, successRate: 84.7,
          avgDeploymentTime: '6.4', changeFailureRate: 15.3, leadTime: '1.1', mttr: '1.3',
          deploymentFrequency: 6.3, hotfixCount: 5, rollbackRate: 7.4, totalDowntime: 26
        },
        '90d': {
          totalDeployments: 666, successfulDeployments: 580, failedDeployments: 86, successRate: 87.1,
          avgDeploymentTime: '6.2', changeFailureRate: 12.9, leadTime: '1.0', mttr: '1.2',
          deploymentFrequency: 7.4, hotfixCount: 14, rollbackRate: 6.9, totalDowntime: 152
        }
      }
    },
    'Project Alpha': {
      'All Environments': {
        '7d': {
          totalDeployments: 52, successfulDeployments: 46, failedDeployments: 6, successRate: 88.5,
          avgDeploymentTime: '9.1', changeFailureRate: 11.5, leadTime: '2.4', mttr: '1.9',
          deploymentFrequency: 7.4, hotfixCount: 2, rollbackRate: 5.8, totalDowntime: 22
        },
        '30d': {
          totalDeployments: 198, successfulDeployments: 178, failedDeployments: 20, successRate: 89.9,
          avgDeploymentTime: '9.8', changeFailureRate: 10.1, leadTime: '2.2', mttr: '2.1',
          deploymentFrequency: 6.6, hotfixCount: 6, rollbackRate: 4.5, totalDowntime: 89
        },
        '90d': {
          totalDeployments: 612, successfulDeployments: 556, failedDeployments: 56, successRate: 90.8,
          avgDeploymentTime: '9.2', changeFailureRate: 9.2, leadTime: '2.1', mttr: '2.0',
          deploymentFrequency: 6.8, hotfixCount: 18, rollbackRate: 4.7, totalDowntime: 267
        }
      },
      'Production': {
        '7d': {
          totalDeployments: 16, successfulDeployments: 14, failedDeployments: 2, successRate: 87.5,
          avgDeploymentTime: '12.8', changeFailureRate: 12.5, leadTime: '3.8', mttr: '2.6',
          deploymentFrequency: 2.3, hotfixCount: 1, rollbackRate: 6.3, totalDowntime: 15
        }
      }
    },
    'Project Beta': {
      'All Environments': {
        '7d': {
          totalDeployments: 48, successfulDeployments: 44, failedDeployments: 4, successRate: 91.7,
          avgDeploymentTime: '7.8', changeFailureRate: 8.3, leadTime: '2.1', mttr: '1.6',
          deploymentFrequency: 6.9, hotfixCount: 1, rollbackRate: 2.1, totalDowntime: 15
        },
        '30d': {
          totalDeployments: 201, successfulDeployments: 186, failedDeployments: 15, successRate: 92.5,
          avgDeploymentTime: '8.2', changeFailureRate: 7.5, leadTime: '1.9', mttr: '1.8',
          deploymentFrequency: 6.7, hotfixCount: 3, rollbackRate: 2.5, totalDowntime: 58
        }
      }
    },
    'Project Gamma': {
      'All Environments': {
        '7d': {
          totalDeployments: 42, successfulDeployments: 37, failedDeployments: 5, successRate: 88.1,
          avgDeploymentTime: '8.9', changeFailureRate: 11.9, leadTime: '2.5', mttr: '2.1',
          deploymentFrequency: 6.0, hotfixCount: 0, rollbackRate: 4.8, totalDowntime: 10
        },
        '30d': {
          totalDeployments: 183, successfulDeployments: 160, failedDeployments: 23, successRate: 87.4,
          avgDeploymentTime: '9.4', changeFailureRate: 12.6, leadTime: '2.4', mttr: '2.3',
          deploymentFrequency: 6.1, hotfixCount: 3, rollbackRate: 5.5, totalDowntime: 39
        }
      }
    }
  };

  // Get current metrics based on selections
  const getCurrentMetrics = () => {
    const projectData = deploymentMetrics[selectedProject] || deploymentMetrics['All Projects'];
    const envData = projectData[selectedEnvironment] || projectData['All Environments'];
    return envData[selectedTimeRange] || projectData['All Environments'][selectedTimeRange] || deploymentMetrics['All Projects']['All Environments'][selectedTimeRange];
  };

  const currentMetrics = getCurrentMetrics();

  // DORA metrics trend data
  const deploymentTrends = {
    '7d': {
      dates: ['Aug 19', 'Aug 20', 'Aug 21', 'Aug 22', 'Aug 23', 'Aug 24', 'Aug 25'],
      deployments: [18, 22, 16, 25, 21, 19, 21],
      successRate: [92, 88, 94, 87, 91, 89, 90],
      leadTime: [2.1, 2.5, 1.8, 2.7, 2.2, 2.3, 2.1]
    }
  };

  // Component deployment breakdown by project and environment
  const getComponentBreakdown = () => {
    const componentData = {
      'All Projects': {
        'All Environments': [
          { name: 'API Gateway', deployments: 28, successRate: 96.4, avgTime: '6.2m' },
          { name: 'Web Application', deployments: 24, successRate: 91.7, avgTime: '12.1m' },
          { name: 'Database', deployments: 16, successRate: 81.3, avgTime: '15.8m' },
          { name: 'Load Balancer', deployments: 22, successRate: 95.5, avgTime: '4.3m' },
          { name: 'Container Registry', deployments: 18, successRate: 88.9, avgTime: '8.7m' },
          { name: 'Storage', deployments: 14, successRate: 92.9, avgTime: '5.1m' },
          { name: 'Monitoring', deployments: 12, successRate: 100.0, avgTime: '3.9m' },
          { name: 'VPC', deployments: 8, successRate: 100.0, avgTime: '7.2m' }
        ],
        'Production': [
          { name: 'API Gateway', deployments: 8, successRate: 100.0, avgTime: '8.1m' },
          { name: 'Web Application', deployments: 6, successRate: 83.3, avgTime: '18.2m' },
          { name: 'Database', deployments: 5, successRate: 60.0, avgTime: '22.4m' },
          { name: 'Load Balancer', deployments: 7, successRate: 100.0, avgTime: '6.8m' },
          { name: 'Container Registry', deployments: 4, successRate: 75.0, avgTime: '12.1m' },
          { name: 'Storage', deployments: 6, successRate: 100.0, avgTime: '7.3m' },
          { name: 'Monitoring', deployments: 5, successRate: 100.0, avgTime: '4.8m' },
          { name: 'VPC', deployments: 4, successRate: 100.0, avgTime: '9.2m' }
        ],
        'Staging': [
          { name: 'API Gateway', deployments: 10, successRate: 100.0, avgTime: '5.8m' },
          { name: 'Web Application', deployments: 9, successRate: 100.0, avgTime: '10.1m' },
          { name: 'Database', deployments: 6, successRate: 83.3, avgTime: '12.8m' },
          { name: 'Load Balancer', deployments: 8, successRate: 100.0, avgTime: '3.9m' },
          { name: 'Container Registry', deployments: 7, successRate: 85.7, avgTime: '7.2m' },
          { name: 'Storage', deployments: 5, successRate: 100.0, avgTime: '4.1m' },
          { name: 'Monitoring', deployments: 4, successRate: 100.0, avgTime: '3.2m' },
          { name: 'VPC', deployments: 3, successRate: 100.0, avgTime: '6.8m' }
        ],
        'Development': [
          { name: 'API Gateway', deployments: 10, successRate: 90.0, avgTime: '4.2m' },
          { name: 'Web Application', deployments: 9, successRate: 88.9, avgTime: '8.7m' },
          { name: 'Database', deployments: 5, successRate: 80.0, avgTime: '11.2m' },
          { name: 'Load Balancer', deployments: 7, successRate: 85.7, avgTime: '3.1m' },
          { name: 'Container Registry', deployments: 7, successRate: 85.7, avgTime: '6.4m' },
          { name: 'Storage', deployments: 3, successRate: 66.7, avgTime: '3.8m' },
          { name: 'Monitoring', deployments: 3, successRate: 100.0, avgTime: '2.9m' },
          { name: 'VPC', deployments: 1, successRate: 100.0, avgTime: '5.2m' }
        ]
      },
      'Project Alpha': {
        'All Environments': [
          { name: 'API Gateway', deployments: 12, successRate: 91.7, avgTime: '7.1m' },
          { name: 'Web Application', deployments: 8, successRate: 87.5, avgTime: '13.8m' },
          { name: 'Database', deployments: 6, successRate: 66.7, avgTime: '18.2m' },
          { name: 'Load Balancer', deployments: 9, successRate: 100.0, avgTime: '5.1m' },
          { name: 'VPC', deployments: 8, successRate: 100.0, avgTime: '8.2m' },
          { name: 'CDN', deployments: 5, successRate: 100.0, avgTime: '4.8m' },
          { name: 'Storage', deployments: 4, successRate: 75.0, avgTime: '6.2m' }
        ],
        'Production': [
          { name: 'API Gateway', deployments: 3, successRate: 100.0, avgTime: '9.8m' },
          { name: 'Database', deployments: 2, successRate: 50.0, avgTime: '24.1m' },
          { name: 'Load Balancer', deployments: 3, successRate: 100.0, avgTime: '7.8m' },
          { name: 'VPC', deployments: 4, successRate: 100.0, avgTime: '10.2m' },
          { name: 'CDN', deployments: 2, successRate: 100.0, avgTime: '6.1m' },
          { name: 'Web Application', deployments: 2, successRate: 50.0, avgTime: '19.4m' }
        ]
      },
      'Project Beta': {
        'All Environments': [
          { name: 'Web Application', deployments: 8, successRate: 100.0, avgTime: '9.2m' },
          { name: 'Kubernetes Cluster', deployments: 12, successRate: 100.0, avgTime: '8.1m' },
          { name: 'Container Registry', deployments: 10, successRate: 90.0, avgTime: '7.8m' },
          { name: 'Storage', deployments: 6, successRate: 100.0, avgTime: '4.2m' },
          { name: 'API Gateway', deployments: 8, successRate: 100.0, avgTime: '5.8m' },
          { name: 'Load Balancer', deployments: 4, successRate: 75.0, avgTime: '3.9m' }
        ]
      },
      'Project Gamma': {
        'All Environments': [
          { name: 'Container Registry', deployments: 8, successRate: 87.5, avgTime: '9.1m' },
          { name: 'Database', deployments: 6, successRate: 83.3, avgTime: '14.2m' },
          { name: 'Monitoring', deployments: 12, successRate: 100.0, avgTime: '3.8m' },
          { name: 'API Gateway', deployments: 8, successRate: 100.0, avgTime: '6.1m' },
          { name: 'Storage', deployments: 4, successRate: 100.0, avgTime: '4.8m' },
          { name: 'Load Balancer', deployments: 4, successRate: 75.0, avgTime: '4.2m' }
        ]
      }
    };
    
    const projectData = componentData[selectedProject] || componentData['All Projects'];
    return projectData[selectedEnvironment] || projectData['All Environments'];
  };

  // Environment deployment data by project
  const getEnvironmentData = () => {
    const envData = {
      'All Projects': [
        { env: 'Production', deployments: 45, success: 41, failed: 4, avgTime: '11.2m', downtime: '28m' },
        { env: 'Staging', deployments: 52, success: 48, failed: 4, avgTime: '8.7m', downtime: '12m' },
        { env: 'Development', deployments: 45, success: 38, failed: 7, avgTime: '6.1m', downtime: '7m' }
      ],
      'Project Alpha': [
        { env: 'Production', deployments: 16, success: 14, failed: 2, avgTime: '12.8m', downtime: '15m' },
        { env: 'Staging', deployments: 18, success: 17, failed: 1, avgTime: '9.1m', downtime: '4m' },
        { env: 'Development', deployments: 18, success: 15, failed: 3, avgTime: '7.2m', downtime: '3m' }
      ],
      'Project Beta': [
        { env: 'Production', deployments: 14, success: 13, failed: 1, avgTime: '9.8m', downtime: '8m' },
        { env: 'Staging', deployments: 16, success: 16, failed: 0, avgTime: '7.9m', downtime: '0m' },
        { env: 'Development', deployments: 18, success: 15, failed: 3, avgTime: '5.8m', downtime: '2m' }
      ],
      'Project Gamma': [
        { env: 'Production', deployments: 15, success: 14, failed: 1, avgTime: '10.1m', downtime: '5m' },
        { env: 'Staging', deployments: 18, success: 15, failed: 3, avgTime: '8.4m', downtime: '8m' },
        { env: 'Development', deployments: 9, success: 8, failed: 1, avgTime: '5.2m', downtime: '2m' }
      ]
    };
    
    return envData[selectedProject] || envData['All Projects'];
  };

  const componentBreakdown = getComponentBreakdown();
  const environmentData = getEnvironmentData();

  // Recent critical events filtered by selection
  const getCriticalEvents = () => {
    const allEvents = [
      {
        id: 1,
        type: 'deployment_failure',
        component: 'Database',
        project: 'Project Alpha',
        environment: 'Production',
        timestamp: '2 hours ago',
        impact: 'high',
        status: 'investigating'
      },
      {
        id: 2,
        type: 'rollback',
        component: 'API Gateway',
        project: 'Project Beta',
        environment: 'Production',
        timestamp: '6 hours ago',
        impact: 'medium',
        status: 'resolved'
      },
      {
        id: 3,
        type: 'performance_degradation',
        component: 'Load Balancer',
        project: 'Project Gamma',
        environment: 'Production',
        timestamp: '1 day ago',
        impact: 'low',
        status: 'resolved'
      },
      {
        id: 4,
        type: 'deployment_failure',
        component: 'Web Application',
        project: 'Project Alpha',
        environment: 'Staging',
        timestamp: '8 hours ago',
        impact: 'medium',
        status: 'resolved'
      },
      {
        id: 5,
        type: 'rollback',
        component: 'Container Registry',
        project: 'Project Beta',
        environment: 'Staging',
        timestamp: '12 hours ago',
        impact: 'low',
        status: 'resolved'
      },
      {
        id: 6,
        type: 'deployment_failure',
        component: 'Storage',
        project: 'Project Alpha',
        environment: 'Development',
        timestamp: '4 hours ago',
        impact: 'low',
        status: 'investigating'
      },
      {
        id: 7,
        type: 'performance_degradation',
        component: 'Monitoring',
        project: 'Project Gamma',
        environment: 'Staging',
        timestamp: '18 hours ago',
        impact: 'medium',
        status: 'resolved'
      },
      {
        id: 8,
        type: 'deployment_failure',
        component: 'VPC',
        project: 'Project Alpha',
        environment: 'Development',
        timestamp: '1 day ago',
        impact: 'low',
        status: 'resolved'
      }
    ];

    return allEvents.filter(event => {
      const projectMatch = selectedProject === 'All Projects' || event.project === selectedProject;
      const envMatch = selectedEnvironment === 'All Environments' || event.environment === selectedEnvironment;
      return projectMatch && envMatch;
    });
  };

  const criticalEvents = getCriticalEvents();

  const getMetricTrend = (current, previous) => {
    const change = ((current - previous) / previous) * 100;
    return {
      value: Math.abs(change).toFixed(1),
      direction: change > 0 ? 'up' : 'down',
      isGood: (current > previous && ['successRate', 'deploymentFrequency'].includes('current')) || 
             (current < previous && ['changeFailureRate', 'mttr', 'leadTime'].includes('current'))
    };
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Deployment Dashboard</h2>
          <p className="text-gray-600 mt-1">Enterprise deployment metrics and DORA indicators</p>
        </div>
        <div className="flex gap-3">
          <select 
            value={selectedTimeRange}
            onChange={(e) => setSelectedTimeRange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-slate-900 font-medium shadow-sm hover:shadow-md transition-shadow"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
          </select>
          <select 
            value={selectedProject}
            onChange={(e) => setSelectedProject(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-slate-900 font-medium shadow-sm hover:shadow-md transition-shadow"
          >
            <option>All Projects</option>
            <option>Project Alpha</option>
            <option>Project Beta</option>
            <option>Project Gamma</option>
          </select>
          <select 
            value={selectedEnvironment}
            onChange={(e) => setSelectedEnvironment(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-slate-900 font-medium shadow-sm hover:shadow-md transition-shadow"
          >
            <option>All Environments</option>
            <option>Production</option>
            <option>Staging</option>
            <option>Development</option>
          </select>
        </div>
      </div>

      {/* DORA Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <h3 className="font-semibold text-slate-900">Deployment Frequency</h3>
            </div>
            <div className="flex items-center gap-1 text-green-600">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-medium">+12.3%</span>
            </div>
          </div>
          <div className="text-2xl font-bold text-slate-900 mb-1">{currentMetrics.deploymentFrequency}/day</div>
          <p className="text-sm text-gray-600">Average deployments per day</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-orange-600" />
              <h3 className="font-semibold text-slate-900">Lead Time</h3>
            </div>
            <div className="flex items-center gap-1 text-green-600">
              <TrendingDown className="w-4 h-4" />
              <span className="text-sm font-medium">-8.1%</span>
            </div>
          </div>
          <div className="text-2xl font-bold text-slate-900 mb-1">{currentMetrics.leadTime}h</div>
          <p className="text-sm text-gray-600">Commit to production</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              <h3 className="font-semibold text-slate-900">Change Failure Rate</h3>
            </div>
            <div className="flex items-center gap-1 text-green-600">
              <TrendingDown className="w-4 h-4" />
              <span className="text-sm font-medium">-2.4%</span>
            </div>
          </div>
          <div className="text-2xl font-bold text-slate-900 mb-1">{currentMetrics.changeFailureRate}%</div>
          <p className="text-sm text-gray-600">Deployments causing failures</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-purple-600" />
              <h3 className="font-semibold text-slate-900">MTTR</h3>
            </div>
            <div className="flex items-center gap-1 text-red-600">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-medium">+5.2%</span>
            </div>
          </div>
          <div className="text-2xl font-bold text-slate-900 mb-1">{currentMetrics.mttr}h</div>
          <p className="text-sm text-gray-600">Mean time to recovery</p>
        </div>
      </div>

      {/* Key Performance Indicators */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-slate-900">Deployment Success Rate</h3>
            <CheckCircle className="w-5 h-5 text-green-600" />
          </div>
          <div className="text-3xl font-bold text-green-600 mb-2">{currentMetrics.successRate}%</div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Successful: {currentMetrics.successfulDeployments}</span>
            <span>Failed: {currentMetrics.failedDeployments}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
            <div 
              className="bg-green-600 h-2 rounded-full transition-all duration-1000"
              style={{ width: `${currentMetrics.successRate}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-slate-900">Average Deployment Time</h3>
            <Clock className="w-5 h-5 text-blue-600" />
          </div>
          <div className="text-3xl font-bold text-blue-600 mb-2">{currentMetrics.avgDeploymentTime}m</div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Fastest: 2.1m</span>
            <span>Slowest: 28.4m</span>
          </div>
          <div className="flex items-center gap-1 mt-3">
            <TrendingDown className="w-4 h-4 text-green-600" />
            <span className="text-sm text-green-600 font-medium">15% faster than last period</span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-slate-900">System Reliability</h3>
            <Shield className="w-5 h-5 text-purple-600" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-xl font-bold text-purple-600">{currentMetrics.rollbackRate}%</div>
              <div className="text-xs text-gray-600">Rollback Rate</div>
            </div>
            <div>
              <div className="text-xl font-bold text-orange-600">{currentMetrics.totalDowntime}m</div>
              <div className="text-xs text-gray-600">Total Downtime</div>
            </div>
          </div>
          <div className="mt-3 text-sm text-gray-600">
            Hotfixes deployed: <span className="font-semibold text-slate-900">{currentMetrics.hotfixCount}</span>
          </div>
        </div>
      </div>

      {/* Component Performance & Environment Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Component Deployment Breakdown */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="font-semibold text-slate-900">Component Performance</h3>
            <p className="text-sm text-gray-600">Deployment metrics by component type</p>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {componentBreakdown.map((component, index) => (
                <div key={component.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></div>
                    <div>
                      <div className="font-medium text-slate-900">{component.name}</div>
                      <div className="text-sm text-gray-600">{component.deployments} deployments</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`font-semibold ${component.successRate >= 95 ? 'text-green-600' : component.successRate >= 90 ? 'text-orange-600' : 'text-red-600'}`}>
                      {component.successRate}%
                    </div>
                    <div className="text-sm text-gray-600">{component.avgTime} avg</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Environment Deployment Stats */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="font-semibold text-slate-900">Environment Breakdown</h3>
            <p className="text-sm text-gray-600">Deployment performance by environment</p>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              {environmentData.map((env, index) => (
                <div key={env.env}>
                  <div className="flex justify-between items-center mb-2">
                    <div className="font-medium text-slate-900">{env.env}</div>
                    <div className="text-sm text-gray-600">{env.deployments} total</div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-green-600 font-semibold">{env.success} Success</div>
                      <div className="text-xs text-gray-600">{((env.success/env.deployments)*100).toFixed(1)}%</div>
                    </div>
                    <div>
                      <div className="text-red-600 font-semibold">{env.failed} Failed</div>
                      <div className="text-xs text-gray-600">Avg: {env.avgTime}</div>
                    </div>
                    <div>
                      <div className="text-orange-600 font-semibold">{env.downtime}</div>
                      <div className="text-xs text-gray-600">Downtime</div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                    <div 
                      className="bg-green-600 h-1.5 rounded-full"
                      style={{ width: `${(env.success/env.deployments)*100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Critical Events & Alerts */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-slate-900">Recent Critical Events</h3>
              <p className="text-sm text-gray-600">High-impact deployment events requiring attention</p>
            </div>
            <div className="flex items-center gap-2">
              <Bell className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-600">{criticalEvents.filter(e => e.status === 'investigating').length} active alerts</span>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {criticalEvents.map((event) => (
              <div key={event.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg ${
                    event.impact === 'high' ? 'bg-red-100 text-red-600' :
                    event.impact === 'medium' ? 'bg-orange-100 text-orange-600' :
                    'bg-yellow-100 text-yellow-600'
                  }`}>
                    {event.type === 'deployment_failure' ? <XCircle className="w-4 h-4" /> :
                     event.type === 'rollback' ? <AlertTriangle className="w-4 h-4" /> :
                     <Activity className="w-4 h-4" />}
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">
                      {event.type === 'deployment_failure' ? 'Deployment Failure' :
                       event.type === 'rollback' ? 'Rollback Executed' :
                       'Performance Degradation'}
                    </div>
                    <div className="text-sm text-gray-600">
                      {event.component} in {event.project} ({event.environment})
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                    event.status === 'investigating' ? 'bg-red-100 text-red-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {event.status === 'investigating' ? 'Investigating' : 'Resolved'}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">{event.timestamp}</div>
                </div>
              </div>
            ))}
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

// Deployment Management Component
const DeploymentManagement = ({ setCurrentPage }) => {
  const [selectedProject, setSelectedProject] = useState('All Projects');
  const [showNewDeployment, setShowNewDeployment] = useState(false);
  const [selectedDeployment, setSelectedDeployment] = useState(null);
  const [filterEnvironment, setFilterEnvironment] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');
  const [showDeploymentHistory, setShowDeploymentHistory] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(null);

  // Sample deployment data aligned with InfraBuilder components
  const deployments = [
    {
      id: 'dep-001',
      component: 'API Gateway',
      project: 'Project Alpha',
      csp: 'AWS',
      deploymentTarget: 'aws-prod-123456',
      environment: 'Prod',
      environmentType: 'Prod',
      region: 'us-east-1',
      version: 'v2.3.1',
      lastDeployment: '2025-01-15 14:30:00',
      status: 'Success'
    },
    {
      id: 'dep-002',
      component: 'Web Application',
      project: 'Project Beta',
      csp: 'Azure',
      deploymentTarget: 'azure-sub-789012',
      environment: 'Non-Prod',
      environmentType: 'Stage',
      region: 'East US',
      version: 'v1.8.5',
      lastDeployment: '2025-01-15 12:15:00',
      status: 'Success'
    },
    {
      id: 'dep-003',
      component: 'Load Balancer',
      project: 'Project Alpha',
      csp: 'GCP',
      deploymentTarget: 'gcp-project-456789',
      environment: 'Non-Prod',
      environmentType: 'Dev',
      region: 'us-central1',
      version: 'v3.0.0',
      lastDeployment: '2025-01-15 10:45:00',
      status: 'Warning'
    },
    {
      id: 'dep-004',
      component: 'Container Registry',
      project: 'Project Gamma',
      csp: 'AWS',
      deploymentTarget: 'aws-dev-234567',
      environment: 'Non-Prod',
      environmentType: 'UAT',
      region: 'eu-west-1',
      version: 'v1.2.3',
      lastDeployment: '2025-01-14 16:20:00',
      status: 'Success'
    },
    {
      id: 'dep-005',
      component: 'Database',
      project: 'Project Alpha',
      csp: 'Azure',
      deploymentTarget: 'azure-sub-345678',
      environment: 'Prod',
      environmentType: 'Prod-DR',
      region: 'West Europe',
      version: 'v4.1.0',
      lastDeployment: '2025-01-14 09:00:00',
      status: 'Failure'
    },
    {
      id: 'dep-006',
      component: 'Storage',
      project: 'Project Delta',
      csp: 'GCP',
      deploymentTarget: 'gcp-project-789123',
      environment: 'Non-Prod',
      environmentType: 'Test',
      region: 'europe-west1',
      version: 'v2.0.0',
      lastDeployment: '2025-01-13 11:30:00',
      status: 'Success'
    },
    {
      id: 'dep-007',
      component: 'Kubernetes Cluster',
      project: 'Project Beta',
      csp: 'AWS',
      deploymentTarget: 'aws-prod-567890',
      environment: 'Prod',
      environmentType: 'Prod',
      region: 'ap-southeast-1',
      version: 'v1.27.3',
      lastDeployment: '2025-01-13 08:45:00',
      status: 'Success'
    },
    {
      id: 'dep-008',
      component: 'CDN',
      project: 'Project Alpha',
      csp: 'Azure',
      deploymentTarget: 'azure-sub-901234',
      environment: 'Non-Prod',
      environmentType: 'Demo',
      region: 'Global',
      version: 'v1.5.2',
      lastDeployment: '2025-01-12 15:00:00',
      status: 'Success'
    },
    {
      id: 'dep-009',
      component: 'Monitoring',
      project: 'Project Epsilon',
      csp: 'GCP',
      deploymentTarget: 'gcp-project-234567',
      environment: 'Non-Prod',
      environmentType: 'QA',
      region: 'asia-east1',
      version: 'v3.2.1',
      lastDeployment: '2025-01-12 13:20:00',
      status: 'Warning'
    },
    {
      id: 'dep-010',
      component: 'VPC',
      project: 'Project Alpha',
      csp: 'AWS',
      deploymentTarget: 'aws-prod-678901',
      environment: 'Prod',
      environmentType: 'Prod',
      region: 'us-west-2',
      version: 'v2.0.0',
      lastDeployment: '2025-01-11 10:00:00',
      status: 'Success'
    }
  ];

  // Filter deployments based on selected filters
  const filteredDeployments = deployments.filter(dep => {
    const projectMatch = selectedProject === 'All Projects' || dep.project === selectedProject;
    const envMatch = filterEnvironment === 'All' || dep.environment === filterEnvironment;
    const statusMatch = filterStatus === 'All' || dep.status === filterStatus;
    return projectMatch && envMatch && statusMatch;
  });

  // Get unique projects for dropdown
  const projects = ['All Projects', ...new Set(deployments.map(d => d.project))];

  const getStatusColor = (status) => {
    switch(status) {
      case 'Success': return 'text-green-500';
      case 'Failure': return 'text-red-500';
      case 'Warning': return 'text-orange-500';
      default: return 'text-gray-500';
    }
  };

  const getStatusBgColor = (status) => {
    switch(status) {
      case 'Success': return 'bg-green-500/10 border-green-500/20';
      case 'Failure': return 'bg-red-500/10 border-red-500/20';
      case 'Warning': return 'bg-orange-500/10 border-orange-500/20';
      default: return 'bg-gray-500/10 border-gray-500/20';
    }
  };

  const getCspIcon = (csp) => {
    switch(csp) {
      case 'AWS':
        return <Cloud className="w-4 h-4 text-orange-500" />;
      case 'Azure':
        return <Cloud className="w-4 h-4 text-blue-500" />;
      case 'GCP':
        return <Cloud className="w-4 h-4 text-red-500" />;
      default:
        return <Cloud className="w-4 h-4 text-gray-500" />;
    }
  };

  // Show deployment history if selected
  if (showDeploymentHistory && selectedComponent) {
    return (
      <DeploymentHistory 
        component={selectedComponent}
        onBack={() => {
          setShowDeploymentHistory(false);
          setSelectedComponent(null);
        }}
      />
    );
  }

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Deployment Management</h1>
        <p className="text-gray-600">Manage and monitor your component deployments across all environments</p>
      </div>

      {/* Filters and Actions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <select 
              value={selectedProject}
              onChange={(e) => setSelectedProject(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              {projects.map(project => (
                <option key={project} value={project}>{project}</option>
              ))}
            </select>
            <select 
              value={filterEnvironment}
              onChange={(e) => setFilterEnvironment(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="All">All Environments</option>
              <option value="Prod">Production</option>
              <option value="Non-Prod">Non-Production</option>
            </select>
            <select 
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="All">All Status</option>
              <option value="Success">Success</option>
              <option value="Failure">Failure</option>
              <option value="Warning">Warning</option>
            </select>
          </div>
          <button
            onClick={() => setShowNewDeployment(true)}
            className="px-6 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg hover:shadow-lg transition-all duration-200 flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            New Deployment
          </button>
        </div>
      </div>

      {/* Deployments Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Component</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CSP</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deployment Target</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Environment</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Env Type</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Region</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Version</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Deployment</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredDeployments.map((deployment) => (
                <tr key={deployment.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <Package className="w-4 h-4 text-gray-400" />
                      <span className="text-sm font-medium text-slate-900">{deployment.component}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      {getCspIcon(deployment.csp)}
                      <span className="text-sm text-gray-700">{deployment.csp}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-600 font-mono">{deployment.deploymentTarget}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      deployment.environment === 'Prod' 
                        ? 'bg-red-100 text-red-700'
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {deployment.environment}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-600">{deployment.environmentType}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-600">{deployment.region}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-mono text-gray-700">{deployment.version}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-600">{deployment.lastDeployment}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-lg border ${getStatusBgColor(deployment.status)} ${getStatusColor(deployment.status)}`}>
                      {deployment.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex gap-2">
                      <button 
                        onClick={() => {
                          setSelectedComponent(deployment.component);
                          setShowDeploymentHistory(true);
                        }}
                        className="p-1.5 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        title="View Deployment History"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button 
                        className="p-1.5 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                        title="Manage"
                      >
                        <Settings className="w-4 h-4" />
                      </button>
                      <button 
                        className="p-1.5 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Deploy"
                      >
                        <Zap className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* New Deployment Modal */}
      {showNewDeployment && <NewDeploymentModal onClose={() => setShowNewDeployment(false)} setCurrentPage={setCurrentPage} />}
    </div>
  );
};

// New Deployment Configuration Modal
const NewDeploymentModal = ({ onClose, setCurrentPage }) => {
  const [selectedProject, setSelectedProject] = useState('');
  const [selectedComponent, setSelectedComponent] = useState('');
  const [selectedCSP, setSelectedCSP] = useState('');
  const [deploymentTarget, setDeploymentTarget] = useState('');
  const [environment, setEnvironment] = useState('');
  const [environmentType, setEnvironmentType] = useState('');
  const [region, setRegion] = useState('');
  const [showVulnerabilities, setShowVulnerabilities] = useState(false);
  const [showVulnerabilityReport, setShowVulnerabilityReport] = useState(false);

  // Project-component mapping
  const projectComponents = {
    'Project Alpha': ['API Gateway', 'Web Application', 'Database', 'Load Balancer', 'VPC', 'CDN'],
    'Project Beta': ['Web Application', 'Kubernetes Cluster', 'Container Registry', 'Storage'],
    'Project Gamma': ['Container Registry', 'Database', 'Monitoring', 'API Gateway'],
    'Project Delta': ['Storage', 'CDN', 'Load Balancer', 'Web Application'],
    'Project Epsilon': ['Monitoring', 'API Gateway', 'Database', 'VPC']
  };

  const deploymentTargets = {
    'AWS': ['aws-prod-123456', 'aws-dev-234567', 'aws-prod-567890', 'aws-prod-678901'],
    'Azure': ['azure-sub-789012', 'azure-sub-345678', 'azure-sub-901234'],
    'GCP': ['gcp-project-456789', 'gcp-project-789123', 'gcp-project-234567']
  };

  const regions = {
    'AWS': ['us-east-1', 'us-west-2', 'eu-west-1', 'ap-southeast-1'],
    'Azure': ['East US', 'West Europe', 'Southeast Asia', 'UK South'],
    'GCP': ['us-central1', 'europe-west1', 'asia-east1', 'australia-southeast1']
  };

  // Component-specific vulnerability data
  const componentVulnerabilities = {
    // Components with blocking vulnerabilities (critical/high)
    'Database': {
      critical: 3,
      high: 7,
      medium: 15,
      low: 28,
      details: [
        { severity: 'critical', cve: 'CVE-2024-1234', description: 'SQL injection vulnerability in connection handler', package: 'pg-client v8.2.1' },
        { severity: 'critical', cve: 'CVE-2024-1235', description: 'Authentication bypass in admin panel', package: 'admin-ui v2.3.0' },
        { severity: 'critical', cve: 'CVE-2024-1236', description: 'Remote code execution via query parser', package: 'query-parser v1.5.2' },
        { severity: 'high', cve: 'CVE-2024-2345', description: 'Privilege escalation in user management', package: 'user-mgmt v3.1.0' },
        { severity: 'high', cve: 'CVE-2024-2346', description: 'Data exposure through error messages', package: 'error-handler v1.2.0' }
      ]
    },
    'Web Application': {
      critical: 2,
      high: 4,
      medium: 18,
      low: 35,
      details: [
        { severity: 'critical', cve: 'CVE-2024-3456', description: 'Cross-site scripting (XSS) in form inputs', package: 'react-forms v4.2.0' },
        { severity: 'critical', cve: 'CVE-2024-3457', description: 'Insecure deserialization of user data', package: 'serializer v2.1.0' },
        { severity: 'high', cve: 'CVE-2024-4567', description: 'Session fixation vulnerability', package: 'session-mgr v3.0.5' },
        { severity: 'high', cve: 'CVE-2024-4568', description: 'Directory traversal in file upload', package: 'file-upload v1.8.3' }
      ]
    },
    'API Gateway': {
      critical: 1,
      high: 3,
      medium: 8,
      low: 15,
      details: [
        { severity: 'critical', cve: 'CVE-2024-5678', description: 'Rate limiting bypass vulnerability', package: 'rate-limiter v2.0.1' },
        { severity: 'high', cve: 'CVE-2024-6789', description: 'JWT token validation bypass', package: 'jwt-validator v3.2.0' },
        { severity: 'high', cve: 'CVE-2024-6790', description: 'API key exposure in logs', package: 'logger v4.1.2' },
        { severity: 'high', cve: 'CVE-2024-6791', description: 'CORS misconfiguration allowing any origin', package: 'cors-handler v1.3.0' }
      ]
    },
    'Container Registry': {
      critical: 2,
      high: 5,
      medium: 10,
      low: 20,
      details: [
        { severity: 'critical', cve: 'CVE-2024-7890', description: 'Image tampering vulnerability', package: 'registry-core v2.8.0' },
        { severity: 'critical', cve: 'CVE-2024-7891', description: 'Unauthorized access to private repositories', package: 'auth-module v3.1.0' },
        { severity: 'high', cve: 'CVE-2024-8901', description: 'Manifest injection attack', package: 'manifest-parser v1.5.0' }
      ]
    },
    // Components without blocking vulnerabilities (safe to deploy)
    'Load Balancer': {
      critical: 0,
      high: 0,
      medium: 5,
      low: 12,
      details: [
        { severity: 'medium', cve: 'CVE-2024-9012', description: 'Inefficient routing algorithm', package: 'lb-router v3.2.1' },
        { severity: 'medium', cve: 'CVE-2024-9013', description: 'Minor memory leak in connection pool', package: 'conn-pool v2.5.0' },
        { severity: 'low', cve: 'CVE-2024-9014', description: 'Verbose error logging', package: 'error-logger v1.8.0' }
      ]
    },
    'VPC': {
      critical: 0,
      high: 0,
      medium: 3,
      low: 8,
      details: [
        { severity: 'medium', cve: 'CVE-2024-1012', description: 'Suboptimal network segmentation', package: 'vpc-manager v4.0.0' },
        { severity: 'low', cve: 'CVE-2024-1013', description: 'Deprecated API usage', package: 'api-client v2.3.0' }
      ]
    },
    'CDN': {
      critical: 0,
      high: 0,
      medium: 7,
      low: 18,
      details: [
        { severity: 'medium', cve: 'CVE-2024-1112', description: 'Cache poisoning under specific conditions', package: 'cache-mgr v3.5.0' },
        { severity: 'medium', cve: 'CVE-2024-1113', description: 'Inefficient cache invalidation', package: 'cache-invalidator v1.2.0' }
      ]
    },
    'Storage': {
      critical: 0,
      high: 0,
      medium: 4,
      low: 10,
      details: [
        { severity: 'medium', cve: 'CVE-2024-1212', description: 'Weak encryption for metadata', package: 'metadata-encrypt v2.1.0' },
        { severity: 'low', cve: 'CVE-2024-1213', description: 'Unnecessary permissions in IAM role', package: 'iam-config v1.0.0' }
      ]
    },
    'Kubernetes Cluster': {
      critical: 0,
      high: 0,
      medium: 6,
      low: 15,
      details: [
        { severity: 'medium', cve: 'CVE-2024-1312', description: 'Pod security policy not enforced', package: 'k8s-security v1.27.0' },
        { severity: 'medium', cve: 'CVE-2024-1313', description: 'Network policy allows broad access', package: 'network-policy v2.0.0' }
      ]
    },
    'Monitoring': {
      critical: 0,
      high: 0,
      medium: 2,
      low: 7,
      details: [
        { severity: 'medium', cve: 'CVE-2024-1412', description: 'Metrics API exposes sensitive data', package: 'metrics-api v3.1.0' },
        { severity: 'low', cve: 'CVE-2024-1413', description: 'Dashboard uses outdated visualization library', package: 'viz-lib v4.2.0' }
      ]
    }
  };

  // Get vulnerabilities for selected component
  const vulnerabilities = selectedComponent && componentVulnerabilities[selectedComponent] 
    ? componentVulnerabilities[selectedComponent]
    : { critical: 0, high: 0, medium: 0, low: 0, details: [] };

  const hasBlockingVulnerabilities = vulnerabilities.critical > 0 || vulnerabilities.high > 0;

  // Form validation function
  const isFormValid = () => {
    return selectedProject && selectedComponent && selectedCSP && deploymentTarget && environment && environmentType && region;
  };

  // Sample stack resources for preview
  const stackResources = [
    { id: 'vpc', type: 'VPC', name: 'Production VPC', icon: Network },
    { id: 'alb', type: 'Load Balancer', name: 'Application LB', icon: Layers },
    { id: 'app', type: 'Application', name: 'Web App', icon: Globe },
    { id: 'db', type: 'Database', name: 'PostgreSQL', icon: Database },
    { id: 'storage', type: 'Storage', name: 'S3 Bucket', icon: HardDrive }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="px-8 py-6 border-b border-gray-200 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Configure New Deployment</h2>
            <p className="text-gray-600 mt-1">Set up a new component deployment to your cloud environment</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <XCircle className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        <div className="flex flex-1 min-h-0">
          {/* Left Panel - Configuration Form */}
          <div className="w-1/2 p-8 overflow-y-auto border-r border-gray-200">
            <div className="space-y-6">
              {/* Project Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project *
                </label>
                <select
                  value={selectedProject}
                  onChange={(e) => {
                    setSelectedProject(e.target.value);
                    setSelectedComponent('');
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="">Select a project</option>
                  {Object.keys(projectComponents).map(project => (
                    <option key={project} value={project}>{project}</option>
                  ))}
                </select>
              </div>

              {/* Component Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Component *
                </label>
                <select
                  value={selectedComponent}
                  onChange={(e) => setSelectedComponent(e.target.value)}
                  disabled={!selectedProject}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 disabled:bg-gray-100"
                >
                  <option value="">Select a component</option>
                  {selectedProject && projectComponents[selectedProject].map(component => (
                    <option key={component} value={component}>{component}</option>
                  ))}
                </select>
              </div>

              {/* Cloud Provider Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cloud Provider *
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <button 
                    onClick={() => {
                      setSelectedCSP('AWS');
                      setDeploymentTarget('');
                      setRegion('');
                    }}
                    className={`p-3 border-2 rounded-lg flex items-center justify-center gap-2 transition-all ${
                      selectedCSP === 'AWS' 
                        ? 'border-orange-500 bg-orange-50' 
                        : 'border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <Cloud className="w-5 h-5 text-orange-500" />
                    <span className={selectedCSP === 'AWS' ? 'font-medium' : ''}>AWS</span>
                  </button>
                  <button 
                    onClick={() => {
                      setSelectedCSP('Azure');
                      setDeploymentTarget('');
                      setRegion('');
                    }}
                    className={`p-3 border-2 rounded-lg flex items-center justify-center gap-2 transition-all ${
                      selectedCSP === 'Azure' 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <Cloud className="w-5 h-5 text-blue-500" />
                    <span className={selectedCSP === 'Azure' ? 'font-medium' : ''}>Azure</span>
                  </button>
                  <button 
                    onClick={() => {
                      setSelectedCSP('GCP');
                      setDeploymentTarget('');
                      setRegion('');
                    }}
                    className={`p-3 border-2 rounded-lg flex items-center justify-center gap-2 transition-all ${
                      selectedCSP === 'GCP' 
                        ? 'border-red-500 bg-red-50' 
                        : 'border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <Cloud className="w-5 h-5 text-red-500" />
                    <span className={selectedCSP === 'GCP' ? 'font-medium' : ''}>GCP</span>
                  </button>
                </div>
              </div>

              {/* Deployment Target */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Deployment Target *
                </label>
                <select
                  value={deploymentTarget}
                  onChange={(e) => setDeploymentTarget(e.target.value)}
                  disabled={!selectedCSP}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                >
                  <option value="">
                    {selectedCSP ? 'Select deployment target' : 'Select cloud provider first'}
                  </option>
                  {selectedCSP && deploymentTargets[selectedCSP]?.map(target => (
                    <option key={target} value={target}>{target}</option>
                  ))}
                </select>
              </div>

              {/* Environment */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Environment *
                </label>
                <select
                  value={environment}
                  onChange={(e) => {
                    setEnvironment(e.target.value);
                    setEnvironmentType('');
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="">Select environment</option>
                  <option value="Prod">Production</option>
                  <option value="Non-Prod">Non-Production</option>
                </select>
              </div>

              {/* Environment Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Environment Type *
                </label>
                <select
                  value={environmentType}
                  onChange={(e) => setEnvironmentType(e.target.value)}
                  disabled={!environment}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 disabled:bg-gray-100"
                >
                  <option value="">Select environment type</option>
                  {environment === 'Prod' ? (
                    <>
                      <option value="Prod">Prod</option>
                      <option value="Prod-DR">Prod-DR</option>
                    </>
                  ) : (
                    <>
                      <option value="Dev">Dev</option>
                      <option value="Stage">Stage</option>
                      <option value="UAT">UAT</option>
                      <option value="Test">Test</option>
                      <option value="Demo">Demo</option>
                      <option value="QA">QA</option>
                    </>
                  )}
                </select>
              </div>

              {/* Region */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Region *
                </label>
                <select
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  disabled={!selectedCSP}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                >
                  <option value="">
                    {selectedCSP ? 'Select region' : 'Select cloud provider first'}
                  </option>
                  {selectedCSP && regions[selectedCSP]?.map(regionOption => (
                    <option key={regionOption} value={regionOption}>{regionOption}</option>
                  ))}
                </select>
              </div>

              {/* Vulnerability Assessment */}
              {selectedComponent && (
                <div className="border-t pt-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-slate-900">Vulnerability Assessment</h3>
                    <button
                      onClick={() => setShowVulnerabilities(!showVulnerabilities)}
                      className="text-sm text-blue-600 hover:text-blue-700"
                    >
                      {showVulnerabilities ? 'Hide' : 'Show'} Details
                    </button>
                  </div>

                  <div className="grid grid-cols-4 gap-3">
                    <div className={`${vulnerabilities.critical > 0 ? 'bg-red-50 border-red-200' : 'bg-gray-50 border-gray-200'} border rounded-lg p-3`}>
                      <div className={`text-2xl font-bold ${vulnerabilities.critical > 0 ? 'text-red-600' : 'text-gray-400'}`}>
                        {vulnerabilities.critical}
                      </div>
                      <div className={`text-xs ${vulnerabilities.critical > 0 ? 'text-red-700' : 'text-gray-500'}`}>Critical</div>
                    </div>
                    <div className={`${vulnerabilities.high > 0 ? 'bg-orange-50 border-orange-200' : 'bg-gray-50 border-gray-200'} border rounded-lg p-3`}>
                      <div className={`text-2xl font-bold ${vulnerabilities.high > 0 ? 'text-orange-600' : 'text-gray-400'}`}>
                        {vulnerabilities.high}
                      </div>
                      <div className={`text-xs ${vulnerabilities.high > 0 ? 'text-orange-700' : 'text-gray-500'}`}>High</div>
                    </div>
                    <div className={`${vulnerabilities.medium > 0 ? 'bg-yellow-50 border-yellow-200' : 'bg-gray-50 border-gray-200'} border rounded-lg p-3`}>
                      <div className={`text-2xl font-bold ${vulnerabilities.medium > 0 ? 'text-yellow-600' : 'text-gray-400'}`}>
                        {vulnerabilities.medium}
                      </div>
                      <div className={`text-xs ${vulnerabilities.medium > 0 ? 'text-yellow-700' : 'text-gray-500'}`}>Medium</div>
                    </div>
                    <div className={`${vulnerabilities.low > 0 ? 'bg-blue-50 border-blue-200' : 'bg-gray-50 border-gray-200'} border rounded-lg p-3`}>
                      <div className={`text-2xl font-bold ${vulnerabilities.low > 0 ? 'text-blue-600' : 'text-gray-400'}`}>
                        {vulnerabilities.low}
                      </div>
                      <div className={`text-xs ${vulnerabilities.low > 0 ? 'text-blue-700' : 'text-gray-500'}`}>Low</div>
                    </div>
                  </div>

                  {hasBlockingVulnerabilities ? (
                    <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-red-900">Deployment Blocked</p>
                          <p className="text-sm text-red-700 mt-1">
                            This component cannot be deployed until all critical and high vulnerabilities are remediated.
                          </p>
                          <button 
                            onClick={() => setShowVulnerabilityReport(true)}
                            className="text-sm text-red-600 hover:text-red-700 font-medium mt-2"
                          >
                            View Vulnerability Report →
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    selectedComponent && !hasBlockingVulnerabilities && (
                      <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium text-green-900">Ready for Deployment</p>
                            <p className="text-sm text-green-700 mt-1">
                              No critical or high vulnerabilities detected. This component is cleared for deployment.
                            </p>
                            {(vulnerabilities.medium > 0 || vulnerabilities.low > 0) && (
                              <button 
                                onClick={() => setShowVulnerabilityReport(true)}
                                className="text-sm text-green-600 hover:text-green-700 font-medium mt-2"
                              >
                                View Vulnerability Report →
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right Panel - Stack Preview */}
          <div className="w-1/2 p-8 bg-gray-50">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Stack Preview</h3>
            
            {selectedComponent ? (
              <div className="bg-white rounded-xl border border-gray-200 p-6 h-[calc(100%-3rem)]">
                <div className="mb-4">
                  <p className="text-sm text-gray-600">Component: <span className="font-medium text-slate-900">{selectedComponent}</span></p>
                  <p className="text-sm text-gray-600">Project: <span className="font-medium text-slate-900">{selectedProject}</span></p>
                </div>

                <div className="border-t pt-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">Infrastructure Resources</h4>
                  <div className="space-y-3">
                    {stackResources.map((resource) => {
                      const Icon = resource.icon;
                      return (
                        <div key={resource.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                          <div className="p-2 bg-white rounded-lg">
                            <Icon className="w-5 h-5 text-gray-600" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-slate-900">{resource.name}</p>
                            <p className="text-xs text-gray-500">{resource.type}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">Configuration Summary</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Auto-scaling</span>
                      <span className="text-green-600 font-medium">Enabled</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monitoring</span>
                      <span className="text-green-600 font-medium">Configured</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Backup</span>
                      <span className="text-green-600 font-medium">Daily</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Encryption</span>
                      <span className="text-green-600 font-medium">AES-256</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl border border-gray-200 p-6 h-[calc(100%-3rem)] flex items-center justify-center">
                <div className="text-center">
                  <Layers className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-500">Select a component to preview its stack</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="px-8 py-4 border-t border-gray-200 flex justify-between items-center bg-white flex-shrink-0">
          <div className="text-sm text-gray-600">
            * Required fields
          </div>
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                if (!hasBlockingVulnerabilities && isFormValid()) {
                  // Create deployment object
                  const deploymentData = {
                    id: `dep-${Date.now()}`,
                    project: selectedProject,
                    component: selectedComponent,
                    csp: selectedCSP,
                    deploymentTarget,
                    environment,
                    environmentType,
                    region,
                    timestamp: new Date().toISOString()
                  };
                  
                  // Navigate to deployment progress page
                  setCurrentPage('deployment-progress');
                  // Store deployment data for the progress page (we'll need to add this)
                  window.currentDeployment = deploymentData;
                  onClose();
                }
              }}
              disabled={hasBlockingVulnerabilities || !isFormValid()}
              className={`px-6 py-2 rounded-lg transition-colors flex items-center gap-2 ${
                hasBlockingVulnerabilities || !isFormValid()
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-green-600 hover:bg-green-700 text-white hover:shadow-lg'
              }`}
            >
              {hasBlockingVulnerabilities ? (
                <>
                  <AlertTriangle className="w-4 h-4" />
                  Blocked by Vulnerabilities
                </>
              ) : (
                <>
                  <Zap className="w-4 h-4" />
                  Deploy Component
                </>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Vulnerability Report Modal */}
      {showVulnerabilityReport && (
        <VulnerabilityReportModal 
          component={selectedComponent}
          vulnerabilities={vulnerabilities}
          onClose={() => setShowVulnerabilityReport(false)}
        />
      )}
    </div>
  );
};

// Vulnerability Report Modal
const VulnerabilityReportModal = ({ component, vulnerabilities, onClose }) => {
  const getSeverityColor = (severity) => {
    switch(severity) {
      case 'critical': return 'text-red-600 bg-red-50 border-red-200';
      case 'high': return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'medium': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'low': return 'text-blue-600 bg-blue-50 border-blue-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getSeverityIcon = (severity) => {
    switch(severity) {
      case 'critical': return <AlertTriangle className="w-4 h-4" />;
      case 'high': return <AlertCircle className="w-4 h-4" />;
      case 'medium': return <AlertCircle className="w-4 h-4" />;
      case 'low': return <Info className="w-4 h-4" />;
      default: return <Info className="w-4 h-4" />;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[60]">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl max-h-[85vh] overflow-hidden">
        {/* Header */}
        <div className="px-8 py-6 border-b border-gray-200 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Vulnerability Report</h2>
            <p className="text-gray-600 mt-1">Component: {component}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <XCircle className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        {/* Summary Stats */}
        <div className="px-8 py-6 bg-gray-50 border-b border-gray-200">
          <div className="grid grid-cols-4 gap-4">
            <div className={`rounded-lg border p-4 ${vulnerabilities.critical > 0 ? 'bg-red-50 border-red-200' : 'bg-white border-gray-200'}`}>
              <div className="flex items-center justify-between">
                <span className={`text-sm font-medium ${vulnerabilities.critical > 0 ? 'text-red-700' : 'text-gray-600'}`}>Critical</span>
                <span className={`text-2xl font-bold ${vulnerabilities.critical > 0 ? 'text-red-600' : 'text-gray-400'}`}>{vulnerabilities.critical}</span>
              </div>
            </div>
            <div className={`rounded-lg border p-4 ${vulnerabilities.high > 0 ? 'bg-orange-50 border-orange-200' : 'bg-white border-gray-200'}`}>
              <div className="flex items-center justify-between">
                <span className={`text-sm font-medium ${vulnerabilities.high > 0 ? 'text-orange-700' : 'text-gray-600'}`}>High</span>
                <span className={`text-2xl font-bold ${vulnerabilities.high > 0 ? 'text-orange-600' : 'text-gray-400'}`}>{vulnerabilities.high}</span>
              </div>
            </div>
            <div className={`rounded-lg border p-4 ${vulnerabilities.medium > 0 ? 'bg-yellow-50 border-yellow-200' : 'bg-white border-gray-200'}`}>
              <div className="flex items-center justify-between">
                <span className={`text-sm font-medium ${vulnerabilities.medium > 0 ? 'text-yellow-700' : 'text-gray-600'}`}>Medium</span>
                <span className={`text-2xl font-bold ${vulnerabilities.medium > 0 ? 'text-yellow-600' : 'text-gray-400'}`}>{vulnerabilities.medium}</span>
              </div>
            </div>
            <div className={`rounded-lg border p-4 ${vulnerabilities.low > 0 ? 'bg-blue-50 border-blue-200' : 'bg-white border-gray-200'}`}>
              <div className="flex items-center justify-between">
                <span className={`text-sm font-medium ${vulnerabilities.low > 0 ? 'text-blue-700' : 'text-gray-600'}`}>Low</span>
                <span className={`text-2xl font-bold ${vulnerabilities.low > 0 ? 'text-blue-600' : 'text-gray-400'}`}>{vulnerabilities.low}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Vulnerability Details */}
        <div className="px-8 py-6 overflow-y-auto max-h-[calc(85vh-280px)]">
          {vulnerabilities.details && vulnerabilities.details.length > 0 ? (
            <div className="space-y-4">
              {vulnerabilities.details.map((vuln, index) => (
                <div key={index} className={`rounded-lg border p-4 ${getSeverityColor(vuln.severity)}`}>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5">{getSeverityIcon(vuln.severity)}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-mono text-sm font-semibold">{vuln.cve}</span>
                        <span className={`px-2 py-0.5 text-xs font-medium rounded uppercase ${getSeverityColor(vuln.severity)}`}>
                          {vuln.severity}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700 mb-2">{vuln.description}</p>
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <Package className="w-3 h-3" />
                        <span className="font-mono">{vuln.package}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <Shield className="w-12 h-12 text-green-500 mx-auto mb-3" />
              <p className="text-gray-600">No vulnerability details available</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-8 py-4 border-t border-gray-200 bg-gray-50">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-600">
              Generated on {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}
            </div>
            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-white transition-colors"
              >
                Close
              </button>
              <button className="px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg hover:shadow-lg transition-all">
                Export Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Deployment History Component
const DeploymentHistory = ({ component, onBack }) => {
  const [selectedStage, setSelectedStage] = useState(null);
  const [selectedDeployment, setSelectedDeployment] = useState(null);
  
  // Sample deployment history data
  const deploymentHistory = {
    'API Gateway': [
      {
        id: 'dep-hist-001',
        triggeredBy: 'John Smith',
        deploymentTarget: 'aws-prod-123456',
        environment: 'Prod',
        environmentType: 'Prod',
        pipeline: 'Standard TF Cloud Pipeline',
        branch: 'main',
        version: 'v2.3.1',
        lastDeployment: '2025-01-15 14:30:00',
        status: 'Success',
        stages: {
          validate: { status: 'success', substages: { format: 'success', validate: 'success' } },
          security: { status: 'success', substages: { sentinel: 'success' } },
          init: { status: 'success' },
          plan: { status: 'success' },
          testing: { status: 'success', substages: { unit: 'success', cost: 'success' } },
          apply: { status: 'success' },
          postValidation: { status: 'success', substages: { smoke: 'success' } }
        }
      },
      {
        id: 'dep-hist-002',
        triggeredBy: 'Sarah Johnson',
        deploymentTarget: 'aws-dev-234567',
        environment: 'Non-Prod',
        environmentType: 'Dev',
        pipeline: 'Standard TF Cloud Pipeline',
        branch: 'develop',
        version: 'v2.3.0',
        lastDeployment: '2025-01-14 16:45:00',
        status: 'Failure',
        stages: {
          validate: { status: 'success', substages: { format: 'success', validate: 'success' } },
          security: { status: 'success', substages: { sentinel: 'success' } },
          init: { status: 'success' },
          plan: { status: 'success' },
          testing: { status: 'failure', substages: { unit: 'failure', cost: 'success' } },
          apply: { status: 'not-run' },
          postValidation: { status: 'not-run', substages: { smoke: 'not-run' } }
        }
      },
      {
        id: 'dep-hist-003',
        triggeredBy: 'Mike Chen',
        deploymentTarget: 'aws-prod-123456',
        environment: 'Prod',
        environmentType: 'Prod-DR',
        pipeline: 'Standard TF Cloud Pipeline',
        branch: 'main',
        version: 'v2.2.8',
        lastDeployment: '2025-01-13 09:20:00',
        status: 'Warning',
        stages: {
          validate: { status: 'success', substages: { format: 'success', validate: 'success' } },
          security: { status: 'warning', substages: { sentinel: 'warning' } },
          init: { status: 'success' },
          plan: { status: 'success' },
          testing: { status: 'success', substages: { unit: 'success', cost: 'warning' } },
          apply: { status: 'success' },
          postValidation: { status: 'success', substages: { smoke: 'success' } }
        }
      }
    ],
    'Database': [
      {
        id: 'dep-hist-004',
        triggeredBy: 'Lisa Wang',
        deploymentTarget: 'azure-sub-345678',
        environment: 'Prod',
        environmentType: 'Prod',
        pipeline: 'Standard TF Cloud Pipeline',
        branch: 'main',
        version: 'v4.1.0',
        lastDeployment: '2025-01-14 09:00:00',
        status: 'Failure',
        stages: {
          validate: { status: 'success', substages: { format: 'success', validate: 'success' } },
          security: { status: 'failure', substages: { sentinel: 'failure' } },
          init: { status: 'not-run' },
          plan: { status: 'not-run' },
          testing: { status: 'not-run', substages: { unit: 'not-run', cost: 'not-run' } },
          apply: { status: 'not-run' },
          postValidation: { status: 'not-run', substages: { smoke: 'not-run' } }
        }
      },
      {
        id: 'dep-hist-005',
        triggeredBy: 'David Kim',
        deploymentTarget: 'azure-sub-345678',
        environment: 'Non-Prod',
        environmentType: 'Stage',
        pipeline: 'Standard TF Cloud Pipeline',
        branch: 'develop',
        version: 'v4.0.9',
        lastDeployment: '2025-01-12 11:30:00',
        status: 'Success',
        stages: {
          validate: { status: 'success', substages: { format: 'success', validate: 'success' } },
          security: { status: 'success', substages: { sentinel: 'success' } },
          init: { status: 'success' },
          plan: { status: 'success' },
          testing: { status: 'success', substages: { unit: 'success', cost: 'success' } },
          apply: { status: 'success' },
          postValidation: { status: 'success', substages: { smoke: 'success' } }
        }
      }
    ],
    'Load Balancer': [
      {
        id: 'dep-hist-006',
        triggeredBy: 'Emma Davis',
        deploymentTarget: 'gcp-project-456789',
        environment: 'Non-Prod',
        environmentType: 'Dev',
        pipeline: 'Standard TF Cloud Pipeline',
        branch: 'feature/lb-updates',
        version: 'v3.0.0',
        lastDeployment: '2025-01-15 10:45:00',
        status: 'Success',
        stages: {
          validate: { status: 'success', substages: { format: 'success', validate: 'success' } },
          security: { status: 'success', substages: { sentinel: 'success' } },
          init: { status: 'success' },
          plan: { status: 'success' },
          testing: { status: 'success', substages: { unit: 'success', cost: 'success' } },
          apply: { status: 'success' },
          postValidation: { status: 'success', substages: { smoke: 'success' } }
        }
      },
      {
        id: 'dep-hist-007',
        triggeredBy: 'Alex Rodriguez',
        deploymentTarget: 'gcp-project-456789',
        environment: 'Prod',
        environmentType: 'Prod',
        pipeline: 'Standard TF Cloud Pipeline',
        branch: 'main',
        version: 'v2.9.8',
        lastDeployment: '2025-01-14 13:22:00',
        status: 'Warning',
        stages: {
          validate: { status: 'success', substages: { format: 'success', validate: 'success' } },
          security: { status: 'success', substages: { sentinel: 'success' } },
          init: { status: 'success' },
          plan: { status: 'success' },
          testing: { status: 'warning', substages: { unit: 'success', cost: 'warning' } },
          apply: { status: 'success' },
          postValidation: { status: 'success', substages: { smoke: 'success' } }
        }
      }
    ],
    'Web Application': [
      {
        id: 'dep-hist-008',
        triggeredBy: 'Rachel Martinez',
        deploymentTarget: 'azure-sub-789012',
        environment: 'Non-Prod',
        environmentType: 'Stage',
        pipeline: 'Standard TF Cloud Pipeline',
        branch: 'release/v1.8.5',
        version: 'v1.8.5',
        lastDeployment: '2025-01-15 12:15:00',
        status: 'Success',
        stages: {
          validate: { status: 'success', substages: { format: 'success', validate: 'success' } },
          security: { status: 'success', substages: { sentinel: 'success' } },
          init: { status: 'success' },
          plan: { status: 'success' },
          testing: { status: 'success', substages: { unit: 'success', cost: 'success' } },
          apply: { status: 'success' },
          postValidation: { status: 'success', substages: { smoke: 'success' } }
        }
      },
      {
        id: 'dep-hist-009',
        triggeredBy: 'Tom Wilson',
        deploymentTarget: 'azure-sub-789012',
        environment: 'Prod',
        environmentType: 'Prod',
        pipeline: 'Standard TF Cloud Pipeline',
        branch: 'main',
        version: 'v1.8.4',
        lastDeployment: '2025-01-13 16:30:00',
        status: 'Failure',
        stages: {
          validate: { status: 'success', substages: { format: 'success', validate: 'success' } },
          security: { status: 'failure', substages: { sentinel: 'failure' } },
          init: { status: 'not-run' },
          plan: { status: 'not-run' },
          testing: { status: 'not-run', substages: { unit: 'not-run', cost: 'not-run' } },
          apply: { status: 'not-run' },
          postValidation: { status: 'not-run', substages: { smoke: 'not-run' } }
        }
      },
      {
        id: 'dep-hist-010',
        triggeredBy: 'Rachel Martinez',
        deploymentTarget: 'azure-sub-789012',
        environment: 'Non-Prod',
        environmentType: 'Dev',
        pipeline: 'Standard TF Cloud Pipeline',
        branch: 'develop',
        version: 'v1.8.3',
        lastDeployment: '2025-01-12 14:45:00',
        status: 'Success',
        stages: {
          validate: { status: 'success', substages: { format: 'success', validate: 'success' } },
          security: { status: 'success', substages: { sentinel: 'success' } },
          init: { status: 'success' },
          plan: { status: 'success' },
          testing: { status: 'success', substages: { unit: 'success', cost: 'success' } },
          apply: { status: 'success' },
          postValidation: { status: 'success', substages: { smoke: 'success' } }
        }
      }
    ],
    'Container Registry': [
      {
        id: 'dep-hist-011',
        triggeredBy: 'Kevin Zhang',
        deploymentTarget: 'aws-dev-234567',
        environment: 'Non-Prod',
        environmentType: 'UAT',
        pipeline: 'Standard TF Cloud Pipeline',
        branch: 'feature/registry-updates',
        version: 'v1.2.3',
        lastDeployment: '2025-01-14 16:20:00',
        status: 'Success',
        stages: {
          validate: { status: 'success', substages: { format: 'success', validate: 'success' } },
          security: { status: 'success', substages: { sentinel: 'success' } },
          init: { status: 'success' },
          plan: { status: 'success' },
          testing: { status: 'success', substages: { unit: 'success', cost: 'success' } },
          apply: { status: 'success' },
          postValidation: { status: 'success', substages: { smoke: 'success' } }
        }
      },
      {
        id: 'dep-hist-012',
        triggeredBy: 'Amy Parker',
        deploymentTarget: 'aws-prod-345678',
        environment: 'Prod',
        environmentType: 'Prod',
        pipeline: 'Standard TF Cloud Pipeline',
        branch: 'main',
        version: 'v1.2.2',
        lastDeployment: '2025-01-13 09:15:00',
        status: 'Failure',
        stages: {
          validate: { status: 'success', substages: { format: 'success', validate: 'success' } },
          security: { status: 'failure', substages: { sentinel: 'failure' } },
          init: { status: 'not-run' },
          plan: { status: 'not-run' },
          testing: { status: 'not-run', substages: { unit: 'not-run', cost: 'not-run' } },
          apply: { status: 'not-run' },
          postValidation: { status: 'not-run', substages: { smoke: 'not-run' } }
        }
      }
    ],
    'Storage': [
      {
        id: 'dep-hist-013',
        triggeredBy: 'Marcus Johnson',
        deploymentTarget: 'gcp-project-789123',
        environment: 'Non-Prod',
        environmentType: 'Test',
        pipeline: 'Standard TF Cloud Pipeline',
        branch: 'feature/storage-optimization',
        version: 'v2.0.0',
        lastDeployment: '2025-01-13 11:30:00',
        status: 'Success',
        stages: {
          validate: { status: 'success', substages: { format: 'success', validate: 'success' } },
          security: { status: 'success', substages: { sentinel: 'success' } },
          init: { status: 'success' },
          plan: { status: 'success' },
          testing: { status: 'success', substages: { unit: 'success', cost: 'success' } },
          apply: { status: 'success' },
          postValidation: { status: 'success', substages: { smoke: 'success' } }
        }
      },
      {
        id: 'dep-hist-014',
        triggeredBy: 'Nina Chen',
        deploymentTarget: 'gcp-project-789123',
        environment: 'Non-Prod',
        environmentType: 'Stage',
        pipeline: 'Standard TF Cloud Pipeline',
        branch: 'develop',
        version: 'v1.9.8',
        lastDeployment: '2025-01-12 15:45:00',
        status: 'Warning',
        stages: {
          validate: { status: 'success', substages: { format: 'success', validate: 'success' } },
          security: { status: 'success', substages: { sentinel: 'success' } },
          init: { status: 'success' },
          plan: { status: 'success' },
          testing: { status: 'warning', substages: { unit: 'success', cost: 'warning' } },
          apply: { status: 'success' },
          postValidation: { status: 'warning', substages: { smoke: 'warning' } }
        }
      },
      {
        id: 'dep-hist-015',
        triggeredBy: 'Marcus Johnson',
        deploymentTarget: 'gcp-project-789123',
        environment: 'Prod',
        environmentType: 'Prod',
        pipeline: 'Standard TF Cloud Pipeline',
        branch: 'main',
        version: 'v1.9.7',
        lastDeployment: '2025-01-11 08:20:00',
        status: 'Success',
        stages: {
          validate: { status: 'success', substages: { format: 'success', validate: 'success' } },
          security: { status: 'success', substages: { sentinel: 'success' } },
          init: { status: 'success' },
          plan: { status: 'success' },
          testing: { status: 'success', substages: { unit: 'success', cost: 'success' } },
          apply: { status: 'success' },
          postValidation: { status: 'success', substages: { smoke: 'success' } }
        }
      }
    ],
    'Kubernetes Cluster': [
      {
        id: 'dep-hist-016',
        triggeredBy: 'Jason Lee',
        deploymentTarget: 'aws-prod-567890',
        environment: 'Prod',
        environmentType: 'Prod',
        pipeline: 'Standard TF Cloud Pipeline',
        branch: 'main',
        version: 'v1.27.3',
        lastDeployment: '2025-01-13 08:45:00',
        status: 'Success',
        stages: {
          validate: { status: 'success', substages: { format: 'success', validate: 'success' } },
          security: { status: 'success', substages: { sentinel: 'success' } },
          init: { status: 'success' },
          plan: { status: 'success' },
          testing: { status: 'success', substages: { unit: 'success', cost: 'success' } },
          apply: { status: 'success' },
          postValidation: { status: 'success', substages: { smoke: 'success' } }
        }
      },
      {
        id: 'dep-hist-017',
        triggeredBy: 'Priya Patel',
        deploymentTarget: 'aws-stage-567891',
        environment: 'Non-Prod',
        environmentType: 'Stage',
        pipeline: 'Standard TF Cloud Pipeline',
        branch: 'release/v1.27.3',
        version: 'v1.27.2',
        lastDeployment: '2025-01-12 17:30:00',
        status: 'Warning',
        stages: {
          validate: { status: 'success', substages: { format: 'success', validate: 'success' } },
          security: { status: 'warning', substages: { sentinel: 'warning' } },
          init: { status: 'success' },
          plan: { status: 'success' },
          testing: { status: 'success', substages: { unit: 'success', cost: 'success' } },
          apply: { status: 'success' },
          postValidation: { status: 'success', substages: { smoke: 'success' } }
        }
      },
      {
        id: 'dep-hist-018',
        triggeredBy: 'Jason Lee',
        deploymentTarget: 'aws-dev-567892',
        environment: 'Non-Prod',
        environmentType: 'Dev',
        pipeline: 'Standard TF Cloud Pipeline',
        branch: 'develop',
        version: 'v1.27.1',
        lastDeployment: '2025-01-11 12:15:00',
        status: 'Success',
        stages: {
          validate: { status: 'success', substages: { format: 'success', validate: 'success' } },
          security: { status: 'success', substages: { sentinel: 'success' } },
          init: { status: 'success' },
          plan: { status: 'success' },
          testing: { status: 'success', substages: { unit: 'success', cost: 'success' } },
          apply: { status: 'success' },
          postValidation: { status: 'success', substages: { smoke: 'success' } }
        }
      }
    ],
    'CDN': [
      {
        id: 'dep-hist-019',
        triggeredBy: 'Sophie Turner',
        deploymentTarget: 'azure-sub-901234',
        environment: 'Non-Prod',
        environmentType: 'Demo',
        pipeline: 'Standard TF Cloud Pipeline',
        branch: 'feature/cdn-performance',
        version: 'v1.5.2',
        lastDeployment: '2025-01-12 15:00:00',
        status: 'Success',
        stages: {
          validate: { status: 'success', substages: { format: 'success', validate: 'success' } },
          security: { status: 'success', substages: { sentinel: 'success' } },
          init: { status: 'success' },
          plan: { status: 'success' },
          testing: { status: 'success', substages: { unit: 'success', cost: 'success' } },
          apply: { status: 'success' },
          postValidation: { status: 'success', substages: { smoke: 'success' } }
        }
      },
      {
        id: 'dep-hist-020',
        triggeredBy: 'Carlos Rivera',
        deploymentTarget: 'azure-sub-901234',
        environment: 'Prod',
        environmentType: 'Prod',
        pipeline: 'Standard TF Cloud Pipeline',
        branch: 'main',
        version: 'v1.5.1',
        lastDeployment: '2025-01-10 14:20:00',
        status: 'Success',
        stages: {
          validate: { status: 'success', substages: { format: 'success', validate: 'success' } },
          security: { status: 'success', substages: { sentinel: 'success' } },
          init: { status: 'success' },
          plan: { status: 'success' },
          testing: { status: 'success', substages: { unit: 'success', cost: 'success' } },
          apply: { status: 'success' },
          postValidation: { status: 'success', substages: { smoke: 'success' } }
        }
      }
    ],
    'Monitoring': [
      {
        id: 'dep-hist-021',
        triggeredBy: 'Diana Wong',
        deploymentTarget: 'gcp-project-234567',
        environment: 'Non-Prod',
        environmentType: 'QA',
        pipeline: 'Standard TF Cloud Pipeline',
        branch: 'feature/monitoring-dashboards',
        version: 'v3.2.1',
        lastDeployment: '2025-01-12 13:20:00',
        status: 'Warning',
        stages: {
          validate: { status: 'success', substages: { format: 'success', validate: 'success' } },
          security: { status: 'success', substages: { sentinel: 'success' } },
          init: { status: 'success' },
          plan: { status: 'success' },
          testing: { status: 'warning', substages: { unit: 'warning', cost: 'success' } },
          apply: { status: 'success' },
          postValidation: { status: 'warning', substages: { smoke: 'warning' } }
        }
      },
      {
        id: 'dep-hist-022',
        triggeredBy: 'Ben Thompson',
        deploymentTarget: 'gcp-project-234567',
        environment: 'Non-Prod',
        environmentType: 'Stage',
        pipeline: 'Standard TF Cloud Pipeline',
        branch: 'develop',
        version: 'v3.2.0',
        lastDeployment: '2025-01-11 16:45:00',
        status: 'Success',
        stages: {
          validate: { status: 'success', substages: { format: 'success', validate: 'success' } },
          security: { status: 'success', substages: { sentinel: 'success' } },
          init: { status: 'success' },
          plan: { status: 'success' },
          testing: { status: 'success', substages: { unit: 'success', cost: 'success' } },
          apply: { status: 'success' },
          postValidation: { status: 'success', substages: { smoke: 'success' } }
        }
      },
      {
        id: 'dep-hist-023',
        triggeredBy: 'Diana Wong',
        deploymentTarget: 'gcp-project-234567',
        environment: 'Prod',
        environmentType: 'Prod',
        pipeline: 'Standard TF Cloud Pipeline',
        branch: 'main',
        version: 'v3.1.9',
        lastDeployment: '2025-01-10 11:30:00',
        status: 'Success',
        stages: {
          validate: { status: 'success', substages: { format: 'success', validate: 'success' } },
          security: { status: 'success', substages: { sentinel: 'success' } },
          init: { status: 'success' },
          plan: { status: 'success' },
          testing: { status: 'success', substages: { unit: 'success', cost: 'success' } },
          apply: { status: 'success' },
          postValidation: { status: 'success', substages: { smoke: 'success' } }
        }
      }
    ],
    'VPC': [
      {
        id: 'dep-hist-024',
        triggeredBy: 'Robert Kim',
        deploymentTarget: 'aws-prod-678901',
        environment: 'Prod',
        environmentType: 'Prod',
        pipeline: 'Standard TF Cloud Pipeline',
        branch: 'main',
        version: 'v2.0.0',
        lastDeployment: '2025-01-11 10:00:00',
        status: 'Success',
        stages: {
          validate: { status: 'success', substages: { format: 'success', validate: 'success' } },
          security: { status: 'success', substages: { sentinel: 'success' } },
          init: { status: 'success' },
          plan: { status: 'success' },
          testing: { status: 'success', substages: { unit: 'success', cost: 'success' } },
          apply: { status: 'success' },
          postValidation: { status: 'success', substages: { smoke: 'success' } }
        }
      },
      {
        id: 'dep-hist-025',
        triggeredBy: 'Grace Liu',
        deploymentTarget: 'aws-stage-678902',
        environment: 'Non-Prod',
        environmentType: 'Stage',
        pipeline: 'Standard TF Cloud Pipeline',
        branch: 'release/v2.0.0',
        version: 'v1.9.9',
        lastDeployment: '2025-01-10 14:30:00',
        status: 'Success',
        stages: {
          validate: { status: 'success', substages: { format: 'success', validate: 'success' } },
          security: { status: 'success', substages: { sentinel: 'success' } },
          init: { status: 'success' },
          plan: { status: 'success' },
          testing: { status: 'success', substages: { unit: 'success', cost: 'success' } },
          apply: { status: 'success' },
          postValidation: { status: 'success', substages: { smoke: 'success' } }
        }
      },
      {
        id: 'dep-hist-026',
        triggeredBy: 'Robert Kim',
        deploymentTarget: 'aws-dev-678903',
        environment: 'Non-Prod',
        environmentType: 'Dev',
        pipeline: 'Standard TF Cloud Pipeline',
        branch: 'develop',
        version: 'v1.9.8',
        lastDeployment: '2025-01-09 16:15:00',
        status: 'Failure',
        stages: {
          validate: { status: 'success', substages: { format: 'success', validate: 'success' } },
          security: { status: 'success', substages: { sentinel: 'success' } },
          init: { status: 'success' },
          plan: { status: 'failure' },
          testing: { status: 'not-run', substages: { unit: 'not-run', cost: 'not-run' } },
          apply: { status: 'not-run' },
          postValidation: { status: 'not-run', substages: { smoke: 'not-run' } }
        }
      }
    ]
  };

  const history = deploymentHistory[component] || [];

  const getStatusColor = (status) => {
    switch(status) {
      case 'Success': case 'success': return 'text-green-600';
      case 'Failure': case 'failure': return 'text-red-600';
      case 'Warning': case 'warning': return 'text-orange-600';
      case 'not-run': return 'text-gray-400';
      default: return 'text-gray-500';
    }
  };

  const getStatusIcon = (status, size = 'w-4 h-4') => {
    switch(status) {
      case 'success':
        return <CheckCircle className={`${size} text-green-600`} />;
      case 'failure':
        return <XCircle className={`${size} text-red-600`} />;
      case 'warning':
        return <AlertTriangle className={`${size} text-orange-600`} />;
      case 'not-run':
        return <div className={`${size} border border-gray-300 rounded-full bg-gray-100`} />;
      default:
        return <div className={`${size} border border-gray-300 rounded-full bg-gray-100`} />;
    }
  };

  const getStageDetails = (stageName, stage) => {
    const details = {
      validate: {
        title: 'Validation Stage',
        description: 'Terraform configuration validation',
        substages: {
          format: { name: 'Terraform Format Check', description: 'Validates HCL formatting standards' },
          validate: { name: 'Terraform Validate', description: 'Validates configuration syntax and references' }
        }
      },
      security: {
        title: 'Security Scans',
        description: 'Security policy validation',
        substages: {
          sentinel: { name: 'Sentinel Policy Scans', description: 'Enforces security and compliance policies' }
        }
      },
      init: {
        title: 'Terraform Init',
        description: 'Initializes Terraform working directory',
        substages: {}
      },
      plan: {
        title: 'Terraform Plan',
        description: 'Creates execution plan for infrastructure changes',
        substages: {}
      },
      testing: {
        title: 'Testing & Validation',
        description: 'Automated testing and cost analysis',
        substages: {
          unit: { name: 'Unit Tests (Terratest)', description: 'Runs automated infrastructure tests' },
          cost: { name: 'Cost Estimation', description: 'Estimates monthly infrastructure costs' }
        }
      },
      apply: {
        title: 'Terraform Apply',
        description: 'Applies infrastructure changes',
        substages: {}
      },
      postValidation: {
        title: 'Post-Deployment Validation',
        description: 'Verifies deployment success',
        substages: {
          smoke: { name: 'Smoke Tests', description: 'Validates core functionality is operational' }
        }
      }
    };
    return details[stageName] || {};
  };

  const StageIndicator = ({ stage, title, stageName, deployment }) => (
    <button
      onClick={() => {
        setSelectedStage({ ...getStageDetails(stageName, stage), stage, stageName });
        setSelectedDeployment(deployment);
      }}
      className="p-1 hover:bg-gray-100 rounded-lg transition-colors group relative"
      title={`${title}: ${stage.status}`}
    >
      {getStatusIcon(stage.status, 'w-5 h-5')}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        {title}
      </div>
    </button>
  );

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8 flex items-center gap-4">
        <button
          onClick={onBack}
          className="p-2 hover:bg-white rounded-lg transition-colors border border-gray-200"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Deployment History</h1>
          <p className="text-gray-600">Component: {component}</p>
        </div>
      </div>

      {/* Deployment History Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="w-full">
          <table className="w-full table-fixed">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[10%]">User</th>
                <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[15%]">Target</th>
                <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[8%]">Env</th>
                <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[12%]">Pipeline</th>
                <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[8%]">Branch</th>
                <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[7%]">Version</th>
                <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[15%]">Time</th>
                <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[8%]">Status</th>
                <th className="px-2 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-[17%]">Stages</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {history.map((deployment) => (
                <tr key={deployment.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-2 py-3">
                    <div className="text-xs font-medium text-slate-900 truncate" title={deployment.triggeredBy}>
                      {deployment.triggeredBy}
                    </div>
                  </td>
                  <td className="px-2 py-3">
                    <span className="text-xs text-gray-600 font-mono truncate block" title={deployment.deploymentTarget}>
                      {deployment.deploymentTarget}
                    </span>
                  </td>
                  <td className="px-2 py-3">
                    <div>
                      <span className={`px-1.5 py-0.5 text-xs font-medium rounded ${
                        deployment.environment === 'Prod' 
                          ? 'bg-red-100 text-red-700'
                          : 'bg-blue-100 text-blue-700'
                      }`}>
                        {deployment.environment}
                      </span>
                      <div className="text-xs text-gray-500 mt-1 truncate">{deployment.environmentType}</div>
                    </div>
                  </td>
                  <td className="px-2 py-3">
                    <span className="text-xs text-gray-700 truncate block" title={deployment.pipeline}>
                      {deployment.pipeline.replace('Standard ', '')}
                    </span>
                  </td>
                  <td className="px-2 py-3">
                    <span className="text-xs text-gray-700 font-mono truncate block" title={deployment.branch}>
                      {deployment.branch}
                    </span>
                  </td>
                  <td className="px-2 py-3">
                    <span className="text-xs font-mono text-gray-700">{deployment.version}</span>
                  </td>
                  <td className="px-2 py-3">
                    <div className="text-xs text-gray-600">
                      <div className="truncate">{deployment.lastDeployment.split(' ')[0]}</div>
                      <div className="truncate text-gray-500">{deployment.lastDeployment.split(' ')[1]}</div>
                    </div>
                  </td>
                  <td className="px-2 py-3">
                    <span className={`px-1.5 py-0.5 text-xs font-medium rounded ${
                      deployment.status === 'Success' 
                        ? 'bg-green-100 text-green-700'
                        : deployment.status === 'Failure'
                        ? 'bg-red-100 text-red-700'
                        : 'bg-orange-100 text-orange-700'
                    }`}>
                      {deployment.status}
                    </span>
                  </td>
                  <td className="px-2 py-3">
                    <div className="flex justify-center gap-1">
                      <StageIndicator 
                        stage={deployment.stages.validate} 
                        title="Validate"
                        stageName="validate"
                        deployment={deployment}
                      />
                      <StageIndicator 
                        stage={deployment.stages.security} 
                        title="Security"
                        stageName="security"
                        deployment={deployment}
                      />
                      <StageIndicator 
                        stage={deployment.stages.init} 
                        title="Init"
                        stageName="init"
                        deployment={deployment}
                      />
                      <StageIndicator 
                        stage={deployment.stages.plan} 
                        title="Plan"
                        stageName="plan"
                        deployment={deployment}
                      />
                      <StageIndicator 
                        stage={deployment.stages.testing} 
                        title="Test"
                        stageName="testing"
                        deployment={deployment}
                      />
                      <StageIndicator 
                        stage={deployment.stages.apply} 
                        title="Apply"
                        stageName="apply"
                        deployment={deployment}
                      />
                      <StageIndicator 
                        stage={deployment.stages.postValidation} 
                        title="Post"
                        stageName="postValidation"
                        deployment={deployment}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {history.length === 0 && (
          <div className="text-center py-12">
            <Clock className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-600">No deployment history available for this component</p>
          </div>
        )}
      </div>

      {/* Stage Details Modal */}
      {selectedStage && (
        <StageDetailsModal
          stage={selectedStage}
          deployment={selectedDeployment}
          onClose={() => {
            setSelectedStage(null);
            setSelectedDeployment(null);
          }}
        />
      )}
    </div>
  );
};

// Stage Details Modal
const StageDetailsModal = ({ stage, deployment, onClose }) => {
  const getStatusColor = (status) => {
    switch(status) {
      case 'success': return 'text-green-600';
      case 'failure': return 'text-red-600';
      case 'warning': return 'text-orange-600';
      case 'not-run': return 'text-gray-400';
      default: return 'text-gray-500';
    }
  };

  const getStatusBg = (status) => {
    switch(status) {
      case 'success': return 'bg-green-50 border-green-200';
      case 'failure': return 'bg-red-50 border-red-200';
      case 'warning': return 'bg-orange-50 border-orange-200';
      case 'not-run': return 'bg-gray-50 border-gray-200';
      default: return 'bg-gray-50 border-gray-200';
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'success': return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'failure': return <XCircle className="w-5 h-5 text-red-600" />;
      case 'warning': return <AlertTriangle className="w-5 h-5 text-orange-600" />;
      case 'not-run': return <div className="w-5 h-5 border-2 border-gray-300 rounded-full" />;
      default: return <div className="w-5 h-5 border-2 border-gray-300 rounded-full" />;
    }
  };

  const getStatusMessage = (stageName, status) => {
    const messages = {
      validate: {
        success: 'Configuration validation completed successfully. All Terraform files are properly formatted and valid.',
        failure: 'Configuration validation failed. Found syntax errors or formatting issues in Terraform files.',
        warning: 'Configuration validation completed with warnings. Some non-critical issues were found.',
        'not-run': 'Validation stage was not executed.'
      },
      security: {
        success: 'Security scans passed. All policies are compliant with organizational standards.',
        failure: 'Security scan failed. Critical security violations detected that must be addressed.',
        warning: 'Security scan completed with warnings. Some policies need review but are not blocking.',
        'not-run': 'Security scanning stage was not executed.'
      },
      init: {
        success: 'Terraform initialization successful. All providers and modules downloaded.',
        failure: 'Terraform initialization failed. Check provider configuration and network connectivity.',
        warning: 'Terraform initialization completed with warnings.',
        'not-run': 'Terraform initialization was not executed.'
      },
      plan: {
        success: 'Terraform plan generated successfully. Ready to apply changes.',
        failure: 'Terraform plan failed. Unable to generate execution plan.',
        warning: 'Terraform plan completed with warnings. Review changes carefully.',
        'not-run': 'Terraform planning was not executed.'
      },
      testing: {
        success: 'All tests passed successfully. Infrastructure code meets quality standards.',
        failure: 'Testing failed. One or more test suites did not pass.',
        warning: 'Testing completed with warnings. Some non-critical tests failed.',
        'not-run': 'Testing stage was not executed.'
      },
      apply: {
        success: 'Infrastructure changes applied successfully. All resources deployed as planned.',
        failure: 'Terraform apply failed. Infrastructure changes were not completed.',
        warning: 'Terraform apply completed with warnings. Some resources may need attention.',
        'not-run': 'Terraform apply was not executed.'
      },
      postValidation: {
        success: 'Post-deployment validation successful. All systems are operational.',
        failure: 'Post-deployment validation failed. Deployed infrastructure is not functioning as expected.',
        warning: 'Post-deployment validation completed with warnings. Some checks need attention.',
        'not-run': 'Post-deployment validation was not executed.'
      }
    };
    return messages[stageName]?.[status] || 'No details available.';
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[80vh] overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <div className="flex items-center gap-3">
            {getStatusIcon(stage.stage.status)}
            <div>
              <h3 className="text-lg font-semibold text-slate-900">{stage.title}</h3>
              <p className="text-sm text-gray-600">{stage.description}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <XCircle className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(80vh-120px)]">
          {/* Deployment Info */}
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Deployment ID:</span>
                <span className="ml-2 font-medium text-slate-900">{deployment.id}</span>
              </div>
              <div>
                <span className="text-gray-600">Version:</span>
                <span className="ml-2 font-medium text-slate-900">{deployment.version}</span>
              </div>
              <div>
                <span className="text-gray-600">Branch:</span>
                <span className="ml-2 font-medium text-slate-900 font-mono">{deployment.branch}</span>
              </div>
              <div>
                <span className="text-gray-600">Time:</span>
                <span className="ml-2 font-medium text-slate-900">{deployment.lastDeployment}</span>
              </div>
            </div>
          </div>

          {/* Stage Status */}
          <div className={`mb-6 p-4 border rounded-lg ${getStatusBg(stage.stage.status)}`}>
            <div className="flex items-center gap-2 mb-2">
              <span className={`text-sm font-medium uppercase ${getStatusColor(stage.stage.status)}`}>
                Stage {stage.stage.status}
              </span>
            </div>
            <p className="text-sm text-gray-700">
              {getStatusMessage(stage.stageName, stage.stage.status)}
            </p>
          </div>

          {/* Substages if available */}
          {stage.stage.substages && Object.keys(stage.stage.substages).length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-slate-900 mb-3">Substage Details</h4>
              <div className="space-y-3">
                {Object.entries(stage.stage.substages).map(([key, status]) => (
                  <div key={key} className={`p-3 border rounded-lg ${getStatusBg(status)}`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {getStatusIcon(status)}
                        <div>
                          <p className="font-medium text-sm text-slate-900">
                            {stage.substages[key]?.name || key}
                          </p>
                          <p className="text-xs text-gray-600 mt-1">
                            {stage.substages[key]?.description || 'No description available'}
                          </p>
                        </div>
                      </div>
                      <span className={`text-xs font-medium uppercase ${getStatusColor(status)}`}>
                        {status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Logs/Output Section */}
          {stage.stage.status !== 'not-run' && (
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-slate-900 mb-3">Execution Logs</h4>
              <div className="bg-gray-900 text-gray-300 p-4 rounded-lg font-mono text-xs overflow-x-auto">
                {stage.stage.status === 'success' && (
                  <div>
                    <div className="text-green-400">✓ Stage execution started at {deployment.lastDeployment}</div>
                    <div className="text-gray-400 mt-1">Running {stage.title.toLowerCase()}...</div>
                    <div className="text-green-400 mt-1">✓ All checks passed successfully</div>
                    <div className="text-gray-400 mt-1">Stage completed in 2.3 seconds</div>
                  </div>
                )}
                {stage.stage.status === 'failure' && (
                  <div>
                    <div className="text-yellow-400">→ Stage execution started at {deployment.lastDeployment}</div>
                    <div className="text-gray-400 mt-1">Running {stage.title.toLowerCase()}...</div>
                    <div className="text-red-400 mt-1">✗ Error: Stage validation failed</div>
                    <div className="text-red-400 mt-1">  Details: {stage.stageName === 'security' ? 'Security policy violation detected' : 'Unexpected error occurred'}</div>
                    <div className="text-gray-400 mt-1">Stage failed after 1.8 seconds</div>
                  </div>
                )}
                {stage.stage.status === 'warning' && (
                  <div>
                    <div className="text-yellow-400">→ Stage execution started at {deployment.lastDeployment}</div>
                    <div className="text-gray-400 mt-1">Running {stage.title.toLowerCase()}...</div>
                    <div className="text-orange-400 mt-1">⚠ Warning: Non-critical issues detected</div>
                    <div className="text-gray-400 mt-1">Stage completed with warnings in 3.1 seconds</div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

// Enhanced Financial Dashboard
const FinancialDashboard = () => {
  const [selectedProject, setSelectedProject] = useState('All Projects');
  const [selectedEnvironment, setSelectedEnvironment] = useState('All Environments');
  const [selectedComponent, setSelectedComponent] = useState('All Components');
  const [selectedTimeframe, setSelectedTimeframe] = useState('July 2025');
  const [viewMode, setViewMode] = useState('overview'); // 'overview', 'project-drill', 'component-drill'
  const [drilldownTarget, setDrilldownTarget] = useState(null);
  const [chartView, setChartView] = useState('Daily'); // 'Daily', 'Weekly', 'Monthly'
  const [hoveredPoint, setHoveredPoint] = useState(null);
  const [isHeroAICostPanelExpanded, setIsHeroAICostPanelExpanded] = useState(true);
  const [isCostAnomaliesPanelExpanded, setIsCostAnomaliesPanelExpanded] = useState(true);

  // Comprehensive financial data with nested structure for drill-downs
  const financialData = {
    "All Projects": {
      "All Environments": {
        "All Components": {
          currentSpend: 47284,
          monthlyBudget: 52000,
          forecastedSpend: 49750,
          budgetUtilization: 90.9,
          costTrend: 12.4,
          burnRate: 1642,
          avgDailyCost: 1576,
          totalSavingsPotential: 3420
        }
      }
    },
    "EDP Core": {
      "All Environments": {
        "All Components": {
          currentSpend: 18245,
          monthlyBudget: 20000,
          forecastedSpend: 19340,
          budgetUtilization: 91.2,
          costTrend: 8.7,
          burnRate: 634,
          avgDailyCost: 612,
          totalSavingsPotential: 1250
        }
      },
      "Production": {
        "All Components": {
          currentSpend: 12400,
          monthlyBudget: 14000,
          forecastedSpend: 13100,
          budgetUtilization: 88.6,
          costTrend: 6.2,
          burnRate: 430,
          avgDailyCost: 415,
          totalSavingsPotential: 820
        },
        "API Gateway": { currentSpend: 2890, monthlyBudget: 3200, forecastedSpend: 3050, costTrend: 5.2 },
        "Database": { currentSpend: 4200, monthlyBudget: 4800, forecastedSpend: 4450, costTrend: 8.1 },
        "Load Balancer": { currentSpend: 1840, monthlyBudget: 2000, forecastedSpend: 1920, costTrend: 4.3 },
        "Web Application": { currentSpend: 2170, monthlyBudget: 2500, forecastedSpend: 2280, costTrend: 7.8 },
        "Storage": { currentSpend: 1300, monthlyBudget: 1500, forecastedSpend: 1400, costTrend: 9.2 }
      },
      "Staging": {
        "All Components": {
          currentSpend: 3845,
          monthlyBudget: 4000,
          forecastedSpend: 4080,
          budgetUtilization: 96.1,
          costTrend: 15.3,
          burnRate: 134,
          avgDailyCost: 129,
          totalSavingsPotential: 280
        }
      },
      "Development": {
        "All Components": {
          currentSpend: 2000,
          monthlyBudget: 2000,
          forecastedSpend: 2160,
          budgetUtilization: 100.0,
          costTrend: 18.2,
          burnRate: 70,
          avgDailyCost: 68,
          totalSavingsPotential: 150
        }
      }
    },
    "TelmaAI": {
      "All Environments": {
        "All Components": {
          currentSpend: 12680,
          monthlyBudget: 12000,
          forecastedSpend: 13420,
          budgetUtilization: 105.7,
          costTrend: 22.1,
          burnRate: 441,
          avgDailyCost: 425,
          totalSavingsPotential: 890
        }
      },
      "Production": {
        "All Components": {
          currentSpend: 8950,
          monthlyBudget: 8500,
          forecastedSpend: 9480,
          budgetUtilization: 105.3,
          costTrend: 24.7,
          burnRate: 311,
          avgDailyCost: 300,
          totalSavingsPotential: 620
        }
      }
    },
    "Corrigo Core": {
      "All Environments": {
        "All Components": {
          currentSpend: 9841,
          monthlyBudget: 12000,
          forecastedSpend: 10420,
          budgetUtilization: 82.0,
          costTrend: 5.8,
          burnRate: 342,
          avgDailyCost: 330,
          totalSavingsPotential: 680
        }
      }
    },
    "ScheduleAI": {
      "All Environments": {
        "All Components": {
          currentSpend: 6518,
          monthlyBudget: 8000,
          forecastedSpend: 6970,
          budgetUtilization: 81.5,
          costTrend: -2.3,
          burnRate: 227,
          avgDailyCost: 219,
          totalSavingsPotential: 600
        }
      }
    }
  };

  // Generate chart data based on selections and view mode
  const generateChartData = () => {
    const currentMetrics = getCurrentMetrics();
    const baseDaily = currentMetrics.avgDailyCost || 1576;
    
    // Generate realistic historical and forecast data
    const generateDataPoints = (days, startValue, volatility = 0.15) => {
      const points = [];
      let currentValue = startValue;
      
      for (let i = 0; i < days; i++) {
        // Add some realistic variance and trends
        const randomFactor = (Math.random() - 0.5) * volatility;
        const trendFactor = selectedProject === 'TelmaAI' ? 0.002 : selectedProject === 'ScheduleAI' ? -0.001 : 0.0005;
        currentValue = Math.max(0, currentValue * (1 + randomFactor + trendFactor));
        points.push(currentValue);
      }
      return points;
    };

    const today = new Date();
    const formatDate = (date, view) => {
      if (view === 'Daily') return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      if (view === 'Weekly') return `Week ${Math.ceil(date.getDate() / 7)}`;
      return date.toLocaleDateString('en-US', { month: 'short' });
    };

    if (chartView === 'Daily') {
      // Last 15 days historical + 16 days forecast
      const historical = generateDataPoints(15, baseDaily * 0.9);
      const forecast = generateDataPoints(16, historical[historical.length - 1], 0.1);
      
      return {
        labels: Array.from({length: 31}, (_, i) => {
          const date = new Date(today);
          date.setDate(date.getDate() - 15 + i);
          return formatDate(date, 'Daily');
        }),
        historical: historical,
        forecast: forecast,
        budget: Array(31).fill(currentMetrics.monthlyBudget / 31),
        actualSpend: [...historical, ...Array(16).fill(null)],
        forecastSpend: [...Array(15).fill(null), ...forecast]
      };
    } else if (chartView === 'Weekly') {
      // Last 8 weeks historical + 8 weeks forecast
      const weeklyBase = baseDaily * 7;
      const historical = generateDataPoints(8, weeklyBase * 0.9);
      const forecast = generateDataPoints(8, historical[historical.length - 1], 0.12);
      
      return {
        labels: Array.from({length: 16}, (_, i) => {
          const date = new Date(today);
          date.setDate(date.getDate() - (8 - i) * 7);
          return formatDate(date, 'Weekly');
        }),
        historical: historical,
        forecast: forecast,
        budget: Array(16).fill(currentMetrics.monthlyBudget / 4),
        actualSpend: [...historical, ...Array(8).fill(null)],
        forecastSpend: [...Array(8).fill(null), ...forecast]
      };
    } else {
      // Last 6 months historical + 6 months forecast
      const monthlyBase = baseDaily * 30;
      const historical = generateDataPoints(6, monthlyBase * 0.85);
      const forecast = generateDataPoints(6, historical[historical.length - 1], 0.08);
      
      return {
        labels: Array.from({length: 12}, (_, i) => {
          const date = new Date(today);
          date.setMonth(date.getMonth() - 6 + i);
          return formatDate(date, 'Monthly');
        }),
        historical: historical,
        forecast: forecast,
        budget: Array(12).fill(currentMetrics.monthlyBudget),
        actualSpend: [...historical, ...Array(6).fill(null)],
        forecastSpend: [...Array(6).fill(null), ...forecast]
      };
    }
  };

  // Get current financial metrics based on selections
  const getCurrentMetrics = () => {
    const projectData = financialData[selectedProject] || financialData["All Projects"];
    const envData = projectData[selectedEnvironment] || projectData["All Environments"];
    const componentData = envData[selectedComponent] || envData["All Components"];
    return componentData;
  };

  const currentMetrics = getCurrentMetrics();
  const chartData = generateChartData();

  // Simple Stable Bar Chart Component
  const InteractiveCostChart = ({ data }) => {
    const [tooltip, setTooltip] = useState(null);
    
    // Chart dimensions - responsive width
    const height = 300;
    const margin = { top: 20, right: 40, bottom: 60, left: 70 };
    const containerWidth = "100%";
    
    // Use a ref to get actual container width
    const [containerRef, setContainerRef] = useState(null);
    const [actualWidth, setActualWidth] = useState(800);
    
    // Update width when container ref changes
    useEffect(() => {
      if (containerRef) {
        const updateWidth = () => {
          const rect = containerRef.getBoundingClientRect();
          setActualWidth(rect.width);
        };
        
        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
      }
    }, [containerRef]);
    
    const width = actualWidth;
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;
    
    // Calculate scales
    const allValues = [...data.historical, ...data.forecast].filter(v => v !== null);
    const maxValue = Math.max(...allValues, data.budget[0]);
    const yScale = (value) => (1 - value / maxValue) * chartHeight;
    
    // Bar calculations
    const totalBars = data.labels.length;
    const barWidth = chartWidth / totalBars * 0.8; // 80% width for bars, 20% for spacing
    const barSpacing = chartWidth / totalBars * 0.2;
    
    const getBarX = (index) => margin.left + (index * chartWidth / totalBars) + (barSpacing / 2);
    
    // Handle mouse events
    const handleMouseEnter = (event, type, index, value, label) => {
      const rect = event.currentTarget.getBoundingClientRect();
      setTooltip({
        x: rect.left + rect.width / 2,
        y: rect.top,
        type,
        value,
        label,
        isOverBudget: value > data.budget[0]
      });
    };
    
    const handleMouseLeave = () => {
      setTooltip(null);
    };

    return (
      <div 
        className="w-full"
        ref={setContainerRef}
      >
        <div className="relative w-full">
          {/* Main Chart */}
          <svg width={width} height={height} className="bg-white rounded-lg border w-full">
            {/* Grid lines */}
            {[0, 0.25, 0.5, 0.75, 1].map((ratio) => (
              <line
                key={ratio}
                x1={margin.left}
                y1={margin.top + chartHeight * ratio}
                x2={margin.left + chartWidth}
                y2={margin.top + chartHeight * ratio}
                stroke="#f1f5f9"
                strokeWidth="1"
                strokeDasharray={ratio === 1 ? "0" : "3,3"}
              />
            ))}
            
            {/* Y-axis labels */}
            {[0, 0.25, 0.5, 0.75, 1].map((ratio) => (
              <text
                key={ratio}
                x={margin.left - 10}
                y={margin.top + chartHeight * ratio + 4}
                textAnchor="end"
                className="text-xs fill-gray-600"
              >
                ${Math.round((1 - ratio) * maxValue / 1000)}k
              </text>
            ))}
            
            {/* Budget line */}
            <line
              x1={margin.left}
              y1={margin.top + yScale(data.budget[0])}
              x2={margin.left + chartWidth}
              y2={margin.top + yScale(data.budget[0])}
              stroke="#ef4444"
              strokeWidth="2"
              strokeDasharray="5,5"
              opacity="0.7"
            />
            
            {/* Budget label */}
            <text
              x={margin.left + chartWidth - 5}
              y={margin.top + yScale(data.budget[0]) - 5}
              textAnchor="end"
              className="text-xs fill-red-600 font-medium"
            >
              Budget
            </text>
            
            {/* Historical bars */}
            {data.historical.map((value, index) => (
              <rect
                key={`hist-${index}`}
                x={getBarX(index)}
                y={margin.top + yScale(value)}
                width={barWidth}
                height={chartHeight - yScale(value)}
                fill={value > data.budget[0] ? "#ef4444" : "#3b82f6"}
                className="cursor-pointer transition-opacity duration-200 hover:opacity-80"
                onMouseEnter={(e) => handleMouseEnter(e, 'historical', index, value, data.labels[index])}
                onMouseLeave={handleMouseLeave}
              />
            ))}
            
            {/* Forecast bars */}
            {data.forecast.map((value, index) => {
              const actualIndex = index + data.historical.length;
              return (
                <g key={`forecast-${index}`}>
                  <rect
                    x={getBarX(actualIndex)}
                    y={margin.top + yScale(value)}
                    width={barWidth}
                    height={chartHeight - yScale(value)}
                    fill={value > data.budget[0] ? "#f87171" : "#8b5cf6"}
                    opacity="0.7"
                    className="cursor-pointer transition-opacity duration-200 hover:opacity-90"
                    onMouseEnter={(e) => handleMouseEnter(e, 'forecast', index, value, data.labels[actualIndex])}
                    onMouseLeave={handleMouseLeave}
                  />
                  <rect
                    x={getBarX(actualIndex)}
                    y={margin.top + yScale(value)}
                    width={barWidth}
                    height={chartHeight - yScale(value)}
                    fill="none"
                    stroke="#8b5cf6"
                    strokeWidth="1"
                    strokeDasharray="3,2"
                    opacity="0.8"
                  />
                </g>
              );
            })}
            
            {/* Divider line */}
            <line
              x1={getBarX(data.historical.length) - barSpacing / 2}
              y1={margin.top}
              x2={getBarX(data.historical.length) - barSpacing / 2}
              y2={margin.top + chartHeight}
              stroke="#d1d5db"
              strokeWidth="2"
              strokeDasharray="4,4"
              opacity="0.6"
            />
            
            {/* X-axis labels */}
            {data.labels.map((label, index) => {
              const showLabel = chartView === 'Daily' ? index % 3 === 0 : 
                              chartView === 'Weekly' ? index % 2 === 0 : true;
              return showLabel ? (
                <text
                  key={index}
                  x={getBarX(index) + barWidth / 2}
                  y={height - 10}
                  textAnchor="middle"
                  className="text-xs fill-gray-600"
                >
                  {label}
                </text>
              ) : null;
            })}
            
            {/* Section labels */}
            <text
              x={margin.left + chartWidth * 0.25}
              y={margin.top - 5}
              textAnchor="middle"
              className="text-sm fill-gray-700 font-medium"
            >
              Historical
            </text>
            <text
              x={margin.left + chartWidth * 0.75}
              y={margin.top - 5}
              textAnchor="middle"
              className="text-sm fill-gray-700 font-medium"
            >
              Forecast
            </text>
          </svg>
          
          {/* Tooltip */}
          {tooltip && (
            <div
              className="fixed bg-gray-900 text-white px-3 py-2 rounded-lg text-sm shadow-lg z-50 pointer-events-none"
              style={{
                left: tooltip.x - 60,
                top: tooltip.y - 80
              }}
            >
              <div className="font-medium">{tooltip.label}</div>
              <div className="text-blue-300">
                ${Math.round(tooltip.value).toLocaleString()}
              </div>
              <div className="text-xs text-gray-300">
                {tooltip.type === 'historical' ? 'Actual' : 'Forecast'}
              </div>
              {tooltip.isOverBudget && (
                <div className="text-xs text-red-300">Over Budget</div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  };

  // Enhanced cost anomalies based on selections
  const getCostAnomalies = () => {
    const baseAnomalies = [
      {
        id: 1,
        severity: 'critical',
        title: 'TelmaAI Project - Budget Exceeded',
        description: 'Current spend: $12,680 | Budget: $12,000 | Overage: $680 (5.7%)',
        project: 'TelmaAI',
        environment: 'Production',
        component: 'ML Training Instances',
        time: '2 hours ago',
        impact: '$680',
        recommendation: 'Scale down training instances during off-peak hours'
      },
      {
        id: 2,
        severity: 'warning',
        title: 'Azure VM Costs Spike - EDP Core',
        description: 'Daily cost increased by 45% ($156 → $226) - Check vm-web-03 instance',
        project: 'EDP Core',
        environment: 'Production',
        component: 'Web Application',
        time: '5 hours ago',
        impact: '$70/day',
        recommendation: 'Right-size VM instance or enable auto-scaling'
      },
      {
        id: 3,
        severity: 'warning',
        title: 'Storage Costs Growing - Corrigo Core',
        description: 'Database storage costs increased 28% over last 7 days',
        project: 'Corrigo Core',
        environment: 'Production',
        component: 'Database',
        time: '1 day ago',
        impact: '$42/day',
        recommendation: 'Archive old data or implement data lifecycle policies'
      },
      {
        id: 4,
        severity: 'info',
        title: 'Unused Resources Detected',
        description: '5 idle load balancers consuming $180/month across all projects',
        project: 'Multiple',
        environment: 'Staging',
        component: 'Load Balancer',
        time: '2 days ago',
        impact: '$180/month',
        recommendation: 'Remove unused staging load balancers'
      }
    ];

    // Filter anomalies based on current selections
    return baseAnomalies.filter(anomaly => {
      if (selectedProject !== 'All Projects' && anomaly.project !== selectedProject && anomaly.project !== 'Multiple') return false;
      if (selectedEnvironment !== 'All Environments' && anomaly.environment !== selectedEnvironment) return false;
      if (selectedComponent !== 'All Components' && anomaly.component !== selectedComponent) return false;
      return true;
    });
  };

  // HeroAI Cost Optimization Recommendations
  const getHeroAIRecommendations = () => {
    const baseRecommendations = [
      {
        id: 1,
        priority: 'high',
        title: 'Right-size Overprovisioned Resources',
        description: 'Machine learning analysis identified 12 oversized VM instances across production environments',
        projects: ['EDP Core', 'TelmaAI', 'Corrigo Core'],
        monthlySavings: 2340,
        confidenceScore: 94,
        implementation: 'Automated - 1-click deployment',
        timeToImplement: '15 minutes',
        riskLevel: 'low',
        details: {
          resourceCount: 12,
          avgUtilization: '23%',
          recommendedAction: 'Downgrade from Standard_D4s_v3 to Standard_D2s_v3',
          affectedServices: ['Web Apps', 'API Services', 'Background Jobs']
        }
      },
      {
        id: 2,
        priority: 'high',
        title: 'Optimize Data Storage Lifecycle',
        description: 'Intelligent tiering can move 2.4TB of cold data to cheaper storage tiers',
        projects: ['EDP Core', 'Corrigo Core'],
        monthlySavings: 890,
        confidenceScore: 91,
        implementation: 'Policy-based automation',
        timeToImplement: '30 minutes',
        riskLevel: 'very-low',
        details: {
          dataVolume: '2.4TB',
          currentTier: 'Hot Storage',
          recommendedTier: 'Cool/Archive',
          accessPattern: 'Less than 3 times per month'
        }
      },
      {
        id: 3,
        priority: 'medium',
        title: 'Reserved Instance Opportunities',
        description: 'Lock in discounts with reserved instances for consistent workloads',
        projects: ['TelmaAI', 'ScheduleAI'],
        monthlySavings: 1280,
        confidenceScore: 87,
        implementation: 'Manual purchase required',
        timeToImplement: '2 hours',
        riskLevel: 'low',
        details: {
          instanceTypes: ['Standard_D8s_v3', 'Standard_E4s_v3'],
          commitmentPeriod: '12 months',
          potentialDiscount: '42%'
        }
      },
      {
        id: 4,
        priority: 'medium',
        title: 'Automated Scaling Optimization',
        description: 'Enable intelligent auto-scaling to match resource usage with demand',
        projects: ['All Projects'],
        monthlySavings: 1560,
        confidenceScore: 82,
        implementation: 'Configuration update',
        timeToImplement: '45 minutes',
        riskLevel: 'medium',
        details: {
          currentScaling: 'Manual',
          recommendedStrategy: 'Predictive auto-scaling',
          avgLoadVariation: '67%'
        }
      },
      {
        id: 5,
        priority: 'low',
        title: 'Container Resource Optimization',
        description: 'Kubernetes pod resource limits can be optimized based on actual usage patterns',
        projects: ['TelmaAI', 'ScheduleAI'],
        monthlySavings: 420,
        confidenceScore: 78,
        implementation: 'YAML configuration update',
        timeToImplement: '1 hour',
        riskLevel: 'medium',
        details: {
          podCount: 45,
          avgMemoryUtil: '34%',
          avgCpuUtil: '28%',
          recommendedAction: 'Reduce resource requests by 40%'
        }
      }
    ];

    // Filter and sort by project selection
    let filtered = baseRecommendations;
    if (selectedProject !== 'All Projects') {
      filtered = baseRecommendations.filter(rec => 
        rec.projects.includes(selectedProject) || rec.projects.includes('All Projects')
      );
    }

    return filtered.sort((a, b) => {
      const priorityOrder = { 'high': 3, 'medium': 2, 'low': 1 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    });
  };

  const handleDrillDown = (type, target) => {
    setViewMode(`${type}-drill`);
    setDrilldownTarget(target);
  };

  return (
    <div className="p-8 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      {/* Header with Advanced Filters */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h2 className="text-4xl font-bold text-slate-900 mb-2">Financial Analytics Dashboard</h2>
          <p className="text-gray-600">Enterprise cost intelligence with HeroAI optimization</p>
        </div>
        
        <div className="flex gap-3">
          <select 
            className="px-4 py-2 border border-gray-200 rounded-lg bg-white text-slate-900 font-medium text-sm"
            value={selectedProject}
            onChange={(e) => setSelectedProject(e.target.value)}
          >
            <option>All Projects</option>
            <option>EDP Core</option>
            <option>TelmaAI</option>
            <option>Corrigo Core</option>
            <option>ScheduleAI</option>
          </select>
          
          <select 
            className="px-4 py-2 border border-gray-200 rounded-lg bg-white text-slate-900 font-medium text-sm"
            value={selectedEnvironment}
            onChange={(e) => setSelectedEnvironment(e.target.value)}
          >
            <option>All Environments</option>
            <option>Production</option>
            <option>Staging</option>
            <option>Development</option>
          </select>
          
          <select 
            className="px-4 py-2 border border-gray-200 rounded-lg bg-white text-slate-900 font-medium text-sm"
            value={selectedComponent}
            onChange={(e) => setSelectedComponent(e.target.value)}
          >
            <option>All Components</option>
            <option>API Gateway</option>
            <option>Database</option>
            <option>Load Balancer</option>
            <option>Web Application</option>
            <option>Storage</option>
            <option>Container Registry</option>
            <option>Kubernetes Cluster</option>
            <option>CDN</option>
            <option>Monitoring</option>
          </select>
          
          <select 
            className="px-4 py-2 border border-gray-200 rounded-lg bg-white text-slate-900 font-medium text-sm"
            value={selectedTimeframe}
            onChange={(e) => setSelectedTimeframe(e.target.value)}
          >
            <option>July 2025</option>
            <option>June 2025</option>
            <option>May 2025</option>
            <option>Q2 2025</option>
            <option>YTD 2025</option>
          </select>
          
          <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:shadow-lg transition-all font-medium text-sm">
            <Download className="w-4 h-4 inline mr-2" />
            Export
          </button>
        </div>
      </div>

      {/* Key Financial Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-blue-600" />
            </div>
            <div className={`flex items-center gap-1 ${currentMetrics.costTrend >= 0 ? 'text-orange-600' : 'text-green-600'}`}>
              {currentMetrics.costTrend >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
              <span className="text-xs font-medium">{Math.abs(currentMetrics.costTrend)}%</span>
            </div>
          </div>
          <div className="text-2xl font-bold text-slate-900 mb-1">${currentMetrics.currentSpend?.toLocaleString() || '0'}</div>
          <p className="text-sm text-gray-600">Current Spend</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <Target className="w-5 h-5 text-green-600" />
            </div>
            <div className={`flex items-center gap-1 ${currentMetrics.budgetUtilization > 95 ? 'text-red-600' : currentMetrics.budgetUtilization > 80 ? 'text-orange-600' : 'text-green-600'}`}>
              <span className="text-xs font-medium">{currentMetrics.budgetUtilization?.toFixed(1) || '0'}%</span>
            </div>
          </div>
          <div className="text-2xl font-bold text-slate-900 mb-1">${currentMetrics.monthlyBudget?.toLocaleString() || '0'}</div>
          <p className="text-sm text-gray-600">Monthly Budget</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-purple-600" />
            </div>
            <div className="flex items-center gap-1 text-purple-600">
              <Clock className="w-4 h-4" />
              <span className="text-xs font-medium">EOM</span>
            </div>
          </div>
          <div className="text-2xl font-bold text-slate-900 mb-1">${currentMetrics.forecastedSpend?.toLocaleString() || '0'}</div>
          <p className="text-sm text-gray-600">Forecasted</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-red-600" />
            </div>
            <div className="flex items-center gap-1 text-slate-600">
              <span className="text-xs font-medium">per day</span>
            </div>
          </div>
          <div className="text-2xl font-bold text-slate-900 mb-1">${currentMetrics.burnRate?.toLocaleString() || '0'}</div>
          <p className="text-sm text-gray-600">Burn Rate</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-orange-600" />
            </div>
            <div className="flex items-center gap-1 text-slate-600">
              <span className="text-xs font-medium">avg</span>
            </div>
          </div>
          <div className="text-2xl font-bold text-slate-900 mb-1">${currentMetrics.avgDailyCost?.toLocaleString() || '0'}</div>
          <p className="text-sm text-gray-600">Daily Cost</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-emerald-600" />
            </div>
            <div className="flex items-center gap-1 text-emerald-600">
              <span className="text-xs font-medium">HeroAI</span>
            </div>
          </div>
          <div className="text-2xl font-bold text-slate-900 mb-1">${currentMetrics.totalSavingsPotential?.toLocaleString() || '0'}</div>
          <p className="text-sm text-gray-600">Savings Potential</p>
        </div>
      </div>

      {/* HeroAI Cost Optimization Recommendations */}
      <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 border border-purple-200 rounded-2xl mb-8 shadow-sm overflow-hidden transition-all duration-300">
        {/* Panel Header - Always Visible */}
        <div 
          className="flex items-center justify-between p-8 cursor-pointer hover:bg-white/30 transition-colors"
          onClick={() => setIsHeroAICostPanelExpanded(!isHeroAICostPanelExpanded)}
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent mb-2">
                HeroAI Cost Optimization
              </h3>
              <p className="text-gray-600">AI-powered recommendations to reduce your cloud spend</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {/* Summary when collapsed */}
            {!isHeroAICostPanelExpanded && (
              <div className="flex items-center gap-2">
                <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium flex items-center gap-1">
                  <DollarSign className="w-4 h-4" />
                  ${getHeroAIRecommendations().reduce((sum, rec) => sum + rec.monthlySavings, 0).toLocaleString()}
                </div>
                <div className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  {getHeroAIRecommendations().length} recommendations
                </div>
              </div>
            )}
            <button className="p-2 hover:bg-white/50 rounded-xl transition-colors">
              <ChevronRight className={`w-5 h-5 text-purple-600 transition-transform duration-300 ${isHeroAICostPanelExpanded ? 'rotate-90' : ''}`} />
            </button>
          </div>
        </div>

        {/* Panel Content - Collapsible */}
        <div className={`transition-all duration-300 ease-in-out ${isHeroAICostPanelExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="px-8 pb-8">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-purple-200/50">
              <div className="flex items-center justify-between mb-6">
                <div className="text-right">
                  <div className="text-3xl font-bold text-purple-700">${getHeroAIRecommendations().reduce((sum, rec) => sum + rec.monthlySavings, 0).toLocaleString()}</div>
                  <div className="text-purple-600 text-sm font-medium">Total Monthly Savings Potential</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {getHeroAIRecommendations().slice(0, 3).map((rec) => (
                  <div key={rec.id} className="bg-white rounded-lg p-4 border border-purple-200/30 hover:shadow-md transition-all cursor-pointer">
                    <div className="flex items-start justify-between mb-3">
                      <div className={`px-2 py-1 rounded text-xs font-medium text-white ${
                        rec.priority === 'high' ? 'bg-red-500' : rec.priority === 'medium' ? 'bg-orange-500' : 'bg-blue-500'
                      }`}>
                        {rec.priority.toUpperCase()}
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-purple-700">${rec.monthlySavings.toLocaleString()}</div>
                        <div className="text-xs text-purple-600">per month</div>
                      </div>
                    </div>
                    
                    <h4 className="font-bold mb-2 text-gray-900">{rec.title}</h4>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{rec.description}</p>
                    
                    <div className="flex justify-between items-center text-xs">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-gray-600">{rec.confidenceScore}% confidence</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-gray-500" />
                        <span className="text-gray-600">{rec.timeToImplement}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center">
                <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:shadow-lg transition-all">
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    View All Recommendations
                  </div>
                </button>
              </div>

              {/* AI Processing Indicator */}
              <div className="mt-6 pt-4 border-t border-purple-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-purple-700">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                    <span>Cost analysis generated by HeroAI • Last updated: {new Date().toLocaleTimeString()}</span>
                  </div>
                  <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      Refresh Analysis
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Spending Alerts */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8 overflow-hidden transition-all duration-300">
        {/* Panel Header - Always Visible */}
        <div 
          className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors"
          onClick={() => setIsCostAnomaliesPanelExpanded(!isCostAnomaliesPanelExpanded)}
        >
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-6 h-6 text-red-600" />
            <h3 className="text-slate-900 font-bold text-xl">Cost Anomalies & Alerts</h3>
            <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm">{getCostAnomalies().length}</span>
            {/* Summary when collapsed */}
            {!isCostAnomaliesPanelExpanded && (
              <div className="flex items-center gap-2 ml-4">
                <div className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                  {getCostAnomalies().filter(a => a.severity === 'critical').length} critical
                </div>
                <div className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                  {getCostAnomalies().filter(a => a.severity === 'warning').length} warnings
                </div>
              </div>
            )}
          </div>
          <div className="flex items-center gap-4">
            {isCostAnomaliesPanelExpanded && (
              <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm hover:bg-slate-200 transition-colors">
                Configure Alerts
              </button>
            )}
            <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
              <ChevronRight className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${isCostAnomaliesPanelExpanded ? 'rotate-90' : ''}`} />
            </button>
          </div>
        </div>

        {/* Panel Content - Collapsible */}
        <div className={`transition-all duration-300 ease-in-out ${isCostAnomaliesPanelExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="px-6 pb-6">
        
        <div className="space-y-4">
          {getCostAnomalies().map((anomaly) => (
            <div key={anomaly.id} className={`flex items-start gap-4 p-4 border-l-4 rounded-xl ${
              anomaly.severity === 'critical' ? 'bg-red-50 border-red-500' :
              anomaly.severity === 'warning' ? 'bg-orange-50 border-orange-500' :
              'bg-blue-50 border-blue-500'
            }`}>
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                anomaly.severity === 'critical' ? 'bg-red-100' :
                anomaly.severity === 'warning' ? 'bg-orange-100' :
                'bg-blue-100'
              }`}>
                <AlertTriangle className={`w-4 h-4 ${
                  anomaly.severity === 'critical' ? 'text-red-600' :
                  anomaly.severity === 'warning' ? 'text-orange-600' :
                  'text-blue-600'
                }`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className={`font-bold mb-1 ${
                  anomaly.severity === 'critical' ? 'text-red-600' :
                  anomaly.severity === 'warning' ? 'text-orange-700' :
                  'text-blue-700'
                }`}>
                  {anomaly.title}
                </div>
                <div className="text-gray-600 text-sm mb-2">{anomaly.description}</div>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span>Project: {anomaly.project}</span>
                  <span>Environment: {anomaly.environment}</span>
                  <span>Impact: {anomaly.impact}</span>
                  <span>{anomaly.time}</span>
                </div>
                <div className="mt-2 p-2 bg-white rounded text-xs text-gray-700">
                  <strong>Recommendation:</strong> {anomaly.recommendation}
                </div>
              </div>
              <button className="px-3 py-1 bg-white border border-gray-300 rounded text-sm hover:bg-gray-50 transition-colors">
                Resolve
              </button>
            </div>
          ))}
          </div>
          </div>
        </div>
      </div>

      {/* Main Dashboard Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Cost Forecast & Trends */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-slate-900 font-bold text-xl">Cost Trends & Forecast</h3>
            <div className="flex gap-2">
              <button 
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  chartView === 'Daily' ? 'bg-blue-100 text-blue-700' : 'text-slate-600 hover:bg-gray-100'
                }`}
                onClick={() => setChartView('Daily')}
              >
                Daily
              </button>
              <button 
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  chartView === 'Weekly' ? 'bg-blue-100 text-blue-700' : 'text-slate-600 hover:bg-gray-100'
                }`}
                onClick={() => setChartView('Weekly')}
              >
                Weekly
              </button>
              <button 
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  chartView === 'Monthly' ? 'bg-blue-100 text-blue-700' : 'text-slate-600 hover:bg-gray-100'
                }`}
                onClick={() => setChartView('Monthly')}
              >
                Monthly
              </button>
            </div>
          </div>
          
          {/* Forecast Summary */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
              <div className="text-2xl font-bold text-blue-700">${(currentMetrics.forecastedSpend - currentMetrics.currentSpend).toLocaleString()}</div>
              <div className="text-sm text-blue-600">Projected Additional</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
              <div className="text-2xl font-bold text-green-700">
                {currentMetrics.forecastedSpend < currentMetrics.monthlyBudget ? 'Under' : 'Over'}
              </div>
              <div className="text-sm text-green-600">Budget Status</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
              <div className="text-2xl font-bold text-purple-700">
                ${Math.abs(currentMetrics.monthlyBudget - currentMetrics.forecastedSpend).toLocaleString()}
              </div>
              <div className="text-sm text-purple-600">Variance</div>
            </div>
          </div>
          
          {/* Interactive Chart */}
          <div className="bg-gray-50 rounded-lg p-4">
            <InteractiveCostChart data={chartData} />
          </div>

          {/* Chart Legend */}
          <div className="flex justify-center gap-6 mt-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-6 bg-gradient-to-b from-blue-500 to-blue-700 rounded"></div>
              <span className="text-gray-700">Historical Spend</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-6 bg-gradient-to-b from-purple-500 to-purple-700 rounded relative overflow-hidden">
                <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 1px, white 1px, white 2px)' }}></div>
              </div>
              <span className="text-gray-700">Forecast Spend</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-1 bg-red-500 opacity-70" style={{ backgroundImage: 'repeating-linear-gradient(90deg, red 0px, red 4px, transparent 4px, transparent 8px)' }}></div>
              <span className="text-gray-700">Budget Limit</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-6 bg-red-500 rounded opacity-80"></div>
              <span className="text-gray-700">Over Budget</span>
            </div>
          </div>
        </div>

        {/* Project Breakdown with Drill-down */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-slate-900 font-bold text-xl">Cost Breakdown</h3>
            <button className="p-2 text-slate-500 hover:text-slate-700">
              <MoreVertical className="w-4 h-4" />
            </button>
          </div>
          
          {['EDP Core', 'TelmaAI', 'Corrigo Core', 'ScheduleAI'].map((project) => {
            const projectData = financialData[project]?.["All Environments"]?.["All Components"];
            if (!projectData) return null;
            
            const percentage = (projectData.currentSpend / projectData.monthlyBudget) * 100;
            const isOverBudget = projectData.currentSpend > projectData.monthlyBudget;
            
            return (
              <div key={project} className="mb-6 cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition-colors"
                   onClick={() => handleDrillDown('project', project)}>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900">{project}</span>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </div>
                  <span className={`font-bold ${isOverBudget ? 'text-red-600' : 'text-slate-700'}`}>
                    ${projectData.currentSpend.toLocaleString()}
                  </span>
                </div>
                <div className="bg-gray-200 rounded-full h-2 overflow-hidden mb-2">
                  <div 
                    className={`h-full rounded-full transition-all duration-500 ${
                      isOverBudget ? 'bg-gradient-to-r from-red-500 to-red-600' : 
                      percentage > 80 ? 'bg-gradient-to-r from-orange-400 to-yellow-500' : 
                      'bg-gradient-to-r from-green-400 to-emerald-500'
                    }`}
                    style={{ width: `${Math.min(percentage, 100)}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-600">
                  <span>Budget: ${projectData.monthlyBudget.toLocaleString()}</span>
                  <span className={isOverBudget ? 'text-red-600 font-medium' : ''}>{Math.round(percentage)}% used</span>
                </div>
              </div>
            );
          })}

          <button className="w-full mt-4 px-4 py-2 border border-gray-200 rounded-lg text-sm text-slate-600 hover:bg-gray-50 transition-colors">
            View All Projects
          </button>
        </div>
      </div>


      {/* Component & Environment Performance Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Component Performance */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-slate-900 font-bold text-xl">Component Cost Analysis</h3>
            <button className="px-3 py-1 bg-slate-100 text-slate-700 rounded text-sm hover:bg-slate-200">
              Configure
            </button>
          </div>
          
          <div className="space-y-4">
            {['API Gateway', 'Database', 'Load Balancer', 'Web Application', 'Storage'].map((component, index) => (
              <div key={component} 
                   className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                   onClick={() => handleDrillDown('component', component)}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">{component}</div>
                    <div className="text-sm text-gray-600">{[12, 8, 5, 15, 7][index]} resources</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <div className="font-semibold text-slate-900">${[2890, 4200, 1840, 2170, 1300][index].toLocaleString()}</div>
                    <div className={`text-sm ${[5.2, 8.1, 4.3, 7.8, 9.2][index] >= 0 ? 'text-orange-600' : 'text-green-600'}`}>
                      {[5.2, 8.1, 4.3, 7.8, 9.2][index] >= 0 ? '+' : ''}{[5.2, 8.1, 4.3, 7.8, 9.2][index]}%
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Environment Performance */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-slate-900 font-bold text-xl">Environment Cost Distribution</h3>
            <button className="px-3 py-1 bg-slate-100 text-slate-700 rounded text-sm hover:bg-slate-200">
              Optimize
            </button>
          </div>
          
          <div className="space-y-6">
            {[
              { env: 'Production', cost: 28450, budget: 32000, resources: 84, trend: 6.8 },
              { env: 'Staging', cost: 12340, budget: 15000, resources: 32, trend: 14.2 },
              { env: 'Development', cost: 6494, budget: 5000, resources: 28, trend: 22.1 }
            ].map((env, index) => (
              <div key={env.env} 
                   className="cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition-colors"
                   onClick={() => handleDrillDown('environment', env.env)}>
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${
                      index === 0 ? 'bg-green-500' : index === 1 ? 'bg-orange-500' : 'bg-red-500'
                    }`}></div>
                    <div className="font-medium text-slate-900">{env.env}</div>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">${env.cost.toLocaleString()}</div>
                    <div className={`text-sm ${env.trend >= 0 ? 'text-orange-600' : 'text-green-600'}`}>
                      {env.trend >= 0 ? '+' : ''}{env.trend}%
                    </div>
                  </div>
                </div>
                <div className="bg-gray-200 rounded-full h-2 mb-2">
                  <div 
                    className={`h-2 rounded-full ${
                      env.cost > env.budget ? 'bg-red-500' : env.cost > env.budget * 0.8 ? 'bg-orange-500' : 'bg-green-500'
                    }`}
                    style={{ width: `${Math.min((env.cost / env.budget) * 100, 100)}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-600">
                  <span>{env.resources} resources</span>
                  <span>Budget: ${env.budget.toLocaleString()}</span>
                </div>
              </div>
            ))}
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

// Deployment Progress Page
const DeploymentProgress = ({ setCurrentPage }) => {
  const [currentStage, setCurrentStage] = useState(0);
  const [stageStatus, setStageStatus] = useState({});
  const [selectedStage, setSelectedStage] = useState(null);
  const [deploymentData, setDeploymentData] = useState(null);

  useEffect(() => {
    // Get deployment data from window (temporary storage)
    if (window.currentDeployment) {
      setDeploymentData(window.currentDeployment);
    }

    // Define deployment scenarios based on component and environment
    const getDeploymentScenario = (deploymentData) => {
      if (!deploymentData) return 'success';
      
      const { component, environment, environmentType, csp } = deploymentData;
      
      // Failed scenarios
      if (component === 'Database' && environment === 'Prod') {
        return 'security-failure'; // Fails at security stage
      }
      if (component === 'Web Application' && environmentType === 'Dev') {
        return 'plan-failure'; // Fails at terraform plan stage
      }
      if (component === 'Container Registry' && csp === 'AWS') {
        return 'testing-failure'; // Fails at testing stage
      }
      if (component === 'API Gateway' && environmentType === 'UAT') {
        return 'apply-failure'; // Fails at terraform apply stage
      }
      
      // Warning scenarios (deployment succeeds but with warnings)
      if (component === 'Load Balancer' && environment === 'Prod') {
        return 'cost-warnings'; // Warnings on cost/testing stages
      }
      if (component === 'Monitoring' && environmentType === 'QA') {
        return 'security-warnings'; // Warnings on security stage
      }
      if (component === 'Storage' && csp === 'GCP') {
        return 'validation-warnings'; // Warnings on validation stage
      }
      
      // Success scenarios
      return 'success';
    };

    const scenario = getDeploymentScenario(window.currentDeployment);
    
    // Define stage outcomes based on scenario
    const stageOutcomes = {
      'success': {
        validate: 'success',
        security: 'success', 
        init: 'success',
        plan: 'success',
        testing: 'success',
        apply: 'success',
        postValidation: 'success'
      },
      'security-failure': {
        validate: 'success',
        security: 'failure',
        init: 'not-run',
        plan: 'not-run',
        testing: 'not-run',
        apply: 'not-run',
        postValidation: 'not-run'
      },
      'plan-failure': {
        validate: 'success',
        security: 'success',
        init: 'success',
        plan: 'failure',
        testing: 'not-run',
        apply: 'not-run',
        postValidation: 'not-run'
      },
      'testing-failure': {
        validate: 'success',
        security: 'success',
        init: 'success',
        plan: 'success',
        testing: 'failure',
        apply: 'not-run',
        postValidation: 'not-run'
      },
      'apply-failure': {
        validate: 'success',
        security: 'success',
        init: 'success',
        plan: 'success',
        testing: 'success',
        apply: 'failure',
        postValidation: 'not-run'
      },
      'cost-warnings': {
        validate: 'success',
        security: 'success',
        init: 'success',
        plan: 'success',
        testing: 'warning',
        apply: 'success',
        postValidation: 'success'
      },
      'security-warnings': {
        validate: 'success',
        security: 'warning',
        init: 'success',
        plan: 'success',
        testing: 'success',
        apply: 'success',
        postValidation: 'success'
      },
      'validation-warnings': {
        validate: 'warning',
        security: 'success',
        init: 'success',
        plan: 'success',
        testing: 'success',
        apply: 'success',
        postValidation: 'warning'
      }
    };

    const outcomes = stageOutcomes[scenario];
    
    // Simulate deployment progress
    const progressStages = [
      'validate',
      'security', 
      'init',
      'plan',
      'testing',
      'apply',
      'postValidation'
    ];

    let stageIndex = 0;
    
    const executeNextStage = () => {
      if (stageIndex >= progressStages.length) return;
      
      const stageName = progressStages[stageIndex];
      const plannedOutcome = outcomes[stageName];
      
      // Skip not-run stages
      if (plannedOutcome === 'not-run') {
        stageIndex++;
        executeNextStage();
        return;
      }
      
      // Set stage to in-progress
      setStageStatus(prev => ({
        ...prev,
        [stageName]: 'in-progress'
      }));
      setCurrentStage(stageIndex);

      // Complete stage after delay with predetermined outcome
      setTimeout(() => {
        setStageStatus(prev => ({
          ...prev,
          [stageName]: plannedOutcome
        }));
        
        stageIndex++;
        
        // If this stage failed, stop progression
        if (plannedOutcome === 'failure') {
          return; // Stop execution completely
        }
        
        // Continue to next stage after a brief pause
        setTimeout(() => {
          executeNextStage();
        }, 1000); // 1 second pause between stages
        
      }, 2000 + Math.random() * 2000); // 2-4 seconds per stage
    };
    
    // Start the first stage after a brief initial delay
    const initialTimeout = setTimeout(() => {
      executeNextStage();
    }, 1000);

    return () => clearTimeout(initialTimeout);
  }, []);

  const stages = [
    {
      id: 'validate',
      name: 'Validate',
      title: 'Validation Stage',
      description: 'Terraform configuration validation',
      substages: ['Terraform Format Check', 'Terraform Validate']
    },
    {
      id: 'security',
      name: 'Security Scans',
      title: 'Security Scans',
      description: 'TF Sentinel Policy Scans',
      substages: ['Sentinel Policy Scans']
    },
    {
      id: 'init',
      name: 'Terraform Init',
      title: 'Terraform Init',
      description: 'Initialize Terraform working directory',
      substages: []
    },
    {
      id: 'plan',
      name: 'Terraform Plan',
      title: 'Terraform Plan',
      description: 'Create execution plan for infrastructure changes',
      substages: []
    },
    {
      id: 'testing',
      name: 'Testing & Validation',
      title: 'Testing & Validation',
      description: 'Automated testing and cost analysis',
      substages: ['Unit Tests - Terratest', 'Cost Estimation']
    },
    {
      id: 'apply',
      name: 'Terraform Apply',
      title: 'Terraform Apply',
      description: 'Apply infrastructure changes',
      substages: []
    },
    {
      id: 'postValidation',
      name: 'Post Deployment Validation',
      title: 'Post-Deployment Validation',
      description: 'Verify deployment success',
      substages: ['Smoke Tests']
    }
  ];

  const getStageStatus = (stageId, index) => {
    if (stageStatus[stageId]) return stageStatus[stageId];
    if (index < currentStage) return 'success';
    if (index === currentStage) return 'in-progress';
    return 'pending';
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'success': return <CheckCircle className="w-6 h-6 text-green-600" />;
      case 'in-progress': return <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />;
      case 'warning': return <AlertTriangle className="w-6 h-6 text-orange-600" />;
      case 'failure': return <XCircle className="w-6 h-6 text-red-600" />;
      default: return <div className="w-6 h-6 border-2 border-gray-300 rounded-full" />;
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'success': return 'bg-green-50 border-green-200';
      case 'in-progress': return 'bg-blue-50 border-blue-200';
      case 'warning': return 'bg-orange-50 border-orange-200';
      case 'failure': return 'bg-red-50 border-red-200';
      default: return 'bg-gray-50 border-gray-200';
    }
  };

  const getDetailedLogs = (stageId, status) => {
    const baseLogs = {
      timestamp: new Date().toISOString(),
      component: deploymentData?.component || 'Unknown',
      target: deploymentData?.deploymentTarget || 'Unknown'
    };

    switch(stageId) {
      case 'validate':
        return status === 'success' ? {
          ...baseLogs,
          logs: [
            '✓ Starting Terraform validation...',
            '✓ Checking Terraform format (terraform fmt -check)',
            '  → All files are properly formatted',
            '✓ Validating Terraform configuration (terraform validate)',
            '  → Configuration is valid',
            '  → All required variables are defined',
            '  → All resource references are correct',
            '✓ Validation completed successfully in 2.3 seconds'
          ]
        } : {
          ...baseLogs,
          logs: [
            '→ Starting Terraform validation...',
            '⚠ Checking Terraform format (terraform fmt -check)',
            '  → Minor formatting inconsistencies found',
            '✓ Validating Terraform configuration (terraform validate)',
            '  → Configuration is valid',
            '⚠ Validation completed with warnings in 2.8 seconds'
          ]
        };

      case 'security':
        if (status === 'failure') {
          return {
            ...baseLogs,
            logs: [
              '→ Starting Sentinel policy scans...',
              '✓ Checking resource compliance policies',
              '  → EC2 instance types comply with approved list',
              '  → Security groups follow least privilege principle',
              '✗ Critical security violation detected:',
              '  → Database encryption at rest is disabled',
              '  → Administrative privileges exposed to public subnet',
              '  → Backup encryption not configured',
              '✗ Security policy violations must be resolved before deployment',
              '✗ Security scan failed after 3.8 seconds'
            ]
          };
        }
        return status === 'success' ? {
          ...baseLogs,
          logs: [
            '✓ Starting Sentinel policy scans...',
            '✓ Checking resource compliance policies',
            '  → EC2 instance types comply with approved list',
            '  → Security groups follow least privilege principle',
            '  → S3 buckets have encryption enabled',
            '✓ Checking cost governance policies',
            '  → Estimated monthly cost: $245.67 (within budget)',
            '✓ All security policies passed in 4.1 seconds'
          ]
        } : {
          ...baseLogs,
          logs: [
            '→ Starting Sentinel policy scans...',
            '✓ Checking resource compliance policies',
            '  → EC2 instance types comply with approved list',
            '  → Security groups follow least privilege principle',
            '  → S3 buckets have encryption enabled',
            '⚠ Checking cost governance policies',
            '  → Estimated monthly cost: $387.23 (approaching budget limit)',
            '  → Some policies require review but are not blocking',
            '⚠ Security scan completed with warnings in 4.5 seconds'
          ]
        };

      case 'init':
        return {
          ...baseLogs,
          logs: [
            '✓ Initializing Terraform...',
            '✓ Downloading provider plugins:',
            '  → aws v5.31.0',
            '  → random v3.4.3',
            '  → local v2.4.0',
            '✓ Configuring backend (S3)',
            '  → Bucket: terraform-state-' + deploymentData?.deploymentTarget?.split('-')[2],
            '  → Key: ' + deploymentData?.component?.toLowerCase() + '/terraform.tfstate',
            '✓ Terraform has been successfully initialized in 5.2 seconds'
          ]
        };

      case 'plan':
        if (status === 'failure') {
          return {
            ...baseLogs,
            logs: [
              '→ Creating Terraform execution plan...',
              '✓ Refreshing state...',
              '→ Planning infrastructure changes:',
              '✗ Error: Invalid resource configuration',
              '  → aws_instance.web_server: Invalid AMI ID "ami-invalid123"',
              '  → Resource dependency cycle detected:',
              '    - aws_security_group.web_sg depends on aws_instance.web_server',
              '    - aws_instance.web_server depends on aws_security_group.web_sg',
              '✗ Planning failed due to configuration errors',
              '✗ Plan generation failed after 6.2 seconds'
            ]
          };
        }
        return {
          ...baseLogs,
          logs: [
            '✓ Creating Terraform execution plan...',
            '✓ Refreshing state...',
            '→ Planning infrastructure changes:',
            '  + aws_instance.web_server',
            '  + aws_security_group.web_sg',
            '  + aws_key_pair.deployer',
            '  ~ aws_subnet.private (attributes changed)',
            '→ Plan: 3 to add, 1 to change, 0 to destroy',
            '✓ Plan saved to: tfplan.out',
            '✓ Planning completed successfully in 8.7 seconds'
          ]
        };

      case 'testing':
        if (status === 'failure') {
          return {
            ...baseLogs,
            logs: [
              '→ Running Terratest unit tests...',
              '✓ TestVPCCreation: PASS (2.3s)',
              '✗ TestSecurityGroupRules: FAIL (4.2s)',
              '  → Expected security group to block port 22 from 0.0.0.0/0',
              '  → Actual: port 22 is open to public internet',
              '✗ TestInstanceConfiguration: FAIL (1.8s)',
              '  → Expected instance type: t3.medium',
              '  → Actual: t2.micro (insufficient for production workload)',
              '✗ Unit tests failed: 2 failures, 1 success',
              '',
              '✗ Testing failed - deployment cannot proceed',
              '✗ Testing stage failed after 8.3 seconds'
            ]
          };
        }
        return status === 'success' ? {
          ...baseLogs,
          logs: [
            '✓ Running Terratest unit tests...',
            '✓ TestVPCCreation: PASS (2.3s)',
            '✓ TestSecurityGroupRules: PASS (1.8s)',
            '✓ TestInstanceConfiguration: PASS (3.1s)',
            '✓ All unit tests passed (7.2s total)',
            '',
            '✓ Calculating cost estimation...',
            '  → EC2 instances: $156.00/month',
            '  → Load balancer: $22.50/month',
            '  → Data transfer: $12.30/month',
            '  → Total estimated cost: $190.80/month',
            '✓ Testing completed successfully in 12.4 seconds'
          ]
        } : {
          ...baseLogs,
          logs: [
            '✓ Running Terratest unit tests...',
            '✓ TestVPCCreation: PASS (2.3s)',
            '✓ TestSecurityGroupRules: PASS (1.8s)',
            '⚠ TestInstanceConfiguration: PASS with warnings (3.1s)',
            '✓ All unit tests passed (7.2s total)',
            '',
            '⚠ Calculating cost estimation...',
            '  → EC2 instances: $278.00/month',
            '  → Load balancer: $22.50/month',
            '  → Data transfer: $18.90/month',
            '  → Total estimated cost: $319.40/month',
            '⚠ Cost exceeds recommended budget threshold',
            '⚠ Testing completed with warnings in 12.8 seconds'
          ]
        };

      case 'apply':
        if (status === 'failure') {
          return {
            ...baseLogs,
            logs: [
              '→ Applying Terraform plan...',
              '→ aws_key_pair.deployer: Creating...',
              '✓ aws_key_pair.deployer: Creation complete (0.8s)',
              '→ aws_security_group.web_sg: Creating...',
              '✓ aws_security_group.web_sg: Creation complete (2.1s)',
              '→ aws_instance.web_server: Creating...',
              '→ aws_instance.web_server: Still creating... [10s elapsed]',
              '→ aws_instance.web_server: Still creating... [20s elapsed]',
              '✗ aws_instance.web_server: Error creating instance',
              '  → InsufficientInstanceCapacity: Insufficient capacity for instance type t3.large',
              '  → Availability zone us-east-1a has no available capacity',
              '✗ Apply failed: Error creating AWS EC2 instance',
              '',
              '⚠ Initiating rollback of created resources...',
              '✓ aws_security_group.web_sg: Destroy complete',
              '✓ aws_key_pair.deployer: Destroy complete',
              '✗ Apply failed after 28.3 seconds'
            ]
          };
        }
        return {
          ...baseLogs,
          logs: [
            '✓ Applying Terraform plan...',
            '→ aws_key_pair.deployer: Creating...',
            '✓ aws_key_pair.deployer: Creation complete (0.8s)',
            '→ aws_security_group.web_sg: Creating...',
            '✓ aws_security_group.web_sg: Creation complete (2.1s)',
            '→ aws_instance.web_server: Creating...',
            '→ aws_instance.web_server: Still creating... [10s elapsed]',
            '→ aws_instance.web_server: Still creating... [20s elapsed]',
            '✓ aws_instance.web_server: Creation complete (23.4s)',
            '→ aws_subnet.private: Modifying...',
            '✓ aws_subnet.private: Modifications complete (1.2s)',
            '',
            '✓ Apply complete! Resources: 3 added, 1 changed, 0 destroyed.',
            '✓ Infrastructure deployed successfully in 27.5 seconds'
          ]
        };

      case 'postValidation':
        return {
          ...baseLogs,
          logs: [
            '✓ Running post-deployment smoke tests...',
            '✓ Testing EC2 instance connectivity...',
            '  → Instance i-0abc123def456789 is running',
            '  → Health check endpoint responding (200 OK)',
            '  → SSH connectivity verified',
            '✓ Testing security group rules...',
            '  → Port 80 accessible from load balancer',
            '  → Port 22 restricted to bastion host only',
            '✓ Testing application endpoints...',
            '  → /health: OK (response time: 145ms)',
            '  → /api/status: OK (response time: 89ms)',
            '✓ All smoke tests passed in 8.9 seconds',
            '',
            '🎉 Deployment completed successfully!'
          ]
        };

      default:
        return {
          ...baseLogs,
          logs: ['Stage execution logs will appear here...']
        };
    }
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setCurrentPage('deployments')}
            className="p-2 hover:bg-white rounded-lg transition-colors border border-gray-200"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Deployment Progress</h1>
            {deploymentData && (
              <p className="text-gray-600">
                {deploymentData.component} → {deploymentData.csp} ({deploymentData.deploymentTarget})
              </p>
            )}
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
            In Progress
          </div>
          <div className="text-sm text-gray-600">
            Stage {currentStage + 1} of {stages.length}
          </div>
        </div>
      </div>

      {/* Deployment Info */}
      {deploymentData && (
        <div className="mb-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Deployment Details</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <div className="text-sm text-gray-600">Project</div>
              <div className="font-medium">{deploymentData.project}</div>
            </div>
            <div>
              <div className="text-sm text-gray-600">Component</div>
              <div className="font-medium">{deploymentData.component}</div>
            </div>
            <div>
              <div className="text-sm text-gray-600">Environment</div>
              <div className="font-medium">{deploymentData.environment} ({deploymentData.environmentType})</div>
            </div>
            <div>
              <div className="text-sm text-gray-600">Region</div>
              <div className="font-medium">{deploymentData.region}</div>
            </div>
          </div>
        </div>
      )}

      {/* Pipeline Stages */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Stages List */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-slate-900">Pipeline Stages</h3>
          </div>
          <div className="p-6 space-y-4">
            {stages.map((stage, index) => {
              const status = getStageStatus(stage.id, index);
              return (
                <div
                  key={stage.id}
                  onClick={() => setSelectedStage({ stage, status, logs: getDetailedLogs(stage.id, status) })}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all hover:shadow-md ${getStatusColor(status)}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {getStatusIcon(status)}
                      <div>
                        <div className="font-medium text-slate-900">{stage.name}</div>
                        <div className="text-sm text-gray-600">{stage.description}</div>
                        {stage.substages.length > 0 && (
                          <div className="text-xs text-gray-500 mt-1">
                            {stage.substages.join(' • ')}
                          </div>
                        )}
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stage Logs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-slate-900">
              {selectedStage ? `${selectedStage.stage.name} Logs` : 'Execution Logs'}
            </h3>
          </div>
          <div className="p-6">
            {selectedStage ? (
              <div className="bg-gray-900 text-gray-300 p-4 rounded-lg font-mono text-sm overflow-auto max-h-96">
                <div className="text-blue-400 mb-2">
                  [{selectedStage.logs.timestamp}] Starting {selectedStage.stage.name.toLowerCase()}...
                </div>
                {selectedStage.logs.logs.map((log, index) => (
                  <div key={index} className="mb-1">
                    {log.startsWith('✓') ? (
                      <span className="text-green-400">{log}</span>
                    ) : log.startsWith('→') ? (
                      <span className="text-yellow-400">{log}</span>
                    ) : log.startsWith('⚠') ? (
                      <span className="text-orange-400">{log}</span>
                    ) : log.startsWith('✗') ? (
                      <span className="text-red-400">{log}</span>
                    ) : log.startsWith('🎉') ? (
                      <span className="text-green-300 font-semibold">{log}</span>
                    ) : (
                      <span className="text-gray-400">{log}</span>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Monitor className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-500">Click on a stage to view detailed logs</p>
              </div>
            )}
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
      case 'code-commits':
        return <CodeCommitsDashboard />;
      case 'infrabuilder':
        return <InfraBuilder />;
      case 'deployments':
        return <DeploymentManagement setCurrentPage={setCurrentPage} />;
      case 'deployment-progress':
        return <DeploymentProgress setCurrentPage={setCurrentPage} />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  const getPageUrl = () => {
    const urlMap = {
      'home': 'https://hero.jll.com',
      'dashboard': 'https://hero.jll.com/dashboards/deployments',
      'financial': 'https://hero.jll.com/dashboards/financials',
      'projects': 'https://hero.jll.com/onboarding/projects',
      'cloud-onboarding': 'https://hero.jll.com/onboarding/csp',
      'cloud-onboarding-status': 'https://hero.jll.com/onboarding/csp/status/REQ-2025-0789',
      'kubernetes-onboarding': 'https://hero.jll.com/onboarding/kubernetes',
      'kubernetes-onboarding-status': 'https://hero.jll.com/onboarding/kubernetes/status/REQ-2025-0790',
      'vulnerabilities': 'https://hero.jll.com/dashboards/vulnerabilities',
      'infrabuilder': 'https://hero.jll.com/build/infrabuilder',
      'deployments': 'https://hero.jll.com/build/deployments'
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