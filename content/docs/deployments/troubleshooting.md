---
description: ''
sidebar: 'docs'
prev: '/docs/deployments/'
next: '/docs/forge-server/'
---

# Troubleshooting Deployments

## Not Visible
Your site has deployed successfully, but you can't see it in the preview.

If you're a Windows user it maybe because of how Windows archiving tools work differently to Mac.

Windows archives folders in a structure like this:

```
Archive Folder
    >> Project Folder
        >> index.html
```
Compared to Mac archives

```
Project Folder
    >> index.html
```

Therefore, your `index.html` ends up nested too deeply and Forge won't recognise your new index.html page. This is a quick and easy fix to a common problem.

Instead of Zipping the parent folder of your project, select all of the contents and zip that.

Then simply re-upload your archive.

## No index.html
You may decide that your website main page is called home.html or something similar. That won't fly on Forge. You need an index.html in the root of your project folder. Be as creative as you like with other pages.

The Forge Console should give you a warning if it finds that you've omitted an index.html file.

## Using .htm Files
Forge should work fine with `.htm` files, BUT your project must have an index.html file in the root of your project.

## Stuck or Failed Deployment
The Forge service does a lot of work behind the scenes to get your site ready for deployment. Sometimes it may fail to complete the task.

Often the best thing to do is simply try the deployment again in exactly the same way.

If you get persistent errors, consult the very useful Forge Deployment Console and check out what it's telling you.

## Archive Type
Trying to Upload `.rar` or other compressed file format? Forge only supports uploads of `.ZIP` file format, other formats will not be recognised.