---
description: ''
sidebar: 'docs'
prev: '/docs/deployments/troubleshooting/'
next: '/docs/custom-domains/troubleshooting/'
---

# Setup with Namecheap

1. Go ahead and login to your Namecheap dashboard. You'll see something like this. Click the link to your Domains. 

![Namecheap Dashboard](https://s3.amazonaws.com/forge-documentation/nc-1.png)

2. Now select the Domain that you want to setup. Click the Domain link. 

![Namecheap Dashboard](https://s3.amazonaws.com/forge-documentation/nc-2.png)

3. This is all of your Domain's configuration options. A bit scary, but don't panic. Find Host Management section in the left hand side navigation. Click on All Host Records. 

![Namecheap Dashboard](https://s3.amazonaws.com/forge-documentation/nc-3.png)

4. You'll now see a page that looks like this. Take a look at the area I've highlighted in green. This is what you need to adjust. 

![Namecheap Dashboard](https://s3.amazonaws.com/forge-documentation/nc-4.png)

5. But first, you need to grab the IP address from Forge. Head back to Forge and note the IP address marked in green. Important to get this right, so do it carefully. 

![Namecheap Dashboard](https://s3.amazonaws.com/forge-documentation/nc-5.png)

6. Finally, make your Namecheap settings look like this. The @ line should point to the IP address you just noted down, with an A Record. The www line should redirect to your root url.