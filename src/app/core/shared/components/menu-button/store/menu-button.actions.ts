export enum Types {
  TURN_ON = '[Menu Button] TURN ON',
  TURN_OFF = '[Menu Button] TURN OFF'
 }

interface TurnOn {
  type: typeof Types.TURN_ON;
}

interface TurnOff {
  type: typeof Types.TURN_OFF;
}

export function turnOff(): TurnOff {
  return { type: Types.TURN_OFF };
}

export function turnOn(): TurnOn {
  return { type: Types.TURN_ON };
}

export type Actions
 = TurnOn
 | TurnOff;
