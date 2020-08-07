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
          sh 'yarn config delete proxy;'
          sh 'env'
          sh '''
          echo env
            yarn install;
            yarn build:dev;
          '''
          }
        post {
          success {
            echo "Done building";
          }
          failure {
            echo "Failed Building building";
          }
        }
      }
  }
}
