import ProForm, { ProFormText, ProFormDateRangePicker, ProFormSelect } from '@ant-design/pro-form';

import { ProFormSettings } from '@ant-design/pro-settings';

import { Builder, BuilderComponent, builder, withChildren } from '@builder.io/react';

builder.init('e9ada5daeb6a4627bc2560d29916c080');

Builder.register('editor.settings', {
  hideStyleTab: true, // Hide the style tab
  hideMainTabs: true, // Hide all main tabs
  hideDataTab: true, // Hide the data tab
  hideOptionsTab: true, // Hide the options tab
  hideToolbar: true, // Hide the main toolbar
  hideHeatMap: true, // Hide the heatmap button
  hidePageUrlEditor: false, // Hide the page URL editor
  hideAnimateTab: true, // Hide the animate tab
  hideInsertTab: false, // Hide the insert tab
  hideTargeting: false, // Hide the targeting UI
});

Builder.registerComponent(withChildren(ProForm), ProFormSettings);

export default () => <BuilderComponent />;
