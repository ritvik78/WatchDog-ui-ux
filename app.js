// WATCHDOG Application JavaScript - Fixed Version with Working Login and Navigation

// Application Data with Enhanced User Tracking
const appData = {
    users: [
        {
            id: 1,
            username: "Rithik100",
            email: "rock4rithik@gmail.com",
            password: "rithik123",
            role: "user",
            name: "Rithik Verma",
            avatar: "Assets/Rithik.png",
            joinDate: "2024-12-01",
            lastLogin: "2025-01-05T10:30:00Z",
            preferences: {
                language: "English",
                showTranslations: true,
                culturalContext: true,
                sensitivityLevel: "High"
            },
            activityCount: 45,
            detectionsCount: 8
        },
        {
            id: 2,
            username: "admin_user", 
            email: "admin@watchdog.com",
            password: "admin123",
            role: "admin",
            name: "System Administrator",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
            joinDate: "2024-11-01",
            lastLogin: "2025-01-05T11:00:00Z",
            preferences: {
                language: "English",
                showTranslations: true,
                culturalContext: true,
                sensitivityLevel: "High"
            },
            activityCount: 0,
            detectionsCount: 0
        },
        {
            id: 3,
            username: "sarah_smith",
            email: "sarah@example.com",
            password: "password123",
            role: "user",
            name: "Sarah Smith",
            avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b123?w=150&h=150&fit=crop&crop=face",
            joinDate: "2024-12-15",
            lastLogin: "2025-01-04T16:20:00Z",
            preferences: {
                language: "English",
                showTranslations: true,
                culturalContext: false,
                sensitivityLevel: "High"
            },
            activityCount: 23,
            detectionsCount: 5
        },
        {
            id: 4,
            username: "raj_kumar",
            email: "raj@example.com",
            password: "password123",
            role: "user",
            name: "Raj Kumar",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
            joinDate: "2024-12-20",
            lastLogin: "2025-01-05T09:15:00Z",
            preferences: {
                language: "Hindi",
                showTranslations: false,
                culturalContext: true,
                sensitivityLevel: "Low"
            },
            activityCount: 67,
            detectionsCount: 12
        }
    ],
    detections: [
        {
            id: 1,
            content: "तू बड़ा बेवकूफ है",
            translation: "You are very foolish/stupid", 
            language: "Hindi",
            severity: "Moderate",
            culturalContext: "Common insult in Hindi, considered moderately offensive",
            confidence: 0.89,
            status: "Flagged",
            platform: "YouTube",
            detectedAt: "2025-01-05T10:30:00Z",
            userId: 1,
            username: "Rithik100",
            detectionType: "Explicit"
        },
        {
            id: 2,
            content: "ਤੂੰ ਬਹੁਤ ਬੁਰਾ ਹੈਂ",
            translation: "You are very bad/terrible",
            language: "Punjabi", 
            severity: "Mild",
            culturalContext: "General negative comment in Punjabi, mild severity",
            confidence: 0.76,
            status: "Flagged",
            platform: "Instagram",
            detectedAt: "2025-01-05T09:45:00Z",
            userId: 3,
            username: "sarah_smith",
            detectionType: "Aggressive Tone"
        },
        {
            id: 3,
            content: "This is totally inappropriate yaar",
            translation: "This is totally inappropriate friend",
            language: "Hinglish",
            severity: "Mild", 
            culturalContext: "'Yaar' is Hindi word meaning friend, used in casual English conversation",
            confidence: 0.65,
            status: "Reviewed - Safe",
            platform: "YouTube",
            detectedAt: "2025-01-05T08:20:00Z",
            userId: 4,
            username: "raj_kumar",
            detectionType: "None"
        },
        {
            id: 4,
            content: "कैसा चूतिया आदमी है",
            translation: "What an idiotic/stupid man",
            language: "Hindi",
            severity: "Severe",
            culturalContext: "Strong profanity in Hindi, very offensive and vulgar",
            confidence: 0.95,
            status: "Flagged",
            platform: "Instagram", 
            detectedAt: "2025-01-05T07:15:00Z",
            userId: 1,
            username: "Rithik100",
            detectionType: "Hate Speech"
        },
        {
            id: 5,
            content: "Nice video, keep it up!",
            translation: null,
            language: "English",
            severity: null,
            culturalContext: null,
            confidence: 0.05,
            status: "Reviewed - Safe",
            platform: "YouTube",
            detectedAt: "2025-01-05T06:30:00Z",
            userId: 3,
            username: "sarah_smith",
            detectionType: "None"
        }
    ],
    userActivities: [
        {
            id: 1,
            userId: 1,
            username: "Rithik100", 
            activity: "Text Analysis",
            content: "तू बड़ा बेवकूफ है",
            translation: "You are very foolish/stupid",
            language: "Hindi",
            result: "Abusive",
            confidence: 89,
            platform: "Manual Input",
            timestamp: "2025-01-05T10:30:00Z"
        },
        {
            id: 2,
            userId: 1,
            username: "Rithik100",
            activity: "URL Analysis", 
            content: "https://youtube.com/watch?v=example",
            translation: null,
            language: "English",
            result: "Safe",
            confidence: 15,
            platform: "YouTube",
            timestamp: "2025-01-05T09:15:00Z"
        },
        {
            id: 3,
            userId: 3,
            username: "sarah_smith",
            activity: "Audio Analysis",
            content: "ਤੂੰ ਬਹੁਤ ਬੁਰਾ ਹੈਂ",
            translation: "You are very bad/terrible", 
            language: "Punjabi",
            result: "Flagged",
            confidence: 76,
            platform: "Instagram",
            timestamp: "2025-01-05T08:45:00Z"
        },
        {
            id: 4,
            userId: 4,
            username: "raj_kumar",
            activity: "Text Analysis",
            content: "This is totally inappropriate yaar",
            translation: "This is totally inappropriate friend", 
            language: "Hinglish",
            result: "Safe",
            confidence: 65,
            platform: "YouTube",
            timestamp: "2025-01-05T08:20:00Z"
        },
        {
            id: 5,
            userId: 1,
            username: "Rithik100",
            activity: "Text Analysis",
            content: "कैसा चूतिया आदमी है",
            translation: "What an idiotic/stupid man", 
            language: "Hindi",
            result: "Abusive",
            confidence: 95,
            platform: "Instagram",
            timestamp: "2025-01-05T07:15:00Z"
        }
    ],
    statistics: {
        totalDetections: 28,
        modelAccuracy: 78,
        languagesSupported: 5,
        processingSpeed: "1.2s",
        reviewedItems: 4,
        textAnalysis: 6,
        multimodalAnalysis: 4,
        precision: 82,
        recall: 74,
        totalUsers: 150,
        activeUsers: 42,
        translationsGenerated: 156,
        culturalContextProvided: 89
    }
};

// Application State
let currentUser = null;
let currentTab = 'dashboard';
let currentAnalysisTab = 'text';
let detections = [...appData.detections];
let filteredDetections = [...detections];
let isLoggedIn = false;

// Initialize Application - Fixed
document.addEventListener('DOMContentLoaded', function() {
    console.log('WATCHDOG Application Starting...');
    
    // Wait a moment for all elements to be ready
    setTimeout(() => {
        initializeApp();
    }, 100);
});

function initializeApp() {
    console.log('Initializing WATCHDOG application...');
    
    try {
        initializeLucide();
        initializeLoginSystem();
        initializeRegistration();
        initializeNavigation();
        initializeThemeToggle();
        initializeAnalysisTabs();
        initializeFormHandlers();
        initializeFilters();
        initializeProfileHandlers();
        initializeAdminHandlers();
        initializeSettings();
        
        console.log('Application initialized successfully');
        
        // Show demo hint after a delay
        setTimeout(() => {
            if (!isLoggedIn) {
                showToast('Demo credentials are displayed on the login page', 'info');
            }
        }, 2000);
        
    } catch (error) {
        console.error('Error initializing application:', error);
        showToast('Application initialization failed', 'error');
    }
}

// Initialize Lucide Icons
function initializeLucide() {
    if (typeof lucide !== 'undefined') {
        console.log('Initializing Lucide icons...');
        lucide.createIcons();
    } else {
        console.warn('Lucide not found');
    }
}

// Login System - Fixed
function initializeLoginSystem() {
    console.log('Initializing login system...');
    
    const loginForm = document.getElementById('loginForm');
    const logoutBtn = document.getElementById('logoutBtn');
    
    if (loginForm) {
        console.log('Login form found, attaching event listeners');
        loginForm.addEventListener('submit', handleLogin);
        
        // Also attach click event to submit button as backup
        const submitBtn = loginForm.querySelector('button[type="submit"]');
        if (submitBtn) {
            submitBtn.addEventListener('click', function(e) {
                if (!e.defaultPrevented) {
                    e.preventDefault();
                    handleLogin(e);
                }
            });
        }
    } else {
        console.error('Login form not found!');
    }
    
    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    }
}

function handleLogin(e) {
    e.preventDefault();
    console.log('Login attempt started...');
    
    const emailInput = document.getElementById('loginEmail');
    const passwordInput = document.getElementById('loginPassword');
    
    if (!emailInput || !passwordInput) {
        console.error('Login input fields not found');
        showToast('Login form error - please refresh the page', 'error');
        return;
    }
    
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    
    console.log('Login credentials entered:', { email: email, passwordLength: password.length });

    if (!email || !password) {
        showToast('Please enter both email and password', 'error');
        return;
    }

    const user = appData.users.find(u => 
        (u.email === email || u.username === email) && u.password === password
    );

    if (user) {
        console.log('User authenticated:', user.name);
        currentUser = user;
        isLoggedIn = true;
        user.lastLogin = new Date().toISOString();
        showApp();
        updateUserInterface();
        showToast(`Welcome back, ${user.name}!`, 'success');
    } else {
        console.log('Authentication failed for:', email);
        showToast('Invalid credentials. Use demo credentials shown on the page.', 'error');
    }
}

function handleLogout() {
    console.log('Logging out user...');
    currentUser = null;
    isLoggedIn = false;
    currentTab = 'dashboard';
    showLogin();
    
    // Reset forms
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.reset();
    }
    
    showToast('Logged out successfully', 'success');
}

function showLogin() {
    const loginPage = document.getElementById('loginPage');
    const appContainer = document.getElementById('appContainer');
    
    if (loginPage) {
        loginPage.classList.remove('hidden');
        loginPage.classList.add('active');
    }
    if (appContainer) {
        appContainer.classList.add('hidden');
        appContainer.classList.remove('active');
    }
}

function showApp() {
    const loginPage = document.getElementById('loginPage');
    const appContainer = document.getElementById('appContainer');
    
    if (loginPage) {
        loginPage.classList.add('hidden');
        loginPage.classList.remove('active');
    }
    if (appContainer) {
        appContainer.classList.remove('hidden');
        appContainer.classList.add('active');
    }
}

function updateUserInterface() {
    if (!currentUser) return;
    
    console.log('Updating UI for user:', currentUser.name);
    
    const initials = currentUser.name.split(' ').map(n => n[0]).join('');
    
    const userAvatar = document.getElementById('userAvatar');
    const userName = document.getElementById('userName');
    
    if (userAvatar) {
        userAvatar.textContent = initials;
    }
    
    if (userName) {
        userName.textContent = currentUser.name;
    }
    
    // Show/hide admin panel based on role
    const adminNavBtn = document.querySelector('.nav-btn[data-tab="admin"]');
    if (adminNavBtn) {
        if (currentUser.role === 'admin') {
            adminNavBtn.classList.remove('hidden');
        } else {
            adminNavBtn.classList.add('hidden');
        }
    }
    
    // Update profile information
    updateProfileData();
    
    // Populate data
    animateStatistics();
    populateRecentDetections();
    populateDetectionsTable();
    
    if (currentUser.role === 'admin') {
        populateAdminData();
        populateActivityLog();
    }
}

// Registration System - Fixed
function initializeRegistration() {
    const showRegistration = document.getElementById('showRegistration');
    const closeRegistrationModal = document.getElementById('closeRegistrationModal');
    const cancelRegistration = document.getElementById('cancelRegistration');
    const registrationForm = document.getElementById('registrationForm');
    const registrationModal = document.getElementById('registrationModal');
    
    if (showRegistration) {
        showRegistration.addEventListener('click', function(e) {
            e.preventDefault();
            showRegistrationModal();
        });
    }
    
    if (closeRegistrationModal) {
        closeRegistrationModal.addEventListener('click', hideRegistrationModal);
    }
    
    if (cancelRegistration) {
        cancelRegistration.addEventListener('click', hideRegistrationModal);
    }
    
    if (registrationForm) {
        registrationForm.addEventListener('submit', handleRegistration);
    }
    
    // Close modal on backdrop click
    if (registrationModal) {
        registrationModal.addEventListener('click', function(e) {
            if (e.target === registrationModal || e.target.classList.contains('modal-backdrop')) {
                hideRegistrationModal();
            }
        });
    }
}

function showRegistrationModal() {
    const registrationModal = document.getElementById('registrationModal');
    if (registrationModal) {
        registrationModal.classList.remove('hidden');
        registrationModal.classList.add('active');
    }
}

function hideRegistrationModal() {
    const registrationModal = document.getElementById('registrationModal');
    const registrationForm = document.getElementById('registrationForm');
    
    if (registrationModal) {
        registrationModal.classList.add('hidden');
        registrationModal.classList.remove('active');
    }
    
    if (registrationForm) {
        registrationForm.reset();
    }
}

function handleRegistration(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('regName').value.trim(),
        username: document.getElementById('regUsername').value.trim(),
        email: document.getElementById('regEmail').value.trim(),
        password: document.getElementById('regPassword').value,
        confirmPassword: document.getElementById('regConfirmPassword').value,
        agreeTerms: document.getElementById('agreeTerms').checked
    };

    // Validation
    if (!formData.name || !formData.username || !formData.email || !formData.password) {
        showToast('Please fill in all required fields', 'error');
        return;
    }

    if (formData.password !== formData.confirmPassword) {
        showToast('Passwords do not match', 'error');
        return;
    }

    if (!formData.agreeTerms) {
        showToast('Please agree to the terms and conditions', 'error');
        return;
    }

    // Check if user already exists
    const existingUser = appData.users.find(u => 
        u.email === formData.email || u.username === formData.username
    );

    if (existingUser) {
        showToast('User with this email or username already exists', 'error');
        return;
    }

    // Create new user
    const newUser = {
        id: appData.users.length + 1,
        username: formData.username,
        email: formData.email,
        password: formData.password,
        role: "user",
        name: formData.name,
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        joinDate: new Date().toISOString().split('T')[0],
        lastLogin: new Date().toISOString(),
        preferences: {
            language: "English",
            showTranslations: true,
            culturalContext: true,
            sensitivityLevel: "Medium"
        },
        activityCount: 0,
        detectionsCount: 0
    };

    appData.users.push(newUser);
    appData.statistics.totalUsers += 1;
    
    hideRegistrationModal();
    showToast('Account created successfully! You can now sign in.', 'success');
}

// Navigation System - Fixed
function initializeNavigation() {
    console.log('Initializing navigation system...');
    
    const navButtons = document.querySelectorAll('.nav-btn');
    console.log('Found', navButtons.length, 'navigation buttons');
    
    navButtons.forEach((button, index) => {
        const tabName = button.dataset.tab;
        console.log(`Setting up nav button ${index}: ${tabName}`);
        
        button.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Navigation clicked:', tabName);
            
            if (tabName && tabName !== currentTab) {
                switchTab(tabName);
            }
        });
    });

    // Handle "View All" button in recent detections
    setTimeout(() => {
        const viewAllBtn = document.querySelector('.btn[data-tab="detections"]');
        if (viewAllBtn) {
            viewAllBtn.addEventListener('click', function(e) {
                e.preventDefault();
                switchTab('detections');
            });
        }
    }, 1000);
}

function switchTab(tabName) {
    console.log('Switching to tab:', tabName);
    
    const validTabs = ['dashboard', 'analysis', 'detections', 'profile', 'admin', 'settings'];
    if (!validTabs.includes(tabName)) {
        console.error('Invalid tab name:', tabName);
        return;
    }
    
    // Update navigation buttons
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tabName);
    });
    
    // Update tab content
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.toggle('active', content.id === tabName);
    });
    
    currentTab = tabName;
    console.log('Current tab set to:', currentTab);
    
    // Trigger specific tab initialization
    switch (tabName) {
        case 'detections':
            populateDetectionsTable();
            break;
        case 'admin':
            if (currentUser?.role === 'admin') {
                populateAdminData();
                populateActivityLog();
            }
            break;
        case 'profile':
            updateProfileData();
            break;
    }
}

// Theme Toggle
function initializeThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    
    if (!themeToggle) return;

    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-color-scheme') || 
                           (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-color-scheme', newTheme);
        
        const icon = themeToggle.querySelector('i');
        if (icon) {
            icon.setAttribute('data-lucide', newTheme === 'dark' ? 'sun' : 'moon');
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        }
        
        showToast(`Switched to ${newTheme} theme`, 'success');
    });
}

// Analysis Tabs
function initializeAnalysisTabs() {
    const analysisTabsButtons = document.querySelectorAll('.analysis-tab');
    
    analysisTabsButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const targetAnalysis = e.currentTarget.dataset.analysis;
            switchAnalysisTab(targetAnalysis);
        });
    });
}

function switchAnalysisTab(analysisType) {
    const analysisTabsButtons = document.querySelectorAll('.analysis-tab');
    const analysisPanels = document.querySelectorAll('.analysis-panel');
    
    analysisTabsButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.analysis === analysisType);
    });
    
    analysisPanels.forEach(panel => {
        panel.classList.toggle('active', panel.id === `${analysisType}-analysis`);
    });
    
    currentAnalysisTab = analysisType;
}

// Form Handlers - Fixed
function initializeFormHandlers() {
    console.log('Initializing form handlers...');
    
    // Text Analysis - Fixed
    setTimeout(() => {
        const analyzeTextBtn = document.getElementById('analyzeText');
        const textInput = document.getElementById('textInput');
        
        if (analyzeTextBtn && textInput) {
            console.log('Text analysis elements found');
            analyzeTextBtn.addEventListener('click', function(e) {
                e.preventDefault();
                const text = textInput.value.trim();
                console.log('Analyze text clicked, text:', text);
                if (!text) {
                    showToast('Please enter text to analyze', 'error');
                    return;
                }
                analyzeContent('text', text);
            });
        }
        
        // Audio Analysis
        const audioUpload = document.getElementById('audioUpload');
        const audioFile = document.getElementById('audioFile');
        const analyzeAudioBtn = document.getElementById('analyzeAudio');
        
        if (audioUpload && audioFile && analyzeAudioBtn) {
            audioUpload.addEventListener('click', () => audioFile.click());
            
            audioFile.addEventListener('change', function(e) {
                if (e.target.files.length > 0) {
                    const fileName = e.target.files[0].name;
                    audioUpload.querySelector('p').textContent = `Selected: ${fileName}`;
                    analyzeAudioBtn.disabled = false;
                }
            });
            
            analyzeAudioBtn.addEventListener('click', function(e) {
                e.preventDefault();
                const file = audioFile.files[0];
                if (!file) {
                    showToast('Please select an audio file', 'error');
                    return;
                }
                analyzeContent('audio', `Audio: ${file.name}`);
            });
        }
        
        // URL Analysis
        const analyzeUrlBtn = document.getElementById('analyzeUrl');
        const urlInput = document.getElementById('urlInput');
        
        if (analyzeUrlBtn && urlInput) {
            analyzeUrlBtn.addEventListener('click', function(e) {
                e.preventDefault();
                const url = urlInput.value.trim();
                if (!url) {
                    showToast('Please enter a URL to analyze', 'error');
                    return;
                }
                analyzeContent('url', url);
            });
        }
    }, 500);
}

// Content Analysis
async function analyzeContent(type, content) {
    console.log('Starting analysis for:', type, content);
    showLoading();
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const mockResults = generateMockAnalysis(type, content);
    trackUserActivity(type, content, mockResults);
    
    hideLoading();
    showAnalysisResults(mockResults);
    showToast('Analysis completed successfully', 'success');
}

function generateMockAnalysis(type, content) {
    const confidence = Math.random();
    const isAbusive = confidence > 0.6;
    const language = detectLanguage(content);
    
    let translation = null;
    let culturalContext = null;
    let severity = null;
    
    if (isAbusive) {
        if (language === 'Hindi') {
            translation = "Potentially offensive content (translated)";
            culturalContext = "This phrase may be considered offensive in Hindi cultural context";
        } else if (language === 'Punjabi') {
            translation = "Potentially harmful content (translated)";
            culturalContext = "This expression could be inappropriate in Punjabi culture";
        }
        
        severity = confidence > 0.8 ? 'Severe' : confidence > 0.6 ? 'Moderate' : 'Mild';
    }
    
    return {
        type,
        content,
        translation,
        language,
        severity,
        culturalContext,
        confidence,
        isAbusive,
        details: {
            toxicity: confidence,
            threat: Math.random() * 0.5,
            identity_attack: Math.random() * 0.3,
            cultural_sensitivity: Math.random() * 0.4
        }
    };
}

function detectLanguage(content) {
    if (typeof content !== 'string') return 'Unknown';
    
    const hindiPattern = /[\u0900-\u097F]/;
    const punjabiPattern = /[\u0A00-\u0A7F]/;
    const englishHindiMix = /[a-zA-Z].*[\u0900-\u097F]|[\u0900-\u097F].*[a-zA-Z]/;
    
    if (englishHindiMix.test(content)) return 'Hinglish';
    if (hindiPattern.test(content)) return 'Hindi';
    if (punjabiPattern.test(content)) return 'Punjabi';
    return 'English';
}

function trackUserActivity(type, content, results) {
    if (!currentUser) return;
    
    const platform = type === 'url' ? 
        (content.includes('youtube') ? 'YouTube' : 
         content.includes('instagram') ? 'Instagram' : 'URL Analysis') : 
        'Manual Input';
    
    const activity = {
        id: appData.userActivities.length + 1,
        userId: currentUser.id,
        username: currentUser.username,
        activity: `${type.charAt(0).toUpperCase() + type.slice(1)} Analysis`,
        content: content,
        translation: results.translation,
        language: results.language,
        result: results.isAbusive ? 'Flagged' : 'Safe',
        confidence: Math.round(results.confidence * 100),
        platform: platform,
        timestamp: new Date().toISOString()
    };
    
    appData.userActivities.unshift(activity);
    
    // Update user's activity count
    currentUser.activityCount = (currentUser.activityCount || 0) + 1;
    if (results.isAbusive) {
        currentUser.detectionsCount = (currentUser.detectionsCount || 0) + 1;
    }
    
    // Add to detections if flagged
    if (results.isAbusive) {
        const detection = {
            id: detections.length + 1,
            content: content,
            translation: results.translation,
            language: results.language,
            severity: results.severity,
            culturalContext: results.culturalContext,
            confidence: results.confidence,
            status: 'Flagged',
            platform: platform,
            detectedAt: activity.timestamp,
            userId: currentUser.id,
            username: currentUser.username,
            detectionType: results.severity === 'Severe' ? 'Hate Speech' : 'Explicit'
        };
        
        detections.unshift(detection);
        appData.detections.unshift(detection);
    }
    
    // Update tables and stats
    populateRecentDetections();
    populateDetectionsTable();
    if (currentUser.role === 'admin') {
        populateAdminData();
        populateActivityLog();
    }
}

function showAnalysisResults(results) {
    const analysisResults = document.getElementById('analysisResults');
    const confidenceFill = document.getElementById('confidenceFill');
    const confidenceValue = document.getElementById('confidenceValue');
    const resultsContent = document.getElementById('resultsContent');
    
    if (!analysisResults || !confidenceFill || !confidenceValue || !resultsContent) {
        return;
    }

    const confidencePercent = Math.round(results.confidence * 100);
    
    confidenceFill.style.width = `${confidencePercent}%`;
    confidenceValue.textContent = `${confidencePercent}%`;
    
    let translationSection = '';
    if (results.translation) {
        translationSection = `
            <div class="result-row">
                <span class="result-label">Translation:</span>
                <span class="result-value">${results.translation}</span>
            </div>
        `;
    }
    
    let culturalSection = '';
    if (results.culturalContext) {
        culturalSection = `
            <div class="result-item">
                <h4>Cultural Context</h4>
                <p class="cultural-explanation">${results.culturalContext}</p>
            </div>
        `;
    }
    
    resultsContent.innerHTML = `
        <div class="result-item">
            <h4>Content Analysis</h4>
            <div class="result-details">
                <div class="result-row">
                    <span class="result-label">Status:</span>
                    <span class="status ${results.isAbusive ? 'status--error' : 'status--success'}">
                        ${results.isAbusive ? 'Potentially Abusive' : 'Safe Content'}
                    </span>
                </div>
                <div class="result-row">
                    <span class="result-label">Language:</span>
                    <span class="result-value">${results.language}</span>
                </div>
                ${translationSection}
                <div class="result-row">
                    <span class="result-label">Content Type:</span>
                    <span class="result-value">${results.type.toUpperCase()}</span>
                </div>
                ${results.severity ? `
                <div class="result-row">
                    <span class="result-label">Severity:</span>
                    <span class="severity-badge severity-${results.severity.toLowerCase()}">${results.severity}</span>
                </div>
                ` : ''}
            </div>
        </div>
        
        ${culturalSection}
        
        <div class="result-item">
            <h4>Detailed Scores</h4>
            <div class="score-grid">
                <div class="score-item">
                    <span class="score-label">Toxicity</span>
                    <div class="score-bar">
                        <div class="score-fill" style="width: ${Math.round(results.details.toxicity * 100)}%"></div>
                    </div>
                    <span class="score-value">${Math.round(results.details.toxicity * 100)}%</span>
                </div>
                <div class="score-item">
                    <span class="score-label">Threat Level</span>
                    <div class="score-bar">
                        <div class="score-fill" style="width: ${Math.round(results.details.threat * 100)}%"></div>
                    </div>
                    <span class="score-value">${Math.round(results.details.threat * 100)}%</span>
                </div>
                <div class="score-item">
                    <span class="score-label">Cultural Sensitivity</span>
                    <div class="score-bar">
                        <div class="score-fill" style="width: ${Math.round(results.details.cultural_sensitivity * 100)}%"></div>
                    </div>
                    <span class="score-value">${Math.round(results.details.cultural_sensitivity * 100)}%</span>
                </div>
            </div>
        </div>
    `;
    
    addResultStyles();
    analysisResults.classList.remove('hidden');
}

function addResultStyles() {
    if (document.querySelector('#result-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'result-styles';
    style.textContent = `
        .result-item { margin-bottom: var(--space-24); padding-bottom: var(--space-16); border-bottom: 1px solid var(--color-card-border-inner); }
        .result-item:last-child { border-bottom: none; margin-bottom: 0; }
        .result-item h4 { margin-bottom: var(--space-12); color: var(--color-text); }
        .result-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--space-8); }
        .result-label { font-weight: var(--font-weight-medium); color: var(--color-text-secondary); font-size: var(--font-size-sm); }
        .result-value { color: var(--color-text); font-size: var(--font-size-sm); }
        .cultural-explanation { color: var(--color-text-secondary); font-size: var(--font-size-sm); line-height: 1.5; margin: 0; }
        .score-grid { display: flex; flex-direction: column; gap: var(--space-12); }
        .score-item { display: grid; grid-template-columns: 140px 1fr 60px; align-items: center; gap: var(--space-12); }
        .score-label { font-size: var(--font-size-sm); font-weight: var(--font-weight-medium); color: var(--color-text-secondary); }
        .score-bar { height: 8px; background: var(--color-secondary); border-radius: var(--radius-full); overflow: hidden; }
        .score-fill { height: 100%; background: linear-gradient(90deg, #10b981, #f59e0b, #ef4444); border-radius: var(--radius-full); transition: width var(--duration-normal) var(--ease-standard); }
        .score-value { font-size: var(--font-size-sm); font-weight: var(--font-weight-bold); color: var(--color-text); text-align: right; }
        .severity-badge { padding: var(--space-2) var(--space-6); border-radius: var(--radius-sm); font-size: var(--font-size-xs); font-weight: var(--font-weight-medium); }
    `;
    document.head.appendChild(style);
}

// Statistics Animation
function animateStatistics() {
    const statValues = document.querySelectorAll('.stat-value[data-target]');
    
    statValues.forEach(stat => {
        const target = parseInt(stat.dataset.target);
        const duration = 2000;
        const stepTime = 50;
        const steps = duration / stepTime;
        const increment = target / steps;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            stat.textContent = Math.floor(current);
        }, stepTime);
    });
}

// Populate Recent Detections
function populateRecentDetections() {
    const recentDetectionsTable = document.getElementById('recentDetectionsTable');
    if (!recentDetectionsTable) return;
    
    const userDetections = currentUser?.role === 'admin' ? 
        appData.detections : 
        appData.detections.filter(d => d.userId === currentUser?.id);
    
    recentDetectionsTable.innerHTML = userDetections.slice(0, 5).map(detection => {
        const confidenceClass = getConfidenceClass(detection.confidence);
        const confidencePercent = Math.round(detection.confidence * 100);
        const severityClass = detection.severity ? `severity-${detection.severity.toLowerCase()}` : '';
        
        return `
            <div class="table-row">
                <div class="table-cell">
                    <div class="content-preview" title="${detection.content}">${detection.content}</div>
                </div>
                <div class="table-cell">
                    <div class="translation-preview" title="${detection.translation || 'No translation available'}">${detection.translation || 'N/A'}</div>
                </div>
                <div class="table-cell">
                    <span class="confidence-badge ${confidenceClass}">${confidencePercent}%</span>
                </div>
                <div class="table-cell">
                    <span class="severity-badge ${severityClass}">${detection.severity || 'N/A'}</span>
                </div>
                <div class="table-cell">
                    <span>${detection.platform}</span>
                </div>
                <div class="table-cell">
                    <span>${detection.language}</span>
                </div>
            </div>
        `;
    }).join('');
}

// Populate Detections Table
function populateDetectionsTable() {
    const detectionsTableBody = document.getElementById('detectionsTableBody');
    if (!detectionsTableBody) return;
    
    const userDetections = currentUser?.role === 'admin' ? 
        filteredDetections : 
        filteredDetections.filter(d => d.userId === currentUser?.id);
    
    detectionsTableBody.innerHTML = userDetections.map(detection => {
        const confidenceClass = getConfidenceClass(detection.confidence);
        const confidencePercent = Math.round(detection.confidence * 100);
        const date = new Date(detection.detectedAt).toLocaleDateString();
        const severityClass = detection.severity ? `severity-${detection.severity.toLowerCase()}` : '';
        
        return `
            <div class="table-row">
                <div class="table-cell">
                    <input type="checkbox" data-id="${detection.id}">
                </div>
                <div class="table-cell">
                    <div class="content-preview" title="${detection.content}">${detection.content}</div>
                </div>
                <div class="table-cell">
                    <div class="translation-preview" title="${detection.translation || 'No translation available'}">${detection.translation || 'N/A'}</div>
                </div>
                <div class="table-cell">
                    <span class="severity-badge ${severityClass}">${detection.severity || 'N/A'}</span>
                </div>
                <div class="table-cell">
                    <span class="confidence-badge ${confidenceClass}">${confidencePercent}%</span>
                </div>
                <div class="table-cell">
                    <span class="status ${getStatusClass(detection.status)}">${detection.status}</span>
                </div>
                <div class="table-cell">
                    <span>${detection.platform}</span>
                </div>
                <div class="table-cell">
                    <span>${detection.language}</span>
                </div>
                <div class="table-cell">
                    <div class="cultural-context" title="${detection.culturalContext || 'No cultural context available'}">${detection.culturalContext || 'N/A'}</div>
                </div>
                <div class="table-cell">
                    <span>${date}</span>
                </div>
                <div class="table-cell">
                    <button class="btn btn--sm btn--outline" onclick="viewDetection(${detection.id})">View</button>
                </div>
            </div>
        `;
    }).join('');
}

// Profile Management
function initializeProfileHandlers() {
    setTimeout(() => {
        const updateProfileBtn = document.getElementById('updateProfile');
        const changePasswordBtn = document.getElementById('changePassword');
        
        if (updateProfileBtn) {
            updateProfileBtn.addEventListener('click', updateProfile);
        }
        
        if (changePasswordBtn) {
            changePasswordBtn.addEventListener('click', changePassword);
        }
    }, 1000);
}

function updateProfile() {
    if (!currentUser) return;
    
    const editName = document.getElementById('editName');
    const editEmail = document.getElementById('editEmail');
    
    const newName = editName?.value?.trim();
    const newEmail = editEmail?.value?.trim();
    
    if (newName && newName !== currentUser.name) {
        currentUser.name = newName;
        updateUserInterface();
        showToast('Profile updated successfully', 'success');
    }
    
    if (newEmail && newEmail !== currentUser.email) {
        currentUser.email = newEmail;
        updateUserInterface();
        showToast('Email updated successfully', 'success');
    }
}

function changePassword() {
    const currentPassword = document.getElementById('currentPassword')?.value;
    const newPassword = document.getElementById('newPassword')?.value;
    const confirmPassword = document.getElementById('confirmPassword')?.value;
    
    if (!currentPassword || !newPassword || !confirmPassword) {
        showToast('Please fill in all password fields', 'error');
        return;
    }
    
    if (currentPassword !== currentUser.password) {
        showToast('Current password is incorrect', 'error');
        return;
    }
    
    if (newPassword !== confirmPassword) {
        showToast('New passwords do not match', 'error');
        return;
    }
    
    currentUser.password = newPassword;
    showToast('Password changed successfully', 'success');
    
    // Clear password fields
    ['currentPassword', 'newPassword', 'confirmPassword'].forEach(id => {
        const field = document.getElementById(id);
        if (field) field.value = '';
    });
}

function updateProfileData() {
    if (!currentUser) return;
    
    const initials = currentUser.name.split(' ').map(n => n[0]).join('');
    
    const profileName = document.getElementById('profileName');
    const profileRole = document.getElementById('profileRole');
    const profileEmail = document.getElementById('profileEmail');
    const profileJoinDate = document.getElementById('profileJoinDate');
    const profileAvatar = document.getElementById('profileAvatar');
    const editName = document.getElementById('editName');
    const editEmail = document.getElementById('editEmail');
    const userDetections = document.getElementById('userDetections');
    const userAnalyses = document.getElementById('userAnalyses');
    const userJoinDays = document.getElementById('userJoinDays');
    
    if (profileName) profileName.textContent = currentUser.name;
    if (profileRole) profileRole.textContent = currentUser.role.charAt(0).toUpperCase() + currentUser.role.slice(1);
    if (profileEmail) profileEmail.textContent = currentUser.email;
    if (profileJoinDate) profileJoinDate.textContent = new Date(currentUser.joinDate).toLocaleDateString();
    if (profileAvatar) profileAvatar.textContent = initials;
    if (editName) editName.value = currentUser.name;
    if (editEmail) editEmail.value = currentUser.email;
    
    // Update activity stats
    if (userDetections) userDetections.textContent = currentUser.detectionsCount || 0;
    if (userAnalyses) userAnalyses.textContent = currentUser.activityCount || 0;
    
    // Calculate days since joining
    const joinDate = new Date(currentUser.joinDate);
    const today = new Date();
    const daysDiff = Math.floor((today - joinDate) / (1000 * 60 * 60 * 24));
    if (userJoinDays) userJoinDays.textContent = daysDiff;
}

// Admin Panel
function initializeAdminHandlers() {
    setTimeout(() => {
        const adminSearch = document.getElementById('adminSearch');
        const roleFilter = document.getElementById('roleFilter');
        const exportUserData = document.getElementById('exportUserData');
        const exportDetailedData = document.getElementById('exportDetailedData');
        const refreshActivityLog = document.getElementById('refreshActivityLog');
        
        if (adminSearch) {
            adminSearch.addEventListener('input', filterAdminData);
        }
        
        if (roleFilter) {
            roleFilter.addEventListener('change', filterAdminData);
        }
        
        if (exportUserData) {
            exportUserData.addEventListener('click', exportUserDatabase);
        }
        
        if (exportDetailedData) {
            exportDetailedData.addEventListener('click', exportDetailedActivityData);
        }
        
        if (refreshActivityLog) {
            refreshActivityLog.addEventListener('click', populateActivityLog);
        }
    }, 1000);
}

function populateAdminData() {
    const adminTableBody = document.getElementById('adminTableBody');
    const totalUsers = document.getElementById('totalUsers');
    const activeUsers = document.getElementById('activeUsers');
    const totalAnalyses = document.getElementById('totalAnalyses');
    const abusiveDetections = document.getElementById('abusiveDetections');
    
    if (!adminTableBody) return;
    
    // Update admin stats
    if (totalUsers) totalUsers.textContent = appData.users.length;
    if (activeUsers) activeUsers.textContent = appData.users.filter(u => u.activityCount > 0).length;
    if (totalAnalyses) totalAnalyses.textContent = appData.userActivities.length;
    if (abusiveDetections) abusiveDetections.textContent = appData.detections.filter(d => d.status === 'Flagged').length;
    
    // Populate user table
    const userData = appData.users.map(user => {
        const userActivities = appData.userActivities.filter(a => a.userId === user.id);
        const userDetections = appData.detections.filter(d => d.userId === user.id);
        const abusiveCount = userDetections.filter(d => d.status === 'Flagged').length;
        
        const queries = userActivities.slice(0, 3).map(a => a.content.substring(0, 30) + '...').join(', ') || 'No searches yet';
        const platforms = [...new Set(userActivities.map(a => a.platform))].join(', ') || 'None';
        const languages = [...new Set(userActivities.map(a => a.language))].join(', ') || 'None';
        const lastActivity = userActivities.length > 0 ? 
            new Date(userActivities[0].timestamp).toLocaleDateString() : 
            new Date(user.lastLogin).toLocaleDateString();
        
        return `
            <div class="admin-table-row">
                <div class="admin-table-cell">
                    <div class="user-info">
                        <div class="user-name">${user.name}</div>
                        <div class="user-email">${user.email}</div>
                        <span class="user-role status ${user.role === 'admin' ? 'status--warning' : 'status--info'}">${user.role}</span>
                    </div>
                </div>
                <div class="admin-table-cell">
                    <div class="query-list" title="${userActivities.map(a => a.content).join(', ')}">${queries}</div>
                </div>
                <div class="admin-table-cell">
                    <div class="platform-usage">${platforms}</div>
                </div>
                <div class="admin-table-cell">
                    <div class="detection-count">${userDetections.length}</div>
                </div>
                <div class="admin-table-cell">
                    <div>${languages}</div>
                </div>
                <div class="admin-table-cell">
                    <div class="abusive-content">${abusiveCount}</div>
                </div>
                <div class="admin-table-cell">
                    <div>${lastActivity}</div>
                </div>
                <div class="admin-table-cell">
                    <button class="btn btn--sm btn--outline" onclick="viewUserDetails(${user.id})">Details</button>
                </div>
            </div>
        `;
    }).join('');
    
    adminTableBody.innerHTML = userData;
}

function populateActivityLog() {
    const activityLogBody = document.getElementById('activityLogBody');
    if (!activityLogBody) return;
    
    const recentActivities = appData.userActivities.slice(0, 20);
    
    activityLogBody.innerHTML = recentActivities.map(activity => {
        const user = appData.users.find(u => u.id === activity.userId);
        const timestamp = new Date(activity.timestamp).toLocaleString();
        
        return `
            <div class="log-table-row">
                <div class="log-table-cell">${user?.name || activity.username}</div>
                <div class="log-table-cell">${activity.activity}</div>
                <div class="log-table-cell">
                    <div class="log-content" title="${activity.content}">${activity.content}</div>
                </div>
                <div class="log-table-cell">
                    <div class="log-translation">${activity.translation || 'N/A'}</div>
                </div>
                <div class="log-table-cell">${activity.platform}</div>
                <div class="log-table-cell">
                    <span class="log-result ${activity.result.toLowerCase()}">${activity.result}</span>
                </div>
                <div class="log-table-cell">${activity.language}</div>
                <div class="log-table-cell">${timestamp}</div>
            </div>
        `;
    }).join('');
}

function filterAdminData() {
    // For now, just repopulate - in a real app, this would filter the data
    populateAdminData();
}

function exportUserDatabase() {
    console.log('Exporting user database to Excel...');
    
    // Create comprehensive user database CSV
    const csvData = [
        ['User ID', 'Name', 'Username', 'Email', 'Role', 'Join Date', 'Last Login', 'Total Searches', 'Total Detections', 'Abusive Content Detected', 'Languages Used', 'Platforms Used', 'Activity Count']
    ];
    
    appData.users.forEach(user => {
        const userActivities = appData.userActivities.filter(a => a.userId === user.id);
        const userDetections = appData.detections.filter(d => d.userId === user.id);
        const abusiveCount = userDetections.filter(d => d.status === 'Flagged').length;
        const languages = [...new Set(userActivities.map(a => a.language))].join('; ');
        const platforms = [...new Set(userActivities.map(a => a.platform))].join('; ');
        
        csvData.push([
            user.id,
            user.name,
            user.username,
            user.email,
            user.role,
            user.joinDate,
            new Date(user.lastLogin).toLocaleString(),
            userActivities.length,
            userDetections.length,
            abusiveCount,
            languages || 'None',
            platforms || 'None',
            user.activityCount || 0
        ]);
    });
    
    downloadCSV(csvData, 'watchdog_user_database.csv');
    showToast('User database exported successfully', 'success');
}

function exportDetailedActivityData() {
    console.log('Exporting detailed activity data...');
    
    // Create detailed activity CSV with all user actions and detections
    const csvData = [
        ['Timestamp', 'User ID', 'Username', 'User Email', 'Activity Type', 'Content Analyzed', 'English Translation', 'Language', 'Result', 'Confidence %', 'Platform', 'Severity', 'Cultural Context', 'Detection Type']
    ];
    
    // Add user activities
    appData.userActivities.forEach(activity => {
        const user = appData.users.find(u => u.id === activity.userId);
        const detection = appData.detections.find(d => 
            d.content === activity.content && d.userId === activity.userId
        );
        
        csvData.push([
            new Date(activity.timestamp).toLocaleString(),
            activity.userId,
            activity.username,
            user?.email || 'N/A',
            activity.activity,
            `"${activity.content}"`,
            `"${activity.translation || 'No translation'}"`,
            activity.language,
            activity.result,
            activity.confidence,
            activity.platform,
            detection?.severity || 'N/A',
            `"${detection?.culturalContext || 'No cultural context'}"`,
            detection?.detectionType || 'N/A'
        ]);
    });
    
    downloadCSV(csvData, 'watchdog_detailed_activity_report.csv');
    showToast('Detailed activity data exported successfully', 'success');
}

function downloadCSV(csvData, filename) {
    const csvContent = csvData.map(row => 
        row.map(field => {
            // Handle fields that might contain commas or quotes
            if (typeof field === 'string' && (field.includes(',') || field.includes('"'))) {
                return `"${field.replace(/"/g, '""')}"`;
            }
            return field;
        }).join(',')
    ).join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Settings
function initializeSettings() {
    setTimeout(() => {
        const sensitivitySlider = document.getElementById('sensitivitySlider');
        const saveSettings = document.getElementById('saveSettings');
        const resetSettings = document.getElementById('resetSettings');
        
        if (sensitivitySlider) {
            sensitivitySlider.addEventListener('input', function(e) {
                const value = parseInt(e.target.value);
                const description = document.querySelector('.sensitivity-description');
                if (description) {
                    let level = 'Low';
                    if (value >= 7) level = 'High';
                    else if (value >= 4) level = 'Medium';
                    
                    description.textContent = `Current: ${level} sensitivity - ${getSensitivityDescription(level)}`;
                }
            });
        }
        
        if (saveSettings) {
            saveSettings.addEventListener('click', function() {
                showToast('Settings saved successfully', 'success');
            });
        }
        
        if (resetSettings) {
            resetSettings.addEventListener('click', function() {
                if (confirm('Are you sure you want to reset all settings to default?')) {
                    showToast('Settings reset to default', 'success');
                }
            });
        }
    }, 1000);
}

function getSensitivityDescription(level) {
    switch (level) {
        case 'High':
            return 'More likely to flag borderline content';
        case 'Medium':
            return 'Balanced detection approach';
        case 'Low':
            return 'Only flags clearly abusive content';
        default:
            return 'Balanced detection approach';
    }
}

// Utility Functions
function getConfidenceClass(confidence) {
    if (confidence >= 0.7) return 'confidence-high';
    if (confidence >= 0.4) return 'confidence-medium';
    return 'confidence-low';
}

function getStatusClass(status) {
    switch (status) {
        case 'Flagged':
            return 'status--error';
        case 'Reviewed - Safe':
            return 'status--success';
        case 'Reviewed - Abusive':
            return 'status--warning';
        default:
            return 'status--info';
    }
}

// Filter Functions
function initializeFilters() {
    setTimeout(() => {
        const statusFilter = document.getElementById('statusFilter');
        const platformFilter = document.getElementById('platformFilter');
        const severityFilter = document.getElementById('severityFilter');
        const searchInput = document.getElementById('searchDetections');
        const selectAll = document.getElementById('selectAll');
        
        if (statusFilter) statusFilter.addEventListener('change', applyFilters);
        if (platformFilter) platformFilter.addEventListener('change', applyFilters);
        if (severityFilter) severityFilter.addEventListener('change', applyFilters);
        if (searchInput) searchInput.addEventListener('input', applyFilters);
        
        if (selectAll) {
            selectAll.addEventListener('change', function(e) {
                const checkboxes = document.querySelectorAll('input[type="checkbox"][data-id]');
                checkboxes.forEach(cb => cb.checked = e.target.checked);
            });
        }
        
        // Bulk actions
        const bulkApprove = document.getElementById('bulkApprove');
        const bulkFlag = document.getElementById('bulkFlag');
        const exportData = document.getElementById('exportData');
        
        if (bulkApprove) {
            bulkApprove.addEventListener('click', function() {
                const selectedIds = getSelectedDetections();
                if (selectedIds.length > 0) {
                    showToast(`Marked ${selectedIds.length} detection(s) as safe`, 'success');
                } else {
                    showToast('No detections selected', 'error');
                }
            });
        }
        
        if (bulkFlag) {
            bulkFlag.addEventListener('click', function() {
                const selectedIds = getSelectedDetections();
                if (selectedIds.length > 0) {
                    showToast(`Flagged ${selectedIds.length} detection(s) as abusive`, 'success');
                } else {
                    showToast('No detections selected', 'error');
                }
            });
        }
        
        if (exportData) {
            exportData.addEventListener('click', exportDetections);
        }
    }, 1000);
}

function applyFilters() {
    const statusFilter = document.getElementById('statusFilter');
    const platformFilter = document.getElementById('platformFilter');
    const severityFilter = document.getElementById('severityFilter');
    const searchInput = document.getElementById('searchDetections');
    
    let filtered = [...detections];
    
    // Filter by user if not admin
    if (currentUser?.role !== 'admin') {
        filtered = filtered.filter(d => d.userId === currentUser?.id);
    }
    
    if (statusFilter && statusFilter.value !== 'all') {
        const statusMap = {
            'flagged': 'Flagged',
            'safe': 'Reviewed - Safe'
        };
        filtered = filtered.filter(d => d.status === statusMap[statusFilter.value]);
    }
    
    if (platformFilter && platformFilter.value !== 'all') {
        filtered = filtered.filter(d => d.platform.toLowerCase().includes(platformFilter.value.toLowerCase()));
    }
    
    if (severityFilter && severityFilter.value !== 'all') {
        filtered = filtered.filter(d => d.severity && d.severity.toLowerCase() === severityFilter.value.toLowerCase());
    }
    
    if (searchInput && searchInput.value) {
        const searchTerm = searchInput.value.toLowerCase();
        filtered = filtered.filter(d => 
            d.content.toLowerCase().includes(searchTerm) ||
            d.language.toLowerCase().includes(searchTerm) ||
            d.platform.toLowerCase().includes(searchTerm) ||
            (d.translation && d.translation.toLowerCase().includes(searchTerm))
        );
    }
    
    filteredDetections = filtered;
    populateDetectionsTable();
}

function getSelectedDetections() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"][data-id]:checked');
    return Array.from(checkboxes).map(cb => parseInt(cb.dataset.id));
}

function exportDetections() {
    const csvData = [
        ['ID', 'Content', 'Translation', 'Language', 'Severity', 'Confidence', 'Status', 'Platform', 'Cultural Context', 'Date', 'User']
    ];
    
    filteredDetections.forEach(d => {
        csvData.push([
            d.id,
            `"${d.content}"`,
            `"${d.translation || 'N/A'}"`,
            d.language,
            d.severity || 'N/A',
            Math.round(d.confidence * 100) + '%',
            d.status,
            d.platform,
            `"${d.culturalContext || 'N/A'}"`,
            new Date(d.detectedAt).toLocaleString(),
            d.username
        ]);
    });
    
    downloadCSV(csvData, 'watchdog_detections.csv');
    showToast('Detection data exported successfully', 'success');
}

// Global Functions
window.viewDetection = function(id) {
    const detection = detections.find(d => d.id === id);
    if (detection) {
        showToast(`Viewing detection: ${detection.content.substring(0, 50)}...`, 'info');
    }
};

window.viewUserDetails = function(userId) {
    const user = appData.users.find(u => u.id === userId);
    if (user) {
        const userActivities = appData.userActivities.filter(a => a.userId === userId);
        const userDetections = appData.detections.filter(d => d.userId === userId);
        showToast(`${user.name}: ${userActivities.length} activities, ${userDetections.length} detections`, 'info');
    }
};

// Loading and Toast Functions
function showLoading() {
    const loadingOverlay = document.getElementById('loadingOverlay');
    if (loadingOverlay) {
        loadingOverlay.classList.remove('hidden');
    }
}

function hideLoading() {
    const loadingOverlay = document.getElementById('loadingOverlay');
    if (loadingOverlay) {
        loadingOverlay.classList.add('hidden');
    }
}

function showToast(message, type = 'info') {
    const toastContainer = document.getElementById('toastContainer');
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<div class="toast-content"><p>${message}</p></div>`;
    
    toastContainer.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease-in forwards';
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    }, 4000);
}
