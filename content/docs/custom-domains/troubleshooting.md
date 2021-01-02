---
description: ''
sidebar: 'docs'
prev: '/docs/custom-domains/'
next: '/docs/custom-domains/troubleshooting/'
---

# Troubleshooting

## Can't change the site name

Forge has an internal DNS checker, which verifies that your domain is pointing to the correct IP address. The domain checker is based in the US, so you many find that the DNS has propagated in your area, but not in the US zone where Forge is checking. 

If that's the case, you may just need to wait a little while longer, but it should happen soon enough.