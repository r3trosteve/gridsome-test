---
description: ''
sidebar: 'docs'
prev: '/docs/writing-content/'
next: '/docs/settings/'
---

# Hammer Cloud Builds

## About
The Hammer Cloud compilation tool provides a remote environment in which you can automatically build and deploy your Hammer projects to Forge.

This works particularly well when you are collaborating on Hammer projects and use Git for Version control. 

You should use the raw Hammer project - you shouldn't really commit your Hammer build directory into version control for the purposes of development, since it will just be rewritten locally.

Add the build directory to your `.gitignore` file.

```
// .gitignore

Build/
```

## Get Started
Using the Hammer cloud compiler is very simple.

Activate it in your `Site > Settings`

Decide whether to use it in conjunction with [Github sync](/docs/deployments/#github-sync) or [Drag and Drop](/docs/deployments/#drag--drop) deployment methods.

Don't use Hammer cloud if you are using the one-click deploy direct from the Hammer app. That said, it should still work - it will just run the compilation on the already compiled projects files which would be fine, but it's unnecessary work and delayed deployment time.

Also don't use it if you are just pushing your Build folder to your remote repository or uploading your Hammer build folder as an archive directly, again it will work, but it's unnecessary.