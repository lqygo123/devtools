Root.allDescriptors.push(...[{ "dependencies": ["ui/legacy", "panels/emulation"], "name": "panels/screencast" }]);
Root.applicationDescriptor.modules.push(...[{ "name": "panels/screencast", "type": "autostart" }]);
import * as RootModule from '../../core/root/root.js';
import '../devtools_app/devtools_app.js';
import '../../panels/screencast/screencast-meta.js';
import * as Startup from '../startup/startup.js';
Startup.RuntimeInstantiator.startApplication('inspector');