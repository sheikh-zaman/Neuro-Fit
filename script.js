// Muscle Group Activation Data
const muscleData = {
    chest: {
        activationLevel: 85,
        neuralFreq: 45,
        fiberRecruit: 78,
        position: { top: '30%', left: '50%', width: '200px', height: '200px' }
    },
    back: {
        activationLevel: 82,
        neuralFreq: 42,
        fiberRecruit: 75,
        position: { top: '25%', left: '45%', width: '220px', height: '250px' }
    },
    shoulders: {
        activationLevel: 88,
        neuralFreq: 48,
        fiberRecruit: 82,
        position: { top: '20%', left: '50%', width: '180px', height: '180px' }
    },
    biceps: {
        activationLevel: 75,
        neuralFreq: 40,
        fiberRecruit: 70,
        position: { top: '40%', left: '30%', width: '120px', height: '150px' }
    },
    triceps: {
        activationLevel: 80,
        neuralFreq: 43,
        fiberRecruit: 73,
        position: { top: '40%', left: '60%', width: '120px', height: '150px' }
    },
    legs: {
        activationLevel: 90,
        neuralFreq: 50,
        fiberRecruit: 85,
        position: { top: '50%', left: '45%', width: '200px', height: '300px' }
    }
};

// Initialize muscle selector
document.addEventListener('DOMContentLoaded', function() {
    initializeMuscleSelector();
    initializeHeroActivation();
    initializeCalculator();
});

// Muscle Selector Functionality
function initializeMuscleSelector() {
    const muscleButtons = document.querySelectorAll('.muscle-btn');
    const activationZone = document.getElementById('activationZone');
    const neuralPattern = document.getElementById('neuralPattern');
    const activationLevel = document.getElementById('activationLevel');
    const neuralFreq = document.getElementById('neuralFreq');
    const fiberRecruit = document.getElementById('fiberRecruit');

    muscleButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            muscleButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            const muscle = this.dataset.muscle;
            const data = muscleData[muscle];

            // Update activation zone
            activationZone.style.top = data.position.top;
            activationZone.style.left = data.position.left;
            activationZone.style.width = data.position.width;
            activationZone.style.height = data.position.height;

            // Animate values
            animateValue(activationLevel, 0, data.activationLevel, 1000, '%');
            animateValue(neuralFreq, 0, data.neuralFreq, 1000, ' Hz');
            animateValue(fiberRecruit, 0, data.fiberRecruit, 1000, '%');

            // Create neural pattern
            createNeuralPattern(neuralPattern, data);
        });
    });

    // Initialize with chest
    muscleButtons[0].click();
}

// Create neural activation pattern visualization
function createNeuralPattern(container, data) {
    container.innerHTML = '';
    const numNeurons = 15;
    const numConnections = 20;

    // Create neurons
    for (let i = 0; i < numNeurons; i++) {
        const neuron = document.createElement('div');
        neuron.className = 'neuron active';
        neuron.style.top = Math.random() * 80 + 10 + '%';
        neuron.style.left = Math.random() * 80 + 10 + '%';
        neuron.style.animationDelay = Math.random() * 2 + 's';
        container.appendChild(neuron);
    }

    // Create connections
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'connections');
    svg.setAttribute('viewBox', '0 0 100 100');
    svg.setAttribute('preserveAspectRatio', 'none');
    svg.style.position = 'absolute';
    svg.style.top = '0';
    svg.style.left = '0';
    svg.style.width = '100%';
    svg.style.height = '100%';

    for (let i = 0; i < numConnections; i++) {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', Math.random() * 100);
        line.setAttribute('y1', Math.random() * 100);
        line.setAttribute('x2', Math.random() * 100);
        line.setAttribute('y2', Math.random() * 100);
        line.setAttribute('class', 'connection');
        line.style.animationDelay = Math.random() * 3 + 's';
        svg.appendChild(line);
    }

    container.appendChild(svg);
}

// Animate numeric values
function animateValue(element, start, end, duration, suffix = '') {
    const range = end - start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        element.textContent = Math.round(current) + suffix;
        if (current === end) {
            clearInterval(timer);
        }
    }, stepTime);
}

// Hero Activation Animation
function initializeHeroActivation() {
    const neurons = document.querySelectorAll('#heroActivation .neuron');
    neurons.forEach((neuron, index) => {
        neuron.style.animationDelay = (index * 0.2) + 's';
    });
}

// Workout Optimization Calculator
function initializeCalculator() {
    // Add input event listeners for real-time updates
    const inputs = document.querySelectorAll('.calculator-form input, .calculator-form select');
    inputs.forEach(input => {
        input.addEventListener('change', function() {
            // Optional: Add real-time preview
        });
    });
}

function calculateOptimization() {
    const bodyWeight = parseFloat(document.getElementById('bodyWeight').value) || 75;
    const workoutType = document.getElementById('workoutType').value;
    const experience = document.getElementById('experience').value;
    const targetMuscle = document.getElementById('targetMuscle').value;

    // Base calculations
    let baseFreq = 40;
    let basePulse = 200;
    let baseIntensity = 50;
    let baseDuration = 20;
    let baseActivation = 60;
    let performanceBoost = 25;

    // Adjust based on workout type
    switch(workoutType) {
        case 'strength':
            baseFreq = 50;
            basePulse = 250;
            baseIntensity = 70;
            baseDuration = 25;
            baseActivation = 85;
            performanceBoost = 35;
            break;
        case 'endurance':
            baseFreq = 35;
            basePulse = 150;
            baseIntensity = 45;
            baseDuration = 30;
            baseActivation = 70;
            performanceBoost = 20;
            break;
        case 'hypertrophy':
            baseFreq = 45;
            basePulse = 220;
            baseIntensity = 65;
            baseDuration = 30;
            baseActivation = 80;
            performanceBoost = 30;
            break;
        case 'power':
            baseFreq = 55;
            basePulse = 280;
            baseIntensity = 75;
            baseDuration = 20;
            baseActivation = 90;
            performanceBoost = 40;
            break;
    }

    // Adjust based on experience
    switch(experience) {
        case 'beginner':
            baseIntensity *= 0.7;
            baseDuration *= 0.8;
            performanceBoost *= 0.9;
            break;
        case 'intermediate':
            baseIntensity *= 0.85;
            performanceBoost *= 0.95;
            break;
        case 'advanced':
            baseIntensity *= 1.1;
            baseDuration *= 1.1;
            performanceBoost *= 1.1;
            break;
    }

    // Adjust based on body weight (heavier = more intensity needed)
    const weightMultiplier = 1 + (bodyWeight - 75) / 200;
    baseIntensity *= weightMultiplier;
    basePulse *= weightMultiplier;

    // Adjust based on target muscle
    const muscleData = {
        chest: { freq: 0, intensity: 0, activation: 0 },
        back: { freq: -2, intensity: -3, activation: -2 },
        shoulders: { freq: 3, intensity: 5, activation: 3 },
        biceps: { freq: -5, intensity: -8, activation: -5 },
        triceps: { freq: -2, intensity: -5, activation: -3 },
        legs: { freq: 5, intensity: 8, activation: 5 }
    };

    const muscleAdjust = muscleData[targetMuscle] || { freq: 0, intensity: 0, activation: 0 };
    baseFreq += muscleAdjust.freq;
    baseIntensity += muscleAdjust.intensity;
    baseActivation += muscleAdjust.activation;

    // Ensure values are within reasonable ranges
    baseFreq = Math.max(30, Math.min(60, baseFreq));
    basePulse = Math.max(100, Math.min(300, basePulse));
    baseIntensity = Math.max(30, Math.min(90, baseIntensity));
    baseDuration = Math.max(15, Math.min(45, baseDuration));
    baseActivation = Math.max(50, Math.min(95, baseActivation));
    performanceBoost = Math.max(15, Math.min(50, performanceBoost));

    // Update results with animation
    animateValue(document.getElementById('stimFreq'), 0, Math.round(baseFreq), 1000, ' Hz');
    animateValue(document.getElementById('pulseDur'), 0, Math.round(basePulse), 1000, ' μs');
    animateValue(document.getElementById('intensity'), 0, Math.round(baseIntensity), 1000, ' %');
    animateValue(document.getElementById('sessionDur'), 0, Math.round(baseDuration), 1000, ' min');
    animateValue(document.getElementById('expectedAct'), 0, Math.round(baseActivation), 1000, ' %');
    animateValue(document.getElementById('perfBoost'), 0, Math.round(performanceBoost), 1000, ' %');

    // Add visual feedback
    const results = document.getElementById('calculatorResults');
    results.style.borderColor = 'var(--energy-yellow)';
    setTimeout(() => {
        results.style.borderColor = 'rgba(41, 98, 255, 0.3)';
    }, 2000);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

