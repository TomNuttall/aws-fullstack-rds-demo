# Infastructure

## Overview

- CloudFormation: Used to deploy infastructure on AWS.
- GitHub action: deploy.yml runs on change to app folder. Builds + tests app and creates CodeDeploy deployment from S3.

Note: App Load Balancer and NAT Gateways have promisioned hourly costs even when idle

### EC2 key pair

Create (not needed if using console to connect)

```
aws ec2 create-key-pair \
    --key-name keyname \
    --key-type rsa \
    --key-format pem \
    --query "KeyMaterial" \
    --output text > keyname.pem
```

## Architecture Diagram

Backend

<img
  src='../diagrams/backend_diagram.png'
  raw=true
  alt='AWS Backend Architecture Diagram'
  width="100%"
  height="auto"
/>

Frontend

<img
  src='../diagrams/frontend_diagram.png'
  raw=true
  alt='AWS Frontend Architecture Diagram'
  width="100%"
  height="auto"
/>
