pipeline {
    agent { docker { image 'node:11.5' } }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
            }
        }
    }
}