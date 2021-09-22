import * as Common from '../../core/common/common.js';
import * as Platform from '../../core/platform/platform.js';
import * as SDK from '../../core/sdk/sdk.js';
import * as DataGrid from '../../ui/legacy/components/data_grid/data_grid.js';
import * as Components from '../../ui/legacy/components/utils/utils.js';
import * as UI from '../../ui/legacy/legacy.js';
import type * as Protocol from '../../generated/protocol.js';
import type { OverviewController } from './CSSOverviewController.js';
import type { UnusedDeclaration } from './CSSOverviewUnusedDeclarations.js';
export declare type NodeStyleStats = Map<string, Set<number>>;
export interface ContrastIssue {
    nodeId: number;
    contrastRatio: number;
    textColor: Common.Color.Color;
    backgroundColor: Common.Color.Color;
    thresholdsViolated: {
        aa: boolean;
        aaa: boolean;
        apca: boolean;
    };
}
export interface OverviewData {
    backgroundColors: Map<string, Set<number>>;
    textColors: Map<string, Set<number>>;
    textColorContrastIssues: Map<string, ContrastIssue[]>;
    fillColors: Map<string, Set<number>>;
    borderColors: Map<string, Set<number>>;
    globalStyleStats: {
        styleRules: number;
        inlineStyles: number;
        externalSheets: number;
        stats: {
            type: number;
            class: number;
            id: number;
            universal: number;
            attribute: number;
            nonSimple: number;
        };
    };
    fontInfo: Map<string, Map<string, Map<string, number[]>>>;
    elementCount: number;
    mediaQueries: Map<string, Protocol.CSS.CSSMedia[]>;
    unusedDeclarations: Map<string, UnusedDeclaration[]>;
}
export declare type FontInfo = Map<string, Map<string, Map<string, number[]>>>;
export declare class CSSOverviewCompletedView extends UI.Panel.PanelWithSidebar {
    private controller;
    private formatter;
    private readonly mainContainer;
    private readonly resultsContainer;
    private readonly elementContainer;
    private readonly sideBar;
    private cssModel;
    private domModel;
    private readonly domAgent;
    private linkifier;
    private viewMap;
    private data;
    private fragment?;
    constructor(controller: OverviewController, target: SDK.Target.Target);
    wasShown(): void;
    private sideBarItemSelected;
    private sideBarReset;
    private reset;
    private onClick;
    private onMouseOver;
    private render;
    private createElementsView;
    private fontInfoToFragment;
    private fontMetricsToFragment;
    private groupToFragment;
    private contrastIssuesToFragment;
    private contrastIssueToFragment;
    private colorsToFragment;
    private sortColorsByLuminance;
    setOverviewData(data: OverviewData): void;
    static readonly pushedNodes: Set<Protocol.DOM.BackendNodeId>;
}
declare const DetailsView_base: (new (...args: any[]) => {
    "__#1@#events": Common.ObjectWrapper.ObjectWrapper<EventTypes>;
    addEventListener<T extends Events.TabClosed>(eventType: T, listener: (arg0: Common.EventTarget.EventTargetEvent<Common.EventTarget.EventPayload<EventTypes, T>>) => void, thisObject?: Object | undefined): Common.EventTarget.EventDescriptor<EventTypes, T>;
    once<T_1 extends Events.TabClosed>(eventType: T_1): Promise<Common.EventTarget.EventPayload<EventTypes, T_1>>;
    removeEventListener<T_2 extends Events.TabClosed>(eventType: T_2, listener: (arg0: Common.EventTarget.EventTargetEvent<Common.EventTarget.EventPayload<EventTypes, T_2>>) => void, thisObject?: Object | undefined): void;
    hasEventListeners(eventType: Events.TabClosed): boolean;
    dispatchEventToListeners<T_3 extends Events.TabClosed>(eventType: Platform.TypeScriptUtilities.NoUnion<T_3>, ...eventData: Common.EventTarget.EventPayloadToRestParameters<Common.EventTarget.EventPayload<EventTypes, T_3>>): void;
}) & typeof UI.Widget.VBox;
export declare class DetailsView extends DetailsView_base {
    private tabbedPane;
    constructor();
    appendTab(id: string, tabTitle: string, view: UI.Widget.Widget, isCloseable?: boolean): void;
    closeTabs(): void;
}
export declare const enum Events {
    TabClosed = "TabClosed"
}
export declare type EventTypes = {
    [Events.TabClosed]: number;
};
export declare class ElementDetailsView extends UI.Widget.Widget {
    private readonly controller;
    private domModel;
    private readonly cssModel;
    private readonly linkifier;
    private readonly elementGridColumns;
    private elementGrid;
    constructor(controller: OverviewController, domModel: SDK.DOMModel.DOMModel, cssModel: SDK.CSSModel.CSSModel, linkifier: Components.Linkifier.Linkifier);
    private sortMediaQueryDataGrid;
    private onMouseOver;
    populateNodes(data: {
        nodeId: Protocol.DOM.BackendNodeId;
        hasChildren: boolean;
        [x: string]: unknown;
    }[]): Promise<void>;
}
export declare class ElementNode extends DataGrid.SortableDataGrid.SortableDataGridNode<ElementNode> {
    private readonly linkifier;
    private readonly cssModel;
    constructor(data: {
        hasChildren: boolean;
        [x: string]: unknown;
    }, linkifier: Components.Linkifier.Linkifier, cssModel: SDK.CSSModel.CSSModel);
    createCell(columnId: string): HTMLElement;
    private linkifyRuleLocation;
}
export {};
