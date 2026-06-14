# 🚀 AWS AppSec DevSecOps CI/CD Lab

A hands-on Application Security portfolio project demonstrating a secure CI/CD pipeline using AWS, Jenkins, GitHub Actions, Docker, and open-source security tools.

## 📖 Overview

This project demonstrates how security controls can be integrated into CI/CD workflows to support Secure SDLC and DevSecOps practices.

The lab automates source code checkout, secret scanning, SAST, vulnerability scanning, configuration scanning, container security checks, Docker deployment, DAST, and security report generation.

## 🏗️ Architecture

```text
GitHub Repository
   ↓
Jenkins Pipeline
   ↓
Gitleaks Secret Scan
   ↓
TruffleHog Secret Scan
   ↓
Trivy Filesystem Scan
   ↓
Checkov Configuration Scan
   ↓
Docker Build
   ↓
Trivy Image Scan
   ↓
Docker Deployment on AWS EC2
   ↓
OWASP ZAP DAST

GitHub Actions
   ↓
CodeQL SAST
   ↓
GitHub Code Scanning Alerts
