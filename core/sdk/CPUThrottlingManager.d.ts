import * as Common from '../../core/common/common.js';
import { EmulationModel } from './EmulationModel.js';
import type { SDKModelObserver } from './TargetManager.js';
export declare class CPUThrottlingManager extends Common.ObjectWrapper.ObjectWrapper<EventTypes> implements SDKModelObserver<EmulationModel> {
    private cpuThrottlingRateInternal;
    private constructor();
    static instance(opts?: {
        forceNew: boolean | null;
    }): CPUThrottlingManager;
    cpuThrottlingRate(): number;
    setCPUThrottlingRate(rate: number): void;
    modelAdded(emulationModel: EmulationModel): void;
    modelRemoved(_emulationModel: EmulationModel): void;
}
export declare enum Events {
    RateChanged = "RateChanged"
}
export declare type EventTypes = {
    [Events.RateChanged]: number;
};
export declare function throttlingManager(): CPUThrottlingManager;
export declare enum CPUThrottlingRates {
    NoThrottling = 1,
    MidTierMobile = 4,
    LowEndMobile = 6
}