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

    stage('Build') {
      steps {
        sh 'docker build -f Dockerfile .'
      }
    }

    stage('Login to DockerHub') {
      environment {
        DOCKER_USER = 'corgan0746'
        DOCKER_PASSWORD = 'Kodomonojikan76!'
      }
      steps {
        sh 'docker login -u $DOCKER_USER -p $DOCKER_PASSWORD'
      }
    }

  }
}