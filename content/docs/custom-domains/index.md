---
description: ''
sidebar: 'docs'
prev: '/docs/deployments/troubleshooting/'
next: '/docs/custom-domains/troubleshooting/'
---

# Custom Domains

## Setup

Setting up a Forge Custom domain is a very simple process. Whilst the specific DNS administration will differ from provider to provider, the general flow is the same.

1. Create an A Record for your domain pointing to the Forge static IP address. Currently this is `107.20.213.245`
2. Wait for the DNS to propagate fully. Forge's IP checker will also check that it is propagated before you can complete the next step.
3. Head into your Forge site setting and rename your site

## Tutorial