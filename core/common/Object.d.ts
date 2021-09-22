import type * as Platform from '../platform/platform.js';
import type { EventDescriptor, EventTarget, EventTargetEvent, EventType, EventPayload, EventPayloadToRestParameters } from './EventTarget.js';
export interface ListenerCallbackTuple {
    thisObject?: Object;
    listener: (arg0: EventTargetEvent) => void;
    disposed?: boolean;
}
export declare class ObjectWrapper<Events = any> implements EventTarget<Events> {
    listeners?: Map<EventType<Events>, Set<ListenerCallbackTuple>>;
    addEventListener<T extends EventType<Events>>(eventType: T, listener: (arg0: EventTargetEvent<EventPayload<Events, T>>) => void, thisObject?: Object): EventDescriptor<Events, T>;
    once<T extends EventType<Events>>(eventType: T): Promise<EventPayload<Events, T>>;
    removeEventListener<T extends EventType<Events>>(eventType: T, listener: (arg0: EventTargetEvent<EventPayload<Events, T>>) => void, thisObject?: Object): void;
    hasEventListeners(eventType: EventType<Events>): boolean;
    dispatchEventToListeners<T extends EventType<Events>>(eventType: Platform.TypeScriptUtilities.NoUnion<T>, ...[eventData]: EventPayloadToRestParameters<EventPayload<Events, T>>): void;
}
declare type Constructor = new (...args: any[]) => {};
export declare function eventMixin<Events, Base extends Constructor>(base: Base): {
    new (...args: any[]): {
        "__#1@#events": ObjectWrapper<Events>;
        addEventListener<T extends EventType<Events>>(eventType: T, listener: (arg0: EventTargetEvent<EventPayload<Events, T>>) => void, thisObject?: Object | undefined): EventDescriptor<Events, T>;
        once<T_1 extends EventType<Events>>(eventType: T_1): Promise<EventPayload<Events, T_1>>;
        removeEventListener<T_2 extends EventType<Events>>(eventType: T_2, listener: (arg0: EventTargetEvent<EventPayload<Events, T_2>>) => void, thisObject?: Object | undefined): void;
        hasEventListeners(eventType: EventType<Events>): boolean;
        dispatchEventToListeners<T_3 extends EventType<Events>>(eventType: Platform.TypeScriptUtilities.NoUnion<T_3>, ...eventData: EventPayloadToRestParameters<EventPayload<Events, T_3>>): void;
    };
} & Base;
export {};
