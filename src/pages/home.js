import React, { useEffect } from "react";
//import "./Home.css"; // copy your style.css here and rename to Home.css
import feather from "feather-icons";

export default function Home() {
  useEffect(() => {
    feather.replace(); // enable feather icons after render
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Predict the Unpredictable. Protect Your People.
          </h1>
          <p className="hero-subtitle">
            Introducing the future of mine safety: An AI-powered system for
            real-time rockfall prediction and alerts in open-pit mines.
          </p>
          <a href="#features" className="cta-button">
            Get Started
          </a>
        </div>
        <div className="hero-overlay"></div>
      </section>

      {/* Features Section */}
        <section id="features" class="features-section">
            <div class="container">
                <h2 class="section-title">Revolutionizing Mine Safety with AI</h2>
                <p class="section-subtitle">Our system provides unparalleled insight and proactive protection.</p>
                <div class="features-grid">
                    <div class="feature-card">
                        <i data-feather="activity"></i>
                        <h3>Real-Time Monitoring</h3>
                        <p>Utilizes a network of IoT sensors to continuously monitor geological stability, seismic activity, and environmental factors.</p>
                    </div>
                    <div class="feature-card">
                        <i data-feather="cpu"></i>
                        <h3>AI-Powered Prediction</h3>
                        <p>Our proprietary machine learning model analyzes incoming data to identify patterns and predict potential rockfall events with high accuracy.</p>
                    </div>
                    <div class="feature-card">
                        <i data-feather="bell"></i>
                        <h3>Instantaneous Alerts</h3>
                        <p>Automatically dispatches multi-channel alerts to personnel, control rooms, and automated systems the moment a threat is detected.</p>
                    </div>
                    <div class="feature-card">
                        <i data-feather="bar-chart-2"></i>
                        <h3>Advanced Analytics</h3>
                        <p>Access a comprehensive dashboard with historical data, trend analysis, and risk heatmaps to inform long-term safety strategies.</p>
                    </div>
                </div>
            </div>
        </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works-section">
        <div className="container">
          <h2 className="section-title">Simple, Powerful, Effective</h2>
          <div className="steps-container">
            <div className="step">
              <div className="step-icon">
                <i data-feather="wifi"></i>
              </div>
              <h4>1. Collect</h4>
              <p>
                Data is gathered from LiDAR, radar, and seismic sensors placed
                strategically across the mine site.
              </p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step">
              <div className="step-icon">
                <i data-feather="cloud-lightning"></i>
              </div>
              <h4>2. Analyze</h4>
              <p>
                Our cloud-based AI engine processes terabytes of data in
                real-time, searching for critical risk indicators.
              </p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step">
              <div className="step-icon">
                <i data-feather="alert-triangle"></i>
              </div>
              <h4>3. Alert</h4>
              <p>
                Critical alerts are sent to mobile devices, on-site sirens, and
                operational dashboards, ensuring immediate action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-cta-section">
        <div className="container about-cta-content">
          <div className="about-text">
            <h2 className="section-title">Built by Experts, for Experts</h2>
            <p>
              CODEZEN was founded by a team of software engineers and AI
              specialists dedicated to one mission: eliminating preventable
              accidents in the mining industry. We combine decades of
              on-the-ground experience with cutting-edge technology to create a
              system you can trust.
            </p>
            <a href="#" className="cta-button">
              Learn More About Our Mission
            </a>
          </div>
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop"
              alt="Team of engineers discussing plans"
            />
          </div>
        </div>
      </section>
    </div>
  );
}