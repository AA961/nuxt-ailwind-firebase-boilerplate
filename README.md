# Nuxt.js Starter Template with Firebase, Tailwind CSS, Pinia, ESLint, and Nuxt Icons

This is a starter template for building web applications using Nuxt.js with Firebase integration for authentication and real-time database, Tailwind CSS for styling, Pinia for state management, ESLint for code linting, and Nuxt Icons for easy integration of SVG icons.

## Getting Started

Follow these steps to get started with this template:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/AA961/nuxt-ailwind-firebase-boilerplate.git
   cd nuxt-ailwind-firebase-boilerplate
   npm install 

## Setting Up Firebase

To configure Firebase for your project, follow these steps:

1. **Create a `.env` File:**

   Create a `.env` file in the project root directory if it doesn't already exist.

2. **Add Firebase Configuration:**

   In the `.env` file, add the following Firebase configuration parameters and replace each placeholder (`your-api-key`, `your-auth-domain`, etc.) with your actual Firebase configuration values:

   ```env
   FIREBASE_API_KEY=your-api-key
   FIREBASE_AUTH_DOMAIN=your-auth-domain
   FIREBASE_PROJECT_ID=your-project-id
   FIREBASE_STORAGE_BUCKET=your-storage-bucket
   FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
   FIREBASE_APP_ID=your-app-id


### Below is an example of how your  `nuxt.config.js` file look like:

   ```javascript
   // nuxt.config.js
   import { defineNuxtConfig } from 'nuxt3';

   export default defineNuxtConfig({
   devtools: { enabled: true },
   modules: [
      'nuxt-vuefire',
      '@pinia/nuxt',
      '@nuxtjs/tailwindcss',
      'nuxt-icon',
      '@nuxtjs/eslint-module',
   ],
   vuefire: {
      auth: {
         enabled: true,
      },
      config: {
         // Your Firebase config goes here
         apiKey: process.env.FIREBASE_API_KEY,
         authDomain: process.env.FIREBASE_AUTH_DOMAIN,
         projectId: process.env.FIREBASE_PROJECT_ID,
         storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
         messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
         appId: process.env.FIREBASE_APP_ID,
      },
   },
   });


   ```


### Server-Side Rendering (SSR) with Firebase Authentication

To enable Server-Side Rendering (SSR) for your Nuxt.js project with Firebase Authentication, follow these steps:

1. **Download `service_account.json`**:

   - Go to the [Firebase Console](https://console.firebase.google.com/).
   - Navigate to your Firebase project.
   - In the project settings, locate the "Service accounts" section.
   - Click on "Generate new private key" to download the `service_account.json` file.

2. **Place `service_account.json` in Your Project Directory**:

   - After downloading, move the `service_account.json` file into your project directory.

3. **Update `.env`**:

   - In your `.env` file, add the following line to specify the path to the `service_account.json` file:

   ```env
    GOOGLE_APPLICATION_CREDENTIALS=service_account.json
    
    ```




### Run the Development Server

To start the development server and run your Nuxt.js application, use the following command in your project directory:

```bash
npm run dev

```

### Using Icons

In this project, we make it easy to add icons to your components using the `<Icon />` component. Follow these steps to include icons in your project:

1. **Select an Icon:**
   
   Choose an icon name from the [Icones.js library](https://icones.js.org/). They offer a wide selection of icons for various purposes.

2. **Add the Icon Component:**

   In your Vue component, use the `<Icon />` component like this:

   ```html
   <Icon name="uil:github" size="24" color="black" />

   ```


Replace "uil:github" with your chosen icon name. Adjust the size and color attributes as needed.

### Install the Iconify Extension (VS Code):

To simplify the process of finding and inserting icons, we recommend installing the "Iconify" extension in Visual Studio Code. It provides autocompletion and previews for icons, making it easier to work with them.

With these instructions, you can easily incorporate icons from the Icones.js library into your components. Enjoy enhancing your project with beautiful and functional icons!


Open your web browser and visit [http://127.0.0.1:3000/](http://127.0.0.1:3000/) to see your app in action.

## Project Structure

The project structure follows Nuxt.js conventions with some additional directories:

- `assets`: Static assets like images and fonts.
- `components`: Reusable Vue components.
- `layouts`: Layout components for pages.
- `middleware`: Custom middleware functions.
- `pages`: Application pages.
- `plugins`: Nuxt.js plugins.
- `store`: Store modules managed by Pinia.
- `styles`: Global CSS styles.
- `utils`: Utility functions.
- `firebase`: Firebase configuration and services.
- `static`: Static files (publicly accessible).

## Customization

Feel free to customize and extend this starter template according to your project requirements. You can add more Vue components, pages, and modify the styles as needed.

## Contributing

If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This starter template is open-source and available under the MIT License.
