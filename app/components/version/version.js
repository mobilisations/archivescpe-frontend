'use strict';

angular.module('archivesCPEApp.version', [
  'archivesCPEApp.version.interpolate-filter',
  'archivesCPEApp.version.version-directive'
])

.value('version', '0.1');
