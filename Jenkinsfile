pipeline {
  agent any
  stages {
    stage('check') {
      steps {
        git(url: 'https://github.com/corgan0746/React-testing-jest', branch: 'master')
      }
    }

    stage('log') {
      parallel {
        stage('log') {
          steps {
            sh 'ls -a'
          }
        }

        stage('install') {
          steps {
            sh 'npm update && npm run test -a'
          }
        }

      }
    }

  }
}