//@Library('piper-library-os') _

node() {

  stage('prepare') {

      //checkout scm

      //setupCommonPipelineEnvironment script:this

        //   checkChangeInDevelopment script: this,changeDocumentId:'8000004988'     
    
       }
 stage('build') {
      mtaBuild script: this
  }
  
  stage('neoDeploy') {
      // neoDeploy script: this
  }
  stage('solmanTrCreate') {
      //transportRequestCreate script:this, changeDocumentId:'8000004988',developmentSystemId: 'SM1~ABAP/001',applicationId: 'HCP'
  }
  stage('solmanTRrelease') {
      //transportRequestRelease  script:this, changeDocumentId:'8000004988',developmentSystemId: 'SM1~ABAP/001',applicationId: 'HCP'
  }
}
