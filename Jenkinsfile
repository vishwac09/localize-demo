pipeline {
  agent any
  options {
    disableConcurrentBuilds()
  }
  triggers {
        pollSCM '* * * * *'
  }
  stages {
      stage('Build Development') {
        when {
          expression {
            GIT_BRANCH=='origin/master'
          }
        }
        steps {
          echo 'Building..'
          sh 'env'
          sh '''
          echo env
            yarn install;
            yarn build:dev;
          '''
          }
        post {
          success {
            sendNotifications("SUCCESS","","React Development Build")
          }
          failure {
            sendNotifications("ERROR","","React Development Build")
          }
        }
      }
  }
}
