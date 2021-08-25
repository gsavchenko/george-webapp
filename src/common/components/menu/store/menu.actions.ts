export enum Types {
  OPEN = '[Side Navbar] OPEN',
  CLOSE = '[Side Navbar] CLOSE'
}

interface Open {
  type: typeof Types.OPEN;
}

interface Close {
  type: typeof Types.CLOSE;
}

export function open(): Open {
  return { type: Types.OPEN };
}

export function close(): Close {
  return { type: Types.CLOSE };
}

export type Actions
= Open
| Close;
