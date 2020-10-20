#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkEksAppStack } from '../lib/cdk-eks-app-stack';

const app = new cdk.App();
new CdkEksAppStack(app, 'CdkEksAppStack');
