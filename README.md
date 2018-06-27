# Rails React Devise Bootstrap

The aim of this repository is provide a Ruby On Rails and [React](https://reactjs.org)
skeleton app, including [Devise](https://github.com/plataformatec/devise) and
[Bootstrap](http://getbootstrap.com), which should allow you to boostrap a new
app quickly.

All the Devise views have been re-written in React.

# Usage

Fork it, rename it, build your app. 💪

1. Click the 'Fork' button
2. Checkout the created repo on your machine and cd to the project's directory
3. Add an `upstream` remote to this repo : `git add remote upstream git@gitlab.com:zedtux/rails5-react-devise-bootstrap.git`
4. Rename the app from `config/application.rb` and change the title
   from `app/views/layouts/application.html.erb`
5. Use your local Ruby, Bundler and Yarn or the Dockerfile in order to prepare
   your development environment
6. Start the web server and go to http://localhost:3000/

## Why should I fork it ?

With this project forked, and a git remote to this project, you will be able to
fetch the updates and keep an up-to-date version of the stack.

When Rails, React, Devise or Bootstrap is updated, you could update your project
following those instructions :

```
$ git checkout master
$ git checkout -b tasks/update-base-stack
$ git fetch upstream
$ git merge upstream/master
```

From now on, this new branch `tasks/update-base-stack` has the updated stack as
if you just forked it and added your app in it.

Run your tests and if all is fine, merge it to `master` 🎉

# Stack

Here is the project stack :

 * Rails 5 (5.1.5)
 * React 16 (16.2.0) via webpacker
 * Redux (5.0.7)
 * Devise 4 (4.4.3)
 * Boostrap 4 (4.0.0)

# Architecture

This app using the standard Rails way to implement React.

The entrypoint to the React application is at `app/javascript/packs/application.js`.

Then you'll find a standard React redux structure in the `app/javascript/`
folder, with a Router in the `components/AppRouter.js` file.

Also you will find all the Devise views re-written in React in the
`app/javascript/views/devise` folder.

# TODO

 - [ ] Find a bot to update project's dependencies
 - [ ] Add automated tests
