import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [
    // This work
    //ClientsModule.register([
    //  {
    //    name: 'HERO_PACKAGE',
    //    transport: Transport.GRPC,
    //    options: {
    //      package: ['location.v1'],
    //      protoPath: [
    //        join(__dirname, '..', 'protos/location/v1/location.proto'),
    //      ],
    //      loader: {
    //        includeDirs: [join(__dirname, '..', 'protos')],
    //      },
    //    },
    //  },
    //]),

    ClientsModule.register([
      {
        name: 'HERO_PACKAGE',
        transport: Transport.GRPC,
        options: {
          package: ['chorus.mdm.location.v1'],
          // protoPath: ['location/v1/location.proto'],
          protoPath: [
            join(
              __dirname,
              '..',
              'node_modules/@ocean-network-express/om-mdm-protobuf/location/v1/location.proto',
            ),
          ],
          loader: {
            includeDirs: [
              join(
                __dirname,
                '..',
                'node_modules/@ocean-network-express/om-mdm-protobuf',
              ),
            ],
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
