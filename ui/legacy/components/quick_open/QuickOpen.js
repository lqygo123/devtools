// Copyright 2016 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import * as i18n from '../../../../core/i18n/i18n.js';
import { FilteredListWidget, getRegisteredProviders } from './FilteredListWidget.js';
const UIStrings = {
    /**
    * @description Text of the hint shows under Quick Open input box
    */
    useTabToSwitchCommandsTypeToSeeAvailableCommands: 'Use Tab to switch commands. Type \'?\' to see available commands',
};
const str_ = i18n.i18n.registerUIStrings('ui/legacy/components/quick_open/QuickOpen.ts', UIStrings);
const i18nString = i18n.i18n.getLocalizedString.bind(undefined, str_);
export const history = [];
export class QuickOpenImpl {
    prefix;
    query;
    providers;
    prefixes;
    filteredListWidget;
    constructor() {
        this.prefix = null;
        this.query = '';
        this.providers = new Map();
        this.prefixes = [];
        this.filteredListWidget = null;
        getRegisteredProviders().forEach(this.addProvider.bind(this));
        this.prefixes.sort((a, b) => b.length - a.length);
    }
    static show(query) {
        const quickOpen = new this();
        const filteredListWidget = new FilteredListWidget(null, history, quickOpen.queryChanged.bind(quickOpen));
        quickOpen.filteredListWidget = filteredListWidget;
        filteredListWidget.setHintElement(i18nString(UIStrings.useTabToSwitchCommandsTypeToSeeAvailableCommands));
        filteredListWidget.showAsDialog();
        filteredListWidget.setQuery(query);
    }
    addProvider(extension) {
        const prefix = extension.prefix;
        if (prefix === null) {
            return;
        }
        this.prefixes.push(prefix);
        this.providers.set(prefix, extension.provider);
    }
    queryChanged(query) {
        const prefix = this.prefixes.find(prefix => query.startsWith(prefix));
        if (typeof prefix !== 'string' || this.prefix === prefix) {
            return;
        }
        this.prefix = prefix;
        if (!this.filteredListWidget) {
            return;
        }
        this.filteredListWidget.setPrefix(prefix);
        this.filteredListWidget.setProvider(null);
        const providerFunction = this.providers.get(prefix);
        if (!providerFunction) {
            return;
        }
        providerFunction().then(provider => {
            if (this.prefix !== prefix || !this.filteredListWidget) {
                return;
            }
            this.filteredListWidget.setProvider(provider);
            this.providerLoadedForTest(provider);
        });
    }
    providerLoadedForTest(_provider) {
    }
}
let showActionDelegateInstance;
export class ShowActionDelegate {
    static instance(opts = { forceNew: null }) {
        const { forceNew } = opts;
        if (!showActionDelegateInstance || forceNew) {
            showActionDelegateInstance = new ShowActionDelegate();
        }
        return showActionDelegateInstance;
    }
    handleAction(context, actionId) {
        switch (actionId) {
            case 'quickOpen.show':
                QuickOpenImpl.show('');
                return true;
        }
        return false;
    }
}
//# sourceMappingURL=QuickOpen.js.map