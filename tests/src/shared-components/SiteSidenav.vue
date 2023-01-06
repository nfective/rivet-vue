<script setup>
    import { useInclude, useMatch } from ':/composables/use-current.js'
    import RvtSidenav from '@/sidenav/RvtSidenav.vue'
    import RvtSidenavItem from '@/sidenav/RvtSidenavItem.vue'
    import RvtSidenavLink from '@/sidenav/RvtSidenavLink.vue'
</script>

<template>
    <div class="rvt-layout__sidebar [ rvt-p-top-xl rvt-p-lr-md rvt-p-right-none-md-up ]">
        <rvt-sidenav label="Documentation">
            <rvt-sidenav-item>
                <rvt-sidenav :toggleable=true :current="useMatch('/docs/pages/components')" uri="/docs/pages/components" label="Components">
                    <rvt-sidenav-item>
                        <rvt-sidenav-link :current="useMatch('/docs/pages/components/accordion/accordion')" uri="/docs/pages/components/accordion/accordion">Accordion</rvt-sidenav-link>
                    </rvt-sidenav-item>
                    <rvt-sidenav-item>
                        <rvt-sidenav-link :current="useMatch('/docs/pages/components/alert/alert')" uri="/docs/pages/components/alert/alert">Alert</rvt-sidenav-link>
                    </rvt-sidenav-item>
                    <rvt-sidenav-item>
                        <rvt-sidenav-link :current="useMatch('/docs/pages/components/avatar/avatar')" uri="/docs/pages/components/avatar/avatar">Avatar</rvt-sidenav-link>
                    </rvt-sidenav-item>
                    <rvt-sidenav-item>
                        <rvt-sidenav-link :current="useMatch('/docs/pages/components/badge/badge')" uri="/docs/pages/components/badge/badge">Badge</rvt-sidenav-link>
                    </rvt-sidenav-item>
                    <rvt-sidenav-item>
                        <rvt-sidenav-link :disabled=true :current="useMatch('/docs/pages/components/billboard/billboard')" uri="/docs/pages/components/billboard/billboard">Billboard</rvt-sidenav-link>
                    </rvt-sidenav-item>
                    <rvt-sidenav-item>
                        <rvt-sidenav-link :disabled=true :current="useMatch('/docs/pages/components/breadcrumb/breadcrumb')" uri="/docs/pages/components/breadcrumb/breadcrumb">Breadcrumbs</rvt-sidenav-link>
                    </rvt-sidenav-item>
                    <rvt-sidenav-item>
                        <rvt-sidenav-link :disabled=true :current="useMatch('/docs/pages/components/button/button')" uri="/docs/pages/components/button/button">Button</rvt-sidenav-link>
                    </rvt-sidenav-item>
                    <rvt-sidenav-item>
                        <rvt-sidenav-link :disabled=true :current="useMatch('/docs/pages/components/calendar-tile/calendar-tile')" uri="/docs/pages/components/calendar-tile/calendar-tile">Calendar tile</rvt-sidenav-link>
                    </rvt-sidenav-item>
                    <rvt-sidenav-item>
                        <rvt-sidenav-link :disabled=true :current="useMatch('/docs/pages/components/call-to-action/call-to-action')" uri="/docs/pages/components/call-to-action/call-to-action">Call to Action</rvt-sidenav-link>
                    </rvt-sidenav-item>
                    <rvt-sidenav-item>
                        <rvt-sidenav-link :disabled=true :current="useMatch('/docs/pages/components/card/card')" uri="/docs/pages/components/card/card">Card</rvt-sidenav-link>
                    </rvt-sidenav-item>
                    <rvt-sidenav-item>
                        <rvt-sidenav-link :disabled=true :current="useMatch('/docs/pages/components/checkbox/checkbox')" uri="/docs/pages/components/checkbox/checkbox">Checkbox</rvt-sidenav-link>
                    </rvt-sidenav-item>
                    <rvt-sidenav-item>
                        <rvt-sidenav-link :disabled=true :current="useMatch('/docs/pages/components/dialog/dialog')" uri="/docs/pages/components/dialog/dialog">Dialog</rvt-sidenav-link>
                    </rvt-sidenav-item>
                    <rvt-sidenav-item>
                        <rvt-sidenav-link :disabled=true :current="useMatch('/docs/pages/components/disclosure/disclosure')" uri="/docs/pages/components/disclosure/disclosure">Disclosure</rvt-sidenav-link>
                    </rvt-sidenav-item>
                    <rvt-sidenav-item>
                        <rvt-sidenav-link :current="useMatch('/docs/pages/components/dropdown/dropdown')" uri="/docs/pages/components/dropdown/dropdown">Dropdown</rvt-sidenav-link>
                    </rvt-sidenav-item>
                    <rvt-sidenav-item>
                        <rvt-sidenav-link :disabled=true :current="useMatch('/docs/pages/components/empty-state/empty-state')" uri="/docs/pages/components/empty-state/empty-state">Empty state</rvt-sidenav-link>
                    </rvt-sidenav-item>
                    <rvt-sidenav-item>
                        <rvt-sidenav-link :disabled=true :current="useMatch('/docs/pages/components/file-input/file-input')" uri="/docs/pages/components/file-input/file-input">File input</rvt-sidenav-link>
                    </rvt-sidenav-item>
                    <rvt-sidenav-item>
                        <rvt-sidenav-link :disabled=true :current="useMatch('/docs/pages/components/footer/footer')" uri="/docs/pages/components/footer/footer">Footer</rvt-sidenav-link>
                    </rvt-sidenav-item>
                    <rvt-sidenav-item>
                        <rvt-sidenav-link :disabled=true :current="useMatch('/docs/pages/components/grid/grid')" uri="/docs/pages/components/grid/grid">Grid</rvt-sidenav-link>
                    </rvt-sidenav-item>
                    <rvt-sidenav-item>
                        <rvt-sidenav-link :current="useMatch('/docs/pages/components/header/header')" uri="/docs/pages/components/header/header">Header</rvt-sidenav-link>
                    </rvt-sidenav-item>
                    <rvt-sidenav-item>
                        <rvt-sidenav-link :disabled=true :current="useMatch('/docs/pages/components/hero/hero')" uri="/docs/pages/components/hero/hero">Hero</rvt-sidenav-link>
                    </rvt-sidenav-item>
                    <rvt-sidenav-item>
                        <rvt-sidenav-link :current="useMatch('/docs/pages/components/input-group/input-group')" uri="/docs/pages/components/input-group/input-group">Input group</rvt-sidenav-link>
                    </rvt-sidenav-item>
                    <rvt-sidenav-item>
                        <rvt-sidenav-link :disabled=true :current="useMatch('/docs/pages/components/link-hub/link-hub')" uri="/docs/pages/components/link-hub/link-hub">Link hub</rvt-sidenav-link>
                    </rvt-sidenav-item>
                    <rvt-sidenav-item>
                        <rvt-sidenav-link :disabled=true :current="useMatch('/docs/pages/components/list/list')" uri="/docs/pages/components/list/list">List</rvt-sidenav-link>
                    </rvt-sidenav-item>
                    <rvt-sidenav-item>
                        <rvt-sidenav-link :disabled=true :current="useMatch('/docs/pages/components/loading-indicator/loading-indicator')" uri="/docs/pages/components/loading-indicator/loading-indicator">Loading indicator</rvt-sidenav-link>
                    </rvt-sidenav-item>
                    <rvt-sidenav-item>
                        <rvt-sidenav-link :disabled=true :current="useMatch('/docs/pages/components/pagination/pagination')" uri="/docs/pages/components/pagination/pagination">Pagination</rvt-sidenav-link>
                    </rvt-sidenav-item>
                    <rvt-sidenav-item>
                        <rvt-sidenav-link :disabled=true :current="useMatch('/docs/pages/components/quote/quote')" uri="/docs/pages/components/quote/quote">Quote</rvt-sidenav-link>
                    </rvt-sidenav-item>
                    <rvt-sidenav-item>
                        <rvt-sidenav-link :disabled=true :current="useMatch('/docs/pages/components/radio-input/radio-input')" uri="/docs/pages/components/radio-input/radio-input">Radio input</rvt-sidenav-link>
                    </rvt-sidenav-item>
                    <rvt-sidenav-item>
                        <rvt-sidenav-link :disabled=true :current="useMatch('/docs/pages/components/select-input/select-input')" uri="/docs/pages/components/select-input/select-input">Select input</rvt-sidenav-link>
                    </rvt-sidenav-item>
                    <rvt-sidenav-item>
                        <rvt-sidenav-link :disabled=true :current="useMatch('/docs/pages/components/series-nav/series-nav')" uri="/docs/pages/components/series-nav/series-nav">Series nav</rvt-sidenav-link>
                    </rvt-sidenav-item>
                    <rvt-sidenav-item>
                        <rvt-sidenav-link :current="useMatch('/docs/pages/components/sidenav/sidenav')" uri="/docs/pages/components/sidenav/sidenav">Sidenav</rvt-sidenav-link>
                    </rvt-sidenav-item>
                    <rvt-sidenav-item>
                        <rvt-sidenav-link :current="useMatch('/docs/pages/components/stat/stat')" uri="/docs/pages/components/stat/stat">Stat</rvt-sidenav-link>
                    </rvt-sidenav-item>
                    <rvt-sidenav-item>
                        <rvt-sidenav-link :disabled=true :current="useMatch('/docs/pages/components/step-indicator/step-indicator')" uri="/docs/pages/components/step-indicator/step-indicator">Step indicator</rvt-sidenav-link>
                    </rvt-sidenav-item>
                    <rvt-sidenav-item>
                        <rvt-sidenav-link :disabled=true :current="useMatch('/docs/pages/components/subnav/subnav')" uri="/docs/pages/components/subnav/subnav">Subnav</rvt-sidenav-link>
                    </rvt-sidenav-item>
                    <rvt-sidenav-item>
                        <rvt-sidenav-link :disabled=true :current="useMatch('/docs/pages/components/table/table')" uri="/docs/pages/components/table/table">Table</rvt-sidenav-link>
                    </rvt-sidenav-item>
                    <rvt-sidenav-item>
                        <rvt-sidenav-link :disabled=true :current="useMatch('/docs/pages/components/tab/tab')" uri="/docs/pages/components/tab/tab">Tab</rvt-sidenav-link>
                    </rvt-sidenav-item>
                    <rvt-sidenav-item>
                        <rvt-sidenav-link :current="useMatch('/docs/pages/components/text-input/text-input')" uri="/docs/pages/components/text-input/text-input">Text input</rvt-sidenav-link>
                    </rvt-sidenav-item>
                    <rvt-sidenav-item>
                        <rvt-sidenav-link :disabled=true :current="useMatch('/docs/pages/components/text-box/text-box')" uri="/docs/pages/components/text-box/text-box">Text box</rvt-sidenav-link>
                    </rvt-sidenav-item>
                    <rvt-sidenav-item>
                        <rvt-sidenav-link :disabled=true :current="useMatch('/docs/pages/components/timeline/timeline')" uri="/docs/pages/components/timeline/timeline">Timeline</rvt-sidenav-link>
                    </rvt-sidenav-item>
                </rvt-sidenav>
            </rvt-sidenav-item>
            <rvt-sidenav-item>
                <rvt-sidenav :toggleable=true :current="useMatch('/docs/pages/vue-additions')" uri="/docs/pages/vue-additions" label="Vue Additions">
                    <rvt-sidenav-item>
                        <rvt-sidenav-link :disabled=true uri="/docs/pages/vue-additions/calendar/calendar" text="Calendar"></rvt-sidenav-link>
                    </rvt-sidenav-item>
                    <rvt-sidenav-item>
                        <rvt-sidenav-link :disabled=true uri="/docs/pages/vue-additions/combobox/combobox" text="Combobox"></rvt-sidenav-link>
                    </rvt-sidenav-item>
                    <rvt-sidenav-item>
                        <rvt-sidenav-link :disabled=true uri="/docs/pages/vue-additions/data-table/data-table" text="Data Table"></rvt-sidenav-link>
                    </rvt-sidenav-item>
                    <rvt-sidenav-item>
                        <rvt-sidenav-link :disabled=true uri="/docs/pages/vue-additions/datetime-picker/datetime-picker" text="Datetime Picker"></rvt-sidenav-link>
                    </rvt-sidenav-item>
                    <rvt-sidenav-item>
                        <rvt-sidenav-link :disabled=true uri="/docs/pages/vue-additions/gauge/gauge" text="Gauage"></rvt-sidenav-link>
                    </rvt-sidenav-item>
                    <rvt-sidenav-item>
                        <rvt-sidenav-link :disabled=true uri="/docs/pages/vue-additions/indicator/indicator">Indicator</rvt-sidenav-link>
                    </rvt-sidenav-item>
                    <rvt-sidenav-item>
                        <rvt-sidenav-link :disabled=true uri="/docs/pages/vue-additions/datetime-input/datetime-input" text="Datetime Input"></rvt-sidenav-link>
                    </rvt-sidenav-item>
                    <rvt-sidenav-item>
                        <rvt-sidenav-link :disabled=true uri="/docs/pages/vue-additions/number-input/number-input" text="Number Input"></rvt-sidenav-link>
                    </rvt-sidenav-item>
                    <rvt-sidenav-item>
                        <rvt-sidenav-link :disabled=true uri="/docs/pages/vue-additions/notification-list/notification-list" text="Notification List"></rvt-sidenav-link>
                    </rvt-sidenav-item>
                    <rvt-sidenav-item>
                        <rvt-sidenav-link :disabled=true uri="/docs/pages/vue-additions/popper/popper" text="Popper"></rvt-sidenav-link>
                    </rvt-sidenav-item>
                    <rvt-sidenav-item>
                        <rvt-sidenav-link :disabled=true uri="/docs/pages/vue-additions/slider/slider" text="Slider"></rvt-sidenav-link>
                    </rvt-sidenav-item>
                    <rvt-sidenav-item>
                        <rvt-sidenav-link :disabled=true uri="/docs/pages/vue-additions/text-region/text-region" text="Text Region"></rvt-sidenav-link>
                    </rvt-sidenav-item>
                    <rvt-sidenav-item>
                        <rvt-sidenav-link :disabled=true uri="/docs/pages/vue-additions/tree/tree" text="Tree"></rvt-sidenav-link>
                    </rvt-sidenav-item>
                    <rvt-sidenav-item>
                        <rvt-sidenav-link :disabled=true uri="/docs/pages/vue-additions/type-ahead/type-ahead" text="Type Ahead"></rvt-sidenav-link>
                    </rvt-sidenav-item>
                </rvt-sidenav>
            </rvt-sidenav-item>
        </rvt-sidenav>

        <!-- Will throw an error
        <rvt-sidenav>
            <rvt-sidenav-item>
                <rvt-sidenav>
                    <rvt-sidenav-item>
                        <rvt-sidenav>
                            <rvt-sidenav-item>
                                <rvt-sidenav>
                                    <rvt-sidenav-item>
                                        <rvt-sidenav>
                                            <rvt-sidenav-item></rvt-sidenav-item>
                                        </rvt-sidenav>
                                    </rvt-sidenav-item>
                                </rvt-sidenav>
                            </rvt-sidenav-item>
                        </rvt-sidenav>
                    </rvt-sidenav-item>
                </rvt-sidenav>
            </rvt-sidenav-item>
        </rvt-sidenav>
        -->
    </div>
</template>