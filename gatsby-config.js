/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [`gatsby-plugin-postcss`,
  {
    resolve: "gatsby-plugin-firebase",
    options: {
      features: {
        auth: false,
        database: true,
        firestore: false,
        storage: false,
        messaging: false,
        functions: false,
        performance: false,
        analytics: true
      },
      credentials: 
      {
        apiKey: "AIzaSyBs-99Y17_eYWbL16McC2fQJ7wH2YzeKXk",
        authDomain: "watchphile-e444e.firebaseapp.com",
        projectId: "watchphile-e444e",
        storageBucket: "watchphile-e444e.appspot.com",
        messagingSenderId: "768656358927",
        appId: "1:768656358927:web:45a575aa478d6e81b8ad7a",
        databaseURL: "https://watchphile-e444e-default-rtdb.europe-west1.firebasedatabase.app/",
        measurementId: "G-7N12008YRP"
      }
    }
  }
],
}
