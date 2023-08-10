pipeline {
  agent any
  stages {
    stage('check') {
      steps {
        git(url: 'https://github.com/corgan0746/React-testing-jest', branch: 'master')
      }
    }

    stage('log message') {
      steps {
        sh 'ls -ls'
      }
    }

  }
}