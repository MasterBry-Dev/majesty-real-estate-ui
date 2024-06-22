# FILES TO CHANGE / MODIFY TO USE GITHUB PAGES PROPERLY


# PACKAGE JSON -- 
`"version": "0.1.0",`
                     --username----            ------repo name------
`"homepage": "https://masterbry-dev.github.io/majesty-real-estate-ui/"`,
       
# PACKAGE JSON - scripts 
`"build": "vite build --base=./",`
`"serve": "vite preview ",`
`"predeploy": "npm run build",`
`"deploy": "gh-pages -d dist"`


# VITE CONFIG               
`base: '/majesty-real-estate-ui/' `, - change `'/majesty-real-estate-ui/'` to repo name (if using other repo or changed repo name)


# ROUTES AND NAVIGATION
add /repoName/ to routes and navlinks to have proper navigations

 
### `npm install gh-pages --save-dev`
install github pages

### `npm run build`
 builds the app for production to the `dist` folder

### `npm run deploy`
-- to deploy build files into github pages
    