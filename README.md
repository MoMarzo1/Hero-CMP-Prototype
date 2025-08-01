# Hero Portal Prototype

A modern web application prototype for enterprise cloud infrastructure management, featuring deployment tracking, financial monitoring, security vulnerability management, and cloud resource provisioning.

## Features

### 🏠 Home Dashboard
- Quick access to all major features
- Real-time alerts and notifications
- AI-powered assistant (HeroAI) for platform guidance

### 📊 Dashboards

#### Deployment Dashboard
- Track deployment metrics across environments (Dev, Stage, Prod)
- Monthly deployment trends visualization
- Success/failure rate monitoring

#### Financial Dashboard
- Real-time cloud spending tracking
- Budget monitoring and alerts
- Cost breakdown by project
- Spending anomaly detection
- Service-wise cost distribution

#### Applications Dashboard
- Manage application inventory
- Track application status and health
- Integration with ServiceNow CMDB

#### Vulnerabilities Dashboard
- Security vulnerability tracking from multiple sources:
  - **SonarQube**: Code quality and security issues
  - **Wiz**: Cloud infrastructure vulnerabilities
  - **Snyk**: Dependency vulnerabilities
- Security scorecard with production readiness assessment
- Detailed vulnerability information with remediation guidance
- Filter by project and vulnerability source

### 🚀 Build & Deploy
- Create and manage deployments
- Pipeline configuration
- Environment management

### ☁️ Cloud Onboarding
- Automated cloud resource provisioning
- Multi-cloud support (AWS, Azure, GCP)
- ServiceNow integration for approvals
- Real-time onboarding status tracking

### 👥 Project Management
- Team access control
- Project configuration
- Resource allocation

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/your-org/hero-portal-prototype.git
cd hero-portal-prototype
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

### Development Mode

To start the application in development mode with hot-reloading:

```bash
npm start
```

The application will open automatically in your default browser at [http://localhost:3000](http://localhost:3000).

### Production Build

To create an optimized production build:

```bash
npm run build
```

The build artifacts will be stored in the `build/` directory.

To serve the production build locally:

```bash
npm install -g serve
serve -s build
```

## Project Structure

```
hero-portal-prototype/
├── public/              # Public assets
├── src/
│   ├── HeroPortalDashboard.jsx  # Main application component
│   ├── App.js          # App entry point
│   ├── index.js        # React DOM rendering
│   └── index.css       # Global styles
├── package.json        # Project dependencies
└── tailwind.config.js  # Tailwind CSS configuration
```

## Technologies Used

- **React** - UI framework
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **Create React App** - Build tooling

## Key Components

### Navigation
- Collapsible sidebar with organized sections
- Breadcrumb navigation
- User profile management

### Security Features
- Comprehensive vulnerability tracking
- Security scoring system
- Integration with industry-standard security tools
- OWASP Top 10 compliance tracking

### Financial Management
- Real-time budget tracking
- Cost anomaly detection
- Multi-project financial overview
- Export capabilities for reports

### AI Assistant
- HeroAI chatbot for platform assistance
- Context-aware help system
- Quick action suggestions

## Development Tips

### Modifying Components
The entire application is contained in `src/HeroPortalDashboard.jsx` for prototype simplicity. In a production environment, this should be split into separate component files.

### Adding New Features
1. Add navigation items in the `Sidebar` component
2. Create new page components following the existing pattern
3. Add cases to the `renderPage()` switch statement
4. Update the URL mapping in `getPageUrl()`

### Styling
The application uses Tailwind CSS for styling. Modify `tailwind.config.js` to customize the design system.

## Mock Data
The prototype uses mock data for demonstrations. In production, these would be replaced with API calls to backend services.

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

### Port Already in Use
If port 3000 is already in use:
```bash
PORT=3001 npm start
```

### Dependencies Issues
Clear npm cache and reinstall:
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

## License

This is a prototype application for demonstration purposes.

## Support

For questions or issues, please contact the Hero Portal team.