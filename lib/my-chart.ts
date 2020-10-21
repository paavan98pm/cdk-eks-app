import { Construct } from 'constructs';
import { Chart } from 'cdk8s';
//import { Deployment, IntOrString, Service } from './imports/k8s';
import * as kplus from 'cdk8s-plus';

export class MyChart extends Chart {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    // define resources here

    const deploy = new kplus.Deployment(this, 'deployment', {
      containers: [
        new kplus.Container({
          image: 'stefanprodan/podinfo',
          port: 9898
        })
      ]
    });

    deploy.expose(80, {
      serviceType: kplus.ServiceType.LOAD_BALANCER,
    });
//    const label = { app: 'podinfo'}
//
//    new Service(this, 'service', {
//      spec: {
//        type: 'LoadBalancer',
//        ports: [ {port: 80, targetPort: IntOrString.fromNumber(9898)}],
//        selector: label
//      }
//    });
//
//    new Deployment(this, 'deployment', {
//      spec: {
//        selector: {
//          matchLabels: label
//        },
//        replicas: 3,
//        template: {
//          metadata: {
//            labels: label
//          },
//          spec: {
//            containers: [
//              {
//                name: 'hello',
//                image: 'stefanprodan/podinfo',
//                ports: [
//                  { containerPort: 9898 }
//                ]
//              }
//            ]           
//          }
//        }
//      }     
//    });

  }
}