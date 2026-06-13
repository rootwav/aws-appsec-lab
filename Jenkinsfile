pipeline {
    agent any

    stages {
        stage('List Files') {
            steps {
                sh 'pwd'
                sh 'ls -la'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t aws-appsec-lab:latest .'
            }
        }

        stage('Docker Test Run') {
            steps {
                sh 'docker rm -f aws-appsec-lab || true'
                sh 'docker run -d --name aws-appsec-lab -p 8081:80 aws-appsec-lab:latest'
                sh 'docker ps'
            }
        }
    }
}
