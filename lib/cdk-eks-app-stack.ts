import * as cdk from '@aws-cdk/core';
import * as eks from '@aws-cdk/aws-eks';

export class CdkEksAppStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const cluster = new eks.Cluster(this, 'cdk-eks-cluster', {
      version: eks.KubernetesVersion.V1_18,
    });
  }
}
