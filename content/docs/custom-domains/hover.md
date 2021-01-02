---
description: ''
sidebar: 'docs'
prev: '/docs/deployments/troubleshooting/'
next: '/docs/custom-domains/troubleshooting/'
---

# Setup with Hover

1. Go ahead and login to your Hover dashboard. You'll see something like this. Click the link of your Domain you want to use.

2. There's a lot of information here about your domain. Look for the DNS tab and click it.

3. Here's where we adjust your settings. Click Add New to expand the DNS options area.

4. But first, you need to grab the IP address from Forge. Head back to Forge and note the IP address marked in green. Important to get this right, so do it carefully.

5. Finally, make your Hover settings look like this. The @ line should point to the IP address you just noted down, with an A Record. Hit Save. This can be a bit confusing, but don't worry. The @ is your root domain, e.g. http://yoursite.com