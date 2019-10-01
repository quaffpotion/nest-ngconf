import { Exclude } from 'class-transformer';
import {
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsBoolean
} from 'class-validator';
import { Mission } from '../../../shared/models/mission.model';

export class MissionEntity {
  id?: number;

  @IsDefined()
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsDefined()
  @IsNumber()
  reward: number;

  @IsDefined()
  @IsBoolean()
  active: boolean;

  @Exclude()
  createdAt: Date = new Date();
  //We no longer exclude this field because we want to
  //be able to see the affect of including the user data
  //with the request from the client
  //@Exclude()
  createdBy = 'user';
}
