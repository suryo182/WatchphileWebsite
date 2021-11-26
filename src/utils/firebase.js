let dbModule
let db

export function getDbModuleAndDb()  {

if (db) {
    return Promise.resolve([dbModule, db])
}

const lazyApp = import('firebase/app')
const lazyDatabase = import('firebase/database')
const lazyAnalytic = import('firebase/analytics')
  
   return Promise.all([lazyApp, lazyDatabase, lazyAnalytic]).then(([firebase, _dbModule, _analytic]) => {
     dbModule = _dbModule

      const config = {
        apiKey: "AIzaSyBs-99Y17_eYWbL16McC2fQJ7wH2YzeKXk",
        authDomain: "watchphile-e444e.firebaseapp.com",
        projectId: "watchphile-e444e",
        storageBucket: "watchphile-e444e.appspot.com",
        messagingSenderId: "768656358927",
        appId: "1:768656358927:web:45a575aa478d6e81b8ad7a",
        databaseURL: "https://watchphile-e444e-default-rtdb.europe-west1.firebasedatabase.app/",
        measurementId: "G-7N12008YRP"
      }
  
      firebase.initializeApp(config)

      _analytic.getAnalytics()
    
      db = _dbModule.getDatabase()

      return [dbModule, db]
    })
  }