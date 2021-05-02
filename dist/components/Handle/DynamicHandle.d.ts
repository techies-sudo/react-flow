import React from 'react';
import { Connection, ElementId, Position, OnConnectFunc } from '../../types';
export interface DynamicHandleProps {
    position: Position;
    isConnectable?: boolean;
    onConnect?: OnConnectFunc;
    isValidConnection?: (connection: Connection) => boolean;
    id?: ElementId;
}
declare const _default: React.NamedExoticComponent<DynamicHandleProps & Omit<React.HTMLAttributes<HTMLDivElement>, "id">>;
export default _default;
