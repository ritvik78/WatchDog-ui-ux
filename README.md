# <img src="Assets/logo watchdog.png" width="50px;"> WATCHDOG: AI-Powered Verbal Abuse Detection System

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.0+-blue.svg)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-16.0+-green.svg)](https://nodejs.org/)
[![Python](https://img.shields.io/badge/Python-3.8+-blue.svg)](https://python.org/)
[![Thapar Institute](https://img.shields.io/badge/TIET-Patiala-orange.svg)](https://thapar.edu/)

## 📋 Overview

**WATCHDOG** is a comprehensive AI-powered content moderation system specifically designed to detect verbal abuse across social media platforms, with particular emphasis on **Hindi, Hinglish, Punjabi, and English languages**. The system employs advanced **multimodal techniques** combining Natural Language Processing (NLP) and Machine Learning (ML) to analyze both text and audio content in real-time.

This project addresses the critical gap in content moderation for Indian languages on social media platforms, providing culturally-aware abuse detection while maintaining respect for linguistic diversity and freedom of expression.

## 🎯 Problem Statement

Current content moderation systems demonstrate significant limitations when dealing with regional Indian languages, cultural slang, sarcasm, and context-dependent interactions. WATCHDOG addresses the inadequate detection and moderation of verbal abuse in Hindi, Hinglish, and other Indic languages on social media platforms, leading to increased exposure of users, particularly minors, to harmful content.

## ✨ Key Features

### 🔍 **Advanced Detection Engine**
- **Multi-language Support**: Real-time detection for Hindi, Punjabi, English, and Hinglish
- **Cultural Context Analysis**: Understanding of regional slang, cultural references, and linguistic nuances
- **Translation Service**: Automatic English translation of detected abusive content
- **Severity Assessment**: Content categorized as Mild, Moderate, or Severe
- **Confidence Scoring**: AI confidence levels (78% accuracy, 82% precision, 74% recall)

### 🎙️ **Multimodal Analysis Capabilities**
- **Text Analysis**: Advanced NLP using Transformer-based models (BERT, custom Hindi/Punjabi models)
- **Audio Analysis**: Voice pattern detection, tone analysis, and speech emotion recognition
- **URL Processing**: Complete analysis of YouTube/Instagram video content
- **Real-time Processing**: Average response time of 1.2 seconds per analysis

### 🖥️ **Complete Web Application**
- **Authentication System**: Secure role-based login (User/Admin) with session management
- **Real-time Dashboard**: Live system monitoring, analytics, and performance metrics
- **User Profile Management**: Personal settings, activity history, and preference customization
- **Admin Panel**: Comprehensive user database management and activity tracking
- **Excel Export**: Complete data export functionality for administrative analysis

### 📊 **Analytics & Monitoring**
- **Performance Metrics**: Real-time tracking of detection accuracy and system performance
- **User Activity Tracking**: Complete audit trail of all user interactions and analyses
- **Platform Usage Statistics**: Detailed monitoring across YouTube, Instagram, Manual Input
- **Detection History**: Comprehensive logging with translations and cultural context

## 🌐 Live Site

🔗 [Visit the Website](https://ritvik78.github.io/WatchDog-ui-ux/)



## 🛠️ Technology Stack

### **Frontend**
React.js 18.0+ # Component-based UI framework
HTML5/CSS3/JavaScript # Modern web technologies
Lucide React # Icon library
Responsive Design # Mobile-first approach

### **Backend Architecture**
Node.js & Express.js # Server-side runtime and framework
RESTful API # Scalable API architecture
Microservices # Modular service architecture
Real-time Processing # Live content analysis engine

### **AI/ML Technologies**
TensorFlow & PyTorch # Deep learning frameworks
Hugging Face Transformers # State-of-the-art language models
BERT & Custom Models # Contextual understanding for Indic languages
LibROSA & MFCC # Audio processing and feature extraction
scikit-learn # Classical ML algorithms

### **Database & Storage**
MongoDB # NoSQL database for content storage
User Management # Secure authentication and authorization
Excel Integration # Data export and reporting
Audit Logging # Comprehensive activity tracking

### **Development Tools**
Git & GitHub # Version control and collaboration
Docker # Containerization for deployment
ESLint & Prettier # Code quality and formatting
Jest # Testing framework

## 🔐 Default Login Credentials

👤 User Account:
Username: john_doe
Password: password123

👨‍💼 Admin Account:
Username: admin_user
Password: admin123

## 📱 Usage Examples

### Text Analysis
// Analyze text for abusive content
const analysisResult = await fetch('/api/analyze/text', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({
content: "Your text here",
language: "hindi"
})
});

const result = await analysisResult.json();
console.log(result.confidence); // 0.89
console.log(result.translation); // English translation
console.log(result.culturalContext); // Cultural explanation

### Audio Analysis
// Process audio for aggressive patterns
const audioAnalysis = await fetch('/api/analyze/audio', {
method: 'POST',
body: formData // Contains audio file
});

const result = await audioAnalysis.json();
console.log(result.emotion_detected); // "Aggressive"
console.log(result.tone_aggressiveness); // 0.75
console.log(result.confidence); // 0.82

## 📊 System Performance

| Metric | Current Performance | Target |
|--------|-------------------|---------|
| **Model Accuracy** | 78% | 85% |
| **Precision** | 82% | 88% |
| **Recall** | 74% | 80% |
| **Processing Speed** | 1.2s average | <1.0s |
| **Languages Supported** | 5 (Hindi, Punjabi, English, Hinglish, Other) | 8+ |
| **Concurrent Users** | 100+ | 500+ |
| **Platform Coverage** | YouTube, Instagram, Manual Input |All major platforms|

## 🏗️ Project Structure
<p>
watchdog-detection-system/
├── frontend/
│ ├── src/
│ │ ├── components/ # React components
│ │ ├── pages/ # Page components
│ │ ├── services/ # API services
│ │ ├── utils/ # Utility functions
│ │ └── styles/ # CSS and styling
│ └── public/ # Static assets
├── backend/
│ ├── api/ # API endpoints
│ ├── models/ # ML models
│ ├── services/ # Business logic
│ ├── utils/ # Helper functions
│ └── config/ # Configuration files
├── ml-models/
│ ├── text-analysis/ # NLP models
│ ├── audio-analysis/ # Speech processing
│ └── training/ # Model training scripts
├── docs/ # Documentation
└── tests/ # Test files
</p>
## 👥 Development Team

**🎓 Capstone Project Team - Thapar Institute of Engineering & Technology**

<table>
<tr>
<td align="center">
<img src="Assets/udayan raj.jpeg" width="100px;" alt="Udayan Raj"/><br />
<b>Udayan Raj</b><br />
<sub>102203869</sub><br />
<sub>Technical Lead & ML Engineer</sub><br />
<a href="https://github.com/udayanraj">GitHub</a> | <a href="https://www.linkedin.com/in/udayan-raj/">LinkedIn</a>
</td>
<td align="center">
<img src="Assets/bhawanjali.jpg" width="100px;" alt="Bhawanjali"/><br />
<b>Bhawanjali</b><br />
<sub>102203870</sub><br />
<sub>Performance Engineer & Frontend Developer</sub><br />
<a href="https://github.com/bhawanjali">GitHub</a> | <a href="https://linkedin.com/in/bhawanjali">LinkedIn</a>
</td>
</tr>
<tr>
<td align="center">
<img src="Assets/megha.jpg" width="100px;" alt="Megha"/><br />
<b>Megha</b><br />
<sub>102203874</sub><br />
<sub>Data Scientist & Cultural Context Specialist</sub><br />
<a href="https://github.com/meghab1230">GitHub</a> | <a href="https://www.linkedin.com/in/megha-b95453280/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">LinkedIn</a>
</td>
<td align="center">
<img src="Assets/Rithik.png" width="100px;" alt="Rithik Verma"/><br />
<b>Rithik Verma</b><br />
<sub>102399003</sub><br />
<sub>System Architect & UI/UX Designer</sub><br />
<a href="https://github.com/ritvik78">GitHub</a> | <a href="https://www.linkedin.com/in/rithik-verma-74592226a/">LinkedIn</a>
</td>
</tr>
</table>

**🏫 Academic Supervision**
- **Faculty Mentor**: Dr. Husanbir Singh Pannu
- **Designation**: Assistant Professor
- **Department**: Computer Science and Engineering
- **Institution**: Thapar Institute of Engineering and Technology, Patiala

## 🎯 Research & Academic Context

### **Research Objectives**
1. **Dataset Development**: Create comprehensive Hindi/Punjabi abuse detection datasets
2. **Multimodal Analysis**: Integrate text and audio analysis for enhanced accuracy  
3. **Cultural Context**: Develop culturally-sensitive detection algorithms
4. **Real-time Processing**: Implement scalable real-time content moderation
5. **Browser Extension**: Deploy functional browser-based detection system

### **Novel Contributions**
- First comprehensive multimodal abuse detection system for Indic languages
- Cultural context-aware machine learning models
- Real-time processing architecture for streaming content
- Adaptive learning framework for evolving abuse patterns

### **Project Timeline**
- **Duration**: August - December 2025 (Academic Semester)
- **Phase**: Mid-Semester Evaluation Completed
- **Status**: ✅ Core functionality implemented, Beta testing in progress

## 🚀 Future Roadmap

### **Short-term Goals (Next 6 months)**
- [ ] Improve model accuracy to 85%+
- [ ] Expand language support (Tamil, Telugu, Bengali)
- [ ] Mobile application development
- [ ] Enhanced audio processing capabilities
- [ ] Integration with additional social platforms (Twitter, TikTok)

### **Medium-term Goals (6-12 months)**
- [ ] Advanced cultural context understanding
- [ ] Adaptive learning implementation
- [ ] API platform for third-party integration
- [ ] Performance optimization (sub-second processing)

### **Long-term Vision (1-3 years)**
- [ ] Commercial product development
- [ ] Industry partnerships with social media platforms
- [ ] International expansion to other language families
- [ ] Startup formation for content moderation services
- [ ] Research publication in top-tier conferences

## 📈 Impact & Benefits

### **Societal Impact**
- **Digital Safety**: Protects vulnerable users from harmful content exposure
- **Cultural Preservation**: Respects linguistic diversity while ensuring safety
- **Mental Health**: Reduces psychological impact of online abuse
- **Inclusive Internet**: Creates safer spaces for regional language communities

### **Technical Impact**
- **Research Advancement**: Contributes to multilingual NLP and content moderation
- **Industry Innovation**: Provides scalable solution for emerging markets
- **Academic Value**: Establishes benchmark for Indic language abuse detection

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### **Ways to Contribute**
- 🐛 **Bug Reports**: Submit issues with detailed descriptions
- 💡 **Feature Requests**: Suggest new features or improvements
- 🔧 **Code Contributions**: Submit pull requests with bug fixes or enhancements
- 📖 **Documentation**: Help improve documentation and guides
- 🧪 **Testing**: Add test cases and improve test coverage
- 🌐 **Localization**: Help with translations and cultural context

### **Development Workflow**
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### **Code Standards**
- Follow ESLint configuration for JavaScript/React code
- Use Prettier for code formatting
- Write comprehensive tests for new features
- Maintain 80%+ test coverage
- Document all public APIs and functions


## 🙏 Acknowledgments

- **🏫 Thapar Institute of Engineering & Technology** for academic support and resources
- **👨‍🏫 Dr. Husanbir Singh Pannu** for exceptional mentorship and technical guidance
- **🏢 Computer Science and Engineering Department** for providing infrastructure and support
- **🌐 Open Source Community** for the tools and frameworks that made this project possible
- **👥 Beta Testers and Contributors** for valuable feedback and improvements

## 📞 Contact & Support

### **Project Communication**
- 📧 **Team Email**: watchdog.team@thapar.edu
- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/your-team/watchdog-detection-system/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/your-team/watchdog-detection-system/discussions)
- 📖 **Documentation**: [Project Wiki](https://github.com/your-team/watchdog-detection-system/wiki)

### **Academic Inquiries**
- 🏫 **Institution**: Thapar Institute of Engineering and Technology
- 📍 **Location**: Patiala, Punjab, India
- 🌐 **Website**: [thapar.edu](https://thapar.edu)



## 📋 Quick Start Checklist

- [ ] Clone the repository
- [ ] Install Node.js 16+ and Python 3.8+
- [ ] Install dependencies with `npm install`
- [ ] Configure environment variables
- [ ] Start MongoDB database
- [ ] Run the application with `npm run dev`
- [ ] Access at `http://localhost:3000`
- [ ] Login with provided credentials
- [ ] Test text/audio analysis features
- [ ] Explore admin panel (admin account)
- [ ] Check documentation for API usage

**🚀 Ready to contribute? Check our [Contributing Guidelines](CONTRIBUTING.md)!**
