pipeline {
    agent any

    stages {

        stage('List Files') {
            steps {
                sh 'pwd'
                sh 'ls -la'
            }
        }

        stage('Gitleaks Scan') {
            steps {
                sh 'gitleaks detect --source . --no-git --config .gitleaks.toml'
            }
        }

        stage('Trivy FS Scan') {
            steps {
                sh 'trivy fs . --severity HIGH,CRITICAL --exit-code 0'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t aws-appsec-lab:latest .'
            }
        }

        stage('Trivy Image Scan') {
            steps {
                sh 'trivy image aws-appsec-lab:latest --severity HIGH,CRITICAL --exit-code 0'
            }
        }

        stage('Docker Test Run') {
            steps {
                sh 'docker rm -f aws-appsec-lab || true'
                sh 'docker run -d --name aws-appsec-lab -p 8081:80 aws-appsec-lab:latest'
                sh 'docker ps'
            }
        }
stage('Checkov Scan') {
    steps {
        sh 'checkov -d .'
    }
}
    }
}
